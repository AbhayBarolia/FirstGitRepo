//let items=document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor="green";
// for(let i=0;i<items.length;i++)
// {
    // items[i].style.fontWeight="bold";
// }
// let li = document.getElementsByTagName("li");
// let item2=document.querySelector("li:nth-child(2)");
// let item4=document.querySelector("li:nth-child(4)");
// item4.style.display="none";

// let li2 = document.querySelector("li:nth-child(2)");
// li2.style.color="green";

// let li1 = document.querySelectorAll("li:nth-child(odd)");
// for(let i=0;i<li1.length;i++)
// li1[i].style.backgroundColor="red";

let var1=document.querySelector("header");
// console.log(var1.parentElement);
// console.log(var1.lastElementChild);
// console.log(var1.lastChild);
// console.log(var1.parentElement);
const para = document.createElement("p");
para.innerText="This para is added from JS";
para.setAttribute("title","Hello");
document.getElementById("main-header").appendChild(para);
// console.log(var1.firstElementChild);
// console.log(var1.firstChild);
// console.log(var1.nextSibling);
// console.log(var1.nextElementSibling);
// console.log(var1.previousSibling);
// console.log(var1.previousElementSibling);

let textNode = document.createTextNode("Hello"); 
document.body.appendChild(textNode);

