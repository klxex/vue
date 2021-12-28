<template>
<b-container id = "container--box" >
    <b-form @submit ="onSubmit" @reset="reset">
        <div id = "form--group" class="mt-3 p-3">
            <h1>TODO APP</h1>
            <b-form-group>
            <label for="input--id">아이디:&nbsp;&ensp;&ensp;</label>
            <div class="input--text" style="display:inline-block">
            <b-form-input id="input--id"  v-model="uid" placeholder="Enter your ID"></b-form-input>
            </div>
            </b-form-group>
            <b-form-group>
            <label for="input--id2">비밀번호:&ensp;</label>
            <div class="input--text" style="display:inline-block">
            <b-form-input id="input--id2" v-model="password" placeholder="Enter your Password"></b-form-input>
            </div>
            </b-form-group>
        <b-button type="submit" variant='primary' class="mr-2">로그인</b-button>   
        <a type="button" v-on:click= "moveJoinPage" class="btn btn-primary">회원가입</a>
        </div> 
    </b-form>
</b-container> 

</template>
<script>

// import axios from 'axios';
export default {
   data(){
        return {
            uid:"",
            password:"",
        }
   },
   methods:{
       onSubmit(event){
           event.preventDefault();
        //    axios.post('url');
           this.$router.push({name:'join',params: {name:'환규'}});
       },
       moveJoinPage(){
         this.$router.push('join');
       },
       reset(){

       }
   }

}
</script>

<style>

    #container--box{
        margin-top: 100px;
    }
    #form--group{
        margin: 0 auto;
        border: solid 1px;
        border-radius:0.75rem;
        text-align: center;
    }

    label{
        display:inline-block;
    }
    
    .input--text{
        display:inline-block;
    }

</style>