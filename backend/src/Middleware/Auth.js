const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

const auth= async (req, res, next) => {
    const tokenmath = req.headers.authorization;
    const token = tokenmath.split(" ")[1];
    const secret = process.env.SECRET;
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return next(new ErrorHandler("Invalid token", 401));
        }
        else{
        req.user = decoded;
        next();
        }
    }
    );
}
