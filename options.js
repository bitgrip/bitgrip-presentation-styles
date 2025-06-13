document.addEventListener('DOMContentLoaded', function() {
  const radios = Array.from(document.querySelectorAll('input[name="colorMode"]'));

  // Load saved preference
  chrome.storage.sync.get({ colorMode: "system" }, (data) => {
    const mode = data.colorMode || "system";
    const found = radios.find(r => r.value === mode);
    if (found) found.checked = true;
  });

  // Save on change
  radios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        chrome.storage.sync.set({ colorMode: this.value });
      }
    });
  });
});