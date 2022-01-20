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
/**校验两个输入框，第一个不能大于第二个
*@param first 第一个输入框的名字
*@param second 第二个输入框的名字
*@param second 第一个字符串的提示名称
*@param second 第二个字符串的提示名称
功能：比较两个字符的大小
*/
function check_double(first,second,char1,char2){
	var f_value=eval("document.form1."+first).value;
	var s_value=eval("document.form1."+second).value;
	if(f_value>s_value){
		alert(char1+"不能大于"+char2);
		eval("document.form1."+first).focus();
		return false;
	}
	return true;
}

/**校验两个输入框，第一个不能大于第二个
*@param first 第一个输入框的名字
*@param second 第二个输入框的名字
*@param second 第一个字符串的提示名称
*@param second 第二个字符串的提示名称
功能：比较两个数字的大小
*/
function check_double_num(num1,num2,char1,char2){
	var f_value=parseInt(eval("document.form1."+num1).value);
	var s_value=parseInt(eval("document.form1."+num2).value);
	if(f_value>s_value){
		alert(char1+"不能大于"+char2);
		eval("document.form1."+num1).focus();
		return false;
	}
	return true;
}

//新旧视力标准的转换
function toTurnSight(sl){
	//当左右眼视力首位小于3时执行以下转换，无对应类别转换数据转换为空
	if(sl.length==3&&sl.substring(0,1)<=3){
		switch (sl){
			case "0.1":
				 sl="4.0";
				 break;
			case "0.2":
				 sl="4.3";
				 break;
			case "0.3":
				 sl="4.5";
				 break;
			case "0.4":
				 sl="4.6";
				 break;
			case "0.5":
				 sl="4.7";
				 break;
			case "0.6":
				 sl="4.8";
				 break;
			case "0.8":
				 sl="4.9";
				 break;
			case "1.0":
				 sl="5.0";
				 break;
			case "1.2":
				 sl="5.1";
				 break;
			case "1.5":
				 sl="5.2";
				 break;
			case "2.0":
				 sl="5.3";
				 break;
			default: 
				 sl=sl;
				 break;
		}	
	}

	return sl;

}

/**校验页面查询条件不能全部为空
*@param objForm 对象Form名称
*功能：页面表单查询项不能全部为空
*说明：校验页面text、password、textarea、select四类表单类型
*/
function check(objForm)
{
	var	temp="";
	var intquotation=0;
	var flag = "0";

	for(var i=0;i<objForm.length;i++){
		
			if((objForm.item(i).type=="text")||(objForm.item(i).type=="password")){
				if(objForm.item(i).value.indexOf("'")!=-1){
					alert("提交的内容中含有非法字符『 ' 』，请重新填写！");
					objForm.item(i).focus();
					objForm.item(i).select();
					return false;
			}

				if(objForm.item(i).value.length!=0){
					for(var j=0;j<objForm.item(i).value.length;j++){
						if(objForm.item(i).value.substring(j,j+1)!='\x20'){
							flag = "1";
						}
					}
				}
			}

			if(objForm.item(i).type=="textarea"){
				temp = objForm.item(i).value;
				while(true){
					intquotation = temp.indexOf("'");
					if(intquotation==-1){
						break;
					}
					temp = temp.substring(0,intquotation)+"＇"+temp.substring(intquotation+1);
				}
				objForm.item(i).value = temp;
				if(objForm.item(i).value.length!=0){
					for(var j=0;j<objForm.item(i).value.length;j++){
						if(objForm.item(i).value.substring(j,j+1)!='\x20'){
							flag = "1";
						}
					}
				}
			
			}
	
			if(objForm.item(i).type=="select-one"){
				
				if(objForm.item(i).value.length!=0){
					flag="1";
				}
			
			}
		
	}
	

	if(flag==0){
		return false;
   }else{
		return true;
   }
}
   /**得到两个型为"YYYYMM"的时间之间的月数
	*@param str1时间1
	*@param str2时间2
	*功能：得到两个型为"YYYYMM"的时间之间的月数
	*说明：str1>str2时返回正数；str1<str2时返回负数
	*/
   function getMonthCount(str1,str2){
	   var y1 = str1.substring(0,4);
	   var m1 = str1.substring(4);
	   var y2 = str2.substring(0,4);
	   var m2 = str2.substring(4);
	   if(isNaN(y1)){
		   alert("非法年:"+y1);
		   return 0;
	   }
	   if(isNaN(m1)){
		   alert("非法月:"+m1);
		   return 0;
	   }
	   if(isNaN(y2)){
		   alert("非法年:"+y2);
		   return 0;
	   }
	   if(isNaN(m2)){
		   alert("非法月:"+m2);
		   return 0;
	   }
	   return (y1-y2)*12 + (m1-m2);
   }
   /**得到指定时间之后若干月的时间
	*@param str1时间（YYYYMM）
	*@param str2月数
	*功能：得到指定时间之后若干月的时间
	*说明：str2可为负值
	*/
   function getMonth(str1,str2){
		var y1 = str1.substring(0,4);
		if(isNaN(y1)){
		   alert("非法年:"+y1);
		   return 0;
		}
		
		var m1 = str1.substring(4);
		if(isNaN(m1)){
			alert("非法月:"+m1);
			return 0;
		}
		if(parseInt(m1,10)<0||parseInt(m1,10)>12){
			alert("非法月:"+m1);
			return 0;
		}
		if(isNaN(str2)){
			alert("非法参数:"+str2);
			return 0;
		}
		var m2 = parseInt(m1,10) + parseInt(str2,10);
		var y2 = y1;

		if(m2<0){
			y2 = parseInt(y2,10)+parseInt(m2/12,10)-1;
			var c = 1-parseInt(m2/12,10);
			var m3 = c*12+parseInt(m1,10)+parseInt(str2,10);
			if(m3>9){
				return y2+""+m3;
			}else{
				return y2+"0"+m3;
			}
		}else{
			y2 = parseInt(y2,10)+parseInt(m2/12,10);
			if(m2%12==0){
				return (parseInt(y2,10)-1)+"12";
			}else{
				if(m2%12>9){
					return y2+""+m2%12;
				}else{
					return y2+"0"+m2%12;
				}
			}
		}		
	}
