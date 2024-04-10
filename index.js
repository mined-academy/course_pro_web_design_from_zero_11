const fs = require("fs");
const Mustache = require("mustache");

const view = {
    title: "Cafe MINED",
    foods: [
        {
            name: "Spaghetti Carbonara",
            price: 12.99,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
        {
            name: "Margherita Pizza",
            price: 10.5,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
        {
            name: "Caesar Salad",
            price: 8.75,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
        {
            name: "Caesar Salad 123",
            price: 5.75,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
    ],
    drinks: [
        {
            name: "Spaghetti Carbonara",
            price: 12.99,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
        {
            name: "Margherita Pizza",
            price: 10.5,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
        {
            name: "Caesar Salad",
            price: 8.75,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
        {
            name: "Caesar Salad 123",
            price: 5.75,
            description:
                "Praesent gravida, augue sit amet dignissim rutrum, enim tellus suscipit risus.",
        },
    ],
    photos: ["1", "2", "3", "4", "5", "6", "7", "8"],
};

const template = fs.readFileSync("template.mustache", "utf8");
const output = Mustache.render(template, view);
fs.writeFileSync("index.html", output);
