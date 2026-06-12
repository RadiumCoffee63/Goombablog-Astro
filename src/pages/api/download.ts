import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async ({ url }) => {
  // 获取查询参数中的文件路径
  const filepath = url.searchParams.get('path');
  
  if (!filepath) {
    return new Response('Missing path parameter', { status: 400 });
  }

  // 安全检查：防止路径遍历攻击
  // 从 src/pages/api/download.ts 到项目根需要向上3级: ../../..
  const __dirname = new URL('.', import.meta.url).pathname;
  const projectRoot = path.resolve(__dirname, '../../..');
  const downloadsDir = path.join(projectRoot, 'public', 'downloads');
  const fullPath = path.resolve(downloadsDir, filepath);

  // 调试日志
  console.log('[Download API Debug]', {
    __dirname,
    projectRoot,
    downloadsDir,
    filepath,
    fullPath,
    fileExists: fs.existsSync(fullPath),
  });

  // 确保文件在 downloads 目录内
  if (!fullPath.startsWith(downloadsDir)) {
    return new Response('Access denied', { status: 403 });
  }

  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    return new Response('File not found', { status: 404 });
  }

  // 检查是否是文件而不是目录
  const stat = fs.statSync(fullPath);
  if (!stat.isFile()) {
    return new Response('Not a file', { status: 400 });
  }

  // 读取文件
  const fileBuffer = fs.readFileSync(fullPath);
  const filename = path.basename(fullPath);

  // 设置响应头，使用 RFC 5987 编码处理特殊字符
  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
      'Content-Length': stat.size.toString(),
    },
  });
};
