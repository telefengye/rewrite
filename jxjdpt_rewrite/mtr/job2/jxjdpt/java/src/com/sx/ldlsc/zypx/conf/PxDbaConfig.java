package com.sx.ldlsc.zypx.conf;
import com.sx.conf.DbaConfig;

/**
 * <p>Title: 北京市劳动力市场信息系统</p>
 * <p>Description: 北京市劳动力市场信息系统</p>
 * <p>Copyright: Copyright (c) 2005</p>
 * <p>Company: bksx</p>
 * @author oyxz
 * @version 1.0
 */

public class PxDbaConfig extends DbaConfig{


  /**
   * zjdba配置文件路径
   */
  private static String PX_CFGFILE =DbaConfig.getCFGFILE() ;
  /**
   * zjdbs名称
   */
  private static String PX_DBS=DbaConfig.getDBS() ;
  /**
   * zjdriver名称
   */
  private static String PX_DRIVER=DbaConfig.getDRIVER() ;




  public static String getPX_CFGFILE() {
    return PX_CFGFILE;
  }
  public static String getPX_DBS() {
    return PX_DBS;
  }
  public static String getPX_DRIVER() {
    return PX_DRIVER;
  }







}