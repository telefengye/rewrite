package com.sx.ldlsc.jxjdpt.conf;
import com.sx.conf.DbaConfig;

/**
 * <p>Title: 北京市劳动力市场信息系统</p>
 * <p>Description: 北京市劳动力市场信息系统</p>
 * <p>Copyright: Copyright (c) 2005</p>
 * <p>Company: bksx</p>
 * @author oyxz
 * @version 1.0
 */

public class SyryDbaConfig extends DbaConfig {

  /**
   * syrydba配置文件路径
   */
  private static String SYRY_CFGFILE =DbaConfig.getCFGFILE() ;
  /**
   * syrydbs名称
   */
  private static String SYRY_DBS=DbaConfig.getDBS() ;
  /**
   * syrydriver名称
   */
  private static String SYRY_DRIVER=DbaConfig.getDRIVER() ;

  public static String getSYRY_CFGFILE() {
    return SYRY_CFGFILE;
  }
  public static String getSYRY_DBS() {
    return SYRY_DBS;
  }
  public static String getSYRY_DRIVER() {
    return SYRY_DRIVER;
  }

}