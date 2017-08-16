window.addEventListener('load', function () {
    nowTime();
    Move();

})

// 获取当前时间 设置初始位置
function nowTime() {
    var odate = new Date();
    var nowHour = odate.getHours();
    var nowMinute = odate.getMinutes();
    var nowSecond = odate.getSeconds();

    var secondHand = document.getElementById('second');
    var minutesHand = document.getElementById('minutes');
    var hourHand = document.getElementById('hour');

    secondHand.style.transform = "rotate(" + nowSecond * 6 + "deg)";
    minutesHand.style.transform = "rotate(" + nowMinute * 6 + "deg)";
    hourHand.style.transform = "rotate(" + nowHour * 30 + "deg)";
}

// 指针
function Move() {
    var secondHand = document.getElementById('second');
    var minutesHand = document.getElementById('minutes');
    var hourHand = document.getElementById('hour');

    setInterval(function () {
        // var odate = new Date('Wed Aug 16 2017 23:00:15 GMT+0800 (CST)');
        var odate = new Date();
        var nowHour = odate.getHours();
        var nowMinute = odate.getMinutes();
        var nowSecond = odate.getSeconds();
        
        var PerSecond = nowSecond * 6;
        var PerMinute = nowMinute * 6;
        var PerHour = nowHour * 30;

        // PerSecond += 6;
        // PerMinute += 0.1;
        // PerHour += 360 / 86400;
        secondHand.style.transform = "rotate(" + PerSecond % 360 + "deg)";
        minutesHand.style.transform = "rotate(" + PerMinute % 360 + "deg)";
        hourHand.style.transform = "rotate(" + PerHour % 360 + "deg)";
    }, 1000)
}

