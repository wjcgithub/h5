/**
 * Created by evolution on 15-9-20.
 */
//声明一个舞台对象
var stage;
//声明一个文本对象
var text;
var count = 0;
window.onload = function () {
    //创建canvas对象
    var canvasObj = new Canvas;
    //生成canvas标签
    canvasObj.c();

    //传入canvas对象生成一个舞台
    stage = new createjs.Stage(canvasObj.id);
    text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
    stage.addChild(text);

    createjs.Ticker.setFPS(1);
    createjs.Ticker.addEventListener('tick',handleTick);
    function handleTick(event){
        count++;
        text.text = "Hello World-->"+count;
        stage.update();
    }


    //var stage = new createjs.Stage(canvasObj.id);
    //var image = new createjs.Bitmap("../img/rhino.jpg");
    //stage.addChild(image);
    //createjs.Ticker.addEventListener("tick", handleTick);
    //function handleTick(event) {
    //    image.x += 10;
    //    stage.update();
    //}

}