/*function genTimeTable() {
    let dDuration = 35;
    const sTime = document.getElementById("stime").value;
    const dTime = document.getElementById("dtime").value;
    dDuration = dDuration - dTime;
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
    let currentTime = sTime;
    for (let i = 0; i < pTime.length; i++) {

    }
}

function Vector2(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}*/

function genTimeTable() {
    let dDuration = 35;
    const sTime = document.getElementById("stime").value;
    const dTime = document.getElementById("dtime").value;
    dDuration = dDuration - dTime;

    var timetable = [];
    let currentTime = sTime;

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

    for (let i = 0; i < pTime.length; i++) {
        if (pTime[i].key !== "break") {
            timetable.push({
                startTime: currentTime,
                duration: pTime[i].value,
                type: pTime[i].key
            });
            currentTime = addMinutes(currentTime, pTime[i].value);
        }
    }

    console.log(timetable);
}

// 辅助函数：将时间加上指定分钟数
function addMinutes(currentTime, minutes) {
    let hours = parseInt(currentTime.substring(0, 2));
    let nminutes = parseInt(currentTime.substring(2, 4));

    nminutes += minutes;
    hours += Math.floor(nminutes / 60);
    nminutes %= 60;
    hours %= 24;
    currentTime = `${hours.toString().padStart(2, '0')}${nminutes.toString().padStart(2, '0')}`
}

// 调用函数
genTimeTable();
