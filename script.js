// gsap.from("#box",{
//       x:800,
//       duration:2,
//       delay:1,
//       opacity:0,
// });
// gsap.from("#page1",{
//       backgroundColor:"pink",
//       delay:1,
//       duration:2,
//       })
gsap.from("#page2",{
      backgroundColor:"red",
      // duration:5,
      scrollTrigger:{
      trigger:"#page2",
      start : "top 50%",
      markers :true,
      scrub: 4,
      end :"top -100%",
}
})
gsap.to("#page2 h1",{
      transform : "translateX(-85%)",
      scrollTrigger:{
            trigger:"#page2",
           scrub: 2,
           markers :true,
      //      start : "top 50%",
           pin :true
      }
})