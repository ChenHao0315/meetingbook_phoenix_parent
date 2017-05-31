package cn.meetingbook.api.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by zhangyi on 2017/5/25.
 * 修改个人信息参数
 */
@Data
public class UserExtInfoDto implements Serializable{

    private String userNickName;

    private String gender;

    private String birthDay;

    private String province;

    private String city;

    private String district;

}
