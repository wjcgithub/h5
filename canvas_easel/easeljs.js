/**
 * Created by evolution on 15-9-20.
 */
//声明一个舞台对象
var stage;
//声明一个文本对象
var text;
var count = 0;
var img = new Image();
var sprite;
var canvasObj = null;
window.onload = function () {
    //创建canvas对象
    canvasObj = new Canvas;
    canvasObj.width = 500;
    canvasObj.height = 500;
    //生成canvas标签
    canvasObj.c();

    //传入canvas对象生成一个舞台
    stage = new createjs.Stage(canvasObj.id);
    //给舞台添加事件监听
    stage.addEventListener('stagemousedown', clickCanvas);
    stage.addEventListener('stagemousemove', moveCanvas);

    var data = {
        images:["../img/b.jpg"],
        frames:{width:20, height:20,regx:10,regy:10},
    }

    sprite = new createjs.Sprite(new createjs.SpriteSheet(data));
    createjs.Ticker.setFPS(20);
    createjs.Ticker.addEventListener('tick', tick);
}

function clickCanvas(e){
    addS(Math.random()*200+200,stage.mouseX,stage.mouseY,2);
}

function moveCanvas(e){
    addS(Math.random()*20+1,stage.mouseX,stage.mouseY,1);
}

function tick(e){
    //获取舞台所有的元素
    var t = stage.getNumChildren();
    //对每一个进行单独的设计
    for(var i=t-1; i>0; i--){
        var s = stage.getChildAt(i);

        s.vY +=2;
        s.vx +=1;
        s.x += s.vX;
        s.y += s.vY;

        s.scaleX = s.scaleY = s.scaleX+s.vS;
        s.alpha = s.vA;

        //有的星星半路就消除了,该怎么处理
        if(s.alpha <= 0 || s.y > canvasObj.height){
            stage.removeChildAt(i);
        }
    }
    stage.update();
}

function addS(count,x,y,speed){
    for(var i=0; i<count; i++){
        var s = sprite.clone();
        s.x = x;
        s.y = y;
        s.alpha = Math.random()*0.5 + 0.5;
        s.scaleX = s.scaleY = Math.random() + 0.3;

        //范围
        var a = Math.PI * 2 * Math.random();
        //速度
        var v = (Math.random() - 0.5) * 30 * speed;
        s.vX = Math.cos(a)*v;
        s.vY = Math.sin(a)*v;
        s.vS = (Math.random() - 0.5) * 0.2;  //scale
        s.vA = Math.random()*0.05 -0.01; //alpha
        stage.addChild(s);
    }
}