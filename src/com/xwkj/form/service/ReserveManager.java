package com.xwkj.form.service;

import java.util.List;

import com.xwkj.form.domain.Reserve;

public interface ReserveManager {
	
	/**
	 * @param name
	 * @param telephone
	 * @param address
	 * @param service
	 * @param area
	 * @param user
	 * @param number
	 * @return
	 */
	String add(String name, String telephone, String address, String service, int area, String user, int number);
	
	/**
	 * @return
	 */
	List<Reserve> getAll();
	
	/**
	 * @param rid
	 */
	void remove(String rid);
}
