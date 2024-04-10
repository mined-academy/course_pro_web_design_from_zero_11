const fs = require("fs");
const Mustache = require("mustache");

const view = {
    titleLeft: "Cafe",
    titleRight: "MIND",
    foods: [
        {
          name: "Classic Cheeseburger",
          price: 8.99,
          description: "A juicy beef patty with melted cheese, lettuce, tomato, and our special sauce."
        },
        {
          name: "Margherita Pizza",
          price: 12.50,
          description: "Traditional Italian pizza with fresh mozzarella cheese, basil, and a rich tomato sauce."
        },
        {
          name: "Caesar Salad",
          price: 7.00,
          description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese."
        },
        {
          name: "Veggie Burger",
          price: 9.50,
          description: "A delicious burger made with a blend of garden vegetables and served with crisp lettuce and tomato."
        }
    ],
    drinks: [
        {
          name: "Lemonade",
          price: 3.50,
          description: "Freshly squeezed lemon juice mixed with pure cane sugar and water."
        },
        {
          name: "Espresso",
          price: 2.75,
          description: "Rich and bold espresso, made from high-quality Arabica beans."
        },
        {
          name: "Craft Beer",
          price: 5.00,
          description: "Local craft beer with a smooth, well-rounded flavor."
        },
        {
          name: "Iced Tea",
          price: 2.50,
          description: "Refreshing cold tea with a hint of lemon and sweetened to perfection."
        }
    ],
    photos: ["1", "2", "3", "4", "5", "6", "7", "8"],
};

const template = fs.readFileSync("template.mustache", "utf8");
const output = Mustache.render(template, view);
fs.writeFileSync("index.html", output);
