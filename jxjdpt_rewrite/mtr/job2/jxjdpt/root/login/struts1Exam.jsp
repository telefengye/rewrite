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
            <td background="../styles/1/right/02_2.jpg"  style="padding-left:3px"  class="rtxttitle">STRUTS 1.0ʹ�ù淶 </td>
            <td width="11" align="right" background="../styles/1/images/right/02_2.jpg"><img src="../styles/1/right/02_4.jpg" width="11" height="24"></td>
          </tr>
        </table>
          <br>
          <table width="100%" height="96%" border="0" align="center" cellpadding="0" cellspacing="0" class="rbox">
            <tr>
              <td align="center" valign="top">
			  <table width="96%" border="0"  cellpadding="0" cellspacing="0">
                <tr>
                  <td height="13" class="mtitle">STRUTS 1.0ʹ�ù淶����</td>
                </tr>
              </table>
                ��������һ���򵥵�¼��ģ����˵��STRUTS1.0ʹ�ù淶����ϸ������μ�������Դ���롣<br>
                <br>
                <table class="table tbline" width="60%">
				 <tr>
                    <td colspan="2" class="tablelist">�����±��е���Ϣ�����С�<span class="red">*</span>����־��Ϊ������� </td>
                  </tr>
				 <tr>
                    <td width="30%" class="tablelist" align="center"><span class="red">* </span>�� ����</td>
                    <td width="70%"><input type="text" name="name" value="" style="width:150px"></td>
                  </tr>
                  <tr>
                    <td align="center" class="tablelist">�� �� </td>
                    <td><select name="sex" style="width:150px">
                          <option value="0"> �� </option>
						  <option value="1"> Ů </option>
                        </select>                    </td>
                  </tr>
                  <tr>
                    <td class="tablelist" align="center"> �� �䣺 </td>
                    <td><input type="text" name="age" value="" style="width:150px"></td>
                  </tr>
                  <tr>
                    <td class="tablelist" align="center"> �� ַ�� </td>
                    <td><input type="text" name="address" value="" style="width:150px"></td>
                  </tr>
				  <tr>
                    <td class="tablelist" align="center"> �� �ţ� </td>
                    <td><input type="text" name="department" value="" style="width:150px"></td>
                  </tr>
				  <tr>
                    <td colspan="2" align="center"><input type="button" value="�� ��" class="button" onClick="setAction()"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="�� ��" class="button" onClick="setReset()"/></td>
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
  //ҳ��У��
  function ini_form(){
     add_ele("name", "10","����",1);
  }

  //�ύ��ť
  function setAction()
  {
  
    if(!autocheck()){
		return false;
	}
    //�Զ�������У��
    if(isNaN(document.form1.age.value )|| eval(document.form1.age.value)<=0){
       alert("����ҪΪ�������������");
       document.form1.age.focus();
       return;
    }
    
  	form1.action="<%=AppConfig.getAPPCONTEXT()%>/Struts1Action.do?method=insert";
	form1.submit();
  }
  
  //���ð�ť
  function setReset()
  {
    if (window.confirm("ȷ��Ҫ������?")){
       form1.reset();
    }
  }
</script>
<script language="javascript" src="../common/js/validator.js"></script>