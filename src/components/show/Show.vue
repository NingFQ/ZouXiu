<template>
	<div>
		<div class="header">我的秀</div>
		<div class="show-content">
			<div class="info">
				<div class="avatar">
					<img src="./avatar.jpg" alt="头像" />
				</div>
				<div class="status">
					<p>昵称：老牛湾、宁王</p>
					<div class="btn">
						<button class="login">登陆</button>
						<button class="registor">注册</button>
					</div>
				</div>
			</div>
			<div class="meitem">
				<ul>
					<li><span>我的订单</span><img src="./right.jpg" /></li>
					<li><span>我的优惠券</span><img src="./right.jpg" /></li>
					<li><span>浏览记录</span><img src="./right.jpg" /></li>
					<li><span>我的收藏</span><img src="./right.jpg" /></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.header{
		width: 100%;
		height: 0.45rem;
		background: #ccc;
		color: #000;
		font-size: 0.16rem;
		line-height: 0.44rem;
		text-align: center;
		border-bottom: 0.01rem solid #000;
	}
	.show-content{
		width: 90%;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.info{
		width: 100%;
		height: 35%;
		font-size: 0.14rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.info .avatar{
		width: 40%;
		height: 70%;
	}
	.info .avatar img{
		width: 100%;
		height: 100%;
		border-radius: 10%;
	}
	.info .status{
		width: 50%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.info .status p{
		font-size: 0.16rem;
		font-family: "微软雅黑";
		margin-bottom: 0.3rem;
	}
	.info .btn{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}   
	.login,.registor{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
		width: 0.6rem;
		height: 0.3rem;
		background: url(./repeat.png) repeat-x;
		border: none;
		outline: none;
		border-radius:10% ;
		font-size: 0.14rem;
		color: #fff;
	}
	.meitem{
		width: 100%;
		height: 50%;
		background: #fff;
		border: 0.01rem solid #ccc;
		border-radius: 5%;
		font-size: 0.14rem;
	}
	.meitem ul{
		width: 100%;
		height: 100%;
	}
	.meitem li{
		width: 85%;
		height: 25%;
		margin-left: 0.2rem;
		border-bottom: 0.01rem solid #ccc;
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.meitem li span{
		display: inline-block;
		width: 90%;
	}
	.meitem ul li img{
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
	}
	.meitem ul li:last-child{
		border: none;
	}
</style>