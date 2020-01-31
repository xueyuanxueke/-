var g_Interval = 10;
var g_PersonCount = 62;//参加抽奖人数
var g_Timer;
var running = false;
//名单，名字间用英文逗号隔开
var all='吴盛杰,宋胜利,路凯园,师雨菲,师朋辉,师奥奇,赵若瑜,师妍妍,赵晓羽,陈家怡,路  斌,宋雨倩,师欣怡,赵鑫柯,宋云朵,赵思雨,张墨涵,宋倩倩,师若熙,师世杰,师文瑞,聂锐豪,冉  浩,赵文彬,冉丽婷,高圆圆,赵轲鑫,赵静茹,师  润,王紫嫣,赵郴冰,路奥运,赵雨涵,石语菲,师婉晴,张诗语,王玉茹,师浩宇,师浩奇,胡靖雨,王  桦,赵依婷,石  雄,宋慧格,肖奥洋,孟嘉祺,师佳怡,赵瑞龙,韩  喆,聂文卓,聂嘉豪,石  豪,冉宏扬,肖艺豪,师梦梦,师  毅,冉梦华,师智博,师亚飞,冉令普,冉梦佩文,师梦阳';
/*
var name = [
		"吴盛杰","宋胜利","路凯园","师雨菲","师朋辉","师奥奇",
		"赵若瑜","师妍妍","赵晓羽","陈家怡","路  斌","宋雨倩",
		"师欣怡","赵鑫柯","宋云朵","赵思雨","张墨涵","宋倩倩",
		"师若熙","师世杰","师文瑞","聂锐豪","冉  浩","赵文彬",
		"冉丽婷","高圆圆","赵轲鑫","赵静茹","师  润","王紫嫣",
		"赵郴冰","路奥运","赵雨涵","石语菲","师婉晴","张诗语",
		"王玉茹","师浩宇","师浩奇","胡靖雨","王  桦","赵依婷",
		"石  雄","宋慧格","肖奥洋","孟嘉祺","师佳怡","赵瑞龙",
		"韩  喆","聂文卓","聂嘉豪","石  豪","冉宏扬","肖艺豪",
		"师梦梦","师  毅","冉梦华","师智博","师亚飞","冉令普",
		"冉梦佩文","师梦阳"
];
*/
var Name = all.split(',');
g_PersonCount = all.length;
var pro = [
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,39
];
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