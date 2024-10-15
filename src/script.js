// var h1text = document.querySelector("#firsth1").textContent;

// var splittedText = h1text.split("")

// console.log(splittedText);

// var clutter ="" 

// splittedText.forEach(function(elem){
// console.log(elem);
// clutter += `<span>${elem}</span>`;
// console.log(clutter);
// })

// document.querySelector("#firsth1").innerHTML = clutter;


// gsap.to("#page2 h1 span",{
//     color:"#e3e3c4",
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:"page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 50%",
//         scrub:1

//     }
// })


var allH1 = document.querySelectorAll("#page2 h1");

allH1.forEach(function(elem){

    var clutter = ""

    console.log(elem);

    var h1Text = elem.textContent;

    var splittedText = h1Text.split("")

    console.log(splittedText);

    
    
    splittedText.forEach(function(e){

        clutter += `<span>${e}</span>`;

    });
    elem.innerHTML = clutter;

})

gsap.to("#page2 h1 span",{
    color:"#e3e3c4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        scrub:2

    }
})

