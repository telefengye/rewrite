/*����:����ͼͨ�����
**����:2006-11-30
**˵��:�������꼰���ȵ�λ��Ϊpx(Ĭ��)
*/

var rowStepCount="5";					//ÿ�в�������
//����ͼ����
function progress(pleft,ptop,pwidth,pheight){
	//ͼ����ʾ����
	var z_index="40";					//z����
	var textColor="darkblue";			//�ı���ɫ
	var strokeColor="#AFAFAF";			//�߿���ɫ(3Dʱ��Ч)
	var shadowColor="#DADADA";			//��Ӱ��ɫ(3Dʱ��Ч)
	var isShadow="true";				//�Ƿ�����Ӱ(3Dʱ��Ч)
	var shadowWeight="4px";				//��Ӱ���(3Dʱ��Ч)
	var strokeWeight="1";				//�߿��(3Dʱ��Ч)
	var textWeight="12";				//�ı���
	var is3D="false";					//�Ƿ�3D��ʾ
	var step3DDepth="20px";				//3Dͼ�����(2Dʱ��Ч)
	var color1BeginEnd="#35C5FF";		//�任��ɫ1��ʼ����
	var color2BeginEnd="white";			//�任��ɫ2��ʼ����
	var color1Step=new Array("#23FFAF","#FFBF23","#FF5723");//�任��ɫ0�Ѿ����1������2δ����
	var color2Step=new Array("white","white","white");		//�任��ɫ0�Ѿ����1������2δ����
	var stepText=new Array("�Ѿ����","������","δ����");		//ͼ������˵��
	//����ͼ����
	var titleAreaHeight="0";			//��������߶�
	var titleText="����ͼ";	 			//��������
	var titleHeight="30";				//����߶�
	var titleWidth="200";				//����߶�
	var showTitle=false;				//�Ƿ���ʾ����ͼ����
	var progressLeft="0";				//����ͼ��߾�
	var progressTop="0";				//����ͼ�ϱ߾�
	var progressWidth="600";			//����ͼ���?
	var progressHeight="400";			//����ͼ�߶�?
	//�������
	var stepName=new Array();			//��������
	var stepState=new Array();			//����״̬
	var stepFunc=new Array();			//������Ϣ��ַ
	var stepTooltip=new Array();		//������ʾ
	var stepWidth="80";					//������
	var stepHeight="60";				//����߶�
	var stepHSpace="50";				//����ˮƽ���
	var stepVSpace="40";				//���费ֱ���
	//��������
	var actionWeight="3";				//�����߿�
	var actionColor="#76EEFF";			//������ɫ
	var startArrow="none";				//������ʼ��ͷ
	var endArrow="block";				//����������ͷ
	//ͼ������
	var cutlineHeight="20";				//ͼ���߶�
	var cutlineWidth="20";				//ͼ�����
	var cutlineTextWidth="100";			//ͼ��˵�����
	
	
	//ProgressChart�๹��Ĵ���/////////////////////////////////////////////////////////////////////////////////
	//��������Ĵ���,�޲���ʹ��Ĭ��ֵ
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
	//��������ͼ
	createProgressChart(progressLeft,progressTop,progressWidth,progressHeight);
	//ProgressChart�๹��Ĵ������/////////////////////////////////////////////////////////////////////////////

	//����ÿ�в��������
	this.setRowStepCount=function(rsCount){
		rowStepCount=rsCount;
	}
	//���ñ�������߶�
	this.setTitleAreaHeight=function(tAreaHeight){
		titleAreaHeight=tAreaHeight;
		showTitle=true;
	}
	//���ñ�������
	this.setTitle=function(tText){
		titleText=tText;
		showTitle=true;
	}
	//���ñ�����
	this.setTitleWidth=function(tWidth){
		setTitleWidth=tWidth;
		showTitle=true;
	}
	//���ñ���߶�
	this.setTitleHeight=function(tHeight){
		titleHeight=tHeight;
		showTitle=true;
	}
	//�����Ƿ���ʾ����
	this.setShowTitle=function(sTitle){
		showTitle=sTitle;
		if (showTitle==false){
			titleAreaHeight="0";
		}
	}
	//���ò�����
	this.setStepWidth=function(sWidth){
		stepWidth=sWidth;
	}
	//���ò���߶�
	this.setStepHeight=function(sHeight){
		stepHeight=sHeight;
	}
	//���ò���ˮƽ���
	this.setStepHSpace=function(shSpace){
		stepHSpace=shSpace;
	}
	//���ò��费ֱ���
	this.setStepVSpace=function(svSpace){
		stepVSpace=svSpace;
	}
	//����ͼ����ʽ
	this.setCutline=function(i,cName,cColor1,cColor2){
		stepText[i]=cName;
		color1Step[i]=cColor1;
		color2Step[i]=cColor2;
	}
	//����ͼ���߶�
	this.setCutlineHeight=function(cHeight){
		cutlineHeight=cHeight;
	}
	//����ͼ�����
	this.setCutlineWidth=function(cWidth){
		cutlineWidth=cWidth;
	}
	//����ͼ��˵�����
	this.setCutlineTextWidth=function(ctWidth){
		cutlineTextWidth=ctWidth;
	}
	//��Ӳ���
	this.addStep=function(pName,pState,pTooltip,pFunc){
		stepName[stepName.length]=pName;
		stepState[stepState.length]=pState;
		stepTooltip[stepTooltip.length]=pTooltip;
		stepFunc[stepFunc.length]=pFunc;
	}
	
	//������ͼ
	this.drawProgressChart=function(){
		var pChart=document.getElementById("ProgressChart");//����ͼ��������
		var position=new Array();							//λ������
		var tempType="";									//����
		var tempID="";										//ID
		var tempText="";									//��ʾ�ı�
		var tempLeft="";									//��߾�
		var tempTop="";										//�ϱ߾�
		var tempWidth="";									//���
		var tempHeight="";									//�߶�
		var tempColor1="";									//�任��ɫ1
		var tempColor2="";									//�任��ɫ2

		var tempFromX="";									//��ʼX����
		var tempFromY="";									//��ʼY����
		var tempToX="";										//����X����
		var tempToY="";										//����Y����
		var tempStartArrow="";								//�����߿�ʼ��ͷ��ʽ
		var tempEndArrow="";								//�����߽�����ͷ��ʽ
		
		//���������ͼ
		pChart.innerHTML="";
		//��������ͼ����
		if (showTitle){
			pChart.innerHTML+=getTitleHTML("Title",z_index,"Title",titleText,"black",
							strokeColor,shadowColor,false,shadowWeight,
							(parseInt(rowStepCount)*(parseInt(stepWidth)+parseInt(stepHSpace))-parseInt(stepHSpace)-parseInt(titleWidth))/2,parseInt(titleAreaHeight-titleHeight)/2,titleWidth,titleHeight,
							0,textWeight,"#0000FF","#FFFFFF",false,0);
		}
		//������ʼ��������
		tempType="BeginStep";
		tempID="BeginStep";
		tempText="��ʼ";
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
		tempText="����";
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
		//����ʼ����Ķ���
		tempType="Action";
		tempID="Action"+ "0";
		tempText="";//�ݲ�ʵ��
		position=getActionPosition(0,stepHSpace,stepVSpace,stepWidth,stepHeight);
		tempFromX=position[0];
		tempFromY=position[1]+parseInt(titleAreaHeight);
		tempToX=position[2];
		tempToY=position[3]+parseInt(titleAreaHeight);
		pChart.innerHTML+=getActionHTML(tempType,z_index-10,tempID,tempText,tempFromX,
							tempFromY,tempToX,tempToY,actionColor,isShadow,
							shadowColor,actionWeight,startArrow,endArrow);
		//�������̵�ÿһ�����輰�������Ķ���
		for (i=0;i<stepName.length;i++)
		{
			//������
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
			//���������Ķ���
			tempType="Action";
			tempID="Action"+ i;
			tempText="";//�ݲ�ʵ��
			position=getActionPosition(i+1,stepHSpace,stepVSpace,stepWidth,stepHeight);
			tempFromX=position[0];
			tempFromY=position[1]+parseInt(titleAreaHeight);
			tempToX=position[2];
			tempToY=position[3]+parseInt(titleAreaHeight);
			pChart.innerHTML+=getActionHTML(tempType,z_index-10,tempID,tempText,tempFromX,
							tempFromY,tempToX,tempToY,actionColor,isShadow,
							shadowColor,actionWeight,startArrow,endArrow);
			
		}
		//����ͼ��
		for (i=0;i<stepText.length;i++)
		{
			tempLeft=i*(parseInt(cutlineWidth)+parseInt(cutlineTextWidth)+parseInt(10));
			tempTop=(parseInt((stepName.length+1)/parseInt(rowStepCount))+1)*(parseInt(stepHeight)+parseInt(stepVSpace))+parseInt(titleAreaHeight);
			pChart.innerHTML+=getCutlineHTML(tempLeft,tempTop,cutlineWidth,cutlineHeight,cutlineTextWidth,stepText[i],color1Step[i],color2Step[i]);
		}
		//���Դ���
		//htmlCode=getStepHTML("BeginStep1",z_index,"BeginStep","��ʼ",textColor,strokeColor,shadowColor,isShadow,80,60,"0","0",strokeWeight,textWeight,color1,color2,is3D,step3DDepth);
		//document.write(htmlCode);
	}
	//�������ͼ
	this.clearProgressChart=function(){
		var pChart=document.getElementById("ProgressChart");
		pChart.innerHTML="";
	}
}
/*��������ͼ
**����:pleft��߾�;ptop�ϱ߾�;pwidht���;pheight�߶�
**����:��
*/
function createProgressChart(pleft,ptop,pwidth,pheight){
	document.write('<v:group ID="ProgressChart" style="left:'+pleft+';top:'+ptop+';width:'+pwidth+';height:'+pheight+';position:absolute;" coordsize="'+pwidth+','+pheight+'">');
	document.write('</v:group>');
}
/*��ò�������
**����:serial���;hspaceˮƽ���;vspace��ֱ���;swidth������;sheight����߶�
**����:��������� getPosition[0]��߾�;getPosition[1]�ϱ߾�
*/
function getStepPosition(serial,hspace,vspace,swidth,sheight){
	var position=new Array();

	if(parseInt(parseInt(serial/parseInt(rowStepCount))%2)==0){//����
		position[0]=parseInt(serial%parseInt(rowStepCount))*(parseInt(swidth)+parseInt(hspace));
		position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace));
	}else{//˫��
		position[0]=((parseInt(rowStepCount)-1)-parseInt(serial%parseInt(rowStepCount)))*(parseInt(swidth)+parseInt(hspace));
		position[1]=parseInt(serial/parseInt(rowStepCount))*(parseInt(sheight)+parseInt(vspace));
	}
	return position;
}
/*��ö�������
**����:serial���;hspaceˮƽ���;vspace��ֱ���;swidth������;sheight����߶�
**����:��������� getPosition[0]����X����;getPosition[1]����Y����;getPosition[2]����X����;getPosition[3]����Y����
*/
function getActionPosition(serial,hspace,vspace,swidth,sheight){
	var position=new Array();

	if(parseInt(parseInt(serial/parseInt(rowStepCount))%2)==0){//����
		if(parseInt(serial%parseInt(rowStepCount))==parseInt(rowStepCount)-1){//��ĩβ
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
	}else{//˫��
		if(parseInt(serial%parseInt(rowStepCount))==parseInt(rowStepCount)-1){//��ĩβ
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
//��ñ���html����
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
//��ÿ�ʼ����html����
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
//��ò���html����
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
//��ö���html����
function getActionHTML(actionType,z_index,id,actionText,fromX,fromY,toX,toY,strokeColor,isShadow,shadowColor,strokeWeight,startArrow,endArrow){
	var actionHTML = '';

	if(actionType == 'Action'){
		actionHTML = '<v:line id='+id+' title="" style="z-index:'+z_index+';position:absolute;"from="'+fromX+','+fromY+'" to="'+toX+','+toY +'" strokecolor="'+strokeColor+'" strokeWeight="'+strokeWeight+'"><v:stroke StartArrow="'+startArrow+'" EndArrow="'+endArrow+'"/><v:shadow on="'+isShadow+'" color="'+shadowColor+'"/></v:line>';
	}
	return actionHTML;
}
//���ͼ��html����
function getCutlineHTML(left,top,width,height,twidth,stext,scolor1,scolor2){
	var cutlineHTML = '';
	cutlineHTML+='<v:Rect id="test" strokecolor="#696969" style="position:absolute;top:'+top+';left:'+left+';width:'+width+';height:'+height+'"><v:fill type="gradient" color="'+scolor1+'" color2="'+scolor2+'" /></v:Rect>';
	cutlineHTML+='<v:Rect id="test" strokecolor="white" style="position:absolute;top:'+top+';left:'+(parseInt(left)+parseInt(width)+parseInt(5))+';width:'+twidth+';height:'+height+';color:black;font-size:12"><v:textbox inset="3pt,3pt,3pt,3pt">'+stext+'</v:textbox></v:Rect>';
	
	return cutlineHTML;
}
/******************************************************************************************
**���´����������������ʾ����Ч��
******************************************************************************************/
document.write('<div id="mytip" style="position:absolute; z-index:99;"></div>');//������ʾDIV
document.write('<div id="tipsd" style="position:absolute; z-index:98;"></div>');//������Ӱ
Xoffset=-70;//X����ƫ��
Yoffset= 20;//Y����ƫ��
var nav,old,iex=(document.all),yyy=-1000;
//��������ж�
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
//��ʾ������ʾ
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
			//��Ӱ
			content="<table width=140 border=0 cellspacing=0 cellpadding=0 style='filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);word-break:break-all;width:fixed'>";
			content+="<tr style='background-color:#DADADA;font-size:9pt;' ><td>&nbsp;</td></tr>";
			content+="<tr style='background-color:#DADADA;font-size:9pt;' height=104><td>&nbsp;</td></tr>";
			document.all("tipsd").innerHTML=content;sd.visibility="visible";
		}
	}
}
//�����������
function get_mouse(e){
	//������ʾ����
	var x=(nav)?e.pageX:event.x+document.body.scrollLeft;skn.left=x+Xoffset;
	var y=(nav)?e.pageY:event.y+document.body.scrollTop;skn.top=y+yyy;
	//��Ӱ����
	var x1=(nav)?e.pageX:event.x+document.body.scrollLeft;sd.left=x+Xoffset+5;
	var y1=(nav)?e.pageY:event.y+document.body.scrollTop;sd.top=y+yyy+5;
}
//�ر�������ʾ
function closetip(){
	if(!old){yyy=-1000;skn.visibility="hidden";sd.visibility="hidden";}
}