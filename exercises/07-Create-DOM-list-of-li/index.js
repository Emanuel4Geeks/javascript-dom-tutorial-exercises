let beginning = "<ul>";
let liststring = "";
let ending = "</ul>";

let items = ["First", "Second", "Third"];

items.forEach(item => liststring += `<li>${item} Item</li>`);

// do not modify after this line
document.body.innerHTML = beginning + liststring + ending;
