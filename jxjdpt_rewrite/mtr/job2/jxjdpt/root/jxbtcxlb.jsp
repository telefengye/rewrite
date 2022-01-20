<!--   
####################################################################
#  版   本： 1.0
#  版权所有： 北京北控三兴信息技术有限公司
#  制 作 人：wangjiahao
#  制作日期： 
#  IPO图编号：
#  文 件 名： jxbtcxlb.jsp
####################################################################
#  修 改 人： 
#  修改原因：
#  修改日期： 
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
	//检查session中的值
	//===================================================================

	SessionConfig sessionConf = (SessionConfig) request.getSession().getAttribute("sessionConf");
	if (sessionConf==null){
	  response.sendRedirect(LdlscAppConfig.getAPPCONTEXT()+"/frames/return.htm");
	  return;
	}
	String jmfg = sessionConf.getJmfg();                //界面风格
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
	当前位置：公共人力资源服务 &gt; 北京市就业见习 &gt; 见习补贴管理 &gt; 见习补贴查询 </td>
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
								<td background="<%=jmfg%>/images/right/tagm_on_bg.gif" style="padding-left:10px;padding-top:2px" class="white">查询</td>
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
	  <td valign="bottom">  查询条件</td>
  </tr>
</table>
    <table width="98%" border="0" cellspacing="1" cellpadding="0"align="center">
              <tr class="line1">
			   <td width="18%" align="right">上报区</td>
			   <td width="32%">
			   
     			<select  name="sbqx"style="WIDTH: 100%" <%="1".equals(sessionConf.getSsjb())?"":"disabled" %>>
                	<option value="">请选择</option>
							<%=CodeOperation.getHtmlCodeData("jxjdpt_d_xzqh","1".equals(sessionConf.getSsjb())?"":xzqhdm)%>
                </select>
               
                </td>
                <td width="18%" align="right">流程状态</td>
                <td width="32%">
			   
     			<select  name="lczt" style="WIDTH: 100%" >
                	<option value="">请选择</option>
							<%=CodeOperation.getHtmlCodeData("jxjdpt_d_btsqlczt","")%>
                </select>
               
                </td>
               </tr>
              <tr class="line1">
			   <td width="18%" align="right">申请日期</td>
			   <td width="32%">
			   <input type="text" name="dwsqrqq" class="dateYmd" style="WIDTH: 100%">
                </td>
                <td width="18%" align="right">至</td>
                <td width="32%"><input type="text" name="dwsqrqz" class="dateYmd" style="WIDTH: 100%"></td>
              </tr>
               <tr class="line1">
			   <td width="18%" align="right">统一社会信用代码</td>
                <td width="32%"><input type="text" name="zzjgdm"style="WIDTH: 100%"></td> 
                </td>
                 <td width="18%" align="right">单位名称</td>
                <td width="32%"><input type="text" name="dwmc"style="WIDTH: 100%"></td> 
              </tr>
           
              
              <tr class="line1">
			   <td width="18%" align="right">身份证号码</td>
			   <td width="32%"><input type="text" name="sfzhm"  style="WIDTH: 100%">
                </td>
                <td width="18%" align="right">姓名</td>
                <td width="32%"><input type="text" name="xm"  style="WIDTH: 100%"></td>
              </tr>
	
       </table> 
	   <br>
      <TABLE width="98%" align="center"
        border=0 cellPadding=0 cellSpacing=1　class="tablebody">
      <TR align="center" >
        <TD height=25 colspan="9" class="line2"><input name="cx1" type="button" class="BUTTONs3" value="查 询" onclick="cx()" >&nbsp;&nbsp;
          <input name="cz1" type="button" class="BUTTONs3"  value="清 空" onclick="cz()">&nbsp;&nbsp;
          <input name="dc" type="button" class="BUTTONs3"  value="导 出" onclick="dc1()">&nbsp;&nbsp;
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
        <td valign="bottom">查询结果&nbsp;&nbsp;<span id="totalRocords"></span></td>
      </tr>
</table>
<table  id="resTable"  width="98%" border="0" cellpadding="0" cellspacing="1" align="center">
  <tr class="line4">
	<td align="center" width="5%" >序号</td>
	<td align="center" width="10%" >姓名</td>
	<td align="center" width="12%" >身份证号码</td>
	<td align="center" width="12%" >所属区</td>
	<td align="center" width="12%" >单位名称</td>
	<td align="center" width="10%" >统一社会信用代码</td>
	<td align="center" width="10%" >市补贴资金(元)</td>
	<td align="center" width="15%" >申请日期</td>
	<td align="center" width="12%" >流程状态</td>
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

	//分页查询
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
			$("#totalRocords").text("共"+data.pageCount+"页/"+data.rowsCount+"条记录");
            $("#divpage").show();
            var fileref = document.createElement("script");
            fileref.setAttribute("type","text/javascript");
            fileref.setAttribute("src","<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/validator-it.js");
            document.getElementsByTagName("head")[0].appendChild(fileref);
            //$.getscript("<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/validator-it.js");
	   }else{
		   $("<tr class=\"line2\" ></tr>").addTD("没有满足条件的查询结果",{colspan:"9"})
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
字符串长度
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
		alert("单位名称不能大于64个汉字128个字符");
		return;							
	}
	if($("[name='dwsqrqq']").val()!="" && $("[name='dwsqrqz']").val()!=""){
			if($("[name='dwsqrqq']").val() > $("[name='dwsqrqz']").val()){
				alert("申请日期止必须大于或等于申请日期起");
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
