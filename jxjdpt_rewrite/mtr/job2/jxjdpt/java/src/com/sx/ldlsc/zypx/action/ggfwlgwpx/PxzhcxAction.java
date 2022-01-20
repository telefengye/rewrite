package com.sx.ldlsc.zypx.action.ggfwlgwpx;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.sx.bean.AppBeanUtils;
import com.sx.common.PageNum;
import com.sx.ldlsc.jxjdpt.common.AbsLdlscAction;
import com.sx.ldlsc.jxjdpt.conf.SessionConfig;
import com.sx.ldlsc.zypx.formbean.ggfwlgwpx.PxjhFB;
import com.sx.ldlsc.zypx.valuebean.ggfwlgwpx.PxjhVB;
import com.sx.ldlsc.zypx.ywcl.ggfwlgwpx.PxzhcxYwl;

public class PxzhcxAction extends AbsLdlscAction {
	
	// 培训计划业务类 ，通过此成员来调用业务类方法进行业务处理
	private PxzhcxYwl pxzhcxYwl = PxzhcxYwl.zhcxYwl();
	
	public ActionForward pxjhCx(ActionMapping mapping, ActionForm form,
			 HttpServletRequest request, HttpServletResponse response){
		try{
			SessionConfig sessionConfig = (SessionConfig)request.getSession()
					.getAttribute("sessionConf");
			if(sessionConfig == null){
				return mapping.findForward("returnpage");
			}
			// 复制FB获得的属性复制给VB
			PxjhFB pxjhFB = (PxjhFB)form;
			PxjhVB pxjhVB = new PxjhVB();
			AppBeanUtils.copyProperties(pxjhFB, pxjhVB);
			
			// 调用YWL中的方法来进行查询
			int pageNum = PageNum.getPageNum(request);// 当前页码
			String xzqhdm = sessionConfig.getXzqhdm();
			String ssjb = sessionConfig.getSsjb();
			PxjhVB[] pxjhvbs = pxzhcxYwl.pxjglbCx(pxjhVB, pageNum, xzqhdm, ssjb);
			
			// request域放值，跳转
			request.setAttribute("pxjhFB", pxjhFB);// 查询条件
			request.setAttribute("pxjhvbs", pxjhvbs);// 查询所得到的结果
			request.setAttribute("strPageCount", pxzhcxYwl.getStrPageCount());
			request.setAttribute("strRowsCount", pxzhcxYwl.getStrRowsCount());
			request.setAttribute("strStartNum", pxzhcxYwl.getStrStartNum());
			return mapping.findForward("pxjhlb");
		}catch (Exception e) {
			e.printStackTrace();
			request.setAttribute("exceptionobj", e);
			return mapping.findForward("exceptionpage");
		}
		
	}
}
