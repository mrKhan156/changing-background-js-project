const panels = document.querySelectorAll('.panel');

// 2nd project

const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');



//adding active effect to the image

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClass()
        panel.classList.add('active');
    })
})

// removing active effect from the image
 function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
 }
 


let currentActive = 1 ;

next.addEventListener('click',()=>{
    currentActive ++;
    if(currentActive>circles.length){
        currentActive = circles.length;
    }

   update()
})


prev.addEventListener('click',()=>{
    currentActive --;
    if(currentActive < 1){
        currentActive = 1;
    }
    update()
})

function update() {

circles.forEach((circle, idx) =>{
        if(idx <currentActive){
            circle.classList.add('active1');
        } else{
            circle.classList.remove('active1');
        }
        
     })
    
        panels.forEach((panel,idnx)=>{
            if(idnx < currentActive){
                removeActiveClass()
                panel.classList.add('active');
                

            }else{
                panel.classList.remove('ctive');
               
            }
        })
     

    const actives = document.querySelectorAll('.active1');

    progress.style.width = (actives.length - 1) / (circles.length-1) *100 + '%';
    if(currentActive===1){
        prev.disabled = true;

    } else if (currentActive === circles.length){
        next.disabled = true;
        
    } else{
        prev.disabled =false;
        next.disabled = false;
    }
}