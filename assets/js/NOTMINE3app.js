const slides = document.querySelectorAll(".slide");

let index = 0;
display(index);

function display (index){
    slides.forEach(slide =>{
        slide.style.display = 'none';
    });

    slides[index].style.display = 'flex';
}

document.querySelector(".prev").addEventListener("click", ()=>{
    index--;
    if(index < 0){index = slides.length-1};
    display(index);
});

document.querySelector(".next").addEventListener("click", ()=>{
    index++;
    if(index > slides.length - 1){index = 0};
    display(index);
});