/*
	text1===sfzhm;
	text2===˵����Ϣ����Ϣ��;
*/
function tmxxdy(text1,text2){
	//����ocx�Ƿ����
	//mytmdy.test(); 
    //OpenPort() �򿪴�ӡ��,�����Ǵ�ӡ�����ƣ�����������������
	if (text1=="" || text2=="")
	{
		alert ("�Բ���,û��Ҫ��ӡ����Ϣ!");
		return;
	}
	if (mytmdy.OpenPort("TSC TTP/TDP-243(E)")!=1)
	{
		alert ("��ӡ������ʧ�ܣ������ӡ���Ƿ���ȷ��");
		return;
	}
	/*
��������Ϊ��
a: �ִ��̈́e���O���˻`���ȣ���λ mm
b: �ִ��̈́e���O���˻`�߶ȣ���λ mm
c: �ִ��̈́e���O����ӡ�ٶȣ�(��ӡ�ٶ��S�C�Ͳ�ͬ���в�ͬ���x�)
	1.0: ÿ��1.0����ӡ�ٶ�
	1.5: ÿ��1.5����ӡ�ٶ�
	2.0: ÿ��2.0����ӡ�ٶ�
	3.0: ÿ��3.0����ӡ�ٶ�
	4.0: ÿ��4.0����ӡ�ٶ�
	6.0: ÿ��4.0����ӡ�ٶ�
	8.0: ÿ��4.0����ӡ�ٶ�
	10.0: ÿ��4.0����ӡ�ٶ�
d: �ִ��̈́e���O����ӡ��ȣ�
	0~15������������ӡ�Y������
e: �ִ��̈́e���O��ʹ�øБ���e
	0 ��ʾʹ�ô�ֱ�g��Мy��(gap sensor)
	1 ��ʾʹ�úژ˸Мy��(black mark sensor)
f: �ִ��̈́e���O��gap/black mark ��ֱ�g��߶ȣ���λ: mm
g: �ִ��̈́e���O��gap/black mark ƫ�ƾ��x����λ: mm���˅�����ʹ��һ��˻`�r���O��0
//*/
	if (mytmdy.setup("32","24","2","10","0","3","0")!=1)
	{
		alert ("��ӡ���������������������ã�");
		return;
	}
	if (mytmdy.clearbuffer()!=1)
	{
		alert ("�����ӡ���Ļ�����������������");
		return;
	}

/*
a: �ִ��̈́e���l�aX������ʼ�c�����c(point)��ʾ��
(200 DPI��1�c=1/8 mm, 300 DPI��1�c=1/12 mm)
b: �ִ��̈́e���l�aY������ʼ�c�����c(point)��ʾ��
	(200 DPI��1�c=1/8 mm, 300 DPI��1�c=1/12 mm)
c: �ִ��̈́e��
	128Code 128, switching code subset A, B, C automatically
	128MCode 128, switching code subset A, B, C manually.
	EAN128Code 128, switching code subset A, B, C automatically
	25Interleaved 2 of 5
	25CInterleaved 2 of 5 with check digits
	39Code 39
	39CCode 39 with check digits
	93Code 93
	EAN13 EAN 13
	EAN13+2 EAN 13 with 2 digits add-on
	EAN13+5 EAN 13 with 5 digits add-on
	EAN8 EAN 8
	EAN8+2 EAN 8 with 2 digits add-on
	EAN8+5 EAN 8 with 5 digits add-on
	CODACodabar
	POSTPostnet
	UPCAUPC-A
	UPCA+2UPC-A with 2 digits add-on
	UPCA+5UPC-A with 5 digits add-on
	UPCEUPC-E
	UPCE+2UPC-E with 2 digits add-on
	UPCE+5UPC-E with 5 digits add-on
d: �ִ��̈́e���O���l�a�߶ȣ��߶����c���ʾ
e: �ִ��̈́e���O���Ƿ���ӡ�l�a�a��
	0: ����ӡ�a��
	1: ��ӡ�a��
f: �ִ��̈́e���O���l�a���D�Ƕ�
	0: ���D0��
	90: ���D 90��
	180: ���D180��
	270: ���D270��
g: �ִ��̈́e���O���l�aխbar �������ӣ�Ո����TSPLʹ���փ�
h: �ִ��̈́e���O���l�aխbar �������ӣ�Ո����TSPLʹ���փ�
I: �ִ��̈́e���l�a����
//*/
	
	if (mytmdy.barcode("10","30","EAN128","100","1","0","2","4",text1)!=1)
	{
		alert ("�����ӡ��Ϣ�����������������ã�");
		return;
	}
/*
a: �����̈́e������X������ʼ�c�����c(point)��ʾ��
b: �����̈́e������Y������ʼ�c�����c(point)��ʾ��
c: �����̈́e�����w�߶ȣ����c(point)��ʾ��
d: �����̈́e�����D�Ƕȣ���r犷������D
	0 ->  0 degree
	90-> 90 degree
	180-> 180 degree
	270-> 270 degree
e: �����̈́e�����w����
	0-> �˜�(Normal)
	1-> б�w(Italic)
	2-> ���w(Bold)
	3-> ��б�w(Bold and Italic)
f: �����̈́e, �׾�
	0-> �o�׾�
	1-> �ӵ׾�
g: �ִ��̈́e�����w���Q����: Arial, Times new Roman, �����w, �˿��w
h: �ִ��̈́e����ӡ���փ��ݡ�
//*/
	if (mytmdy.windowsfont(-20,180,60,0,2,0,"Arial",text2)!=1)
	{
		alert ("����˵����Ϣ�����������������ã�");
		return;
	}
/*
a: �ִ��̈́e���O����ӡ�˻`ʽ��(set)
b: �ִ��̈́e���O����ӡ�˻`�ݔ�(copy)
//*/
	if (mytmdy.printlabel("1","1")!=1)
	{
		alert ("��ӡʧ�ܣ�");
		return;
	}
	if (mytmdy.closeport()!=1)
	{
		alert ("�رմ�ӡ��ʧ�ܣ�");
		return;
	}
}	
