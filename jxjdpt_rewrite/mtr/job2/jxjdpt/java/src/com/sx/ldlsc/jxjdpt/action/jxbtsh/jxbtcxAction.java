package com.sx.ldlsc.jxjdpt.action.jxbtsh;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionMapping;

import com.sx.bean.AppBeanUtils;
import com.sx.common.PageNum;
import com.sx.ldlsc.jxjdpt.common.AbsLdlscAction;
import com.sx.ldlsc.jxjdpt.common.AjaxJsonResult;
import com.sx.ldlsc.jxjdpt.conf.SessionConfig;
import com.sx.ldlsc.jxjdpt.formbean.jxbtsh.JxbtsqFB;
import com.sx.ldlsc.jxjdpt.service.jxbtsh.JxbtcxService;
import com.sx.ldlsc.jxjdpt.valuebean.jxbtsh.JxbtsqVB;

public class jxbtcxAction extends AbsLdlscAction {
	// 注入service
	private JxbtcxService jxbtcxService;
	
	public void setJxbtcxService(JxbtcxService jxbtcxService){
		this.jxbtcxService = jxbtcxService;
	}
	
	public void Jxbtcx(ActionMapping mapping, ActionForm actionForm,
			HttpServletRequest request, HttpServletResponse response){
		AjaxJsonResult ajaxJsonResult = new AjaxJsonResult();
		try{
			SessionConfig sessionConfig = (SessionConfig)request.getSession()
				                         .getAttribute("sessionConf");
			// session对象为空，返回input页面
			if(sessionConfig == null){
				// 登陆超时
				ajaxJsonResult.setLoginTimeOut();
			}else{
				JxbtsqFB fb =(JxbtsqFB) actionForm;
				// 对接收的数据对象进行解码
				AjaxJsonResult.decode(fb);
				
				JxbtsqVB vb = new JxbtsqVB();
				// 将接收到的fb属性复制给vb
				AppBeanUtils.copyProperties(vb, fb);
				JxbtsqVB[] vbs = null;
				
				if(!"1".equals(sessionConfig.getSsjb())){
					vb.setSbqx(sessionConfig.getXzqhdm());
				}
				vb.setSsjb(sessionConfig.getSsjb());
				int pagenum = PageNum.getPageNum(request);
				
				// 去调用service层的方法，得到结果集，（包括分页的一些参数）
				vbs = this.jxbtcxService.jxbtcx(vb, pagenum);
				ajaxJsonResult.setStartNum(jxbtcxService.getIntStartNum() + "");
				ajaxJsonResult.setPageCount(jxbtcxService.getIntPageCount() + "");
				ajaxJsonResult.setRowsCount(jxbtcxService.getIntRowsCount() + "");
				
				// 通过map带着结果vbs返回
				Map map = new HashMap();
				map.put("vbs", vbs);
				ajaxJsonResult.setReturnData(map);
			}
			
		}catch (Exception e) {
			ajaxJsonResult.setSysException(e);
		}finally{
			try {
				// 通过输入输出流传输
				response.setContentType("text/html;charset=GBK");
				String res = AjaxJsonResult.getJson(ajaxJsonResult);
				PrintWriter pw = response.getWriter();
				pw.write(res);
				pw.flush();
				pw.close();
			} catch (Exception e) {
			}
		}
	}

}
