package com.sx.ldlsc.jxjdpt.formbean.Jxjdgl;

import com.sx.bean.AbsFormBean;

public class JxjdglFB extends AbsFormBean { 
	/**
     *基地id
     */
    private String jdid;
    /**
     *单位编号
     */
    private String dwbh;
    /**
     *流程状态
     */
    private String lczt;
    /**
     *上报区县
     */
    private String sbqx;
    /**
     *组织机构代码
     */
    private String zzjgdm;
    /**
     *单位名称
     */
    private String dwmc;
    /**
     *基地类型
     */
    private String jdlx;
    /**
     *法定代表人（负责人）
     */
    private String fddbr;
    /**
     *办公电话
     */
    private String bgdh;
    /**
     *所属行业
     */
    private String sshy;
    /**
     *单位类型
     */
    private String dwlx;
    /**
     *单位人数
     */
    private String dwrs;
    /**
     *联系人
     */
    private String lxr;
    /**
     *部门及职务
     */
    private String bmjzw;
    /**
     *单位地址
     */
    private String dwdz;
    /**
     *注册资金
     */
    private String zczj;
    /**
     *电子邮箱
     */
    private String dzyx;
    /**
     *传真
     */
    private String cz;
    /**
     *手机
     */
    private String sj;
    /**
     *单位基本情况
     */
    private String dwjbqk;
    /**
     *录入操作员id
     */
    private String lrczyid;
    /**
     *录入操作部门id
     */
    private String lrczbmid;
    /**
     *录入操作时间
     */
    private String lrczsj;
    /**
     *上报人
     */
    private String sbr;
    /**
     *上报日期
     */
    private String sbrq;
    /**
     *上报操作员id
     */
    private String sbczyid;
    /**
     *上报操作部门id
     */
    private String sbczbmid;
    /**
     *上报操作时间
     */
    private String sbczsj;
    /**
     *审核意见
     */
    private String shyj;
    /**
     *不通过原因
     */
    private String btgyy;
    /**
     *审核人
     */
    private String shr;
    /**
     *审核日期
     */
    private String shrq;
    /**
     *审核操作员id
     */
    private String shczyid;
    /**
     *审核操作部门id
     */
    private String shczbmid;
    /**
     *审核操作时间
     */
    private String shczsj;
    /**
     *批准日期起
     */
    private String pzrqq;
    /**
     *批准日期至
     */
    private String pzrqz;
    /**
     *基地编号
     */
    private String jdbh;
    /**
     *发布人
     */
    private String fbr;
    /**
     *发布日期
     */
    private String fbrq;
    /**
     *发布操作员id
     */
    private String fbczyid;
    /**
     *发布操作部门id
     */
    private String fbczbmid;
    /**
     *发布操作时间
     */
    private String fbczsj;
    /**
     *是否首次发布
     */
    private String sfscfs;
    /**
     *是否需要发送
     */
    private String sfxyfs;
    /**
     *发送操作时间
     */
    private String fsczsj;
    /**
     *发送状态
     */
    private String fszt;
    /**
     *接收操作时间
     */
    private String jsczsj;
    
    private String sbrqq;
    
    private String sbrqz;
    
    private String[] jdids;
    
    private String sffb;
    
    private String sfyx;//是否有效
    
    private String qshyj;//	区审核意见
    private String qbtgyy;//	区不通过原因
    private String qshr;//	区审核人
    private String qshrq;//	区审核日期
    private String qshczyid;//	区审核操作员id
    private String qshczbmid;//	区审核操作部门id
    private String qshczsj;//	区审核操作时间
    private String sjly;//	数据来源
    private String lrrqq;//单位录入时间起
    private String lrrqz;//单位录入时间止
    
    private String dwlxdh1;//	单位联系电话1
    private String dwlxdh2;//	单位联系电话2
    private String dwyx;//	单位邮箱

    private String shrqq;//审核日期
    private String shrqz;
    private String fbrqq;//发布日期
    private String fbrqz;
    
    
    public String getShrqq() {
		return shrqq;
	}
	public void setShrqq(String shrqq) {
		this.shrqq = shrqq;
	}
	public String getShrqz() {
		return shrqz;
	}
	public void setShrqz(String shrqz) {
		this.shrqz = shrqz;
	}
	public String getFbrqq() {
		return fbrqq;
	}
	public void setFbrqq(String fbrqq) {
		this.fbrqq = fbrqq;
	}
	public String getFbrqz() {
		return fbrqz;
	}
	public void setFbrqz(String fbrqz) {
		this.fbrqz = fbrqz;
	}
	public String getDwlxdh1() {
		return dwlxdh1;
	}
	public void setDwlxdh1(String dwlxdh1) {
		this.dwlxdh1 = dwlxdh1;
	}
	public String getDwlxdh2() {
		return dwlxdh2;
	}
	public void setDwlxdh2(String dwlxdh2) {
		this.dwlxdh2 = dwlxdh2;
	}
	public String getDwyx() {
		return dwyx;
	}
	public void setDwyx(String dwyx) {
		this.dwyx = dwyx;
	}
	/**
	 * @return 返回 jdid。
	 */
	public String getJdid() {
		return jdid;
	}
	/**
	 * @param jdid 要设置的 jdid。
	 */
	public void setJdid(String jdid) {
		this.jdid = jdid;
	}
	/**
	 * @return the dwbh
	 */
	public String getDwbh() {
		return dwbh;
	}
	/**
	 * @param dwbh the dwbh to set
	 */
	public void setDwbh(String dwbh) {
		this.dwbh = dwbh;
	}
	/**
	 * @return the lczt
	 */
	public String getLczt() {
		return lczt;
	}
	/**
	 * @param lczt the lczt to set
	 */
	public void setLczt(String lczt) {
		this.lczt = lczt;
	}
	/**
	 * @return the sbqx
	 */
	public String getSbqx() {
		return sbqx;
	}
	/**
	 * @param sbqx the sbqx to set
	 */
	public void setSbqx(String sbqx) {
		this.sbqx = sbqx;
	}
	/**
	 * @return the zzjgdm
	 */
	public String getZzjgdm() {
		return zzjgdm;
	}
	/**
	 * @param zzjgdm the zzjgdm to set
	 */
	public void setZzjgdm(String zzjgdm) {
		this.zzjgdm = zzjgdm;
	}
	/**
	 * @return the dwmc
	 */
	public String getDwmc() {
		return dwmc;
	}
	/**
	 * @param dwmc the dwmc to set
	 */
	public void setDwmc(String dwmc) {
		this.dwmc = dwmc;
	}
	/**
	 * @return the jdlx
	 */
	public String getJdlx() {
		return jdlx;
	}
	/**
	 * @param jdlx the jdlx to set
	 */
	public void setJdlx(String jdlx) {
		this.jdlx = jdlx;
	}
	/**
	 * @return the fddbr
	 */
	public String getFddbr() {
		return fddbr;
	}
	/**
	 * @param fddbr the fddbr to set
	 */
	public void setFddbr(String fddbr) {
		this.fddbr = fddbr;
	}
	/**
	 * @return the bgdh
	 */
	public String getBgdh() {
		return bgdh;
	}
	/**
	 * @param bgdh the bgdh to set
	 */
	public void setBgdh(String bgdh) {
		this.bgdh = bgdh;
	}
	/**
	 * @return the sshy
	 */
	public String getSshy() {
		return sshy;
	}
	/**
	 * @param sshy the sshy to set
	 */
	public void setSshy(String sshy) {
		this.sshy = sshy;
	}
	/**
	 * @return the dwlx
	 */
	public String getDwlx() {
		return dwlx;
	}
	/**
	 * @param dwlx the dwlx to set
	 */
	public void setDwlx(String dwlx) {
		this.dwlx = dwlx;
	}
	/**
	 * @return the dwrs
	 */
	public String getDwrs() {
		return dwrs;
	}
	/**
	 * @param dwrs the dwrs to set
	 */
	public void setDwrs(String dwrs) {
		this.dwrs = dwrs;
	}
	/**
	 * @return the lxr
	 */
	public String getLxr() {
		return lxr;
	}
	/**
	 * @param lxr the lxr to set
	 */
	public void setLxr(String lxr) {
		this.lxr = lxr;
	}
	/**
	 * @return the bmjzw
	 */
	public String getBmjzw() {
		return bmjzw;
	}
	/**
	 * @param bmjzw the bmjzw to set
	 */
	public void setBmjzw(String bmjzw) {
		this.bmjzw = bmjzw;
	}
	/**
	 * @return the dwdz
	 */
	public String getDwdz() {
		return dwdz;
	}
	/**
	 * @param dwdz the dwdz to set
	 */
	public void setDwdz(String dwdz) {
		this.dwdz = dwdz;
	}
	/**
	 * @return the zczj
	 */
	public String getZczj() {
		return zczj;
	}
	/**
	 * @param zczj the zczj to set
	 */
	public void setZczj(String zczj) {
		this.zczj = zczj;
	}
	/**
	 * @return the dzyx
	 */
	public String getDzyx() {
		return dzyx;
	}
	/**
	 * @param dzyx the dzyx to set
	 */
	public void setDzyx(String dzyx) {
		this.dzyx = dzyx;
	}
	/**
	 * @return the cz
	 */
	public String getCz() {
		return cz;
	}
	/**
	 * @param cz the cz to set
	 */
	public void setCz(String cz) {
		this.cz = cz;
	}
	/**
	 * @return the sj
	 */
	public String getSj() {
		return sj;
	}
	/**
	 * @param sj the sj to set
	 */
	public void setSj(String sj) {
		this.sj = sj;
	}
	/**
	 * @return the dwjbqk
	 */
	public String getDwjbqk() {
		return dwjbqk;
	}
	/**
	 * @param dwjbqk the dwjbqk to set
	 */
	public void setDwjbqk(String dwjbqk) {
		this.dwjbqk = dwjbqk;
	}
	/**
	 * @return the lrczyid
	 */
	public String getLrczyid() {
		return lrczyid;
	}
	/**
	 * @param lrczyid the lrczyid to set
	 */
	public void setLrczyid(String lrczyid) {
		this.lrczyid = lrczyid;
	}
	/**
	 * @return the lrczbmid
	 */
	public String getLrczbmid() {
		return lrczbmid;
	}
	/**
	 * @param lrczbmid the lrczbmid to set
	 */
	public void setLrczbmid(String lrczbmid) {
		this.lrczbmid = lrczbmid;
	}
	/**
	 * @return the lrczsj
	 */
	public String getLrczsj() {
		return lrczsj;
	}
	/**
	 * @param lrczsj the lrczsj to set
	 */
	public void setLrczsj(String lrczsj) {
		this.lrczsj = lrczsj;
	}
	/**
	 * @return the sbr
	 */
	public String getSbr() {
		return sbr;
	}
	/**
	 * @param sbr the sbr to set
	 */
	public void setSbr(String sbr) {
		this.sbr = sbr;
	}
	/**
	 * @return the sbrq
	 */
	public String getSbrq() {
		return sbrq;
	}
	/**
	 * @param sbrq the sbrq to set
	 */
	public void setSbrq(String sbrq) {
		this.sbrq = sbrq;
	}
	/**
	 * @return the sbczyid
	 */
	public String getSbczyid() {
		return sbczyid;
	}
	/**
	 * @param sbczyid the sbczyid to set
	 */
	public void setSbczyid(String sbczyid) {
		this.sbczyid = sbczyid;
	}
	/**
	 * @return the sbczbmid
	 */
	public String getSbczbmid() {
		return sbczbmid;
	}
	/**
	 * @param sbczbmid the sbczbmid to set
	 */
	public void setSbczbmid(String sbczbmid) {
		this.sbczbmid = sbczbmid;
	}
	/**
	 * @return the sbczsj
	 */
	public String getSbczsj() {
		return sbczsj;
	}
	/**
	 * @param sbczsj the sbczsj to set
	 */
	public void setSbczsj(String sbczsj) {
		this.sbczsj = sbczsj;
	}
	/**
	 * @return the shyj
	 */
	public String getShyj() {
		return shyj;
	}
	/**
	 * @param shyj the shyj to set
	 */
	public void setShyj(String shyj) {
		this.shyj = shyj;
	}
	/**
	 * @return the btgyy
	 */
	public String getBtgyy() {
		return btgyy;
	}
	/**
	 * @param btgyy the btgyy to set
	 */
	public void setBtgyy(String btgyy) {
		this.btgyy = btgyy;
	}
	/**
	 * @return the shr
	 */
	public String getShr() {
		return shr;
	}
	/**
	 * @param shr the shr to set
	 */
	public void setShr(String shr) {
		this.shr = shr;
	}
	/**
	 * @return the shrq
	 */
	public String getShrq() {
		return shrq;
	}
	/**
	 * @param shrq the shrq to set
	 */
	public void setShrq(String shrq) {
		this.shrq = shrq;
	}
	/**
	 * @return the shczyid
	 */
	public String getShczyid() {
		return shczyid;
	}
	/**
	 * @param shczyid the shczyid to set
	 */
	public void setShczyid(String shczyid) {
		this.shczyid = shczyid;
	}
	/**
	 * @return the shczbmid
	 */
	public String getShczbmid() {
		return shczbmid;
	}
	/**
	 * @param shczbmid the shczbmid to set
	 */
	public void setShczbmid(String shczbmid) {
		this.shczbmid = shczbmid;
	}
	/**
	 * @return the shczsj
	 */
	public String getShczsj() {
		return shczsj;
	}
	/**
	 * @param shczsj the shczsj to set
	 */
	public void setShczsj(String shczsj) {
		this.shczsj = shczsj;
	}
	/**
	 * @return the pzrqq
	 */
	public String getPzrqq() {
		return pzrqq;
	}
	/**
	 * @param pzrqq the pzrqq to set
	 */
	public void setPzrqq(String pzrqq) {
		this.pzrqq = pzrqq;
	}
	/**
	 * @return the pzrqz
	 */
	public String getPzrqz() {
		return pzrqz;
	}
	/**
	 * @param pzrqz the pzrqz to set
	 */
	public void setPzrqz(String pzrqz) {
		this.pzrqz = pzrqz;
	}
	/**
	 * @return the jdbh
	 */
	public String getJdbh() {
		return jdbh;
	}
	/**
	 * @param jdbh the jdbh to set
	 */
	public void setJdbh(String jdbh) {
		this.jdbh = jdbh;
	}
	/**
	 * @return the fbr
	 */
	public String getFbr() {
		return fbr;
	}
	/**
	 * @param fbr the fbr to set
	 */
	public void setFbr(String fbr) {
		this.fbr = fbr;
	}
	/**
	 * @return the fbrq
	 */
	public String getFbrq() {
		return fbrq;
	}
	/**
	 * @param fbrq the fbrq to set
	 */
	public void setFbrq(String fbrq) {
		this.fbrq = fbrq;
	}
	/**
	 * @return the fbczyid
	 */
	public String getFbczyid() {
		return fbczyid;
	}
	/**
	 * @param fbczyid the fbczyid to set
	 */
	public void setFbczyid(String fbczyid) {
		this.fbczyid = fbczyid;
	}
	/**
	 * @return the fbczbmid
	 */
	public String getFbczbmid() {
		return fbczbmid;
	}
	/**
	 * @param fbczbmid the fbczbmid to set
	 */
	public void setFbczbmid(String fbczbmid) {
		this.fbczbmid = fbczbmid;
	}
	/**
	 * @return the fbczsj
	 */
	public String getFbczsj() {
		return fbczsj;
	}
	/**
	 * @param fbczsj the fbczsj to set
	 */
	public void setFbczsj(String fbczsj) {
		this.fbczsj = fbczsj;
	}
	/**
	 * @return the sfscfs
	 */
	public String getSfscfs() {
		return sfscfs;
	}
	/**
	 * @param sfscfs the sfscfs to set
	 */
	public void setSfscfs(String sfscfs) {
		this.sfscfs = sfscfs;
	}
	/**
	 * @return the sfxyfs
	 */
	public String getSfxyfs() {
		return sfxyfs;
	}
	/**
	 * @param sfxyfs the sfxyfs to set
	 */
	public void setSfxyfs(String sfxyfs) {
		this.sfxyfs = sfxyfs;
	}
	/**
	 * @return the fsczsj
	 */
	public String getFsczsj() {
		return fsczsj;
	}
	/**
	 * @param fsczsj the fsczsj to set
	 */
	public void setFsczsj(String fsczsj) {
		this.fsczsj = fsczsj;
	}
	/**
	 * @return the fszt
	 */
	public String getFszt() {
		return fszt;
	}
	/**
	 * @param fszt the fszt to set
	 */
	public void setFszt(String fszt) {
		this.fszt = fszt;
	}
	/**
	 * @return the jsczsj
	 */
	public String getJsczsj() {
		return jsczsj;
	}
	/**
	 * @param jsczsj the jsczsj to set
	 */
	public void setJsczsj(String jsczsj) {
		this.jsczsj = jsczsj;
	}
	/**
	 * @param sbrqq the sbrqq to set
	 */
	public void setSbrqq(String sbrqq) {
		this.sbrqq = sbrqq;
	}
	/**
	 * @return the sbrqq
	 */
	public String getSbrqq() {
		return sbrqq;
	}
	/**
	 * @param sbrqz the sbrqz to set
	 */
	public void setSbrqz(String sbrqz) {
		this.sbrqz = sbrqz;
	}
	/**
	 * @return the sbrqz
	 */
	public String getSbrqz() {
		return sbrqz;
	}
	/**
	 * @param jdids the jdids to set
	 */
	public void setJdids(String[] jdids) {
		this.jdids = jdids;
	}
	/**
	 * @return the jdids
	 */
	public String[] getJdids() {
		return jdids;
	}
	/**
	 * @param sffb the sffb to set
	 */
	public void setSffb(String sffb) {
		this.sffb = sffb;
	}
	/**
	 * @return the sffb
	 */
	public String getSffb() {
		return sffb;
	}
	public String getSfyx() {
		return sfyx;
	}
	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}
	public String getQshyj() {
		return qshyj;
	}
	public void setQshyj(String qshyj) {
		this.qshyj = qshyj;
	}
	public String getQbtgyy() {
		return qbtgyy;
	}
	public void setQbtgyy(String qbtgyy) {
		this.qbtgyy = qbtgyy;
	}
	public String getQshr() {
		return qshr;
	}
	public void setQshr(String qshr) {
		this.qshr = qshr;
	}
	public String getQshrq() {
		return qshrq;
	}
	public void setQshrq(String qshrq) {
		this.qshrq = qshrq;
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
	public String getSjly() {
		return sjly;
	}
	public void setSjly(String sjly) {
		this.sjly = sjly;
	}
	public String getLrrqq() {
		return lrrqq;
	}
	public void setLrrqq(String lrrqq) {
		this.lrrqq = lrrqq;
	}
	public String getLrrqz() {
		return lrrqz;
	}
	public void setLrrqz(String lrrqz) {
		this.lrrqz = lrrqz;
	}
	
	
}
