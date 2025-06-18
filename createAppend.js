// html elements
let body = document.querySelector("body");
let container = document.querySelector(".container");

// 1. Create an h2 element.
// - Store it in a variable called h2.
let h2 = document.createElement("h2");

// 2. Set the innerHTML of h2 to your name.

h2.innerHTML = "Kodi"

// 3. Style at least two different properties for the heading.

h2.style.backgroundColor = "beige";
h2.style.border = "solid black 0.2em";
h2.style.display = "flex";
h2.style.marginLeft = "45vw";
h2.style.marginRight = "45vw";
h2.style.maxWidth = "100px "
h2.style.justifyContent = "center";
h2.style.textAlign = "center";

// 4. Select the container div and append the h2 element.

container.appendChild(h2)

// 5. Create a paragraph element.
// - Store it in a variable called para.

let para = document.createElement("p")

// 6. Set the innerHTML of para to a fact about yourself.

para.innerHTML = "I am 15 years of age"


// 7. Style at least two different properties for the paragraph.

para.style.color = "black";
para.style.fontFamily = "Times New Roman, Times, serif";


// 8. Select the container div and append the paragraph element.

container.appendChild(para)

// Uncomment the code below after completing 1-8.
// Where do you see this on the page?
// Why is it located there even though the body is selected?

 let h1 = document.createElement('h1');
 h1.innerHTML = "My Webpage";
 body.appendChild(h1);
 