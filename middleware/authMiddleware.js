import { getAuth } from 'firebase-admin/auth';

export const protectRoute = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decodedToken = await getAuth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};
