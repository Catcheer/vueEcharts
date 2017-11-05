import Echarts from 'echarts'


export default {
    /**
     * 柱状图
     * 
     */
    barInit() {
        var bar = Echarts.init(document.getElementById('bar'));
        // 绘制图表
        bar.setOption({
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
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        return bar
    },
    /**
     * 南丁格尔图
     * 
     * @returns 
     */
    pieInit() {
        const pie = Echarts.init(document.getElementById('pie'))
        pie.setOption({
            roseType: 'angle', //是否展示成南丁格尔图
            backgroundColor: '#2c343c',
            // 标签的视觉引导线的颜色设为浅色
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    // 设置扇形的颜色
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            // 通过 visualMap 组件将数值的大小映射到明暗度。
            visualMap: {
                // 不显示 visualMap 组件，只用于明暗度的映射
                show: false,
                // 映射的最小值为 80
                min: 80,
                // 映射的最大值为 600
                max: 600,
                inRange: {
                    // 明暗度的范围是 0 到 1
                    colorLightness: [0, 1]
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [{
                        value: 235,
                        name: '视频广告',
                        itemStyle: {
                            normal: {
                                color: 'pink'
                            }
                        }
                    },
                    {
                        value: 274,
                        name: '联盟广告'
                    },
                    {
                        value: 310,
                        name: '邮件营销'
                    },
                    {
                        value: 335,
                        name: '直接访问'
                    },
                    {
                        value: 400,
                        name: '搜索引擎'
                    }
                ]
            }]
        })
        return pie
    },
}