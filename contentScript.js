function applyMode(mode) {
  const root = document.documentElement;
  root.classList.remove('extension-light-mode', 'extension-dark-mode');
  if (mode === 'light') {
    root.classList.add('extension-light-mode');
  } else if (mode === 'dark') {
    root.classList.add('extension-dark-mode');
  }
  // else: 'system' = no class, rely on prefers-color-scheme
}

let currentMode = "system";
let mql = null;

function updateForSystemPref() {
  if (currentMode === "system") {
    // Remove explicit classes, let CSS handle
    applyMode("system");
  }
}

function listenSystemChange(enable) {
  if (enable) {
    if (!mql) {
      mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener("change", updateForSystemPref);
    }
  } else if (mql) {
    mql.removeEventListener("change", updateForSystemPref);
    mql = null;
  }
}

function setModeFromStorage() {
  chrome.storage.sync.get({ colorMode: "system" }, (data) => {
    const mode = data.colorMode || "system";
    currentMode = mode;
    applyMode(mode);
    listenSystemChange(mode === "system");
  });
}

// Initial load
setModeFromStorage();

// Listen for changes from options page
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.colorMode) {
    currentMode = changes.colorMode.newValue || "system";
    applyMode(currentMode);
    listenSystemChange(currentMode === "system");
  }
});