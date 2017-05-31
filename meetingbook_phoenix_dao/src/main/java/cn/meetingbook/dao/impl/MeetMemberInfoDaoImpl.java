package cn.meetingbook.dao.impl;

import cn.meetingbook.dao.MeetMemberInfoDao;
import cn.meetingbook.dao.entity.MeetMemberInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by zhangyi-ds6 on 2017/5/24.
 */
@Repository
public class MeetMemberInfoDaoImpl implements MeetMemberInfoDao {

    public int add(MeetMemberInfo meetMemberInfo) {
        return 0;
    }

    public void delete(Object id) {

    }

    public int update(MeetMemberInfo meetMemberInfo) {
        return 0;
    }

    public MeetMemberInfo findById(int id) {
        return null;
    }

    public List<MeetMemberInfo> findListByCondition(MeetMemberInfo meetMemberInfo) {
        return null;
    }

    public List<MeetMemberInfo> findAll() {
        return null;
    }
}
