/**
 * Created by evolution on 15-9-19.
 */
window.onload = function (){
    //创建canvas对象
    var canvasObj = new Canvas;
    //生成canvas标签


    //绘制一个正方形
    //canvasObj.c();
    //    canvasObj.ctx.fillStyle = 'green';
        //旋转
        //canvasObj.ctx.rotate(45);
        //平移
        //canvasObj.ctx.translate(200,200);
        //缩放
        //canvasObj.ctx.scale(2,0.4);
        //变形
        //_this.ctx.transform(1,1,0,1,0,0);
        //canvasObj.ctx.fillRect(0,0,500,500);

    //绘制图片
    //canvasObj.c();
    //    canvasObj.drawImg();

    //绘制一个圆形
    //canvasObj.c();
    //    for(var i=0; i<=10; i++){
    //        canvasObj.ctx.beginPath();
    //        //canvasObj.ctx.transform(1,1,0,1,0,0);
    //        canvasObj.ctx.arc(i*5,i*5,i*10,0,Math.PI*2,true);
    //        canvasObj.ctx.closePath();
    //        canvasObj.ctx.fillStyle = "rgba(255,0,0,0.25)";
    //        canvasObj.ctx.fill();
    //    }
        //注意必须beginPath, closePath 否则不关闭路径会重复绘制之前的线段

    //绘制线段  move to   line to
    //canvasObj.c();
    //    canvasObj.ctx.fillStyle = "#eeeeef";
    //    canvasObj.ctx.fillRect(0,0,300,400);
    //    var dx = 150;
    //    var dy = 150;
    //    var s = 100;
    //    canvasObj.ctx.beginPath();
    //    canvasObj.ctx.fillStyle = "rgb(100,255,100)";
    //    canvasObj.ctx.strokeStyle = "rgb(0,0,100)";
    //    var x = Math.sin(0);
    //    var y = Math.cos(0);
    //    var dig = Math.PI / 15*11;
    //    for(var i=0; i<30; i++){
    //        var x = Math.sin(i*dig);
    //        var y = Math.cos(i*dig);
    //        canvasObj.ctx.lineTo(dx+x*s,dy+y*s);
    //
    //    }
    //
    //    canvasObj.ctx.closePath();
    //    canvasObj.ctx.fill();
    //    canvasObj.ctx.stroke();



    //使用bezierCurveTo绘制贝塞尔曲线
    canvasObj.width = 600;
    canvasObj.c();
    canvasObj.ctx.fillStyle="#eeeeef"
    canvasObj.ctx.fillRect(0,0,600,600);
    var dx = 150;
    var dy = 150;
    var s = 100;
    canvasObj.ctx.beginPath();
    canvasObj.ctx.fillStyle = "rgb(100,255,100)";
    canvasObj.ctx.strokeStyle = "rgb(0,0,100)";
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15*11;
    canvasObj.ctx.moveTo(dx,dy);
    for(var i=0; i<30; i++){
        var x = Math.sin(i*dig);
        var y = Math.cos(i*dig);
        canvasObj.ctx.bezierCurveTo(dx+x*s, dy+y*s-100,dx+x*s+100,dy+y*s,dx+x*s,dy+y*s);
    }
    canvasObj.ctx.closePath();
    canvasObj.ctx.fill();
    canvasObj.ctx.stroke();
}



