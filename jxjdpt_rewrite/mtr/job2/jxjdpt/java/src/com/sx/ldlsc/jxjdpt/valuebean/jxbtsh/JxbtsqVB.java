package com.sx.ldlsc.jxjdpt.valuebean.jxbtsh;


import com.sx.bean.AbsValueBean;

public class JxbtsqVB extends AbsValueBean{
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
	private String jxkssj;//见习开始时间		
	private String jxjssj;//见习结束时间
	
	private String sqbtys;//申请补贴月数
	private String xthesys;//系统核算月数
	private String dwmybzje;//单位每月补助金额
	private String dwzbzje;//单位总补助金额
	private String dwsqrq;//单位申请日期
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
	private String sbqxmc;//上报区县
	private String sjly;//数据来源
	private TpVB[] pztps;//凭证图片
	private TpVB[] kqjls;//考勤记录图片
	private TpVB[] bzmxs;//补助明细图片
	private JxbtsqVB[] jxxyxxs;//就业见习协议书
	private String shzt;//审核时区分通过不通过
	
	private String zyid;//招用id
	private String qshyj;
	private String sbayj;
	
	private String yhkhh;//开户行
	
	private String hzid;//汇总id
	
	private String[] sfzhms;
	private String pcrq;//批次日期
	private String pcrqs;//批次日期始
	private String pcrqz;//批次日期止
	private String dws;//单位数
	private String btrs;//补贴人数
	private String zbtje;//总补贴金额
	private String hzzt;//核准状态
	private TpVB[] hzscTps;//汇总上传图片
	private String[] cfilename;//客户端名称
	private String[] sfilename;//服务器名称
	private String sctpsj;//上传图片时间
	private String sctpsjz;//上传图片时间止
	private String bfzt;//拨付状态
	private String bfhczyid;//拨付函操作员id
	private String ssqx;//所属区县 
	
	private String hzczsj;
	private String bfhpcnd;
	private String bfhsxh;
	private String bfhrq;
	
	private String fddbr;//法定代表人
	private String bgdh;//办公电话
	private String sshy;//所属行业
	private String dwlx;//单位类型
	private String lxr;//联系人
	private String dwdz;//单位地址
	private String dwyx;//单位邮箱
	private String dwlxdh2;//单位联系电话
	private String sqsj;//申请时间
	private String sctpzt;//上传图片状态
	
	private String clientname;//客户端名称
	private String servername;//服务器名称
	
	private String bfpch;//拨付批次
	private String spch;//生成拨付批次号
	private String pcsbq;//拨付上报区
	private String jbrq;//pch经办rq
	private String[] hzids;//汇总ID-bc
	private String sbfpcid;//bfpcid
	private String bfwhrq;//bfpcid
	private String bfwhrz;//bfpcid
	
	
	
	
	public String getBfwhrq() {
		return bfwhrq;
	}
	public void setBfwhrq(String bfwhrq) {
		this.bfwhrq = bfwhrq;
	}
	public String getBfwhrz() {
		return bfwhrz;
	}
	public void setBfwhrz(String bfwhrz) {
		this.bfwhrz = bfwhrz;
	}
	public String getSbfpcid() {
		return sbfpcid;
	}
	public void setSbfpcid(String sbfpcid) {
		this.sbfpcid = sbfpcid;
	}
	public String[] getHzids() {
		return hzids;
	}
	public void setHzids(String[] hzids) {
		this.hzids = hzids;
	}
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
	public String getClientname() {
		return clientname;
	}
	public void setClientname(String clientname) {
		this.clientname = clientname;
	}
	public String getServername() {
		return servername;
	}
	public void setServername(String servername) {
		this.servername = servername;
	}
	public JxbtsqVB[] getJxxyxxs() {
		return jxxyxxs;
	}
	public void setJxxyxxs(JxbtsqVB[] jxxyxxs) {
		this.jxxyxxs = jxxyxxs;
	}
	public String getSctpzt() {
		return sctpzt;
	}
	public void setSctpzt(String sctpzt) {
		this.sctpzt = sctpzt;
	}
	public String getSqsj() {
		return sqsj;
	}
	public void setSqsj(String sqsj) {
		this.sqsj = sqsj;
	}
	public String getFddbr() {
		return fddbr;
	}
	public void setFddbr(String fddbr) {
		this.fddbr = fddbr;
	}
	public String getBgdh() {
		return bgdh;
	}
	public void setBgdh(String bgdh) {
		this.bgdh = bgdh;
	}
	public String getSshy() {
		return sshy;
	}
	public void setSshy(String sshy) {
		this.sshy = sshy;
	}
	public String getDwlx() {
		return dwlx;
	}
	public void setDwlx(String dwlx) {
		this.dwlx = dwlx;
	}
	public String getLxr() {
		return lxr;
	}
	public void setLxr(String lxr) {
		this.lxr = lxr;
	}
	public String getDwdz() {
		return dwdz;
	}
	public void setDwdz(String dwdz) {
		this.dwdz = dwdz;
	}
	public String getDwyx() {
		return dwyx;
	}
	public void setDwyx(String dwyx) {
		this.dwyx = dwyx;
	}
	public String getDwlxdh2() {
		return dwlxdh2;
	}
	public void setDwlxdh2(String dwlxdh2) {
		this.dwlxdh2 = dwlxdh2;
	}
	public String getSsqx() {
		return ssqx;
	}
	public void setSsqx(String ssqx) {
		this.ssqx = ssqx;
	}
	public String getBfhrq() {
		return bfhrq;
	}
	public void setBfhrq(String bfhrq) {
		this.bfhrq = bfhrq;
	}
	public String getHzczsj() {
		return hzczsj;
	}
	public void setHzczsj(String hzczsj) {
		this.hzczsj = hzczsj;
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
	public String getSctpsjz() {
		return sctpsjz;
	}
	public void setSctpsjz(String sctpsjz) {
		this.sctpsjz = sctpsjz;
	}
	public String getZbtje() {
		return zbtje;
	}
	public void setZbtje(String zbtje) {
		this.zbtje = zbtje;
	}
	public String getSctpsj() {
		return sctpsj;
	}
	public void setSctpsj(String sctpsj) {
		this.sctpsj = sctpsj;
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
	public TpVB[] getHzscTps() {
		return hzscTps;
	}
	public void setHzscTps(TpVB[] hzscTps) {
		this.hzscTps = hzscTps;
	}
	public String getHzzt() {
		return hzzt;
	}
	public void setHzzt(String hzzt) {
		this.hzzt = hzzt;
	}
	public String getDws() {
		return dws;
	}
	public void setDws(String dws) {
		this.dws = dws;
	}
	public String getBtrs() {
		return btrs;
	}
	public void setBtrs(String btrs) {
		this.btrs = btrs;
	}
	public String getPcrq() {
		return pcrq;
	}
	public void setPcrq(String pcrq) {
		this.pcrq = pcrq;
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
	
	public String[] getSfzhms() {
		return sfzhms;
	}
	public void setSfzhms(String[] sfzhms) {
		this.sfzhms = sfzhms;
	}
	
	public String getHzid() {
		return hzid;
	}
	public void setHzid(String hzid) {
		this.hzid = hzid;
	}
	public String getYhkhh() {
		return yhkhh;
	}
	public void setYhkhh(String yhkhh) {
		this.yhkhh = yhkhh;
	}
	
	
	public String getQshyj() {
		return qshyj;
	}
	public void setQshyj(String qshyj) {
		this.qshyj = qshyj;
	}
	public String getSbayj() {
		return sbayj;
	}
	public void setSbayj(String sbayj) {
		this.sbayj = sbayj;
	}
	public String getZyid() {
		return zyid;
	}
	public void setZyid(String zyid) {
		this.zyid = zyid;
	}
	public String getShzt() {
		return shzt;
	}
	public void setShzt(String shzt) {
		this.shzt = shzt;
	}
	public String getSbqxmc() {
		return sbqxmc;
	}
	public void setSbqxmc(String sbqxmc) {
		this.sbqxmc = sbqxmc;
	}
	public String getSjly() {
		return sjly;
	}
	public void setSjly(String sjly) {
		this.sjly = sjly;
	}
	public String getJxkssj() {
		return jxkssj;
	}
	public void setJxkssj(String jxkssj) {
		this.jxkssj = jxkssj;
	}
	public String getJxjssj() {
		return jxjssj;
	}
	public void setJxjssj(String jxjssj) {
		this.jxjssj = jxjssj;
	}
	public TpVB[] getPztps() {
		return pztps;
	}
	public void setPztps(TpVB[] pztps) {
		this.pztps = pztps;
	}
	public TpVB[] getKqjls() {
		return kqjls;
	}
	public void setKqjls(TpVB[] kqjls) {
		this.kqjls = kqjls;
	}
	public TpVB[] getBzmxs() {
		return bzmxs;
	}
	public void setBzmxs(TpVB[] bzmxs) {
		this.bzmxs = bzmxs;
	}
	private String tplx;
	
	private String ssjb;//所属级别
	
	public String getTplx() {
		return tplx;
	}
	public void setTplx(String tplx) {
		this.tplx = tplx;
	}
	public String getJxzq() {
		return jxzq;
	}
	public void setJxzq(String jxzq) {
		this.jxzq = jxzq;
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
	public void setSsjb(String ssjb) {
		this.ssjb = ssjb;
	}
	public String getSsjb() {
		return ssjb;
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
	public String getXm() {
		return xm;
	}
	public void setXm(String xm) {
		this.xm = xm;
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
	public String getDwsqrq() {
		return dwsqrq;
	}
	public void setDwsqrq(String dwsqrq) {
		this.dwsqrq = dwsqrq;
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
	
	
}

