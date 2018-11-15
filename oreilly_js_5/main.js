const sam1 = {
    mame: "Sam",
    age: 4,
};
console.log(sam1);

const sam2 = {name: "Sam",age: 4};
console.log(sam2);

console.log(sam1.name === sam2.name);
console.log(sam1.age === sam2.age);
console.log(sam1 === sam2);

const sam3 = {
    name: "Sam",
    classification: {
        kingdom: "Animalia",
        phylim: "Chordata",
        class: "Mamalia",
        order: "Carbivoria",
    },
};

console.log(sam3);
