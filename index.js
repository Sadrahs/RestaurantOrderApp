import { menuArray } from "./data.js";

const menu = document.getElementById("menu-contatiner");
const order = document.getElementById("orderBox");

menu.addEventListener("click", function(e){
    if(e.target.classList.contains("add-btn")){
        order.innerHTML += addToOrder(e.target.dataset.id)
    }

   
  
})

function addToOrder(id){
    const targetItem = menuArray.find(function(item){
        return item.id == id

    })

    return `
<div class="orderAndRemove">
                    <p class="order-name">${targetItem.name}</p>
                    <button class="remove-btn" data-remove="remove">Remove</button> 
                </div>  
                <p class="price-order">${targetItem.price}</p>
</div>

`

    


}






function getHTML(){

    const html = menuArray.map(function(item){

    return `
            <div>
                <div class="menu-item" id="menu-items">
                    <div class="photoAndIngredients">
                        <img src="${item.photo}" class="food-img">
                        <div class="food-info">
                            <p class="food-name">${item.name}</p>
                            <p class="food-ingredients">${item.ingredients.join(', ')}</p>
                            <p class="food-price">$${item.price}</p>
                        </div>
                    </div>  
                    <button class="add-btn" data-id="${item.id}">+</button>

                </div>
                <hr>
            </div>


    `
    })
    return menu.innerHTML = html.join("")

}

getHTML()



