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
    var cobj = canvasObj.cobj;

    function draw(){
        ctx.clearRect(0,0,cobj.width,cobj.height);
        var x = 300;
        var y = 300;
        var r = 150;

        //画表盘
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.arc(x,y,r,utils.hd(0),utils.hd(360));
        ctx.closePath();
        ctx.stroke();

        //画表刻度
        ctx.beginPath();
        for(var i=0; i<60; i++){
            ctx.moveTo(x,y);
            ctx.arc(x,y,r,utils.hd(i*6),utils.hd((i+1)*6));
        }
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.arc(x,y,r*19/20,utils.hd(0),utils.hd(360));
        ctx.closePath();
        ctx.fill();

        //画分针刻度
        ctx.beginPath();
        ctx.lineWidth = 3;
        for(var i=0; i<12; i++){
            ctx.moveTo(x,y);
            ctx.arc(x,y,r,utils.hd(i*30),utils.hd((i+1)*30));
        }
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.arc(x,y,r*18/20,utils.hd(0),utils.hd(360));
        ctx.closePath();
        ctx.fill();

        //画表芯
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.fillStyle = "rgb(12,23,45)";
        ctx.arc(x,y,r*1/20,utils.hd(0),utils.hd(360));
        ctx.closePath();
        ctx.fill();


        var d = new Date();
        var hours = d.getHours();
        var mit = d.getMinutes();
        var sec = d.getSeconds();
        //表动起来

        //画表针
        //时
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineWidth = 6;
        ctx.fillStyle = "rgb(12,23,45)";
        ctx.arc(x,y,r*13/20,utils.hd(-90+(hours*30)),utils.hd(-90+(hours*30)));
        ctx.closePath();
        ctx.stroke();

        //分
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineWidth = 4;
        ctx.fillStyle = "rgb(12,23,45)";
        ctx.arc(x,y,r*15/20,utils.hd(-90+(mit*6)),utils.hd(-90+(mit*6)));
        ctx.closePath();
        ctx.stroke();

        //秒
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineWidth = 2;
        ctx.fillStyle = "rgb(12,23,45)";
        ctx.arc(x,y,r*19/20,utils.hd(-90+(sec*6)),utils.hd(-90+(sec*6)));
        ctx.closePath();
        ctx.stroke();

    }
setInterval(draw, 1000);

}



