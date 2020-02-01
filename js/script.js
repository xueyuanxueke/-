var g_Interval = 10;
var g_PersonCount;//参加抽奖人数
var g_Timer;
var running = false;
//名单，名字间用英文逗号隔开
var all='张三,李四,王二,麻子';
var Name = all.split(',');
g_PersonCount = all.length;
var pro = [25,25,25,25];
var sum = [];
var ans;
sum[0] = 0;
for(var i=1; i<=pro.length; i++) {
	sum[i] = sum[i-1] + pro[i-1] * 10;
}
var num1;
function end(){
	num1 = parseInt(Math.random()*1000,10);;
	for(var i=0; i<g_PersonCount; i++) {
		if(num1>=sum[i] && num1<sum[i+1]) {
			ans = i;break;
		}
	}
}
function beginRndNum(trigger){
	if(running){
		running = false;
		clearTimeout(g_Timer);
		$('#ResultNum').html(Name[ans]);		
		$(trigger).val("开始");
		$('#ResultNum').css('color','red');
	}
	else{
		end();
		running = true;
		$('#ResultNum').css('color','black');
		$(trigger).val("停止");
		beginTimer();
	}
}

function updateRndNum(){
	var num = Math.floor(Math.random()*g_PersonCount);
	$('#ResultNum').html(Name[num%g_PersonCount]);
}

function beginTimer(){
	g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
	g_Timer = setTimeout(beat, g_Interval);
	updateRndNum();
}
