<template>
	<div>
		<div class="ck-search">
			<form action='' method="GET">
				<div class="input-group input-group-lg">
					<span class="input-group-addon ck-search-select-wrap">
						<select class="ck-search-select">
							<option value="p">商品</option>
							<option value="s">店铺</option>
						</select>
					</span>
					<input type="search" name="query" :class="['form-control',isDisabled ? 'disabled' : '']" placeholder="搜索关键字..." ref="query" :value="key || keyword" @blur="_keywordL"/>
					<span class="input-group-btn">
						<button :disabled="isDisabled" type="submit" class="btn btn-primary" @click="_sub">
							搜索
						</button>
					</span>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'
import CkSearch from 'components/CkSearch'

export default {
	components:{
		CkSearch
	},
	data () {
		return{
			isDisabled: false,
			key: ''
		}
	},
	mounted () {
		
	},
	methods: {
		_sub (e) {
			e.preventDefault()
			var val = this.$refs.query.value
  		var regH = /<[^>]*>/g
  		var regStr = /[`~!@#$^&*()=|{}':;,\\[\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_"]*/ig
  		val = val.replace(regH,'')
  		val = val.replace(regStr,'')
			this.$emit('subKeyword',val)
		},
		_keywordL (e) {
			var val = this.key = e.target.value
			val = val.replace(/\s/g,'')
			if(val.length >= 5){
				this.isDisabled = true
			}else{
				this.isDisabled = false
			}
		}
	},
	props: {
		keyword: {
			default: ''
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/less/C.less";
@import '../assets/css/icons.css';
@import '../assets/css/bootstrap.css';
@import "../assets/less/CkSearch.less";
@import "../assets/less/public.less";

</style>