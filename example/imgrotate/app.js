/**
 * Created by evolution on 15-9-19.
 */
window.onload = function (){
    //创建canvas对象
    //var canvasObj = new Canvas('div1');
    var utils = new Utils();
    //canvasObj.width = 600;
    //canvasObj.height = 600;
    ////生成canvas标签
    //canvasObj.c();
    //var ctx = canvasObj.getInstance();
    //var cobj = canvasObj.cobj;


    var aInput = document.getElementsByTagName('input');
    var oImg = document.getElementById('img1');
    var iNow = 0;

    var yImg = new Image();
    yImg.src = oImg.src;
    yImg.onload = function (){
        draw(oImg);
    }

    function draw(obj){
        var oC = document.createElement('canvas');
        var oGC = oC.getContext('2d');
        oC.width = obj.width;
        oC.height = obj.height;

        //使用canvas 替换 img
        obj.parentNode.replaceChild(oC,obj);
        //加图片
        oGC.moveTo(300,300);
        oGC.drawImage(obj,0,0);

        aInput[1].onclick = function (){
            iNow++;

            toChange();
        }

        function toChange(){
            switch (iNow){
                case 1:
                    oC.width = obj.height;
                    oC.height = obj.width;
                    oGC.rotate(utils.hd(90));
                    oGC.drawImage(obj,0,-obj.height);
                break;

                case 2:
                    oC.width = obj.width;
                    oC.height = obj.height;
                    oGC.translate(800,100);
                    oGC.rotate(utils.hd(180));
                    oGC.drawImage(obj,0,0);
                    //oGC.drawImage(obj,-obj.width,-obj.height);
                    break;

                case 3:
                    oC.width = obj.height;
                    oC.height = obj.width;
                    oGC.rotate(utils.hd(270));
                    oGC.drawImage(obj,-obj.width,-obj.height);
                break;
            }
        }

    }


}



