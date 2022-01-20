package com.sx.ldlsc.conf;
import com.sx.conf.AppConfig;
import com.sx.conf.ReadXml;
import com.sx.conf.SysConfig;

/**
 * <p>Title: 北京市劳动力市场信息系统，全局参数</p>
 * <p>Description: 北京市劳动力市场信息系统，全局参数</p>
 * <p>Copyright: Copyright (c) 2005</p>
 * <p>Company: bksx</p>
 * @author unascribed
 * @version 1.0
 */

public class LdlscAppConfig extends AppConfig{
  /**
   * 男退休年龄
   */
  private static int NANTXNL = 60;
  /**
   * 女退休年龄
   */
  private static int NVTXNL = 50;
  
  /**
   * 女干部退休年龄
   */
  private static int  NVGBTXNL = 55;
 
  
  
  

public static int getNVTXNL() {
    return LdlscAppConfig.NVTXNL;
  }

  public static int getNANTXNL() {
    return LdlscAppConfig.NANTXNL;
  }

  public static int getNVGBTXNL() {
	return NVGBTXNL;
  }
	public boolean initSxConfig() {
		ReadXml rx = new ReadXml(SysConfig.getSX_APP_CONFIG_PATH());
		try {
		} catch (Exception e) {
			 
			return false;
		}
		return true;
	}

}