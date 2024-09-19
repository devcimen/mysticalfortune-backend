import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createUserInFirestore } from "../models/userModel.js";

// Handle user registration
export const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Add user to the database
        await createUserInFirestore(user.uid, user.email);

        res.status(201).json({ message: "User created successfully", user: userCredential.user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle user login
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.status(200).json({ message: "User logged in successfully", user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}