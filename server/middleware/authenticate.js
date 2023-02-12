const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
const Admin = require("../model/AdminModel")
const { UnAuthorizedError, ForbiddenError } = require("../Errors/error");


const authenticate = async (req, res, next) => {
    try{
        const token = req.cookies.jwt || ""
        if(token){
            const verifyToken = jwt.verify(
              token,
              "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3NDk3MjEwNSwiaWF0IjoxNjc0OTcyMTA1fQ.14jc46zn5tvG8nAm7SJF04TFTtvRdXJZNm3gd4kckP0"
            );
            const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
            const rootAdmin = await Admin.findOne({_id:verifyToken._id,"tokens.token":token});
            if(!rootUser && !rootAdmin){
                throw new UnAuthorizedError("Invalid User please provide valid authentication details")
            }
            req.token = token;
            if(!rootUser){
                req.type = "admin"
                req.rootAdmin = rootAdmin;
                req.adminId = rootAdmin._id;
            }else{
                req.type = "user"
                req.userId = rootUser._id;
                req.rootUser = rootUser;
            }
            next()
        }else{
            throw new UnAuthorizedError("Please login !!! cookie not set");
        }
    }catch(error){
        next(error)
    }
};

module.exports = authenticate;