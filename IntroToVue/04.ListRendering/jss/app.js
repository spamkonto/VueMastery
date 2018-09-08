var app = new Vue({
	el: '#app',
	data: {
		product: 'Sock',
		description: 'Warm and comfortable socks',
		image: './ast/vmSocks-green.jpg',
		altText: 'Pair of Socks',
		link: 'http://vuemastery.com',
		linkTarget: '_blank',
		inStock: true,
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
	}
});
