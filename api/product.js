
function changeItemsPerPage() {
    const selectElement = document.getElementById("itemsPerPage");
    const selectedValue = selectElement.value;
    getProducts(selectedValue);
}

async function getProducts(limit) {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
        method: "GET",
    });
    const finalResult = await res.json();
    displayProducts(finalResult);

}
getProducts();

function displayProducts(data) {
    console.log(data);
    let temp = ``;
    data.forEach(
        (data, index) =>
        (temp += `<div class="item">
            <div class="itemImage">
            <img src="${data.image}" alt="">
            </div>
            <div class="item--description">
                <h4>${data.title.substring(0, 20)}...</h4>
                ${data.description != null && `<p>${data.description.substring(0, 50)}...</p>`}
                <strong>$ ${data.price}</strong><br/>
            
            </div>
            <div class="item--btn">
                <a href="${data.url}" target="_blank">Read More</a>
            </div>
        </div>`),
    );
    document.querySelector(".items").innerHTML = temp;
}



