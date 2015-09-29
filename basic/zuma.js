/**
 * Created by evolution on 15-9-19.
 */
window.onload = function (){
    //创建canvas对象
    var canvasObj = new Canvas('div1');
    var utils = new Utils();
    canvasObj.width = 600;
    canvasObj.height = 600;
    //生成canvas标签
    canvasObj.c();
    var ctx = canvasObj.getInstance();

    //设置一些常量
        //子弹的半径
        var bulletRadius = 20;
        //怪物的半径
        var gwRadius = 20;
        //游戏结束声音
        var gameOver = document.getElementById('a_gameover');
        //小球消失的声音
        var qw = document.getElementById('a_qw');
        //游戏背景的声音
        var background = document.getElementById('a_background');

    //加载祖玛图片
    var img = new Image();
    img.src = '../img/zuma.png';
    img.onload = function (){
        background.play();
        setInterval(function (){
            ctx.clearRect(0,0,canvasObj.width,canvasObj.height);
            //画线路
            ctx.beginPath();
            ctx.arc(300,200,200,utils.hd(-90),utils.hd(180));
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(250,200,150,utils.hd(180),utils.hd(360));
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(400,200,20,utils.hd(0),utils.hd(360));
            ctx.stroke();

            //画小球
            for(var i=0; i<ball.length; i++){
                ctx.beginPath();
                ctx.arc(ball[i].x,ball[i].y,gwRadius,utils.hd(0),utils.hd(360));
                ctx.fillStyle = "rgba("+ccolor()+","+ccolor()+","+ccolor()+",0.5)";
                ctx.fill();
            }

            //画子弹
            for(var i=0; i<bullet.length; i++){
                ctx.beginPath();
                ctx.arc(bullet[i].x,bullet[i].y,bulletRadius,utils.hd(0),utils.hd(360));
                ctx.fillStyle = 'red';
                ctx.fill();
            }

            //开始画祖玛
            ctx.save();
            ctx.translate(300,200);
            //ctx.rotate(m++*Math.PI/180);
            ctx.rotate(iRotate);
            ctx.translate(-40,-40);
            ctx.drawImage(img,0,0);
            ctx.restore();

            //添加文字
            ctx.save();
            ctx.font = '60px impact';
            ctx.textBaseLine = 'top';
            ctx.fillStyle = 'red';
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 10;
            ctx.shadowColor = 'yellow';
            ctx.shadowBlur = 5;
            var w = ctx.measureText('简易祖玛').width;
            var h = 60;
            ctx.fillText('简易祖玛',(canvasObj.cobj.width - w)/2, 500);
            ctx.restore();

        },1000/60);

        //更改小球的x,y坐标
        setInterval(function (){
            for(var i=0; i<ball.length; i++){
               ball[i].degree++;

                //进入小圈的判断规则
                if( ball[i].degree==270){
                    ball[i].r=150;
                    ball[i].startX=250;
                    ball[i].startY=50;
                }

                //游戏结束的判断规则
                if( ball[i].degree==270+180){
                    gameOver.play();
                    background.pause();
                    alert('game over');
                    window.location.reload();
                }

                ball[i].x = Math.sin(ball[i].degree*Math.PI/180)*ball[i].r+ball[i].startX;
                ball[i].y = ball[i].r-Math.cos(ball[i].degree*Math.PI/180)*ball[i].r+ball[i].startY;
            }

            //发射子弹
            for(var i=0; i<bullet.length; i++){
                bullet[i].x = bullet[i].x + bullet[i].sX;
                bullet[i].y = bullet[i].y + bullet[i].sY;
            }


            //开启碰撞监测
            for(var i=0; i<bullet.length; i++){
                for(var j=0; j<ball.length; j++){
                    if(pz(bullet[i].x, bullet[i].y, ball[j].x, ball[j].y)) {
                        bullet.splice(i, 1);
                        ball.splice(j, 1);
                        break;
                    }
                }
            }

        },30);

        //小球的定义
        var ball = [];
        ball[0] = {
            x:300,
            y:0,
            r:200,
            degree:0,
            startX:300,
            startY:0,
        }

        //生成小球
        setInterval(function (){
            ball.push({
                x:300,
                y:0,
                r:200,
                degree:0,
                startX:300,
                startY:0,
            });
        },800);

        //当鼠标点击的时候安装子弹
        var bullet = [];
        canvasObj.cobj.onmousedown = function (ev){
            var ev = ev || window.event;

            var x = ev.clientX - canvasObj.cobj.offsetLeft;
            var y = ev.clientY - canvasObj.cobj.offsetTop;

            var a = x-300;
            var b = y-200;
            var c = Math.sqrt(a*a+b*b);

            var speed = 5;
            var sX = speed * a/c;
            var sY = speed * b/c;

            bullet.push({
                x:300,
                y:200,
                sX:sX,
                sY:sY
            });
        }

        //添加鼠标跟随事件
        var iRotate = 0;
        canvasObj.cobj.onmousemove = function(ev){
            var ev = ev || window.event;

            //clientX    -----   当前鼠标距离屏幕左侧的距离
            //clientY    -----    当前鼠标距离顶部的距离
            //offsetLeft  ----    某个元素距离左侧的距离
            //offsetTop  ----    某个元素距离顶部的距离
            var x = ev.clientX - canvasObj.cobj.offsetLeft;
            var y = ev.clientY - canvasObj.cobj.offsetTop;

            var a = x-300;
            var b = y-200;
            var c = Math.sqrt(a*a+b*b);

            //右下
            if(a>0 && b>0){
                iRotate = Math.asin(b/c) + 90*Math.PI/180;
            //右上
            }else if(a>0){
                iRotate = Math.asin(a/c);
            }

            //左下
            if(a<0 && b>0){
                iRotate = -(Math.asin(b/c) + 90*Math.PI/180);
            //左上
            }else if(a<0){
                iRotate = Math.asin(a/c);
            }

        }

    }

    //碰撞检查
    function pz(x1,y1,x2,y2){
        var a = x1 - x2;
        var b = y1 - y2;

        var c = Math.sqrt(a*a+b*b);
        if(c < gwRadius+bulletRadius){
            qw.play();
            return true;
        }else{
            return false;
        }
    }

    function ccolor(){
        return Math.floor(Math.random()*255);
    }

}



