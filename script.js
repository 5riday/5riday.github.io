function genTimeTable() {
    // default duration for each period
    let dDuration = 35;
    // defaul start time
    let dStartTime = 480;
    const startTime = document.getElementById("stime").value;
    var pTime = [
        { key: "cPeriod", value: dDuration }, // 第一节
        { key: "cPeriod", value: dDuration }, // 第二节
        { key: "break", value: 30 },          // 下课
        { key: "cPeriod", value: dDuration }, // 第三节
        { key: "cPeriod", value: dDuration }, // 第四节
        { key: "break", value: 5 },           // 小休
        { key: "cPeriod", value: dDuration }, // 第五节
        { key: "cPeriod", value: 75 },        // 第六节（特殊）
        { key: "cPeriod", value: dDuration }, // 第七节
        { key: "break", value: 5 },           // 小休
        { key: "cPeriod", value: dDuration }, // 第八节
        { key: "cPeriod", value: dDuration }, // 第九节
        { key: "break", value: 10 },          // 小休
        { key: "cPeriod", value: dDuration }, // 第十节
        { key: "cPeriod", value: dDuration }, // 第十一节
    ];
    /*
        let timetable = [];
        let currentTime = startTime;
        for (let i = 0; i < pTime.length; i++) {
            let aTime = currentTime;
            let hours = parseInt(currentTime.substring(0, 2));
            let minutes = parseInt(currentTime.substring(2, 4));
            minutes += pTime[i].value;
            hours += Math.floor(minutes / 60);
            minutes %= 60;
            hours % 24;
            currentTime = `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`;
            let bTime = currentTime;
            if (pTime[i].key !== 'break')
                timetable.push([aTime, bTime, pTime[i].key]);
        }
        
        for (let i = 0; i < timetable.length; i++) {
            content = 'time' + (i + 1);
            document.getElementById(content).innerHTML = timetable[i][0] + '<br>' + timetable[i][1];
        }
    */

    let timetable = [];
    // convert the time to minutes
    let hours = parseInt(startTime.substring(0, 2));
    let minutes = parseInt(startTime.substring(2, 4));
    let totalminutes = hours * 60 + minutes;
    // calculate total delay time
    let totaldelayTime = (totalminutes > dStartTime) ? totalminutes - dStartTime : 0;
}

function isValid24HourTime() {
    let userInput = document.getElementById("stime").value;
    const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$|^(?:2[0-3]|[01][0-9])[0-5][0-9]$/;
    if (!timeRegex.test(userInput))
        alert('請輸入有效的24小時制時間（例如：08:00）。');
    else
        genTimeTable();
}
