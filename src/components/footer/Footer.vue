<template>
	<div id="zx-footer">
		<router-link to="./index" tag="div">
			<img src="./index.png" />
			<span class="index-text">首页</span>
		</router-link>
		<router-link to="./sort" tag="div">
			<img src="./sort.png" />
			<span class="index-text">分类</span>
		</router-link>
		<router-link to="./cart" tag="div">
			<img src="./cart.png" />
			<div class="goodsNum">99</div>
			<span class="index-text">购物车</span>
		</router-link>
		<router-link to="./show" tag="div">
			<img src="./show.png" />
			<span class="index-text">我的秀</span>
		</router-link>
		<router-link to="./more" tag="div">
			<img src="./more.png" />
			<span class="index-text">更多</span>
		</router-link>
	</div>
</template>
<script></script>
<style>
	#zx-footer{
		width: 100%;
		height: 9%;
		background: #484850;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;left: 0;
	}
	#zx-footer div{
		width: 20%;
		height: 100%;
		position: relative;
		color: #fff;
		border-top:0.025rem solid #484850 ;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	#zx-footer div img{
		display: block;
		width: 35%;
		height: 45%;
		margin-top: 0.05rem;
	}
	#zx-footer .index-text{
		display: block;
		width: 100%;
		height: 40%;
		font-size: 0.10rem;
		text-align: center;
		line-height: 0.2rem;
	}
	#zx-footer .router-link-active{
		border-top:0.025rem solid #e4366b ;
	}
	#zx-footer .goodsNum{
		position: absolute;
		display: block;
		top: 0rem;
		right: 0rem;
		width: 0.15rem;
		height: 0.15rem;
		background: #E4366B;
		color: #fff;
		border: none;
		border-radius: 50%;
		font-size: 0.1rem;
		line-height: 0.15rem;
		text-align: center;
	}
</style>