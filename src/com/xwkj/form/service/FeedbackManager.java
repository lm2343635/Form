package com.xwkj.form.service;

import java.util.List;

import com.xwkj.form.domain.Feedback;

public interface FeedbackManager {
	
	/**
	 * @param name
	 * @param telephone
	 * @param address
	 * @param device
	 * @param message
	 * @return
	 */
	String add(String name, String telephone, String address, String device, String message);
	
	/**
	 * @return
	 */
	List<Feedback> getAll();
	
	/**
	 * @param fid
	 */
	void remove(String fid);

}
