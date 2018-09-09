var app = new Vue({
	el: '#app',
	data: {
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
		title(){
			return this.brand + ' ' + this.product;
		},
		image(){
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock(){
			return this.variants[this.selectedVariant].variantQuantity;
		},
		sale(){
			if(this.onSale){
				return this.brand + ' ' + this.product + ' is on Sale!';
			} else {
				return this.brand + ' ' + this.product + ' is not on Sale';
			}
		}
	}
});
