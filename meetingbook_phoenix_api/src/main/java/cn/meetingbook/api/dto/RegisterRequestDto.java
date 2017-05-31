package cn.meetingbook.api.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by zhangyi on 2017/5/25.
 */
@Data
public class RegisterRequestDto implements Serializable {

    private String phone;

}
