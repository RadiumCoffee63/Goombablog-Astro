function initLive2DWidget() {
  if (window.Live2DWidgetInitialized) return;

  // 基础目录路径
  const LocalPatch = '/live2d_widget_v3';
  
  // 看板娘参数配置文件
  const config = {
    path: {
      homePath: '/',                                     // 网站主页路径
      modelPath: LocalPatch + "/Resources/",             // 模型与 model_list.json 所在的父级目录
      cssPath: LocalPatch + "/waifu.css",                 // 看板娘画布与控制面板 CSS 样式表
      tipsJsonPath: LocalPatch + "/waifu-tips.json",     // 文本提示语 JSON
      tipsJsPath: LocalPatch + "/waifu-tips.js",         // 提示语控制与交互核心逻辑 JS
      live2dCorePath: LocalPatch + "/Core/live2dcubismcore.js", // Live2D 官方 Cubism 核心解析库
      live2dSdkPath: LocalPatch + "/live2d-sdk.js"       // 第三方封装的 SDK 适配器
    },
    //tools: ["hitokoto", "asteroids", "express", "switch-model", "switch-texture", "photo", "info", "quit"],
    tools: ["hitokoto", "asteroids", "express", "switch-model", "switch-texture", "photo", "info", "quit"],
    // 允许鼠标自由拖拽及拖拽方向
    drag: {
      enable: true,
      direction: ["x", "y"]
    },
    // 多个模型间的切换模式 (order: 顺序切换，random: 随机切换)
    switchType: "order"
  }

  window.config = config;

  if (screen.width >= 768) {
    Promise.all([
      loadExternalResource(config.path.cssPath, "css"),
      loadExternalResource(config.path.live2dCorePath, "js"),
      loadExternalResource(config.path.live2dSdkPath, "js"),
      loadExternalResource(config.path.tipsJsPath, "js")
    ]).then(() => {
      
      initWidget({
        homePath: config.path.homePath,
        waifuPath: config.path.tipsJsonPath,
        cdnPath: config.path.modelPath,
        tools: config.tools,
        dragEnable: config.drag.enable,
        dragDirection: config.drag.direction,
        switchType: config.switchType
      });
      window.Live2DWidgetInitialized = true;
    }).catch(err => {
      console.error("加载失败：", err);
    });
  }
}

function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    if (type === "css" && document.querySelector(`link[href="${url}"]`)) return resolve(url);
    if (type === "js" && document.querySelector(`script[src="${url}"]`)) return resolve(url);

    let tag;
    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    }
    else if (type === "js") {
      tag = document.createElement("script");
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
   
      document.head.appendChild(tag);
    }
  });
}

initLive2DWidget();

document.addEventListener("astro:page-load", initLive2DWidget);