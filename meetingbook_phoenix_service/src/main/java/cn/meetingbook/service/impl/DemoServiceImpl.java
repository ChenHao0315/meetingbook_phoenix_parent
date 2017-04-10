package cn.meetingbook.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.meetingbook.BeanCopyUtils;
import cn.meetingbook.api.model.DemoModel;
import cn.meetingbook.api.service.DemoService;
import cn.meetingbook.dao.mapper.DemoMapper;

@Service("demoService")
public class DemoServiceImpl implements DemoService{

	@Autowired
	DemoMapper demoMapper;

	@Override
	public DemoModel findById(int id) throws Exception {
		
		return BeanCopyUtils.copyProperties(demoMapper.findById(id), DemoModel.class);
	}

}
