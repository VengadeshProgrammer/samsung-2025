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
import { getDatabase, ref, get,child, push, onValue, set} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
const db = getDatabase();
const dbRef = ref(db);
var firstval = localStorage.getItem("value");
var username;
  document.querySelector(".back").addEventListener("click", () => {
    history.back();
  });
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

var canvasFingerprint = getCanvasFingerprint();
var canvasFingerprint2 = getCanvasFingerprint();
// check if user is logged in
  // add the loader
          document.querySelector(".content").style.display="none";
          document.querySelector(".spinnerDiv").style.display="flex";
          if(canvasFingerprint != canvasFingerprint2) {
        alert("Device not recognized! Canvas Fingerprint Mismatch, Don't try to hack!");
         localStorage.clear();
        // remove the loader
          document.querySelector(".content").style.display="none";
          document.querySelector(".spinnerDiv").style.display="none";
          window.location.href = "./index.html";
      }else {
        const funcStr = HTMLCanvasElement.prototype.toDataURL.toString();
    const pointerOk = (canvas.toDataURL === HTMLCanvasElement.prototype.toDataURL);
          if (!funcStr.includes('[native code]') || !pointerOk) {
        console.warn("⚠️ Possible canvas.toDataURL() tampering detected!");
        alert("⚠️ Possible canvas.toDataURL() tampering detected!, Don't try to hack!");
        localStorage.clear();
        // remove the loader
          document.querySelector(".content").style.display="flex";
          document.querySelector(".spinnerDiv").style.display="none";
        window.location.href = "./index.html";
    }
  else {
  get(child(dbRef, "users/")).then((snapshot)=>{
        if(snapshot.exists()){
          var hashash = false;
          var hasmatch = false;
          for(const key in snapshot.val())
            {   
                        let userData = snapshot.val()[key];
                        if(userData.total == localStorage.getItem("value"))
                        {
                          username = userData.username || key.split(',')[1]; // Extract username from data or key
                            userData["devices"].forEach(element=>{
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
          document.querySelector(".content").style.display="flex";
          document.querySelector(".spinnerDiv").style.display="none";
                          return;
                        }
                        if(hasmatch == false) {
                          alert("Device not recognized!");
                           // remove the loader
          document.querySelector(".content").style.display="flex";
          document.querySelector(".spinnerDiv").style.display="none";
                          localStorage.clear();
                        }
                      }   
                   });
                    if(hashash == false){
                        alert("Device not recognized!");
                         // remove the loader
          document.querySelector(".content").style.display="flex";
          document.querySelector(".spinnerDiv").style.display="none";
           localStorage.clear();
           window.location.href = "./index.html";
                }
                        }
                }
              }
  }).then(()=>{
    document.querySelector(".content .sarakku .btnn button").addEventListener("click", () => {
      if(localStorage.getItem("value"))
      {
      var title = document.querySelector(".content .sarakku .title").value;
      var inputElement = document.querySelector(".content .sarakku .inputfield");
      const selectedFile = inputElement.files[0];
      
      if (selectedFile) {
        
        if (title == null || title == undefined || title == "" ) {
          alert("Pick A Title");
        } else if(!(title.includes("<")))
          {
          const reader = new FileReader();
          reader.onload = (event) => {
           
            const base64String = event.target.result;
            const userId = localStorage.getItem("value"); // Assuming this holds the user ID
            
            const userRef = ref(db, `users/${userId} ,${username}/posts`); // Reference to the specific user node  
            
            const keyRef = ref(db, '/key');
            //get key
get(keyRef)
  .then((snapshot) => {
    let mainKey = snapshot.val();
    mainKey = mainKey.key;
 // Encrypt function using AES
 function encryptData(data, key) {
  const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  return encryptedData;
}

            //encrypt
            const encryptedTitle = encryptData(title, mainKey);
            const encryptedBase64 = encryptData(base64String, mainKey);
            const encryptedOwner = encryptData(username, mainKey);
  
            //template
            var newPost = {
              title: encryptedTitle,
              base64: encryptedBase64,
              owner: encryptedOwner                                                                                                      // changed
            };
            // Function to append values to the user node
            push(userRef, newPost)
          .then(() => {
          var infobox = document.querySelector(".hidden");
          infobox.classList.remove("hidden");
          infobox.classList.add("exposed");
          var inter = setInterval(()=>{
            infobox.classList.remove("exposed");
            infobox.classList.add("hidden");
            clearInterval(inter);
          },1501);
            })
          .catch((error) => {
           console.error("Error adding new post:", error);
          });


  })
  .catch((error) => {
    console.error('Error fetching key:', error);
  });   
          };
          reader.readAsDataURL(selectedFile);
        }
        else
        {
          document.querySelector(".content .sarakku .title").value = "";
          alert("Don't Put Any Anchor Character Here!");
        }
      } else {
        alert("Select A Picture To POST");
      };
    }
    else
    {
      window.location.href = "./index.html";
    };
    });

  });
}
}
  document.querySelector(".content .sarakku .inputfield").addEventListener("change", (event) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  
    if (file && allowedTypes.includes(file.type)) {
      console.log("File is a valid image.");
    } else {
      alert("Please upload a valid image file.");
      document.querySelector(".content .sarakku .inputfield").value = ""; // Clear the invalid file
    }
  });
  
 

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
})