import jsonwebtoken from "jsonwebtoken";
import { db } from "../connect.js"
import moment from "moment/moment.js";
import { DATE } from "mysql/lib/protocol/constants/types.js";


export const getPosts = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})


        const sql = "SELECT P.*,U.ID AS USERID,NAME,PROFILEPICTURE FROM  POSTS AS P JOIN USERS AS U ON U.ID=P.USER_ID LEFT JOIN RELATIONSHIPS AS R ON P.USER_ID=R.FOLLOWER_ID WHERE R.FOLLOWING_ID=? OR P.USER_ID=? ORDER BY P.CREATED_AT DESC"

        db.query(sql,[userInfo.ID,userInfo.ID],(err,data)=>{
            if(err) return res.json({Error:err})
            if(data){
                return res.json(data)
            }
        })







    })
    
}

export const addPost = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})


        const sql = "INSERT INTO POSTS(DESCRIPTION,IMG,USER_ID,CREATED_AT) VALUES(?)";
        const values=[
            req.body.DESCRIPTION,
            req.body.IMG,
            userInfo.ID,
            moment().format("YYYY-MM-DD HH:mm:ss")
        ]

        db.query(sql,[values],(err,data)=>{
            if(err) return res.json({Error:err})
            if(data){
                return res.json({status:"success"})
            }
        })







    })



}