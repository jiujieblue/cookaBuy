<template>
<div>
  <buyerCenterHeader></buyerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <buyerCenterSideBar></buyerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="buyer-public-detail">
            <div class="buyer-public-detail-location">
              当前位置：其他 > 公告信息
            </div>
            <div class="buyer-public-detail-tit">              
              <div>
                <h4>{{data.title}}</h4>
              </div>
            </div>
            <div class="buyer-public-detail-time">
              <p>{{time}}</p>
              <p>{{data.type == 0 ? '商城公告' : '市场通知'}}</p>
            </div>
            <div class="buyer-public-detail-content">
              <p>{{data.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <fot></fot> 
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  import buyerCenterHeader from 'components/BuyerCenterHeader'
  import fot from 'components/footer'
  import buyerCenterSideBar from 'components/BuyerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      buyerCenterHeader,
      fot,
      buyerCenterSideBar
    },
    data () {
      return {
        data:{},
        time:''
      }
    },
    methods: {

    },
    mounted () {
      var id = location.href.split('?')[1]
      this.$http.get('/api/bulletins/' + id)
        .then(function(ret){
          this.data = ret.data.data
          this.time = this.data.inserted_at.split('T')[0]
        },function(){

        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerPublicDetail.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>