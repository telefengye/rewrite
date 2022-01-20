package com.sx.ldlsc.zypx.ywcl.ggfwlgwpx;

import com.sx.db.DbCommon;
import com.sx.exception.DbException;
import com.sx.ldlsc.jxjdpt.common.DBFactory;
import com.sx.ldlsc.jxjdpt.common.DateHelper;
import com.sx.ldlsc.jxjdpt.common.StringHelper;
import com.sx.ldlsc.jxjdpt.conf.LdlscAppConfig;
import com.sx.ldlsc.zypx.valuebean.ggfwlgwpx.PxjhVB;
import com.sx.support.dba.dbSQLResult;

/**
 * 业务类
 * @author Administrator
 *
 */
public class PxzhcxYwl {
	
	// 获取数据库的连接
	private DbCommon getDbCommon(){
		return DBFactory.getDBCommonInstance("ggfwlgwpx", "PxjhrylrYwl.java", "V1.0");
	}
	
	private DbCommon mydb = getDbCommon();
	
	// 静态工厂方法代替构造方法， 返回类的实例
	public static PxzhcxYwl zhcxYwl(){
		return new PxzhcxYwl();
		
	}
	
	private PxzhcxYwl(){
		
	}
	
	private String strPageCount = "0";
	private String strRowsCount = "0";
	private String strStartNum = "0";

	public String getStrPageCount() {
		return strPageCount;
	}

	public String getStrRowsCount() {
		return strRowsCount;
	}

	public String getStrStartNum() {
		return strStartNum;
	}
	
	public PxjhVB[] pxjglbCx(PxjhVB pxjhVB, int pageNum, String jhszq, String ssjb) throws DbException{
		String sql = "select pxjhid, sbdwtyxydm, sbdwmc, lxr, bgdh, sbsj, pxxm from px_ggfwlgwpx_pxjhb pxjhb where"
				+ " 1 = 1 ";
		
		if("2".equals(ssjb)){
			sql += " and Pxjhb.jhszq = '"+jhszq+"'";
		}
		
		// 申报单位统一信用代码
		if(StringHelper.isNotEmpty(pxjhVB.getSbdwtyxydm())){
			sql += " and sbdwtyxdm = '"+pxjhVB.getSbdwtyxydm()+"' ";
		}
		
		// 申报单位名称
		if(StringHelper.isNotEmpty(pxjhVB.getSbdwmc())){
			sql += " and sbdwmc like '%"+pxjhVB.getSbdwmc()+"%' ";
		}
		
		// 联系人
		if(StringHelper.isNotEmpty(pxjhVB.getLxr())){
			sql += " and lxr like '%"+pxjhVB.getLxr()+"%'";
		}
		
		// 办公电话
		if(StringHelper.isNotEmpty(pxjhVB.getBgdh())){
			sql += " and bgdh like '%"+pxjhVB.getBgdh()+"'%";
		}
		
		// 培训项目
		if(StringHelper.isNotEmpty(pxjhVB.getPxxm())){
			sql += " and pxxm like '%"+pxjhVB.getPxxm()+"%' ";
		}
		
		// 计划所在区
		if(StringHelper.isNotEmpty(pxjhVB.getJhszq())){
			sql += " and jhszq like = '%"+pxjhVB.getJhszq()+"%'";
		}
		
		// 按照操作时间排序
		sql += "order by czsj desc";
		
		// 执行sql获取结果集
		dbSQLResult result = mydb.querySqlPage(sql, LdlscAppConfig.getPAGECOUNTBYV(), pageNum);
		
		// 查询分页所需要的参数
		strPageCount = mydb.getStrPageCount();
		strRowsCount = mydb.getStrRowsCount();
		strStartNum = mydb.getStrStartNum();
		
		if(result == null){
			return null;
		}
		
		if(result.getReturnCode() != 0){
			return null;
		}
		
		if(result.getRows() == 0){
			return null;
		}
		
		// 培训技术总记录数
		int pxjhzjls = result.getRows();
		// 培训计划
		String[][] pxjhs = result.getData();
		PxjhVB[] pxjhvbs = new PxjhVB[pxjhzjls];
		
		for(int i = 0; i < pxjhzjls; i++){
			pxjhvbs[i] = new PxjhVB();
			pxjhvbs[i].setPxjhid(pxjhs[i][0]);
			pxjhvbs[i].setSbdwtyxydm(pxjhs[i][1]);
			pxjhvbs[i].setSbdwmc(pxjhs[i][2]);
			pxjhvbs[i].setLxr(pxjhs[i][3]);
			pxjhvbs[i].setBgdh(pxjhs[i][4]);
			pxjhvbs[i].setSbsj(DateHelper.dateFmt(pxjhs[i][5], "yyyyMMddHHmmss", "yyyy-MM-dd"));
			pxjhvbs[i].setPxxm(pxjhs[i][6]);
		}
		
		return pxjhvbs;
		
	}

	
	
	
	
	

}
