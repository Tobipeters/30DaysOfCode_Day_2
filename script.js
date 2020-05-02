var canvas = document.getElementById('clock_canvas');
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;




//Function to Draw the CLock 
drawClock = () => {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(6, 6, 35, 0.73);";
    ctx.stroke();
    clockNumbers(ctx, radius);
    setTime(ctx, radius);
}
// clockFace = (ctx, radius) => {
//     ctx.beginPath();
//     ctx.arc(0, 0, radius, 0, 2 * Math.PI);
//     ctx.fillStyle = 'rgba(6, 6, 35, 0.73);';
//     ctx.stroke();
// }

clockNumbers = (ctx, radius) => {
    var angle;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    //loop through number 1 - 12
    for (num = 1; num < 13; num++) {
        angle = num * Math.PI / 6;
        ctx.rotate(angle);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-angle);
        console.log(num)
    }
}

clockHand = (ctx, pos, length, width) => {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

// function to set time 
setTime = (ctx, radius) => {
    var time = new Date();
    var second = time.getSeconds();
    var minute = time.getMinutes();
    var hour = time.getHours();

    //hour 
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    clockHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    clockHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    clockHand(ctx, second, radius * 0.9, radius * 0.02);
    console.log(time)
}

//Calling drawClock function 
// drawClock();
setInterval(drawClock, 1000);