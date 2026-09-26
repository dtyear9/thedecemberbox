function addToBasket(name, price){

    let basket =
    JSON.parse(localStorage.getItem("basket")) || [];

    basket.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "basket",
        JSON.stringify(basket)
    );

    alert(name + " has been added to your basket.");
}

function getBasket(){

    return JSON.parse(
        localStorage.getItem("basket")
    ) || [];
}

function displayBasket(){

    let basket = getBasket();

    let basketContainer =
    document.getElementById("basketItems");

    let totalElement =
    document.getElementById("total");

    if(!basketContainer) return;

    let html = "";
    let total = 0;

    basket.forEach((item,index)=>{

        total += item.price;

        html += `
        <div class="basket-item">

            <div>
                <h3>${item.name}</h3>
                <p>£${item.price.toFixed(2)}</p>
            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>
        `;
    });

    basketContainer.innerHTML = html;

    if(totalElement){
        totalElement.innerText =
        total.toFixed(2);
    }
}

function removeItem(index){

    let basket = getBasket();

    basket.splice(index,1);

    localStorage.setItem(
        "basket",
        JSON.stringify(basket)
    );

    displayBasket();
}

function clearBasket(){

    localStorage.removeItem("basket");

    displayBasket();

    let totalElement =
    document.getElementById("total");

    if(totalElement){
        totalElement.innerText =
        "0.00";
    }
}

document.addEventListener(
    "DOMContentLoaded",
    displayBasket
);
