package cn.meetingbook.dao.impl;

import cn.meetingbook.dao.MeetMemberActionDao;
import cn.meetingbook.dao.entity.MeetMemberAction;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by zhangyi-ds6 on 2017/5/24.
 */
@Repository
public class MeetMemberActionDaoImpl implements MeetMemberActionDao {

    public int add(MeetMemberAction meetMemberAction) {
        return 0;
    }

    public void delete(Object id) {

    }

    public int update(MeetMemberAction meetMemberAction) {
        return 0;
    }

    public MeetMemberAction findById(int id) {
        return null;
    }

    public List<MeetMemberAction> findListByCondition(MeetMemberAction meetMemberAction) {
        return null;
    }

    public List<MeetMemberAction> findAll() {
        return null;
    }
}
