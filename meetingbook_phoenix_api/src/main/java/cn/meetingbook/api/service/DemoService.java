package cn.meetingbook.api.service;

import cn.meetingbook.api.model.DemoModel;

public interface DemoService {
	
	public DemoModel findById(int id) throws Exception;

}
