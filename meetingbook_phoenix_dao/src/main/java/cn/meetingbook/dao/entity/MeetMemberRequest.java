package cn.meetingbook.dao.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * Created by zhangyi on 2017/5/25.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class MeetMemberRequest extends BaseEntity {

    private int id;

    private String phone;

    private String smsCode;

    private int tryCount;

    private Date createTime;

    private Date updateTime;

}
