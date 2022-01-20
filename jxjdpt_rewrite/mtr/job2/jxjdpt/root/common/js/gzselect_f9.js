function selectSpecialty_f9(specialtyfiled,path){
	var dx,dy;  
  dy=window.screenLeft+20;
  dx=window.screenTop+0;  
  var rValue,iTem;  
rValue=window.showModalDialog(path+"?selvalue="+specialtyfiled.value,'',"dialogTop="+dx+";dialogLeft="+dy+";dialogHeight=26; dialogWidth=33; status=no");
  if(rValue!=""){
    iTem=rValue.split("&");
    specialtyfiled.options[0].value=iTem[0];
    specialtyfiled.options[0].text=iTem[1];
		if (specialtyfiled.options[0].value==""){
			specialtyfiled.options[0].text="«Î—°‘Òπ§÷÷";
		}
  }    

}