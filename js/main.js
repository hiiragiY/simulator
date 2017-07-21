function top_info()
{
	var station = new Array();
	station[0] = '備中高梁';
	station[1] = '魚　住';
	station[2] = '鷹　取';
	station[3] = '島　本';
	station[4] = '東加古川';
	station[5] = '東 姫 路';
	station[6] = '<font color=\"#377F0B\" style=\"letter-spacing: -3px\"><span class=\"transform\">名古屋</span><span style=\"font-size: 50%; letter-spacing: 0px; \">方面</span>岡 崎</font>';
	station[7] = '<font color=\"#377F0B\" style=\"letter-spacing: -3px\"><span class=\"transform\">岡山</span><span style=\"font-size: 50%; letter-spacing: 0px; \">方面</span>三 原</font>';
	station[8] = '<font color=\"#377F0B\" style=\"letter-spacing: -3px\"><span class=\"transform\">米原</span><span style=\"font-size: 50%; letter-spacing: 0px; \">方面</span>大 垣</font>';
	station[9] = '手　柄';
	station[10] = '比叡山坂本';

	var no = Math.floor(Math.random() * station.length);
	document.getElementById("output_for").innerHTML = station[no];

	var type = new Array();

	type[0] = '普　通';
	type[1] = '<font color=\"#E68115\">貨　物</font>';
	type[2] = '<font color=\"#E68115\">快　速</font>';
	type[3] = '<font color=\"red\">新快速</font>';
	type[4] = '<font color=\"red\">臨　時</font>';
	type[5] = '団　体';
	type[6] = '<font color=\"#E68115\">回　送</font>';
	type[7] = '<font color=\"#E68115\">通　過</font>'

	var no = Math.floor(Math.random() * type.length);
	document.getElementById("output_type").innerHTML = type[no];

	if(no == 1 || no == 5 || no == 6){
	    document.getElementById("output_for").innerHTML = '当 駅 止';
	    document.getElementById("output_ryousu").innerHTML = '';
	}
	if(no == 7){
	    document.getElementById("output_ryousu").innerHTML = '';
	    document.getElementById("output_for").innerHTML = '';
	    document.getElementById("depature_time").innerHTML = '';
	}

	var okure = new Array();
	okure[0] = '<font color=\"red\" size=\"5pt\"><center><span class=\"transform\">遅れ約</span>５分</center></font>';
	okure[1] = '<font color=\"red\" size=\"5pt\"><center><span class=\"transform\">遅れ約</span>10分</center></font>';
	okure[2] = '<font color=\"red\" size=\"5pt\"><center><span class=\"transform\">遅れ約</span>20分</center></font>';
	okure[3] = '<font color=\"red\" size=\"5pt\"><center><span class=\"transform\">遅れ約</span>45分</center></font>';
	okure[4] = '<font color=\"red\" size=\"5pt\"><center><span class=\"transform\">遅れ約</span>90分</center></font>';
	okure[6] = '';
	okure[7] = '';
	okure[8] = '';

	var no = Math.floor(Math.random() * okure.length);
	document.getElementById("output_delay").innerHTML = okure[no];
}

//追加②
var test = false;
var test_hour = false;
var test_minute = false;
var test_silent = false;
var test_for = false;
var test_and = false;
var test_melody = false;
var test_type = false;
var test_ryousu = false;

//追加①全部で10個！
function testplay_sound()
{
	var testfile;

	if(test){
		var id = "partsListSelect";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData[index][0];
	}
	if(test_hour){
		var id = "partsListSelect_hour";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_hour[index][0];
	}
	if(test_minute){
		var id = "partsListSelect_minute";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_minute[index][0];
	}
	if(test_silent){
		var id = "partsListSelect_silent";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_silent[index][0];
	}
	if(test_for){
		var id = "partsListSelect_for";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_for[index][0];
	}
	if(test_and){
		var id = "partsListSelect_and";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_and[index][0];
	}
	if(test_melody){
		var id = "partsListSelect_melody";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_melody[index][0];
	}
	if(test_type){
		var id = "partsListSelect_type";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_type[index][0];
	}
	if(test_ryousu){
		var id = "partsListSelect_ryousu";
		var index = document.getElementById(id).selectedIndex;
		testfile = soundData_ryousu[index][0];
	}

	audiotest = new Audio(testfile);
	audiotest.play();
}

function reload_hour() {
	var id = "partsListSelect_hour";
	var index = document.getElementById(id).selectedIndex;
	var index_hour = soundData_hour[index][1].substring(0,soundData_hour[index][1].indexOf("時"));
    document.getElementById("output_hour").textContent = index_hour;
}

function reload_minute() {
	var id = "partsListSelect_minute";
	var index = document.getElementById(id).selectedIndex;
	var index_minute = soundData_minute[index][1].substring(0,soundData_minute[index][1].indexOf("分"));
    document.getElementById("output_minute").textContent = index_minute;
}

function reload_for() {
	var id = "partsListSelect_for";
	var index = document.getElementById(id).selectedIndex;
    var index_for = soundData_for[index][1].substring(0,soundData_for[index][1].indexOf("("));
    document.getElementById("output_for").textContent = index_for;

    if(soundData_for[index][1] == '土　山(行)'){
    	document.getElementById("output_for").innerHTML = "<font color=\"#377F0B\" style=\"letter-spacing: -3px\"><span class=\"transform\">神戸<span class=\"transform\" style=\" font-size: 50%; letter-spacing: 0px; \">方面</span></span>土 山</font>";
    }
}
function reload_ryousu() {
	var id = "partsListSelect_ryousu";
	var index = document.getElementById(id).selectedIndex;
	if(index == 0){
    	document.getElementById("output_ryousu").innerHTML = "△1〜3";
    }
	if(index == 1){
        document.getElementById("output_ryousu").innerHTML = "△1〜4";
    }
	if(index == 2){
        document.getElementById("output_ryousu").innerHTML = "△1〜5";
    }
    if(index == 3){
        document.getElementById("output_ryousu").innerHTML = "△1〜6";
    }
    if(index == 4){
        document.getElementById("output_ryousu").innerHTML = "△1〜7";
    }
    if(index == 5){
        document.getElementById("output_ryousu").innerHTML = "△1〜8";
    }
    if(index == 6){
        document.getElementById("output_ryousu").innerHTML = "△1〜9";
    }
    if(index == 7){
        document.getElementById("output_ryousu").innerHTML = "△1〜12";
    }
}
function reload_type() {
	var id = "partsListSelect_type";
	var index = document.getElementById(id).selectedIndex;
	
	if(index == 0){
       	document.getElementById("output_type").innerHTML = soundData_type[index][1];
    }
	if(index == 1){
    	document.getElementById("output_type").innerHTML = "<font color=\"#E68115\">" + soundData_type[index][1] + "</font>";
    }
	if(index == 2 || index == 3){
        document.getElementById("output_type").innerHTML = "<font color=\"red\">" + soundData_type[index][1] + "</font>";
    }
    if(index == 5){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: -3px\">ｽｰﾊﾟｰ<span class=\"transform\">はくと</span>５号</font>";
    }
    if(index == 6){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: -2px\">ﾋﾞｸﾄﾘｰ<div class=\"text-narrow\">はくと</div>号</font>";
    }
    if(index == 7){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: 0px\">びわこｴｸｽﾌﾟﾚｽ</font>";
    }
    if(index == 8){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\">はるか５号</font>";
    }
    if(index == 9){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: -2px\">ｻﾝﾀﾞｰﾊﾞｰﾄﾞ５号</font>";
    }
    if(index == 10){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: 0px\">くろしお５号</font>";
    }
    if(index == 11){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: 0px\">ひ　だ ５号</font>";
    }
    if(index == 12){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: -2px\">サンライズ瀬戸</font>";
    }
    if(index == 13){
    	document.getElementById("output_type").innerHTML = "<font color=\"red\">" + "特　急"+ "</font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#E68115\" style=\"letter-spacing: 0px\">ﾄﾜｲﾗｲﾄｴｸｽﾌﾟﾚｽ</font>";
    }
    if(index == 14){
    	document.getElementById("output_type").innerHTML = "<font face=\"Dosis\" color=\"#f0ee38\"><span style=\" font-size: 60%; letter-spacing: 0px; line-height: 90%;\">TWILIGHT　 <br> 　EXPRESS</span></font>";
    	document.getElementById("output_ryousu").innerHTML = "<font color=\"#377F0B\" face=\"Sawarabi Mincho\" style=\"letter-spacing: 0px\">瑞　風</font>";
    	document.getElementById("output_for").innerHTML = "<font color=\"#377F0B\" style=\"letter-spacing: -3px\"><span class=\"transform\">山陽線<span style=\" font-size: 65%; letter-spacing: 0px; \">経由</span>下関</font>";
    }

	
}
// 今日追加

//真偽値で何が今選ばれているかを判定する（新しく選ばれた時点で前回選ばれていたものをfalseとする）

//追加③
var setSoundParts_on = false;
var setSoundParts_silent_on = false;
var setSoundParts_hour_on = false;
var setSoundParts_minute_on = false;
var setSoundParts_for_on = false;
var setSoundParts_and_on = false;
var setSoundParts_melody_on = false;
var setSoundParts_type_on = false;
var setSoundParts_ryousu_on = false;

//追加④
function HowsetSoundParts()
{
	all_false();
	setSoundParts_on = true;
	//テスト再生用
	test = true;
}

function HowsetSoundParts_silent()
{
	all_false();
	setSoundParts_silent_on = true;
	test_silent = true;
}

function HowsetSoundParts_hour()
{
	all_false();
	setSoundParts_hour_on = true;
	test_hour = true;
}
function HowsetSoundParts_minute()
{
	all_false();
	setSoundParts_minute_on = true;
	test_minute = true;
}

function HowsetSoundParts_for()
{
	all_false();
	setSoundParts_for_on = true;
	test_for = true;
}
function HowsetSoundParts_and()
{
	all_false();
	setSoundParts_and_on = true;
	test_and = true;
}
function HowsetSoundParts_melody()
{
	all_false();
	setSoundParts_melody_on = true;
	test_melody = true;
}
function HowsetSoundParts_type()
{
	all_false();
	setSoundParts_type_on = true;
	test_type = true;
}
function HowsetSoundParts_ryousu()
{
	all_false();
	setSoundParts_ryousu_on = true;
	test_ryousu = true;
}

//追加！！！！！！
function all_false()
{
	setSoundParts_silent_on = false;
	setSoundParts_on = false;
	setSoundParts_hour_on = false;
	setSoundParts_minute_on = false;
	setSoundParts_for_on = false;
	setSoundParts_and_on = false;
	setSoundParts_melody_on = false;
	setSoundParts_type_on = false;
	setSoundParts_ryousu_on = false;

	test = false;
	test_hour = false;
	test_minute = false;
	test_silent = false;
	test_for = false;
	test_and = false;
	test_melody = false;
	test_type = false;
	test_ryousu = false;

}
//追加⑤
function whichadd()//今何が選択されているかを調べた上で追加（関数）を選択実行する
{
	if(setSoundParts_on == true){
		setSoundParts();
	}
	else if(setSoundParts_silent_on == true){
		setSoundParts_silent();
	}
	else if(setSoundParts_hour_on == true){
		setSoundParts_hour();
	}
	else if(setSoundParts_minute_on == true){
		setSoundParts_minute();
	}
	else if(setSoundParts_for_on == true){
		setSoundParts_for();
	}
	else if(setSoundParts_and_on == true){
		setSoundParts_and();
	}
	else if(setSoundParts_melody_on == true){
		setSoundParts_melody();
	}
	else if(setSoundParts_type_on == true){
		setSoundParts_type();
	}
	else if(setSoundParts_ryousu_on == true){
		setSoundParts_ryousu();
	}
}

//追加⑥

function output(addText){
	//入っている文字列を取り出す
	var id = "inputTextarea";
	var text = document.getElementById(id).value;
	
	//付け足したい文字列を追加する
	//テキストが既に入っており、最後の文字が改行でなければ、改行をまず追加する
	if(text != "" && text.slice(-1) != "\n")
		text += "\n";
	
	text += addText;

	//文字列を返してあげる
	var id = "inputTextarea";
	document.getElementById(id).value = text;
}

//入力内容をクリアする
function resetInput()
{
	var id = "inputTextarea";
	document.getElementById(id).value = "";
}

var inputTextSplit;

//追加⑦
function checkInput()
{
	//入っている文字列を取り出す
	var id = "inputTextarea";
	var inputText = document.getElementById(id).value;
	inputTextSplit = inputText.split("\n");
	
	var judgeFlag = true;
	var NGText = "";

	for(i=0 ; i<inputTextSplit.length ; i++)
	{
		var innerFlag = false;
		var textBuff = inputTextSplit[i];
		//存在する分節かチェックする
		for(j=0 ; j<soundData.length ; j++)
		{
			if(textBuff == soundData[j][1])
			{
				innerFlag = true;
				break;
			}
		}

		for(j=0 ; j<soundData_hour.length ; j++)
		{
			if(textBuff == soundData_hour[j][1])
			{
				innerFlag = true;
				break;
			}
		}
		for(j=0 ; j<soundData_minute.length ; j++)
		{
			if(textBuff == soundData_minute[j][1])
			{
				innerFlag = true;
				break;
			}
		}

		for(j=0 ; j<soundData_silent.length ; j++)
		{
			if(textBuff == soundData_silent[j][1])
			{
				innerFlag = true;
				break;
			}
		}
		for(j=0 ; j<soundData_for.length ; j++)
		{
			if(textBuff == soundData_for[j][1])
			{
				innerFlag = true;
				break;
			}
		}
		for(j=0 ; j<soundData_and.length ; j++)
		{
			if(textBuff == soundData_and[j][1])
			{
				innerFlag = true;
				break;
			}
		}
		for(j=0 ; j<soundData_melody.length ; j++)
		{
			if(textBuff == soundData_melody[j][1])
			{
				innerFlag = true;
				break;
			}
		}
		for(j=0 ; j<soundData_type.length ; j++)
		{
			if(textBuff == soundData_type[j][1])
			{
				innerFlag = true;
				break;
			}
		}
		for(j=0 ; j<soundData_ryousu.length ; j++)
		{
			if(textBuff == soundData_ryousu[j][1])
			{
				innerFlag = true;
				break;
			}
		}
		if(!innerFlag)
		{
			judgeFlag = false;
			NGText += "\n"+textBuff;
		}
	}
	
	if(judgeFlag)
	{
	}
	else
	{
		alert("【エラー】以下の文節が認識できませんでした。登録済みの文節を使用してください。（不具合かもしれないと感じた場合は連絡していただけると助かります。）\n"+NGText);
		return;
	}
	
	//もし放送中の場合はキャンセル
	soundStop();
	
	//音声の事前ロード
	/*
	for(i=0 ; i<inputTextSplit.length ; i++)
	{
		var phrase = inputTextSplit[i];
		var fileName = getFileName(phrase);
		
		loadSoundFile(fileName);
	}
	 */
	
	//音声の事前ロード
	for(i=0 ; i<preLoad ; i++)
	{
		//5ファイル以内だった場合スキップ
		if(i>=inputTextSplit.length)
			break;
		
		var phrase = inputTextSplit[i];
		var fileName = getFileName(phrase);
		
		loadSoundFile(fileName);
	}
	
	nowSoundNum = 0;
	setTimeout("soundStart()", 2000)
}

//事前に読み込む音声パーツ数
var preLoad = 5;

//追加⑧＆⑨

//入力　日本語の文字列　出力　ファイル名
function getFileName(phrase)
{
	var playFlag = false;
	var playFlag_hour = false;
	var playFlag_minute = false;
	var playFlag_silent = false;
	var playFlag_for = false;
	var playFlag_and = false;
	var playFlag_melody = false;
	var playFlag_type = false;
	var playFlag_ryousu = false;

	var placeoftext = 0; //読み上げる文書の位置

	for(; placeoftext<inputTextSplit.length ; placeoftext++)
	{
		var checktext = inputTextSplit[placeoftext];

		for(j=0 ; j<soundData.length ; j++)
		{
			if(checktext == soundData[j][1])
			{
				playFlag = true;
				break;
			}
		}
		for(j=0 ; j<soundData_hour.length ; j++)
		{
			if(checktext == soundData_hour[j][1])
			{
				playFlag_hour = true;
				break;
			}
		}
		for(j=0 ; j<soundData_minute.length ; j++)
		{
			if(checktext == soundData_minute[j][1])
			{
				playFlag_minute = true;
				break;
			}
		}
		for(j=0 ; j<soundData_silent.length ; j++)
		{
			if(checktext == soundData_silent[j][1])
			{
				playFlag_silent = true;
				break;
			}
		}
		for(j=0 ; j<soundData_for.length ; j++)
		{
			if(checktext == soundData_for[j][1])
			{
				playFlag_for = true;
				break;
			}
		}
		for(j=0 ; j<soundData_and.length ; j++)
		{
			if(checktext == soundData_and[j][1])
			{
				playFlag_and = true;
				break;
			}
		}
		for(j=0 ; j<soundData_melody.length ; j++)
		{
			if(checktext == soundData_melody[j][1])
			{
				playFlag_melody = true;
				break;
			}
		}
		for(j=0 ; j<soundData_type.length ; j++)
		{
			if(checktext == soundData_type[j][1])
			{
				playFlag_type = true;
				break;
			}
		}
		for(j=0 ; j<soundData_ryousu.length ; j++)
		{
			if(checktext == soundData_ryousu[j][1])
			{
				playFlag_ryousu = true;
				break;
			}
		}
		if(playFlag){
			for(j=0 ; j<soundData.length ; j++)
			{
				if(phrase == soundData[j][1])
				{
					playFlag = false;
					return soundData[j][0];
				}
			}
		}
		if(playFlag_hour){
			for(j=0 ; j<soundData_hour.length ; j++)
			{
				if(phrase == soundData_hour[j][1])
				{
					playFlag_hour = false;
					return soundData_hour[j][0];	
				}
			}
		}
		if(playFlag_minute){
			for(j=0 ; j<soundData_minute.length ; j++)
			{
				if(phrase == soundData_minute[j][1])
				{
					playFlag_minute = false;
					return soundData_minute[j][0];	
				}
			}
		}
		if(playFlag_silent){
			for(j=0 ; j<soundData_silent.length ; j++)
			{
				if(phrase == soundData_silent[j][1])
				{
					playFlag_silent = false;
					return soundData_silent[j][0];
				}
			}
		}
		if(playFlag_for){
			for(j=0 ; j<soundData_for.length ; j++)
			{
				if(phrase == soundData_for[j][1])
				{
					playFlag_for = false;
					return soundData_for[j][0];
				}
			}
		}
		if(playFlag_and){
			for(j=0 ; j<soundData_and.length ; j++)
			{
				if(phrase == soundData_and[j][1])
				{
					playFlag_and = false;
					return soundData_and[j][0];
				}
			}
		}
		if(playFlag_melody){
			for(j=0 ; j<soundData_melody.length ; j++)
			{
				if(phrase == soundData_melody[j][1])
				{
					playFlag_melody = false;
					return soundData_melody[j][0];
				}
			}
		}
		if(playFlag_type){
			for(j=0 ; j<soundData_type.length ; j++)
			{
				if(phrase == soundData_type[j][1])
				{
					playFlag_type = false;
					return soundData_type[j][0];
				}
			}
		}
		if(playFlag_ryousu){
			for(j=0 ; j<soundData_ryousu.length ; j++)
			{
				if(phrase == soundData_ryousu[j][1])
				{
					playFlag_ryousu = false;
					return soundData_ryousu[j][0];
				}
			}
		}
	}
}

//指定された音声を先にロードだけする
function loadSoundFile(soundFileName)
{
	audio = new Audio(soundFileName);
	audio.load();
}

var nowSoundNum = 0;
audio = new Audio("sound/null-250.mp3");
audio0 = new Audio("sound/null-250.mp3");
audio1 = new Audio("sound/null-250.mp3");


//パーツの音声を再生する
function soundStart()
{
	//ファイル名取得
	var phrase = inputTextSplit[nowSoundNum];
	var fileName = getFileName(phrase);

	//1つ目の場合
	if(nowSoundNum == 0)
	{
		audio0 = new Audio(fileName);
		audio0.play();
	}
	//偶数の場合
	else if(nowSoundNum % 2 == 0)
	{
		audio0.play();
	}
	else
	//奇数の場合
	{
		audio1.play();
	}
		
	//最後でなければ、次のイベントリスナー貼る
	if(nowSoundNum < inputTextSplit.length-1)
	{
		var phrase = inputTextSplit[nowSoundNum+1];
		var fileName = getFileName(phrase);
		
		if(nowSoundNum % 2 == 0)
		{
			audio1 = new Audio(fileName);
			audio0.addEventListener('ended', nextSound, false);
		}
		else
		{
			audio0 = new Audio(fileName);
			audio1.addEventListener('ended', nextSound, false);
		}
		
		//audio.addEventListener('ended', nextSound, false);
	}
	
	/*
	//最後でなければ、次の放送をセットして流す
	if(nowSoundNum < inputTextSplit.length-1)
	{
		setTimeout("setNextSound()", 30);
	}
	*/
	
	//5つ先の音声を事前に読み込む
	if(nowSoundNum+5 < inputTextSplit.length)
	{
		var phrase = inputTextSplit[nowSoundNum+5];
		var fileName = getFileName(phrase);
		
		loadSoundFile(fileName);
	}
	

	nowSoundNum++;
	//alert(audio.duration)
}

function setNextSound()
{
	var time = audio.duration*1000;
	setTimeout("soundStart()", time);
	log(time);
}

function nextSound(event)
{
	soundStart();
}

var event;



function soundStop()
{
	audio.pause();
}


function log(text)
{
	id = "log";
	document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + "<br />"+text;
}
