const LocalPatch = '/live2d_widget_v3';
let live2dInitialized = false;

function cleanupLive2DWidget() {
  if (window.Live2DWidget) {
    try {
      window.Live2DWidget.destroy?.();
      window.Live2DWidget = null;
    } catch (e) {
      console.debug("Live2D cleanup error:", e);
    }
  }
  
  const waifuElement = document.getElementById('waifu');
  const waifuToggle = document.getElementById('waifu-toggle');
  if (waifuElement) waifuElement.remove();
  if (waifuToggle) waifuToggle.remove();
  
  live2dInitialized = false;
}

function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
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

async function initLive2DWidget() {
  if (screen.width < 768 || live2dInitialized) return;

  const config = {
    path: {
      homePath: '/',
      modelPath: LocalPatch + "/Resources/",
      cssPath: LocalPatch + "/waifu.css",
      tipsJsonPath: LocalPatch + "/waifu-tips.json",
      tipsJsPath: LocalPatch + "/waifu-tips.js",
      live2dCorePath: LocalPatch + "/Core/live2dcubismcore.js",
      live2dSdkPath: LocalPatch + "/live2d-sdk.js"
    },
    tools: ["hitokoto", "asteroids", "express", "switch-model", "switch-texture", "photo", "info", "quit"],
    drag: { enable: true, direction: ["x", "y"] },
    switchType: "order"
  };

  window.config = config;

  try {
    await Promise.all([
      loadExternalResource(config.path.cssPath, "css"),
      loadExternalResource(config.path.live2dCorePath, "js"),
      loadExternalResource(config.path.live2dSdkPath, "js"),
      loadExternalResource(config.path.tipsJsPath, "js")
    ]);

    if (typeof initWidget === 'function') {
      initWidget({
        homePath: config.path.homePath,
        waifuPath: config.path.tipsJsonPath,
        cdnPath: config.path.modelPath,
        tools: config.tools,
        dragEnable: config.drag.enable,
        dragDirection: config.drag.direction,
        switchType: config.switchType
      });
      live2dInitialized = true;
    }
  } catch (err) {
    console.error("Live2D加载失败：", err);
  }
}

initLive2DWidget();

// Swup 页面转换事件
if (window.swup) {
  window.swup.on('contentReplaced', () => {
    cleanupLive2DWidget();
    setTimeout(() => {
      initLive2DWidget();
    }, 50);
  });
}

// 备选：Astro 页面加载事件
document.addEventListener("astro:page-load", () => {
  cleanupLive2DWidget();
  setTimeout(() => {
    initLive2DWidget();
  }, 50);
});