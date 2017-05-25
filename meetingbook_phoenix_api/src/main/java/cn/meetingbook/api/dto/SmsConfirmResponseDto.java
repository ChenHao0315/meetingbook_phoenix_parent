package cn.meetingbook.api.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by zhangyi on 2017/5/25.
 */
@Data
public class SmsConfirmResponseDto implements Serializable {

    private String phone;

    private String status;

    private String errorCode;

    private String errorMsg;

}
