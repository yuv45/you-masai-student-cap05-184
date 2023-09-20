let [miliseconds,seconds,minutes,hours]=[0,0,0,0];
let display =document.getElementById("display-time");
let timer =null;
let btn=document.querySelectorAll(".watch>button")


function stopwatch(){
    miliseconds++
    if(miliseconds==100){
        miliseconds=0;
        seconds++
       if(seconds==60){
        seconds=0;
        minutes++
          if(minutes==60){
            minutes=0;
            hours++
          }
     }
   }
   let h=hours<10 ? "0" +  hours :hours;
   let m=minutes<10 ? "0" +  minutes :minutes;
   let s=seconds<10 ? "0" +  seconds :seconds;

   display.innerText= h+":"+m+":"+s+":"+miliseconds;
}
function watchstart(){
if(timer!==null){
  clearInterval(timer);
  

}
    timer=setInterval(stopwatch,10);
    


}
function watchstop(){
    clearInterval(timer);
    
}
function reset(){
    clearInterval(timer);
    [miliseconds,seconds,minutes,hours]=[0,0,0,0];
    display.innerHTML="00:00:00:00"
}