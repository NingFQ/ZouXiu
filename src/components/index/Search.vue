<template>
	<!--//搜索框-->
	<div id="zx-search">
		<div class="search-box">
			<img src="./glass.png" />
			<input type="text" placeholder="请输入搜索内容..."/>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	#zx-search{
		width: 100%;
		height: 0.45rem;
		background: #eee;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search-box{
		width: 85%;
		height: 60%;
		background: #fff;
		border-radius: 0.2rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.search-box img{
		display: block;
		width: 8%;
		height: 80%;
		margin:0  0.15rem;
	}
	.search-box input{
		width: 70%;
		height: 90%;
		border: none;
		outline: none;
	}
</style>