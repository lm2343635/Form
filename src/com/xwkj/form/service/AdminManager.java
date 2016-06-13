package com.xwkj.form.service;

import javax.servlet.http.HttpSession;

public interface AdminManager {
	public static final String ADMIN_FLAG="40288bfe5549e612015549f0e3de0001";
	
	/**
	 * 管理员登陆
	 * @param username
	 * @param password
	 * @return
	 */
	boolean login(String username,String password, HttpSession session);
	
	/**
	 * 检查管理员session
	 * @param session
	 * @return
	 */
	String checkSession(HttpSession session);
}