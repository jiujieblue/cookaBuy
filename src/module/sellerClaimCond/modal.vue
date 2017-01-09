<style lang="less">
	@import "../../assets/less/C.less";
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	.modal{
		&-mask {
		  position: fixed;
		  z-index: 9998;
		  top: 0;
		  left: 0;
		  width: 100%;
		  height: 100%;
		  background-color: rgba(0, 0, 0, .5);
		  display: table;
		  transition: all 0.3s linear;
		}
		&-wrapper {
		  display: table-cell;
		  vertical-align: middle;
		}
		&-container {
		  max-width: 400px;
		  margin: 0px auto;
		  padding: 10px 20px;
		  background-color: #fff;
		  border-radius: 2px;
		  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		  transition: all 0.3s linear;
		}
		&-header {
		  padding: 10px;
		  font-size: 18px;
		  color: #fcc505;
		  position: relative;
		  link{
		  	&.icon-cha{
			  	float: right;
			  	border-radius: 50%;
			  	font-size: 30px;
			  	color: #989898;
			  	cursor: pointer;
			  	&:hover{
			  		color: #1a1a1a;
			  	}
		  	}
		  }
		}
		&-body {
		  margin: 10px 0;
		  text-align: center;
		  button{
				width: 150px;
				height: 50px;
				border: 1px solid #ececec;
				border-radius: 3px;
				background: #fcc505;
				margin: 20px;
				span{
					font-size: 18px;
					margin-right: 5px;
					margin-bottom: 3px;
				}
		  }
		}
		&-footer{
			padding: 0;
			border: none;
		}
		&-default-button {
		  float: right;
		}
		&-enter {
		  opacity: 1;
		}
		&-leave-active {
		  opacity: 1;
		}
		&-container {
		  -webkit-transform: scale(1.1);
		  transform: scale(1.1);
		}
	}
</style>

<template>
	<div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header" v-if="isHeader">
        	<slot name="header">
          	编辑头像
          	<link rel="stylesheet" class="icon-cha" @click="_closeModal">
        	</slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <button data_img="local" @click="_chooseImg($event, 'local')"><span class="icon-iconfont-tupianku"></span>选择照片</button><br>
						<button data_img="shooting" @click="_chooseImg($event, 'shooting')"><span class="icon-iconfont-xiangji"></span>拍摄照片</button>
						<input style="display:none" ref="changeImg" type="file" @change="_changeImg($event)">
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	

	import Vue from 'vue'
	export default {
	  data () {
	    return {
	    	showModalChild: false
	    }
	  },
	  mouned () {
	  	
	  },
	  methods: {
	  	_changeImg (e) {
	  		var target = e.target
	  		var reg = /(\.jpg|\.png)$/ig
	  		//console.log(reg.test(target.value))
	  		if(!reg.test(target.value)){
	  			alert('请选择JPG或者PNG格式的图片！')
	  			return
	  		}
	  		if (target.files[0]) {
	  			var _this = this
	  			var reader = new FileReader()
	  			reader.onload = function(e){
	  				_this.$emit('changeImg',{img: e.target.result, imgURL: target.files[0]})
	  			}
	  		}
	  		reader.readAsDataURL(target.files[0])
	  	},
	  	_chooseImg (e, str) {
	  		this.$emit('closeModal')
	  		if(str == 'local'){
	  			this.$refs.changeImg.click()
	  		}
	  	},
	  	_closeModal () {
	  		// this.showModalChild = false
	  		this.$emit('closeModal')
	  	}
	  },
	  props: {
	  	isHeader: {
	  		type: Boolean,
	  		default: true
	  	}
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->