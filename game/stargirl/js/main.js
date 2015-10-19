//canvas 元素
var can;
//canvas 2d元素
var ctx;
//画布的宽度
var w;
//画布的高度
var h;
//女孩图片
var girlPic = new Image();
//星星图片
var starPic = new Image();
//星星数量
var num = 60;
//星星的集合
var stars = [];

//上一次帧刷新的时间
var lastTime;
//最近两次帧的时间间隔
var deltaTime;

function init(){
    //获取2d绘图环境
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');

    //获取画布的宽度
    w = can.width;
    //获取画布的高度
    h = can.height;
    //初始化女孩图片
    girlPic.src = "src/girl.jpg";
    //初始化星星图片
    starPic.src = "src/star.png";

    //循环创建星星对象
    for(var i=0; i<num; i++){
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }

    lastTime = Date.now();

    //游戏循环
    gameLoop();
}

/**
 * 绘制背景
 */
function drawBg(){
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,w,h);
}

/**
 * 绘制女孩
 */
function drawGirl(){
    //drawImage(img,x,y);
    //x轴坐标正方向向右,y轴坐标正方向向下, (0,0) 在canvas左上角
    ctx.drawImage(girlPic,100,150,600,300);
}

/**
 * 刷新canvas画布
 */

function gameLoop(){
    //添加帧循环器
    requestAnimFrame(gameLoop);

    //计算两帧时间差
    var now = Date.now();
    //计算时间间隔
    deltaTime = now - lastTime;
    //更新最后一次时间
    lastTime = now;

    //绘制背景
    drawBg();
    //绘制女孩
    drawGirl();
    //绘制星星
    drawStars();
}

//游戏初始化
window.onload = function (){
    init();
}

//1. 动画的实现就是使用序列帧实现
//2. 使用如下方法实现轮播序列帧
//Window API:
//1. requestAnimFrame(function (){});
    //根据电脑的性能进行间隔调用.不会出现当第一次还没执行完就去执行第二帧
//2.setTimeout(function(){},time);
//3.setInterval(function(){},time);
