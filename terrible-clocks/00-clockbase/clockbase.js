// Shared variables (accessible by any function)
let year, month, day;
let hours24, hours12, minutes, seconds;
let isAM;
let hTens, hOnes;
let mTens, mOnes;
let sTens, sOnes;


// Initial update and interval
globalUpdate();
setInterval(globalUpdate, 250);

function globalUpdate() {
    updateTime();
    displayTime();
}

function updateTime() {


    const now = new Date();

    // Date
    year = now.getFullYear();
    month = now.getMonth() + 1;
    day = now.getDate();

    // Time
    hours24 = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    isAM = hours24 < 12;

    hours12 = hours24 % 12;
    if (hours12 === 0) hours12 = 12;

    // Tens / Ones breakdown
    hTens = Math.floor(hours12 / 10);
    hOnes = hours12 % 10;

    mTens = Math.floor(minutes / 10);
    mOnes = minutes % 10;

    sTens = Math.floor(seconds / 10);
    sOnes = seconds % 10;


}


function displayTime() {
    const display = document.getElementById("display");
    if (!display) {
        return;
    }

    // DOM output
    display.innerHTML =
        "Date<br>" +
        "Year: " + year + "<br>" +
        "Month: " + month + "<br>" +
        "Day: " + day + "<br><br>" +

        "Time<br>" +
        "Hours: " + hours12 + "<br>" +
        "Hour Tens: " + hTens + "<br>" +
        "Hour Ones: " + hOnes + "<br><br>" +

        "Minutes: " + minutes + "<br>" +
        "Minute Tens: " + mTens + "<br>" +
        "Minute Ones: " + mOnes + "<br><br>" +

        "Seconds: " + seconds + "<br>" +
        "Second Tens: " + sTens + "<br>" +
        "Second Ones: " + sOnes + "<br><br>" +

        "AM: " + isAM + "<br>" +
        "PM: " + !isAM;
}

