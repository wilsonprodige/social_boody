import jsonwebtoken from "jsonwebtoken";
import { db } from "../connect.js"
import moment from "moment";


export const getComments = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})

        const post_id = parseInt(req.params.id)

        const sql = "SELECT C.*,U.USERNAME,U.ID AS USER_ID,U.NAME,U.PROFILEPICTURE FROM COMMENTS AS C JOIN USERS AS U ON C.COMMENT_USER_ID=U.ID WHERE C.POST_ID=? ORDER BY C.CREATED_AT DESC"

        db.query(sql,[post_id],(err,data)=>{
            if(err) return res.json({Error:err})
            if(data){
                return res.json(data)
            }
        })







    })
    
}

export const addComment=(req,res)=>{
    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})

            const sql = "INSERT INTO COMMENTS(DESCRIPTION,CREATED_AT,COMMENT_USER_ID,POST_ID) VALUES(?)"
            const values =[
                req.body.COMMENT,
                moment().format("YYYY-MM-DD HH:mm:ss"),
                userInfo.ID,
                parseInt(req.params.id)
            ]

            db.query(sql,[values],(err,data)=>{
                if(err) return res.json({Error:err})
                if(data){
                    const q = "SELECT C.*,U.USERNAME,U.ID AS USER_ID,U.NAME,U.PROFILEPICTURE FROM COMMENTS AS C JOIN USERS AS U ON C.COMMENT_USER_ID=U.ID WHERE C.POST_ID=? ORDER BY C.CREATED_AT DESC"
                    db.query(q,[parseInt(req.params.id)],(error,result)=>{
                        if(err) return res.json({Error:error})
                        if(result){
                            return res.json(result)
                        }else{
                            return res.json({Error:"could not select the post comments"})
                        }
                    })

                   


                }else{
                    return res.json({Error:"could not add comment"})
                }
            })
        })

}