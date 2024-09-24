import { storage, db, auth } from "./firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc , getDoc } from "firebase/firestore";
// Sign Up User
const signUpUser = (auth, email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

// Sign In User
const signInUser = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

// Upload Image

const uploadImage = (collectionName, image, imageName) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${collectionName}/${imageName}`);
    uploadBytes(storageRef, image)
      .then(async (snapshot) => {
        console.log("Uploaded a blob or file!");
        resolve(snapshot);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

// Get Download Url
const imageDownloadUrl = (collectionName, imageName) => {
  return new Promise((resolve, reject) => {
    getDownloadURL(ref(storage, `${collectionName}/${imageName}`))
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

const addDatainDb = (collectionName, id, obj) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(db, collectionName, id), obj);
    if (obj) {
      resolve("Data Added Successfully with " + id);
    } else {
      reject("Data Not Added");
    }
  });
};

const signOutUser = (auth) => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve("Sign Out Successfully");
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

const getSingleData = (collectionName, id) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, collectionName, id))
      .then((doc) => {
        resolve(doc.data());
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

export {
  signUpUser,
  signInUser,
  uploadImage,
  imageDownloadUrl,
  addDatainDb,
  signOutUser,
  getSingleData,
};
