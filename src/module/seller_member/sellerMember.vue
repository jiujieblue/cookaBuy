<template>
<div>
  <SellerCenterHeader></SellerCenterHeader>           
  
  <div class="sellerMember-m">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="seller-member">
            <div class="seller-member-location">
              当前位置：交易中心 > 会员管理
            </div>
            <div class="seller-member-menu">
              <form class="menu-buyer" v-bind:style="{display:type == 1 ? 'block' : 'none'}">
                <div class="menu-buyer-buyer">
                  <label><span class="em"></span><span class="em"></span>我的买家:</label>
                  <input />
                </div>
                <div class="menu-buyer-time">
                  <label>时间:</label>
                  <input /> - <input />
                </div>
                <div class="menu-buyer-recent">
                  <label>最近消费渠道:</label>
                  <input />
                </div>
                <div class="menu-buyer-total">
                  <label>累计交易金额:</label>
                  <input />
                </div>
                <div class="menu-buyer-submit">
                  <button type="submit">查找</button>
                </div>
              </form>
              <form class="menu-member" v-bind:style="{display:type == 2 ? 'block' : 'none'}">
                <div class="menu-member-buyer">
                  <label><span class="em"></span><span class="em"></span>会员:</label>
                  <input />
                </div>
                <div class="menu-member-time">
                  <label>时间:</label>
                  <input /> - <input />
                </div>
                <div class="menu-member-recent">
                  <label>发展渠道:</label>
                  <input />
                </div>
                <div class="menu-member-total">
                  <label>交易总金额:</label>
                  <input />
                </div>
                <div class="menu-member-submit">
                  <button type="submit">查找</button>
                </div>
              </form>
              <form class="menu-vip" v-bind:style="{display:type == 3 ? 'block' : 'none'}">
                <div class="menu-vip-buyer">
                  <label><span class="em"></span><span class="em_5"></span><span class="em"></span>VIP:</label>
                  <input />
                </div>
                <div class="menu-vip-time">
                  <label>时间:</label>
                  <input /> - <input />
                </div>
                <div class="menu-vip-recent">
                  <label>发展渠道:</label>
                  <input />
                </div>
                <div class="menu-vip-total">
                  <label>交易总金额:</label>
                  <select>
                    <option>111</option>
                    <option>222</option>
                    <option>333</option>
                  </select>
                  <label>状态:</label>
                  <select>
                    <option>111</option>
                    <option>222</option>
                    <option>333</option>
                  </select>
                </div>
                <div class="menu-vip-submit">
                  <button type="submit">查找</button>
                </div>
              </form>
            </div>
            <div class="seller-member-mod">
              <ul>
                <li v-bind:class="type == 1 ? 'active' : ''" v-on:click="_type(1)">我的买家</li>
                <li v-bind:class="type == 2 ? 'active' : ''" v-on:click="_type(2)">我的会员</li>
                <li v-bind:class="type == 3 ? 'active' : ''" v-on:click="_type(3)">我的VIP</li>
              </ul>
            </div>
            <div class="seller-member-detail">
              <table class="detail-buyer" v-bind:style="{display:type == '1' ? 'block' : 'none'}">
                <thead>
                  <tr>
                    <td>序号</td>
                    <td>我的买家</td>
                    <td>最近消费时间</td>
                    <td>最近消费渠道</td>
                    <td>最近交易金额</td>
                    <td>累计交易总金额</td>
                    <td>标记</td>
                    <td class="caozuo">操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12345612345</td>
                    <td>
                      <p>2016-06-06</p>
                      <p>10:25:00</p>
                    </td>
                    <td>快捷支付</td>
                    <td>1000.00</td>
                    <td>1000.00</td>
                    <td>会员,VIP</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>12345612345</td>
                    <td>
                      <p>2016-06-06</p>
                      <p>10:25:00</p>
                    </td>
                    <td>快捷支付</td>
                    <td>1000.00</td>
                    <td>1000.00</td>
                    <td>会员</td>
                    <td><a>设为VIP</a></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>12345612345</td>
                    <td>
                      <p>2016-06-06</p>
                      <p>10:25:00</p>
                    </td>
                    <td>快捷支付</td>
                    <td>1000.00</td>
                    <td>1000.00</td>
                    <td></td>
                    <td><a>设为VIP</a></td>
                  </tr>
                </tbody>
              </table>

              <table class="detail-member" v-bind:style="{display:type == '2' ? 'block' : 'none'}">
                <thead>
                  <tr>
                    <td>序号</td>
                    <td>会员</td>
                    <td>会员编号</td>
                    <td>发展时间</td>
                    <td>发展渠道</td>
                    <td>交易总金额</td>
                    <td class="caozuo">操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12345612345</td>
                    <td>VIP12345</td>
                    <td>快捷支付</td>
                    <td>1000.00</td>
                    <td>1000.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>12345612345</td>
                    <td>VIP12345</td>
                    <td>快捷支付</td>
                    <td>1000.00</td>
                    <td>1000.00</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <table class="detail-vip" v-bind:style="{display:type == '3' ? 'block' : 'none'}">
                <thead>
                  <tr>
                    <td>序号</td>
                    <td>VIP</td>
                    <td>VIP编号</td>
                    <td>加入时间</td>
                    <td>状态</td>
                    <td>交易总金额</td>
                    <td class="caozuo">操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12345612345</td>
                    <td>VIP12345</td>
                    <td>
                      <p>2016-06-06</p>
                      <p>18:00:00</p>
                    </td>
                    <td>生效</td>
                    <td>1000.00</td>
                    <td>生效</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>12345612345</td>
                    <td>VIP12345</td>
                    <td>
                      <p>2016-06-06</p>
                      <p>18:00:00</p>
                    </td>
                    <td>生效</td>
                    <td>1000.00</td>
                    <td>失效</td>
                  </tr>
                </tbody>
              </table>
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
  import SellerCenterHeader from 'components/SellerCenterHeader'
  import SellerCenterSideBar from 'components/SellerCenterSideBar'
  import fot from 'components/footer'
  import Vue from 'vue'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      SellerCenterSideBar,
      SellerCenterHeader,
      fot
    },
    data () {
      return {
        type: 1
      }
    },
    methods: {
      _type (t) {
        this.type = t
      }
    },
    mounted () {

    }
  }
</script>
<style lang="less">
  @import "../../assets/less/sellerMember.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>