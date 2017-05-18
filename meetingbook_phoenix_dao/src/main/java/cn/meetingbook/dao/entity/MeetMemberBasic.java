package cn.meetingbook.dao.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * Created by zhangyi on 2017/5/15.
 * 会员基础信息实体
 */

@Data
@EqualsAndHashCode(callSuper = true)
public class MeetMemberBasic extends BaseEntity {

    private int id;

    private int userId;

    private String userName;

    private String userNickName;

    private String password;

    private String phone;

    private String province;

    private String city;

    private String district;

    private String mail;

    private int gender;

    private Date birthDay;

    private int readPoint;

    private int verifyStatus;

    private String userType;

    private String status;

    private Date createTime;

    private Date updateTime;

}
