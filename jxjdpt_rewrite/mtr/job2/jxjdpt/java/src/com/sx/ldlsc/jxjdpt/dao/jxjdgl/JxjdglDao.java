package com.sx.ldlsc.jxjdpt.dao.jxjdgl;

import java.util.ArrayList;
import java.util.List;

import com.sx.db.AbsDaoSupport;
import com.sx.exception.DbException;
import com.sx.ldlsc.jxjdpt.common.DateHelper;
import com.sx.ldlsc.jxjdpt.common.StringHelper;
import com.sx.ldlsc.jxjdpt.conf.LdlscAppConfig;
import com.sx.ldlsc.jxjdpt.valuebean.Jxjdgl.JxjdglVB;

/**见习基地修改/删除/上报列表/查询
 * @param cxvb
 * @param pagenum
 * @param xzqhdm
 * @param flag
 * @return
 */
public class JxjdglDao extends AbsDaoSupport {
	public JxjdglVB[] jxjdxgCx(JxjdglVB cxvb, int pagenum, String xzqhdm, String flag) throws DbException{
		Object[] objects=null;
		String now = DateHelper.getNow("yyyyMMdd");
		if(null!=cxvb)
		{
			List list = new ArrayList();
			String sql="select a.jdid,a.sbqx,a.dwmc,a.sshy,a.dwlx,a.lczt,a.qshczsj ,a.fbrq ,a.zzjgdm,a.dwbh,a.shyj,a.btgyy,a.qshyj,a.qbtgyy,"
				+"(select count(b.gwid) from jxjdpt_gwxxb b where a.jdid=b.jdid ) ylrgws,(select count(c.grbh) from jxjdpt_yxjxdwxxb c where a.jdid=c.jdid ) ylrrys"
				+"  from jxjdpt_dwxxb a  "
				+" where 1=1 and nvl(a.sfyx,?)=? ";
			list.add("1");
			list.add("1");
			if(null != flag && "1".equals(flag)) {
				if(StringHelper.isNotEmpty(cxvb.getSfyx())){
					if("0".equals(StringHelper.toTrim(cxvb.getSfyx())))
						sql += " and a.pzrqz<? ";
					else
						sql += " and (a.pzrqz>=? or a.pzrqz is null)";
					list.add(now);
				}
				if(!"110000000000".equals(xzqhdm)) {
					sql += " and a.sbqx=? ";
					list.add(xzqhdm);
				}
				
			} else if(null != flag && "2".equals(flag)) {
				sql="select a.jdid,a.sbqx,a.dwmc,a.sshy,a.dwlx,a.lczt,a.qshczsj ,a.fbrq,a.zzjgdm,a.dwbh,a.shyj, "
					+"(select count(b.gwid) from jxjdpt_gwxxb b where a.jdid=b.jdid ) ylrgws,(select count(c.grbh) from jxjdpt_yxjxdwxxb c where a.jdid=c.jdid ) ylrrys"
					+"  from jxjdpt_dwxxb a  "
					+" where 1=1 and nvl(a.sfyx,?)=? ";
				list.add("1");
				list.add("1");
				sql += " and (a.pzrqz>=? or a.pzrqz is null)";
				list.add(now);
				sql += " and a.sbqx=? and a.lczt=? ";
				list.add(xzqhdm);
				list.add("0");
			} else {//见习单位管理查询
				if("110000000000".equals(xzqhdm)) {
					sql += " and (a.pzrqz>=? or a.pzrqz is null)";
					list.add(now);
				} else {
					sql += " and a.sbqx=? and a.lczt in(?,?) ";
					list.add(xzqhdm);
//					list.add("0");
					list.add("0_0");
					list.add("3");
//					list.add("0_1");
//					list.add("2_1");
				}
			}
			
			if(StringHelper.isNotEmpty(cxvb.getSbqx()))
			{
				sql+=" and a.sbqx =? ";
				list.add(cxvb.getSbqx());
			}
			if(StringHelper.isNotEmpty(cxvb.getDwmc()))
			{
				sql+=" and a.dwmc like ? ";
				list.add("%"+cxvb.getDwmc()+"%");
			}
			if(StringHelper.isNotEmpty(cxvb.getSshy()))
			{
				sql+=" and a.sshy =? ";
				list.add(cxvb.getSshy());
			}
			if(StringHelper.isNotEmpty(cxvb.getDwlx()))
			{
				sql+=" and a.dwlx =? ";
				list.add(cxvb.getDwlx());
			}
			if(StringHelper.isNotEmpty(cxvb.getSbrqq()))
			{
				sql+=" and substr(a.lrczsj,0,8) >=? ";
				list.add(DateHelper.dateFmt(cxvb.getSbrqq(),"yyyy-MM-dd","yyyyMMdd"));
			}
			if(StringHelper.isNotEmpty(cxvb.getSbrqz()))
			{
				sql+=" and substr(a.lrczsj,0,8) <=? ";
				list.add(DateHelper.dateFmt(cxvb.getSbrqz(),"yyyy-MM-dd","yyyyMMdd"));
			}
			
			
			if(StringHelper.isNotEmpty(cxvb.getShrqq()))
			{
				sql+=" and substr(a.qshczsj,0,8) >=? ";
				list.add(DateHelper.dateFmt(cxvb.getShrqq(),"yyyy-MM-dd","yyyyMMdd"));
			}
			if(StringHelper.isNotEmpty(cxvb.getShrqz()))
			{
				sql+=" and substr(a.qshczsj,0,8) <=? ";
				list.add(DateHelper.dateFmt(cxvb.getShrqz(),"yyyy-MM-dd","yyyyMMdd"));
			}
			if(StringHelper.isNotEmpty(cxvb.getFbrqq()))
			{
				sql+=" and substr(a.fbrq,0,8) >=? ";
				list.add(DateHelper.dateFmt(cxvb.getFbrqq(),"yyyy-MM-dd","yyyyMMdd"));
			}
			if(StringHelper.isNotEmpty(cxvb.getFbrqz()))
			{
				sql+=" and substr(a.fbrq,0,8) <=? ";
				list.add(DateHelper.dateFmt(cxvb.getFbrqz(),"yyyy-MM-dd","yyyyMMdd"));
			}
			
			
			if(StringHelper.isNotEmpty(cxvb.getBtgyy())){
				sql+=" and a.btgyy like ?";
				list.add("%"+cxvb.getBtgyy()+"%");
			}

			if(StringHelper.isNotEmpty(cxvb.getLczt()))
			{
				sql+=" and a.lczt =? ";
				list.add(cxvb.getLczt());
			}
			sql+=" order by a.qshczsj asc";
	
			String[] condition = new String[list.size()];
			list.toArray(condition);
			list.clear();
			objects = this.querySqlPageForArray(sql,condition,LdlscAppConfig.getPAGECOUNTBYH(),pagenum,JxjdglVB.class);
		}
		return (JxjdglVB[])objects;
	}

}
