<!--   
####################################################################
#  ��   ���� 1.0
#  ��Ȩ���У� ��������������Ϣ�������޹�˾
#  �� �� �ˣ�wangjiahao
#  �������ڣ� 
#  IPOͼ��ţ�
#  �� �� ���� jxbtcxlb.jsp
####################################################################
#  �� �� �ˣ� 
#  �޸�ԭ��
#  �޸����ڣ� 
####################################################################
-->
<%@page import="java.text.DecimalFormat"%>
<%@ page contentType="text/html; charset=GBK"%>
<%@page import="com.sx.ldlsc.conf.SessionConfig"%>
<%@page import="com.sx.ldlsc.conf.LdlscAppConfig"%>
<%@ page import="com.sx.codetable.BicOperation" %>
<%@ page import="com.sx.codetable.CodeOperation" %>
<%@ page import="com.sx.ldlsc.jxjdpt.common.DateHelper" %>
<%@ page import="com.sx.common.RegionCode" %>
<%
  	//===================================================================
	//���session�е�ֵ
	//===================================================================

	SessionConfig sessionConf = (SessionConfig) request.getSession().getAttribute("sessionConf");
	if (sessionConf==null){
	  response.sendRedirect(LdlscAppConfig.getAPPCONTEXT()+"/frames/return.htm");
	  return;
	}
	String jmfg = sessionConf.getJmfg();                //������
	String xzqhdm = sessionConf.getXzqhdm();
	String ssjb = sessionConf.getSsjb();
	DecimalFormat format = new DecimalFormat("#.00");
	
	
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>chdwdj_1</title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<link href="<%=jmfg%>/css/common.css" rel="stylesheet" type="text/css">
<link href="<%=jmfg%>/css/divpage.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/jquery.js"></script>
<script type="text/javascript" 	src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/validator-it.js"></script>
<script type="text/javascript" src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/format.js"></script>
<script type="text/javascript" src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/ajaxcommon.js"></script>

</head>
<jsp:include page="/common/tools/tyym/czclym.jsp" flush="false">
	<jsp:param name="resid" value="" />
</jsp:include>
<body>
<form method="post"  name="form1">

<table width="98%"  border="0" align="center" cellpadding="0" cellspacing="0">
	<tr>
		<td height="20" valign="bottom"><img src="<%=jmfg%>/images/right/now.gif" width="11" height="12">
	��ǰλ�ã�����������Դ���� &gt; �����о�ҵ��ϰ &gt; ��ϰ�������� &gt; ��ϰ������ѯ </td>
	</tr>
	<tr><td valign="bottom" background="<%=jmfg%>/images/right/dsline.gif" height="2"><img src="<%=jmfg%>/images/index/spacer.gif"></td>
	</tr>
	<tr>
		<td height="20" valign="bottom">
			<table border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td background="<%=jmfg%>/images/right/tagm_on_bg.gif" style="padding-left:10px;padding-top:2px" class="white">��ѯ</td>
								<td><img src="<%=jmfg%>/images/right/tagr_on_end.gif" width="23" height="18" alt=""></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
 </table>
 <table width="98%" border="0" cellpadding="0" cellspacing="0" class="title" align="center">
  <tr>
	<td width="38">
	<table width="38" border="0" cellspacing="0" cellpadding="0">
	  <tr>
		<td width="30"><img src="<%=jmfg%>/css/bb_d.gif"></td>
	  </tr>
	</table></td>
	  <td valign="bottom">  ��ѯ����</td>
  </tr>
</table>
    <table width="98%" border="0" cellspacing="1" cellpadding="0"align="center">
              <tr class="line1">
			   <td width="18%" align="right">�ϱ���</td>
			   <td width="32%">
			   
     			<select  name="sbqx"style="WIDTH: 100%" <%="1".equals(sessionConf.getSsjb())?"":"disabled" %>>
                	<option value="">��ѡ��</option>
							<%=CodeOperation.getHtmlCodeData("jxjdpt_d_xzqh","1".equals(sessionConf.getSsjb())?"":xzqhdm)%>
                </select>
               
                </td>
                <td width="18%" align="right">����״̬</td>
                <td width="32%">
			   
     			<select  name="lczt" style="WIDTH: 100%" >
                	<option value="">��ѡ��</option>
							<%=CodeOperation.getHtmlCodeData("jxjdpt_d_btsqlczt","")%>
                </select>
               
                </td>
               </tr>
              <tr class="line1">
			   <td width="18%" align="right">��������</td>
			   <td width="32%">
			   <input type="text" name="dwsqrqq" class="dateYmd" style="WIDTH: 100%">
                </td>
                <td width="18%" align="right">��</td>
                <td width="32%"><input type="text" name="dwsqrqz" class="dateYmd" style="WIDTH: 100%"></td>
              </tr>
               <tr class="line1">
			   <td width="18%" align="right">ͳһ������ô���</td>
                <td width="32%"><input type="text" name="zzjgdm"style="WIDTH: 100%"></td> 
                </td>
                 <td width="18%" align="right">��λ����</td>
                <td width="32%"><input type="text" name="dwmc"style="WIDTH: 100%"></td> 
              </tr>
           
              
              <tr class="line1">
			   <td width="18%" align="right">���֤����</td>
			   <td width="32%"><input type="text" name="sfzhm"  style="WIDTH: 100%">
                </td>
                <td width="18%" align="right">����</td>
                <td width="32%"><input type="text" name="xm"  style="WIDTH: 100%"></td>
              </tr>
	
       </table> 
	   <br>
      <TABLE width="98%" align="center"
        border=0 cellPadding=0 cellSpacing=1��class="tablebody">
      <TR align="center" >
        <TD height=25 colspan="9" class="line2"><input name="cx1" type="button" class="BUTTONs3" value="�� ѯ" onclick="cx()" >&nbsp;&nbsp;
          <input name="cz1" type="button" class="BUTTONs3"  value="�� ��" onclick="cz()">&nbsp;&nbsp;
          <input name="dc" type="button" class="BUTTONs3"  value="�� ��" onclick="dc1()">&nbsp;&nbsp;
          </TD> 
</table>
<br>
<table width="98%" border="0" cellpadding="0" cellspacing="0" align="center"  class="title">
      <tr>
        <td width="30">
		<table  border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td ><img src="<%=jmfg%>/css/bb_d.gif"></td>
          </tr>
        </table>
        </td>
        <td valign="bottom">��ѯ���&nbsp;&nbsp;<span id="totalRocords"></span></td>
      </tr>
</table>
<table  id="resTable"  width="98%" border="0" cellpadding="0" cellspacing="1" align="center">
  <tr class="line4">
	<td align="center" width="5%" >���</td>
	<td align="center" width="10%" >����</td>
	<td align="center" width="12%" >���֤����</td>
	<td align="center" width="12%" >������</td>
	<td align="center" width="12%" >��λ����</td>
	<td align="center" width="10%" >ͳһ������ô���</td>
	<td align="center" width="10%" >�в����ʽ�(Ԫ)</td>
	<td align="center" width="15%" >��������</td>
	<td align="center" width="12%" >����״̬</td>
  </tr>
  </table>

<div id="divpage"></div>
<div>
</div>
<table align="center">
<tr>
<td align="center">

</td>
</tr>
</table>
</form>
</body>
</html>
<script>
	$(function(){ 
		doQuery();
	});
	function dc1()
	{
		form1.action="<%=LdlscAppConfig.getAPPCONTEXT()%>/jxjdpt/jxbtsh/jxbtcxlb_raq.jsp?ssjb="+<%=ssjb%>;
		form1.submit();
	}

	//��ҳ��ѯ
var divpage = new DivPage({
		url:"<%=LdlscAppConfig.getAPPCONTEXT()%>/jxjdpt/jxbtsh/JxbtcxAction.do?method=Jxbtcx",
		data : encodeURI($("form").serialize()),
		showPageData:function(data){
		if(data && data.returnCode!="1"){
		    if(data.returnMsg){
		    	alert(data.returnMsg);
		    	return;
		    }    
	   }
			var $resTable = $("#resTable");
			$resTable.find("tr:gt(0)").remove();
			 if(data && data.returnData.vbs){
				var vbs = data.returnData.vbs;
				for(var i=0;i<vbs.length;i++){
					var $tableBodyTr = $("<tr class=\"line"+(i%2+1)+"\" ></tr>");
					$tableBodyTr.addTD(Number(data.startNum)+i)
								.addTD("<a  href=\"javascript:dwxx('"+vbs[i].jdid+"','"+vbs[i].sfzhm+"');\"> "+vbs[i].xm+"</a>")
								.addTD(vbs[i].sfzhm)			
								.addTD(vbs[i].sbqxmc)
								.addTD(vbs[i].dwmc)
								.addTD(vbs[i].zzjgdm)
								.addTD(vbs[i].sbzje)
								.addTD(vbs[i].dwsqrq)
								.addTD(vbs[i].lcztmc)
 								
								.appendTo($resTable);
				}
			$("#totalRocords").text("��"+data.pageCount+"ҳ/"+data.rowsCount+"����¼");
            $("#divpage").show();
            var fileref = document.createElement("script");
            fileref.setAttribute("type","text/javascript");
            fileref.setAttribute("src","<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/validator-it.js");
            document.getElementsByTagName("head")[0].appendChild(fileref);
            //$.getscript("<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/validator-it.js");
	   }else{
		   $("<tr class=\"line2\" ></tr>").addTD("û�����������Ĳ�ѯ���",{colspan:"9"})
		             .appendTo($resTable);
           $("#divpage").hide();
	   }
	   if($("[name='shyj']").length==0)
			{
				$("#qx").hide();
			}
			else
			{
				$("#qx").show();
			}
			
		}
	});
	
function doQuery(){
	divpage.generatePager();
}

	/**
�ַ�������
*/
function strlength(str){
  unLen=str.length;
  bLen=str.length;
  for(i=0;i<unLen;i++)
  {
	if(str.charCodeAt(i)>255) bLen++;
  }
  return bLen;
}

function cx(){
	 if(strlength($("[name='dwmc']").val())>128){
		alert("��λ���Ʋ��ܴ���64������128���ַ�");
		return;							
	}
	if($("[name='dwsqrqq']").val()!="" && $("[name='dwsqrqz']").val()!=""){
			if($("[name='dwsqrqq']").val() > $("[name='dwsqrqz']").val()){
				alert("��������ֹ������ڻ��������������");
				return;
			}
	} 
	doQuery();
}
function cz()
{
	if("1"=="<%=ssjb%>"){
	$("[name='sbqx']").val("");
	}
	$("[name='lczt']").val("");
	$("[name='dwsqrqq']").val("");
	$("[name='dwsqrqz']").val("");
	$("[name='zzjgdm']").val("");
	$("[name='dwmc']").val("");
	$("[name='sfzhm']").val("");
	$("[name='xm']").val("");
	
	
}


function dwxx(jdid,sfzhm) {
	window.open("<%=LdlscAppConfig.getAPPCONTEXT()%>/jxjdpt/jxbtsh/JxbtcxAction.do?method=jxbtryCx&jdid="+jdid+"&sfzhm="+sfzhm);
}


</script>
