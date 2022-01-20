//身份证校验
function checkall(theStr)
{
	return is_sfzhm(theStr);
}
function is_sfzhm(theStr)///如果是身份证号码则此值取32
{
	theStr.value=theStr.value.toUpperCase();
	if(theStr.value!="")
	{
		if(!checksfzh(theStr.value))
		{
			theStr.focus();
			return false;
		}
	}
	theStr.value=convertsfzh(theStr.value);
	return true;
}
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
	if (isNaN(LastNum) && LastNum!="x" &&LastNum!="X"){
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
	if (!ISDATEFORMAT(L_s_csny)){
		alert("输入身份证号的出生年月日不正确！");
		return false;
	}
	if (!ISDATE(L_s_csny)){
		alert("输入身份证号的出生年月日不正确！");
		return false;
	}
	for(var i=0;i<strobject.length - 1;i++)
	{
		l_l_temp1 = parseInt(strobject.substr(i,1),10) * l_l_jym[i];
		l_l_total += l_l_temp1;
	}
//2010-07-27 左庆文修改 原来的算法不对
//根据总和除以11取余 到速查表中找到对应的数就是最后一位
	var lastArray = new Array("1","0","X","9","8","7","6","5","4","3","2");
	if(lastArray[l_l_total%11]!=strobject.substring(17,18)){
		alert("输入的18位身份证号不正确!");
		return false;
	}
	return true;
}
function convertsfzh(theStr)
{
	var  l_l_jym= new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
	var  l_l_total = 0;
	var  last;
	var strobject1 = new String(theStr);
	if (strobject1.length==15){
		var strobject = strobject1.substring(0,6) + "19" + strobject1.substring(6,15);
		for(var i=0;i<strobject.length;i++)	{
			l_l_total += parseInt(strobject.substr(i,1),10) * l_l_jym[i];
		}
//2010-07-27 左庆文修改 原来的算法不对
//根据总和除以11取余 到速查表中找到对应的数就是最后一位
		var lastnum = l_l_total % 11;
		var lastArray = new Array("1","0","X","9","8","7","6","5","4","3","2");
		last= lastArray[lastnum];
		strobject = strobject + last;
		return strobject;
	}
	else{
		return strobject1;
	}
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
function ISNUMBER(theStr) 
{
	if(isNaN(theStr))//判断不是数值型字符串
		return false;
	else
		return true;
}


//根据身份证号码得性别
function getSex(theStr){
	var sex=theStr.substring(16,17);
	if(sex%2==0){
		return "女";
	}else{
		return "男";
	}
}
//根据身份证号码得到出生日期
function getBirthday(theStr){
	var birthday=theStr.substring(6,14);
	return birthday.substring(0,4)+"-"+birthday.substring(4,6)+"-"+birthday.substring(6)
}
//根据身份证号码和日期的到年龄
function getAgeByDay(theStr,theTime){
	var birthday=getBirthday(theStr);
	var bYear=birthday.substring(0,4);
	var bMonth=birthday.substring(5,7);
	var bDay=birthday.substring(9);
	var tYear=theTime.substring(0,4);
	var tMonth=theTime.substring(5,7);
	var tDay=theTime.substring(9);
	var age=0;
	nl=new Number(tYear)-new Number(bYear);
	if(bMonth>tMonth){
		nl=nl-1;
	}
	if(bMonth==tMonth&&bDay>tDay){
		nl=nl-1;
	}
	return nl;
}
