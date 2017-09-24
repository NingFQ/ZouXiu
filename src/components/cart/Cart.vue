<template>
	<div>
		<ul id="cart">
			<li v-for="item in $store.state.cartList">
				{{item}}
			</li>
		</ul>
		
	</div>
</template>

<script>
</script>

<style>
	#cart{
		color: red;
		font-size: 0.14rem;
	}
</style>