import { menuArray } from "./data.js";

const menu = document.getElementById("menu-contatiner");
const order = document.getElementById("orderBox");
const totalPrice = document.getElementById("total-price-value");
const completeOrderBtn = document.getElementById("complete-order-btn");

const payBtn = document.getElementById("pay-btn");

let orders = document.getElementById("orders");
let ordersArr = []

menu.addEventListener("click", function(e){
    if(e.target.classList.contains("add-btn")){
        order.innerHTML += addToOrder(e.target.dataset.id)
    }

})

order.addEventListener("click", function(e){
    if(e.target.dataset.remove === "remove"){
        e.target.parentElement.parentElement.remove()
        ordersArr = remove(ordersArr,parseInt(e.target.parentElement.nextElementSibling.textContent.slice(1)))
    }
    if(ordersArr.length === 0){
        orders.style.display = 'none';
    }
})


function addToOrder(id){
    const targetItem = menuArray.find(function(item){
        return item.id == id


    })
      orders.style.display = 'block';
      ordersArr.push(targetItem)
      console.log(ordersArr.length)

    const totalPriceValue = ordersArr.reduce((acc, item) => acc + item.price, 0);
    totalPrice.textContent = `$${totalPriceValue}`


    return `
    <div class="order-item-info">
        <div class="orderAndRemove">
            <p class="order-name">${targetItem.name}</p>
            <button class="remove-btn" data-remove="remove">Remove</button> 
        </div>  
        <p class="price-order">$${targetItem.price}</p>
    </div>

`
}


function remove(items,price){
    const index = items.findIndex(item => item.price === price);
    if (index !== -1) {
        items.splice(index, 1);
    }
    return items
}


completeOrderBtn.addEventListener("click", () => {
    const paymentDetails = document.getElementById("payment-details");
    paymentDetails.classList.remove("hidden");
})


payBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const cardNumberInput = document.getElementById("card-number");
    const cvvInput = document.getElementById("cvv");

    if (nameInput.value && cardNumberInput.value && cvvInput.value) {
        const paymentDetails = document.getElementById("payment-details");
        paymentDetails.classList.add("hidden");
        orders.style.display = 'none';

        const thankYouSection = document.getElementById("thank-you");
        thankYouSection.classList.remove("hidden");
    }}
)



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



