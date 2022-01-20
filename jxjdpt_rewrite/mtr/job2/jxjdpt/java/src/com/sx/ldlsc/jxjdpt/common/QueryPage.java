package com.sx.ldlsc.jxjdpt.common;

import com.sx.conf.DbaConfig;
import com.sx.conf.LogConfig;
import com.sx.db.Db;
import com.sx.log.Logx;
import com.sx.support.dba.dbAPI;
import com.sx.support.dba.dbModuleDescription;
import com.sx.support.dba.dbSQLResult;
import com.sx.support.logx.logxType;

public class QueryPage extends Db {
	  private int intRowsCount = 0; //记录总数
	  private int intPageCount = 0; //总页数
	  private int intStartNum = 1; //开始行数{



	
	  /**
	   * <p>Title: 构造函数</p>
	   * <p>Description:构造函数实例化dbModule对象</p>
	   * @param dbModule dbModuleDescription对象
	   */
	  public QueryPage(dbModuleDescription dbModule) {
	    this(dbModule, DbaConfig.getDBS(), DbaConfig.getCFGFILE(),DbaConfig.getDRIVER());
	  }

	  /**
	   * <p>Title: 构造函数</p>
	   * <p>Description:构造函数实例化dbModule对象,不推荐使用（为兼容而提供）</p>
	   * @param strModule 模块名称
	   * @deprecated
	   */
	  public QueryPage(String strModule) {
	    dbModuleDescription dbModule = new dbModuleDescription(strModule,"Javabean", strModule, "V1.0");
	    mydba = new dbAPI(dbModule, DbaConfig.getDBS(), DbaConfig.getCFGFILE(),DbaConfig.getDRIVER());
	  }

	  /**
	   * 构造函数
	   * @param dbModule
	   * @param dbs
	   */
	  public QueryPage(dbModuleDescription dbModule, String dbs) {
	    this(dbModule, dbs, DbaConfig.getCFGFILE(), DbaConfig.getDRIVER());
	  }

	  /**
	   *  构造函数
	   * @param dbModule
	   * @param dbs
	   * @param cfgfile
	   */
	  public QueryPage(dbModuleDescription dbModule, String dbs, String cfgfile) {
	    this(dbModule, dbs, cfgfile, DbaConfig.getDRIVER());
	  }

	  /**
	   * 构造函数
	   * @param dbModule
	   * @param dbs
	   * @param cfgfile
	   * @param driver
	   */
	  public QueryPage(dbModuleDescription dbModule, String dbs, String cfgfile,
	                  String driver) {
	    super(dbModule, dbs, cfgfile, driver);
	  }

	  /**
	   * 构造函数
	   * @param strModule
	   * @param dbs
	   * @param cfgfile
	   * @param driver
	   * @deprecated
	   */
	  public QueryPage(String strModule, String dbs, String cfgfile, String driver) {
	    dbModuleDescription dbModule = new dbModuleDescription(strModule,"Javabean", strModule, "V1.0");
	    mydba = new dbAPI(dbModule, dbs, cfgfile, driver);
	  }

	
	  /**
	   * 执行一条查询语句（select），并进行分页处理
	   * @param querysql 查询语句
	   * @param pagesize 页面大小
	   * @param pagenum  当前页
	   * @return dbSQLResult
	   */
	  public dbSQLResult querySqlPage(String querysql, int pagesize, int pagenum) {
		  return this.querySqlPage("select count(*) from ("+querysql+")",querysql,pagesize,pagenum);
	  }
	  
	  

	  /**
	   * 执行一条查询语句（select），并进行分页处理
	   * @param countsql count(*) 查询语句
	   * @param querysql 查询语句
	   * @param pagesize 当前页
	   * @param pagenum
	   * @return dbSQLResult
	   */
	  public dbSQLResult querySqlPage(String countsql,String querysql, int pagesize, int pagenum) {
	    dbSQLResult mydbrs = new dbSQLResult();
	    if (!this.dbConnect()) {
	      Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.ERROR, "Database connect err!");
	      return null;
	    }
	    int startRows = 0;
	    int endRows = 0;
	    try {
	    	//=================================================================================================
	    	//得到总记录数目
	    	Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.MESSAGE, countsql);
	    	mydbrs = mydba.sqlQuerySmallData(countsql);	    	
	    	if (mydbrs==null||mydbrs.getReturnCode() != rc_OK) {
		        Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.ERROR, "Sql Query is err : " + countsql);
		        this.dbDisconnect();
		        return null;
		    }
	    	intRowsCount=0;
	    	for (int i=0;i<mydbrs.getRows(); i++){
	    		intRowsCount+=Integer.parseInt(mydbrs.getData()[i][0]);
	    	}
	    	
	    	/*if (intRowsCount==0){
	    		Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.ERROR, "Sql Query is count is 0 : " + countsql);
	    		this.dbDisconnect();
	    		return null;
	    	}*/
	    	if (pagesize==0){
	    		Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.ERROR, "page size is zero");
	    		this.dbDisconnect();
	    		return null;
	    	}
	    	
	    	
	    	//计算总页数
	    	intPageCount = (intRowsCount + pagesize - 1) / pagesize;
	    	if (pagenum<1){
	    		pagenum=1;
	    	}
	    	if (pagenum>intPageCount){
	    		pagenum=intPageCount;
	    	}
	    	//开始编号
	    	startRows = (pagenum - 1) * pagesize;
	    	
	    	this.intStartNum=startRows+1;
	    	
	    	//结束编号
	    	endRows = startRows+pagesize;
	    	
	    	querysql = " select * from (select querysql.*, rownum rcol from ("+querysql+") querysql ) where rcol>"+startRows+" and rcol<="+endRows+"";
	    	Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.MESSAGE, querysql);
	    	mydbrs = mydba.sqlQuerySmallData(querysql);
	    	if (mydbrs==null||mydbrs.getReturnCode() != rc_OK) {
		        Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.ERROR, "Sql Query is err : " + querysql);
		        this.dbDisconnect();
		        return null;
		    }
	    	
	    	this.dbDisconnect();
	    	return mydbrs;
	    	
	    }
	    catch (Exception e) {
	      Logx.write(LogConfig.getAPP(), "javabean", "QueryPage", "querySqlPage",logxType.EXCEPTION, "Exception :" + e.getMessage());
	      this.dbDisconnect();
	      return null;
	    }
	  }
	
	
	  
	public int getIntPageCount() {
		return intPageCount;
	}

	public int getIntRowsCount() {
		return intRowsCount;
	}

	public String getStrPageCount() {
		return Integer.toString(intPageCount);
	}

	public String getStrRowsCount() {
		return Integer.toString(intRowsCount);
	}

	public int getIntStartNum() {
		return intStartNum;
	}

	public String getStrStartNum() {
		return Integer.toString(intStartNum);
	}
}
