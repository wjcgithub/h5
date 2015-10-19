/**
 * 星星对象
 */
var starObj = function  (){
    this.x;
    this.y;

    this.picNo;
}

/**
 * 初始化星星方法
 */
starObj.prototype.init = function (){
    this.x = Math.random() * 600 + 100;  //Math.randow() 返回[0,1}  包含0不包含1
    this.y = Math.random() * 300 + 150;

    this.picNo = 0;
}

starObj.prototype.update = function (){
    this.picNo +=1;

    if(this.picNo >= 7){
        this.picNo = 0;
    }
}

/**
 * 画星星
 */
starObj.prototype.draw = function (){
    //drawImage(img, sx, sy swidth, sheight, x, y, width, height);
    ctx.drawImage(starPic, this.picNo*7, 0, 7, 7, this.x, this.y, 7 ,7);
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