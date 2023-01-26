// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 }  from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuuY5Xen4uKjT95B8D3OiK2kOeZzeVZE8",
  authDomain: "testveggipedia.firebaseapp.com",
  projectId: "testveggipedia",
  storageBucket: "testveggipedia.appspot.com",
  messagingSenderId: "61527407867",
  appId: "1:61527407867:web:78c5988d4f019e8dbe045e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)

/**
 * Upload a file to firebase Storage
 * @param {File} file the file to upload
 * @returns {Promise<String>} url of the upload file
 */
export async function uploadFile(file) {
  const storageRef =  ref(storage, `products/${v4()}`)
  await uploadBytes(storageRef, file) 
  const url = await getDownloadURL(storageRef)
  return url 
}