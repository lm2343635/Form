package com.xwkj.form.dao;

import java.util.List;

import com.xwkj.common.hibernate3.support.CrudDao;
import com.xwkj.form.domain.Feedback;

public interface FeedbackDao extends CrudDao<Feedback> {
	
	/**
	 * @return
	 */
	List<Feedback> find();

}
