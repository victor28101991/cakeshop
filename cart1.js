// JavaScript Document
let carts = document.querySelectorAll('add-cart');
let products =[
	{
		name:'Weeding dream',
		tag:'Cake 1',
		price:100,
		inCart: 0
	
	},{
		
	name:'Flower fantasia',
	tag: 'Cake 2',
	price: 80,
	inCart: 0
		},{
			
	name: 'Elegant birthday',
	tag: 'Cake 3',
	price: 160,
	inCart: 0
			
		},{
	name:'Simple beutifull',
	tag: 'Cake 4',
	price: 220,
	inCart: 0
		},
	{
		name:'Flower dream',
	tag: 'Cake 5',
	price: 120,
	inCart: 0
		
	},
	{
	name:'Nuttela and strawberry',
	tag: 'Cake 6',
	price: 160,
	inCart: 0	
		
	}
];


for (let i = 0; i < carts.length; i++){
carts[i].addEventListener('click',()=>)
{cartNumbers(products[i]);
	totalCost(products[i]);
}}

function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumber');
	if (productNumbers){
		document.querySelector('.cart spam').textContent = productNumbers;
		
		
	}
	
}




function cartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	
productNumbers = parseInt(productNumbers);  
	if( productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1 );
		document.querySelector('.cart spam').textContent= productNumbers +1;
	}else{
		localStorage.setItem('cartNumbers', 1 );
		document.querySelector('.cart spam').textContent =1;
		
	}	
	setItems(products);
	
}

function setItems(products){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null){
		
		if(cartItems[product.tag]  != undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		
		cartItems[product.tag].inCart +=1;
		
	}else{
		
		product.inCart = 1;
		cartItems ={
			[product.tag]: product
		}
	}
	
	
	product.inCart =1 ;
	cartItems={
		[product.tag]:product
	}

	localStorage.setItem('productInCart', JSON.stringify(cartItems));
	
}

function totalCost(product){

	let cartCost = localStorage.getItem('totalCost');

				if(cartcost != null){
				   localStorage.setItem("totalCost", cartCost + product.price);
				   
				  
				   }else {
	localStorage.setItem('totalCost', product.price);
	
}
	
	
}

 onLoadCartNumbers();







