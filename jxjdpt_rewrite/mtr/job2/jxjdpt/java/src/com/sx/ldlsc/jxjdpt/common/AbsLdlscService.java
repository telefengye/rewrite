package com.sx.ldlsc.jxjdpt.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sx.exception.AppErrorCode;

public class AbsLdlscService {

	//日志
	protected final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	//提示消息
	protected AppErrorCode message;

	public AppErrorCode getMessage() {
		return message;
	}
	//分页
	protected int intRowsCount = 0; // 总页数
	protected int intPageCount = 0; // 总行数
	protected int intStartNum = 1; // 开始行数

	
	public int getIntPageCount() {
		return intPageCount;
	}
	    
	public int getIntRowsCount() {
		return intRowsCount;
	}
	    
	public int getIntStartNum() {
		return intStartNum;
	}

	
}