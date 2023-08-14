import { db } from "../connect.js";
import jsonwebtoken from "jsonwebtoken";

export const getUser = (req,res)=>{

    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})


    
            const q = "SELECT ID,USERNAME,NAME,CITY,PROFILEPICTURE,COVERPICTURE,WEBSITE,EMAIL FROM USERS WHERE ID=?"
            db.query(q,[userInfo.ID],(error,result)=>{
                if(err) return res.json({Error:error})
                if(result){
                    return res.json(result)
                }else{
                    return res.json({Error:"could not get user details"})
                }
            })

        })

           

}

export const updateUser = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})

            const sql = "UPDATE USERS SET EMAIL=?,USERNAME=?,NAME=?,CITY=?,WEBSITE=?,PROFILEPICTURE=?,COVERPICTURE=? WHERE ID=?"
            const values =[
                req.body.EMAIL,
                req.body.USERNAME,
                req.body.NAME,
                req.body.CITY,
                req.body.WEBSITE,
                req.body.PROFILEPICTURE,
                req.body.COVERPICTURE,
                userInfo.ID
            ]

            db.query(sql,values,(err,data)=>{
                if(err) return res.json({Error:err})
                if(data){
                    const q = "SELECT ID,USERNAME,NAME,CITY,PROFILEPICTURE,COVERPICTURE,WEBSITE,EMAIL FROM USERS WHERE ID=?"
                    db.query(q,[userInfo.ID],(error,result)=>{
                        if(err) return res.json({Error:error})
                        if(result){
                            return res.json(result)
                        }else{
                            return res.json({Error:"could not select user details"})
                        }
                    })

                   


                }else{
                    return res.json({Error:"could not update comment"})
                }
            })
        })

}

export const getList =(req,res)=>{

    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})


        const sql = "SELECT U.ID AS USER_ID,USERNAME,NAME,CITY,PROFILEPICTURE,COVERPICTURE,WEBSITE,EMAIL,R.FOLLOWER_ID,R.FOLLOWING_ID FROM USERS AS U JOIN RELATIONSHIPS AS R ON U.ID=R.FOLLOWER_ID WHERE U.ID <> ? AND R.FOLLOWER_ID=? OR R.FOLLOWING_ID=?"
        db.query(sql,[userInfo.ID,userInfo.ID,userInfo.ID],(err,result)=>{
            if(err) return res.json({Error:err})

            if(result){
                res.json(result)

            }else{
                return res.json({Error:"could not load users"})
            }


        })

    })


}