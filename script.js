var countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();
var now = new Date();
var timezoneOffset = now.getTimezoneOffset() * 60000;
var nowGMT = new Date(now.getTime() + timezoneOffset);
console.log(now);
console.log(timezoneOffset);
console.log(nowGMT);
var lon = 0;

function init() {

    var t = setInterval("updateTime()", 500);
    startAnimation();
}

function updateTime() {
    var now = new Date();
    timezoneOffset = now.getTimezoneOffset() * 60000;
    nowGMT = new Date(now.getTime() + timezoneOffset);

    if (countDownDate - now > 0) {
        still2019();
    } else {
        its2020();
    }

}

function still2019() {

    var now = new Date();
    var distance = countDownDate - now;

    var d = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);
    d = correctZero(d);
    h = correctZero(h);
    m = correctZero(m);
    s = correctZero(s);
    document.getElementById('time-to-end').innerHTML = d + ":" + h + ":" + m + ":" + s;

}
function correctZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


function startAnimation() {
    var options = { zooming: false, center: [0, getLon()], zoom: 0 };
    var earth = new WE.map('earth', options);
    WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
        minZoom: 0,
        maxZoom: 5,
        attribution: 'NASA'
    }).addTo(earth);
    var t = setInterval(function animate() {
        earth.panTo([0, getLon()], 1000);
    }, 2000);
}

function getLon() {
    console.log( new Date( now)  );
    console.log(new Date( nowGMT)  );
    var nowNewYear = Math.floor( countDownDate - now);
    console.log( nowNewYear);
    nowNewYear = Math.floor(nowNewYear / 1000);
    nowNewYear = Math.floor(nowNewYear / 60);
    nowNewYear = Math.floor(nowNewYear / 4);
    console.log( nowNewYear);
    nowNewYear = 180 + nowNewYear;
    if( nowNewYear > 180 ) {
        nowNewYear = -180 - nowNewYear;
    }
    console.log("current new year" + nowNewYear);
    return nowNewYear;
}