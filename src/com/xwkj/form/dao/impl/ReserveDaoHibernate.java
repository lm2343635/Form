package com.xwkj.form.dao.impl;

import java.util.List;

import com.xwkj.common.hibernate3.support.PageHibernateDaoSupport;
import com.xwkj.form.dao.ReserveDao;
import com.xwkj.form.domain.Reserve;

public class ReserveDaoHibernate extends PageHibernateDaoSupport<Reserve> implements ReserveDao {

	@SuppressWarnings("unchecked")
	@Override
	public List<Reserve> find() {
		return getHibernateTemplate().find("from Reserve order by createDate desc");
	}

}
