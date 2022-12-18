let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let dropdown = document.querySelector("#mySelect");

countries.forEach(item => {
    let option = document.createElement("option");
    option.setAttribute("value", item);
    option.innerText = item;

    dropdown.appendChild(option);
});

dropdown.addEventListener('change', (ev) => alert(ev.target.value));