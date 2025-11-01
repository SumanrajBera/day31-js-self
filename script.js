let changeP = document.querySelector("#changeP");
changeP.innerHTML = "<b>Updated: </b> By Javascript"; 

let img = document.querySelector("img");
console.log(img.getAttribute("src"))

let div = document.querySelector(".creation");
let p = document.createElement('p')
let p2 = document.createElement('p')
p.textContent = "Created and Appended By Javascript"
p2.textContent = "Created and Prepend By Javascript"
div.appendChild(p)
div.prepend(p2)


// div.remove(p) //Removes the whole element

// div.removeChild(p2) // Removes child node from the element