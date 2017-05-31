package cn.meetingbook.api.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by zhangyi on 2017/5/25.
 */
@Data
public class RegisterResponseDto implements Serializable {

    private String phone;

    private String smsCode;

    private Integer tryCount;

    private String errorCode;

    private String errorMsg;

}
