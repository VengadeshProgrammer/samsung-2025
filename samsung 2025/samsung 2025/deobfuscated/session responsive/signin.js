import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {set, getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
window.onload = async () => {
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
const db = getDatabase();
const dbRef = ref(db);
  var dataPresent = false;
  var buttonpressed = false;
  var firstval;
//Implement autosignin session
var storedValue = [];
var storedValue2 = [];
 var storedValue3=[];
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
});
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
// autosignin
var canvasFingerprint = getCanvasFingerprint();
var canvasFingerprint2 = getCanvasFingerprint();
  if(canvasFingerprint != canvasFingerprint2) {
        alert("Device not recognized! Canvas Fingerprint Mismatch, Don't try to hack!");
        localStorage.clear();
        //remove the loader
         document.querySelector(".container").style.display="none";
        document.querySelector(".spinnerDiv").classList.add("hidden");
        window.location.href = "./index.html";
      }
      else {
        const funcStr = HTMLCanvasElement.prototype.toDataURL.toString();
    const pointerOk = (canvas.toDataURL === HTMLCanvasElement.prototype.toDataURL);
         if (!funcStr.includes('[native code]') || !pointerOk) {
        console.warn("⚠️ Possible canvas.toDataURL() tampering detected!");
        alert("⚠️ Possible canvas.toDataURL() tampering detected!, Don't try to hack!");
        localStorage.clear();
        //remove the loader
         document.querySelector(".container").style.display="none";
        document.querySelector(".spinnerDiv").classList.add("hidden");
        window.location.href = "./index.html";
    }
    else{
if(localStorage.getItem("value")){
    if(localStorage.getItem("value").length==64){
      if(!localStorage.getItem("value").includes("<")){
        // spin the loader
        document.querySelector(".container").style.display="none";
        document.querySelector(".spinnerDiv.hidden").classList.remove("hidden");
      dataPresent=true;
      firstval = localStorage.getItem("value");
    get(child(dbRef, "users/")).then((snapshot)=>{
        if(snapshot.exists()){
            for(const key in snapshot.val()){
                var end = key.indexOf(",")-1;
                var txt = key.slice(0, end);
                var hashash = false;
                if(txt == localStorage.getItem("value")){   
                  // alert("Found the user"); 
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
                        if(match == 100) {
                          // remove the loader
                          document.querySelector(".container").style.display="block";
                          document.querySelector(".spinnerDiv").classList.add("hidden");
                          localStorage.setItem("value", snapshot.val()[key]["total"]);
                            storedValue3=[];
                            setTimeout(() => {
                              window.location.href = "./Home.html";
                            }, 100);
                            return;
                        }
                        else {
                          alert("Device not recognized!");
                          // remove the loader
                          document.querySelector(".container").style.display="block";
                          document.querySelector(".spinnerDiv").classList.add("hidden");
                          localStorage.clear();
                        }
                      }   
                   });
                   if(hashash == false){
                        alert("Device not recognized!");
                        // remove the loader
                          document.querySelector(".container").style.display="block";
                          document.querySelector(".spinnerDiv").classList.add("hidden");
                           localStorage.clear();
                          window.location.href = "./index.html";
                }
                }
            }
        }
    });
    }
else{
  localStorage.clear();
}
}
}
else{
  // alert("second block");
  dataPresent = false;
    var password = document.querySelector(".password");
    var username = document.querySelector(".name");
    var continuebtn = document.querySelector(".signinbtn");
    continuebtn.addEventListener("click", ()=>{
     storedValue3=[];
        if(password.value.split(/\s/).join("").length>=8 &&username.value.split(/\s/).join("").length>0){
          if(!password.value.includes("<") && !username.value.includes("<")){
            // spin the loader
            document.querySelector(".container").style.display="none";
            document.querySelector(".spinnerDiv.hidden").classList.remove("hidden");
            storedValue3=[];
              sha256(password.value)
         .then(hash => {
           const hashedValue = hash; 
           storedValue3.push(hash);
       var came2 = false;
       get(child(dbRef, "users/")).then((snapshot)=>{
          if(snapshot.exists()){
              for(const key in snapshot.val()){
                  var start = key.indexOf(",")+1;
                  var txt = key.slice(start, key.length);        
                   if(txt == username.value){
                    // alert("username found");
                    came2 = true;
                    let hashash = false; 
                    let hasmatch = false; 
                     if(snapshot.val()[key]["password"] == storedValue3[0]){
                      // alert("Found the user");
                      buttonpressed = true;
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
                            // alert("Device and match are in db so logging in");
                            localStorage.setItem("value", snapshot.val()[key]["total"]);
                            // remove the loader
                            document.querySelector(".container").style.display="block";
                            document.querySelector(".spinnerDiv").classList.add("hidden");
                              storedValue3=[];
                              setTimeout(() => {
                                window.location.href = "./Home.html";
                              }, 100);
                          }
                          if(hasmatch == false) {
                            alert("Device not recognized!");
                            // remove the loader
                            document.querySelector(".container").style.display="block";
                            document.querySelector(".spinnerDiv").classList.add("hidden");
                            localStorage.clear();
                          }
                        }
                     });  
                     if(hashash == false){
                        //  alert("Device is not in db so adding it");
                         // db doesn't has login user device info so i will add it
                         async function addDevice() {
                          const userDevicesRef = ref(db, `users/${key}/devices`);
                          const updatedDevices = snapshot.val()[key]["devices"];
                          updatedDevices.push([hashedValues, canvasFingerprint]);
                          await set(userDevicesRef, updatedDevices);

                          localStorage.setItem("value", snapshot.val()[key]["total"]);
                           // remove the loader
                          document.querySelector(".container").style.display="block";
                          document.querySelector(".spinnerDiv").classList.add("hidden");
                          storedValue3=[];
                          setTimeout(() => {
                            window.location.href = "./Home.html";
                          }, 100);
                        }
                        addDevice();            
                     }
                    }
                     else{
                      //remove the loader
                       document.querySelector(".container").style.display="block";
                       document.querySelector(".spinnerDiv").classList.add("hidden");
                      alert("Password is Incorrect!");
                      storedValue = [];
                      storedValue3=[];
                     } 
                 }
          }
           if(came2 == false) {
                    // remove the loader
                    document.querySelector(".container").style.display="block";
                      document.querySelector(".spinnerDiv").classList.add("hidden");
                    alert("No Account Found!");
                    storedValue3=[];
                  }
        }
      });
         })
         .catch(error => {
           console.error("Error hashing data:", error);
         });
      }
      else{
        storedValue3=[];
        localStorage.clear();
        // remove the loader
        document.querySelector(".container").style.display="block";
        document.querySelector(".spinnerDiv").classList.add("hidden");
      }
        }
        else{
          storedValue3=[];
            alert("Please Fill Up The Requirement! And Ensure If The Password has no white spaces and length is 8 or more characters");
            // remove the loader
            document.querySelector(".container").style.display="block";
            document.querySelector(".spinnerDiv").classList.add("hidden");
          }
    });
}
      }
      }
window.addEventListener("storage", (e)=>{
  if(localStorage.getItem("value")){
  if(e.key == "value" && firstval!=localStorage.getItem("value")){
    if(buttonpressed == true){
      storedValue3=[];
      // remove the loader
      document.querySelector(".container").style.display="block";
      document.querySelector(".spinnerDiv").classList.add("hidden");
      window.location.href="./Home.html";
    }
    else if(buttonpressed == false){
      storedValue3=[];
      localStorage.clear();
       // remove the loader
      document.querySelector(".container").style.display="block";
      document.querySelector(".spinnerDiv").classList.add("hidden");
      window.location.href = "./index.html";
    }
  }
}
});
window.onbeforeunload=()=>{
  if(firstval!=localStorage.getItem("value")){
    if(buttonpressed == true){
    }
    else if(buttonpressed == false){
      storedValue3=[];
      localStorage.clear();
      window.location.href = "./index.html";
    }
  }
}
}