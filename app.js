// ---------------Menu Buttons-----------------

const menuBtns = ['All', 'Broast', 'Burgers', 'Bar B Q', 'Rolls', 'Soft Drinks'];
// console.log(menuBtns);

const menuButtons = document.querySelector(".menuButtons");
// console.log(menuButtons);

let menuButtonContent = [];

menuBtns.forEach((btns) => {
    let categoryBtns = `<button class="mainBtns">${btns}</button>`;
    // console.log(categoryBtns);

    menuButtonContent.push(categoryBtns);
    // console.log(menuButtonContent);
});

menuButtons.innerHTML = menuButtonContent.join("");
// console.log(menuButtons);


// ---------------Menu Items List-----------------

const menuItemsList = [
    {
        id: 1,
        category: "broast",
        image: "./Assets/Chicken-Broast.jpg",
        itemName: "Chicken Broast Qtr",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vel ad alias corrupti temporibus."
    },
    {
        id: 1,
        category: "broast",
        image: "./Assets/Chicken-Broast.jpg",
        itemName: "Chicken Broast Qtr",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vel ad alias corrupti temporibus."
    },
    {
        id: 1,
        category: "broast",
        image: "./Assets/Chicken-Broast.jpg",
        itemName: "Chicken Broast Qtr",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vel ad alias corrupti temporibus."
    },
];
// console.log(menuItemsList[0].image);

const menuItems = document.querySelector(".itemsSection");
// console.log(menuItems);

let menuItemListContent = [];

menuItemsList.forEach((items) => {
    let itemsList = `<img src="${items.image}" alt="">
    <div>
        <div>
            <h4>${items.itemName}</h4>
            <h4>${items.price}</h4>
        </div>
        <p>
            ${items.description}
        </p>
    </div>`;
    // console.log(itemsList);

    menuItemListContent.push(itemsList);
    // console.log(menuItemListContent);
})

menuItems.innerHTML = menuItemListContent.join("");
console.log(menuItems);