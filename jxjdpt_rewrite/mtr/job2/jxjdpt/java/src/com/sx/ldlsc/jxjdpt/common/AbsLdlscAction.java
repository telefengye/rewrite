/**
 * 
 */
package com.sx.ldlsc.jxjdpt.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionRedirect;

import com.sx.action.AbsDispatchAction;

import com.sx.ldlsc.jxjdpt.conf.SessionConfig;
import com.sx.utility.StringTools;

/**
 * @author admin
 *
 */
public abstract class AbsLdlscAction extends AbsDispatchAction {

	/**
	 * 
	 */
	public AbsLdlscAction() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	/**
	 * 特殊字符检查
	 * @param actionMapping
	 * @param actionForm
	 * @param httpServletRequest
	 * @param httpServletResponse
	 * @return
	 */
	public ActionForward execute(ActionMapping actionMapping,
			ActionForm actionForm, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		try {
			/**
			 * 检查formBean中的特殊字符
			 */
			SessionConfig sessionConf = (SessionConfig) httpServletRequest.getSession().getAttribute("sessionConf");
			String tmpstr=StringTools.toTrim(SpecCharCheck.checkBean4Ora(actionForm));
			if(!tmpstr.equals("")){
				ActionRedirect redirect = new ActionRedirect(actionMapping.findForward("sqlin"));
				httpServletRequest.getSession().setAttribute("sqlinmsg",tmpstr);
				tmpstr+="("+this.getClass().toString()+")";
				BizLog.write("表单特殊字符检查","特殊字符",tmpstr,sessionConf);
				return redirect;
			}
			return super.execute(actionMapping, actionForm, httpServletRequest,
					httpServletResponse);
		} catch (Exception e) {
			e.printStackTrace();
			return actionMapping.findForward(actionMapping.getInput());
		}
	}


	
	/**
	 * 
	 * @param actionMapping
	 * @param actionForm
	 * @param httpServletRequest
	 * @param httpServletResponse
	 * @return
	 */
//	public ActionForward redirectToSqlin(ActionMapping actionMapping,
//			ActionForm actionForm, HttpServletRequest httpServletRequest,
//			HttpServletResponse httpServletResponse){
//		ActionRedirect redirect = new ActionRedirect(actionMapping.findForward("sqlin"));
//		return redirect;
//		
//	}

}
