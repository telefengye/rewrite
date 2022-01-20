var myform=form1;
var TOTAL=myform.elements.length;
var data_name=new Array(TOTAL);
var data_length=new Array(TOTAL);
var data_chinese_dec=new Array(TOTAL);
var current_ele;
var data_group=new Array(TOTAL);
var form_ele=new Array(myform.elements.length);//存放当前的表单中所在的元素
var form_elepo=new Array(myform.elements.length);//元素的属性,是不是可以转移焦点。1是可以，0是不可以
var form_ele_fun=new Array(myform.elements.length);//对应的函数的组号
var ele_number=myform.elements.length;
var focus_ele=100;//当前焦点所在的元素
var focus_lost=100;//失去焦点的元素
var is_check_next=true;//是否校验下一个元素
var replace_str;//替换后的字符串
var if_focus_in_form_ele//1在 0不在　焦点是不是在form的元素上，用于确定是不是进行检测合法性
var MAXGROUP=9;//校验的类型数
var functiontype=new Array(MAXGROUP);
ini_flag=0;//是否初始化的标志 0 没有 1 已初始化
var enterflag=true;//回车键是否可用的标记;
var htmflag=true;//不能录入htm标记;
var selectfocus=false;
var rightflag=false;
/////////////////在窗口打口打开时触发，用于得到各个域的信息/////////////////////////
function add_ele(data_na,data_len,data_dec,data_gro)
{
//alert(data_name);
	if(current_ele==null)
	{
		data_name[0]=data_na;
		data_length[0]=data_len;
		data_chinese_dec[0]=data_dec;
		data_group[0]=data_gro;
		current_ele=1;
	}
	else
	{
		if(current_ele==TOTAL)
		{
			alert('请你增大TOTAL的值');
		}
		else
		{
			data_name[current_ele]=data_na;
			data_length[current_ele]=data_len;
			data_chinese_dec[current_ele]=data_dec;
			data_group[current_ele]=data_gro;
			current_ele=current_ele+1;
		}
	}
	
}
///////////////////////////////设置哪些可以用，哪些不可以用///////////////////////////////////
function setform(thisform)
{
	myform=thisform;
}
function setenter(bflag)//设置回车键是否可用
{
	if(bflag)
	{
		enterflag=true;
	}
	else
	{
		enterflag=false;
	}
}
function setstopchar(bflag)
{
	if(bflag)
	{
		htmflag=true;
	}
	else
	{
		htmflag=false;
	}
}
function setright(useright)
{
	right=useright;
}
function isie6()
{
	var ieversion=new String(navigator.appVersion);
	var i=ieversion.indexOf("MSIE",0);
	if(ieversion.substring(i+5,i+6)=="6"||ieversion.substring(i+5,i+6)=="7")
	{
		return true;
	}
	return false;
}
////////////////////////////////////////////////////////////////////////////
function getforminfo()
{
	if(ini_flag==0)
	{
		ini_form();
		for(var i=0;i<myform.elements.length;i++)
		{
			form_ele[i]=myform.elements(i);//将各个表单中的元素放入数组
			if(isfocus(form_ele[i]))//设置元素的是否可以得到焦点的属性
			{
				form_elepo[i]=1;
				//将焦点放在第一个可用的元素上
				if(focus_ele==100)
				{
					focus_ele=i;
					//form_ele[i].focus();
				}
			}
			else
			{
				form_elepo[i]=0;
			}
			//设置元素对应的组号
			for(var j=0;j<data_name.length;j++)
			{
				if(form_ele[i].name==data_name[j])
				{
					form_ele_fun[i]=j;
				}
			}
			
		}
		for(var i=0;i<MAXGROUP;i++)
		{
			functiontype[i]=1;
			for(var j=0;j<i;j++)
			{
				functiontype[i]=functiontype[i]*2;
			}
			
		}
		
		ini_flag=1;
	}
}
//window.onload=getforminfo;
////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@////////

///////////////////////此域是不是可以得到焦点//////////////////////////////////
function isfocus(ele)
{
	if(ele.type=="hidden")
	{
		return false;
	}
	else
	{
		if(ele.disabled)
		{  
			return false;
		}
	}
	return true;
}

//////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////



/////////////////////////自动转向下一个域///////////////////////////////////////
function nextele()
{
	
	if(form_ele[focus_ele].type=="textarea")
	{
		if(window.event.ctrlKey)
		{
			if(focus_ele==myform.elements.length-1)
			{
				focus_ele=0;
			}
			else
			{
				focus_ele+=1;
			}
			if(form_elepo[focus_ele]==0)
			{
				nextele();//进行回归调用
			}
			else
			{
				form_ele[focus_ele].focus();
				return false;
			}
		}
	}
	else
	{
		if(focus_ele==myform.elements.length-1)
		{
			focus_ele=0;
		}
		else
		{
			focus_ele+=1;
		}
		if(form_elepo[focus_ele]==0)
		{
			nextele();//进行回归调用
		}
		else
		{
			try{
				form_ele[focus_ele].focus();
			}catch(e){
				nextele();
			}
			return false;
		}
	}
	return true;
}

//////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////

/////////////////////////当到达最大长度时不能再输入内容///////////////////////////////////
function setmaxlength(maxlen)
{
	//alert(window.event.keyCode);
	if(!isstopchar())
	{
		return false;
	}
	if(getlength()>=maxlen)
	{
		if(window.event.keyCode>49||window.event.keyCode==32)
			return false;
		else
			return true;
	}
	return true;
}
function isstopchar()//禁用字符
{
if(htmflag)
{
	if(window.event.shiftKey)//'<','>'还有shift+insert
	{
		if(window.event.keyCode==190||window.event.keyCode==188||window.event.keyCode==45)
		{
			return false;
		}
	}
	/*
	*add by cxg  2006年2月28日
	*新增对于字符"'"的校验，页面不允许录入
	*/
	if(window.event.keyCode==222)//"'"字符
	{
		return false;
	}

	/*if(window.event.ctrlKey)//ctrl+v
	{
		//alert(window.event.keyCode)
		if(window.event.keyCode==86)
		{
			return false;
		}
	}*/
}
	return true;
}
function getlength()//获当前域的长度
{
  var i,unLen,bLen;
  var str;
  str=form_ele[focus_ele].value;//获得当前域的值
  
  unLen=str.length;
  bLen=str.length;
  for(i=0;i<unLen;i++)
  {
    if(str.charCodeAt(i)>255) bLen++;
  }
  
  return bLen;
  
} 
function strlength( str)
{
  unLen=str.length;
  bLen=str.length;
  for(i=0;i<unLen;i++)
  {
	if(str.charCodeAt(i)>255) bLen++;
  }
  return bLen;
}
//////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////


///////////////////////////////////////////////////////////////////////////////////
function setcur()//设定当前所在的域,对上一域进行校验
{
	for(var i=0;i<myform.elements.length;i++)
	{
		if(form_ele[i]==this)
		{
			focus_ele=i;
			if(form_ele[focus_ele].type=="select-one"&&!isie6())
			{
				selectfocus=true;
			}
			if(focus_lost!=100&&focus_lost!=focus_ele&&is_check_next&&form_ele[focus_ele].type!="reset")
			{
				
				if(whichfunction())
				{
					is_check_next=true;
					selectfocus=false;
				}
				else
				{
					is_check_next=false;
					selectfocus=true;
					
				}
			}
			else
			{
				is_check_next=true;
			}
			
		}
	}

}

////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@///////

///////////////////////将可能产生错误的字符进行替换/////////////////////////////////

function replaced(str)
{
	if(str==null)
	{
		str=form_ele[focus_ele].value;
	}
	replace_str=str.replace("'","''");
	if(replace_str.indexOf("'")!=-1)
	{
		replaced(replace_str);//回归进行调用
	}
}

////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@///////

function toenter()
{
	//alert(window.event.keyCode);
	if(form_ele[focus_ele].type=="file")
	{
		if(window.event.keyCode==8||window.event.keyCode==46)
		{
			form_ele[focus_ele].select();	
		}
		else
		{
			if(window.event.keyCode!=13)
			{
				return false;
			}
		}
	}
	if(!setmaxlength(data_length[form_ele_fun[focus_ele]]))//最大长度的控制
	{
		return false;
	}
	if(enterflag)
	{
		if(window.event.keyCode==13)
		{
			return nextele();

		}
	}
}

myform.onkeydown=toenter;//设置keydown事件
for(var i=0;i<myform.elements.length;i++)
{
	getforminfo();
	form_ele[i].onfocus =setcur;//表单中任何元素得到焦点时触发
	if(isie6())
	{
		form_ele[i].onfocusout=lostfocus;//表单中任何元素失去焦点时触发
	}
	else
	{
		form_ele[i].onblur=lostfocus;//表单中任何元素失去焦点时触发
	}
	form_ele[i].onmousedown=stopright//在各个域中禁止右键
}
function stopright()
{
	if((event.button==2||event.button==3)&&rightflag)
	{
		alert("不能使用右键");
		return false;

	}
}

function lostfocus()
{
	for(var i=0;i<myform.elements.length;i++)
	{
		if(form_ele[i]==this)
		{
			if(selectfocus&&!isie6()) 
			{
				selectfocus=false;
			}
			else
			focus_lost=i;
			
		}
	}
}

///////////////////////////下面是一些具体化的函数////////////////////////////
function convertsfzh(theStr)
{
	var  l_l_jym= new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
	var  l_l_total = 0;
	var  last;
	var strobject1 = new String(theStr);
	if (strobject1.length==15)
	{
		var strobject = strobject1.substring(0,6) + "19" + strobject1.substring(6,15);
		for(var i=0;i<strobject.length;i++)
		{
			var l_l_temp1 = parseInt(strobject.substr(i,1),10) * l_l_jym[i];
			l_l_total += l_l_temp1;
		}
		l_l_total --;
		var lastnum = l_l_total % 11;//最后一位
		if (lastnum==0)
		{
			last = 0;
		}
		else
		{
			if (lastnum==1)
			{
				last="X";
			}
			else
			{
				last = 11 - lastnum;
			}
		}
		strobject = strobject + last;
		return strobject;
	}
	else
	{
		return strobject1;
	}
}


//身份证校验
function checksfzh(theStr)
{
	var  l_l_jym= new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
	var  l_l_total = 0;
	var strobject = new String(theStr);
	//位数校验
	var boolean1 = strobject.length!=15;
	var boolean2 = strobject.length!=18;
	if (boolean1 && boolean2)
	{
		alert("身份证必须为15位或18位！");
		return false;
	}
	//15校验
	if (strobject.length==15)
	{	
	    if(isNaN(strobject))
	    {
	       alert("身份证号输入错误，应全为数字！");
		   return false;	      
	    }		
		//15位转18位
		strobject=convertsfzh(theStr);
	}    		
	var l_s_temp = strobject.substr(0,17);
	if (isNaN(l_s_temp))
	{
		alert("身份证号前17位输入错误，应全为数字！");
		return false;
	}			
	var LastNum = strobject.substring(17,18);
	if (isNaN(LastNum) && LastNum!="x" &&LastNum!="X")
	{
		alert("18位的身份证号最后一位录入错误!");
		return false;
	}
	var L_s_temp1 = strobject.substr(6,8);
	var L_s_temp  = new String(L_s_temp1);
	var year  = L_s_temp.substring(0,4);
	var month =  L_s_temp.substring(4,6);
	var day   =  L_s_temp.substring(6,8);
	var l_l_temp1;
	var L_s_csny = year + "-" + month + "-" + day;
	//是否是合法日期
	if (!ISDATEFORMAT(L_s_csny))
	{
		alert("输入身份证号的出生年月日不正确！");
		return false;
	}
	if (!ISDATE(L_s_csny))
	{
		alert("输入身份证号的出生年月日不正确！");
		return false;
	}
	for(var i=0;i<strobject.length - 1;i++)
	{
		l_l_temp1 = parseInt(strobject.substr(i,1),10) * l_l_jym[i];
		l_l_total += l_l_temp1;
	}
	if (!isNaN(strobject.substring(17,18)))
	{
		l_l_total += parseInt(strobject.substring(17,18));
	}
	if (strobject.substring(17,18)=="X" || strobject.substring(17,18)=="x")
	{
		l_l_total += 10;
	}
	l_l_total --;
	if (!(l_l_total%11==0))
	{
		alert("输入的18位身份证号不正确!");
		return false;
	}
	return true;
}
//判断字符串是否符合日期格式，如1999-03-07
function ISDATEFORMAT(theStr) 
{
	var strObj=new String(theStr);
	var strObjTemp;
	//1.theStr.length<>10
	if(strObj.length!=10)
		return false;
	//2.判断第五位、第八位是"-"
	if(strObj.substring(4,5)!="-")
		return false;
	if (strObj.substring(7,8)!="-")
		return false;
	//3.校验年部分是数字，并在1900~2100之间，月部分是数字，并在1~12之间，日部分是数字，并在1~31之间
	strObjTemp=new String(strObj.substring(0,4));
	if(!(ISNUMBER(strObjTemp)) || parseInt(strObjTemp,10)<=1900 || parseInt(strObjTemp,10)>2100)
		return false;
	strObjTemp=new String(strObj.substring(5,7));
	if  (!(ISNUMBER(strObjTemp)) || parseInt(strObjTemp,10) < 1  || parseInt(strObjTemp,10)>12)
		return false;
	strObjTemp=new String(strObj.substring(8,10));
	if(!(ISNUMBER(strObjTemp)) || parseInt(strObjTemp,10)<1 || parseInt(strObjTemp,10)>31)
		return false;
	return true;
}
function ISNUMBER(theStr) 
{
	if(isNaN(theStr))//判断不是数值型字符串
		return false;
	else
		return true;
}

function ISDATE(theStr) 
{
	var strObj=new String(theStr);
	var theYear=parseInt(strObj.substring(0,4),10);
	var theMonth=parseInt(strObj.substring(5,7),10);
	var theDay=parseInt(strObj.substring(8,10),10);
	switch(theMonth)
	{
		case 4:
		case 6:
		case 9:
		case 11:
			if(theDay==31)
				return false;
			else
				break;
		case 2:
			if((theYear%4==0 || theYear%100==0) && theYear%400!=0)//润年2月份29天
			{
				if(theDay>29) return false;
			}
			else
			{
				if(theDay>28) return false;
			}
			break;
		default: break;
	}
	return true;
}
function is_not_space()/////对应的组号为1，检测当前的域是不是空
{
	if(trim(form_ele[focus_lost].value)=="")
	{
		alert(data_chinese_dec[form_ele_fun[focus_lost]]+"不能为空");
		form_ele[focus_lost].focus();
		return false;
	}
	return true;
}
function is_number()/////对应的组号为2,检测是不是数字
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value))
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"只能为数字");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_number2()/////对应的组号为4,检测是不是数字具大于0
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value<0)
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"只能为大于0的数字");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_plusint()/////对应的组号为128,检测是不是0或正整数
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value<0||form_ele[focus_lost].value.indexOf(".")>=0)
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"只能为0或正整数");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_money()/////对应的组号为256,检测是不是金额
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value<0||
			form_ele[focus_lost].value.indexOf(".")==0 ||
			(form_ele[focus_lost].value.indexOf(".")>0) && 
			(form_ele[focus_lost].value.indexOf(".")<form_ele[focus_lost].value.length-3))
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+",必须是大于0的数字并且只能保留2位小数!");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_yb()/////对应的组号为8,检测是不是邮编
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value.length!=6)
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"只能为6位数字");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
//////////////////////////检查email 地址////////////////////////////////
function check_email(email_address){
at_location=email_address.indexOf("@");
dot_location=email_address.indexOf(".");

if (at_location== - 1||dot_location== - 1||at_location>dot_location)
{return false;}

if (at_location==0){return false;}
if (dot_location - at_location<=1 ){ return false;}
if (email_address.length - dot_location<=1) {return false;}
return true;}
///////////////////////////////////////////////////////////////////
function is_email()///////对应的组号为16,检测是不是正确的email地址
{
	if(form_ele[focus_lost].value!="")
	{
		if(!check_email(form_ele[focus_lost].value))
		{
			alert("请输入一个正确的email地址");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_sfzhm()///如果是身份证号码则此值取32
{
	form_ele[focus_lost].value=form_ele[focus_lost].value.toUpperCase();
	if(form_ele[focus_lost].value!="")
	{
		if(!checksfzh(form_ele[focus_lost].value))
		{
			form_ele[focus_lost].focus();
			return false;
		}
	}
	form_ele[focus_lost].value=convertsfzh(form_ele[focus_lost].value);
	return true;
}
function is_date()
{
	if(form_ele[focus_lost].value!="")
	{
		if((!ISDATEFORMAT(form_ele[focus_lost].value))||(!ISDATE(form_ele[focus_lost].value)))
		{
			alert("请你输入一个正确的日期!\r\n年年年年-月月-日日");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
///////////////////////////////////////////////////////////////////////
function whichfunction()
{
	//usefunction=101;//101为没有函数调用
	for(var i=0;i<MAXGROUP;i++)
	{
		//alert(data_group[form_ele_fun[focus_lost]] - 1);
		//alert(functiontype[i]);
		if(data_group[form_ele_fun[focus_lost]]==functiontype[i])
		{
			//usefunction=functiontype[i];
			return  checkall(functiontype[i]);
		}
		else
		{
			if(data_group[form_ele_fun[focus_lost]]-1==functiontype[i]&&data_group[form_ele_fun[focus_lost]]!=2)
			{
				//alert(data_group[form_ele_fun[focus_lost]])
				if(checkall(1))
				{
					return  checkall(functiontype[i]);
				}
				else
				{
					return false;
				}
				
			}

		}

	}
	return checkall(data_group[form_ele_fun[focus_lost]]);
	
	
}
//////////////////////////当按提交时自动进行各个域的校验///////////////
function autocheck()
{
	for(var i=0;i<ele_number;i++)
	{
		if(form_elepo[i]==1)//此域可以转移焦点
		{
			if(form_ele_fun[i]!=null)//此域的属性已在数组中定义
			{
				//先断其长度是不是符合要求
				if(strlength(form_ele[i].value)>data_length[form_ele_fun[i]])
				{
					alert(data_chinese_dec[form_ele_fun[i]]+"的长度不能大于"+data_length[form_ele_fun[i]]+"位");
					form_ele[i].focus();
					return false;
				}
				else
				{
					focus_lost=i;
					if(!whichfunction())
					{
						form_ele[i].focus();
						return false;
					}
				}
			}
		}
	}
	return true;
	//myform.submit();
}
function submitaftercheck()
{
	if(autocheck())
	{
		myform.submit();
		return true;
	}
	else
	{
		return false;
	}

}
for (var i=0;i<form_ele.length;i++)
{
	if(form_ele[i].name=="tosubmit")
	{
		myform.tosubmit.onclick=submitaftercheck;
		break;
	}
}
//myform.tosubmit.onclick=autocheck;
///////////////////////////所有的校验所调用的函数/////////////////////////
function checkall(fun_type)
{
	switch(fun_type)
	{
		case functiontype[0]://1
			return is_not_space();
		case functiontype[1]://2
			return is_number();
		case functiontype[2]://4
			return is_number2();
		case functiontype[3]://8
			return is_yb();
		case functiontype[4]://16
			return is_email();
		case functiontype[5]://32
			return is_sfzhm();
		case functiontype[6]://64
			return is_date();
		case functiontype[7]://128  正整数
			return is_plusint();
		case functiontype[8]://256  金额
			return is_money();
		default:
			return true
	}
	
}
function trim(strToTrim) {
	result=strToTrim
	for (_i=0; _i<strToTrim.length; _i++) {
		if (strToTrim.charAt(_i)==" ") result=strToTrim.substr(_i+1)
		else _i=strToTrim.length
	}
	strToTrim=result
	for (_i=strToTrim.length-1; _i>=0; _i--) {
		if (strToTrim.charAt(_i)==" ") result=strToTrim.substr(0,_i)
		else _i=0
	}
	return result
}
