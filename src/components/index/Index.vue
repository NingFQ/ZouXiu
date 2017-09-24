<template>
  <div id="index">
  	<!--头部-->
  	<v-header></v-header>
  	<div class="wrapper" ref="wrapper">
			<div class="content">
		  	<!--搜索-->
		  	<v-search></v-search>
		  	<!--轮播图-->
		  	<div id="zx-swiper">
				  	<mt-swipe :auto="4000" :prevent=true>
					  <mt-swipe-item v-for="(item,index) in arrBan" :key="index">
					  	<img :src="item" />
					  </mt-swipe-item>		   
					</mt-swipe>
				</div>
				<!--商品信息列表-->
				<div id="zx-list">
					<ul class="list-item">
							<router-link tag="li" v-for="(item,index) in goodsArr" key={{index}} :to="{name:'Detail',params:{goodid:item.goodsID}}">
								<img class="content-left" :src="item.goodsListImg" />
								<div class="content-right"> 
									<div class="content-top">
										<p>{{item.goodsName}}</p>
									</div>
									<div class="content-down">
										<div class="down-left">
											<span>￥{{(item.price*item.discount*0.1).toFixed(2)}}</span>
											<span>￥{{item.price}}</span>
											<p>{{item.discount}}折</p>
										</div>
									<div class="down-right" @click.stop='addCart'><img src="./car.png"/></div>
									</div>					
								</div>
							</router-link>
					</ul>
				</div>
			</div>  		
  	</div>
  </div>
</template>

<script>
	//jsonp
//	var jsonp = require('jsonp');
		import jsonp from 'jsonp'

	//头部组件
	import Header from './Header.vue'
	//搜索框
	import Search from './Search.vue'
	//滚动插件
	import BScroll from 'better-scroll'
	
	export default {
		name : 'index',
		data() {
			return {
				arrBan : [],
				goodsArr : []
			}
		},
		methods : {
			addCart() {
				this.$store.dispatch('addCart','某件商品')
			}
		},
		components : {
			'v-header' : Header,
			'v-search' : Search
		},
		mounted(){
			//获取轮播图数据  	http://datainfo.duapp.com/shopdata/getBanner.php
			var url = 'http://datainfo.duapp.com/shopdata/getBanner.php';
			jsonp(url, null, (err, res) => {
			  if (err) {
			    console.error(err);
			  } else {
			  	this.arrBan = JSON.parse(res[0].goodsBenUrl)
			  }
			});
			//获取商品信息列表 换一种ajax获取方式    因为需要传参
			this.$http({
        url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
				method: 'JSONP'
      })
			.then( (res) => {
        	this.goodsArr = res.body;
        	this.$nextTick( () => {
						new BScroll ( this.$refs.wrapper , {
							click : true
						} )
					})
      },(err) => {
          console.log(err)
      });
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wrapper{
	width: 100%;
	flex: 1;
	overflow: hidden;
}
.content{
		width: 100%;
	}
#zx-swiper{
	width: 100%;
	height: 3rem;
	font-size: 0.12rem;
}
.mint-swipe-items-wrap img{
	width: 100%;
	height: 100%;
}
#zx-list{
		width: 100%;
	}
.list-item{
	width: 100%;
}
.list-item li{
	width: 100%;
	height: 1.2rem;
	list-style: none;
	font-size: 0.12rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-bottom:0.02rem solid #ccc ;
}
.content-left{
	width: 30%;
	height: 78%;
	margin-right: 0.2rem;
}
.content-right{
	width: 55%;
	height: 75%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.content-top p{
	display: block;
	width: 100%;
	height: 30%;
	font-size: 0.14rem;
	font-family:"楷体";
}
.content-down{
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.down-left{
	width: 70%;
	height: 100%;
}
.down-left span:nth-child(1){
	color: red;
	font-size: 0.16rem;
}
.down-left span:nth-child(2){
	text-decoration: line-through;
}
.down-left p{
	margin-top: 0.05rem;
}
.down-right{
	width: 30%;
	height: 60%;
}
.down-right img{
	width: 100%;
	height: 100%;
}
</style>
