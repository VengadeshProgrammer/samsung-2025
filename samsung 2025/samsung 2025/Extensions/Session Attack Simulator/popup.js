// Wait until the popup is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the saved data from chrome.storage.local
    chrome.storage.local.get([
        'session_value', 'os', 'browser', 'deviceWidth', 'deviceHeight',
        'devicePixelRatio', 'deviceMemory', 'deviceColorDepth', 'hardwareConcurrency', 'canvasFingerprint'
    ], function (data) {
        // Fill in the input fields with the values stored in chrome.storage.local
        if (data.session_value) {
            document.getElementById('session_value').value = data.session_value;
        }
        if (data.os) {
            document.getElementById('os').value = data.os;
        }
        if (data.browser) {
            document.getElementById('browser').value = data.browser;
        }
        if (data.deviceWidth) {
            document.getElementById('deviceWidth').value = data.deviceWidth;
        }
        if (data.deviceHeight) {
            document.getElementById('deviceHeight').value = data.deviceHeight;
        }
        if (data.devicePixelRatio) {
            document.getElementById('devicePixelRatio').value = data.devicePixelRatio;
        }
        if (data.deviceMemory) {
            document.getElementById('deviceMemory').value = data.deviceMemory;
        }
        if (data.deviceColorDepth) {
            document.getElementById('deviceColorDepth').value = data.deviceColorDepth;
        }
        if (data.hardwareConcurrency) {
            document.getElementById('hardwareConcurrency').value = data.hardwareConcurrency;
        }
        if (data.canvasFingerprint) {
            document.getElementById('canvasFingerprint').value = data.canvasFingerprint;
        }
    });
});

// Execute the attack (save the current data and open the page)
document.getElementById('executeBtn').addEventListener('click', () => {
    // Get the values from the input fields in the popup
    const session_value = document.getElementById('session_value').value;
    const os = document.getElementById('os').value;
    const browser = document.getElementById('browser').value;
    const deviceWidth = document.getElementById('deviceWidth').value;
    const deviceHeight = document.getElementById('deviceHeight').value;
    const devicePixelRatio = document.getElementById('devicePixelRatio').value;
    const deviceMemory = document.getElementById('deviceMemory').value;
    const deviceColorDepth = document.getElementById('deviceColorDepth').value;
    const hardwareConcurrency = document.getElementById('hardwareConcurrency').value;
    const canvasFingerprint = document.getElementById('canvasFingerprint').value;

    // Store the values into chrome.storage.local
    chrome.storage.local.set({
        session_value,
        os,
        browser,
        deviceWidth,
        deviceHeight,
        devicePixelRatio,
        deviceMemory,
        deviceColorDepth,
        hardwareConcurrency,
        canvasFingerprint
    }, function() {
        console.log("Data has been saved!");
    });

    // Open the website (you can change this URL if needed)
    chrome.tabs.create({ url: "http://127.0.0.1:5500/session%20responsive-2025-samsung/session%20responsive/index.html" });
});
