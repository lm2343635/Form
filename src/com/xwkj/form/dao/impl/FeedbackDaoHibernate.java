package com.xwkj.form.dao.impl;

import java.util.List;

import com.xwkj.common.hibernate3.support.PageHibernateDaoSupport;
import com.xwkj.form.dao.FeedbackDao;
import com.xwkj.form.domain.Feedback;

public class FeedbackDaoHibernate extends PageHibernateDaoSupport<Feedback> implements FeedbackDao {

	public FeedbackDaoHibernate() {
		super();
		setClass(Feedback.class);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Feedback> find() {
		return getHibernateTemplate().find("from Feedback order by createDate desc");
	}

}
