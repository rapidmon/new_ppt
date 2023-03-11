const $title = document.querySelector(".title");
const $hamburger_menu = document.querySelector(".hamburger-menu");
const $nav_bar = document.querySelector(".nav-bar");
const $nav_list = document.querySelectorAll(".nav-list");
const $left_btn = document.querySelector(".left-btn");
const $right_btn = document.querySelector(".right-btn");
const $wrapper = document.querySelector("#wrapper");
let page_num = 4;

$title.addEventListener("click",function(){
    location.reload();
})

$hamburger_menu.addEventListener("click", function(){
    $nav_bar.classList.toggle("nav-bar-open");
})

$left_btn.addEventListener("click", function(){
    if(page_num === 3){
        $left_btn.style.display = "none";
    } else if(page_num === -4){
        $right_btn.style.display = "block";
    }
    page_num++
    $wrapper.style.transform = `translateX(calc(100% / 9 * ${page_num}))`;
})

$right_btn.addEventListener("click", function(){
    if(page_num === 4){
        $left_btn.style.display = "block";
    } else if(page_num === -3){
        $right_btn.style.display = "none";
    }
    page_num--
    $wrapper.style.transform = `translateX(calc(100% / 9 * ${page_num}))`;
})

$nav_list.forEach((v, index) => {
    v.addEventListener("click", function(){
        $left_btn.style.display = "block";
        $right_btn.style.display = "block";
        if(index < 4){
            page_num = 4 - index;
            $wrapper.style.transform = `translateX(calc(100% / 9 * ${page_num}))`;
            if(index === 0){
                $left_btn.style.display = "none";
                $right_btn.style.display = "block";
            }
        } else {
            page_num = 2 - index;
            $wrapper.style.transform = `translateX(calc(100% / 9 * ${page_num}))`;
            if(index === 6){
                $left_btn.style.display = "block";
                $right_btn.style.display = "none";
            }
        }
    })
})