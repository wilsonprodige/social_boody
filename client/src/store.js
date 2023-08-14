import { createStore } from 'vuex';
import { makeRequest }  from '../axios.js';


const store = createStore({
    state:{
        posts:[],
        err:''

    },
    mutations:{
        setPosts(state,data){
            state.posts = data
        },
        setError(state,data){
            state.err = data
            console.log(state.err)
        }
    },
    actions:{
        fetchPosts({commit}){
            
            makeRequest.get('/posts/')
            .then(res=>{
                if(res.data.Error){
                    console.log(res.data.Error)
                    commit('setError',res.data.Error)
                    //this.$toast.error("posts could not be loaded");
                    
                }else{
                    console.log(res.data)
                    commit('setPosts',res.data)
                    //this.posts=res.data;
                    commit('setError','')

        
                }

            })
            .catch(err=>{
                //this.$toast.error("could not load posts");
                commit('setError','could not load posts')
                console.log(err)


            })



        }
    }

})

export default store