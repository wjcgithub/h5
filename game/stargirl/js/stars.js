/**
 * 星星对象
 */
var starObj = function  (){
    //星星的x坐标
    this.x;
    //星星的y坐标
    this.y;

    //星星图片的编号
    this.picNo;
    //星星大小的变化时间间隔
    this.timer;

    //星星在x轴移动的速度
    this.xSpd;
    //星星在y轴移动的速度
    this.ySpd;

}

/**
 * 初始化星星方法
 */
starObj.prototype.init = function (){
    //随机的星星x轴坐标
    this.x = Math.random() * 600 + 100;  //Math.randow() 返回[0,1}  包含0不包含1
    //随机的星星y轴坐标
    this.y = Math.random() * 300 + 150;

    //随机显示某一张星星图片
    this.picNo = Math.floor(Math.random() * 7);
    //星星变化间隔的时间初始化
    this.timer = 0;

    //星星在x轴移动的位移值初始化
    this.xSpd = Math.random() * 3 - 1.5;
    //星星在y轴移动的位移值初始化
    this.ySpd = Math.random() * 3 - 1.5;

}

/**
 * 实现星星的闪烁
 */
starObj.prototype.update = function (){
    //更新星星在x轴上的位移
    this.x +=this.xSpd * deltaTime * 0.004;
    //更新星星在y轴上的位移
    this.y +=this.ySpd * deltaTime * 0.004;

    //判断星星x轴超出范围的重生
    if(this.x < 100 || this.x > 700-7){
        this.init();
        return;
    }
    //判断星星y轴超出范围的重生
    if(this.y < 150 || this.y > 450-7){
        this.init();
        return;
    }

    //星星闪烁的时间间隔累加
    this.timer +=deltaTime;
    //判断是否要替换下一个星星
    if(this.timer > 50){
        this.picNo += 1;
        this.picNo %= 7
        this.timer = 0;
    }
}

/**
 * 画星星
 */
starObj.prototype.draw = function (){
    //save();
    ctx.save();

    //globalAlpha全局透明度
    ctx.globalAlpha = life;
    //drawImage(img, sx, sy swidth, sheight, x, y, width, height);
    ctx.drawImage(starPic, this.picNo*7, 0, 7, 7, this.x, this.y, 7 ,7);

    //restore();
    ctx.restore();
}

/**
 * 开始画星星
 */
function drawStars(){
    for(var i=0; i<num; i++){
        stars[i].update();
        stars[i].draw();
    }
}

/**
 * 星星的可用性更新
 */
function aliveUpdate(){
    if(switchy){
        //in area
        //show starts
        life += 0.03 * deltaTime * 0.05;
        if(life > 1){
            life = 1;
        }
    }else{
        //out area
        //hide stars
        life -= 0.03 * deltaTime * 0.05;
        if(life < 0){
            life = 0;
        }
    }
}