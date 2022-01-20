// JavaScript Document edited by lh  用于鼠标悬浮提示文字效果


Xoffset=-60;
Yoffset= 20;

var nav,old,iex=(document.all),yyy=-1000;
if(navigator.appName=="Netscape"){(document.layers)?nav=true:old=true;}

if(!old){
var skn=(nav)?document.mytip:mytip.style;
if(nav)document.captureEvents(Event.MOUSEMOVE);
document.onmousemove=get_mouse;
}

function showtip(msg,bak,xdlj){
/**"<TABLE  WIDTH=150 BORDER=1 BORDERCOLOR=#91AFBD CELLPADDING=2 CELLSPACING=0 "
+"BGCOLOR="
+bak+
"><TD ALIGN=center>"
+msg+
"</TD></TABLE>**/

var content="<table width=136 border=0 cellspacing=0 cellpadding=0 style='word-break:break-all;width:fixed'><tr><td width=16 height=19><img src="+xdlj+"/images/ywzzt/on_l1.gif width=16 height=19></td><td width=101><img src="+xdlj+"/images/ywzzt/on_top.gif width=101 height=19></td><td width=19><img src="+xdlj+"/images/ywzzt/on_r1.gif width=19 height=19></td></tr><tr><td background="+xdlj+"/images/ywzzt/on_l2.gif>&nbsp;</td><td "+"bgcolor="+bak+">"+msg+"</td><td background="+xdlj+"/images/ywzzt/on_r2.gif><img src="+xdlj+"/images/ywzzt/on_r3.gif width=19 height=105></td></tr><tr><td><img src="+xdlj+"/images/ywzzt/on_l3.gif width=16 height=25></td><td><img src="+xdlj+"/images/ywzzt/on_bom.gif width=101 height=25></td><td><img src="+xdlj+"/images/ywzzt/on_r4.gif width=19 height=25></td></tr></table>";



if(old){alert(msg);return;} 
else{yyy=Yoffset;
 if(nav){skn.document.write(content);skn.document.close();skn.visibility="visible"}
 if(iex){document.all("mytip").innerHTML=content;skn.visibility="visible"}
 }
}

function get_mouse(e){
var x=(nav)?e.pageX:event.x+document.body.scrollLeft;skn.left=x+Xoffset;
var y=(nav)?e.pageY:event.y+document.body.scrollTop;skn.top=y+yyy;
}

function closetip(){
if(!old){yyy=-1000;skn.visibility="hidden";}
}


