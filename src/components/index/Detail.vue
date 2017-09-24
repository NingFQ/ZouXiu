<template>
		<!--详情页-->
		<div id="zx-detail">
			<!--顶部 文字 返回按钮-->
			<div class="back">
				<router-link tag="span" to="/index">◁</router-link>
				<span>商品详情</span>
			</div>
			<div class="time"><p>距离抢购结束时间还有00:00:00</p></div>
			<div class="goodimg"><img :src="goodinfo.goodsListImg"/></div>
			<div class="info">
				<p>
					<span>￥{{(goodinfo.price*goodinfo.discount*0.1).toFixed(2)}}</span>
					<span>{{goodinfo.goodsName}}</span>
				</p>
			</div>
			<div class="descript">
				<p> 
					<span>市场价：￥{{goodinfo.price}}</span>
					<span>折扣：{{goodinfo.discount}}</span>
					<span>{{goodinfo.buynumber}}人购买</span>
				</p>
			</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				goodinfo : {}
			}
		},
		mounted() {
			this.$http({
	        	url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
	        	params : {
	        		goodsID : this.$route.params.goodid
	        	},
				method: 'JSONP'
	      	})
			.then( (res) => {
				this.goodinfo = res.body[0]
	      	},(err) => {
	          	console.log(err)
	      	});
		}
	}
</script>

<style>
	#zx-detail{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.back{
		width: 100%;
		height: 0.45rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 0.02rem solid #ccc;
	}
	.back span:nth-child(1){
		display: inline-block;
		width: 20%;
		height: 100%;
		font-size: 0.3rem;
		line-height: 0.44rem;
		text-align: center;
	}
	.back span:nth-child(2){
		display: inline-block;
		width: 70%;
		height: 100%;
		font-size: 0.2rem;
		line-height: 0.44rem;
		margin-left: 0.6rem;	
	}
	.time{
		width: 100%;
		height: 0.45rem;
		background: #ccc;
		color: #000;
		font-size: 0.16rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.goodimg{
		margin: 0.3rem 0;
		width: 70%;
		height: 2rem;
		border: 0.01rem solid #999;
	}
	.goodimg img{
		width: 100%;
		height: 100%;
	}
	.info{
		width: 80%;
		height: 0.5rem;
		background: url(jiantou.png) no-repeat;
		font-size: 0.16rem;
		line-height: 0.5rem;
		color: #fff;
		padding-left: 0.4rem;
		background-size: cover;
		
	}
	.info p{
		display: block;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.info p span:nth-child(1){
		margin-right: 0.1rem;
	}
	.descript{
		width: 90%;
		height: 0.4rem;
		margin-top: 0.3rem;
		font-size: 0.14rem;
	}
	.descript span:nth-child(1){
		margin-right: 0.2rem;
		text-decoration: line-through;
	}
	.descript span:nth-child(2){
		margin-right: 0.2rem;
	}
</style>