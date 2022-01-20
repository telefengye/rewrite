package com.sx.ldlsc.jxjdpt.dao.jxbtsh;

import java.util.ArrayList;
import java.util.List;

import com.sx.db.AbsDaoSupport;
import com.sx.exception.DbException;
import com.sx.ldlsc.jxjdpt.common.DateHelper;
import com.sx.ldlsc.jxjdpt.common.StringHelper;
import com.sx.ldlsc.jxjdpt.conf.LdlscAppConfig;
import com.sx.ldlsc.jxjdpt.valuebean.jxbtsh.JxbtsqVB;

public class JxbtCxDao extends AbsDaoSupport {
	/**
	 * 见习补贴列表查询
	 * @param cxvb
	 * @param pagenum
	 * @return
	 * @throws DbException
	 */
	public JxbtsqVB[] jxbtcx(JxbtsqVB cxvb, int pagenum) throws DbException{
		if(cxvb != null){
			List list = new ArrayList();
			String sql=
					"select dwb.jdid,sqb.dwsqrq," +
					"             dwb.sbqx," + 
					"             dwb.dwmc," + 
					"             dwb.zzjgdm," + 
					"             sqb.sbzje," + 
					"             ryb.sfzhm," + 
					"             ryb.xm," + 
					"             sqb.lczt, "+
					"       	  zyb.jxkssj," + 
					"       	  nvl(zyb.jyczsj,zyb.jxjssj) jxjssj,yhxxb.hm,yhxxb.yhzh,yhxxb.yhkhh,yhxxb.qykhhhh" + 
					"	from jxjdpt_jxbtsqb sqb, jxjdpt_dwxxb dwb left join jxjdpt_qykhhxxb yhxxb on yhxxb.tyshxydm= dwb.zzjgdm,"
					+ " jxjdpt_zphryxxb ryb,( select zyid,sqid,jdid,gwid,sfzhm,jxkssj,jxjssj,jyczsj,zyb.zyzt,? from jxjdpt_zphdwzyb zyb   union  select  zyid,sqid,jdid,gwid,sfzhm,jxkssj,jxjssj,jyczsj,zyb.zyzt,MAX(gdczsj) over(partition by sfzhm)  from jxjdpt_zphdwzyb_gd zyb    ) zyb,jxjdpt_gwxxb gwb " +
					"             where dwb.jdid = sqb.jdid and sqb.jdid=zyb.jdid and sqb.sfzhm=ryb.sfzhm and gwb.gwid=sqb.gwid and zyb.sfzhm=ryb.sfzhm" + 
					"             and zyb.gwid = sqb.gwid" + 
					"             and ryb.userid = sqb.userid" + 
					"             and ryb.ryid = sqb.ryid and sqb.zyid=zyb.zyid";
			list.add("");
			// 所属级别 ，不是市级
			if(!"1".equals(cxvb.getSsjb())){
				if(StringHelper.isNotEmpty(cxvb.getSsqx())){
					sql += " and dwb.sbqx = ? ";
					list.add(cxvb.getSbqx());
				}
			}else {
				// 不为空按照条件查询
				if(StringHelper.isNotEmpty(cxvb.getSbqx())){
					sql += " and dwb.sbqx = ? ";
					list.add(cxvb.getSbqx());
				}
			}
			// 单位申请日期大于申请日期起
			if(StringHelper.isNotEmpty(cxvb.getDwsqrqq())){
				sql += " and sqb.dwsqrq >= ? ";
				list.add(DateHelper.getZeroSecond(cxvb.getDwsqrqq()));
				
			}
			// 单位申请日期小于申请日期止
			if(StringHelper.isNotEmpty(cxvb.getDwsqrqz())){
				sql += " and sqb.dwsqrq <= ? ";
				list.add(DateHelper.getlastSecond(cxvb.getDwsqrqz()));
			}
			// 单位名称
			if(StringHelper.isNotEmpty(cxvb.getDwmc())){
				sql += " and dwb.dwmc = ? ";
				list.add(cxvb.getDwmc());
			}
			// 组织机构代码
			if(StringHelper.isNotEmpty(cxvb.getZzjgdm())){
				sql += " and dwb.zzjgdm = ? ";
				list.add(cxvb.getZzjgdm());
			}
			// 流程状态
			if(StringHelper.isNotEmpty(cxvb.getLczt())){
				sql += "and sqb.lczt = ?";
				list.add(cxvb.getLczt());
			}
			// 身份证号码
			if(StringHelper.isNotEmpty(cxvb.getSfzhm())){
				sql += " and  ryb.sfzhm = ?";
				list.add(cxvb.getSfzhm());
			}
			// 姓名
			if(StringHelper.isNotEmpty(cxvb.getXm())){
				sql += " and ryb.xm = ? ";
				list.add(cxvb.getXm());
			}
			if(StringHelper.isNotEmpty(cxvb.getYhkhh())){
				sql += " order by sqb.dwsqrq ";
			}
			sql += " order by sqb.dwsqrq ";
			
			String[] condition = new String[list.size()];
			list.toArray(condition);
			list.clear();
			JxbtsqVB[] vbs = (JxbtsqVB[])this.querySqlPageForArray(sql, condition, LdlscAppConfig.getPAGECOUNTBYH(), pagenum,JxbtsqVB.class);
			return vbs;
		}
		return null;
	}

}
