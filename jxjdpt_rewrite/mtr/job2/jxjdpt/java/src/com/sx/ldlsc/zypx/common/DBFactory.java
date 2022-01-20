package com.sx.ldlsc.zypx.common;

import com.sx.conf.LogConfig;
import com.sx.db.BioCommon;
import com.sx.db.BipCommon;
import com.sx.db.BizCommon;
import com.sx.db.DbCommon;
import com.sx.db.TextToDb;
//import com.sx.ldlsc.common.QueryPage;
import com.sx.ldlsc.zypx.conf.PxDbaConfig;
import com.sx.ldlsc.jxjdpt.common.QueryPage;
import com.sx.support.dba.dbAPI;
import com.sx.support.dba.dbModuleDescription;
import com.sx.utility.StringTools;

/**
 * <p>Title: 北京市劳动力市场信息系统</p>
 *
 * <p>Description: 北京市劳动力市场信息系统-获得DBA和DbCommon实例的工厂</p>
 *
 * <p>Copyright: Copyright (c) 2005</p>
 *
 * <p>Company: bksx</p>
 *
 * @author manan
 * @version 1.0
 */
public final class DBFactory {

	private DBFactory() {
  }

  /**
   * 获得 DbCommon 实例
   * @param moduleName String 模块名称
   * @param className String 类名
   * @param version String 版本号
   * @return DbCommon DbCommon的实例
   */
  public static DbCommon getDBCommonInstance(String moduleName,
                                             String className, String version) {
    dbModuleDescription mydbmod = getDBMoudleInstance(moduleName, className,
        version);
    return new DbCommon(mydbmod,
    		PxDbaConfig.getPX_DBS(),
    		PxDbaConfig.getPX_CFGFILE(),
    		PxDbaConfig.getPX_DRIVER());
  }

  /**
   * 获得 DbCommon 实例
   * @param mydbmod dbModuleDescription 
   * @return DbCommon DbCommon的实例
   */
  public static DbCommon getDBCommonInstance(dbModuleDescription mydbmod) {
    return new DbCommon(mydbmod,
    		PxDbaConfig.getPX_DBS(),
    		PxDbaConfig.getPX_CFGFILE(),
    		PxDbaConfig.getPX_DRIVER());

  }
  
  /**
   * 获得 dbAPI 的实例
   * @param moduleName String 模块名称
   * @param className String 类名
   * @param version String 版本号
   * @return dbAPI dbAPI的实例
   */
  public static dbAPI getDBAInstance(String moduleName, String className,
                                     String version) {
    dbModuleDescription mydbmod = getDBMoudleInstance(moduleName, className,
        version);
    return new dbAPI(mydbmod,
    		PxDbaConfig.getPX_DBS(),
    		PxDbaConfig.getPX_CFGFILE(),
    		PxDbaConfig.getPX_DRIVER());
  }

  /**
   * 获得 BioCommon 的实例
   * @param cao
   * @param pmo
   * @return BioCommon 的实例
   */
  public static BioCommon getBioCommonInstance(Object cao, Object pmo) {
    return new BioCommon(cao, pmo);
  }

  /**
   * 获得 BipCommon 的实例
   * @param cao
   * @param pmo
   * @return BipCommon 的实例
   */
  public static BipCommon getBipCommonInstance(Object cao, Object pmo) {
    return new BipCommon(cao, pmo);
  }

  /**
   * 获得 BizCommon 的实例
   * @param cao
   * @param pmo
   * @param moduleName 模块名称
   * @param className 类名
   * @param version 版本号
   * @return BizCommon 的实例
   */
  public static BizCommon getBizCommonInstance(Object cao, Object pmo,
                                               String moduleName,
                                               String className,
                                               String version) {
    dbModuleDescription mydbmod = getDBMoudleInstance(moduleName, className,
        version);
    return new BizCommon(cao, pmo, mydbmod,
    		PxDbaConfig.getPX_DBS(),
    		PxDbaConfig.getPX_CFGFILE(),
    		PxDbaConfig.getPX_DRIVER());
  }
  
  /**
   * 获得 BizCommon 的实例
   * @param cao
   * @param pmo
   * @param moduleName 模块名称
   * @param className 类名
   * @param version 版本号
   * @return BizCommon 的实例
   */
  public static BizCommon getBizCommonInstance(Object cao, Object pmo,
  		dbModuleDescription mydbmod) {
    return new BizCommon(cao, pmo, mydbmod,
    		PxDbaConfig.getPX_DBS(),
    		PxDbaConfig.getPX_CFGFILE(),
    		PxDbaConfig.getPX_DRIVER());
  }

  /**w
   * 获得 dbModuleDescrption 的实例
   * @param moduleName String 模块名称
   * @param className String 类名
   * @param version String 版本号
   * @return dbModuleDescription dbModuleDescrption的实例
   */
  public static dbModuleDescription getDBMoudleInstance(String moduleName,
      String className,
      String version) {
    moduleName = StringTools.toTrim(moduleName);
    className = StringTools.toTrim(className);
    version = StringTools.toTrim(version);
    return new dbModuleDescription(LogConfig.getAPP(),
                                   moduleName, className, version);
  }
  /**
	 * 获得 querypage 的实例
	 * 
	 * @param moduleName
	 *            模块名称
	 * @param className
	 *            类名
	 * @param version
	 *            版本号
	 * @return querypage 的实例
	 */
	public static QueryPage getQueryPageInstance(String moduleName,
			String className, String version) {
		dbModuleDescription mydbmod = getDBMoudleInstance(moduleName,
				className, version);
		return new QueryPage(mydbmod);
	}
	/**
	   * 获得 TextToDb 实例
	   * 其中的一种功能是处理文本数超过4000的大文本数据的存储问题
	   * @param moduleName String 模块名称
	   * @param className String 类名
	   * @param version String 版本号
	   * @return DbCommon DbCommon的实例
	   */
	  public static TextToDb getTextToDbInstance(
			  
			  String moduleName,
	                              String className, String version){
	        dbModuleDescription mydbmod = getDBMoudleInstance(moduleName, className,
	            version);
	        return new TextToDb(mydbmod,PxDbaConfig.getPX_DBS());
	  }
}