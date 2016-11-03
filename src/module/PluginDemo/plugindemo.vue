<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>我是头部</h2>
            </div>
        </div>
        <!--This Is Your CodeBody-->
        <div id="modal-template" v-if="showModal">
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">

                  <div class="modal-header">
                    <slot name="header">
                      default header
                    </slot>
                  </div>

                  <div class="modal-body">
                    <slot name="body">
                      default body
                    </slot>
                  </div>

                  <div class="modal-footer">
                    <slot name="footer">
                      default footer
                      <button class="modal-default-button" @click="showModal = false">
                        OK
                      </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->

    </div>
</template>
<script>
    import Vue from 'vue'
    Vue.component('modal', {
      template: '#modal-template'
    })
    // register modal component
    export default{
      data() {
        return{
          showModal:false
        }
      }
    }
</script>
<style lang="less">
    @import "../../assets/css/icons.css";
    @import '../../assets/css/bootstrap.css';
    @import "../../assets/less/public.less";
    @import "../../assets/less/C.less";
    @import "../../assets/less/plugindemo.less";
</style>
