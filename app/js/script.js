document.querySelector(".clothes-container__nav").addEventListener("click", function () {
    if (event.target.classList.contains("nav__setings-link_default")) {
        let activeLinks = document.querySelectorAll(".nav__setings-link_active");
        if (activeLinks.length > 0) {
            for (let i = 0; i < activeLinks.length; i++) {
                activeLinks[i].classList.remove("nav__setings-link_active");
                activeLinks[i].classList.add("nav__setings-link_disabled");
            };
        };
        event.target.classList.toggle("nav__setings-link_active");
    };
});

// должна была быть загрузка товаров с сервера , однако я этого еще не умею и выгружаться будет отсюда

let arrayWithImages = []

for (let i = 0; i < 20; i++) {
    arrayWithImages.push(`img/clothes/Rectangle (${i + 1}).png`);
}

let arrayWithNames = [
    "Preorder - Analog Starter Kit",
    "Preorder - Analog Cards",
    "Preorder - Analog Travel Case",
    "Preorder - Analog Wood Card Holder",
    "Modus Operandi - Artist Collab",
    "Modus Operandi 01 - Artist Collab",
    "Modus Operandi 03 - Artist Collab",
    "Modus Operandi 02 - Artist Collab",
    "Kinto Travel Tumbler",
    "Circular",
    "Facet",
    "Rain",
    "Hollow",
    "Face Mask",
    "Ripple Effect",
    "Premium Leather Mousepad XL",
    "Shoes Like Pottery",
    "Men's Essential Tee",
    "(Enjoy the Journey - Set of 2 - Natural)",
    "Gather Basic Set"
]

for (let i = 0; i < arrayWithImages.length; i++) {
    //создаю обертку
    let productCardWrapper = document.createElement('div');
    productCardWrapper.classList.add('products__card-of-product');
    //создаю обертку

    //создаю картинку товара
    let productCardImg = document.createElement('img');
    productCardImg.classList.add("card-of-product__profuct-image");
    productCardImg.src = arrayWithImages[i];
    productCardImg.setAttribute('alt', 'Здесь должна быть карточка товара , однако из-за проблемы по нашей вине фотография не прогрузилась')
    productCardWrapper.append(productCardImg)
    //создаю картинку товара

    //создаю название товара
    let produstCardName = document.createElement('p')
    produstCardName.innerText = arrayWithNames[i]
    produstCardName.classList.add("card-of-product__name-of-product")
    productCardWrapper.append(produstCardName)
    //создаю название товара

    //создаю цену товара
    let productCardPriceWrapper = document.createElement('p')
    productCardPriceWrapper.classList.add("card-of-product__prices")

    //создаю первый span с ценой без скидки
    let productCardPriceWithoutDiscount = document.createElement('span')
    productCardPriceWithoutDiscount.classList.add("prices__price-without-discount")
    productCardPriceWithoutDiscount.innerText = "$" + Math.floor(Math.random() * (100 - 70) + 50)
    productCardPriceWrapper.append(productCardPriceWithoutDiscount)
    //создаю первый span с ценой без скидки

    //создаю второй span с ценой со скидкой
    let productCardPriceWithDiscount = document.createElement('span')
    productCardPriceWithDiscount.classList.add("prices__price-with-discount")
    productCardPriceWithDiscount.innerText = "$" + Math.floor(Math.random() * (60 - 10) + 10)
    productCardPriceWrapper.append(productCardPriceWithDiscount)
    //создаю второй span с ценой со скидкой

    //создаю цену товара

    //добавляю цену в div товара
    productCardWrapper.append(productCardPriceWrapper)
    //добавляю цену в div товара

    // добавляю div товара в обертку
    document.querySelector('.clothes-container__products').appendChild(productCardWrapper)
    // добавляю div товара в обертку

}


