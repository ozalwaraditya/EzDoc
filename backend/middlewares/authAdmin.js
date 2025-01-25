import jwt from 'jsonwebtoken';

export const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers;
        if (!atoken) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }

        const decodedToken = jwt.verify(atoken, process.env.JWT_SECRET);

        // Check if decoded token matches admin credentials
        if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASS) {
            return res.status(403).json({ success: false, message: "Access Denied! Invalid Token" });
        }

        next(); // Allow request to proceed
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Invalid or Expired Token" });
    }
};
