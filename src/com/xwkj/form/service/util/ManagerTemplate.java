package com.xwkj.form.service.util;

import com.xwkj.form.dao.FeedbackDao;
import com.xwkj.form.dao.ReserveDao;

public class ManagerTemplate {
	protected FeedbackDao feedbackDao;
	protected ReserveDao reserveDao;
	
	public FeedbackDao getFeedbackDao() {
		return feedbackDao;
	}
	public void setFeedbackDao(FeedbackDao feedbackDao) {
		this.feedbackDao = feedbackDao;
	}
	public ReserveDao getReserveDao() {
		return reserveDao;
	}
	public void setReserveDao(ReserveDao reserveDao) {
		this.reserveDao = reserveDao;
	}
}
