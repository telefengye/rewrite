package com.sx.ldlsc.jxjdpt.service.jxjdgl;

import com.sx.codetable.CodeOperation;
import com.sx.codetable.BicOperation;
import com.sx.ldlsc.jxjdpt.common.AbsLdlscService;
import com.sx.ldlsc.jxjdpt.common.DateHelper;
import com.sx.ldlsc.jxjdpt.common.StringHelper;
import com.sx.ldlsc.jxjdpt.dao.jxjdgl.JxjdglDao;
import com.sx.ldlsc.jxjdpt.valuebean.Jxjdgl.JxjdglVB;

public class JxjdglService extends AbsLdlscService{
	private JxjdglDao jxjdglDao;
	
	public void setJxjdglDao(JxjdglDao jxjdglDao){
		this.jxjdglDao = jxjdglDao;
	}
	
	public JxjdglVB[] jxjdxgCX(JxjdglVB vb, int pagenum, String xzqhdm, String flag) throws Exception{
		JxjdglVB cxvb = vb;
		JxjdglVB vbs[] = jxjdglDao.jxjdxgCx(cxvb, pagenum, xzqhdm, flag);
		if(null != vbs && vbs.length > 0){
			for(int i = 0; i < vbs.length; i++){
				vbs[i].setSbqx(vbs[i].getSbqx());
				vbs[i].setSbqxmc(BicOperation.getCodeName("cdg_regioncode",vbs[i].getSbqx()));
				vbs[i].setDwlx(CodeOperation.getCodeName("jxjdpt_d_dwxz",vbs[i].getDwlx()));
				vbs[i].setSshy(BicOperation.getCodeName("cdg_industry",vbs[i].getSshy()));
				if(StringHelper.isNotEmpty(vbs[i].getQshczbmid())){
					vbs[i].setQshczsj(DateHelper.dateFmt(vbs[i].getQshczsj(), "yyyymmdd", "yyyymmdd"));
				}
				if(StringHelper.isNotEmpty(vbs[i].getFbrq())){
					vbs[i].setFbrq(DateHelper.dateFmt(vbs[i].getFbrq(), "yyyymmdd", "yyyymmdd"));
				}
				if(null != flag && "1".equals(flag)){
					String lczt = vbs[i].getLczt();
					String shyj = vbs[i].getShyj();
					if("0".equals(lczt)) {
						vbs[i].setLczt("企业申请");
					} else if("1".equals(lczt)) {
						vbs[i].setLczt("已上报");
					} else if("3".equals(lczt)) {
						vbs[i].setLczt("已发布");
					} else if("0_0".equals(lczt)){
						vbs[i].setLczt("区审核通过");
					}else if("0_1".equals(lczt)){
						vbs[i].setLczt("区审核未通过");
					}else if("2".equals(lczt)){
						vbs[i].setLczt("市审核通过");
					}else if("2_1".equals(lczt)){
						vbs[i].setLczt("市审核未通过");
					}
				}else if(StringHelper.isEmpty(flag) || "2".equals(flag)){
					String lczt = vbs[i].getLczt();
					if("0".equals(lczt)) {
						vbs[i].setLcztmc("企业申请");
					} else if("1".equals(lczt)) {
						vbs[i].setLcztmc("已上报");
					} else if("3".equals(lczt)) {
						vbs[i].setLcztmc("已发布");
					} else if("0_0".equals(lczt)){
						vbs[i].setLcztmc("区审核通过");
					}else if("0_1".equals(lczt)){
						vbs[i].setLcztmc("区审核未通过");
					}else if("2".equals(lczt)){
						vbs[i].setLcztmc("市审核通过");
					}else if("2_1".equals(lczt)){
						vbs[i].setLcztmc("市审核未通过");
					}
				}
			}
		}
		this.intPageCount = jxjdglDao.getIntPageCount();
		this.intRowsCount = jxjdglDao.getIntRowsCount();
		this.intStartNum = jxjdglDao.getIntStartNum();
		return vbs;
	}
}
