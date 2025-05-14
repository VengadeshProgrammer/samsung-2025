(async () => {
  const storedData = await new Promise((resolve) => {
    chrome.storage.local.get(["userAgent", "canvasFingerprint"], resolve);
  });

  const { userAgent, canvasFingerprint } = storedData;

  const scriptContent = `
    (function() {
      const fakeUserAgent = "${userAgent}";
      const fakeCanvasFingerprint = "${canvasFingerprint}";

      // Override navigator.userAgent
      Object.defineProperty(navigator, 'userAgent', {
        get: () => fakeUserAgent,
        configurable: true
      });

      // Override canvas toDataURL
      const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
      HTMLCanvasElement.prototype.toDataURL = function(...args) {
        return fakeCanvasFingerprint; // Always return fake fingerprint
      };

      // (Optional) Override getImageData if you want deeper spoofing
      const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
      CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h) {
        const imageData = originalGetImageData.call(this, x, y, w, h);
        // you could even modify pixel data here if needed
        return imageData;
      };
    })();
  `;

  const script = document.createElement('script');
  script.textContent = scriptContent;
  (document.head || document.documentElement).appendChild(script);
  script.remove();
})();
