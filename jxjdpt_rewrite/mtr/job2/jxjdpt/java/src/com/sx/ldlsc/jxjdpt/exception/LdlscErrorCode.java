package com.sx.ldlsc.jxjdpt.exception;

import com.sx.exception.AppErrorCode;

/**
 * <p>Title: 北京市劳动力市场信息系统，错误代码</p>
 * <p>Description: 北京市劳动力市场信息系统，错误代码</p>
 * <p>Copyright: Copyright (c) 2005</p>
 * <p>Company: bksx</p>
 * @author not attributable
 * @version 1.0
 */

public class LdlscErrorCode
    extends AppErrorCode {
  /**
   * 构造方法
   * @param errortype
   * @param errmsg
   * @param url
   */
  protected LdlscErrorCode(int errortype, String errmsg, String url) {
    super(errortype, errmsg, url);
  }

  public static final LdlscErrorCode ISSUELESS=new LdlscErrorCode(LdlscErrorCode.MSG,"没有符合查询条件的结果", "");
  public static final LdlscErrorCode error001 = new LdlscErrorCode(LdlscErrorCode.MSG, "文件必须是.xls", "");
  public static final LdlscErrorCode error002 = new LdlscErrorCode(LdlscErrorCode.MSG, "文件必须有后缀名", "");
  public static final LdlscErrorCode error003 = new LdlscErrorCode(LdlscErrorCode.MSG, "组织机构代码不匹配", "");
  public static final LdlscErrorCode error004 = new LdlscErrorCode(LdlscErrorCode.MSG, "操作成功", "");
  public static final LdlscErrorCode error005 = new LdlscErrorCode(LdlscErrorCode.MSG, "操作失败", "");
  public static final LdlscErrorCode error006 = new LdlscErrorCode(LdlscErrorCode.MSG, "文件必须是.gif.png.jpg.jpeg.bmp", "");
  
  
  public static final LdlscErrorCode BSY = new LdlscErrorCode(LdlscErrorCode.MSG,"单位正在被其他人使用，请稍后重试", "");
  public static final LdlscErrorCode DWYSM = new LdlscErrorCode(LdlscErrorCode.MSG,"单位已升码，请使用18位统一社会信用代码", "");
  public static final LdlscErrorCode DWBCZ = new LdlscErrorCode(LdlscErrorCode.MSG,"单位不存在", "");
  public static final LdlscErrorCode TYMYCZ = new LdlscErrorCode(LdlscErrorCode.MSG,"统一社会信用代码已被使用", "");
  public static final LdlscErrorCode TYMBZQ = new LdlscErrorCode(LdlscErrorCode.MSG,"该统一社会信用代码不正确", "");
  public static final LdlscErrorCode TYMYZ = new LdlscErrorCode(LdlscErrorCode.MSG,"该统一社会信用代码与社保库一致", "");
  public static final LdlscErrorCode TYMBYZ = new LdlscErrorCode(LdlscErrorCode.MSG,"该统一社会信用代码与社保库不一致", "");
  public static final LdlscErrorCode TYMBCZ = new LdlscErrorCode(LdlscErrorCode.MSG,"该统一社会信用代码在社保库中不存在", "");
}