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

    var fullLine = "::";
    if (isAM)
    {
        fullLine += "am";
    }
    else
    {
        fullLine += "pm";
    }
    
    fullLine += mTens.toString();//should always show minutes
    fullLine += mOnes.toString();

    if (hours12 > 9)
    {
        fullLine += hours12.toString();
    }
    else
    {
        fullLine += hOnes.toString();
    }

    fullLine += sTens.toString();//should always show seconds
    fullLine += sOnes.toString();

    // DOM output
    display.innerHTML = sortAlphanumeric(fullLine);
}


function sortAlphanumeric(str) {
  return str.split('').sort().join('');
}