
import data from "../data/products.json" with {type:"json"};
//יוצר div ובתוכו את כל הכרטיסים של המוצרים בחנות
export const createStaitionaryCards=(department,document)=>{
let container=document.getElementById("grid-container");
console.log(container);
let myData=data[department];
for (let i  = 0; i <myData.length; i++) {
   let wrapper=document.createElement("div");
   wrapper.setAttribute("class","grid-item");
   container.appendChild(wrapper);
   let img=document.createElement("img");
   img.src=myData[i].image;
   wrapper.appendChild(img);
   let desc=document.createElement("h3");
   desc.innerText=myData[i].title;
   wrapper.appendChild(desc);
   let price=document.createElement("p");
   price.innerText=myData[i].price+" ₪";
   wrapper.appendChild(price);
   let btn=document.createElement("button");
   btn.innerText="🛒 הוספה לסל ";
   wrapper.appendChild(btn);
   
}

}
