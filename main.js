
 let title = document.getElementById('title');
 let price = document.getElementById('price');
 let taxes = document.getElementById('taxes');
 let ads = document.getElementById('ads');
 let discount = document.getElementById('discount');
 let total =document.getElementById('total');
 let count = document.getElementById('count');
 let category = document.getElementById('category');
 let submit = document.getElementById('submit');
 console.log(title,price,taxes,ads,ads,total,count,category,submit);
                   //    map    //
//get total 

    function getTot() 
    { 
        if(price.value !=''){
            let result = (+price.value + +taxes.value + +ads.value )
            - +discount.value ;
        total.innerHTML = result;
        total.style.background = '#040';
        } 

};


//create product 


     

let dataPro ;

if ( localStorage.product !=null ) {
    dataPro= JSON.parse(localStorage.product)
} else {
    dataPro = [];
    
}     
submit.onclick = function(){
     let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
     }  
     dataPro.push(newPro);
     localStorage.setItem('product',      JSON.stringify(dataPro) )
     console.log(newPro)
    }
// save localstorage 
// clear inputs 
// read 
// count 
// delete 
// update 
//search 
// clean data 
    
