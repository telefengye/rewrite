package com.sx.ldlsc.zypx.formbean.ggfwlgwpx;

import org.apache.struts.upload.FormFile;

import com.sx.bean.AbsFormBean;

/**
 * <pre>
 * 项目名称：bjldlsc    
 * 类 名  称 ：PxjhFB 
 * 类        描：  培训计划表(px_ggfwlgwpx_pxjhb)PxjhFB
 * 创 建   人：  djr 
 * 创建时间：2018年8月17日      
 * 修  改  人：     
 * 修改时间：2018年8月17日     
 * 修改备注：       
 * @version
 * </pre>
 */
public class PxjhFB extends AbsFormBean {

	private static final long serialVersionUID = 1L;
	
 	
 	private String	grbh;          //个人编号
 	
 	private String	hjszq;        //户籍所在区
 	
 	private String	lxfs;        //联系方式
 	
 	private String	xsgwbtkssj; //享受岗位补贴开始时间
 	
 	private String	sgsj;      //上岗时间
 	
	private String pxjhid; // 培训计划id
	private String sbdwtyxydm;// 申报单位统一信用代码
	private String sbdwmc; // 申报单位名称
	private String jhszq; // 计划所在区
	private String lxr; // 联系人
	private String bgdh; // 办公电话
	private String sj; // 手机
	private String cz; // 传真
	private String yx;// 邮箱

	private String jydz; // 经营地址
	private String sbsj; // 申报时间
	private String pxxm; // 培训项目
	private String pxsj; // 培训时间
	private String jysj; // 结业时间
	private String bbdd; // 办班地点
	private String xyrs; // 学员人数
	private String bjgs; // 班级个数
	private String shyj; // 审核意见
	private String shrq;// 审核日期
	private String shr;// 审核人

	private String shrbmid; // 审核人部门id
	private String lcsfjs; // 流程是否结束
	private String jhssfsc; // 计划书是否上传
	private String kqfjsfsc; // 考勤附件是否上传
	private String jhslj; // 计划书路径
	private String jhskhdwjm; // 计划书客户端文件名
	private String jhsfwqwjm;// 计划书服务器文件名
	private String czyid; // 操作员id
	private String czybmid;// 操作员部门id
	private String czsj; // 操作时间

	private String pxjgmc; // 培训机构名称
	private String pxjglxr;// 培训机构联系人
	private String pxjgbgdh;// 培训机构办公电话
	private String pxjgsj;// 培训机构手机
	private String pxjgcz;// 培训机构传真
	private String pxjgyx;// 培训机构邮箱
	private String pxjgzcdz;// 培训机构注册地址
	
	private FormFile pxjhsfj;// 培训计划书附件
	
	private String[] pxjhids;// 培训计划ids
	
	private FormFile pxjh;// 培训计划 导入文件
	
	// 一个培训计划对应多个培训机构时
	private String[] pxjgmcs; // 培训机构名称
	private String[] pxjglxrs;// 培训机构联系人
	private String[] pxjgbgdhs;// 培训机构办公电话
	private String[] pxjgsjs;// 培训机构手机
	private String[] pxjgczs;// 培训机构传真
	private String[] pxjgyxs;// 培训机构邮箱
	private String[] pxjgzcdzs;// 培训机构注册地址
	
	private String lczt;// 流程状态

	public String getPxjhid() {
		return pxjhid;
	}

	public void setPxjhid(String pxjhid) {
		this.pxjhid = pxjhid;
	}

	public String getSbdwtyxydm() {
		return sbdwtyxydm;
	}

	public void setSbdwtyxydm(String sbdwtyxydm) {
		this.sbdwtyxydm = sbdwtyxydm;
	}

	public String getSbdwmc() {
		return sbdwmc;
	}

	public void setSbdwmc(String sbdwmc) {
		this.sbdwmc = sbdwmc;
	}

	public String getJhszq() {
		return jhszq;
	}

	public void setJhszq(String jhszq) {
		this.jhszq = jhszq;
	}

	public String getLxr() {
		return lxr;
	}

	public void setLxr(String lxr) {
		this.lxr = lxr;
	}

	public String getBgdh() {
		return bgdh;
	}

	public void setBgdh(String bgdh) {
		this.bgdh = bgdh;
	}

	public String getSj() {
		return sj;
	}

	public void setSj(String sj) {
		this.sj = sj;
	}

	public String getCz() {
		return cz;
	}

	public void setCz(String cz) {
		this.cz = cz;
	}

	public String getYx() {
		return yx;
	}

	public void setYx(String yx) {
		this.yx = yx;
	}

	public String getJydz() {
		return jydz;
	}

	public String getGrbh() {
		return grbh;
	}

	public void setGrbh(String grbh) {
		this.grbh = grbh;
	}

	public String getHjszq() {
		return hjszq;
	}

	public void setHjszq(String hjszq) {
		this.hjszq = hjszq;
	}

	public String getLxfs() {
		return lxfs;
	}

	public void setLxfs(String lxfs) {
		this.lxfs = lxfs;
	}

	public String getXsgwbtkssj() {
		return xsgwbtkssj;
	}

	public void setXsgwbtkssj(String xsgwbtkssj) {
		this.xsgwbtkssj = xsgwbtkssj;
	}

	public String getSgsj() {
		return sgsj;
	}

	public void setSgsj(String sgsj) {
		this.sgsj = sgsj;
	}

	public void setJydz(String jydz) {
		this.jydz = jydz;
	}

	public String getSbsj() {
		return sbsj;
	}

	public void setSbsj(String sbsj) {
		this.sbsj = sbsj;
	}

	public String getPxxm() {
		return pxxm;
	}

	public void setPxxm(String pxxm) {
		this.pxxm = pxxm;
	}

	public String getPxsj() {
		return pxsj;
	}

	public void setPxsj(String pxsj) {
		this.pxsj = pxsj;
	}

	public String getJysj() {
		return jysj;
	}

	public void setJysj(String jysj) {
		this.jysj = jysj;
	}

	public String getBbdd() {
		return bbdd;
	}

	public void setBbdd(String bbdd) {
		this.bbdd = bbdd;
	}

	public String getXyrs() {
		return xyrs;
	}

	public void setXyrs(String xyrs) {
		this.xyrs = xyrs;
	}

	public String getBjgs() {
		return bjgs;
	}

	public void setBjgs(String bjgs) {
		this.bjgs = bjgs;
	}

	public String getShyj() {
		return shyj;
	}

	public void setShyj(String shyj) {
		this.shyj = shyj;
	}

	public String getShrq() {
		return shrq;
	}

	public void setShrq(String shrq) {
		this.shrq = shrq;
	}

	public String getShr() {
		return shr;
	}

	public void setShr(String shr) {
		this.shr = shr;
	}

	public String getShrbmid() {
		return shrbmid;
	}

	public void setShrbmid(String shrbmid) {
		this.shrbmid = shrbmid;
	}

	public String getLcsfjs() {
		return lcsfjs;
	}

	public void setLcsfjs(String lcsfjs) {
		this.lcsfjs = lcsfjs;
	}

	public String getJhssfsc() {
		return jhssfsc;
	}

	public void setJhssfsc(String jhssfsc) {
		this.jhssfsc = jhssfsc;
	}

	public String getKqfjsfsc() {
		return kqfjsfsc;
	}

	public void setKqfjsfsc(String kqfjsfsc) {
		this.kqfjsfsc = kqfjsfsc;
	}

	public String getJhslj() {
		return jhslj;
	}

	public void setJhslj(String jhslj) {
		this.jhslj = jhslj;
	}

	public String getJhskhdwjm() {
		return jhskhdwjm;
	}

	public void setJhskhdwjm(String jhskhdwjm) {
		this.jhskhdwjm = jhskhdwjm;
	}

	public String getJhsfwqwjm() {
		return jhsfwqwjm;
	}

	public void setJhsfwqwjm(String jhsfwqwjm) {
		this.jhsfwqwjm = jhsfwqwjm;
	}

	public String getCzyid() {
		return czyid;
	}

	public void setCzyid(String czyid) {
		this.czyid = czyid;
	}

	public String getCzybmid() {
		return czybmid;
	}

	public void setCzybmid(String czybmid) {
		this.czybmid = czybmid;
	}

	public String getCzsj() {
		return czsj;
	}

	public void setCzsj(String czsj) {
		this.czsj = czsj;
	}

	public String getPxjgmc() {
		return pxjgmc;
	}

	public void setPxjgmc(String pxjgmc) {
		this.pxjgmc = pxjgmc;
	}

	public String getPxjglxr() {
		return pxjglxr;
	}

	public void setPxjglxr(String pxjglxr) {
		this.pxjglxr = pxjglxr;
	}

	public String getPxjgbgdh() {
		return pxjgbgdh;
	}

	public void setPxjgbgdh(String pxjgbgdh) {
		this.pxjgbgdh = pxjgbgdh;
	}

	public String getPxjgsj() {
		return pxjgsj;
	}

	public void setPxjgsj(String pxjgsj) {
		this.pxjgsj = pxjgsj;
	}

	public String getPxjgcz() {
		return pxjgcz;
	}

	public void setPxjgcz(String pxjgcz) {
		this.pxjgcz = pxjgcz;
	}

	public String getPxjgyx() {
		return pxjgyx;
	}

	public void setPxjgyx(String pxjgyx) {
		this.pxjgyx = pxjgyx;
	}

	public String getPxjgzcdz() {
		return pxjgzcdz;
	}

	public void setPxjgzcdz(String pxjgzcdz) {
		this.pxjgzcdz = pxjgzcdz;
	}

	public FormFile getPxjhsfj() {
		return pxjhsfj;
	}

	public void setPxjhsfj(FormFile pxjhsfj) {
		this.pxjhsfj = pxjhsfj;
	}

	public String[] getPxjhids() {
		return pxjhids;
	}

	public void setPxjhids(String[] pxjhids) {
		this.pxjhids = pxjhids;
	}

	public FormFile getPxjh() {
		return pxjh;
	}

	public void setPxjh(FormFile pxjh) {
		this.pxjh = pxjh;
	}

	public String[] getPxjgmcs() {
		return pxjgmcs;
	}

	public void setPxjgmcs(String[] pxjgmcs) {
		this.pxjgmcs = pxjgmcs;
	}

	public String[] getPxjglxrs() {
		return pxjglxrs;
	}

	public void setPxjglxrs(String[] pxjglxrs) {
		this.pxjglxrs = pxjglxrs;
	}

	public String[] getPxjgbgdhs() {
		return pxjgbgdhs;
	}

	public void setPxjgbgdhs(String[] pxjgbgdhs) {
		this.pxjgbgdhs = pxjgbgdhs;
	}

	public String[] getPxjgsjs() {
		return pxjgsjs;
	}

	public void setPxjgsjs(String[] pxjgsjs) {
		this.pxjgsjs = pxjgsjs;
	}

	public String[] getPxjgczs() {
		return pxjgczs;
	}

	public void setPxjgczs(String[] pxjgczs) {
		this.pxjgczs = pxjgczs;
	}

	public String[] getPxjgyxs() {
		return pxjgyxs;
	}

	public void setPxjgyxs(String[] pxjgyxs) {
		this.pxjgyxs = pxjgyxs;
	}

	public String[] getPxjgzcdzs() {
		return pxjgzcdzs;
	}

	public void setPxjgzcdzs(String[] pxjgzcdzs) {
		this.pxjgzcdzs = pxjgzcdzs;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getLczt() {
		return lczt;
	}

	public void setLczt(String lczt) {
		this.lczt = lczt;
	}
	
	
	
}
