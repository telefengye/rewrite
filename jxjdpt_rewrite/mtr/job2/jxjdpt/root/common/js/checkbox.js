

////////////////////////////////////
//ʵ�ֵ�ѡ�Ļ���
///////////////////////////////////
//rows : �ܹ��ĸ���
//index���ڼ���
//selcheckbox��Ҫѡ�е�checkbox
//uncheckbox�� ��Ҫѡ�е�checkbox
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
//ʵ�ֶ��checkbox��ȫѡ
//�����checkbox��disabledΪtrue,��������
////////////////////////////////////////
//check : Ҫʵ��ȫѡ������checkbox����
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
//ʵ�ֶ��checkbox��ȫ��ѡ
//�����checkbox��disabledΪtrue,��������
////////////////////////////////////////
//check : Ҫʵ��ȫ��ѡ������checkbox����

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
//��һ��checkboxʵ�ֶ��checkbox��ȫѡ��ȫ��ѡ
///////////////////////////////////////////////
//check : Ҫʵ��ȫѡ��ȫ��ѡ������checkbox����
//checkac:����ʵ�ָ��¼���checkbox����

function checkAC(check,checkac)
{
	if (checkac.checked)
		checkAll(check);
	else
		checkCancel(check);
}

////////////////////////////////////////////////
//������checkboxʵ�ֶ��checkbox��ȫѡ��ȫ��ѡ
///////////////////////////////////////////////
//check : Ҫʵ��ȫѡ��ȫ��ѡ������checkbox����
//checka:����ʵ��ȫѡ�¼���checkbox����
//checkc:����ʵ��ȫ��ѡ�¼���checkbox����

function checkMAC(check,checka,checkc)
{
	if (checka.checked)
	{
		selCheck(1,1,checka,checkc);
		checkAll(check);
	}
}

////////////////////////////////////////////////
//������checkboxʵ�ֶ��checkbox��ȫѡ��ȫ��ѡ
///////////////////////////////////////////////
//check : Ҫʵ��ȫѡ��ȫ��ѡ������checkbox����
//checkc:����ʵ��ȫ��ѡ�¼���checkbox����
//checka:����ʵ��ȫѡ�¼���checkbox����

function checkMCA(check,checkc,checka)
{
	if (checkc.checked)
	{
		selCheck(1,1,checkc,checka);
		checkCancel(check);
	}
}

////////////////////////////////////////////////
//ʵ���ж�checkbox�Ƿ�ѡ��
///////////////////////////////////////////////
//check : Ҫʵ���ж��Ƿ�ѡ���checkbox����

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

