const hour = document.querySelector('.hours');
const min = document.querySelector('.minutes');
const sec =  document.querySelector('.seconds');
const control = document.getElementById('start');
const audio = document.getElementById('audio');
const audio2 = document.getElementById('audio2');
const triangle = document.querySelector('.sub-container');

let h=hour.textContent;
let m=min.textContent;
let s=sec.textContent;

function stopSound(){
    audio2.pause();
    audio2.currentTime = 0;
}

document.getElementById('up-hour').addEventListener('click',()=>{
    h++;
    if(h>24)h=0;
    hour.innerHTML=h;
    if(h==24){
        s=0;
        m=0;
        min.innerHTML=m;
        sec.innerHTML=s;
    }
});

document.getElementById('up-min').addEventListener('click',()=>{
    if(h<24){
        m++;
        if(m>59){
            h++;
            m=0;
        }
        hour.innerHTML=h;
        min.innerHTML=m;
    }
});

document.getElementById('up-sec').addEventListener('click',()=>{
    if(h<24){
        s++;
        if(s>59){
            m++;
            s=0;            
        }
        min.innerHTML=m;
        sec.innerHTML=s;
    }
});

document.getElementById('down-hour').addEventListener('click',()=>{
    h--;
    if(h<0)h=24;
    hour.innerHTML=h;
    if(h==24){
        s=0;
        m=0;
        min.innerHTML=m;
        sec.innerHTML=s;
    }
});

document.getElementById('down-min').addEventListener('click',()=>{
    if(h<24){
        m--;
        if(m<0){
            m=59;
        }
        min.innerHTML=m;
    }
});

document.getElementById('down-sec').addEventListener('click',()=>{
    if(h<24&&m<60){
        s--;
        if(s<0){    
            s=59;
        }
        sec.innerHTML=s;
    }
});

control.addEventListener("click",()=>{
    if(control.textContent==="START"){
        if(h==0&&m==0&&s==0){
            alert("Set Timer");
            return;
        }
        console.log('run');
        triangle.style.pointerEvents = "none";
        audio2.play();
        control.innerHTML="STOP";
        start();
    }else{
        stopSound();
        control.innerHTML="START";
        clearInterval(action);
        triangle.style.pointerEvents = "auto";
    }
});

document.getElementById('reset').addEventListener("click",()=>{
    stopSound();
    hour.innerHTML = "0";
    min.innerHTML = "0";
    sec.innerHTML = "0";
    h=m=s=0;
    clearInterval(action);
    triangle.style.pointerEvents = "auto";
    control.innerHTML="START";
})
function start(){
   action =  setInterval(()=>{
        sec.innerHTML= ""+s;
        if(h==0&&m==0&&s==0){
            stopSound();
            clearInterval(action);
            control.innerHTML="START";
            audio.play();
            triangle.style.pointerEvents = "auto";
            return;
        }
        if(s<0){
            s=59;
            m--;
            sec.innerHTML= ""+s;
            min.textContent=""+m;
        }else{
            s--;
        }
        if(m<0){
            m=59;
            h--;
            min.textContent=""+m;
            hour.innerHTML=""+h;
        }
    },1000)
}

