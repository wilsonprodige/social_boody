import {db} from "../connect.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = (req,res)=>{
    //check user if exists
    const sql = "SELECT * FROM USERS WHERE USERNAME = ?";
    db.query(sql,[req.body.USERNAME],(err,result)=>{
        if(err) return res.status(500).json({Error:"error in the sql first query "+err});
        if(result.length ){
            return res.json({Error:"user already exists"})
        }
        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.PASSWORD,salt);

        const sql = "INSERT INTO USERS(USERNAME,EMAIL,PASSWORD,NAME) VALUES (?)";
        const values = [
            req.body.USERNAME,
            req.body.EMAIL,
            hashedPassword,
            req.body.NAME
        ];

        //CREATE USER ACCOUNT
        db.query(sql,[values],(error,response)=>{
            if(error) return res.json({Error:error})
            if(response){
                return res.json({status:"success"})
            }
            else{
                res.json({Error:"an error occured during user account creation"})
            }
        })
    })
    

}
export const login = (req,res)=>{

    const sql ="SELECT * FROM USERS WHERE USERNAME = ?"
    db.query(sql,[req.body.USERNAME],(err,result)=>{
        if(err) return res.json({Error:err})
        if(result.length === 0){
            return res.json({Error:"user not found"})
        }
        const checkPassword = bcrypt.compareSync(req.body.PASSWORD,result[0].PASSWORD);
        if(!checkPassword) return res.json({Error:"wrong username or password"})

        const token = jwt.sign({ID:result[0].ID},"secret-key");

        if (res.headersSent) {
            return res.json({ Error: 'user alreday logged in' });
          }


        const {PASSWORD, ...others} = result[0]
        res.cookie("accessToken",token,{
            httpOnly:true
        })
        .json(others)

    })


}

export const logout = (req,res)=>{
    try{
        res.clearCookie("accessToken",{
            secure:true,
            sameSite:"none"
        }).status(200).json({message:"user has been logged out"})

    }
    catch(err){
        return res.json({Error:err})
    }
   

}