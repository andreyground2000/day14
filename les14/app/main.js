import { getUser } from './service.js';
import { getCompatibility } from './table.js';



let img1 = document.querySelector("#ph1");
let img2 = document.querySelector("#ph2");
let start = document.querySelector("#startBtn");
let loveDiv = document.querySelector(".loveDiv");

const users = [];
const images = [...document.querySelectorAll('.images img')];
let c = [];


let objBtns = {
    1: find60s,
    2: find70s,
    3: find80s,
    4: find90s,
    5: find100s,
};

let arr60 = ["60%","61%","62%","63%","64%","65%","66%","67%","68%","69%"];
let arr70 = ["70%","71%","72%","73%","74%","75%","76%","77%","78%","79%"];
let arr80 = ["80%","81%","82%","83%","84%","85%","86%","87%","88%","89%"];
let arr90 = ["90%","91%","92%","93%","94%","95%","96%","97%","98%","99%"];
let arr100 = ["100%"];

function find60s() {
    let res =  arr60.includes(c[0]);
    console.log(res);
}
function find70s() {
    let res =  arr70.includes(c[0]);
    console.log(res);
}
function find80s() {
    let res =  arr80.includes(c[0]);
    console.log(res);
}
function find90s() {
    let res =  arr90.includes(c[0]);
    console.log(res);
}
function find100s() {
    let res =  arr100.includes(c[0]);
    console.log(res);
}
 
function controllers() {
    start.addEventListener("click", () => {
    img1.src = "";
    img2.src = "";
    users.length = 0;
    getUser(setUser, '?gender=female');
    getUser(setUser, '?gender=male');

    });
    //loveDiv.addEventListener("click", )
}




function setUser(user){
    users.push(user);
    if(users.length == 2){
        users.forEach(({ picture }, i) => images[i].src = picture.large);
        c.push(getCompatibility(users));   
    }
}
console.log(c, c[0]);
controllers();




















