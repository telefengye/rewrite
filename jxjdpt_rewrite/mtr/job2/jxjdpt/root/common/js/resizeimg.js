//=============================================================
//实现图片的同比例缩放 2005-05-20 oyxz 
//=============================================================
function resizeImg(resizepicobj,w){
	var h =0;
	if (resizepicobj.length=="undefined"||resizepicobj.length==null){
		h = (w/resizepicobj.width)*resizepicobj.height;
		resizepicobj.width=w;
		resizepicobj.height=h;
	}else{
		for (var i=0; i<resizepicobj.length; i++){
			h = (w/resizepicobj[i].width)*resizepicobj[i].height;
			resizepicobj[i].width=w;
			resizepicobj[i].height=h;
		}
	}
}
