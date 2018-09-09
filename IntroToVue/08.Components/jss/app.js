Vue.component('product-details', {
	props: {
		details: {
			required: true,
			type: Array,	
		}
	},
	template: 
		`
		<ul>
			<li v-for="detail in details">
				{{ detail }}
			</li>
		</ul>	
		`
});

Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true,
		}
	},
	template: `
		<div class="product">
			<div class="product-image">
				<img :src="image" :alt="altText">
			</div>
			<div class="product-info">
				<h1> {{ title }} </h1>
				<p> {{ description }} </p>
				<p> Shipping: {{ shipping }}</p>
				<a :href="link" :target="linkTarget">Check it OUT!</a>
				<p v-if="inStock">In Stock</p>
				<p v-else
						:class="{ notInStock: !inStock }">
					Out of Stock
				</p>
				<p v-if="inventory > 10">More then 10 items in stock</p>
				<p v-else-if="inventory <= 10 && inventory > 0">Less then 10 items in stock</p>
				<p v-else>Item temporary unavailable</p>
				<span> {{ sale }} </span>

				<h2>Color variants:</h2>
				<div class="color-box"
							v-for="(variant, index) in variants" 
							:key="variant.variantID" 
							@mouseover="updateProduct(index)"
							:style=" { backgroundColor: variant.variantColor} ">
				</div>
				
				<h2>Composition of the product:</h2>
				<product-details :details="details"></product-details>

				<h2>Sizes:</h2>
				<ul>
					<li v-for="size in sizes" :key="size.sizeID">
						{{ size.sizeText }} : {{ size.sizeEU }}
					</li>
				</ul>
				
				<div class="button-wrapper">
					<button :class="{ disabledButton: !inStock}"
								v-on:click="addToCart" 
								:disabled="!inStock">
						Add to Cart
					</button>
					<button v-on:click="removeFromCart">Remove from the Cart</button>
				</div>
				<div class="cart">
					<p>Cart({{cart}})</p>
				</div>

			</div>

		</div>
	`,
	data(){
		return {
			product: 'Sock',
			brand: 'Vue Mastery',
			description: 'Warm and comfortable socks',
			selectedVariant: 0,
			altText: 'Pair of Socks',
			link: 'http://vuemastery.com',
			linkTarget: '_blank',
			inventory: 50,
			onSale: true,
			details: ['80% cotton', '20% polyester', 'Gender-neutral'],
			sizes: [
				{ 
					sizeID: 1,
					sizeText: 'Small',
					sizeEU: '34-37'
				},
				{ 
					sizeID: 2,
					sizeText: 'Medium',
					sizeEU: '38-41'
				},
				{ 
					sizeID: 3,
					sizeText: 'Large',
					sizeEU: '42-45'
				},
				{ 
					sizeID: 4,
					sizeText: 'Extra Large',
					sizeEU: '46-49'
				},
			],
			variants: [
				{
					variantID: 2234,
					variantColor: 'green',
					variantImage: './ast/vmSocks-green.jpg',
					variantQuantity: 10,
				},
				{
					variantID: 2235,
					variantColor: 'blue',
					variantImage: './ast/vmSocks-blue.jpg',
					variantQuantity: 0,
				}
			],
			cart: 0,
		};
	},
	methods: {
		addToCart(){
			this.cart += 1;
		},
		removeFromCart(){
			if(this.cart >= 1){
				this.cart -= 1;
			}
		},
		updateProduct(index){
			this.selectedVariant = index;
			console.log(index);
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product;
		},
		image() {
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity;
		},
		sale() {
			if(this.onSale){
				return this.brand + ' ' + this.product + ' is on Sale!';
			} else {
				return this.brand + ' ' + this.product + ' is not on Sale';
			}
		},
		shipping() {
			if(this.premium){
				return 'Free';
			} else {
				return '2.99$';
			}
		}
	},
});


var app = new Vue({
	el: '#app',
	data: {
		premium: true,
	}
});
