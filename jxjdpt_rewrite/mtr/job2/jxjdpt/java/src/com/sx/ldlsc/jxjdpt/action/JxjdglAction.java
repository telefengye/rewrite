package com.sx.ldlsc.jxjdpt.action;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.sx.bean.AppBeanUtils;
import com.sx.common.PageNum;
import com.sx.ldlsc.jxjdpt.common.AbsLdlscAction;
import com.sx.ldlsc.jxjdpt.common.AjaxJsonResult;
import com.sx.ldlsc.jxjdpt.common.StringHelper;
import com.sx.ldlsc.jxjdpt.conf.SessionConfig;
import com.sx.ldlsc.jxjdpt.formbean.Jxjdgl.JxjdglFB;
import com.sx.ldlsc.jxjdpt.service.jxjdgl.JxjdglService;
import com.sx.ldlsc.jxjdpt.valuebean.Jxjdgl.JxjdglVB;

public class JxjdglAction extends AbsLdlscAction {
	// 类似于spring中的bean的注入， 来注入service
	private JxjdglService jxjdglService;
	
	public void setJxjdglService(JxjdglService jxjdglService){
		this.jxjdglService = jxjdglService;
	}
	
	/**见习基地修改/删除/上报列表/查询页面
	 * @param mapping
	 * @param actionForm
	 * @param request
	 * @param response
	 */
	public ActionForward jxjdxgCx(ActionMapping mapping, 
			ActionForm actionForm, HttpServletRequest request,HttpServletResponse response){
		AjaxJsonResult ajaxJsonResult = new AjaxJsonResult();
		try{
			SessionConfig sessionConf = (SessionConfig) request.getSession()
					.getAttribute("sessionConf");
			// session对象为空，返回input页面
			
			if(sessionConf == null){
				//登陆超时
				ajaxJsonResult.setLoginTimeOut();
			}else{
				String xzqhdm = sessionConf.getXzqhdm();
				JxjdglFB fb = (JxjdglFB)actionForm;
				//进行解码
				AjaxJsonResult.decode(fb);
				JxjdglVB vb = new JxjdglVB();
				AppBeanUtils.copyProperties(vb, fb);
				JxjdglVB[] vbs = null;
				String tjflag = request.getParameter("tjflag");
				String flag = request.getParameter("flag");
				if(null != tjflag && "2".equals(tjflag)){
					flag = "2";
				}
				int pagenum = PageNum.getPageNum(request);
				vbs = this.jxjdglService.jxjdxgCX(vb, pagenum, xzqhdm, flag);
				ajaxJsonResult.setStartNum(jxjdglService.getIntStartNum()+"");
				ajaxJsonResult.setPageCount(jxjdglService.getIntPageCount()+"");
				ajaxJsonResult.setRowsCount(jxjdglService.getIntRowsCount()+"");
				Map map = new HashMap();
				map.put("vbs", vbs);
				ajaxJsonResult.setReturnData(map);
			}
		}catch (Exception e) {
			//logger.error("ErrorMessage:{}", e.getMessage());
			ajaxJsonResult.setSysException(e);
		}finally{
			try {
				response.setContentType("text/html;charset=GBK");
				String res = AjaxJsonResult.getJson(ajaxJsonResult);
				PrintWriter pw = response.getWriter();
				pw.write(res);
				pw.flush();
				pw.close();
			} catch (Exception e2) {
			}
		}
		
		
		return null;
		
	}
	
}
