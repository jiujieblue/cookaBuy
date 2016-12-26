<style lang="less">
	@import '../../assets/css/icons.css';
</style>
<template>
	<div>
		<Slide :slideData="slideData">
			<div id="d1">
				<img src="../../assets/images/xiangkesinanzhuang.jpg" alt="">
			</div>
			<div>
				<img src="../../assets/images/xiongmaoyunfuzhuang.jpg" alt="">
			</div>
			<div>
				<img src="../../assets/images/yirenzui.jpg" alt="">
			</div>
			<div>
				<img src="../../assets/images/yuanyuan.jpg" alt="">
			</div>
			<div slot='left' class="slide-left">
				<span class="icon-xiangqian"></span>
			</div>
			<div slot='right' class="slide-right">
				<span class="icon-xianghou"></span>
			</div>
		</Slide>
	</div>
</template>

<script>
	import Slide from 'components/Slide'
  export default {
    components: {
      Slide
    },
    data() {
	    return {
	    	slideData: {
	    		moveTime: 2000,
	    		num: 2
	    	}
	    }
	  },
	  methods:{

	  }

  }
</script>
