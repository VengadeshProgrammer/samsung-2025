// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyByiyLTKA1V8OeAnXdFf9BteRN8LsD2Bgg",
  authDomain: "absolute-totem-400311.firebaseapp.com",
  databaseURL: "https://absolute-totem-400311-default-rtdb.firebaseio.com",
  projectId: "absolute-totem-400311",
  storageBucket: "absolute-totem-400311.appspot.com",
  messagingSenderId: "430382513434",
  appId: "1:430382513434:web:942ef616f04bab9d1b00a3",
  measurementId: "G-BXHYVQEKC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, get,child} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
const db = getDatabase(app);
const dbRef = ref(db);
window.onload = async () => {
  var firstval;
  let mainKey;
  var storedValue3 = [];
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
// async function sha256(message) {
//   try {
//     if (window.crypto && window.crypto.subtle) {
//       const msgBuffer = new TextEncoder('utf-8').encode(message);
//       const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
//       const hashArray = Array.from(new Uint8Array(hashBuffer));
//       const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
//       if (typeof hashHex !== "string" || hashHex.length !== 64) {
//         throw new Error("Invalid SHA-256 result");
//       }
//       return hashHex;
//     } else if (typeof window.sha256 === "function") {
//       // Use library fallback
//       const fallbackHash = window.sha256(message);
//       if (typeof fallbackHash !== "string" || fallbackHash.length !== 64) {
//         throw new Error("Fallback SHA-256 failed");
//       }
//       return fallbackHash;
//     } else {
//       throw new Error("No SHA-256 support available");
//     }
//   } catch (error) {
//     console.error("SHA-256 hashing failed:", error);
//     alert("sha256")
//     return null;
//   }
// }
async function sha256(message) {
  try {
    if (typeof TextEncoder !== "undefined" && window.crypto?.subtle) {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      if (hashHex.length !== 64) throw new Error("Invalid SHA-256 length");
      return hashHex;
    } else if (window.CryptoJS?.SHA256) {
      // Use CryptoJS fallback
      const fallbackHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
      if (fallbackHash.length !== 64) throw new Error("Fallback SHA-256 failed");
      return fallbackHash;
    } else {
      throw new Error("SHA-256 not supported");
    }
  } catch (error) {
    console.error("SHA-256 hashing failed:", error);
    alert("sha256 error: " + error.message);
    return null;
  }
}

var os = getOS();
var browser = getBrowserName();
var deviceWidth = window.screen.width;
var deviceHeight = window.screen.height;
var devicePixelRatio = window.devicePixelRatio;
var deviceMemory = navigator.deviceMemory || "Unknown";
var deviceColorDepth = window.screen.colorDepth || "Unknown";
var hardwareConcurrency = navigator.hardwareConcurrency;
var hashedValuesPromise = sha256(os + browser + deviceWidth.toString() + deviceHeight.toString() + devicePixelRatio.toString() + deviceMemory.toString() + deviceColorDepth.toString() + hardwareConcurrency.toString());
var hashedValues;
hashedValuesPromise.then(val => {
  hashedValues = val;
  const canvas = document.createElement('canvas');
function getCanvasFingerprint() {
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
// autosignin
var canvasFingerprint = getCanvasFingerprint();
var canvasFingerprint2 = getCanvasFingerprint();
if(canvasFingerprint != canvasFingerprint2) {
        alert("Device not recognized! Canvas Fingerprint Mismatch, Don't try to hack!");
         localStorage.clear();
        //remove the loader
         document.querySelector(".cont").style.display="none";
          document.querySelector(".spinnerDiv").style.display="none";
          window.location.href = "./index.html";
      } 
      else {
         const funcStr = HTMLCanvasElement.prototype.toDataURL.toString();
    const pointerOk = (canvas.toDataURL === HTMLCanvasElement.prototype.toDataURL);
    if ((!funcStr.includes('[native code]') || !pointerOk) && canvas.toDataURL.toString() === "function toDataURL() { [native code] }" && HTMLCanvasElement.prototype.toDataURL.toString() === "function toDataURL() { [native code] }") {
        console.warn("⚠️ Possible canvas.toDataURL() tampering detected!");
        alert("⚠️ Possible canvas.toDataURL() tampering detected!, Don't try to hack!");
         localStorage.clear();
        //remove the loader
         document.querySelector(".cont").style.display="none";
          document.querySelector(".spinnerDiv").style.display="none";
          window.location.href = "./index.html";
    }else {
    console.log("✅ Canvas toDataURL is safe.");
// check if user is logged in
  if (localStorage.getItem("value") && localStorage.getItem("value").length == 64) {
    if (!localStorage.getItem("value").includes("<")) {
      // Main content goes here...
      get(child(dbRef, "users/")).then((snapshot) => {
        if (snapshot.exists()) {
          // add the loader
          document.querySelector(".cont").style.display="none";
          document.querySelector(".spinnerDiv").style.display="flex";
          const usersData = snapshot.val();
          for (const key in usersData) {
            const endd = key.indexOf(",") - 1;
            const txt = key.slice(0, endd);
            if (txt == localStorage.getItem("value")) {
              var hashash = false;
              var hasmatch = false;
               snapshot.val()[key]["devices"].forEach(element=>{
                      if(element[0] === hashedValues) {
                        hashash = true;
                         function calculateCanvasMatch(fingerprint1, fingerprint2) {
                    if (fingerprint1.length !== fingerprint2.length) {
                      console.warn("Fingerprints are different lengths!");
                      return 0;
                    }
                  
                    let matchCount = 0;
                    for (let i = 0; i < fingerprint1.length; i++) {
                      if (fingerprint1[i] === fingerprint2[i]) {
                        matchCount++;
                      }
                    }
                  
                    let percentage = (matchCount / fingerprint1.length) * 100;
                    return percentage.toFixed(2); // returns a string like "87.56"
                  }
                  
                  let match = calculateCanvasMatch(element[1], canvasFingerprint);
                        if(match==100) {
                          hasmatch = true;
                            // remove the loader
          document.querySelector(".cont").style.display="block";
          document.querySelector(".spinnerDiv").style.display="none";
                        }
                      }   
                   });
                    if(hashash == false){
                        alert("Device not recognized!");
                        // remove the loader
          document.querySelector(".cont").style.display="block";
          document.querySelector(".spinnerDiv").style.display="none";
           localStorage.clear();
                }
                if(hasmatch == false){
                          alert("Device not recognized!");
                          // remove the loader
          document.querySelector(".cont").style.display="block";
          document.querySelector(".spinnerDiv").style.display="none";
                          localStorage.clear();
                          window.location.href = "./index.html";
                   }
                const username = key.slice(endd+2, key.length);
                document.querySelector(".cont .name").innerHTML = `<b>${username}👋<b>`;
            }

            const keyRef = ref(db, '/key');
            //get key
get(keyRef)
  .then((snapshot) =>{
     mainKey = snapshot.val();
    mainKey = mainKey.key;
    // decrypt function
    function decryptData(encryptedData, key) {
      const bytes = CryptoJS.AES.decrypt(encryptedData, key);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    }

            // Display posts
            const userPosts = usersData[key].posts || {};
            var counter=0;
            for (const postKey in userPosts) {
              if (userPosts.hasOwnProperty(postKey)) {
                const post = userPosts[postKey];
                if (post === "NULL") continue;              
                // Create div and display them
                // remove the loader
          document.querySelector(".cont").style.display="flex";
          document.querySelector(".spinnerDiv").style.display="none";
                const subdiv = document.createElement("div");
                subdiv.className = "subdiv";
                const imageElement = document.createElement("img");
                imageElement.className =`imgtag${counter}`;
                ++counter;
                imageElement.setAttribute("src", decryptData(post.base64, mainKey));

                const h2div = document.createElement("div");
                h2div.className = "h2div";
                const h2 = document.createElement("h2");
                const p = document.createElement("p");
                p.className = "para";
                p.innerText = decryptData(post.owner, mainKey);
                h2.className = "h2tag";
                h2.innerText = decryptData(post.title, mainKey);

                h2div.appendChild(h2);
                h2div.prepend(p);
                subdiv.appendChild(h2div);
                subdiv.prepend(imageElement);
                document.querySelector(".main .cont").appendChild(subdiv);
                document.querySelector(".main .cont").appendChild(document.createElement("br"));
              }
            }


  })
  .catch((error) => {
    console.error('Error fetching key:', error);
  });
    
          }
        }
      });
      // Make Image Big
      document.querySelector(".main .cont").addEventListener("click", (e)=>{
        if (e.target.tagName === "IMG") { // Ensure the click is on an image
          // Adjust the clicked image size
          if(screen.width>=1330){
          if(e.target.style.height == "800px" && e.target.style.width == "1300px")
          {
            e.target.style.width = "";
            e.target.style.height = "";
          }
          else{
          e.target.style.height = "800px";
          e.target.style.width = "1300px";
          };
        }
      }
      });

      document.querySelector(".main header .btns .create").addEventListener("click", () => {
        window.location.href = "./uploadimage.html";
      });

      firstval = localStorage.getItem("value");
      document.querySelector(".logout").addEventListener("click", () => {
        const confirmLogout = confirm("Wanna Logout?");
        if (confirmLogout) {
          localStorage.clear();
          window.location.href = "./index.html";
        }
      });
    } else {
      localStorage.clear();
      window.location.href = "./index.html";
    }
  } else if (!localStorage.getItem("value") || localStorage.getItem("value").length != 64) {
    localStorage.clear();
    window.location.href = "./index.html";
  }
}
}
  // Storage event listener
  window.addEventListener("storage", (e) => {
    if (localStorage.getItem("value")) {
      if (e.key === "value" && firstval != localStorage.getItem("value")) {
        localStorage.clear();
        window.location.href = "./index.html";
      }
    }
  });

  window.onbeforeunload = () => {
    if (firstval != localStorage.getItem("value")) {
      localStorage.clear();
      window.location.href = "./index.html";
    }
  };
  });
};
