// simple alert
console.log('Hey there!');

// access DOM element and change attribute
document.getElementsByTagName("h1")[0].style.color = "#ff0000";

// wait for user to click on page, replace (add on top of) banner with pic if a cat
document.body.addEventListener('click', function () {
     var myParent = document.getElementById("Banner"); 
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});

