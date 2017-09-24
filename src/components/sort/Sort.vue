<template>
  <div>
  	<!--头部-->
   	<div class="zx-header">
			<img src="./logo.png"/>
		</div>
		<!--搜索框-->
		<div class="zx-search">
			<div class="search-box">
				<img src="./glass.png" />
				<input type="text" placeholder="请输入搜索内容..."/>
			</div>
		</div>
  	<!--分类-->
  	<div class="zx-sort">
  		<ul class="sortlist">
  			<li><span>衬衫</span><img src="./right.jpg" /></li>
  			<li><span>女装T恤</span><img src="./right.jpg" /></li>
  			<li><span>珠宝配饰</span><img src="./right.jpg" /></li>
  			<li><span>美食健康</span><img src="./right.jpg" /></li>
  			<li><span>化妆品</span><img src="./right.jpg" /></li>
  			<li><span>品牌专场</span><img src="./right.jpg" /></li>
  			<li><span>奢侈品</span><img src="./right.jpg" /></li>
  		</ul>	
  	</div>
  </div>
</template>
<script>
  export default {
    
  }
</script>

<style>
.zx-header{
	width: 100%;
	height: 0.45rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	border-bottom: 0.02rem solid #ccc;
}
.zx-header img{
	width: 50%;
	height: 80%;
}
.zx-search{
		width: 100%;
		height: 0.45rem;
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
	.zx-sort{
		width: 100%;
		flex: 1;
		overflow: scroll;
	}
	.sortlist{
		width: 100%;
		border-top: 0.02rem solid #ccc;
	}
	.sortlist li{
		width: 100%;
		height: 0.5rem;
		font-size: 0.12rem;
		background: #fff;
		border-bottom: 0.01rem solid #999;
		padding-left: 0.2rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.sortlist li span{
		text-align: left;
		width: 80%;
	}
	.sortlist li img{
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		
	}
</style>