package com.sx.ldlsc.jxjdpt.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import com.sx.utility.DateTools;


/**
 *
 * <p>Title: 北京市劳动力市场信息系统</p>
 * <p>Description: 北京市劳动力市场信息系统-职业介绍管理</p>
 * <p>Copyright: Copyright (c) 2005</p>
 * <p>Company: bksx</p>
 * <p>IPOid:    </p>
 * @author dedrp
 * @version 1.0
 * <p>生成日期：2005-12-16</p>
 */
public class DateHelper extends com.sx.utility.DateTools{
    /**
     * 格式化日期字符串
     *
     *@param
     *@param
     *@param
     *@return 格式化后的字符串
     */
    public static String dateFmt(String dateString,String source,String target) {
        if(StringHelper.isEmpty(dateString)) {
            return "";
        }
        com.sx.utility.DateTools myjt=new com.sx.utility.DateTools();
        return myjt.fmtDate(dateString,source,target);
    }

    /**
     * 得到当前的时间 格式为yyyyMMddhhmmss
     * @return
     */
    public static String getNow() {
        DateTools mydt=new DateTools();
        return mydt.getDate();// 当前时间
    }

    /**
     * 得到当前的时间 格式为yyyyMMdd
     * @return
     */
    public static String getToday() {
        DateTools mydt=new DateTools();
        return mydt.getDate("yyyyMMdd");// 当前时间
    }
    /**
     * 得到当前的时间 格式为自定义格式
     * @return
     */
    public static String getNow(String fmt) {
        DateTools mydt=new DateTools();
        return mydt.getDate(fmt);// 当前时间
    }
    /**
     * 得到自定义的时间
     * @return
     */
    public static String[] nextMoon(String kssj,String rqbz,int ys,String fmt){
        String[] value=new String[2];
        DateTools mydt=new DateTools();
//		开始时间
        value[0]=mydt.fmtDate(kssj,fmt,"yyyyMM")+rqbz+"000000";
//		结束时间
        value[1]=mydt.getBeforeTime(mydt.getBeforeTimeByM(value[0],"yyyyMMddHHmmss",ys,"yyyyMMddHHmmss"),"yyyyMMddHHmmss",1,"yyyyMMddHH")+"5959";
        return value;
    }

    /**
     * 得到当前季度的第一个月份 返回格式为YYYY-MM
     *
     * */
    public static String getJdks(){

        return DateHelper.getNow().substring(0,4) + "-" + (((Integer.parseInt(DateHelper.getNow().substring(4,6)) - 1)/3 * 3 + 101) + "").substring(1);
    }
    /**
     * 得到当前季度的最后一个月份 返回格式为YYYY-MM
     *
     * */
    public static String getJdjs(){

        return DateHelper.getNow().substring(0,4) + "-" + (((Integer.parseInt(DateHelper.getNow().substring(4,6)) - 1)/3 * 3 + 103) + "").substring(1);
    }

    /**
     * 得到当前月份的开始时间
     * @return
     */
    public static String getdqyq(){

        return DateHelper.dateFmt(DateHelper.getNow(),"yyyyMMddhhmmss","yyyy-MM"+"-01");
    }

    public static String getDqyj(){
        String yf = DateHelper.getNow().substring(4,6);
        String ny = DateHelper.dateFmt(DateHelper.getNow(),"yyyyMMddhhmmss","yyyy-MM");
        int nd = Integer.parseInt(DateHelper.getNow().substring(0,4));
        String jssj = "";
        switch(Integer.parseInt(yf)){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:jssj = ny+"-31";break;
            case 4:
            case 6:
            case 9:
            case 11:jssj = ny+"-30";break;
            case 2:
                if((nd%4 == 0 || nd%100 == 0)&& nd%400 != 0){
                    jssj = ny+"-29";break;
                }else{
                    jssj = ny+"-28";break;
                }

        }
        return jssj;
    }
    /**
     * 获取指定日期的最后一天
     * @param rq
     * @return
     */
    public static String getZhyt(String rq){
        if(StringHelper.isNotEmpty(rq)){
            if(rq.length()==8){
                rq= DateHelper.dateFmt(rq, "yyyyMMdd", "yyyy-MM");
            }
            if(rq.length()==14){
                rq = DateHelper.dateFmt(rq, "yyyyMMddhhmmss", "yyyy-MM");
            }
            if(rq.length()==10){
                rq = DateHelper.dateFmt(rq, "yyyy-MM-dd", "yyyy-MM");
            }
            if(rq.length()==6){
                rq = DateHelper.dateFmt(rq, "yyyyMM", "yyyy-MM");
            }
            String yf = rq.substring(5);
            String ny = rq;
            int nd = Integer.parseInt(rq.substring(0,4));
            String jssj = "";
            switch(Integer.parseInt(yf)){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:jssj = ny+"-31";break;
                case 4:
                case 6:
                case 9:
                case 11:jssj = ny+"-30";break;
                case 2:
                    if((nd%4 == 0 || nd%100 == 0)&& nd%400 != 0){
                        jssj = ny+"-29";break;
                    }else{
                        jssj = ny+"-28";break;
                    }

            }
            return jssj;
        }else{
            return "";
        }
    }
    /**例如：201411 转换成 201410
     *
     */
    public static String getsgy(String date){
        if(StringHelper.isNotEmpty(date)){
            int year = Integer.parseInt(date.substring(0,4));
            int month = Integer.parseInt(date.substring(4,6));
            if(month == 1){
                return year-1+"12";
            }else{
                return year+""+jl((month-1));
            }
        }else{
            return "";
        }
    }
    /**例如：201411转换成 201412
     * 获取下一个月
     */
    public static String getxgy(String date){
        if(StringHelper.isNotEmpty(date)){
            int year = Integer.parseInt(date.substring(0,4));
            int month = Integer.parseInt(date.substring(4,6));
            if(month == 12){
                return year+1+"01";
            }else{
                return year+""+jl((month+1));
            }
        }else{
            return "";
        }
    }
    /**
     * 获取指定时间的下一天
     * @param rq 格式必须为yyyy-MM-dd
     * @return
     */
    public static String getXyt(String rq){
        SimpleDateFormat smf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar cld = Calendar.getInstance();
        Date date =null;
        try {
            date= smf.parse(rq);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        cld.setTime(date);
        int day=cld.get(Calendar.DATE);
        cld.set(Calendar.DATE, day+1);
        String res = smf.format(cld.getTime());
        return res;
    }
    /**
     * 获取指定时间的上一天
     * @param rq 格式必须为yyyy-MM-dd
     * @return
     */
    public static String getSyt(String rq){
        SimpleDateFormat smf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar cld = Calendar.getInstance();
        Date date =null;
        try {
            date= smf.parse(rq);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        cld.setTime(date);
        int day=cld.get(Calendar.DATE);
        cld.set(Calendar.DATE, day+(-1));
        String res = smf.format(cld.getTime());
        return res;
    }
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
     * 获取当前年月的上上月
     * 例如 现在201412  得到201410
     * @return
     */
    public static String getSsy(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH,-2);
        Date date = cal.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
        return sdf.format(date);
    }
    /**
     * 获取若干月之后的日期:
     * 支持自定义常用格式
     * 例：向前2个月  传-2；向后两个月 传2
     * @return
     */
    public static String getDateByMonth(int month,String format){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH,month);
        Date date = cal.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }
    /**
     * 获取当前年月的下月
     * 例如 现在201412  得到201501
     * @return
     */
    public static String getXy(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH,1);
        Date date = cal.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
        return sdf.format(date);
    }
    /**
     * 获取指定时间
     * @param month
     * @return
     */
    public static String getZdsj(String rq,int month){
        SimpleDateFormat smf = null;
        if(rq.length()==10){
            smf = new SimpleDateFormat("yyyy-MM-dd");
        }
        if(rq.length()==7){
            smf = new SimpleDateFormat("yyyy-MM");
        }
        if(rq.length()==8){
            smf = new SimpleDateFormat("yyyyMMdd");
        }
        if(rq.length()==6){
            smf = new SimpleDateFormat("yyyyMM");
        }
        Calendar cld = Calendar.getInstance();
        Date date =null;
        try {
            date= smf.parse(rq);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        cld.setTime(date);
        int day=cld.get(Calendar.MONTH);
        cld.set(Calendar.MONTH, day+(month));
        String res = smf.format(cld.getTime());
        return res;
    }
    /**
     * 获取两个日期间隔月数(开始日期是1号结束必须是结束月月底)
     * @param ksrq
     * @param jsrq
     * @return
     */
    public static long getSjc(String ksrq,String jsrq){
        String day="";
        if(ksrq!=null&&ksrq.length()==10){
            ksrq = dateFmt(ksrq, "yyyy-MM-dd", "yyyyMMdd");
            day = ksrq.substring(6);
        }
        if(ksrq!=null&&ksrq.length()==7){
            ksrq = dateFmt(ksrq, "yyyy-MM", "yyyyMM");
        }
        if(jsrq!=null&&jsrq.length()==10){
            jsrq = dateFmt(jsrq, "yyyy-MM-dd", "yyyyMMdd");
        }
        if(jsrq!=null&&jsrq.length()==7){
            jsrq = dateFmt(jsrq, "yyyy-MM", "yyyyMM");
        }
        if(StringHelper.isNotEmpty(ksrq)&&StringHelper.isNotEmpty(jsrq)){
            int year = Integer.parseInt(jsrq.substring(0, 4))-Integer.parseInt(ksrq.substring(0, 4));
            int month = Integer.parseInt(jsrq.substring(4, 6))-Integer.parseInt(ksrq.substring(4, 6));
            if("01".equals(day)){
                return year*12+month+1;
            }
            return year*12+month;
        }
        return -1;
    }


    /**
     * 间隔时间计算 返回ms
     * @param startTime
     * @param endTime
     * @return
     */
    public static long jgsjJs(String startTime,String endTime){
        DateTools dt=new DateTools();
        return Long.parseLong(dt.cntTimeDifference(startTime,endTime,"yyyyMMddHHmmss","ms"));
    }
    /**
     * 以yyyyMMddhhmmss格式显示指定日期的0时0分0秒
     * @param date
     * @return
     */
    public static String getZeroSecond(String date){
        return new DateTools().fmtDate(date, "yyyy-MM-dd", "yyyyMMdd") + "000000";
    }
    /**
     * 以yyyyMMddhhmmss格式显示指定日期的23时59分59秒
     * @param date
     * @return
     */
    public static String getlastSecond(String date){
        return new DateTools().fmtDate(date, "yyyy-MM-dd", "yyyyMMdd") + "235959";
    }

    /**
     * 获取当前年月的后15天

     *
     * @return
     */
    public static String getHou15(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE,-15);
        Date date = cal.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        return sdf.format(date);
    }
}
