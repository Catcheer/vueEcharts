import DA from './test'
import Vue from 'vue'
// const Vue =require('vue')



const app = new Vue({
    el: '#app',
    data: {
        message: 'vue & echarts'
    },
    // template: '<div><h1 id="app">{{ message }}</h1></div>',
    methods: {

    },
    created() {
        console.log('created')
    },
    // render(h) {
    //     return h('div', this.message)
    // }
})

DA.add()