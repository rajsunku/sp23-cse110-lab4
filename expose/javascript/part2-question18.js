function printTime() {
    let d = new Date();
    let time = d.toLocaleDateTimeString();
    console.log(time);
}

setInterval(printTime, 1000);