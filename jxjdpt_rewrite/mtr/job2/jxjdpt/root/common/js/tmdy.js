
var oldPrinter;
function setPrint(newPrinter){
    var DftPrinterIndex
	DftPrinterIndex=bksxwb.bksxPrinter.GetPrinterInfo();//???????
	bksxwb.bksxPrinter.SetDefaultPrinter(newPrinter);//?????????????
	return DftPrinterIndex;
}
function getPrint(){
    var dqPrinter
	dqPrinter=bksxwb.bksxPrinter.GetPrinterInfo();//???????
	if(oldPrinter != dqPrinter){
	   bksxwb.bksxPrinter.SetDefaultPrinter(oldPrinter);//????????????
	}
}
/*
	text1===sfzhm;
	text2===????????????????;
*/
function tmxxdy(text1,text2,newPrinter){
	//????ocx????????
	//mytmdy.test(); 
    //OpenPort() ??????????,??????????????????????????????????
	if (text1=="" || text2=="")
	{
		alert ("??????,????????????????!");
		return;
	}
	oldPrinter = setPrint(newPrinter);
	if (mytmdy.OpenPort(newPrinter)!=1)
	{
		alert ("??????????????????????????????????????");
		return;
	}
	/*
????????????
a: ???????e???O?????`?????????? mm
b: ???????e???O?????`?????????? mm
c: ???????e???O????????????(?????????S?C?????????????????x??)
	1.0: ????1.0??????????
	1.5: ????1.5??????????
	2.0: ????2.0??????????
	3.0: ????3.0??????????
	4.0: ????4.0??????????
	6.0: ????4.0??????????
	8.0: ????4.0??????????
	10.0: ????4.0??????????
d: ???????e???O????????????
	0~15???????????????Y??????
e: ???????e???O???????????????e
	0 ?????????????g?????y??(gap sensor)
	1 ???????????????y??(black mark sensor)
f: ???????e???O??gap/black mark ?????g????????????: mm
g: ???????e???O??gap/black mark ???????x??????: mm?????????????????????`?r???O??0
//*/
	if (mytmdy.setup("32","24","2","10","0","3","0")!=1)
	{
		alert ("??????????????????????????????");
		return;
	}
	if (mytmdy.clearbuffer()!=1)
	{
		alert ("??????????????????????????????????");
		return;
	}

/*
a: ???????e???l?aX?????????c?????c(point)??????
(200 DPI??1?c=1/8 mm, 300 DPI??1?c=1/12 mm)
b: ???????e???l?aY?????????c?????c(point)??????
	(200 DPI??1?c=1/8 mm, 300 DPI??1?c=1/12 mm)
c: ???????e??
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
d: ???????e???O???l?a?????????????c??????
e: ???????e???O???????????l?a?a??
	0: ???????a??
	1: ?????a??
f: ???????e???O???l?a???D????
	0: ???D0??
	90: ???D 90??
	180: ???D180??
	270: ???D270??
g: ???????e???O???l?a??bar ????????????????TSPL????????
h: ???????e???O???l?a??bar ????????????????TSPL????????
I: ???????e???l?a????
//*/
	
	if (mytmdy.barcode("10","30","EAN128","100","1","0","2","4",text1)!=1)
	{
		alert ("??????????????????????????????????");
		return;
	}
/*
a: ???????e??????X?????????c?????c(point)??????
b: ???????e??????Y?????????c?????c(point)??????
c: ???????e?????w?????????c(point)??????
d: ???????e?????D?????????r?????????D
	0 ->  0 degree
	90-> 90 degree
	180-> 180 degree
	270-> 270 degree
e: ???????e?????w????
	0-> ????(Normal)
	1-> ???w(Italic)
	2-> ???w(Bold)
	3-> ?????w(Bold and Italic)
f: ???????e, ????
	0-> ?o????
	1-> ??????
g: ???????e?????w???Q????: Arial, Times new Roman, ?????w, ?????w
h: ???????e????????????????
//*/
	if (mytmdy.windowsfont(-20,180,60,0,2,0,"Arial",text2)!=1)
	{
		alert ("??????????????????????????????????");
		return;
	}
/*
a: ???????e???O?????????`????(set)
b: ???????e???O?????????`????(copy)
//*/
	if (mytmdy.printlabel("1","1")!=1)
	{
		alert ("??????????");
		return;
	}
	if (mytmdy.closeport()!=1)
	{
		alert ("????????????????");
		return;
	}

}
	
function getTmPrinter(printerArray)
{
	var inum; 
	inum=bksxwb.bksxPrinter.intPrinterCount;
	for(var i=0; i<inum; i++)
	{
		for(var j=0;j<printerArray.length;j++)
		{
			if(bksxwb.bksxPrinter.strDeviceName(i)==printerArray[j])
				return printerArray[j];
		}
	}
	return null;
}