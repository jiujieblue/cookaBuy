<template>
<div>
  <!-- use the modal component, pass in the prop -->
  <div class="addr-del" v-if="showModalDel">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>提示</h3>
          </div>

          <div class="modal-body">
            确定要删除该收货地址吗？
          </div>

          <div class="modal-footer">
            <button @click="_closeModal">关闭</button>
            <button @click="_del">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="addr-add" v-if="showModalAdd">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>添加收货地址</h3>
            <button @click="_closeModal">取 消</button>
          </div>

          <div class="modal-body">
            <form v-on:submit="_submit">
              <div class="form-name">
                <span>*</span>
                <label>收货人姓名 :</label>
                <input type="text" name="receiver_name" v-model="defaultItem.receiver_name">
              </div>
              <div class="form-area">
                <span>*</span>
                <label>所在区域 :<span class="em"></span></label>
                <select v-model="defaultState_id" name="state" v-on:change="_selectState">
                  <option v-for="(item,index) in states" v-bind:value="item.state_id">{{item.state}}</option>
                </select>
                <select v-model="defaultCity_id" name="city" v-on:change="_selectCity">
                  <option v-for="(item,index) in cities" v-bind:value="item.city_id">{{item.city}}</option>
                </select>
                <select v-model="defaultRegion_id" name="area">
                  <option v-for="(item,index) in regions" v-bind:value="item.region_id">{{item.region}}</option>
                </select>
              </div>
              <div class="form-detail">
                <span>*</span>
                <label>详细地址 :<span class="em"></span></label>
                <input type="text" name="address" v-model="defaultItem.address">
              </div>
              <div class="form-code">
                <span>*</span>
                <label>邮政编码 :<span class="em"></span></label>
                <input type="text" name="zipcode" v-model="defaultItem.zipcode">
              </div>
              <div class="form-mobile">
                <span>*</span>
                <label>手机号码 :<span class="em"></span></label>
                <input type="text" name="mobile" v-model="defaultItem.mobile">
              </div>
              <div class="form-phone">
                <span class="em_5"></span>
                <label>电话号码 :<span class="em"></span></label>
                <input type="text" name=""> -
                <input type="text" name=""> -
                <input type="text" name="">
              </div>
              <div class="form-default">
                <input type="checkbox" v-model="defaultChecked">
                <label>设置为默认地址</label>
              </div>
              <div class="form-submit">
                <button @click="showModalAdd=false">保存收货地址</button>
              </div>
            </form>
          </div>
            
        </div>
      </div>
    </div>
  </div>
  <BuyerCenterHeader></BuyerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <BuyerCenterSideBar></BuyerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="buyer-addr">
            <div class="buyer-addr-location">
              当前位置：账号管理 > 收货地址
            </div>
            <div class="buyer-addr-add">
              <button v-on:click="_showModal(-1)">新增收货地址</button>
            </div>
            <table class="buyer-addr-list">
              <thead>
                <tr>
                  <td>收货人</td>
                  <td>所在地址</td>
                  <td>详细地址</td>
                  <td>邮编</td>
                  <td>联系方式</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in data">
                  <td><span class="icon-moren" v-bind:style="{display: item.default ? 'inline-block' : 'none'}"></span>{{item.receiver_name}}</td>
                  <td>{{item.state}}{{item.city}}{{item.area}}</td>
                  <td class="addrdet">
                    <div class="addrdetail">
                      <p>{{item.address}}</p>
                    </div>
                  </td>
                  <td>{{item.zipcode}}</td>
                  <td>{{item.mobile}}</td>
                  <td class="spc">
                    <a v-bind:style="{display: item.default ? 'none' : 'inline-block'}" v-on:click="_default(index)">设为默认</a>
                    <span class="em" v-bind:style="{display: item.default ? 'none' : 'inline-block'}"></span>
                    <span v-bind:style="{display: item.default ? 'none' : 'inline-block'}">|</span>
                    <span class="em" v-bind:style="{display: item.default ? 'none' : 'inline-block'}"></span>
                    <a v-on:click="_bianji(index)">编辑</a>
                    <span class="em"></span>
                    <span class="icon-sanchu" v-on:click="_showModal(index)"></span>
                  </td>
                </tr>
              </tbody>
            </table>
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
        showModalDel: false,
        showModalAdd: false,
        data: [],
        delNum: -1,
        states: [],
        cities: [],
        regions: [],
        bianjiNum: -1,
        defaultChecked: false,
        defaultItem: {},
        defaultState_id: -1,
        defaultCity_id: -1,
        defaultRegion_id: -1
      }
    },
    methods: {
      _showModal (t) {
        if(t == -1){
          this.showModalAdd = true
          this.showModalDel = false
          this._getAddr()
        }
        else{
          this.delNum = this.data[t].id
          this.showModalAdd = false
          this.showModalDel = true
        }        
      },
      _closeModal () {
        this.delNum = -1
        this.bianjiNum = -1
        this.defaultChecked = false
        this.defaultItem = {}
        this.defaultState_id = ''
        this.defaultCity_id = ''
        this.defaultRegion_id = ''
        this.showModalAdd = false
        this.showModalDel = false
      },
      _bianji (t) {
        this.showModalAdd = true
        this.bianjiNum = t
        this.defaultItem = this.data[t]
        this.defaultChecked = this.data[t].default
        this._getAddr()
      },
      _getAddr () {
        this.$http.get('/api/states')
          .then(function(ret){
            this.states = ret.data.data           
            this.defaultState_id = this.states[0].state_id
            if(this.bianjiNum != -1){
              for(var i = 0;i < this.states.length;i++){
                if(this.defaultItem.state == this.states[i].state){
                  this.defaultState_id = this.states[i].state_id
                  break
                }
              }
            }
            this.$http.get('/api/cities?state_id='+ this.defaultState_id)
              .then(function(ret){
                this.cities = ret.data.data
                this.defaultCity_id = this.cities[0].city_id
                for(var j = 0;j < this.cities.length;j++){
                  console.log(this.cities,this.cities[j].city)
                  if(this.defaultItem.city == this.cities[j].city){
                    console.log(j)
                    this.defaultCity_id = this.cities[j].city_id
                    break
                  }
                }
                this.$http.get('/api/regions?city_id=' + this.defaultCity_id)
                  .then(function(ret){
                    this.regions = ret.data.data
                    this.defaultRegion_id = this.regions[0].region_id
                    for(var k = 0;k < this.regions.length;k++){
                      if(this.defaultItem.area == this.regions[k].region){
                        this.defaultRegion_id = this.regions[k].region_id
                        break
                      }
                    }
                  },function(err){
                    console.log(err)
                  })
              },function(err){
                console.log(err)
              })
          },function(err){
            console.log(err)
          })
      },
      _del () {
        this.showModalDel = false
        this.$http.delete('/api/addresses/' + this.delNum)
          .then(function(ret){
            console.log(ret.data)
          },function(err){
            console.log(err)
          })
      },
      _default (t) {
        this.$http.patch('/api/addresses/'+ this.data[t].id, {'address':{'default': true}})
          .then(function(ret){
            console.log(ret.data)
          },function(err){
            console.log(err)
          })
      },
      _selectState () {
        this.$http.get('/api/cities?state_id=' + this.defaultState_id)
          .then(function(ret){
            this.cities = ret.data.data
            this.defaultCity_id = this.cities[0].city_id
            this.$http.get('/api/regions?city_id=' + this.cities[0].city_id)
              .then(function(ret){
                this.regions = ret.data.data
                this.defaultRegion_id = this.regions[0].region_id
              },function(err){
                console.log(err)
              })
          },function(err){
            console.log(err)
          })
      },
      _selectCity () {
        this.$http.get('/api/regions?city_id=' + this.defaultCity_id)
          .then(function(ret){
            this.regions = ret.data.data
            this.defaultRegion_id = this.regions[0].region_id
          },function(err){
            console.log(err)
          })
      },
      _submit (e) {
        e.preventDefault()
        var data = fto(e.target)
        data.user_id = 1
        for(var i = 0;i < this.states.length;i++){
          if(data.state == this.states[i].state_id){
            data.state = this.states[i].state
          }
        }
        for(var j = 0;j < this.cities.length;j++){
          if(data.city == this.cities[j].city_id){
            data.city = this.cities[j].city
          }
        }
        for(var k = 0;k < this.regions.length;k++){
          if(data.area == this.regions[k].region_id){
            data.area = this.regions[k].region
          }
        }
        data.default = this.defaultChecked
        if(!data.receiver_name || !data.state || !data.city || !data.area || !data.address || !data.mobile){
          return false
        }
        if(this.bianjiNum == -1){
          this.$http.post('/api/addresses', {'address': data})
            .then(function(ret){
              console.log(ret.data)
            },function(err){
              console.log(err)
            })
        }
        else{
          this.$http.put('/api/addresses/' + this.data[this.bianjiNum].id, {'address':{}})
            .then(function(ret){
              console.log(ret.data)
            },function(err){
              console.log(err)
            })
        }
      }
    },
    mounted () {
      this.$http.get('/api/addresses')
        .then(function(ret){
          this.data = ret.data.data
        },function(err){
          console.log(err)
        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerAddr.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>