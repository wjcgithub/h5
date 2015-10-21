document.body.onload = game;

var can1;
var can2;
var ctx1;
var ctx2;

//最后一帧的时间
var lastTime;
//每帧之间的时间差
var deltaTime;

//背景图片
var bgPic = new Image();

//canvas 宽度
var canw;
//canvas 高度
var canh;

/**
 * 游戏入口文件
 */
function game(){
	//初始化游戏
	init();
	//开始游戏循环
	gameLoop();
}

/**
 * 初始化
 */
function init(){
	//初始化时间
	lastTime = Date.now();
	//初始化时间差值
	deltaTime = 0;

	//获取canvas context
		//绘制小鱼（fishes）， dust， (分数什么的)UI， 吃到果实后的圈圈特效（circle）
		can1 = document.getElementById('canvas1');
		ctx1 = can1.getContext('2d');

		//绘制background, (海葵)ane， 果实（fruits）
		can2 = document.getElementById('canvas2');
		ctx2 = can2.getContext('2d');

	//canvas 宽度
	var canw = can1.width;
	//canvas 高度
	var canh = can1.height;

	//初始化背景
	bgPic.src = "./src/background.jpg";
	bgPic.onload = function (){
		ctx2.drawImage(bgPic, 0, 0, canw, canh);
	}	
}

/**
 * [gameLoop 游戏序列帧]
 * @return {[type]} [description]
 */
function gameLoop(){
    requestAnimFrame(gameLoop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	// console.log(deltaTime);

	//绘制背景
	// bg();
}