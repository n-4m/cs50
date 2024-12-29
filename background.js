chrome.runtime.onInstalled.addListener(() => {
  console.log("CS50 Helper with Dark Mode installed!");
  chrome.storage.local.set({ isDarkMode: false }, () => {
    if (chrome.runtime.lastError) {
      console.error("Installation error:", chrome.runtime.lastError);
    }
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleDarkMode") {
    chrome.storage.local.get(["isDarkMode"], (result) => {
      if (chrome.runtime.lastError) {
        console.error("Storage get error:", chrome.runtime.lastError);
        sendResponse({
          status: "error",
          message: chrome.runtime.lastError.message,
        });
        return;
      }

      const isDarkMode = !result.isDarkMode;
      chrome.storage.local.set({ isDarkMode }, () => {
        if (chrome.runtime.lastError) {
          console.error("Storage set error:", chrome.runtime.lastError);
          sendResponse({
            status: "error",
            message: chrome.runtime.lastError.message,
          });
          return;
        }
        console.log("Dark Mode is now:", isDarkMode ? "ON" : "OFF");
        sendResponse({ status: "success", isDarkMode });
      });
    });
    return true; // Keep the connection open for asynchronous response
  }
});
