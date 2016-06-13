package com.xwkj.form.service.impl;

import java.util.Date;
import java.util.List;

import com.xwkj.form.domain.Feedback;
import com.xwkj.form.service.FeedbackManager;
import com.xwkj.form.service.util.ManagerTemplate;

public class FeedbackManagerImpl extends ManagerTemplate implements FeedbackManager {

	@Override
	public String add(String name, String telephone, String address, String device, String message) {
		Feedback feedback=new Feedback();
		feedback.setName(name);
		feedback.setTelephone(telephone);
		feedback.setAddress(address);
		feedback.setDevice(device);
		feedback.setMessage(message);
		feedback.setCreateDate(new Date());
		return feedbackDao.save(feedback);
	}

	@Override
	public List<Feedback> getAll() {
		return feedbackDao.find();
	}

	@Override
	public void remove(String fid) {
		feedbackDao.delete(fid);
	}

}
