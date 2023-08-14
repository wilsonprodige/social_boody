<template>
    <div class="vh-100 main">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-7 col-lg-6 col-xl-5 col-sm-7">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <h2 class="text-primary"> Sign Up</h2>
                <form @submit.prevent="register">

                        <!-- username input -->
                        <div class="form-outline mb-3">

                            <label class="form-label" for="username">username</label>
                            <input type="text" id="username" class="form-control form-control-lg"
                            placeholder="Enter username" v-model="inputs.USERNAME" required/>

                        </div>

                        <!-- Email input -->
                        <div class="form-outline mb-3">

                            <label class="form-label" for="form3Example3">Email address</label>
                            <input type="email" id="form3Example3" class="form-control form-control-lg"
                            placeholder="Enter a valid email address" v-model="inputs.EMAIL" required/>
                           
                        </div>

                        <!-- name input -->
                        <div class="form-outline mb-3">

                            <label class="form-label" for="name">Full Name</label>
                            <input type="text" id="name" class="form-control form-control-lg"
                            placeholder="Enter full name" v-model="inputs.NAME" required />

                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">

                            <label class="form-label" for="form3Example4">Password</label>
                            <input type="password" id="form3Example4" class="form-control form-control-lg"
                            placeholder="Enter password" v-model="inputs.PASSWORD" required/>
                            
                        </div>

                         

                        <!-- <div class="d-flex justify-content-between align-items-center">
                            
                            <div class="form-check mb-0">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label class="form-check-label" for="form2Example3">
                                Remember me
                            </label>
                            </div>
                          
                        </div> -->

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" class="btn btn-primary btn-lg"
                            style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <router-link to="/login" 
                                class="link-danger">Sign In</router-link></p>
                        </div>

                </form>
            </div>
            </div>
        </div>
        <div
            class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <!-- Copyright -->
            <div class="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved.
            </div>
            <!-- Copyright -->
        </div>
    </div>
  
</template>

<script>
import axios from 'axios';

export default {
    name:"RegisterView",
    data(){
        return {
            inputs:{
                USERNAME:"",
                EMAIL:"",
                PASSWORD:"",
                NAME:""
            }
        }
    },
    methods:{
        register(){
            //console.log(this.inputs)

            
                axios.post('http://localhost:8000/api/auth/register',this.inputs)
                .then(res=>{
                    if(res.data.status==="success"){
                        this.$toast.success('account created successfully');
                        this.$router.push('/login')
                       

                    }else{
                        this.$toast.error(res.data.Error);
                    }
                })
                .catch(err=>{
                    console.log(err)
                    this.$toast.error('An error occured during the request');

                })

                
    
            
        }
    }

}
</script>

<style>

</style>