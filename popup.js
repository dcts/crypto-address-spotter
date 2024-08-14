document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-script");

  // Load the saved state from storage and set the toggle accordingly
  chrome.storage.sync.get(["scriptEnabled"], function (result) {
    toggle.checked = result.scriptEnabled !== false; // Default to true if not set
  });

  // Add an event listener for the toggle switch
  toggle.addEventListener("change", function () {
    const isEnabled = toggle.checked;
    chrome.storage.sync.set({ scriptEnabled: isEnabled }, function () {
      console.log("Script enabled status: " + isEnabled);
    });

    // Communicate the toggle status to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { scriptEnabled: isEnabled });
    });
  });
});
