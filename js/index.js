const $title = document.querySelector(".title");
const $hamburger_menu = document.querySelector(".hamburger-menu");
const $nav_bar = document.querySelector(".nav-bar");
const $nav_list = document.querySelectorAll(".nav-list");
const $left_btn = document.querySelector(".left-btn");
const $right_btn = document.querySelector(".right-btn");
const $wrapper = document.querySelector("#wrapper");
const $article_part = document.querySelectorAll(".article-part");
const $period_number = document.querySelectorAll(".period-number");
const $article_close_btn = document.querySelectorAll(".article-part-close");
let page_num = 4;

const counter = ($counter, max) => {
    let now = max*3/2;
    const handle = setInterval(() => {
        $counter.innerHTML = Math.ceil(max - now);
        if (now < 1) {
            clearInterval(handle);
        }
        const step = now / 10;
        now -= step;
    }, 80);
}

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
    }  else if(page_num === 0){
        counter($period_number[0], 53)
    }  else if(page_num === -1){
        counter($period_number[1], 74)
    }  else if(page_num === -2){
        counter($period_number[2], 167)
    }
    page_num++
    $wrapper.style.transform = `translateX(calc(100% / 9 * ${page_num}))`;
})

$right_btn.addEventListener("click", function(){
    if(page_num === 4){
        $left_btn.style.display = "block";
    } else if(page_num === -3){
        $right_btn.style.display = "none";
    }  else if(page_num === 2){
        counter($period_number[0], 53)
    }  else if(page_num === 1){
        counter($period_number[1], 74)
    }  else if(page_num === 0){
        counter($period_number[2], 167)
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

$article_part.forEach((v, index) => {
    v.addEventListener("click", function(){
        v.classList.add('article-part-open')
        v.style.zIndex = 20
        let close_btn_index = Math.floor(index/3);
        setTimeout(function(){
            $article_close_btn[close_btn_index].style.display = "block";
        }, 1000)
    })
})

$article_close_btn.forEach((v) => {
    v.addEventListener("click", function(){
        const $target = document.querySelector(".article-part-open")
        setTimeout(function(){
            $target.style.zIndex = 10;
        }, 1000)
        $target.classList.remove("article-part-open");
        v.style.display = "none"
    })
})