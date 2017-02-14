/**
 * Created by a on 2017/2/12.
 */

var colors =
    ( "aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue," +
    "blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk," +
    "crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta," +
    "darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray," +
    "darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick," +
    "floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey," +
    "honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon," +
    "lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink," +
    "lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow," +
    "lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple," +
    "mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue," +
    "mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid," +
    "palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue," +
    "purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna," +
    "silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,transparent," +
    "tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen" ).split(',');
function Chain(obj) {
    if(!obj) throw new Error("您没有传参数");
    if(!obj.bigX||!obj.bigY||!obj.bigRadius) throw new Error("您没有传圆心坐标或者半径");
    //当没有smallRaidus和beginRadian时就要有个默认值  创建一个对象存默认值
    var opt={
        smallRadius:20,
        beginRadian:0
    };
    // 把obj中的属性拷贝到opt中  有相同的属性会把opt中的属性的值覆盖  没有继续用默认值
    for(var key in obj){
        opt[key]=obj[key]
    }
    // 在便利到this中
    for(var key in opt){
        this[key]=opt[key]
    }
    
    //初始化
    this.init();
}
Chain.prototype = {
    constructor: Chain,
//    初始化
    init: function () {
        this.drawBig();
        this.drawManySmall();
    },
//    画大圆
    drawBig: function () {
        contex.beginPath();
        contex.arc(this.bigX, this.bigY, this.bigRadius, 0, 2 * Math.PI);
        contex.stroke();
    },
//    画单个小圆
    drawSmall: function (beginRadian,color) {
        var h=this.bigRadius*Math.cos(beginRadian);
        var b=this.bigRadius*Math.sin(beginRadian);
        var x=this.bigX+h,y=this.bigY+b;
        contex.beginPath();
        contex.fillStyle=color;
        contex.arc(x,y,this.smallRadius,0,2*Math.PI);
        contex.fill();
    },
//    画N个小圆
    drawManySmall:function(){
        for(var i=0;i<this.num;i++){
         this.drawSmall(this.beginRadian+i*2*Math.PI/this.num,colors[i+10]);
        }
    }

};
