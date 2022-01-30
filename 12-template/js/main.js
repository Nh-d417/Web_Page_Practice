const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = frame.querySelectorAll("audio");

const deg = 45;
const len = lists.length-1;
let num = 0;
let i = 0;
let active = 0;


function initMusit(){
  for(let el of audio){
    el.pause();
    el.load();
    el.parentElement.previousElementSibling.classList.remove("on")
  }
}

function activation(index, lists){
  for(let el of lists){
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

prev.addEventListener("click", ()=>{
  initMusit();
  num++
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active ==0) ? active = len : active--;
  activation(active, lists);
});

next.addEventListener("click" , ()=>{
  initMusit();
  num--
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active ==len) ? active = 0 : active++;
  activation(active, lists);
});

for (let el of lists){
  let pic = el.querySelector(".pic");
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  el.style.transform= `rotate(${deg*i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(./img/member${i+1}.jpg)`;
  i++;

  play.addEventListener("click", e=>{
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    
    if(isActive){
      e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });

  pause.addEventListener("click", e=>{
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    
    if(isActive){
      e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });

  load.addEventListener("click",e=>{
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    
    if(isActive){
      e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });

}