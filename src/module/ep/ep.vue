<template>
<div class="aaa">
  <aaa></aaa>
  <bbb></bbb>
  <div>
    <input class="input" size="50" type="text" @click.stop="open($event,'picker1')" v-model="calendar.items.picker1.value" placeholder="普通日期模式，但限制了开始结束日期，使用了自定义星期标题"><br>
    <input class="input" size="50" type="text" @click.stop="open($event,'picker2')" v-model="calendar.items.picker2.value" placeholder="选择一段时间，不限制开始结束日期，间隔符号使用“.”"><br>
    <input class="input" size="50" type="text" @click.stop="open($event,'picker3')" v-model="calendar.items.picker3.value" placeholder="日期时间模式"><br>

    <input class="input" size="50" type="text" @click.stop="open($event,'picker4')" v-model="calendar.items.picker4.value" placeholder="时间模式"><br>
    <calendar 
    :show.sync="calendar.show"
    :type="calendar.type"
    :value.sync="calendar.value" 
    :x="calendar.x" 
    :y="calendar.y" 
    :begin.sync="calendar.begin" 
    :end.sync="calendar.end" 
    :range.sync="calendar.range"
    :weeks="calendar.weeks"
    :months="calendar.months"
    :sep="calendar.sep">

    </calendar>
</div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  import calendar from "./calendar.vue"
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)

  var aaa = Vue.extend({
    template: '<div><h2>this is h2</h2><p>this is p</p></div>'
  })
  var bbb = Vue.extend({
    template: `
      <div>
        <h2>this is h2</h2>
        <p>this is p</p>
      </div>
    `
  })
  
  export default{

    components: {
      aaa: aaa,
      bbb: bbb,
      calendar
    },
    data () {
      return {
        calendar:{
          show:false,
          x:0,
          y:0,
          picker:"",
          type:"date",
          value:"",
          begin:"",
          end:"",
          value:"",
          sep:"/",
          weeks:[],
          months:[],
          range:false,
          items:{
              // 单选模式
              picker1:{
                  type:"date",
                  begin:"2016-08-20",
                  end:"2016-08-25",
                  value:"2016-08-21",
                  sep:"-",
                  weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                  months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              },
              // 2个日期模式
              picker2:{
                  type:"date",
                  value:"",
                  range:true,
                  sep:".",
              },
              // 日期时间模式
              picker3:{
                  type:"datetime",
                  value:"",
                  sep:"-",
              },
              // 日期时间模式
              picker4:{
                  type:"time",
                  value:"",
              },
          }
        }
      }
    },
    watch:{
        'calendar.value': function (value) {
            this.calendar.items[this.calendar.picker].value=value
        }
    },
    methods: {
      open(e,type) {
            // 设置类型
            this.calendar.picker=type
            this.calendar.type=this.calendar.items[type].type
            this.calendar.range=this.calendar.items[type].range
            this.calendar.begin=this.calendar.items[type].begin
            this.calendar.end=this.calendar.items[type].end
            this.calendar.value=this.calendar.items[type].value
            // 可不用写
            this.calendar.sep=this.calendar.items[type].sep
            this.calendar.weeks=this.calendar.items[type].weeks
            this.calendar.months=this.calendar.items[type].months

            this.calendar.show=true
            this.calendar.x=e.target.offsetLeft
            this.calendar.y=e.target.offsetTop+e.target.offsetHeight+8
        }
    },
    mounted () {

    }
  }
</script>
<style lang="less">
  @import "../../assets/less/ep.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>
