<template>
  <div id="app">
    <router-view class="zx-context"></router-view>
    <v-footer></v-footer>
  </div>
</template>
	
<script>
//引入底部切换栏
import Footer from "./components/footer/Footer.vue"

export default {
  name: 'app',
  data () {
    return {
    
    }
  },
  components : {
  	"v-footer" : Footer
  }
}
</script>

<style>
			*{
				margin: 0;
				padding: 0;
			}
			html,body{
				width: 100%;
				height: 100%;
				box-sizing:border-box;
				font-size: 31.25vw;
			}
			#app {
			  width: 100%;
			  height: 100%;
			  display: flex;
			  flex-direction: column;
			  background: #eee;
			}
			.zx-context{
				width: 100%;
				height: 91%;
				display: flex;	
				flex-direction: column;
				align-items: center;
			}
</style>
