async function getDetails(){
    const urlParms=  new URLSearchParams(window.location.search);
    const id=urlParms.get('id')
   
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data1= await response.data;
    const title=data1.title;
    const description = data1.description;
    const price = data1.price;
    const image = data1.thumbnail;
    const result=`
   
    <h2>${title}</h2>
    <p>Price:${price}</p>
    <p>${description}</p>
    <img src=${image} /> 
    
    
   
    `;
document.querySelector(".product").innerHTML=result;


    

 
   
}
getDetails(); 