var bg = document.querySelector("#bg")



var tl = gsap.timeline()


var one = document.querySelector("#one")
var onetxt = one.innerHTML;
 var splitted = onetxt.split("");

//  console.log(splitted)
 var clutter = "";
splitted.forEach(function(e) {
// console.log(e)
    
    clutter += `<span>${e}</span>`
} 
);
one.innerHTML = clutter
console.log(clutter)

// 2nd
var two = document.querySelector("#two")
var twotxt = two.innerHTML;
 var splitted2 = twotxt.split("");

//  console.log(splitted)
 var clutter2 = "";
splitted2.forEach(function(e) {
// console.log(e)
    
    clutter2 += `<span>${e}</span>`
} 
);
two.innerHTML = clutter2
console.log(two)


bg.addEventListener("mouseenter",function(){ 
 tl.to("span",{
    y:"-100%",
    stagger:0.05
 })
})
bg.addEventListener("mouseleave",function(){ 
 tl.to("span",{
    y:0,
    stagger:0.05,
 })
})