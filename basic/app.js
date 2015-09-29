/**
 * Created by evolution on 15-9-19.
 */
window.onload = function (){
    //创建canvas对象
    var canvasObj = new Canvas;
    canvasObj.height = 800;
    //生成canvas标签
    canvasObj.c();
    var ctx = canvasObj.getInstance();

    //画三角形
        ctx.beginPath();
        ctx.moveTo(300,500);
        ctx.lineTo(300,600);
        ctx.lineTo(400,550);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();

        ctx.moveTo(300,600);
        ctx.lineTo(300,700);
        ctx.lineTo(400,650);
        ctx.fill();
        ctx.closePath();
    //旋转图片
    //设置选择环境, 保存现有的环境创建一个二次元空间做旋转,然后在将旋转之后的图片放回环境中
    ctx.save();
        //在异次元空间重置0,0的位置
        ctx.translate(20,20);
    //图片/形状旋转
        //设置旋转角度, 参数是弧度 角度 0-360  弧度 = 角度*Math.PI/180
        ctx.rotate(-30*Math.PI/180);
        //选择一个线段
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(20,100);
    ctx.stroke();
    ctx.closePath();
    //将旋转之后的元素放回原画布
    ctx.restore();

    //总结一下: 上面的过程不可颠倒, 先设置00点在旋转角度,然后画图

    //接下来旋转小萌萌
    ctx.save();
    ctx.translate(20,370);
    //ctx.rotate(100*Math.PI/180);

    var img = new Image();
    img.src = "../img/rhino.jpg";
    img.onload = function (){
        ctx.rotate(-(Math.PI/180)*25);
        var sin = Math.sin(Math.PI/6);
        var cos = Math.cos(Math.PI/6);
        ctx.translate(100, 100);
        var c = 0;
        for (var i=0; i <= 12; i++) {
            ctx.drawImage(img,sin+i,cos+i,230,306);
        }
    }


    ctx.restore();

}



