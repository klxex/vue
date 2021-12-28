<template>
<div style="margin-top:100px;">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="container container--custom p-5">
        <div id="title" class="row row--custom"><h1 class="col-md-6">회원가입</h1></div>       
        <div class="row row--custom">
              <label class="col-md-2" for = "input--1">아이디:</label>
              <b-form-input class="col-md-6" id = "input--1" v-model = "form.id" required/>
        </div>  
        <div class="row row--custom">
            <label class="col-md-2" for = "input--2">비밀번호:</label>
            <b-form-input
              id="input--2"
              class="col-md-6"
              v-model="form.password"
              placeholder="Enter password"
              required
            ></b-form-input>
        </div>
        <div class="row row--custom">
            <label class="col-md-2" for="input--3">이름:</label>
            <b-form-input
            id="input--3"
            class="col-md-6"
            v-model="form.name"
            placeholder="Enter name">
            </b-form-input>
        </div>
        <div class="row row--custom">
            <label class="col-md-2" for="input--4">권한</label>
            <b-form-select class="col-md-6" id = "input--4" v-model="form.author" :options="options">
            </b-form-select>
        </div>
        <div class="row row--custom">
        <b-button type="submit" variant="primary">가입</b-button>
        <b-button type="reset" variant="danger">초기화</b-button>
        </div>
      </div>
    </b-form>
</div>
</template>

<script>

  import axios from 'axios';
  export default {
    data() {
      return {
        form:{
          id: "",
          password:"",
          name:"",
          author: null,
        },
        show: true,
        options: [
          {value: null,text:"선택"},
          {value: "user",text:"user"},
          {value: "admin",text:"admin"}
        ]
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:8080/login',{
          name: this.form.name,
        });
      },
      onReset(event) {
        event.preventDefault()
      }
    }
  }
</script>
<style>
  #title{
    text-align: center;
  }
  .row--custom{
    justify-content: center;
  }
  .container--custom{
    border: 1px solid rgb(66, 226, 74);
    border-radius: 0.25rem;
  }
</style>