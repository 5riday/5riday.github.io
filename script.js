function genTimeTable() {
    let dDuration = 35;
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
    console.log(timetable);
    for (let i = 0; i < timetable.length; i++) {
        content = 'time' + (i + 1);
        document.getElementById(content).innerHTML = timetable[i][0] + '<br>' + timetable[i][1];
    }
}
