<template>
	<div>
		axios
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		mounted() {
//			var url = 'http://datainfo.duapp.com/shopdata/getGoods.php',
			axios.get('http://datainfo.duapp.com/shopdata/getGoods.php')
			.then(function(res){
				console.log(res.data)
			})
		}
	}
</script>

<style>
</style>