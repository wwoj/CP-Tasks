const APIURL = " https://gorest.co.in/public-api/categories";

fetch(APIURL)
.then(result=>{
    return result.json();
})
.then(respons=>{
console.log("Zadanie 2:")
 if(searchCategory(respons.data,"Jewelry"))
 {
    console.log("The searched category exists");
   
 }
 else
 {
    console.log("The category you are looking for does not exist");
  
 }
})


function searchCategory(arr,category)
{
  
   let ww= arr.find(elem=>{
        if(elem.name.includes(category))
        {
            return elem;
        }
    })
    if(ww===null)
    {
        return false;
    }
    else
    {
        return true;
    }
    
}