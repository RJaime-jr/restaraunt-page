console.log("test");

let content = document.getElementById("content");



let food = document.createElement('div');
food.classList.add('food-container');

let header = document.createElement('h3');
header.classList.add('header');
header.innerText = "Header";

let image = document.createElement('img');
image.classList.add('image');
image.src = "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=1060&t=st=1663902036~exp=1663902636~hmac=bd9af8cfcd0ffa4c1dac19998ce80461bc1a3db04415b7a5b0fad3d7744294ae";


let description = document.createElement('p');
description.classList.add('description');
description.innerText = "description of food";

food.appendChild(header);
food.appendChild(image);
food.appendChild(description);
content.appendChild(food);
