
import { db } from "../connect.js";
import jsonwebtoken from "jsonwebtoken";


export const getLikes = (req,res)=>{
   
            const post_id=parseInt(req.params.id)
            const sql = "SELECT LIKE_USER_ID FROM LIKES WHERE POST_ID=?"

            db.query(sql,[post_id],(err,data)=>{
                if(err) return res.json({Error:err})
                if(data){
                    return res.json(data.map(like=>like.LIKE_USER_ID))
                }else{
                    return res.json({Error:"could not get likes"})
                }
            })
       

}


export const addlike = (req,res)=>{

    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})

            const sql = "INSERT INTO LIKES(LIKE_USER_ID,POST_ID) VALUES(?)"
            const values =[
                userInfo.ID,
                parseInt(req.params.id)
            ]

            db.query(sql,[values],(err,data)=>{
                if(err) return res.json({Error:err})
                if(data){
                    //get back new likes
                    const post_id=parseInt(req.params.id)
                    const sql = "SELECT LIKE_USER_ID FROM LIKES WHERE POST_ID=?"

                    db.query(sql,[post_id],(err,data)=>{
                        if(err) return res.json({Error:err})
                        if(data){
                            return res.json(data.map(like=>like.LIKE_USER_ID))
                        }else{
                            return res.json({Error:"could not get likes after adding "})
                        }
                    })

                   

                   


                }else{
                    return res.json({Error:"could not add like"})
                }
            })
        })




}



export const deletelike =(req,res)=>{ 

    const token = req.cookies.accessToken;
    if(!token){
        res.json({Error:"Not logged in"})
    }
    jsonwebtoken.verify(token,"secret-key",(err,userInfo)=>{
        if(err) return res.json({Error:"token is invalid"})

            const sql = "DELETE FROM LIKES WHERE LIKE_USER_ID=? AND POST_ID=?"

            db.query(sql,[userInfo.ID,parseInt(req.params.id)],(err,data)=>{
                if(err) return res.json({Error:err})
                if(data){
                    //get back new likes
                    const post_id=parseInt(req.params.id)
                    const sql = "SELECT LIKE_USER_ID FROM LIKES WHERE POST_ID=?"

                    db.query(sql,[post_id],(err,data)=>{
                        if(err) return res.json({Error:err})
                        if(data){
                            return res.json(data.map(like=>like.LIKE_USER_ID))
                        }else{
                            return res.json({Error:"could not get likes after deletion"})
                        }
                    })

                   

                   


                }else{
                    return res.json({Error:"could not add like"})
                }
            })
        })


}