function attachEventsListeners() {
let daysBtnElement=document.getElementById('daysBtn');
let hoursBtnElement=document.getElementById('hoursBtn');
let minutesBtn=document.getElementById('minutesBtn');
let secondsBtn=document.getElementById('secondsBtn');
let daysInputElent=document.getElementById('days');
let hoursInputElement=document.getElementById('hours');
let minutesInputElement=document.getElementById('minutes');
let secondsInputElement=document.getElementById('seconds');
daysBtnElement.addEventListener('click',function f(){
    let days=daysInputElent.value;
    let hours=days*24;
    let minutes=hours*60;
    let seconds=minutes*60;
    hoursInputElement.value=hours;
    minutesInputElement.value=minutes;
    secondsInputElement.value=seconds;
})
hoursBtnElement.addEventListener('click',function f(){
let hours=hoursInputElement.value;
let days=hours/24;
let minutes=hours*60;
let seconds=minutes*60;
daysInputElent.value=days;
minutesInputElement.value=minutes;
secondsInputElement.value=seconds;
})
minutesBtn.addEventListener('click',function f(){
    let minutes=minutesInputElement.value;
    let hours=minutes/60;
    let days=hours/24;
    let seconds=minutes*60;
    daysInputElent.value=days;
    hoursInputElement.value=hours;
    secondsInputElement.value=seconds;
})
secondsBtn.addEventListener('click',function f(){
let seconds=secondsInputElement.value;
let minutes=seconds/60;
let hours=minutes/60;
let days=hours/24;
daysInputElent.value=days;
hoursInputElement.value=hours;
minutesInputElement.value=minutes;

})


}