package cn.meetingbook.api.service;

import cn.meetingbook.api.dto.*;

/**
 * Created by zhangyi on 2017/5/25.
 * 会员相关service
 */
public interface MemberService {

    /**
     * 新用户注册请求
     * @param requestDto
     * @return
     */
    RegisterResponseDto registerRequest(RegisterRequestDto requestDto);

    /**
     * 短验确认并注册
     * @param requestDto
     * @return
     */
    SmsConfirmResponseDto smsConfirm(SmsConfirmRequestDto requestDto);

    /**
     * 登录
     * @param requestDto
     * @return
     */
    LoginResponseDto login(LoginRequestDto requestDto);

    /**
     * 更新密码
     * @param requestDto
     * @return
     */
    UpdatePasswordResponseDto updatePass(UpdatePasswordRequestDto requestDto);

    /**
     * 更新用户信息
     * @param info
     * @return
     */
    int updateUserExts(UserExtInfoDto info);
}
