<template>
<div>
  <BuyerCenterHeader></BuyerCenterHeader>
  <div class="buyer-public-box">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <BuyerCenterSideBar></BuyerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="buyer-public">
            <div class="buyer-public-location">
              当前位置：其他 > 公告
            </div>
            <div class="buyer-public-msgbox">
              <ul class="public-menu">
                <li v-on:click="_type(0)" v-bind:class="type == 0 ? 'active' : ''">商城公告</li>
                <li v-on:click="_type(1)" v-bind:class="type == 1 ? 'active' : ''">市场通知</li>
              </ul>
              <div class="public-msg" v-bind:style="{display: type == 0 ? 'block' : 'none'}">
                <div v-show="!dataSC.length" class="public-msg-kong">
                  <span class="icon-tongzhi"></span>
                  <p>暂无消息</p>
                </div>
                <div class="public-msg-content">
                  <div class="msg-list" v-for="(item,index) in dataSC">
                    <div class="msg-list-img">
                      <img v-bind:src="item.pic_path">
                    </div>
                    <div class="msg-list-tit">
                      <h4>{{item.title}}</h4>
                      <div>{{item.content}}</div>
                    </div>
                    <div class="msg-list-time">
                      <p>{{item.inserted_at.split('T')[0]}}</p>
                      <p><a v-on:click="_detail(index)">详情></a></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="public-msg" v-bind:style="{display: type == 1 ? 'block' : 'none'}">
                <div class="public-msg-kong" style="display:none">
                  <span class="icon-tongzhi"></span>
                  <p>暂无消息</p>
                </div>
                <div class="public-msg-content">
                  <div class="msg-list" v-for="(item,index) in dataMarket">
                    <div class="msg-list-img">
                      <img v-bind:src="item.pic_path">
                    </div>
                    <div class="msg-list-tit">
                      <h4>{{item.title}}</h4>
                      <div>{{item.content}}</div>
                    </div>
                    <div class="msg-list-time">
                      <p>{{item.inserted_at.split('T')[0]}}</p>
                      <p><a v-on:click="_detail(index)">详情></a></p>
                    </div>
                  </div>
                </div>
              </div>
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
  import BuyerCenterHeader from 'components/BuyerCenterHeader'
  import fot from 'components/footer'
  import BuyerCenterSideBar from 'components/BuyerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      BuyerCenterHeader,
      fot,
      BuyerCenterSideBar
    },
    data () {
      return {
        type: 0,
        dataSC: [],
        dataMarket: []
      }
    },
    methods: {
      _type (t) {
        this.type = t
        if (t) {
          this.$http.get('/api/bulletins?type=' + this.type)
            .then(function(ret){
              this.dataMarket = ret.data.data
            },function(){

            })
        }
      },
      _detail (t) {
        var id;
        this.type == 0 ? id = this.dataSC[t].id : id = this.dataMarket[t].id
        location.href = 'http://localhost:9090/module/buyerPublicDetail.html?' + id
      }
    },
    mounted () {
      this.$http.get('/api/bulletins?type=' + this.type)
        .then(function(ret){
          this.dataSC = ret.data.data
        },function(){

        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerPublic.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>