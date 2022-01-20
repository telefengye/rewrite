package com.sx.ldlsc.jxjdpt.common;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import com.sx.utility.StringTools;

/**
 * <p>
 * Title: 北京市劳动力市场信息系统
 * </p>
 * <p>
 * Description: 北京市劳动力市场信息系统
 * </p>
 * <p>
 * Copyright: Copyright (c) 2005
 * </p>
 * <p>
 * Company: bksx
 * </p>
 *
 * @author
 * @version 1.0
 */
public final class StringHelper extends com.sx.utility.StringTools{

    /**
     * 判断字符串是否为非空
     *
     * @param string
     * @return
     */
    public static boolean isNotEmpty(String string) {
        return !isEmpty(string);
    }

    /**
     * 判断字符串是否为空
     *
     * @param string
     * @return
     */
    public static boolean isEmpty(String string) {
        return "".equals(com.sx.utility.StringTools.toTrim(string));
    }

    /**
     * 用途：调用此方法可将页面中的空值（null,"","null"）转换为"&nbsp;"。
     *
     * @param
     */

    public static String vtoh(String temp) {
        if (StringTools.toTrim(temp).equals("")) {
            return "&nbsp";
        }
        return temp;
    }

    /**
     * <pre>
     *     把valueBean中的所有字符属性执行stringtools.totrim()方法
     *     这个方法不包括继承得来的属性
     * </pre>
     *
     * @param obj
     */
    public static void ntos(Object obj) {
        try {
            Class dataBeanClass = obj.getClass();
            Field dataBeanField[] = dataBeanClass.getDeclaredFields();
            String f_name;// 参数名称
            String m_name;// 方法名称
            Method gmethod;// 方法
            Method smethod;// 方法
            String c_value;// 值
            // 处理插入的结构列
            for (int i = 0; i < dataBeanField.length; i++) {
                if (!(dataBeanField[i].getType().equals("test".getClass()))) {// 如果不是字符型
                    continue;
                }
                f_name = dataBeanField[i].getName();// 列名
                m_name = "get" + Character.toUpperCase(f_name.charAt(0)) + f_name.substring(1);// 得到该列的get方法
                gmethod = obj.getClass().getMethod(m_name, null);
                m_name = "set" + Character.toUpperCase(f_name.charAt(0)) + f_name.substring(1);// 得到该列的get方法
                smethod = obj.getClass().getMethod(m_name, new Class[] { dataBeanField[i].getType() });
                c_value = (String) gmethod.invoke(obj, null);// 取值
                c_value = StringTools.toTrim(c_value);
                smethod.invoke(obj, new Object[] { c_value });// 符值
            }
        }
        catch (Exception e) {
            System.err.println(e);
        }
    }

    /**
     * <pre>
     *     把valueBean中的所有字符属性执行stringtools.totrim()方法
     *     这个方法包括继承得来的属性
     * </pre>
     *
     * @param obj
     */
    public static void ntosWithSuper(Object obj) {
        try {
            Class dataBeanClass = obj.getClass();
            String temp;
            Method[] dataMethod = dataBeanClass.getMethods();// 得到所有的方法
            Method gmethod;// 对象的get方法
            String c_value;// 值
            for (int i = 0; i < dataMethod.length; i++) {
                /**
                 * 如果不是set方法，继续
                 */
                if (dataMethod[i].getName().indexOf("set") == -1) {
                    continue;
                }
                /**
                 * 如果不是字符类型，继续
                 */
                if (!dataMethod[i].getParameterTypes()[0].equals("test".getClass())) {
                    continue;
                }
                // 从方法名称中得到set后面的字符
                temp = dataMethod[i].getName().substring(dataMethod[i].getName().indexOf("set") + 3);
                gmethod = obj.getClass().getMethod("get" + temp, null);
                c_value = (String) gmethod.invoke(obj, null);// 取值
                c_value = StringTools.toTrim(c_value);
                dataMethod[i].invoke(obj, new Object[] { c_value });// 符值
            }
        }
        catch (Exception e) {
            System.err.println(e);
        }
    }

    public static String format(String input, int length) {
        String temp = "<SPAN title=\"" + input + "\">";
        temp += StringTools.fmtString(input, length);
        temp += "</SPAN>";
        return temp;
    }

    /**
     * 把输入的字符型数字乘100返回整数部分
     * @param temp
     * @return
     */
    public static int toInt(String temp) {
        return (int)(Double.parseDouble(temp) * 100+0.5d);
    }

    /**
     * 对字符型数组进行去重处理
     * @param temp
     * @return
     */
    public static String[] distSArray(String[] temp) {
        if (temp == null) {// 如果数组为空，则返回
            return temp;
        }
        if (temp.length < 2) {// 如果数组长度小于2，返回
            return temp;
        }
        boolean flag = true;
        List alist = new ArrayList();
        try {
            alist.add(temp[0]);
            for (int i = 0; i < temp.length; i++) {
                if (temp[i] == null) {
                    continue;
                }
                flag = true;
                for (int j = 0; j < alist.size(); j++) {
                    if (temp[i].equals(alist.get(j))) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    alist.add(temp[i]);
                }
            }
            return (String[]) alist.toArray(new String[0]);
        }
        catch (Exception e) {
            System.err.println();
            return temp;
        }
        finally {
            alist.clear();
        }
    }
    /**
     * 保留两位小数
     * @param
     * @return
     */
    public static String bllwxs(String dou) {
        if(StringHelper.isEmpty(dou) || "NAN".equals(dou.toUpperCase())){
            return "0%";
        }else if("Infinity".equals(dou)){
            return "100%";
        }
        if(dou.indexOf(".") > -1){
            dou = Math.round(Double.parseDouble(dou)*100)/100.00 + "";
            int k = dou.substring(dou.lastIndexOf(".")).length() - 1;
            for (int i = 0; i < 2 - k; i++) {
                dou += "0";
            }
        }else{
            dou += ".00";
        }
        if("0.00".equals(dou)){
            return "0%";
        }
        return dou + "%";
    }

    /**
     * 保留两位小数
     * @param
     * @return
     */
    public static String bllwx(String dou) {
        if(StringHelper.isEmpty(dou) || "NAN".equals(dou.toUpperCase())){
            return "0";
        }else if("Infinity".equals(dou)){
            return "100";
        }
        if(dou.indexOf(".") > -1){
            dou = Math.round(Double.parseDouble(dou)*100)/100.00 + "";
            int k = dou.substring(dou.lastIndexOf(".")).length() - 1;
            for (int i = 0; i < 2 - k; i++) {
                dou += "0";
            }
        }else{
            dou += ".00";
        }
        if("0.00".equals(dou)){
            return "0";
        }
        return dou;
    }

    /**
     * 获取到小数点后有4位小数的double值（不够4位补0）  传入0或者0.0之类值为0的直接返回0    传入科学计数法也行（如传入2.0E-4 则返回0.0002）
     *
     * */
    public static String getDoubleFormat(String source){
        double d = Double.parseDouble(source);
        DecimalFormat df1 = new DecimalFormat("##########.####");
        source = df1.format(d);
        if(!"0".equals(source)){
            if(source.lastIndexOf(".") > 0){
                int k = source.substring(source.lastIndexOf(".")).length() - 1;
                for (int i = 0; i < 4 - k; i++) {
                    source += "0";
                }
            }else{
                source += ".0000";
            }
        }
        return source;
    }
    /**
     * 计算环比开始和结束日期
     * @param
     * @param
     * @return
     */
    public static String[] hbjd(String ks,String js){
        String[] rs = new String[2];
        int yf1 = Integer.parseInt(ks.substring(4,6));
        int yf2 = Integer.parseInt(js.substring(4,6));
        int nd = Integer.parseInt(ks.substring(0,4));
        if(yf1-1 == 0){
            rs[1] = (nd-1)+"12"+"32235959";
        } else{
            rs[1] = nd+""+jl((yf1-1+12)%12)+"32235959";
        }
        if(yf1-1-(yf2-yf1+1)>=0){
            rs[0] = nd+""+jl((yf1-1-(yf2-yf1)+12)%12)+"01000000";
        }else{
            rs[0] = (nd-1)+""+jl((yf1-1-(yf2-yf1)+12)%12)+"01000000";
        }
        return rs;
    }
    /**
     * 将月份转换成字符串 例如：2月 转换成02 10月转换成10月
     * @param yf
     * @return
     */
    public static String jl(int yf){
        String month="";
        if(yf<10){
            month = "0"+yf;
        }else{
            month = yf+"";
        }
        return month;
    }
    /**
     * 获取上下五年的select框
     * @param value
     * @return
     */
    public static String ndSelext(String value){
        String now = DateHelper.getNow();
        int nd = Integer.parseInt(now.substring(0,4));
        String sel ="";
        String sel1 ="";
        String sel2 ="";
        String sel3 ="";
        String sel4 ="";
        String sel5 ="";
        String sel6 ="";
        String sel7 ="";
        String sel8 ="";
        String sel9 ="";
        String sel0 ="";
        if((nd-5+"").equals(value)){
            sel="selected";
        }else if((nd-4+"").equals(value)){
            sel1="selected";
        }else if((nd-3+"").equals(value)){
            sel2="selected";
        }else if((nd-2+"").equals(value)){
            sel3="selected";
        }else if((nd-1+"").equals(value)){
            sel4="selected";
        }else if((nd+"").equals(value)){
            sel5="selected";
        }else if((nd+1+"").equals(value)){
            sel6="selected";
        }else if((nd+2+"").equals(value)){
            sel7="selected";
        }else if((nd+3+"").equals(value)){
            sel8="selected";
        }else if((nd+4+"").equals(value)){
            sel9="selected";
        }else if((nd+5+"").equals(value)){
            sel0="selected";
        }
        String select = "<option value=\""+(nd-5)+"\" "+sel+">"+(nd-5)+"</option>"+
                "<option value=\""+(nd-4)+"\" "+sel1+">"+(nd-4)+"</option>"+
                "<option value=\""+(nd-3)+"\" "+sel2+">"+(nd-3)+"</option>"+
                "<option value=\""+(nd-2)+"\" "+sel3+">"+(nd-2)+"</option>"+
                "<option value=\""+(nd-1)+"\" "+sel4+">"+(nd-1)+"</option>"+
                "<option value=\""+nd+"\" "+sel5+">"+nd+"</option>"+
                "<option value=\""+(nd+1)+"\" "+sel6+">"+(nd+1)+"</option>"+
                "<option value=\""+(nd+2)+"\" "+sel7+">"+(nd+2)+"</option>"+
                "<option value=\""+(nd+3)+"\" "+sel8+">"+(nd+3)+"</option>"+
                "<option value=\""+(nd+4)+"\" "+sel9+">"+(nd+4)+"</option>"+
                "<option value=\""+(nd+5)+"\" "+sel0+">"+(nd+5)+"</option>";
        return select;
    }

    /**
     * 将月份转换 日期格式yyyy-MM 例如02转换成2
     * @param yf
     * @return
     */
    public static String getyf(String yf){
        String yf1 = "";
        if("0".equals(yf.substring(5,6))){
            yf1=yf.substring(6);
        }else{
            yf1=yf.substring(5);
        }
        return yf1;
    }

    /**
     * 将月份转换 日期格式yyyyMMddhhmmss 例如02转换成2
     * @param yf
     * @return
     */
    public static String getyf1(String yf){
        String yf1 = "";
        if("0".equals(yf.substring(4,5))){
            yf1=yf.substring(5,6);
        }else{
            yf1=yf.substring(4,6);
        }
        return yf1;
    }
    /**
     * 获取文件下载时的modeName
     * @param rst
     * @return
     */
    public static String[] getModeName(String[][] rst){
        String wjj = "";
        String hzm="";
        ArrayList list = new ArrayList();
        if(rst != null && rst.length>0){
            for(int i=0;i<rst.length;i++){
                if(StringHelper.isNotEmpty(rst[i][0])){
                    if(-1 != rst[i][0].indexOf(".")){
                        if(".jpg".equals(rst[i][0].substring(rst[i][0].indexOf(".")))){
                            wjj = "jpg";
                        }else if(".xls".equals(rst[i][0].substring(rst[i][0].indexOf(".")))||".xlsx".equals(rst[i][0].substring(rst[i][0].indexOf(".")))){
                            wjj = "excel";
                        }else if(".doc".equals(rst[i][0].substring(rst[i][0].indexOf(".")))||".docx".equals(rst[i][0].substring(rst[i][0].indexOf(".")))){
                            wjj = "word";
                        }
                        hzm = rst[i][0].substring(rst[i][0].indexOf("."));
                    }
                }
                list.add(wjj);
                list.add(hzm);
            }
        }
        String[] res = new String[list.size()];
        return (String[]) list.toArray(res);
    }

    /**
     * 根据级别id获取级别名称
     * @param jbid
     * @return
     */
    public static String getJbmcByJbid(String jbid){
        String jbmc="";
        if("1".equals(jbid)){
            jbmc="市";
        }else if("2".equals(jbid)){
            jbmc="区县";
        }else if("3".equals(jbid)){
            jbmc="街道";
        }else{
        }
        return jbmc;
    }

}
