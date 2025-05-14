chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'open_test_page') {
    chrome.tabs.create({ url: "http://127.0.0.1:5500/session%20responsive-2025-samsung/session%20responsive/index.html" });
  }
});
