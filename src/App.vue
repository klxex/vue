<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
export default {
  name: "App",
  data(){
    return {
      a : "hello world",
      title: "my_title"
    }
  },
  components: {
    Header,
  },
  computed: {
    changing(){
      return this.$store.commit("change");
    }
  }
  ,
  head: {
    title () {
       return {
         inner: "환규"
       }
    },
    meta: [{
      name: "환규의 모험1",
      content: "우리의 인생이다"
      }
    ]
      
    
  }

};
</script>

<style>
</style>