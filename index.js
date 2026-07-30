import { menuArray } from "./data.js";

const menu = document.getElementById("menu-contatiner");






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
                    <button class="add-btn" id="add-btn">+</button>

                </div>
                <hr>
            </div>


    `
    })
    return menu.innerHTML = html.join("")

}

getHTML()