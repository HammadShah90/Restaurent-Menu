// ---------------Menu Buttons------------------------------------------------------------------------------------------


const menuBtns = ['All', 'Broast', 'Burgers', 'Bar.B.Q', 'Rolls', 'Soft Drinks'];
// console.log(menuBtns);

const menuButtons = document.querySelector(".menuButtons");
// console.log(menuButtons);

let menuButtonContent = [];

menuBtns.forEach((btns) => {
    let categoryBtns = `<button class="mainBtns" onclick="changeCategory('${btns}')">${btns}</button>`;
    // console.log(categoryBtns);

    menuButtonContent.push(categoryBtns);
    // console.log(menuButtonContent);
});

menuButtons.innerHTML = menuButtonContent.join("");
// console.log(typeof menuButtons);



// ---------------Menu Items List---------------------------------------------------------------------------------------


const menuItemsList = [
    {
        id: 1,
        category: "Bar.B.Q",
        image: "./Assets/beef-behari-boti.jpg",
        itemName: "Beef Behari Boti",
        price: "Rs:350",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi!     Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 2,
        category: "Rolls",
        image: "./Assets/beef-behari-chatni-roll.jpg",
        itemName: "Beef Behari Chatni Roll",
        price: "Rs:180",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 3,
        category: "Rolls",
        image: "./Assets/beef-behari-ketchup-roll.jpg",
        itemName: "Beef Behari Ketchup Roll",
        price: "Rs:170",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 4,
        category: "Burgers",
        image: "./Assets/beef-burger.jpg",
        itemName: "Beef Burger",
        price: "Rs:350",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 5,
        category: "Burgers",
        image: "./Assets/beef-cheese-burger.jpg",
        itemName: "Beef Cheese Burger",
        price: "Rs:390",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 6,
        category: "Burgers",
        image: "./Assets/beef-jumbo-burger.jpg",
        itemName: "Beef Jumbo Burger",
        price: "Rs:490",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 7,
        category: "Bar.B.Q",
        image: "./Assets/beef-seekh-kabab.jpg",
        itemName: "Beef Seekh Kabab",
        price: "Rs:410",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 8,
        category: "Broast",
        image: "./Assets/cheese-broast.jpg",
        itemName: "Cheese Broast",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 9,
        category: "Bar.B.Q",
        image: "./Assets/chicken-boti.jpg",
        itemName: "Chicken Boti",
        price: "Rs:350",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 10,
        category: "Broast",
        image: "./Assets/Chicken-Broast.jpg",
        itemName: "Chicken Broast Qtr",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 11,
        category: "Burgers",
        image: "./Assets/Chicken-Burgers.jpg",
        itemName: "Chicken Burger",
        price: "Rs:350",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 12,
        category: "Rolls",
        image: "./Assets/chicken-chatni-roll.jpg",
        itemName: "Chicken Chatni Roll",
        price: "Rs:180",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 13,
        category: "Burgers",
        image: "./Assets/chicken-cheese-burger.jpg",
        itemName: "Chicken Cheese Burger",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 14,
        category: "Rolls",
        image: "./Assets/chicken-cheese-roll.jpg",
        itemName: "Chicken Cheese Roll",
        price: "Rs:200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 15,
        category: "Bar.B.Q",
        image: "./Assets/Chicken-gola-kabab.jpg",
        itemName: "Chicken Gola Kabab",
        price: "Rs:430",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 16,
        category: "Rolls",
        image: "./Assets/chicken-juicy-roll.jpg",
        itemName: "Chicken Juicy Roll",
        price: "Rs:180",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 17,
        category: "Burgers",
        image: "./Assets/chicken-jumbo-burger.jpg",
        itemName: "Chicken Jumbo Burger",
        price: "Rs:550",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 18,
        category: "Bar.B.Q",
        image: "./Assets/chicken-malai-boti.jpg",
        itemName: "Chicken Malai Boti",
        price: "Rs:440",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 19,
        category: "Bar.B.Q",
        image: "./Assets/Chicken-Malai-Tikka.jpg",
        itemName: "Chicken Malai Tikka",
        price: "Rs:370",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 20,
        category: "Bar.B.Q",
        image: "./Assets/Chicken-Reshmi-Kabab.jpg",
        itemName: "Chicken Reshmi Kabab",
        price: "Rs:400",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 21,
        category: "Bar.B.Q",
        image: "./Assets/chicken-tikka.jpg",
        itemName: "Chicken Tikka",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 22,
        category: "Soft Drinks",
        image: "./Assets/dew-jumbo.jpg",
        itemName: "Dew Jumbo",
        price: "Rs:220",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 23,
        category: "Broast",
        image: "./Assets/garlic-broast.jpg",
        itemName: "Garlic Broast Qtr",
        price: "Rs:450",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 24,
        category: "Broast",
        image: "./Assets/masala-mayo-broast.jpg",
        itemName: "Masala Mayo Broast Qtr",
        price: "Rs:440",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 25,
        category: "Rolls",
        image: "./Assets/mayo-garlic-roll-1.jpg",
        itemName: "Mayo Garlic Roll",
        price: "Rs:200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 26,
        category: "Soft Drinks",
        image: "./Assets/mirinda-jumbo.jpg",
        itemName: "Mirinda Jumbo",
        price: "Rs:220",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 27,
        category: "Soft Drinks",
        image: "./Assets/pepsi-jumbo.png",
        itemName: "Pepsi Jumbo",
        price: "Rs:220",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 28,
        category: "Rolls",
        image: "./Assets/seek-kabab-cheese-roll.jpg",
        itemName: "Seekh kabab Cheese Roll",
        price: "Rs:200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 29,
        category: "Soft Drinks",
        image: "./Assets/sting-500ml.jpg",
        itemName: "String 500ml",
        price: "Rs:90",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 30,
        category: "Burgers",
        image: "./Assets/zinger-burger.jpg",
        itemName: "Zinger Burger",
        price: "Rs:350",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 31,
        category: "Burgers",
        image: "./Assets/zinger-cheese-burger.jpg",
        itemName: "Zinger Cheese Burger",
        price: "Rs:380",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 32,
        category: "Burgers",
        image: "./Assets/zinger-double-decker-burger.jpg",
        itemName: "Zinger Double Decker Burger",
        price: "Rs:560",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    },
    {
        id: 33,
        category: "Soft Drinks",
        image: "./Assets/7up-jumbo.jpg",
        itemName: "7up Jumbo",
        price: "Rs:220",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis.."
    }
];
// console.log(menuItemsList[0].image);

const menuItems = document.querySelector(".itemsSection");
// console.log(menuItems);

let menuItemListContent = [];

menuItemsList.forEach((items) => {
    let itemsList = `<div class="menuBox">
                        <div class="menuImg">
                            <img src="${items.image}" alt="">
                        </div>
                        <div class="menuText">
                            <div class="upperText">
                                <h4>${items.itemName}</h4>
                                <h5>${items.price}</h5>
                            </div>
                            <div class="lowerText">
                                <p>${items.description}</p>
                            </div>
                        </div>
                    </div>`;
    // console.log(itemsList);

    menuItemListContent.push(itemsList);
    // console.log(menuItemListContent);
})

menuItems.innerHTML = menuItemListContent.join("");
console.log(menuItems);


// ---------------Menu Categery List---------------------------------------------------------------------------------------

const changeCategory = (find) => {
    // console.log(find);


    if (find == "All") {

        menuItems.innerHTML = menuItemListContent.join("");

    } else {

        const findCategory = menuItemsList.filter((menu) => menu.category.toLowerCase() === find.toLowerCase()).map((menu) => {
            return `<div class="menuBox">
                        <div class="menuImg">
                            <img src="${menu.image}" alt="">
                        </div>
                        <div class="menuText">
                            <div class="upperText">
                                <h4>${menu.itemName}</h4>
                                <h5>${menu.price}</h5>
                            </div>
                            <div class="lowerText">
                                <p>${menu.description}</p>
                            </div>
                        </div>
                    </div>`;
        })
        // console.log(findCategory)
        menuItems.innerHTML = findCategory.join("");

    }
}