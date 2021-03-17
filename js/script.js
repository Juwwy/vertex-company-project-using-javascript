function getElement(element){
    return document.querySelector(element)
}

const configure = document.querySelector("#configure");
const gui = document.querySelector("#gui");
const futuristic = document.querySelector("#futuristic");
const reg = document.querySelector("#reg");
const uniform = document.querySelector("#uniform");
const powerful = document.querySelector("#powerful");


const dashboard = document.querySelector("#dashBoard");
const dashboard2 = document.querySelector("#dashBoard2");
const dashboard3 = document.querySelector("#dashBoard3");
const dashboard4 = document.querySelector("#dashBoard4");
const dashboard5 = document.querySelector("#dashBoard5");
const dashboard6 = document.querySelector("#dashBoard6");

configure.addEventListener("click", match);
gui.addEventListener("click", match2);
futuristic.addEventListener("click", match3);
reg.addEventListener("click", match4);
uniform.addEventListener("click", match5);
powerful.addEventListener("click", match6);

function match(){
    dashboard.classList.remove("hidden");
    dashboard2.classList.add("hidden");
    dashboard3.classList.add("hidden");
    dashboard4.classList.add("hidden");
    dashboard5.classList.add("hidden");
    dashboard6.classList.add("hidden");
    
}

function match2(){
    dashboard.classList.add("hidden");
    dashboard2.classList.remove("hidden");
    dashboard3.classList.add("hidden");
    dashboard4.classList.add("hidden");
    dashboard5.classList.add("hidden");
    dashboard6.classList.add("hidden");
    
}

function match3(){
    dashboard.classList.add("hidden");
    dashboard2.classList.add("hidden");
    dashboard3.classList.remove("hidden");
    dashboard4.classList.add("hidden");
    dashboard5.classList.add("hidden");
    dashboard6.classList.add("hidden");
    
}

function match4(){
    dashboard.classList.add("hidden");
    dashboard2.classList.add("hidden");
    dashboard3.classList.add("hidden");
    dashboard4.classList.remove("hidden");
    dashboard5.classList.add("hidden");
    dashboard6.classList.add("hidden");
    
}

function match5(){
    dashboard.classList.add("hidden");
    dashboard2.classList.add("hidden");
    dashboard3.classList.add("hidden");
    dashboard4.classList.add("hidden");
    dashboard5.classList.remove("hidden");
    dashboard6.classList.add("hidden");
    
}

function match6(){
    dashboard.classList.add("hidden");
    dashboard2.classList.add("hidden");
    dashboard3.classList.add("hidden");
    dashboard4.classList.add("hidden");
    dashboard5.classList.add("hidden");
    dashboard6.classList.remove("hidden");
    
}