<!--
####################################################################
#  版   本： 1.0
#  版权所有： 北京北控三兴信息技术有限公司
#  制 作 人： 刘记朋
#  制作日期： 
#  IPO图编号：
#  文 件 名： jxjdgl_cx.jsp
####################################################################
#  修 改 人： 
#  修改原因：
#  修改日期： 
####################################################################
-->
<%@ page contentType="text/html; charset=GBK"%>
<%@page import="com.sx.ldlsc.jxjdpt.conf.SessionConfig"%>
<%@page import="com.sx.ldlsc.jxjdpt.conf.LdlscAppConfig"%>
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
	String xzqhdm = sessionConf.getXzqhdm();            //行政区划代码
	String ssjb = sessionConf.getSsjb();
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<link href="<%=jmfg%>/css/common.css" rel="stylesheet" type="text/css">
<link href="<%=jmfg%>/css/divpage.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/jquery.js"></script>
<script type="text/javascript" 	src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/validator-it.js"></script>
<script type="text/javascript" src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/format.js"></script>
<script type="text/javascript" src="<%=LdlscAppConfig.getAPPCONTEXT()%>/common/js/jquery/ajaxcommon.js"></script>
</head>
<jsp:include page="/common/tools/tyym/czclym.jsp" flush="false">
		<jsp:param name="resid" value="0000840103" />
	</jsp:include>
<body>
<form method="post"  name="form1">

<table width="98%"  border="0" align="center" cellpadding="0" cellspacing="0">
	<tr>
		<td height="20" valign="bottom"><img src="<%=jmfg%>/images/right/now.gif" width="11" height="12">
	当前位置：公共人力资源服务 &gt; 北京市就业见习 &gt; 见习单位管理 &gt; 查询 </td>
	</tr>
	<tr>
		<td valign="bottom" background="<%=jmfg%>/images/right/dsline.gif" height="2"><img src="<%=jmfg%>/images/index/spacer.gif"></td>
	</tr>
	<tr>
		<td height="20" valign="bottom">
			<table border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td background="<%=jmfg%>/images/right/tagm_off_bg.gif" style="padding-left:10px;padding-top:2px"><a href="<%=LdlscAppConfig.getAPPCONTEXT()%>/jxjdpt/jxjdgl/jxjdgl_xg.jsp?" class="link04">见习基地管理</a></td>
								<td><img src="<%=jmfg%>/images/right/tagr_off_x.gif" width="23" height="18" alt=""></td>
							</tr>
						</table>
					</td>
					<td>
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td background="<%=jmfg%>/images/right/tagm_on_bg.gif" style="padding-top:2px" class="white">查询</a></td>
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
			   
     			<%if("1".equals(ssjb)) { %>
     			<select  name="sbqx"style="WIDTH: 100%">
     					<option value="">请选择</option>
     					<option value="110000000000">北京市</option>
						<%=RegionCode.getSectionHtmlData(xzqhdm)%>
					
                </select>
                <%} else { %>
                <select  name="sbqx"style="WIDTH: 100%" disabled=disabled>
						<option value="<%=sessionConf.getXzqhdm()%>"><%=sessionConf.getXzqhmc()%></option>
				</select>
					<%} %>
                </td>
                <td width="18%" align="right">单位名称</td>
                <td width="32%"><input type="text" name="dwmc"style="WIDTH: 100%"></td>
				
              </tr>
              <tr class="line2">
				<td align="right" width="18%">所属行业</td>
                <td width="32%"><select  name="sshy"style="WIDTH: 100%">
                	<option value="">请选择</option>
                	<%=BicOperation.getHtmlData("cdg_industry","")%>
                </select></td>
                <td align="right">单位类型</td>
                <td ><select  name="dwlx"style="WIDTH: 100%">
                	<option value="">请选择</option>
                		<%=CodeOperation.getHtmlCodeData("jxjdpt_d_dwxz","")%>
                </select></td>
              </tr>
     			<tr class="line1">
			   <td width="18%" align="right">上报日期</td>
			   <td width="32%">
			   <input type="text" name="sbrqq" class="dateYmd" style="WIDTH: 100%">
                </td>
                <td width="18%" align="right">至</td>
                <td width="32%"><input type="text" name="sbrqz" class="dateYmd" style="WIDTH: 100%"></td>
              </tr>		
              <tr class="line2">
				<td align="right" width="18%">状态</td>
                <td width="32%"><select type="text" name="lczt" style="WIDTH: 100%">
					<option value="">请选择</option>
					<option value="0">企业申请</option>
					<option value="0_0">区审核通过</option>
					<option value="0_1">区审核未通过</option>
					<option value="3">已发布</option>
				</select></td>
                 <td width="18%" align="right">
           		   不通过原因
              </td>
              <td width="32%" align="right">
              <input type="text" name="btgyy" style="WIDTH: 100%" />
              </td>
              </tr>
              <tr class="line1">
				<td align="right" width="18%">是否有效</td>
                <td width="32%"><select type="text" name="sfyx" style="WIDTH: 100%">
					<option value="">请选择</option>
					<option value="1" selected="selected">是</option>
					<option value="0">否</option>
				</select></td>
                <td width="18%" align="right"></td>
              	<td width="32%" align="right"></td>
              </tr>
       </table> 
	   <br>
      <TABLE width="98%" align="center"
        border=0 cellPadding=0 cellSpacing=1　class="tablebody">
      <TR align="center" >
        <TD height=25 colspan="9" class="line2"><input name="cx1" type="button" class="BUTTONs3" value="查 询" onclick="cx()" >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <INPUT name="cz1" type="button" class="BUTTONs3" onclick="cz()" value="清 空">
          &nbsp;&nbsp;</TD> 
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
        <td valign="bottom">查询结果&nbsp;&nbsp;<span id="totalRocords"></span><font color="red">(点击单位名称可查看详细信息)</font></td>
      </tr>
</table>
<table  id="resTable"  width="98%" border="0" cellpadding="0" cellspacing="1" align="center">
  <tr class="line4">
		<td align="center" width="3%">序号</td>
	<td align="center" width="10%">上报区</td>
	<td align="center" width="18%">单位名称</td>
	<td align="center" width="15%">所属行业</td>
	<td align="center" width="12%">单位类型</td>
	<td align="center" width="12%">上报日期</td>
	<td align="center" width="10%">状态</td>
	<td align="center" width="13%">不通过原因</td>
  </tr>
</table>
<div id="divpage"></div>
</form>
</body>
</html>
<script type="text/javascript">
var xzqhdm = "<%=xzqhdm%>";
$(function(){ 
		doQuery();
});	
	
	//分页查询
var divpage = new DivPage({
		url:"<%=LdlscAppConfig.getAPPCONTEXT()%>/jxjdpt/jxjdgl/JxjdglAction.do?method=jxjdxgCx&flag=1",
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
								.addTD(vbs[i].sbqxmc)
								.addTD("<a style='word-break:break-all;word-wrap:break-word;' href=\"javascript:dwxxxs('" + vbs[i].jdid + "');\"  >"+vbs[i].dwmc+"</a>")
								.addTD(vbs[i].sshy)
								.addTD(vbs[i].dwlx)
								.addTD(vbs[i].sbrq)
								.addTD(vbs[i].lczt)
								.addTD(vbs[i].lczt == '市审核未通过'?vbs[i].btgyy:vbs[i].qbtgyy)
								.appendTo($resTable);
				}
				//if(vbs.length>0) {
				//	$("<tr class=\"line2\" ></tr>").addTD("当页全选->",{colspan:"6",align:"right"})
				//				.addTD("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='checkbox' name='fdsfdgfdg' cboname=\"caozuo\" style='WIDTH: 100%' class='radio'>")
		        //     			.appendTo($resTable);
				//}
			$("#totalRocords").text("共"+data.pageCount+"页/"+data.rowsCount+"条记录");
            $("#divpage").show();
            
	   }else{
		   $("<tr class='line2' align='center'/>").addTD("没有满足条件的查询结果",{colspan:"10"})
		             .appendTo($resTable);
           $("#divpage").hide();
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
function cx()
{
	if(strlength($("[name='dwmc']").val())>128){
		alert("单位名称不能大于64个汉字128个字符");
		return;							
	}
	if($("[name='sbrqq']").val()!="" && $("[name='sbrqz']").val()!=""){
			if($("[name='sbrqq']").val() > $("[name='sbrqz']").val()){
				alert("上报日期止必须大于或等于上报日期起");
				return;
			}
	}
	doQuery();
}
function cz()
{
	<%if("1".equals(sessionConf.getSsjb())){%>
	$("[name='sbqx']").val("");
	<%}%>
	$("[name='sbrqq']").val("");
	$("[name='sbrqz']").val("");
	$("[name='dwmc']").val("");
	$("[name='sshy']").val("");
	$("[name='dwlx']").val("");
	$("[name='lczt']").val("");
}
function dwxxxs(jdid) {
	window.open("<%=LdlscAppConfig.getAPPCONTEXT()%>/jxjdpt/jxjdgl/JxjdglAction.do?method=jxjdxxxsCx&jdid=" + jdid);
}
</script>
