const panels = document.querySelectorAll('.panel');

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