package cn.meetingbook.dao.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * Created by zhangyi-ds6 on 2017/5/24.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class MeetMemberAction extends BaseEntity {

    private int id;

    private int userId;

    private String actionType;

    private String actionDetail;

    private Date actionTime;

}
