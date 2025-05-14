browser.webRequest.onHeadersReceived.addListener(
  function(details) {
    let headers = details.responseHeaders.filter(header => {
      return header.name.toLowerCase() !== "content-security-policy" &&
             header.name.toLowerCase() !== "content-security-policy-report-only";
    });
    return { responseHeaders: headers };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);
