package com.sx.ldlsc.jxjdpt.formbean.jxbtsh;

import com.sx.bean.AbsFormBean;
import com.sx.ldlsc.jxjdpt.valuebean.jxbtsh.TpVB;

public class JxbtsqFB extends AbsFormBean{
	private String ryid;//人员id
	private String userid;//用户id
	private String sfzhm;//身份证号码
	private String jdid;//基地id
	private String gwid;//岗位id
	private String gw;//岗位名称
	private String dwmc;//单位名称
	private String zzjgdm;//组织机构代码
	private String dshrs;//待审核人数
	private String xm;//姓名
	private String jxzq;//见习周期
	private String sqbtys;//申请补贴月数
	private String xthesys;//系统核算月数
	private String dwmybzje;//单位每月补助金额
	private String dwzbzje;//单位总补助金额
	private String dwsqrqq;//单位申请日期起
	private String dwsqrqz;//单位申请日期止
	private String qshrq;//区审核日期
	private String qshbtyyy;//区审核不同意原因
	private String qshczyid;//区审核操作员id
	private String qshczbmid;//区审核操作部门id
	private String qshczsj;//区审核操作时间
	private String sbzje;//市补助金额
	private String sbarq;//市备案日期
	private String sbabtyyy;//市备案不同意原因
	private String sbaczyid;//市备案操作员id
	private String sbaczbmid;//市备案操作部门id
	private String sbaczsj;//市备案操作时间
	private String lczt;//流程状态
	private String lcztmc;//流程状态名称
	private String tpscid;//图片上传id
	private String sbqx;//上报区县
	private String ssjb;//所属级别
	private String shzt;//审核时区分通过不通过
	
	private String yhkhh;//开户行
	private String hzid;
	
	private String[] sfzhms;
	private String pcrqs;
	private String pcrqz;
	
	private String hzzt;//核准状态
	private String[] cfilename;//客户端名称
	private String[] sfilename;//服务器名称
	
	private String bfzt;//拨付状态
	private String bfhczyid;//拨付函操作员id
	
	private String pcrq;//批次日期
	private String sctpsj;//上传图片时间
	private String sctpsjz;//上传图片时间止
	private String bfhrq;//拨付函日期
	private String btrs;
	
	public String bfhpcnd;
	public String bfhsxh;
	
	private String sctpzt;//上传图片状态
	
	private String bfpch;//拨付批次
	private String spch;//生成拨付批次号
	private String pcsbq;//拨付上报区
	private String jbrq;//pch经办rq
	private String sbfpcid;//bfpcid
	
	
	
	public String getSbfpcid() {
		return sbfpcid;
	}
	public void setSbfpcid(String sbfpcid) {
		this.sbfpcid = sbfpcid;
	}
	private String[] hzids;//汇总ID-bc
	
	
	public String getJbrq() {
		return jbrq;
	}
	public void setJbrq(String jbrq) {
		this.jbrq = jbrq;
	}
	public String getSpch() {
		return spch;
	}
	public void setSpch(String spch) {
		this.spch = spch;
	}
	public String getPcsbq() {
		return pcsbq;
	}
	public void setPcsbq(String pcsbq) {
		this.pcsbq = pcsbq;
	}
	public String getBfpch() {
		return bfpch;
	}
	public void setBfpch(String bfpch) {
		this.bfpch = bfpch;
	}
	public String getSctpzt() {
		return sctpzt;
	}
	public void setSctpzt(String sctpzt) {
		this.sctpzt = sctpzt;
	}
	public String getBfhpcnd() {
		return bfhpcnd;
	}
	public void setBfhpcnd(String bfhpcnd) {
		this.bfhpcnd = bfhpcnd;
	}
	public String getBfhsxh() {
		return bfhsxh;
	}
	public void setBfhsxh(String bfhsxh) {
		this.bfhsxh = bfhsxh;
	}
	public String getBtrs() {
		return btrs;
	}
	public void setBtrs(String btrs) {
		this.btrs = btrs;
	}
	public String getBfhrq() {
		return bfhrq;
	}
	public void setBfhrq(String bfhrq) {
		this.bfhrq = bfhrq;
	}
	
	public String getPcrq() {
		return pcrq;
	}
	public void setPcrq(String pcrq) {
		this.pcrq = pcrq;
	}
	public String getSctpsj() {
		return sctpsj;
	}
	public void setSctpsj(String sctpsj) {
		this.sctpsj = sctpsj;
	}
	public String getSctpsjz() {
		return sctpsjz;
	}
	public void setSctpsjz(String sctpsjz) {
		this.sctpsjz = sctpsjz;
	}
	public String getBfhczyid() {
		return bfhczyid;
	}
	public void setBfhczyid(String bfhczyid) {
		this.bfhczyid = bfhczyid;
	}
	
	public String getBfzt() {
		return bfzt;
	}
	public void setBfzt(String bfzt) {
		this.bfzt = bfzt;
	}
	public String[] getCfilename() {
		return cfilename;
	}
	public void setCfilename(String[] cfilename) {
		this.cfilename = cfilename;
	}
	public String[] getSfilename() {
		return sfilename;
	}
	public void setSfilename(String[] sfilename) {
		this.sfilename = sfilename;
	}
	public String getHzzt() {
		return hzzt;
	}
	public void setHzzt(String hzzt) {
		this.hzzt = hzzt;
	}
	public String getPcrqs() {
		return pcrqs;
	}
	public void setPcrqs(String pcrqs) {
		this.pcrqs = pcrqs;
	}
	public String getPcrqz() {
		return pcrqz;
	}
	public void setPcrqz(String pcrqz) {
		this.pcrqz = pcrqz;
	}
	public String getHzid() {
		return hzid;
	}
	public void setHzid(String hzid) {
		this.hzid = hzid;
	}
	public String[] getSfzhms() {
		return sfzhms;
	}
	public void setSfzhms(String[] sfzhms) {
		this.sfzhms = sfzhms;
	}
	public String getYhkhh() {
		return yhkhh;
	}
	public void setYhkhh(String yhkhh) {
		this.yhkhh = yhkhh;
	}
	public String getShzt() {
		return shzt;
	}
	public void setShzt(String shzt) {
		this.shzt = shzt;
	}
	public String getJxzq() {
		return jxzq;
	}
	public void setJxzq(String jxzq) {
		this.jxzq = jxzq;
	}
	public String getSsjb() {
		return ssjb;
	}
	public void setSsjb(String ssjb) {
		this.ssjb = ssjb;
	}
	public String getSbqx() {
		return sbqx;
	}
	public void setSbqx(String sbqx) {
		this.sbqx = sbqx;
	}
	
	public String getGw() {
		return gw;
	}
	public void setGw(String gw) {
		this.gw = gw;
	}
	public String getXm() {
		return xm;
	}
	public void setXm(String xm) {
		this.xm = xm;
	}
	public String getDwmc() {
		return dwmc;
	}
	public void setDwmc(String dwmc) {
		this.dwmc = dwmc;
	}
	public String getZzjgdm() {
		return zzjgdm;
	}
	public void setZzjgdm(String zzjgdm) {
		this.zzjgdm = zzjgdm;
	}
	public String getDshrs() {
		return dshrs;
	}
	public void setDshrs(String dshrs) {
		this.dshrs = dshrs;
	}
	public String getRyid() {
		return ryid;
	}
	public void setRyid(String ryid) {
		this.ryid = ryid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getSfzhm() {
		return sfzhm;
	}
	public void setSfzhm(String sfzhm) {
		this.sfzhm = sfzhm;
	}
	public String getJdid() {
		return jdid;
	}
	public void setJdid(String jdid) {
		this.jdid = jdid;
	}
	public String getGwid() {
		return gwid;
	}
	public void setGwid(String gwid) {
		this.gwid = gwid;
	}
	public String getSqbtys() {
		return sqbtys;
	}
	public void setSqbtys(String sqbtys) {
		this.sqbtys = sqbtys;
	}
	public String getXthesys() {
		return xthesys;
	}
	public void setXthesys(String xthesys) {
		this.xthesys = xthesys;
	}
	public String getDwmybzje() {
		return dwmybzje;
	}
	public void setDwmybzje(String dwmybzje) {
		this.dwmybzje = dwmybzje;
	}
	public String getDwzbzje() {
		return dwzbzje;
	}
	public void setDwzbzje(String dwzbzje) {
		this.dwzbzje = dwzbzje;
	}

	public String getDwsqrqq() {
		return dwsqrqq;
	}
	public void setDwsqrqq(String dwsqrqq) {
		this.dwsqrqq = dwsqrqq;
	}
	public String getDwsqrqz() {
		return dwsqrqz;
	}
	public void setDwsqrqz(String dwsqrqz) {
		this.dwsqrqz = dwsqrqz;
	}
	public String getQshrq() {
		return qshrq;
	}
	public void setQshrq(String qshrq) {
		this.qshrq = qshrq;
	}
	public String getQshbtyyy() {
		return qshbtyyy;
	}
	public void setQshbtyyy(String qshbtyyy) {
		this.qshbtyyy = qshbtyyy;
	}
	public String getQshczyid() {
		return qshczyid;
	}
	public void setQshczyid(String qshczyid) {
		this.qshczyid = qshczyid;
	}
	public String getQshczbmid() {
		return qshczbmid;
	}
	public void setQshczbmid(String qshczbmid) {
		this.qshczbmid = qshczbmid;
	}
	public String getQshczsj() {
		return qshczsj;
	}
	public void setQshczsj(String qshczsj) {
		this.qshczsj = qshczsj;
	}
	public String getSbzje() {
		return sbzje;
	}
	public void setSbzje(String sbzje) {
		this.sbzje = sbzje;
	}
	public String getSbarq() {
		return sbarq;
	}
	public void setSbarq(String sbarq) {
		this.sbarq = sbarq;
	}
	public String getSbabtyyy() {
		return sbabtyyy;
	}
	public void setSbabtyyy(String sbabtyyy) {
		this.sbabtyyy = sbabtyyy;
	}
	public String getSbaczyid() {
		return sbaczyid;
	}
	public void setSbaczyid(String sbaczyid) {
		this.sbaczyid = sbaczyid;
	}
	public String getSbaczbmid() {
		return sbaczbmid;
	}
	public void setSbaczbmid(String sbaczbmid) {
		this.sbaczbmid = sbaczbmid;
	}
	public String getSbaczsj() {
		return sbaczsj;
	}
	public void setSbaczsj(String sbaczsj) {
		this.sbaczsj = sbaczsj;
	}
	public String getLczt() {
		return lczt;
	}
	public void setLczt(String lczt) {
		this.lczt = lczt;
	}
	public String getLcztmc() {
		return lcztmc;
	}
	public void setLcztmc(String lcztmc) {
		this.lcztmc = lcztmc;
	}
	public String getTpscid() {
		return tpscid;
	}
	public void setTpscid(String tpscid) {
		this.tpscid = tpscid;
	}
	public String[] getHzids() {
		return hzids;
	}
	public void setHzids(String[] hzids) {
		this.hzids = hzids;
	}
	
	
}

