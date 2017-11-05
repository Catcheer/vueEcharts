import Vue from 'vue'
import EchartInit from './echartInit'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const app = new Vue({
    el: '#app',
    data: {
        message: 'vue & echarts',
        appWid: 500,
        someData: ''
    },
    methods: {
        changeWidth: function () {
            let originWitth = this.appWid
            let resizeWidth = 0
            if (originWitth == 500) {
                this.appWid = 800
                resizeWidth = 800
            } else {
                this.appWid = 500
                resizeWidth = 500
            }
            Bar.resize({
                width: resizeWidth
            })
            // vue dome mounted 是异步方法，更新数据后想立即操作dom 用nextTick
            this.$nextTick(function () {
                pie.resize({
                    width: 'auto'
                })
            })

        },
        getData() {
            const option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [15, 10, 16, 12, 11, 50]
                }]
            }
            Bar.setOption(option)
        },
    },
    created() {
        console.log('created')
    },

})


const Bar = EchartInit.barInit()
const pie = EchartInit.pieInit()

window.onresize = function () {
    pie.resize({
        width: 'auto'
    })
}