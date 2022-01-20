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
					return 1;
				}
				if(objForm.item(i).value.length!=0){
					flag="0";
					for(var j=0;j<objForm.item(i).value.length;j++){
						if(objForm.item(i).value.substring(j,j+1)!='\x20'){
							flag = "1";
						}
					}
					if(flag==0){
						alert("输入框中不能全部填写空格");
						objForm.item(i).focus();
						objForm.item(i).select();
						return 1;
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
			}
			if(objForm.item(i).value.length!=0){
					flag="0";
					for(var j=0;j<objForm.item(i).value.length;j++){
						if(objForm.item(i).value.substring(j,j+1)!='\x20'){
							flag = "1";
						}
					}
					if(flag==0){
						alert("输入框中不能全部填写空格");
						objForm.item(i).focus();
						objForm.item(i).select();
						return 1;
					}
				}
		}
	}