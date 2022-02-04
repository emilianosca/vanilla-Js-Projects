const countdown = () => { 
    // Set the date from the "future"
    const countDate = new Date('February 3, 2022 22:58:50').getTime();
    
    // we want to get the difference between the current time and the countDate
    const now = new Date().getTime();
    
    // gap between the two dates 
    const gap = countDate - now; 

    const seconds = 1000; 
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const day = hours * 24;

    //from the gap, is posible to calcute the days, hours, minutes and seconds
    const textDay = Math.floor(gap /day )
    
    
    const textHours = Math.floor((gap % day ) / hours)
    
    
    const textMinutes = Math.floor((gap % hours ) / minutes)
    

    const textSeconds = Math.floor((gap % minutes ) / seconds)
    

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHours;
    document.querySelector('.minute').innerText = textMinutes;
    document.querySelector('.second').innerText = textSeconds;
    
    const percentage = (100 - (gap/countDate *10000000) )
    
   

    document.getElementById("demo").innerHTML = percentage.toFixed(2) + "%";
    
//      
start();
console.log(gap)

if(percentage >= 100){
    console.log("STOP")
    clearInterval(countdown);
    stop();
}

// else { 
//     start();
console.log(gap)
// }


} 

start();
clearInterval(countdown);
countdown();

// Run the countdown function every second
// setInterval(countdown, 1000);


var count = 0;

function start(){
 let count = setInterval(countdown,1000)  /// HERE WE RUN setInterval()
}

// function timer(){
//   document.getElementById('count').innerText--;
// }


function stop(){
  clearInterval(count)   /// here we PAUSE  setInterval()  with clearInterval() code
}







const progress = document.querySelector('.progress-done');

// setInterval( setTimeout (() => { 
//     progress.style.opacity = 1;
//     progress.style.width = progress.getAttribute('data-done') + '%';
// } , 2000),1000 )

// setTimeout (() => { 
//     progress.style.opacity = 1;
//     progress.style.width = progress.getAttribute('data-done') + '%';
// } , 1000);


setTimeout (() => { 
    progress.style.opacity = 1;
    progress.style.width = progress.getAttribute('data-done') + '%';
    } , 1000);




