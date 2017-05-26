package cn.meetingbook.dao.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * Created by zhangyi-ds6 on 2017/5/24.
 */

@Data
@EqualsAndHashCode(callSuper = true)
public class MeetMemberInfo extends BaseEntity {

    private int id;

    private int userId;

    private String phone;

    private String bankCardNo;

    private String idCardNo;

    private int creditValue;

    private Date createTime;

    private Date updateTime;

}
