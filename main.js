async function getproduct() {
    
      const response = await axios.get('https://dummyjson.com/products');
      const data= await response.data;
      const products= data.products;
      const result=products.map(function(ele){
        return ` 
        <h2>${ele.title}</h2>
        <img src=${ele.thumbnail} />
        <a href ="details.html?id=${ele.id}">Details</a>
        `

      }).join("");

   document.querySelector(".product") .innerHTML=result;
  }
getproduct();