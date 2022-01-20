package com.sx.ldlsc.jxjdpt.common;

import com.sx.common.GenerateId;
import com.sx.db.DbCommon;
import com.sx.ldlsc.*;
import com.sx.ldlsc.jxjdpt.conf.SessionConfig;
import com.sx.support.dba.dbModuleDescription;
import com.sx.support.dba.dbSQLResult;
import com.sx.utility.DateTools;
import  com.sx.db.DbCommon;

/**
 * @author admin
 *实现业务日志记载
 */
/**
 * 业务日志的操作内容说明
 * 1、insert 语句，操作内容为insert sql语句；
 * 2、update 语句，如果是修改功能需要记录修改前内容和update sql语句，
 * 如果是业务过程中的update语句，只需要记录update sql语句
 * 3、查询功能暂时不进行业务日志记载
 */

public class BizLog {

	/**
	 * 
	 */
	private BizLog() {
		super();
		// TODO 自动生成构造函数存根
	}

	/**
	 * 写日志
	 * @param czlx 操作类型
	 * @param czgjz 操作关键字
	 * @param czlr 操作内容
	 * @param czybmid 操作员部门id
	 * @param czyid 操作员id
	 * @param czsj 操作时间
	 * @param czjsjip 操作计算机ip
	 * @return boolean
	 */
	public static boolean write(String czlx,String czgjz,String czlr,String czybmid,String czyid,String czsj,String czjsjip){
		try{
			
			if(czlx!=null){
				if(czlx.trim().equals("org.springframework.web.struts.DelegatingActionProxy")){
					return true;
				}
			}
			dbModuleDescription dbModule = new dbModuleDescription("BizLog","Javabean", "write", "V1.0");
			DbCommon mydb = new DbCommon(dbModule);
			String rzxh = GenerateId.getGenerateId();
			String sql = new String();
			sql = " insert into ldlsc_ywrz (rzxh,czlx,czgjz,czybmid,czyid,czsj,czjsjip,czlr)";
			sql+=" values ";
			sql+=" (?,?,?,?,?,?,?,?) ";
			String[] par = new String[8];
			par[0]=rzxh;
			par[1]=czlx;
			par[2]=czgjz;
			par[3]=czybmid;
			par[4]=czyid;
			par[5]=czsj;
			par[6]=czjsjip;
			par[7]=czlr;			
			return mydb.execSql(sql, par);
		}catch (Exception e){
			e.printStackTrace();
			return false;
		}
 	}
	
	
	
	/**
	 * 写日志
	 * @param czlx 操作类型
	 * @param czgjz 操作关键字
	 * @param czlr 操作内容
	 * @param sc sessionconfig
	 * @return
	 */
	public static boolean write(String czlx,String czgjz,String czlr,SessionConfig sc){
		try{
			DateTools dt = new DateTools();
			String czybmid="";
			String czyid="";
			String czjsjip="";
			if(sc!=null){
				czybmid=sc.getDwid();
				czyid=sc.getCzyid();
				czjsjip=sc.getDlip();
			}
			
			return write(czlx,czgjz,czlr,czybmid,czyid,dt.getDate(),czjsjip);
		}catch (Exception e){
			e.printStackTrace();
			return false;
		}
 	}
	/**
	 * 五证合一操作日志 无需sql
	 * @param czlx
	 * @param czgjz
	 * @param czlr
	 * @param sc
	 * @return
	 */
	public static boolean write_whzy(String czlx,SessionConfig sc){
		try{
			DateTools dt = new DateTools();
			String czybmid="";
			String czyid="";
			String czjsjip="";
			if(sc!=null){
				czybmid=sc.getDwid();
				czyid=sc.getCzyid();
				czjsjip=sc.getDlip();
			}
			String system_name= czlx.substring(12,czlx.indexOf("system_id"));
			String system_id=czlx.substring(czlx.indexOf("system_id")+10,czlx.indexOf("system_key"));
			String class_name=czlx.substring(czlx.indexOf("class")+6);
			return write_whzy(system_name,system_id,class_name,null,czybmid,czyid,czjsjip);
		}catch (Exception e){
			e.printStackTrace();
			return false;
		}
 	}
	/**
	 * 五证合一操作日志 需要sql
	 * @param system_name
	 * @param system_id
	 * @param class_name
	 * @param sqlstr
	 * @param czybmid
	 * @param czyid
	 * @param czjsjip
	 * @return
	 */
	public static boolean write_whzy(String system_name,String system_id,String class_name,String bz,String czybmid,String czyid,String czjsjip){
		try{ 
			DateTools dt = new DateTools();
			dbModuleDescription dbModule = new dbModuleDescription("BizLog","Javabean", "write", "V1.0");
			DbCommon mydb = new DbCommon(dbModule);
			String id = GenerateId.getGenerateId();
			String sql = new String();
			sql = " insert into ldlsc_wzhy_ywrz (id,system_name,system_id,class_name,bz,czybmid,czyid,czsj,czjsjip)";
			sql+=" values ";
			sql+=" (?,?,?,?,?,?,?,?,?) ";
			String[] par = new String[9];
			par[0]=id;
			par[1]=formatNullStr(system_name);
			par[2]=formatNullStr(system_id);
			par[3]=formatNullStr(class_name);
			par[4]=formatNullStr(bz);
			par[5]=formatNullStr(czybmid);
			par[6]=formatNullStr(czyid);
			par[7]=dt.getDate();
			par[8]=formatNullStr(czjsjip);			
			return mydb.execSql(sql, par);
		}catch (Exception e){
			e.printStackTrace();
			return false;
		}
 	}
	/**
	 * 得到sql语句数据
	 * @param sql
	 * @return
	 */
	public static String getSqlData(String sql){
		try{
			DbCommon dbcom = DBFactory.getDBCommonInstance("dygl","Bxjdjb","v1.0");
			dbSQLResult dbrs = dbcom.querySql(sql);
			StringBuffer sb = new StringBuffer("sql="+sql+":");
			if (dbrs!=null){
				for (int i=0; i<dbrs.getRows(); i++){
					for (int j=0; j<dbrs.getCols(); j++){
						sb.append(dbrs.getData()[i][j]);
						sb.append(",");
					}
					sb.append(";");
				}
			}
			return sb.toString();
		}catch (Exception e){
			e.printStackTrace();
			return null;
		}
		
	}

	private static String formatNullStr(String str){
		if(str==null||str.equals("")){
			return "";
		}
		return str.trim();
	}
	
	/**
	 * @param args
	 */
//	public static void main(String[] args) {
//		// TODO 自动生成方法存根
//
//	}

}
