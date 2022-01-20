package com.sx.ldlsc.jxjdpt.common;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.LinkedList;


import com.sx.log.Logx;
import com.sx.utility.StringTools;
public class SpecCharCheck {

	
	/**
	 * 对oracle操作校验字符串
	 * @param str
	 * @return
	 */
	public static String checkStr4Ora(String str) {
		String tmpstr = str;
		if(tmpstr==null){
			return null;
		}
		if (tmpstr.indexOf("'") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","' in "+tmpstr);
			return "'";
		}
		if (tmpstr.indexOf("/*") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","/* in "+tmpstr);
			return "/*";
		}
		if (tmpstr.indexOf("*/") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","*/ in "+tmpstr);
			return "*/";
		}
		if (tmpstr.indexOf("--") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","-- in "+tmpstr);
			return "--";
		}
		if (tmpstr.indexOf("\"") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","\" in "+tmpstr);
			return "\"";
		}
		if (tmpstr.indexOf("'--") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","'-- in "+tmpstr);
			return "'--";
		}
		if ((tmpstr.toLowerCase()).indexOf("chr(39)") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","chr(39) in "+tmpstr);
			return "chr(39)";
		}
		if ((tmpstr.toLowerCase()).indexOf("||") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","|| in "+tmpstr);
			return "||";
		}
		if ((tmpstr.toLowerCase()).indexOf("%27") != -1) {
			Logx.warning("SpecCharCheck","checkStr4Ora","|| in "+tmpstr);
			return "%27";
		}
		
		return null;
	}

	/**
	 * 对oracle操作校验VB
	 * @param dataBeanObj
	 * @return
	 */
	public static String checkBean4Ora(Object dataBeanObj) {
		LinkedList methodList = new LinkedList();
		try {
			Object tmpobj = null;
			String tmpstr = "";
			String retstr="";
			if (dataBeanObj == null) {
				return null;
			}
			Class dataBeanClass = dataBeanObj.getClass();
			if (dataBeanClass == null) {
				return null;
			}
			
			Field dataBeanField[] = dataBeanClass.getDeclaredFields();
			int fieldLen = 0;
			if (dataBeanField != null) {
				fieldLen = dataBeanField.length;
			}
			for (int i = 0; i < fieldLen; i++) {
				methodList.add("get" + dataBeanField[i].getName());
			}
			Method dataBeanMethod[] = dataBeanClass.getMethods();

			if (dataBeanMethod == null) {
				return null;
			}
			
			for (int i=0; i<methodList.size(); i++){
		        for(int j=0; j<dataBeanMethod.length; j++){
		          if(dataBeanMethod[j].getName().toUpperCase().equals((methodList.get(i).toString()).toUpperCase())){
						if (!dataBeanMethod[j].getReturnType().equals("Class".getClass())) {
							continue;
						}
						tmpobj = dataBeanMethod[j].invoke(dataBeanObj, null);
						if (tmpobj != null) {
							tmpstr = tmpobj.toString();
							Logx.message("SpecCharCheck","checkStr4Ora",dataBeanMethod[j].getName() + "="+ tmpstr);
							retstr=checkStr4Ora(tmpstr);
							if(!StringTools.toTrim(retstr).equals("")){
								return retstr+" "+tmpstr+" "+dataBeanMethod[j].getName();
							}
						}
		          }
		        }
			}
			
			return null;
		} catch (java.lang.reflect.InvocationTargetException e) {
			e.printStackTrace();
			Logx.exception("SpecCharCheck","checkStr4Ora",dataBeanObj.getClass()+" InvocationTargetException "+e.getMessage());
			return dataBeanObj.getClass()+" InvocationTargetException";
		} catch (java.lang.IllegalAccessException e) {
			e.printStackTrace();
			Logx.exception("SpecCharCheck","checkStr4Ora",dataBeanObj.getClass()+" IllegalAccessException "+e.getMessage());
			return dataBeanObj.getClass()+" IllegalAccessException";
		} catch (Exception e) {
			e.printStackTrace();
			Logx.exception("SpecCharCheck","checkStr4Ora",dataBeanObj.getClass()+" Exception "+e.getMessage());
			return dataBeanObj.getClass()+" Exception";
		}finally{
			methodList.clear();
		}
	}
}
