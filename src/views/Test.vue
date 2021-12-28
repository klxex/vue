<template>
    <div>
        {{hello}}
        <div v-if="false" v-html="kk"></div>
        <div v-else>else</div>
        <div v-bind:key = 'v' v-for="v in dic ">{{v}}</div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            kk:"안녕",
            dic: ['a','b','c']
        }
    },
    props:[
        "hello",
    ]
}
</script>