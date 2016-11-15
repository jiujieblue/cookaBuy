<style lang="less">
	@import '../assets/less/Calendar.less';
</style>

<template>
  <div @click.stop=""  class="calendar" v-show="show" :style="{'left':x+'px','top':y+'px'}" transition="calendar" transition-mode="out-in">
    <div  v-if="type!='time'">
      <div class="calendar-tools">
        <span class="icon-xiangqian calendar-prev" @click="prev"></span>
        <span class="icon-xianghou calendar-next"  @click="next"></span>
        <div class="text center">
          <input type="text" v-model="year" :value="year" @change="render(year,month)" min="1970" max="2100" maxlength="4">
           /&nbsp;
          {{monthString}}
        </div>
      </div>
      <table cellpadding="5">
      <thead>
        <tr>
          <th v-for="week in weeks">{{week}}</th>
        </tr>
      </thead>
      <tr v-for="(day,k1) in days">
        <td
        v-for="(child,k2) in day"
        :class="{'selected':child.selected,'disabled':child.disabled,lastmonth:child.lastmonth}"
        @click="select(k1,k2,$event)" @touchstart="select(k1,k2,$event)">
        <span>{{child.day}}</span>
        <div class="lunar" v-if="showLunar">{{child.lunar}}</div>
        </td>
      </tr>
      </table>
    </div>
    <div class="calendar-time" v-show="type=='datetime'||type=='time'">
      <div class="timer">
        <input type="text" v-model="hour" :value="hour" min="0" max="23" maxlength="2">
        时
        <input type="text" v-model="minute" :value="minute" min="0" max="59" maxlength="2">
        分
        <input type="text" v-model="second" :value="second" min="0" max="59" maxlength="2">
        秒
      </div>
    </div>
    <div class="calendar-button" v-show="type=='datetime'||type=='time'||range">
      <span @click="ok">确定</span>
      <span @click="setShow" class="cancel">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      show: {
          type: Boolean,
          default: false
      },
      type: {
          type: String,
          default: "date"
      },
      value: {
          type: [String],
          default: ""
      },
      x: {
          type: Number,
          default: 0
      },
      y: {
          type: Number,
          default: 0
      },
      begin: {
          type: String,
          twoWay: true,
          default: ""
      },
      end: {
          type: String,
          default: ""
      },
      range: {
          type: Boolean,
          default: false
      },
      weeks: {
          type: Array,
          default:function(){
              return ['日', '一', '二', '三', '四', '五', '六']
          }
      },
      months:{
          type: Array,
          default:function(){
              return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
          }
      }
  },
  data() {
      return {
        showLunar: true,

          rangeBegin: [],
          rangeEnd: [],
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          sep: '',
          second: 0,
          days: [],
          today: [],
          currentMonth: Number,
          monthString:"",
      }
  },
  created() {
      this.init()
       //延迟绑定事件，防止关闭
      window.setTimeout(() => {
          document.addEventListener('click', (e) => {
              e.stopPropagation()
              this.setShow()
          }, false)
      }, 500)
  },
  // 测试用
  watch: {
      // year(val, old) {
      //     console.log("new %s old %s time:%s", val, old, +new Date)
      // },
      show(){
          this.init()
      },
      value(){
          this.init()
      }
  },
  methods: {

      // 日期补零
      zero(n) {
          return n < 10 ? '0' + n : n
      },

      // 初始化  年份 月份 日期 等等一些信息
      init(){
          var now = new Date();

          if (this.value != "") {
            // 提前设置时间
              if (this.value.indexOf("-") != -1) this.sep = "-"
              if (this.value.indexOf(".") != -1) this.sep = "."
              if (this.value.indexOf("/") != -1) this.sep = "/"
              // 普通时间模式
              if (this.type == "date") {
                  var split = this.value.split(this.sep)
                  this.year = parseInt(split[0])
                  this.month = parseInt(split[1]) - 1
                  this.day = parseInt(split[2])
              // 日期时间模式
              } else if (this.type == "datetime") {
                  var split = this.value.split(" ")
                  var splitDate = split[0].split(this.sep)
                  this.year = parseInt(splitDate[0])
                  this.month = parseInt(splitDate[1]) - 1
                  this.day = parseInt(splitDate[2])

                  if (split.length > 1) {
                      var splitTime = split[1].split(":")
                      this.hour = splitTime[0]
                      this.minute = splitTime[1]
                      this.second = splitTime[2]
                  }
              }
              // 时间段模式
              if (this.range) {
                  var split = this.value.split("~")

                  if (split.length > 1) {
                      var beginSplit = split[0].split(this.sep)
                      var endSplit = split[1].split(this.sep)
                      this.rangeBegin = [parseInt(beginSplit[0]), parseInt(beginSplit[1] - 1), parseInt(beginSplit[2])]
                      this.rangeEnd = [parseInt(endSplit[0]), parseInt(endSplit[1] - 1), parseInt(endSplit[2])]
                  }
              }
          } else {
            // 未设置时间
              if(this.sep=="")this.sep = "/"

              this.year = now.getFullYear()
              this.month = now.getMonth()
              this.day = now.getDate()
              this.hour = this.zero(now.getHours())
              this.minute = this.zero(now.getMinutes())
              this.second = this.zero(now.getSeconds())

              if (this.range) {
                  this.rangeBegin = [this.year, this.month, this.day]
                  this.rangeEnd = this.rangeBegin
              }
          }

          this.monthString = this.months[this.month]
          this.render(this.year, this.month)
      },

      // 渲染日期
      render(y, m) {
          var firstDayOfMonth = new Date(y, m, 1).getDay()         //当月第一天 对应周几
          var lastDateOfMonth = new Date(y, m + 1, 0).getDate()    //当月最后一天
          var lastDayOfLastMonth = new Date(y, m, 0).getDate()     //上一个月的最后一天

          //更新月份以及日期
          this.year = y
          this.month = m

          this.currentMonth = this.months[m]  //当前月份
          var seletSplit = this.value.split(" ")[0].split(this.sep) // 分隔日期和时间 再进行分隔年份、月份、号数

          var i, line = 0,temp = []
          for (i = 1; i <= lastDateOfMonth; i++) {
              var dow = new Date(y, m, i).getDay()  // 对应号数的周几

              var options = {
              	day: '',
              }
              if(dow == 0){
              	temp[line] = []

              	// 如果第一天不是周日
              }else if (i == 1) {
                  temp[line] = []
                  var k = lastDayOfLastMonth - firstDayOfMonth + 1
                  for (var j = 0; j < firstDayOfMonth; j++) {
                      temp[line].push({
                          day: k,
                          disabled: false,
                          lastmonth: true
                      })
                      k++;
                  }
              }

              // 第一行
              if (dow == 0) {
                  temp[line] = []
              // 如果第一天不是周日
              } else if (i == 1) {
                  temp[line] = []
                  var k = lastDayOfLastMonth - firstDayOfMonth + 1
                  for (var j = 0; j < firstDayOfMonth; j++) {
                      temp[line].push({
                          day: k,
                          disabled: false,
                          lastmonth: true
                      })
                      k++;
                  }
              }

              // 如果是时间段范围
              if (this.range) {
                  var options = {
                      day: i
                  }
                  if (this.rangeBegin.length > 0) {
                      var beginTime = Number(new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]))
                      var endTime = Number(new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]))
                      var thisTime = Number(new Date(this.year, this.month, i))
                      if (beginTime <= thisTime && endTime >= thisTime) {
                          options.selected = true
                      }
                  }
                  temp[line].push(options)
              } else {
                  // 单选模式
                  var chk = new Date()
                  var chkY = chk.getFullYear()
                  var chkM = chk.getMonth()
                  // 匹配上次选中的日期
                  if (
                      parseInt(seletSplit[0]) == this.year &&
                      parseInt(seletSplit[1]) - 1 == this.month &&
                      parseInt(seletSplit[2]) == i) {
                      temp[line].push({
                          day: i,
                          selected: true
                      })
                      this.today = [line, temp[line].length - 1]
                  }

                   // 没有默认值的时候显示选中今天日期
                  else if (chkY == this.year && chkM == this.month && i == this.day && this.value == "" ) {

                      temp[line].push({
                          day: i,
                          selected: true
                      })
                      this.today = [line, temp[line].length - 1]
                  }
                  else{
                      // 设置可选范围
                      // console.log(this.begin,this.end);
                      var options = {
                        day: i,
                        selected: false
                      }
                      
                      if (this.begin != "") {
                          var beginSplit = this.begin.split(this.sep)
                          var beginTime = Number(new Date(
                              parseInt(beginSplit[0]),
                              parseInt(beginSplit[1]) - 1,
                              parseInt(beginSplit[2])
                          ))
                          if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
                      }
                      if (this.end != ""){
                          var endSplit = this.end.split(this.sep)
                          var endTime = Number(new Date(
                              parseInt(endSplit[0]),
                              parseInt(endSplit[1]) - 1,
                              parseInt(endSplit[2])
                          ))
                          if (endTime <  Number(new Date(this.year, this.month, i))) options.disabled = true
                      }
                      temp[line].push(options)
                  }
              }

              // 最后一行
              if (dow == 6) { //如果是周六 另起一行
                  line++
              } else if (i == lastDateOfMonth) {
                  var k = 1
                  for (dow; dow < 6; dow++) {
                      temp[line].push({
                          day: k,
                          disabled: false,
                          lastmonth: true
                      })
                      k++
                  }
              }
          } //end for

          this.days = temp
      },
      // 上月
      prev(e) {
          e.stopPropagation()
          if (this.month == 0) {
              this.month = 11
              this.year = parseInt(this.year) - 1
          } else {
              this.month = parseInt(this.month) - 1
          }
          this.monthString=this.months[this.month]
          this.render(this.year, this.month)
      },
      //  下月
      next(e) {
          e.stopPropagation()
          if (this.month == 11) {
              this.month = 0
              this.year = parseInt(this.year) + 1
          } else {
              this.month = parseInt(this.month) + 1
          }
          this.monthString=this.months[this.month]
          this.render(this.year, this.month)
      },
      // 选中日期
      select(k1, k2, e) {
          if (e != undefined) e.stopPropagation()
              // 日期范围
          if (this.range) {
              if (this.rangeBegin.length == 0 || this.rangeEndTemp != 0) {
                  this.rangeBegin = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second]
                  this.rangeBeginTemp = this.rangeBegin
                  this.rangeEnd = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second]
                  this.rangeEndTemp = 0
              } else {
                  this.rangeEnd = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second]
                  this.rangeEndTemp = 1
                      // 判断结束日期小于开始日期则自动颠倒过来
                  if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
                      this.rangeBegin = this.rangeEnd
                      this.rangeEnd = this.rangeBeginTemp
                  }
              }
              this.render(this.year, this.month)
          } else {
              // 取消上次选中
              if (this.today.length > 0) {
                  this.days[this.today[0]][this.today[1]].selected = false
              }
              // 设置当前选中天
              this.days[k1][k2].selected = true
              this.day = this.days[k1][k2].day
              this.today = [k1, k2]
              if (this.type == 'date') {
                this.$emit('setValue', this.year + this.sep + this.zero(this.month + 1) + this.sep + this.zero(this.days[k1][k2].day))
                this.setShow()
              }
          }

      },
      // 多选的时候提交
      ok() {
          // 只有有日期的时候才执行
          if(this.type!="time"){
              let isSelected = false
              this.days.forEach(v=>{
                  v.forEach(vv=>{
                      if(vv.selected){
                          isSelected = true
                      }
                  })
              })
              if(!isSelected)return false
          }

          if (this.range) {
            this.$emit('setValue', this.output(this.rangeBegin) + " ~ " + this.output(this.rangeEnd))
          } else {
            this.$emit('setValue', this.output([
              this.year,
              this.month,
              this.day,
              parseInt(this.hour),
              parseInt(this.minute),
              parseInt(this.second)
            ]))
          }
          this.setShow()
      },
      // 隐藏控件
      setShow() {
      		this.$emit('setShow')
      },
      // 格式化输出
      output(args) {
          if (this.type == 'time') {
              return this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5])
          }
          if (this.type == 'datetime') {
              return args[0] + this.sep + this.zero(args[1] + 1) + this.sep + this.zero(args[2]) + " " + this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5])
          }
          if (this.type == 'date') {
              return args[0] + this.sep + this.zero(args[1] + 1) + this.sep + this.zero(args[2])
          }
      }
  }
}
</script>

