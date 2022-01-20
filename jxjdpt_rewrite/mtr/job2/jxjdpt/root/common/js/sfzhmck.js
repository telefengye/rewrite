//���֤У��(������validator.js���棬checksfzhm.js�����������validator.js����)
function is_sfzhm_jy(theStr)///��������֤�������ֵȡ32
{
	theStr.value=theStr.value.toUpperCase();
	if(theStr.value!="")
	{
		if(!checksfzh_jy(theStr.value))
		{
			theStr.focus();
			return false;
		}
	}
	theStr.value=convertsfzh_jy(theStr.value);
	return true;
}
function checksfzh_jy(theStr)
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
		strobject=convertsfzh_jy(theStr);
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
	if (!ISDATEFORMAT_jy(L_s_csny))
	{
		alert("�������֤�ŵĳ��������ղ���ȷ��");
		return false;
	}
	if (!ISDATE_jy(L_s_csny))
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
function convertsfzh_jy(theStr)
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


//�ж��ַ����Ƿ�������ڸ�ʽ����1999-03-07
function ISDATEFORMAT_jy(theStr) 
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
	if(!(ISNUMBER_jy(strObjTemp)) || parseInt(strObjTemp,10)<=1900 || parseInt(strObjTemp,10)>2100)
		return false;
	strObjTemp=new String(strObj.substring(5,7));
	if  (!(ISNUMBER_jy(strObjTemp)) || parseInt(strObjTemp,10) < 1  || parseInt(strObjTemp,10)>12)
		return false;
	strObjTemp=new String(strObj.substring(8,10));
	if(!(ISNUMBER_jy(strObjTemp)) || parseInt(strObjTemp,10)<1 || parseInt(strObjTemp,10)>31)
		return false;
	return true;
}
function ISDATE_jy(theStr) 
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
function ISNUMBER_jy(theStr) 
{
	if(isNaN(theStr))//�жϲ�����ֵ���ַ���
		return false;
	else
		return true;
}

