// 1. Brauzer uchun to'g'ridan-to'g'ri SDK linklari (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// 2. Sizning maxsus konfiguratsiyangiz
const firebaseConfig = {
  apiKey: "AIzaSyA6KHUsbozICWDgMT3xx0gVMI5sBp0VV5o",
  authDomain: "novaprime-english.firebaseapp.com",
  projectId: "novaprime-english",
  storageBucket: "novaprime-english.firebasestorage.app",
  messagingSenderId: "893259754034",
  appId: "1:893259754034:web:15624a6b82896b90c06a2b",
  measurementId: "G-P6NDGTC597"
};

// 3. Firebase-ni ishga tushirish
const app = initializeApp(firebaseConfig);

// 4. Boshqa fayllarda ishlatish uchun EKSPORT qilish
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);