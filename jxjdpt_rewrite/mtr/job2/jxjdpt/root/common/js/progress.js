/*名称:流程图通用组件
**日期:2006-11-30
**说明:所有坐标及长度单位均为px(默认)
*/

var rowStepCount="5";					//每行步骤数量
//流程图对象
function progress(pleft,ptop,pwidth,pheight){
	//图形显示属性
	var z_index="40";					//z坐标
	var textColor="darkblue";			//文本颜色
	var strokeColor="#AFAFAF";			//边框颜色(3D时无效)
	var shadowColor="#DADADA";			//阴影颜色(3D时无效)
	var isShadow="true";				//是否有阴影(3D时无效)
	var shadowWeight="4px";				//阴影宽度(3D时无效)
	var strokeWeight="1";				//边框宽(3D时无效)
	var textWeight="12";				//文本宽
	var is3D="false";					//是否3D显示
	var step3DDepth="20px";				//3D图形深度(2D时无效)
	var color1BeginEnd="#35C5FF";		//变换颜色1开始结束
	var color2BeginEnd="white";			//变换颜色2开始结束
	var color1Step=new Array("#23FFAF","#FFBF23","#FF5723");//变换颜色0已经完成1进行中2未进行
	var color2Step=new Array("white","white","white");		//变换颜色0已经完成1进行中2未进行
	var stepText=new Array("已经完成","进行中","未进行");		//图例步骤说明
	//流程图参数
	var titleAreaHeight="0";			//标题区域高度
	var titleText="流程图";	 			//标题名称
	var titleHeight="30";				//标题高度
	var titleWidth="200";				//标题高度
	var showTitle=false;				//是否显示流程图标题
	var progressLeft="0";				//流程图左边距
	var progressTop="0";				//流程图上边据
	var progressWidth="600";			//流程图宽度?
	var progressHeight="400";			//流程图高度?
	//步骤参数
	var stepName=new Array();			//步骤名称
	var stepState=new Array();			//步骤状态
	var stepFunc=new Array();			//步骤信息地址
	var stepTooltip=new Array();		//步骤提示
	var stepWidth="80";					//步骤宽度
	var stepHeight="60";				//步骤高度
	var stepHSpace="50";				//步骤水平间距
	var stepVSpace="40";				//步骤垂直间距
	//动作参数
	var actionWeight="3";				//动作线宽
	var actionColor="#76EEFF";			//动作颜色
	var startArrow="none";				//动作开始箭头
	var endArrow="block";				//动作结束箭头
	//图例参数
	var cutlineHeight="20";				//图例高度
	var cutlineWidth="20";				//图例宽度
	var cutlineTextWidth="100";			//图例说明宽度
	
	
	//ProgressChart类构造的处理/////////////////////////////////////////////////////////////////////////////////
	//构造参数的处理,无参数使用默认值
	if (pleft!=undefined){
		if (!isNaN(parseInt(pleft))){
			progressLeft=parseInt(pleft);
		}
	}
	if (ptop!=undefined){
		if (!isNaN(parseInt(ptop))){
			progressTop=parseInt(ptop);
		}
	}
	if (pwidth!=undefined){
		if (!isNaN(parseInt(pwidth))){
			progressWidth=parseInt(pwidth);
		}
	}
	if (pheight!=undefined){
		if (!isNaN(parseInt(pheight))){
			progressHeight=parseInt(pheight);
		}
	}
	//创建流程图
	createProgressChart(progressLeft,progressTop,progressWidth,progressHeight);
	//ProgressChart类构造的处理结束/////////////////////////////////////////////////////////////////////////////

	//设置每行步骤地数量
	this.setRowStepCount=function(rsCount){
		rowStepCount=rsCount;
	}
	//设置标题区域高度
	this.setTitleAreaHeight=function(tAreaHeight){
		titleAreaHeight=tAreaHeight;
		showTitle=true;
	}
	//设置标题名称
	this.setTitle=function(tText){
		titleText=tText;
		showTitle=true;
	}
	//设置标题宽度
	this.setTitleWidth=function(tWidth){
		setTitleWidth=tWidth;
		showTitle=true;
	}
	//设置标题高度
	this.setTitleHeight=function(tHeight){
		titleHeight=tHeight;
		showTitle=true;
	}
	//设置是否显示标题
	this.setShowTitle=function(sTitle){
		showTitle=sTitle;
		if (showTitle==false){
			titleAreaHeight="0";
		}
	}
	//设置步骤宽度
	this.setStepWidth=function(sWidth){
		stepWidth=sWidth;
	}
	//设置步骤高度
	this.setStepHeight=function(sHeight){
		stepHeight=sHeight;
	}
	//设置步骤水平间距
	this.setStepHSpace=function(shSpace){
		stepHSpace=shSpace;
	}
	//设置步骤垂直间距
	this.setStepVSpace=function(svSpace){
		stepVSpace=svSpace;
	}
	//设置图例样式
	this.setCutline=function(i,cName,cColor1,cColor2){
		stepText[i]=cName;
		color1Step[i]=cColor1;
		color2Step[i]=cColor2;
	}
	//设置图例高度
	this.setCutlineHeight=function(cHeight){
		cutlineHeight=cHeight;
	}
	//设置图例宽度
	this.setCutlineWidth=function(cWidth){
		cutlineWidth=cWidth;
	}
	//设置图例说明宽度
	this.setCutlineTextWidth=function(ctWidth){
		cutlineTextWidth=ctWidth;
	}
	//添加步骤
	this.addStep=function(pName,pState,pTooltip,pFunc){
		stepName[stepName.length]=pName;
		stepState[stepState.length]=pState;
		stepTooltip[stepTooltip.length]=pTooltip;
		stepFunc[stepFunc.length]=pFunc;
	}
	
	//画流程图
	this.drawProgressChart=function(){
		var pChart=document.getElementById("ProgressChart");//流程图容器对象
		var position=new Array();							//位置坐标
		var tempType="";									//类型
		var tempID="";										//ID
		var tempText="";									//显示文本
		var tempLeft="";									//左边距
		var tempTop="";										//上边距
		var tempWidth="";									//宽度
		var tempHeight="";									//高度
		var tempColor1="";									//变换颜色1
		var tempColor2="";									//变换颜色2

		var tempFromX="";									//开始X坐标
		var tempFromY="";									//开始Y坐标
		var tempToX="";										//结束X坐标
		var tempToY="";										//结束Y坐标
		var tempStartArrow="";								//动作线开始箭头样式
		var tempEndArrow="";								//动作线结束箭头样式
		
		//先清除流程图
		pChart.innerHTML="";
		//画出流程图标题
		if (showTitle){
			pChart.innerHTML+=getTitleHTML("Title",z_index,"Title",titleText,"black",
							strokeColor,shadowColor,false,shadowWeight,
							(parseInt(rowStepCount)*(parseInt(stepWidth)+parseInt(stepHSpace))-parseInt(stepHSpace)-parseInt(titleWidth))/2,parseInt(titleAreaHeight-titleHeight)/2,titleWidth,titleHeight,
							0,textWeight,"#0000FF","#FFFFFF",false,0);
		}
		//画出开始结束步骤
		tempType="BeginStep";
		tempID="BeginStep";
		tempText="开始";
		tempLeft=0;
		tempTop=parseInt(titleAreaHeight);
		tempWidth=stepWidth;
		tempHeight=stepHeight;
		tempColor1=color1BeginEnd;
		tempColor2=color2BeginEnd;
		pChart.innerHTML+=getBeginEndHTML(tempType,z_index,tempID,tempText,textColor,
							strokeColor,shadowColor,isShadow,shadowWeight,tempLeft,
							tempTop,tempWidth,tempHeight,strokeWeight,textWeight,
							tempColor1,tempColor2,is3D,step3DDepth);
		tempType="EndStep";
		tempID="EndStep";
		tempText="结束";
		position=getStepPosition(stepName.length+1,stepHSpace,stepVSpace,stepWidth,stepHeight);
		tempLeft=parseInt(position[0]);
		tempTop=parseInt(position[1])+parseInt(titleAreaHeight);
		tempWidth=stepWidth;
		tempHeight=stepHeight;
		tempColor1=color1BeginEnd;
		tempColor2=color2BeginEnd;
		pChart.innerHTML+=getBeginEndHTML(tempType,z_index,tempID,tempText,textColor,
							strokeColor,shadowColor,isShadow,shadowWeight,tempLeft,
							tempTop,tempWidth,tempHeight,strokeWeight,textWeight,
							tempColor1,tempColor2,is3D,step3DDepth);
		//画开始后面的动作
		tempType="Action";
		tempID="Action"+ "0";
		tempText="";//暂不实现
		position=getActionPosition(0,stepHSpace,stepVSpace,stepWidth,stepHeight);
		tempFromX=position[0];
		tempFromY=position[1]+parseInt(titleAreaHeight);
		tempToX=position[2];
		tempToY=position[3]+parseInt(titleAreaHeight);
		pChart.innerHTML+=getActionHTML(tempType,z_index-10,tempID,tempText,tempFromX,
							tempFromY,tempToX,tempToY,actionColor,isShadow,
							shadowColor,actionWeight,startArrow,endArrow);
		//画出流程的每一个步骤及步骤后面的动作
		for (i=0;i<stepName.length;i++)
		{
			//画步骤
			tempType="Step";
			tempID="Step"+ i;
			tempText=stepName[i];
			position=getStepPosition(i+1,stepHSpace,stepVSpace,stepWidth,stepHeight);
			tempLeft=position[0];
			tempTop=position[1]+parseInt(titleAreaHeight);
			tempWidth=stepWidth;
			tempHeight=stepHeight;
			tempColor1=color1Step[parseInt(stepState[i])];
			tempColor2=color2Step[parseInt(stepState[i])];
			pChart.innerHTML+=getStepHTML(tempType,z_index,tempID,tempText,textColor,
							strokeColor,shadowColor,isShadow,shadowWeight,tempLeft,
							tempTop,tempWidth,tempHeight,strokeWeight,textWeight,
							tempColor1,tempColor2,is3D,step3DDepth,stepTooltip[i],stepFunc[i]);
			//画步骤后面的动作
			tempType="Action";
			tempID="Action"+ i;
			tempText="";//暂不实现
			position=getActionPosition(i+1,stepHSpace,stepVSpace,stepWidth,stepHeight);
			tempFromX=position[0];
			tempFromY=position[1]+parseInt(titleAreaHeight);
			tempToX=position[2];
			tempToY=position[3]+parseInt(titleAreaHeight);
			pChart.innerHTML+=getActionHTML(tempType,z_index-10,tempID,tempText,tempFromX,
							tempFromY,tempToX,tempToY,actionColor,isShadow,
							shadowColor,actionWeight,startArrow,endArrow);
			
		}
		//画出图例
		for (i=0;i<stepText.length;i++)
		{
			tempLeft=i*(parseInt(cutlineWidth)+parseInt(cutlineTextWidth)+parseInt(10));
			tempTop=(parseInt((stepName.length+1)/parseInt(rowStepCount))+1)*(parseInt(stepHeight)+parseInt(stepVSpace))+parseInt(titleAreaHeight);
			pChart.innerHTML+=getCutlineHTML(tempLeft,tempTop,cutlineWidth,cutlineHeight,cutlineTextWidth,stepText[i],color1Step[i],color2Step[i]);
		}
		//测试代码
		//htmlCode=getStepHTML("BeginStep1",z_index,"BeginStep","开始",textColor,strokeColor,shadowColor,isShadow,80,60,"0","0",strokeWeight,textWeight,color1,color2,is3D,step3DDepth);
		//document.write(htmlCode);
	}
	//清除流程图
	this.clearProgressChart=function(){
		var pChart=document.getElementById("ProgressChart");
		pChart.innerHTML="";
	}
}
/*创建流程图
**输入:pleft左边距;ptop上边距;pwidht宽度;pheight高度
**返回:无
*/
function createProgressChart(pleft,ptop,pwidth,pheight){
	document.write('<v:group ID="ProgressChart" style="left:'+pleft+';top:'+ptop+';width:'+pwidth+';height:'+pheight+';position:absolute;" coordsize="'+pwidth+','+pheight+'">');
	document.write('</v:group>');
}
/*获得步骤坐标
**输入:serial序号;hspace水平间距;vspace垂直间据;swidth步骤宽度;sheight步骤高度
**返回:步骤地坐标 getPosition[0]左边距;getPosition[1]上边距
*/
function getStepPosition(serial,hspace,vspace,swidth,sheight){
	var position=new Array();

	if(parseInt(parseInt(serial/parseInt(rowStepCount))%2)==0){//单行
		position[0]=parseInt(serial%parseInt(rowStepCount))*(parseInt(swidth)+parseInt(hspace));
		position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace));
	}else{//双行
		position[0]=((parseInt(rowStepCount)-1)-parseInt(serial%parseInt(rowStepCount)))*(parseInt(swidth)+parseInt(hspace));
		position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace));
	}
	return position;
}
/*获得动作坐标
**输入:serial序号;hspace水平间距;vspace垂直间据;swidth步骤宽度;sheight步骤高度
**返回:步骤的坐标 getPosition[0]左上X坐标;getPosition[1]左上Y坐标;getPosition[2]右下X坐标;getPosition[3]右下Y坐标
*/
function getActionPosition(serial,hspace,vspace,swidth,sheight){
	var position=new Array();

	if(parseInt(parseInt(serial/parseInt(rowStepCount))%2)==0){//单行
		if(parseInt(serial%parseInt(rowStepCount))==parseInt(rowStepCount)-1){//行末尾
			position[0]=parseInt(serial%parseInt(rowStepCount))*(parseInt(swidth)+parseInt(hspace))+parseInt(swidth)/2;
			position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace))+parseInt(sheight);
			position[2]=position[0];
			position[3]=position[1]+parseInt(vspace);
		}else{
			position[0]=parseInt(serial%parseInt(rowStepCount))*(parseInt(swidth)+parseInt(hspace))+parseInt(swidth);
			position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace))+parseInt(sheight)/2;
			position[2]=position[0]+parseInt(hspace);
			position[3]=position[1];
		}
	}else{//双行
		if(parseInt(serial%parseInt(rowStepCount))==parseInt(rowStepCount)-1){//行末尾
			position[0]=parseInt((parseInt(rowStepCount)-1)-serial%parseInt(rowStepCount))*(parseInt(swidth)+parseInt(hspace))+parseInt(swidth)/2;
			position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace))+parseInt(sheight);
			position[2]=position[0];
			position[3]=position[1]+parseInt(vspace);
		}else{
			position[0]=parseInt((parseInt(rowStepCount)-1)-serial%parseInt(rowStepCount))*(parseInt(swidth)+parseInt(hspace));
			position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace))+parseInt(sheight)/2;
			position[2]=position[0]-parseInt(hspace);
			position[3]=position[1];
		}
	}
	return position;
}
//获得标题html代码
function getTitleHTML(stepType,z_index,id,text,textColor,strokeColor,shadowColor,isShadow,shadowWeight,left,top,width,height,strokeWeight,textWeight,color1,color2,is3D,step3DDepth){
   var stepHTML = '';
   var styleHTML = 'id='+id+' title="" style="z-index:'+z_index+';position:absolute;left:'+left+';top:'+top+';width:'+width+';height:'+height+';" strokecolor="'+"white"+'" strokeweight="'+strokeWeight+'"';
   var textStyleHTML = 'style="text-align:center; color:'+textColor+'; font-size:'+"15"+';"';
   var shadowHTML = '<v:shadow on="'+isShadow+'" type="single" color="'+shadowColor+'" offset="'+shadowWeight+','+shadowWeight+'"/>';
   var gradientHTML = '<v:fill type="gradient" color="'+'white'+'" color2="'+'white'+'" />';
   var step3DHTML = '<v:extrusion on="'+is3D+'" backdepth="'+step3DDepth+'" />';

	stepHTML = '<v:Rect '+styleHTML+'>'+shadowHTML+step3DHTML+gradientHTML+'<v:TextBox inset="2px,10px,2px,2px" '+textStyleHTML+'>'+text+'</v:TextBox></v:Rect>';
	return stepHTML;
}
//获得开始结束html代码
function getBeginEndHTML(stepType,z_index,id,text,textColor,strokeColor,shadowColor,isShadow,shadowWeight,left,top,width,height,strokeWeight,textWeight,color1,color2,is3D,step3DDepth){
	var stepHTML = '';
	var styleHTML = 'id='+id+' title="" style="z-index:'+z_index+';cursor:hand;position:absolute;left:'+left+';top:'+top+';width:'+width+';height:'+height+';" strokecolor="'+strokeColor+'" strokeweight="'+strokeWeight+'"';
	var textStyleHTML = 'style="text-align:center; color:'+textColor+'; font-size:'+textWeight+';"';
	var shadowHTML = '<v:shadow on="'+isShadow+'" type="single" color="'+shadowColor+'" offset="'+shadowWeight+','+shadowWeight+'"/>';
	var gradientHTML = '<v:fill type="gradient" color="'+color1+'" color2="'+color2+'" />';
	var step3DHTML = '<v:extrusion on="'+is3D+'" backdepth="'+step3DDepth+'" />';

	stepHTML = '<v:Oval '+styleHTML+'>'+shadowHTML+step3DHTML+gradientHTML+'<v:TextBox inset="2px,10px,2px,2px" '+textStyleHTML+'>'+text+'</v:TextBox></v:Oval>';

	return stepHTML;
}
//获得步骤html代码
function getStepHTML(stepType,z_index,id,text,textColor,strokeColor,shadowColor,isShadow,shadowWeight,left,top,width,height,strokeWeight,textWeight,color1,color2,is3D,step3DDepth,tooltip,func){
	var stepHTML = '';

	var styleHTML = 'id='+id+' title="" style="z-index:'+z_index+';cursor:hand;position:absolute;left:'+left+';top:'+top+';width:'+width+';height:'+height+';" strokecolor="'+strokeColor+'" strokeweight="'+strokeWeight+'" onmouseover=showtip("'+tooltip+'") onmouseout=closetip() onmousedown='+func+'';
	var textStyleHTML = 'style="text-align:center; color:'+textColor+'; font-size:'+textWeight+';"';
	var shadowHTML = '<v:shadow on="'+isShadow+'" type="single" color="'+shadowColor+'" offset="'+shadowWeight+','+shadowWeight+'"/>';
	var gradientHTML = '<v:fill type="gradient" color="'+color1+'" color2="'+color2+'" />';
	var step3DHTML = '<v:extrusion on="'+is3D+'" backdepth="'+step3DDepth+'" />';

	if(stepType=='BeginStep' || stepType=='EndStep'){
		stepHTML = '<v:Oval '+styleHTML+'>'+shadowHTML+step3DHTML+gradientHTML+'<v:TextBox inset="2px,10px,2px,2px" '+textStyleHTML+'>'+text+'</v:TextBox></v:Oval>';
	}else{
		stepHTML = '<v:RoundRect '+styleHTML+'>'+shadowHTML+step3DHTML+gradientHTML+'<v:TextBox inset="2px,10px,2px,2px" '+textStyleHTML+'>'+text+'</v:TextBox></v:RoundRect>';
	}

	return stepHTML;
}
//获得动作html代码
function getActionHTML(actionType,z_index,id,actionText,fromX,fromY,toX,toY,strokeColor,isShadow,shadowColor,strokeWeight,startArrow,endArrow){
	var actionHTML = '';

	if(actionType == 'Action'){
		actionHTML = '<v:line id='+id+' title="" style="z-index:'+z_index+';position:absolute;"from="'+fromX+','+fromY+'" to="'+toX+','+toY +'" strokecolor="'+strokeColor+'" strokeWeight="'+strokeWeight+'"><v:stroke StartArrow="'+startArrow+'" EndArrow="'+endArrow+'"/><v:shadow on="'+isShadow+'" color="'+shadowColor+'"/></v:line>';
	}
	return actionHTML;
}
//获得图例html代码
function getCutlineHTML(left,top,width,height,twidth,stext,scolor1,scolor2){
	var cutlineHTML = '';
	cutlineHTML+='<v:Rect id="test" strokecolor="#696969" style="position:absolute;top:'+top+';left:'+left+';width:'+width+';height:'+height+'"><v:fill type="gradient" color="'+scolor1+'" color2="'+scolor2+'" /></v:Rect>';
	cutlineHTML+='<v:Rect id="test" strokecolor="white" style="position:absolute;top:'+top+';left:'+(parseInt(left)+parseInt(width)+parseInt(5))+';width:'+twidth+';height:'+height+';color:black;font-size:12"><v:textbox inset="3pt,3pt,3pt,3pt">'+stext+'</v:textbox></v:Rect>';
	
	return cutlineHTML;
}
/******************************************************************************************
**以下代码用于鼠标悬浮提示文字效果
******************************************************************************************/
document.write('<div id="mytip" style="position:absolute; z-index:99;"></div>');//悬浮提示DIV
document.write('<div id="tipsd" style="position:absolute; z-index:98;"></div>');//悬浮阴影
Xoffset=-70;//X坐标偏移
Yoffset= 20;//Y坐标偏移
var nav,old,iex=(document.all),yyy=-1000;
//浏览器的判断
if(navigator.appName=="Netscape"){
	(document.layers)?nav=true:old=true;
}
if(!old){
	var skn=(nav)?document.mytip:mytip.style;
	var sd=(nav)?document.tipsd:tipsd.style;
	if(nav){
		document.captureEvents(Event.MOUSEMOVE)
	}
	document.onmousemove=get_mouse;
}
//显示悬浮提示
function showtip(msg){
	if(msg==""){
		return;
	}
	var temp=msg.split(",");
	var tMsg=""; 
	for (i=0;i<temp.length;i++){
		tMsg+=temp[i]+"<br>";
	}
	var content="";
	content+="<table width=140 border=2 bordercolor=#EDCDB9 cellspacing=0 cellpadding=0 style='word-break:break-all;width:fixed;border-collapse:collapse'>";
	content+="<tr style='background-color:#FAEBDD;font-size:9pt;' ><td>&nbsp;</td></tr>";
	content+="<tr style='background-color:#FFFAF6;font-size:9pt;padding-left:5px;padding-right:2px;' height=100><td>"+tMsg+"</td></tr></table>";
	if(old){
		alert(tMsg);
		return;
	}else{yyy=Yoffset;
		if(nav){skn.document.write(content);skn.document.close();skn.visibility="visible"}
		if(iex){
			document.all("mytip").innerHTML=content;skn.visibility="visible";
			//阴影
			content="<table width=140 border=0 cellspacing=0 cellpadding=0 style='filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);word-break:break-all;width:fixed'>";
			content+="<tr style='background-color:#DADADA;font-size:9pt;' ><td>&nbsp;</td></tr>";
			content+="<tr style='background-color:#DADADA;font-size:9pt;' height=104><td>&nbsp;</td></tr>";
			document.all("tipsd").innerHTML=content;sd.visibility="visible";
		}
	}
}
//获得鼠标的坐标
function get_mouse(e){
	//悬浮提示坐标
	var x=(nav)?e.pageX:event.x+document.body.scrollLeft;skn.left=x+Xoffset;
	var y=(nav)?e.pageY:event.y+document.body.scrollTop;skn.top=y+yyy;
	//阴影坐标
	var x1=(nav)?e.pageX:event.x+document.body.scrollLeft;sd.left=x+Xoffset+5;
	var y1=(nav)?e.pageY:event.y+document.body.scrollTop;sd.top=y+yyy+5;
}
//关闭悬浮提示
function closetip(){
	if(!old){yyy=-1000;skn.visibility="hidden";sd.visibility="hidden";}
}