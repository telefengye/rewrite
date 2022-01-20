/*
	text1===sfzhm;
	text2===说明信息（信息）;
*/
function tmxxdy(text1,text2){
	//测试ocx是否加载
	//mytmdy.test(); 
    //OpenPort() 打开打印机,参数是打印机名称，可以输入网络名称
	if (text1=="" || text2=="")
	{
		alert ("对不起,没有要打印的信息!");
		return;
	}
	if (mytmdy.OpenPort("TSC TTP/TDP-243(E)")!=1)
	{
		alert ("打印机加载失败，请检查打印机是否正确！");
		return;
	}
	/*
参数类型为：
a: 字串型別，設定標籤寬度，單位 mm
b: 字串型別，設定標籤高度，單位 mm
c: 字串型別，設定列印速度，(列印速度隨機型不同而有不同的選項)
	1.0: 每秒1.0吋列印速度
	1.5: 每秒1.5吋列印速度
	2.0: 每秒2.0吋列印速度
	3.0: 每秒3.0吋列印速度
	4.0: 每秒4.0吋列印速度
	6.0: 每秒4.0吋列印速度
	8.0: 每秒4.0吋列印速度
	10.0: 每秒4.0吋列印速度
d: 字串型別，設定列印濃度，
	0~15，數字愈大列印結果愈黑
e: 字串型別，設定使用感應器類別
	0 表示使用垂直間距感測器(gap sensor)
	1 表示使用黑標感測器(black mark sensor)
f: 字串型別，設定gap/black mark 垂直間距高度，單位: mm
g: 字串型別，設定gap/black mark 偏移距離，單位: mm，此參數若使用一般標籤時均設為0
//*/
	if (mytmdy.setup("32","24","2","10","0","3","0")!=1)
	{
		alert ("打印参数设置有误，请重新设置！");
		return;
	}
	if (mytmdy.clearbuffer()!=1)
	{
		alert ("清理打印机的缓存有误，请重新清理！");
		return;
	}

/*
a: 字串型別，條碼X方向起始點，以點(point)表示。
(200 DPI，1點=1/8 mm, 300 DPI，1點=1/12 mm)
b: 字串型別，條碼Y方向起始點，以點(point)表示。
	(200 DPI，1點=1/8 mm, 300 DPI，1點=1/12 mm)
c: 字串型別，
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
d: 字串型別，設定條碼高度，高度以點來表示
e: 字串型別，設定是否列印條碼碼文
	0: 不列印碼文
	1: 列印碼文
f: 字串型別，設定條碼旋轉角度
	0: 旋轉0度
	90: 旋轉 90度
	180: 旋轉180度
	270: 旋轉270度
g: 字串型別，設定條碼窄bar 比例因子，請參考TSPL使用手冊
h: 字串型別，設定條碼窄bar 比例因子，請參考TSPL使用手冊
I: 字串型別，條碼內容
//*/
	
	if (mytmdy.barcode("10","30","EAN128","100","1","0","2","4",text1)!=1)
	{
		alert ("条码打印信息设置有误，请重新设置！");
		return;
	}
/*
a: 整數型別，文字X方向起始點，以點(point)表示。
b: 整數型別，文字Y方向起始點，以點(point)表示。
c: 整數型別，字體高度，以點(point)表示。
d: 整數型別，旋轉角度，逆時鐘方向旋轉
	0 ->  0 degree
	90-> 90 degree
	180-> 180 degree
	270-> 270 degree
e: 整數型別，字體外形
	0-> 標準(Normal)
	1-> 斜體(Italic)
	2-> 粗體(Bold)
	3-> 粗斜體(Bold and Italic)
f: 整數型別, 底線
	0-> 無底線
	1-> 加底線
g: 字串型別，字體名稱。如: Arial, Times new Roman, 細名體, 標楷體
h: 字串型別，列印文字內容。
//*/
	if (mytmdy.windowsfont(-20,180,60,0,2,0,"Arial",text2)!=1)
	{
		alert ("条码说明信息设置有误，请重新设置！");
		return;
	}
/*
a: 字串型別，設定列印標籤式數(set)
b: 字串型別，設定列印標籤份數(copy)
//*/
	if (mytmdy.printlabel("1","1")!=1)
	{
		alert ("打印失败！");
		return;
	}
	if (mytmdy.closeport()!=1)
	{
		alert ("关闭打印机失败！");
		return;
	}
}	
