
let next_button = document.querySelector('.next')
let picture = document.querySelector('.flood')
let counter = 1;
next_button.addEventListener('click',()=>{
    picture.src=`flood${counter}.jpeg`
    counter++;
    if (counter==3){
        counter="";
    }
    
})