idList = { //htmlのidリスト
    others: 'partsListSelect',
    hour: 'partsListSelect_hour',
    minute: 'partsListSelect_minute',
    silent: 'partsListSelect_silent',
    for: 'partsListSelect_for',
    and: 'partsListSelect_and',
    melody: 'partsListSelect_melody',
    type: 'partsListSelect_type',
    ryousu: 'partsListSelect_ryousu'
};
//setting.jsの全ての連想配列が集合するボックス
soundBox = [
    soundData,
    soundData_hour,
    soundData_minute,
    soundData_ryousu,
    soundData_type,
    soundData_melody,
    soundData_and,
    soundData_for,
    soundData_silent
];

function GetIndex(id) {
    return document.getElementById(id).selectedIndex;
}

//存在する分節かチェックする関数
function ExistCheck(soundlist,textBuff,innerFlag) {
    for(k=0 ; k<soundlist.length ; k++) {
        // alert(textBuff);
        // alert(soundlist[k][1]);
        if(textBuff == soundlist[k][1]) {
            innerFlag = true;
            break;
        }
    }
    return innerFlag;
}

function Set_electrical_scoreboard()
{
    var station = [
        '<span class="green">高　槻</span>',
        '<span class="green">米　原</span>',
        '<span class="green">野　洲</span>',
        '<span class="green">京　都</span>',
        '<span class="green">大　阪</span>',
        '<span class="green">神　戸</span>',
        '<span class="green">西 明 石</span>',
        '<span class="green">姫　路</span>',
        '<span class="green">加 古 川</span>',
        '<span class="green">当 駅 止</span>'
    ];
    var no1 = Math.floor(Math.random() * station.length);
    document.getElementById("output_for").innerHTML = station[no1];

    var okure =['<span class="red transform letter-spacing">遅れ約20分</span>',''];
    var no2 = Math.floor(Math.random() * okure.length);
    document.getElementById("output_delay").innerHTML = okure[no2];

    var type = [
        '<span class="green">普　通</span>',
        '<span class="green">普　通</span>',
        '<span class="orange">快　速</span>',
        '<span class="red">新快速</span>',
        '<span class="red">臨　時</span>'
    ];
    var no3 = Math.floor(Math.random() * type.length);
    document.getElementById("output_type").innerHTML = type[no3];

    var type2 = [
        '<span class="orange">団　体</span>',
        '<span class="orange">回　送</span>',
        '<span class="orange">通　過</span>',
        '<span class="orange">貨　物</span>'
    ];
    var no4 = Math.floor(Math.random() * type2.length);
    document.getElementById("output_type2").innerHTML = type2[no4];
}

function Reload(category) {
    var index;
    switch (category){
        case 'hour':
            index = GetIndex(idList['hour']);
            var index_hour = soundData_hour[index][1].substring(0,soundData_hour[index][1].indexOf("時"));
            document.getElementById("output_hour").textContent = index_hour;
            break;
        case 'minute':
            index = GetIndex(idList['minute']);
            var index_minute = soundData_minute[index][1].substring(0,soundData_minute[index][1].indexOf("分"));
            document.getElementById("output_minute").textContent = index_minute;
            break;
        case 'for':
            index = GetIndex(idList['for']);
            var index_for = soundData_for[index][1].substring(0,soundData_for[index][1].indexOf("("));
            document.getElementById("output_for").textContent =  index_for;
            break;
        case 'ryousu':
            index = GetIndex(idList['ryousu']);
            switch (index) {
                case 0:RyousuOutput1('green','１','３','△'); break;
                case 1:RyousuOutput1('green','１','４','△'); break;
                case 2:RyousuOutput1('green','１','５','△'); break;
                case 3:RyousuOutput1('green','１','６','△'); break;
                case 4:RyousuOutput1('green','１','７','△'); break;
                case 5:RyousuOutput1('green','１','８','△'); break;
                case 6:RyousuOutput1('green','１','９','△'); break;
                case 7:RyousuOutput1('green','１','12','△'); break;
            }
            break;
        case 'type':
            index = GetIndex(idList['type']);
            switch (index) {
                case 0: TypeOutput('green',soundData_type[0][1]); break;
                case 1: TypeOutput('orange',soundData_type[1][1]); break;
                case 2: TypeOutput('red',soundData_type[2][1]); break;
                case 3: TypeOutput('red',soundData_type[4][1]); break;
                case 4: TypeOutput('red',soundData_type[4][1]); break;
                case 5: TypeOutput('red',soundData_type[4][1]); break;
                case 6: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',true,'スーパーはくと12号'); break;
                case 7: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',true,'ビクトリーはくと号'); break;
                case 8: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',true,'びわこエクスプレス'); break;
                case 9: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',false,'はるか12号'); break;
                case 10: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',true,'サンダーバード５号'); break;
                case 11: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',false,'くろしお５号'); break;
                case 12: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',true,'ひ　だ　５号'); break;
                case 13: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',true,'サンライズ瀬戸'); break;
                case 14: TypeOutput('red',soundData_type[4][1]); RyousuOutput2('orange',true,'ﾄﾜｲﾗｲﾄｴｸｽﾌﾟﾚｽ'); break;
                case 15:
                    document.getElementById("output_type").innerHTML = "<span style='color: #f0ee38;font-family:Dosis,sans-serif; font-size: 0.5em; line-height: 1em; letter-spacing: 2px;'><span style='display: inline; float: left;'>TWILIGHT</span><span style='display: inline; float: right;'>EXPRESS</span></span>";
                    document.getElementById("output_ryousu").innerHTML = "<span class='green' style='font-family:\"Sawarabi Mincho\";'>瑞　風</span>";
                    document.getElementById("output_for").innerHTML = "<span class='green letter-spacing transform'>山陽線<span class='homen'> 経由</span>下関</span>";
                    break;
            }
            break;
    }
    function RyousuOutput1(color,start,end,shape) {
        document.getElementById("output_ryousu").innerHTML = "<span class='" + color +"'>" + shape + start + "〜" + end +"</span>";
    }
    function TypeOutput(color,type) {
        document.getElementById("output_type").innerHTML = "<span class='"+ color +"'>"  + type + "</span>";
    }
    function RyousuOutput2(color,transform,name) {
        if(transform) {
            var option = 'transform';
        }
        document.getElementById("output_ryousu").innerHTML = "<span class='" + color +" "+ option + "'>" + name +"</span>";
    }
}

var index,pass,phrase,audiotest;

function GETPassAndName(category) {
    switch (category){
        case 'others':
            index = GetIndex(idList['others']);
            pass = soundData[index][0];
            phrase = soundData[index][1];
            break;
        case 'hour':
            index = GetIndex(idList['hour']);
            pass = soundData_hour[index][0];
            phrase = soundData_hour[index][1];
            break;
        case 'minute':
            index = GetIndex(idList['minute']);
            pass = soundData_minute[index][0];
            phrase = soundData_minute[index][1];
            break;
        case 'silent':
            index = GetIndex(idList['silent']);
            pass = soundData_silent[index][0];
            phrase = soundData_silent[index][1];
            break;
        case 'for':
            index = GetIndex(idList['for']);
            pass = soundData_for[index][0];
            phrase = soundData_for[index][1];
            break;
        case 'and':
            index = GetIndex(idList['and']);
            pass = soundData_and[index][0];
            phrase = soundData_and[index][1];
            break;
        case 'melody':
            index = GetIndex(idList['melody']);
            pass = soundData_melody[index][0];
            phrase = soundData_melody[index][1];
            break;
        case 'type':
            index = GetIndex(idList['type']);
            pass = soundData_type[index][0];
            phrase = soundData_type[index][1];
            break;
        case 'ryousu':
            index = GetIndex(idList['ryousu']);
            pass = soundData_ryousu[index][0];
            phrase = soundData_ryousu[index][1];
            break;
    }
    audiotest = new Audio(pass);
}
