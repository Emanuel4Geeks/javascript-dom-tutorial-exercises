let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newLi=document.createElement("li");
	newLi.innerHTML="Forth element";

	document.querySelector("#myList").appendChild(newLi);
});
