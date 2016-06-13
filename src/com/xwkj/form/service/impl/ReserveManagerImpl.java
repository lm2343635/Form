package com.xwkj.form.service.impl;
import java.util.Date;
import java.util.List;

import com.xwkj.form.domain.Reserve;
import com.xwkj.form.service.ReserveManager;
import com.xwkj.form.service.util.ManagerTemplate;

public class ReserveManagerImpl extends ManagerTemplate implements ReserveManager {

	@Override
	public String add(String name, String telephone, String address, String service, int area, String user, int number) {
		Reserve reserve=new Reserve();
		reserve.setName(name);
		reserve.setTelephone(telephone);
		reserve.setAddress(address);
		reserve.setService(service);
		reserve.setArea(area);
		reserve.setUser(user);
		reserve.setNumber(number);
		reserve.setCreateDate(new Date());
		return reserveDao.save(reserve);
	}

	@Override
	public List<Reserve> getAll() {
		return reserveDao.find();
	}

	@Override
	public void remove(String rid) {
		reserveDao.delete(rid);
	}

}
