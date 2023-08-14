<template>


                        <div class="d-flex post-actions">
                                    <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
                                        <Icon icon="iconamoon:like-fill" class="like-icon like-icon-red" @click="handleLike()" v-if="check_like_status()" /><Icon icon="iconamoon:like-light" class="like-icon" v-else @click="handleLike()"/>
            
                                        <p class="d-none d-md-block ml-2"> {{ likes.length === 0 ? "":likes.length }}Like{{ likes.length >= 2 ? "s":"" }}</p>
                                    </a>
                                    <a href="javascript:;" class="d-flex align-items-center text-muted mr-4" @click="showComment=!showComment">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square icon-md">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <p class="d-none d-md-block ml-2 f-icon">{{ commentsCount > 0 ? commentsCount :'' }}Comment{{ commentsCount >=2 ? 's':'' }}</p>
                                    </a>
                                    <a href="javascript:;" class="d-flex align-items-center text-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share icon-md">
                                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                            <polyline points="16 6 12 2 8 6"></polyline>
                                            <line x1="12" y1="2" x2="12" y2="15"></line>
                                        </svg>
                                        <p class="d-none d-md-block ml-2">Share</p>
                                    </a>
        </div>
        <!----add a comment -->
        <form class="addcomment" v-if="showComment" @submit.prevent="addComment">
            <img v-if="user_profile"  :src="'/upload/'+user_profile" alt="Profile Picture" class="profile-picture">
            <img v-else src="../assets/img.png" alt="Profile Picture" class="profile-picture">
            <input type="text" placeholder="Add a comment" class="comment-input" v-model="COMMENT" required>
            <button class="btn btn-primary btn-comment" type="submit">Comment</button>
        </form>

        <div class="d-flex comments" v-if="showComment">


            <!-- Individual comments -->
            <div class="comment" v-for="comment in comments" :key="comment.id">
                <div class="comment-header">
                <img v-if="comment.PROFILEPICTURE" class="avatar" :src="'/upload/'+comment.PROFILEPICTURE" alt="User Avatar" />
                <img v-else class="avatar" src="../assets/img.png" alt="User Avatar" />
                <span class="username">{{ comment.USERNAME }}</span>
                </div>
                <div class="comment-body">
                   
                {{ comment.DESCRIPTION }} <p class="tx-11 text-muted">{{ getFormattedTime(comment.CREATED_AT) }}</p>
                </div>
            </div>
            <div v-if="comments.length === 0">
                <p>No Comments</p>

            </div>



                                    
        </div>
  
                                           
</template>

<script>
import { Icon } from '@iconify/vue';
import moment from 'moment';
import { makeRequest } from '../../axios'
export default {
    
    name:"commentsView",
    components:{
        Icon
    },
    props:{
        post_id:Number,
        user_profile:String,
        user_id:Number
    },
    data(){
        return {
            showComment:false,
            comments:[],
            likes:[],
            COMMENT:'',
            commentsCount:'',
            liked:false
        }
    },

    methods:{

        check_like_status(){

            if(this.likes.includes(this.user_id)){
                this.liked=true
            }else{
                this.liked=false
            }
            return this.liked

        },
        addComment(){
            console.log(this.COMMENT);
            //call addcomment api
            console.log(this.COMMENT)
            makeRequest.post('/comments/addcomment/'+this.post_id,{COMMENT:this.COMMENT})
            .then(res=>{
                if(res.data.Error){
                    console.log(res.data.Error)
                    this.$toast.error("could not load post comments")
                }else{
                    console.log("comments loaded")
                    this.comments=[]
                    this.comments=res.data
                    this.commentsCount=res.data.length
                }

            })
        },
        getFormattedTime(time_passed){
            return moment(time_passed).fromNow();
        },
        handleLike(){
            //delete like
            if(this.liked){
                makeRequest.delete('/likes/'+this.post_id)
                .then(res=>{
                    if(res.data.Eror){
                        console.log(res.data.Error)
                    }else{
                        this.likes=[];
                        this.likes = res.data
                        
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                //addlike
                makeRequest.post('/likes/'+this.post_id)
                .then(res=>{
                    if(res.data.Eror){
                        console.log(res.data.Error)
                    }else{
                        this.likes=[];
                        this.likes = res.data
                    }
                })
                .catch(err=>{
                    console.log(err)
                })

               
            }
            
        }

    },
    mounted(){
        
        //getlikes for the post
        makeRequest.get('/likes/'+this.post_id)
        .then(res=>{
            if(res.data.Error){
                console.log(res.data.Error);
                this.$toast.error("likes could not be loaded")
            }
            else{
                this.likes = res.data
                this.check_like_status(res.data)
            }

        })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })

        //get comments

        makeRequest.get('/comments/'+this.post_id)
        .then(res=>{
            if(res.data){
                this.comments=res.data
                this.commentsCount=res.data.length
            }else{
                console.log(res.data.Error)
    
            }


        })
        .catch(err=>{
            if(err) console.log(err)
        })

        
        if(this.likes.includes(this.user_id)){
            console.log(this.user_id+"user id")
            this.liked = true
        }

        

        
    },
   
    

}
</script>

<style scoped>
.card-footer{
    width: 100%;
    display: flex;
    align-content: left;
    justify-content: left;
}
.post-actions{
    width: 100%;
    align-content: left;
    justify-content: space-around;
    text-align: center;
    display: flex;
    flex-direction: row;
}
.post-actions, .comments{
    width: 100%;
    margin-top: 2px;
}
.comment {
    width: 100%;
  margin-bottom: 2px;
  padding: 2px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.username {
  font-weight: bold;
}

.comment-body {
    text-align: left;
  color: #333;
  margin-left: 11%;
}
.comment-body p{
    font-size: 11px;
    justify-content: space-between;
    margin-left: 2px;
}
.post-actions a p{
    margin-top:10px;
    margin-left: 3px;
    text-decoration: none;
    
}
.post-actions a {
    text-decoration: none;
}
.post-actions a:hover{
    text-decoration:underline;
}
.post-actions a p:hover{
    color: blue;
}
.comments{
    display:flex;
    flex-direction: column;
}

.addcomment {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  align-items: center;
  margin-top: 10px;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-input {
  width: 50%;
  margin-left: 10px;
  border-radius: 5px;
}

.btn-comment {
  margin-left: 10px;
  padding: 5px 10px;
  padding: 5px;
}

@media screen and ( max-width: 306px) {
    .addcomment {
  flex-direction: column;
  align-content: left;
  justify-content: space-evenly;
    }
}
.addcomment input{
    margin-top: 1px;
    margin-bottom: 1px;
}
.like-icon-red{
    color: red;
}
.like-icon{
    font-size: 30px;
}

</style>