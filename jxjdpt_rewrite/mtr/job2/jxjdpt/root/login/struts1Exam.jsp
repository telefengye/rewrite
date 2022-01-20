<%@ page language="java" contentType="text/html;charset=GBK" pageEncoding="GBK"%>
<%@ page import="com.sx.conf.AppConfig"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	
		<title>struts1.0</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
         <link href="../styles/1/css/common.css" rel="stylesheet" type="text/css">
	</head>

	<body>
		<form action="" name="form1" method="post">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td height="10" background="../styles/1/right/right_top.gif" style="background-position:top; background-repeat:repeat-x;"><img src="../styles/1/spacer.gif" width="1" height="1" ></td>
        <td width="25" rowspan="2" valign="top" background="../styles/1/right/right_rightbg.gif"><img src="../styles/1/right/bg.gif" width="25" height="735"></td>
      </tr>
      <tr>
        <td height="367" align="center" valign="top" style="padding:10px;"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td  width="36" height="24" background="../styles/1/images/right/02_2.jpg"><img src="../styles/1/right/02_1.jpg" width="36" height="24"></td>
            <td background="../styles/1/right/02_2.jpg"  style="padding-left:3px"  class="rtxttitle">STRUTS 1.0使用规范 </td>
            <td width="11" align="right" background="../styles/1/images/right/02_2.jpg"><img src="../styles/1/right/02_4.jpg" width="11" height="24"></td>
          </tr>
        </table>
          <br>
          <table width="100%" height="96%" border="0" align="center" cellpadding="0" cellspacing="0" class="rbox">
            <tr>
              <td align="center" valign="top">
			  <table width="96%" border="0"  cellpadding="0" cellspacing="0">
                <tr>
                  <td height="13" class="mtitle">STRUTS 1.0使用规范例子</td>
                </tr>
              </table>
                本例是以一个简单的录入模块来说明STRUTS1.0使用规范。详细代码请参见本例子源代码。<br>
                <br>
                <table class="table tbline" width="60%">
				 <tr>
                    <td colspan="2" class="tablelist">请填下表中的信息（带有“<span class="red">*</span>”标志的为必添项）： </td>
                  </tr>
				 <tr>
                    <td width="30%" class="tablelist" align="center"><span class="red">* </span>姓 名：</td>
                    <td width="70%"><input type="text" name="name" value="" style="width:150px"></td>
                  </tr>
                  <tr>
                    <td align="center" class="tablelist">性 别： </td>
                    <td><select name="sex" style="width:150px">
                          <option value="0"> 男 </option>
						  <option value="1"> 女 </option>
                        </select>                    </td>
                  </tr>
                  <tr>
                    <td class="tablelist" align="center"> 年 龄： </td>
                    <td><input type="text" name="age" value="" style="width:150px"></td>
                  </tr>
                  <tr>
                    <td class="tablelist" align="center"> 地 址： </td>
                    <td><input type="text" name="address" value="" style="width:150px"></td>
                  </tr>
				  <tr>
                    <td class="tablelist" align="center"> 部 门： </td>
                    <td><input type="text" name="department" value="" style="width:150px"></td>
                  </tr>
				  <tr>
                    <td colspan="2" align="center"><input type="button" value="提 交" class="button" onClick="setAction()"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="重 置" class="button" onClick="setReset()"/></td>
                  </tr>
                </table>
              <p>&nbsp;</p></td>
            </tr>
          </table></td>
      </tr>
    </table>
	 </form>
	</body>	
</html>

<script language="JavaScript" type="text/javascript">
  //页面校验
  function ini_form(){
     add_ele("name", "10","姓名",1);
  }

  //提交按钮
  function setAction()
  {
  
    if(!autocheck()){
		return false;
	}
    //自定义特殊校验
    if(isNaN(document.form1.age.value )|| eval(document.form1.age.value)<=0){
       alert("年龄要为大于零的整数！");
       document.form1.age.focus();
       return;
    }
    
  	form1.action="<%=AppConfig.getAPPCONTEXT()%>/Struts1Action.do?method=insert";
	form1.submit();
  }
  
  //重置按钮
  function setReset()
  {
    if (window.confirm("确定要重置吗?")){
       form1.reset();
    }
  }
</script>
<script language="javascript" src="../common/js/validator.js"></script>