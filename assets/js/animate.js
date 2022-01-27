var tlbanner = new TimelineMax({onUpdate:updatePercentage});
var tlpaper = new TimelineMax({onUpdate:updatePercentage});
var tlbonus  = new TimelineMax({onUpdate:updatePercentage});
var tlmessage = new TimelineMax({onUpdate:updatePercentage});
var tldetail = new TimelineMax({onUpdate:updatePercentage});
var tlabout = new TimelineMax({onUpdate:updatePercentage});
var tldate = new TimelineMax({onUpdate:updatePercentage});
var tlcard = new TimelineMax();
// var tl2 = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();


tlbanner.from('.andiv', 1,{ease: Power4.easeInOut,scale:1});
if(window.innerWidth > 600){
  tlpaper.from('#paper .p-left', 1, {opacity: 0});
tlpaper.from('#paper .p-right', 1, {opacity: 0});
tlpaper.from('#paper .pconcon', 1, {y:200, opacity: 0});
}
else{
  tlpaper.from('#paper .p-left', 1, {opacity: 0},"=-4");
tlpaper.from('#paper .p-right', 1, {opacity: 0},"=-4");
tlpaper.from('#paper .pconcon', 1, {y:200, opacity: 0},"=-1");
}
tlbonus.from('.bonus-svg', 1, { width: "70px"}, "=-1");
tlbonus.from('.bonus-alt', 1, {y:-100, opacity: 0});
tlbonus.from('.number-bonus', 1, {y:100, opacity: 0});
tlbonus.from('.b-left', 1, {y:100, opacity: 0});
tlbonus.from('.b-right', 1, {y:100, opacity: 0});
tlcard.from('#card .cardthreethimg', 1, {marginTop:0},"=-7");
tlcard.from('#card .cardsecondimg', 1, {marginTop:0},"=-7");

if(window.innerWidth > 600){
  tlmessage.from('.messageimage', 1,{ease: Power4.easeInOut,scale:2,rotation:-180}, "=-.7");
}
else{
  tlmessage.from('.messageimage', 1,{ease: Power4.easeInOut,scale:2,rotation:-180});
}
// tldetail.from('.detail-item', 1, {y:3000, opacity: 0});
tldate.from('.rotateanimation', 4, {rotation:180});
tldate.from('.textdiv', 1, {y:180,opacity:0});
tldate.from('.animation2', 2, {x:180,opacity:0});
tldetail.from('.abs-1', 2, {left:10,top:150,position:"absolute",display:"none"});
tldetail.from('.abs-3', 2, {top:150,position:"absolute",display:"none"});
tldetail.from('.abs-2', 2, {top:320,position:"absolute",display:"none"});
tlabout.from('.abs-1', 1, {position:"absolute"});
tlabout.from('.abs-3', 1, {position:"absolute"});
tlabout.from('.abs-2', 1, {position:"absolute"});






if(window.innerWidth > 600){
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#banner",
              triggerHook: "onLeave",
              duration: "100%"
  })
  
    .setTween(tlbanner)
      .addTo(controller);
}
else{
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#banner",
              triggerHook: "onLeave",
              duration: "900"
  })
  
    .setTween(tlbanner)
      .addTo(controller);
}

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#paper",
  triggerHook: "onLeave",
  duration: "100%"

})
.setPin("#paper")
  .setTween(tlpaper)
		.addTo(controller);

const scene3 = new ScrollMagic.Scene({
      triggerElement: "#bonus",
                triggerHook: "onLeave",
                duration: "100%"
    })
      .setPin("#bonus")
      .setTween(tlbonus)
        .addTo(controller);
const scene4 = new ScrollMagic.Scene({
          triggerElement: "#card .cardimgdiv",
                    triggerHook: "onLeave",
                    duration: "100%"
        })
          .setPin("#card .cardimgdiv")
          .setTween(tlcard)
            .addTo(controller);        
if(window.innerWidth > 992){
  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#message",
              triggerHook: "onLeave",
              duration: "100%"
})
    .setPin("#message")
    .setTween(tlmessage)
          .addTo(controller); 
}
else{
  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#message .rightcol",
              triggerHook: "onLeave",
              duration: "100%"
})
    .setPin("#message .rightcol")
    .setTween(tlmessage)
          .addTo(controller); 
}
const scene6 = new ScrollMagic.Scene({
                    triggerElement: "#date",
                              triggerHook: "onLeave",
                              duration: "100%"
})
.setPin("#date")
                    .setTween(tldate)
                          .addTo(controller);                          
const scene7 = new ScrollMagic.Scene({
                    triggerElement: "#detail",
                              triggerHook: "onLeave",
                              duration: "100%"
})
.setPin("#detail")
                    .setTween(tldetail)
                          .addTo(controller); 
const scene8 = new ScrollMagic.Scene({
                            triggerElement: "#about",
                                      triggerHook: "onLeave",
                                      duration: "100%"
        })
        .setPin("#about")
                            .setTween(tlabout)
                                  .addTo(controller);                           



function updatePercentage() {
  
}
const rotateimg = document.querySelector('#banner .number-abs img')

setTimeout(() => {
  rotateimg.classList.remove('active')
}, 60000);