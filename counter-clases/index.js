let display = document.getElementById("display");
let timer = null;
let seconds=0;  
class Counter {

    Startstop() {
      if ((timer==null)) {
        timer = setInterval(() => {
          seconds = seconds + 1;
          display.textContent = seconds;
        }, 1000);
      } else {
        clearInterval(timer);
        timer = null;
      }
    };

    Increament() {
      Number(display.innerText++);
      clearInterval(timer);
      timer=null;
    };
    Decreament(){
        clearInterval(timer);
        timer=null;
      if (display.innerText != 0) {
        Number(display.innerText--);
      } else {
        display.innerText = 0;
      }
  }
}
let a = new Counter();
a.Startstop();
let Startstop=()=>{
 a.Startstop();   
}
let Increament=()=>{
    a.Increament();
}
let Decreament=()=>{
    a.Decreament();
}