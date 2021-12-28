<template>
<div>
    <div id ="todo--head" class="p-4">TODO LIST</div>
    <div class="container">
    <div class="row p-4 row--custom" id="todo--search">
    <input class ="col-md-9 mr-3" type = "text" v-model = "element">
    <button v-on:click= "onClicked" variant = "primary">추가</button>
    </div>
    <div class="row" id="todo--list">
    <div class="todo--element p-4" :key="idx" v-for = "(todo,idx) in todos">
        <h2>{{todo.name}}&ensp;{{idx}}</h2>
    </div>
    </div>
</div>
</div>

</template>

<style>
    
    #todo--head{
        font-size: 5rem;
        border: 1px solid yellowgreen;
        border-radius: 0.25rem;
        text-align: center;
    }
    .todo--element{
        border: 1px solid skyblue;
        border-radius: 0.25rem;
        background-color: skyblue;
        margin: 1rem;
    }
</style>

<script>

export default {
    data(){
        return {
            element: "",
            todos:[
                {name: "asdfsf"},
                {name: "b"}
            ],
            form:"",
        }
    },
    methods:{
        onClicked(){
            this.todos.push({name:this.element});
        }
    }
}
</script>