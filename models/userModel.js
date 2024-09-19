import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

// Create a new user in the database
export const createUserInFirestore = async (uid, email) => {
    try {
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, { 
            email: email,
            balance: 1000000
        });
    } catch (e) {
        console.error("Error creating user in DB", e);
    }
};

// Update user from the database
export const updateUserBalanceInFirestore = async (uid, newBalance) => {
    const userRef = doc(db, "users", uid);

    try {
        await updateDoc(userRef, {
            balance: newBalance
        });
    } catch (e) {
        console.error("Error updating user balance: ", e);
    }
};

// Get user from the database
export const getUserFromFirestore = async (uid) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        return userSnap.data();
    } else {
        console.error("No such user found in Firestore!");
        return null;
    }
};