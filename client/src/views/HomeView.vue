<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand text-primary" href="#">Social Boody</a>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
     </form>
      <div class="dropdown">
        <a class="nav-link dropdown-toggle text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img v-if="user.PROFILEPICTURE" :src="'/upload/'+user.PROFILEPICTURE" alt="User Profile" class="profile-picture"> <img v-else src="../assets/img.png" alt="User Profile" class="profile-picture"> {{ user.NAME }}
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><button class="dropdown-item" @click="logout">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></button></li>
        </ul>
      </div>
    </div>
  </nav>
      <!---container-->
      <div class="container">
    <div class="profile-page tx-13">
    <div class="row">
        <div class="col-12 grid-margin">
            <div class="profile-header">
                <div class="cover">
                    <div class="gray-shade"></div>
                    <figure>
                        <img src="https://bootdey.com/img/Content/bg1.jpg" class="img-fluid" alt="profile cover">
                    </figure>
                    <div class="cover-body d-flex justify-content-between align-items-center">
                        <div>
                            <img v-if="user.PROFILEPICTURE" class="profile-pic" :src="'/upload/'+user.PROFILEPICTURE" alt="profile"><img v-else class="profile-pic" src="../assets/img.png" alt="profile">
                            <span class="profile-name">{{ user.USERNAME }}</span>
                        </div>
                        <div class="d-none d-md-block">
                            <button class="btn btn-primary btn-icon-text btn-edit-profile" data-bs-toggle="modal" data-bs-target="#updateprofile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit btn-icon-prepend">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg> Edit profile
                            </button>
                        </div>
                    </div>
                </div>
                <!-- <div class="header-links">
                    <ul class="links d-flex align-items-center mt-3 mt-md-0">
                        <li class="header-link-item d-flex align-items-center active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-columns mr-1 icon-md">
                                <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                            </svg>
                            <a class="pt-1px d-none d-md-block" href="#">Timeline</a>
                        </li>
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-1 icon-md">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <a class="pt-1px d-none d-md-block" href="#">About</a>
                        </li>
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-1 icon-md">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <a class="pt-1px d-none d-md-block" href="#">Friends <span class="text-muted tx-12">3,765</span></a>
                        </li>
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image mr-1 icon-md">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <a class="pt-1px d-none d-md-block" href="#">Photos</a>
                        </li>
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video mr-1 icon-md">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            <a class="pt-1px d-none d-md-block" href="#">Videos</a>
                        </li>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>
    <div class="row profile-body">
        <!-- left wrapper start -->
        <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
            <div class="card rounded">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <h6 class="card-title mb-0">About</h6>
                        <div class="dropdown">
                            <button class="btn p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-lg text-muted pb-3px">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 icon-sm mr-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg> <span class="">Edit</span></a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch icon-sm mr-2">
                                        <line x1="6" y1="3" x2="6" y2="15"></line>
                                        <circle cx="18" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                                    </svg> <span class="">Update</span></a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye icon-sm mr-2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg> <span class="">View all</span></a>
                            </div>
                        </div>
                    </div>

                    <!-------user profile content-->
                    <p>Hi! I'm {{ user.NAME }} the Senior UI Designer at Vibrant. We hope you enjoy the design and quality of Social.</p>
                    <div class="mt-3">
                        <label class="tx-11 font-weight-bold mb-0 text-uppercase">Joined:</label>
                        <p class="text-muted">November 15, 2015</p>
                    </div>
                    <div class="mt-3">
                        <label class="tx-11 font-weight-bold mb-0 text-uppercase">Lives:</label>
                        <p class="text-muted">{{ user.CITY }}</p>
                    </div>
                    <div class="mt-3">
                        <label class="tx-11 font-weight-bold mb-0 text-uppercase">Email:</label>
                        <p class="text-muted">{{ user.EMAIL }}</p>
                    </div>
                    <div class="mt-3">
                        <label class="tx-11 font-weight-bold mb-0 text-uppercase">Website:</label>
                        <p v-if="user.WEBSITE" class="text-muted">{{ user.WEBSITE }}</p>
                        <p v-else class="text-muted">None</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- left wrapper end -->
        <!-- posts -->
        <div class="col-md-8 col-xl-6 middle-wrapper">
            <div class="row">
                <div class="col-md-">
                    <div class="card rounded">
                        <div class="post-title">
                            <h2 class="text-primary"> Posts</h2>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addpost">create a post</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-12 mb-2" v-for="post in posts" :key="post.ID">
                    <div class="card rounded">
                        <div class="card-header">
                            
                                <div class="d-flex align-items-center user-info">
                                    <img v-if="post.PROFILEPICTURE" class="img-xs rounded-circle" :src="'/upload/'+post.PROFILEPICTURE" alt="">
                                    <img v-else class="img-xs rounded-circle" src="../assets/img.png" alt="">
                                    <div class="ml-2 user-p ">
                                        <p>{{ post.NAME }}</p>
                                        <p class="tx-11 text-muted">{{ getFormattedTime(post.CREATED_AT) }}</p>
                                    </div>
                                </div>

                        </div>
                        <div class="card-body">
                            <p class="mb-3 tx-14">{{ post.DESCRIPTION }}</p>
                            <img v-if="post.IMG" class="img-fluid" :src="'../upload/'+post.IMG" alt="">
                        </div>
                        <div class="card-footer">
                            <!-----comment view-->

                            <commentView :post_id="post.ID" :user_profile="user.PROFILEPICTURE" :user_id="user.ID"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- middle wrapper end -->
        <!-- photos -->
        <div class="d-none d-xl-block col-xl-3 right-wrapper">
            <div class="row">
                <div class="col-md-12 grid-margin">
                   
                </div>
                <div class="col-md-12 grid-margin">
                    <div class="card rounded">
                        <div class="card-body">
                            <h6 class="card-title">People you may know</h6>
                            
                            <div class="d-flex  mb-2 pb-2 border-bottom user-item" v-for="user in user_list" :key="user.ID">
                                <div class="d-flex align-items-center hover-pointer">
                                    <img v-if="user.PROFILEPICTURE" class="img-xs rounded-circle" :src="'/upload/'+user.PROFILEPICTURE">
                                    <img v-else class="img-xs rounded-circle" src="../assets/img.png">
                                    <div class="ml-2">
                                        <p>{{ user.USERNAME }}</p>
                                        <p class="tx-11 text-muted">Mutual Friend</p>
                                    </div>
                                </div>
                                <button class="btn btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                </button>
                            </div>
                          
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- right wrapper end -->
    </div>
    <!---add post modal-->
    

        <!--add post  Modal -->
       
            <div class="modal fade" id="addpost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Post</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="addpost">
                            <div class="modal-body">
                                
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Add image:</label>
                                    <input type="file" class="form-control" id="recipient-name" @change="formFileAdded">
                                </div>
                                <div class="mb-3 image-div" v-if="preview">
                                    <img :src="preview" alt="file preview" class="modal-img">
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="message-text" v-model="DESCRIPTION" required></textarea>
                                </div> 

                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" :data-bs-dismiss=" DESCRIPTION ?  'modal' : null">add post</button>
                            </div>
                    </form>
                    </div>
             </div>

        
          </div>

        <!--update profilel  Modal -->
        <div class="modal fade" id="updateprofile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Update profile</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="update_profile">
                            <div class="modal-body">

                                <div class="mb-3">
                                    <label for="username" class="col-form-label">Username</label>
                                    <input type="text" class="form-control" id="username" v-model="user_update.USERNAME" placeholder="enter your username">
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="col-form-label">Name</label>
                                    <input type="text" class="form-control" id="recipient-name" v-model="user_update.NAME" placeholder="enter your name">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="col-form-label">EMAIL</label>
                                    <input type="email" class="form-control" id="email" v-model="user_update.EMAIL"  placeholder="enter your email">
                                </div>
                                <div class="mb-3">
                                    <label for="website" class="col-form-label">Website</label>
                                    <input type="text" class="form-control" id="website" v-model="user_update.WEBSITE" placeholder="enter your website domain">
                                </div>
                                <div class="mb-3">
                                    <label for="city" class="col-form-label">City:</label>
                                    <input type="text" class="form-control" id="city" v-model="user_update.CITY" placeholder="enter your city">
                                </div> 
                                <div class="mb-3">
                                    <label for="profile_pic" class="col-form-label">Profile picture:</label>
                                    <input type="file" class="form-control" id="profile_pic" @change="profile_added" placeholder="enter your avatar">
                                </div>
                                <div class="mb-3 image-div" v-if="profile_preview">
                                    <img :src="profile_preview" alt="file preview" class="modal-img">
                                </div>

                                <div class="mb-3">
                                    <label for="cover_pic" class="col-form-label">Cover Picture:</label>
                                    <input type="file" class="form-control" id="cover_pic" @change="coverpic_added" placeholder="enter your cover picture">
                                </div>
                                <div class="mb-3 image-div" v-if="cover_preview">
                                    <img :src="cover_preview" alt="file preview" class="modal-img">
                                </div>


                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" :data-bs-dismiss=" DESCRIPTION ?  'modal' : null">save</button>
                            </div>
                    </form>
                    </div>
             </div>

        
          </div>







</div>
</div>



      <!------end of container-->
    
</template>

<script>
//import axios from 'axios';
//import { useQuery } from 'vue-query';
import moment from 'moment';
import { mapState,mapActions } from 'vuex';
import { makeRequest } from '../../axios.js';
import commentView from '../components/comments.vue'
export default {
  name: 'HomeView',
  components: {
    commentView
  },
  data(){
    return{
        user_update:{
            USERNAME:'',
            EMAIL:'',
            NAME:'',
            COVERPICTURE:'',
            PROFILEPICTURE:'',
            CITY:'',
            WEBSITE:''
        },
        user_list:[],
        user:[],
        data:[],
        IMG:'',
        DESCRIPTION:'',
        preview:null,
        profile_preview:null,
        cover_preview:null,
        display_prof:true
    }
  },
  computed:{
    ...mapState(['err','posts'])

  },
  methods:{
    ...mapActions(['fetchPosts']),
    formFileAdded(event){
        console.log("file added")
        this.IMG= event.target.files[0];
        this.preview = URL.createObjectURL(this.IMG)

    },
    async uploadFile(){
        try{
            const formData = new FormData();
            formData.append("file",this.IMG);
            const res = await makeRequest.post("/upload",formData);
            return res.data.file_name


        }catch(err){
            console.log(err);
        }

    },
    async uploadProfile(){
        try{
            const formData = new FormData();
            formData.append("file",this.user_update.PROFILEPICTURE);
            const res = await makeRequest.post("/upload",formData);
            return res.data.file_name


        }catch(err){
            console.log(err);
        }

    },
    async uploadCover(){
        try{
            const formData = new FormData();
            formData.append("file",this.user_update.COVERPICTURE);
            const res = await makeRequest.post("/upload",formData);
            return res.data.file_name


        }catch(err){
            console.log(err);
        }

    },
     async addpost(){
        console.log(this.IMG+this.DESCRIPTION)
        let imgUrl=''
        if(this.IMG) imgUrl = await this.uploadFile();
        const values =[{
            IMG:imgUrl,
            DESCRIPTION:this.DESCRIPTION
        }
        ]
        
    makeRequest.post("/posts/addpost",values[0]).
    then(res=>{
        if(res.data.status==="success"){
            this.DESCRIPTION=''
            this.IMG=null
            localStorage.setItem("message","post added successfuly")
            location.reload(true)
        }else{
            this.$toast.error(this.data.Error)
        } 

    })
    .catch(err=>{
        this.$toast.error("network error, try again")
        console.log(err)
    })


    },
    getFormattedTime(time_passed){
       return  moment(time_passed).fromNow();
    },
    profile_added(event){
        console.log("profile added")
        this.user_update.PROFILEPICTURE= event.target.files[0];
        this.profile_preview = URL.createObjectURL(this.user_update.PROFILEPICTURE)

    

    },
    coverpic_added(event){
        console.log("cover pic added")
        this.user_update.COVERPICTURE= event.target.files[0];
        this.cover_preview = URL.createObjectURL(this.user_update.COVERPICTURE)

    },
    async update_profile(){

        //upload profile picture
        let profile_pic='';
        let cover_pic='';
        if(this.user_update.PROFILEPICTURE){
            if(this.user_update.PROFILEPICTURE != this.user.PROFILEPICTURE){
                profile_pic= await this.uploadProfile()

            }
        }

        //upload cover picture
        if(this.user_update.COVERPICTURE){
            if(this.user_update.COVERPICTURE != this.user.COVERPICTURE){
                cover_pic=await this.uploadCover()

            }
        }

        //update the user info
        this.user_update.PROFILEPICTURE=profile_pic
        this.user_update.COVERPICTURE=cover_pic
        

        makeRequest.put("/users/update",this.user_update)
        .then(res=>{
            if(!res.data.Error){
                console.log(res.data)
                this.user=[]
                this.user=res.data[0]

                this.user_update.USERNAME=this.user.USERNAME
                this.user_update.NAME=this.user.NAME
                this.user_update.CITY=this.user.CITY
                this.user_update.EMAIL=this.user.EMAIL
                this.user_update.WEBSITE=this.user.WEBSITE
                this.user_update.COVERPICTURE=this.user.COVERPICTURE
                this.user_update.PROFILEPICTURE=this.user.PROFILEPICTURE
                this.$toast.success("profile updated");
            }else{
                console.log(res.data.Error)
            }
        })
        .catch(err=>{
            console.log(err)
            this.$toast.error("request error")
        })
    },
    logout(){
        makeRequest.get('/auth/logout')
        .then(res=>{
            if(!res.data.Error){
                console.log('logout successful')
                localStorage.removeItem('user')
                this.$router.push('/login')
            }else{
                console.log(res.dataError)
                this.$toast.error('something went wrong')
            }

        })
        .catch(err=>{
            console.log(err)
            this.$toast.error('Network error try again')
        })
    }

  },
  watch:{
    err(newvalue){
        this.$toast.error(newvalue);
    }


  },
  mounted(){

    //check if error
    const mes = localStorage.getItem("message");
    if(mes){
        this.$toast.success(mes);
        localStorage.removeItem("message")
    }

    // mount user details 
    const user_data = localStorage.getItem('user');
    if(user_data){
        
        //get user data from server

        makeRequest.get('/users/')
        .then(res=>{
            if(!res.data.Error){
                console.log(res.data[0])
                this.user =res.data[0]

                this.user_update.USERNAME=this.user.USERNAME
                this.user_update.NAME=this.user.NAME
                this.user_update.CITY=this.user.CITY
                this.user_update.EMAIL=this.user.EMAIL
                this.user_update.WEBSITE=this.user.WEBSITE
                this.user_update.COVERPICTURE=this.user.COVERPICTURE
                this.user_update.PROFILEPICTURE=this.user.PROFILEPICTURE
            }else{
                console.log(res.data.Error)
            }

        })
        .catch(err=>{
            console.log(err)
        })
        
        

   
    //get posts

    // makeRequest.get("/posts")
    // .then(res=>{
    //     if(res.data){
    //         console.log(res.data)
    //         this.posts=res.data;

    //     }else{
    //         console.log(res.data.Error)
    //         this.$toast.error("posts could not be loaded");

    //     }

    // })
    // .catch(err=>{
    //     this.$toast.error("could not load posts");
    //     console.log(err)
    // })
    
            this.fetchPosts()
            
            //fetch users

            makeRequest.get('/users/getlist/')
            .then(res=>{
                if(!res.data.Eror){
                    console.log('users data obtained')
                    this.user_list = res.data
                    //console.log(res.data)

                }else{
                    console.log(res.data.Error)
                }
            })
            .catch(err=>{
                console.log(err)
            })

    }else{
            this.$router.push('/login')
            this.$toast.error("you are not logged in")
            
    }
 
     
    
    
   


    

  }
}

</script>

<style scoped>

.navbar {
  background-color: #f8f9fa;
  padding-left: 10px;
}

.navbar-brand {
  font-weight: bold;
}

.navbar .nav-link {
  font-weight: bold;
}

.navbar .nav-link:hover {
  color: #007bff;
}

.navbar .profile-picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.dropdown{
  float: right;
}
.d-flex{
  width: 50%;
}

body{
    background-color: #f9fafb;
    margin-top:20px;}

.profile-page .profile-header {
    box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);
    border: 1px solid #f2f4f9;
}

.profile-page .profile-header .cover {
    position: relative;
    border-radius: .25rem .25rem 0 0;
}


.profile-page .profile-header .cover figure {
    margin-bottom: 0;
}

@media (max-width: 767px) {
    .profile-page .profile-header .cover figure {
        height: 50px;
        overflow: hidden;
    }
}

@media (min-width: 767px) {
    .profile-page .profile-header .cover figure {
        height: 100px;
        overflow: hidden;
    }
}

.profile-page .profile-header .cover figure img {
    border-radius: .25rem .25rem 0 0;
    width: 100%;
}

@media (max-width: 767px) {
    .profile-page .profile-header .cover figure img {
        -webkit-transform: scale(2);
        transform: scale(2);
        margin-top: 15px;
    }
}

@media (min-width: 2400px) {
    .profile-page .profile-header .cover figure img {
        margin-top: -55px;
    }
}

.profile-page .profile-header .cover .gray-shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(rgba(255, 255, 255, 0.1), #fff 99%);
}

.profile-page .profile-header .cover .cover-body {
    position: absolute;
    bottom: -20px;
    left: 0;
    z-index: 2;
    width: 100%;
    padding: 0 20px;
}

.profile-page .profile-header .cover .cover-body .profile-pic {
    border-radius: 50%;
    width: 70px;
    height: 70px;
}

@media (max-width: 767px) {
    .profile-page .profile-header .cover .cover-body .profile-pic {
        width: 70px;
    }
}

.profile-page .profile-header .cover .cover-body .profile-name {
    font-size: 20px;
    font-weight: 600;
    margin-left: 17px;
}

.profile-page .profile-header .header-links {
    padding: 15px;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    background: #fff;
    border-radius: 0 0 .25rem .25rem;
}

.profile-page .profile-header .header-links ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.profile-page .profile-header .header-links ul li a {
    color: #000;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}

.profile-page .profile-header .header-links ul li:hover,
.profile-page .profile-header .header-links ul li.active {
    color: #727cf5;
}

.profile-page .profile-header .header-links ul li:hover a,
.profile-page .profile-header .header-links ul li.active a {
    color: #727cf5;
}

.profile-page .profile-body .left-wrapper .social-links a {
    width: 30px;
    height: 30px;
}

.profile-page .profile-body .right-wrapper .latest-photos > .row {
    margin-right: 0;
    margin-left: 0;
}

.profile-page .profile-body .right-wrapper .latest-photos > .row > div {
    padding-left: 3px;
    padding-right: 3px;
}

.profile-page .profile-body .right-wrapper .latest-photos > .row > div figure {
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    margin-bottom: 6px;
}

.profile-page .profile-body .right-wrapper .latest-photos > .row > div figure:hover {
    -webkit-transform: scale(1.06);
    transform: scale(1.06);
}

.profile-page .profile-body .right-wrapper .latest-photos > .row > div figure img {
    border-radius: .25rem;
}

.rtl .profile-page .profile-header .cover .cover-body .profile-name {
    margin-left: 0;
    margin-right: 17px;
}
.img-xs {
    width: 37px;
    height: 37px;
}
.rounded-circle {
    border-radius: 50% !important;
}
img {
    vertical-align: middle;
    border-style: none;
}

.card-header:first-child {
    border-radius: 0 0 0 0;
}
.card-header {
    padding: 0.875rem 1.5rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #f2f4f9;
}

.card-footer:last-child {
    border-radius: 0 0 0 0;
}
.card-footer {
    padding: 0.875rem 1.5rem;
    background-color: rgba(0, 0, 0, 0);
    border-top: 1px solid #f2f4f9;
}

.grid-margin {
    margin-bottom: 1rem;
}

.card {
    box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);
    -webkit-box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);
    -moz-box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);
    -ms-box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);
}
.rounded {
    border-radius: 0.25rem !important;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #f2f4f9;
    border-radius: 0.25rem;
}
.post-title{
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;

}
.image-div{
    display: flex;
    align-content: left;
    width: 50%;
    height: 20%;
}
.modal-img{
    display: inline;
    width: 20%;
    height: 80%;

}
.card-footer{
    width: 100%;
    display: flex;
    align-content: left;
    justify-content: left;
    flex-direction: column;
}
.post-actions{
    width: 100%;
    align-content: center;
    justify-content: space-between;
    text-align: center;
}
.post-actions a p{
    margin-top:10px;
    margin-left: 3px;
    text-decoration: none;
    
}
.post-actions a {
    text-decoration: none;
}
.post-actions a p:hover{
    color: blue;
}
.card-header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

}
.card-header{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.user-info{
    width: 40%;
    height: 100%;
    display: flex;
    flex-grow: row;
    align-content: center;
    text-align: center;
    margin-left: 10px;
}
.user-info img{
    margin-top: 0;
}
.user-p{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: left;
    margin-left: 20px;
   
    

}
.middle-wrapper{
    justify-content: space-between;
}
.modal-body{
    max-height: 750px;
    overflow: scroll;
}
.user-item{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin-top: 5px;

}
.user-item .hover-pointer{
    width: 65%;
    justify-content: space-between;
}
.user-item .hover-pointer div{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.user-item button:hover{
    background-color: #007bff;
}
.user-item button svg:hover{
    color: white;
}
</style>
