var myform=form1;
var TOTAL=myform.elements.length;
var data_name=new Array(TOTAL);
var data_length=new Array(TOTAL);
var data_chinese_dec=new Array(TOTAL);
var current_ele;
var data_group=new Array(TOTAL);
var form_ele=new Array(myform.elements.length);//��ŵ�ǰ�ı������ڵ�Ԫ��
var form_elepo=new Array(myform.elements.length);//Ԫ�ص�����,�ǲ��ǿ���ת�ƽ��㡣1�ǿ��ԣ�0�ǲ�����
var form_ele_fun=new Array(myform.elements.length);//��Ӧ�ĺ��������
var ele_number=myform.elements.length;
var focus_ele=100;//��ǰ�������ڵ�Ԫ��
var focus_lost=100;//ʧȥ�����Ԫ��
var is_check_next=true;//�Ƿ�У����һ��Ԫ��
var replace_str;//�滻����ַ���
var if_focus_in_form_ele//1�� 0���ڡ������ǲ�����form��Ԫ���ϣ�����ȷ���ǲ��ǽ��м��Ϸ���
var MAXGROUP=9;//У���������
var functiontype=new Array(MAXGROUP);
ini_flag=0;//�Ƿ��ʼ���ı�־ 0 û�� 1 �ѳ�ʼ��
var enterflag=true;//�س����Ƿ���õı��;
var htmflag=true;//����¼��htm���;
var selectfocus=false;
var rightflag=false;
/////////////////�ڴ��ڴ�ڴ�ʱ���������ڵõ����������Ϣ/////////////////////////
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
			alert('��������TOTAL��ֵ');
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
///////////////////////////////������Щ�����ã���Щ��������///////////////////////////////////
function setform(thisform)
{
	myform=thisform;
}
function setenter(bflag)//���ûس����Ƿ����
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
			form_ele[i]=myform.elements(i);//���������е�Ԫ�ط�������
			if(isfocus(form_ele[i]))//����Ԫ�ص��Ƿ���Եõ����������
			{
				form_elepo[i]=1;
				//��������ڵ�һ�����õ�Ԫ����
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
			//����Ԫ�ض�Ӧ�����
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

///////////////////////�����ǲ��ǿ��Եõ�����//////////////////////////////////
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



/////////////////////////�Զ�ת����һ����///////////////////////////////////////
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
				nextele();//���лع����
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
			nextele();//���лع����
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

/////////////////////////��������󳤶�ʱ��������������///////////////////////////////////
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
function isstopchar()//�����ַ�
{
if(htmflag)
{
	if(window.event.shiftKey)//'<','>'����shift+insert
	{
		if(window.event.keyCode==190||window.event.keyCode==188||window.event.keyCode==45)
		{
			return false;
		}
	}
	/*
	*add by cxg  2006��2��28��
	*���������ַ�"'"��У�飬ҳ�治����¼��
	*/
	if(window.event.keyCode==222)//"'"�ַ�
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
function getlength()//��ǰ��ĳ���
{
  var i,unLen,bLen;
  var str;
  str=form_ele[focus_ele].value;//��õ�ǰ���ֵ
  
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
function setcur()//�趨��ǰ���ڵ���,����һ�����У��
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

///////////////////////�����ܲ���������ַ������滻/////////////////////////////////

function replaced(str)
{
	if(str==null)
	{
		str=form_ele[focus_ele].value;
	}
	replace_str=str.replace("'","''");
	if(replace_str.indexOf("'")!=-1)
	{
		replaced(replace_str);//�ع���е���
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
	if(!setmaxlength(data_length[form_ele_fun[focus_ele]]))//��󳤶ȵĿ���
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

myform.onkeydown=toenter;//����keydown�¼�
for(var i=0;i<myform.elements.length;i++)
{
	getforminfo();
	form_ele[i].onfocus =setcur;//�����κ�Ԫ�صõ�����ʱ����
	if(isie6())
	{
		form_ele[i].onfocusout=lostfocus;//�����κ�Ԫ��ʧȥ����ʱ����
	}
	else
	{
		form_ele[i].onblur=lostfocus;//�����κ�Ԫ��ʧȥ����ʱ����
	}
	form_ele[i].onmousedown=stopright//�ڸ������н�ֹ�Ҽ�
}
function stopright()
{
	if((event.button==2||event.button==3)&&rightflag)
	{
		alert("����ʹ���Ҽ�");
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

///////////////////////////������һЩ���廯�ĺ���////////////////////////////
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
		var lastnum = l_l_total % 11;//���һλ
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


//���֤У��
function checksfzh(theStr)
{
	var  l_l_jym= new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
	var  l_l_total = 0;
	var strobject = new String(theStr);
	//λ��У��
	var boolean1 = strobject.length!=15;
	var boolean2 = strobject.length!=18;
	if (boolean1 && boolean2)
	{
		alert("���֤����Ϊ15λ��18λ��");
		return false;
	}
	//15У��
	if (strobject.length==15)
	{	
	    if(isNaN(strobject))
	    {
	       alert("���֤���������ӦȫΪ���֣�");
		   return false;	      
	    }		
		//15λת18λ
		strobject=convertsfzh(theStr);
	}    		
	var l_s_temp = strobject.substr(0,17);
	if (isNaN(l_s_temp))
	{
		alert("���֤��ǰ17λ�������ӦȫΪ���֣�");
		return false;
	}			
	var LastNum = strobject.substring(17,18);
	if (isNaN(LastNum) && LastNum!="x" &&LastNum!="X")
	{
		alert("18λ�����֤�����һλ¼�����!");
		return false;
	}
	var L_s_temp1 = strobject.substr(6,8);
	var L_s_temp  = new String(L_s_temp1);
	var year  = L_s_temp.substring(0,4);
	var month =  L_s_temp.substring(4,6);
	var day   =  L_s_temp.substring(6,8);
	var l_l_temp1;
	var L_s_csny = year + "-" + month + "-" + day;
	//�Ƿ��ǺϷ�����
	if (!ISDATEFORMAT(L_s_csny))
	{
		alert("�������֤�ŵĳ��������ղ���ȷ��");
		return false;
	}
	if (!ISDATE(L_s_csny))
	{
		alert("�������֤�ŵĳ��������ղ���ȷ��");
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
		alert("�����18λ���֤�Ų���ȷ!");
		return false;
	}
	return true;
}
//�ж��ַ����Ƿ�������ڸ�ʽ����1999-03-07
function ISDATEFORMAT(theStr) 
{
	var strObj=new String(theStr);
	var strObjTemp;
	//1.theStr.length<>10
	if(strObj.length!=10)
		return false;
	//2.�жϵ���λ���ڰ�λ��"-"
	if(strObj.substring(4,5)!="-")
		return false;
	if (strObj.substring(7,8)!="-")
		return false;
	//3.У���겿�������֣�����1900~2100֮�䣬�²��������֣�����1~12֮�䣬�ղ��������֣�����1~31֮��
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
	if(isNaN(theStr))//�жϲ�����ֵ���ַ���
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
			if((theYear%4==0 || theYear%100==0) && theYear%400!=0)//����2�·�29��
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
function is_not_space()/////��Ӧ�����Ϊ1����⵱ǰ�����ǲ��ǿ�
{
	if(trim(form_ele[focus_lost].value)=="")
	{
		alert(data_chinese_dec[form_ele_fun[focus_lost]]+"����Ϊ��");
		form_ele[focus_lost].focus();
		return false;
	}
	return true;
}
function is_number()/////��Ӧ�����Ϊ2,����ǲ�������
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value))
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"ֻ��Ϊ����");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_number2()/////��Ӧ�����Ϊ4,����ǲ������־ߴ���0
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value<0)
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"ֻ��Ϊ����0������");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_plusint()/////��Ӧ�����Ϊ128,����ǲ���0��������
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value<0||form_ele[focus_lost].value.indexOf(".")>=0)
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"ֻ��Ϊ0��������");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_money()/////��Ӧ�����Ϊ256,����ǲ��ǽ��
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value<0||
			form_ele[focus_lost].value.indexOf(".")==0 ||
			(form_ele[focus_lost].value.indexOf(".")>0) && 
			(form_ele[focus_lost].value.indexOf(".")<form_ele[focus_lost].value.length-3))
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+",�����Ǵ���0�����ֲ���ֻ�ܱ���2λС��!");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_yb()/////��Ӧ�����Ϊ8,����ǲ����ʱ�
{
	if(form_ele[focus_lost].value!="")
	{
		if(isNaN(form_ele[focus_lost].value)||form_ele[focus_lost].value.length!=6)
		{
			alert(data_chinese_dec[form_ele_fun[focus_lost]]+"ֻ��Ϊ6λ����");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
//////////////////////////���email ��ַ////////////////////////////////
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
function is_email()///////��Ӧ�����Ϊ16,����ǲ�����ȷ��email��ַ
{
	if(form_ele[focus_lost].value!="")
	{
		if(!check_email(form_ele[focus_lost].value))
		{
			alert("������һ����ȷ��email��ַ");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
function is_sfzhm()///��������֤�������ֵȡ32
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
			alert("��������һ����ȷ������!\r\n��������-����-����");
			form_ele[focus_lost].focus();
			return false;
		}
	}
	return true;
}
///////////////////////////////////////////////////////////////////////
function whichfunction()
{
	//usefunction=101;//101Ϊû�к�������
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
//////////////////////////�����ύʱ�Զ����и������У��///////////////
function autocheck()
{
	for(var i=0;i<ele_number;i++)
	{
		if(form_elepo[i]==1)//�������ת�ƽ���
		{
			if(form_ele_fun[i]!=null)//������������������ж���
			{
				//�ȶ��䳤���ǲ��Ƿ���Ҫ��
				if(strlength(form_ele[i].value)>data_length[form_ele_fun[i]])
				{
					alert(data_chinese_dec[form_ele_fun[i]]+"�ĳ��Ȳ��ܴ���"+data_length[form_ele_fun[i]]+"λ");
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
///////////////////////////���е�У�������õĺ���/////////////////////////
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
		case functiontype[7]://128  ������
			return is_plusint();
		case functiontype[8]://256  ���
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
