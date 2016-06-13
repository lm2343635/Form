package com.xwkj.form.dao;

import java.util.List;

import com.xwkj.common.hibernate3.support.CrudDao;
import com.xwkj.form.domain.Reserve;

public interface ReserveDao extends CrudDao<Reserve> {

	/**
	 * @return
	 */
	List<Reserve> find();
	
}
