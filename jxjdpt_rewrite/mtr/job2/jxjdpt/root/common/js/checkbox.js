

////////////////////////////////////
//实现单选的互斥
///////////////////////////////////
//rows : 总共的个数
//index：第几个
//selcheckbox：要选中的checkbox
//uncheckbox： 不要选中的checkbox
function selCheck(rows,index,selcheckbox,uncheckbox)
{	
	if (rows==1)
	{
		if (selcheckbox.checked)
			uncheckbox.checked=0;
	}
	else
	{
		if (selcheckbox[index].checked)
			uncheckbox[index].checked=0;
	}
}

////////////////////////////////////////
//实现多个checkbox的全选
//如果该checkbox的disabled为true,不做处理
////////////////////////////////////////
//check : 要实现全选操作的checkbox名称
function checkAll(check)
{
	var n=check.length;
	if (n=="undefined"||n==null){
		if(!check.disabled){
			check.checked=true;
		}
	}
	else{
		for (var i=0; i<n; i++){
			if(check[i].disabled){
				continue;
			}
			check[i].checked=true;
		}
	}
}

////////////////////////////////////////
//实现多个checkbox的全不选
//如果该checkbox的disabled为true,不做处理
////////////////////////////////////////
//check : 要实现全不选操作的checkbox名称

function checkCancel(check)
{
	var n=check.length;
	if (n=="undefined"||n==null){
		if(!check.disabled){
			check.checked=false;
		}
	}
	else{
		for (var i=0; i<n; i++){
			if(check[i].disabled){
				continue;
			}
			check[i].checked=false;
		}
	}
}
////////////////////////////////////////////////
//用一个checkbox实现多个checkbox的全选和全不选
///////////////////////////////////////////////
//check : 要实现全选和全不选操作的checkbox名称
//checkac:用来实现该事件的checkbox名称

function checkAC(check,checkac)
{
	if (checkac.checked)
		checkAll(check);
	else
		checkCancel(check);
}

////////////////////////////////////////////////
//用两个checkbox实现多个checkbox的全选和全不选
///////////////////////////////////////////////
//check : 要实现全选和全不选操作的checkbox名称
//checka:用来实现全选事件的checkbox名称
//checkc:用来实现全不选事件的checkbox名称

function checkMAC(check,checka,checkc)
{
	if (checka.checked)
	{
		selCheck(1,1,checka,checkc);
		checkAll(check);
	}
}

////////////////////////////////////////////////
//用两个checkbox实现多个checkbox的全选和全不选
///////////////////////////////////////////////
//check : 要实现全选和全不选操作的checkbox名称
//checkc:用来实现全不选事件的checkbox名称
//checka:用来实现全选事件的checkbox名称

function checkMCA(check,checkc,checka)
{
	if (checkc.checked)
	{
		selCheck(1,1,checkc,checka);
		checkCancel(check);
	}
}

////////////////////////////////////////////////
//实现判断checkbox是否被选择
///////////////////////////////////////////////
//check : 要实现判断是否被选择的checkbox名称

function checkIfSel(check)
{
	var n=check.length;
	if (n=="undefined"||n==null){
		if (check.checked==false)		
			return false;
		else
			return true;		
	}
	else{
		for (var i=0; i<n; i++)
			if (check[i].checked==true)			
				return true;
		return false;
	}
}

