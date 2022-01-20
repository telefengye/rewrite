package com.sx.ldlsc.jxjdpt.conf;
import com.sx.conf.DbaConfig;

/**
 * @author cjh
 * 2006-04-18
 * 功能说明：
 */
public class LdrsdlDbaConfig extends DbaConfig {

	/** 配置文件的路径 */
	private static String LDRSDL_CFGFILE=DbaConfig.getCFGFILE();
	/** dbs的名称 */
	private static String LDRSDL_DBS=DbaConfig.getDBS();
	/** driver的名称*/
	private static String LDRSDL_DRIVER=DbaConfig.getDRIVER();
	
	public static String getLDRSDL_CFGFILE(){
		return LDRSDL_CFGFILE;
	}
	public static String getLDRSDL_DBS(){
		return LDRSDL_DBS;
	}
	public static String getLDRSDL_DRIVER(){
		return LDRSDL_DRIVER;
	}
		
}

