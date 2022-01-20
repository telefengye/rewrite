package com.sx.ldlsc.jxjdpt.service.jxbtsh;

import java.text.DecimalFormat;

import com.sx.codetable.CodeOperation;
import com.sx.ldlsc.jxjdpt.common.AbsLdlscService;
import com.sx.ldlsc.jxjdpt.common.DateHelper;
import com.sx.ldlsc.jxjdpt.common.StringHelper;
import com.sx.ldlsc.jxjdpt.dao.jxbtsh.JxbtCxDao;
import com.sx.ldlsc.jxjdpt.valuebean.jxbtsh.JxbtsqVB;

public class JxbtcxService extends AbsLdlscService {
	private JxbtCxDao jxbtCxDao;
	
	public void setJxbtCxDao(JxbtCxDao jxbtCxDao){
		this.jxbtCxDao = jxbtCxDao;
	}
	
	/**
	 * 见习补贴列表查询
	 * @param cxvb
	 * @param pagenum
	 * @return vbs
	 * @throws Exception
	 */
	public JxbtsqVB[] jxbtcx(JxbtsqVB cxvb , int pagenum) throws Exception{
		// 调用dao层的方法
		JxbtsqVB vbs[] = jxbtCxDao.jxbtcx(cxvb, pagenum);
		// 对其中的一些输数据进行修饰
		if(null != vbs && vbs.length > 0){
			for(int i = 0; i < vbs.length; i++){
				DecimalFormat format = new DecimalFormat("#.00");
				vbs[i].setSbqxmc(CodeOperation.getCodeName("jxjdpt_d_xzqh", vbs[i].getSbqx()));
				vbs[i].setLcztmc(CodeOperation.getCodeName("jxjdpt_d_btsqlczt", vbs[i].getLczt()));
				vbs[i].setDwsqrq(DateHelper.dateFmt(vbs[i].getDwsqrq(), "yyyyMMddHHmmss", "yyyy-MM-dd"));
				vbs[i].setJxkssj(DateHelper.dateFmt(vbs[i].getJxkssj(), "yyyyMMdd", "yyyy-MM-dd"));
				vbs[i].setJxjssj(DateHelper.dateFmt(vbs[i].getJxjssj().substring(0, 8), "yyyyMMdd", "yyyy-MM-dd"));
				if(StringHelper.isNotEmpty(vbs[i].getSbzje())){
					vbs[i].setSbzje(format.format(Double.parseDouble(vbs[i].getSbzje())/100));
				}else{
					vbs[i].setSbzje("--");
				}
			}
		}
		// dao继承后封装的方法，获取分页需要使用的参数
		this.intPageCount = jxbtCxDao.getIntPageCount();
		this.intRowsCount = jxbtCxDao.getIntRowsCount();
		this.intStartNum = jxbtCxDao.getIntStartNum();
		return vbs;
	}

}
