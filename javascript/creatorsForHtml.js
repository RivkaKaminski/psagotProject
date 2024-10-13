import data from "../data/products.json" with {type: "json"};
//יוצר כרטיסים ומוסיף להם איוונט של לחיצה
export const createCards = (department, document) => {
   let container = document.getElementById("grid-container");
   console.log(container);
   let myData = data[department];
   
   // יצירת כרטיסי מוצר
   for (let i = 0; i < myData.length; i++) {
      let wrapper = document.createElement("div");
      let desc = document.createElement("h3");
      desc.innerText = myData[i].title;
      wrapper.appendChild(desc);
      wrapper.setAttribute("class", "grid-item");
      container.appendChild(wrapper);

      let img = document.createElement("img");
      img.src = myData[i].image;
      wrapper.appendChild(img);

      let price = document.createElement("p");
      price.innerText = myData[i].price + " ₪";
      price.setAttribute("class", "price");
      wrapper.appendChild(price);

      let btn = document.createElement("button");
      btn.innerText = "🛒 הוספה לסל ";
      btn.setAttribute("class", "btn");
      btn.setAttribute("id", myData[i].catalogId);
      wrapper.appendChild(btn);
   }

   // הוספת אירוע לחיצה על הוספה לסל
   let buttons = document.querySelectorAll(".btn");
   buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
         let item = myData.find(item => item.catalogId == e.target.id);
         console.log(item);
         let cart = JSON.parse(localStorage.getItem("cart"));
         if (!cart) {
            cart = [];
         }
         let cartItem = cart.find(cartItem => cartItem.item.catalogId == item.catalogId);
         if (cartItem)
            cartItem.amount = cartItem.amount + 1;
         else
            cart.push({ item, amount: 1 });
         localStorage.setItem("cart", JSON.stringify(cart));
      });
   });

  //logic for changing pages using select on small screens
  let selectNav=document.getElementById("nav-select");
  selectNav.addEventListener("change",(e)=>{
   console.log(e.target.value);
   let selectedPage=e.target.value;
   if(selectedPage){
      window.location.href=selectedPage;
   }
  })
};

