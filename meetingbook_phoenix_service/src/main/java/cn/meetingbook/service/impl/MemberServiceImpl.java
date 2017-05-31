package cn.meetingbook.service.impl;

import cn.meetingbook.api.dto.*;
import cn.meetingbook.api.service.MemberService;
import cn.meetingbook.dao.MeetMemberActionDao;
import cn.meetingbook.dao.MeetMemberBasicDao;
import cn.meetingbook.dao.MeetMemberInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zhangyi on 2017/5/25.
 */
@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    private MeetMemberBasicDao meetMemberBasicDao;

    @Autowired
    private MeetMemberInfoDao meetMemberInfoDao;

    @Autowired
    private MeetMemberActionDao meetMemberActionDao;


    @Override
    public RegisterResponseDto registerRequest(RegisterRequestDto requestDto) {
        return null;
    }

    @Override
    public SmsConfirmResponseDto smsConfirm(SmsConfirmRequestDto requestDto) {
        return null;
    }

    @Override
    public LoginResponseDto login(LoginRequestDto requestDto) {
        return null;
    }

    @Override
    public UpdatePasswordResponseDto updatePass(UpdatePasswordRequestDto requestDto) {
        return null;
    }

    @Override
    public int updateUserExts(UserExtInfoDto info) {
        return 0;
    }
}
