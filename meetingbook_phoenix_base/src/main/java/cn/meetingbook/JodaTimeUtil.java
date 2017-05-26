package cn.meetingbook;

import org.joda.time.DateTime;
import org.joda.time.Days;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

/**
 * Created by zhangyi on 2017/5/24.
 * 线程安全时间与日期工具类
 */
public class JodaTimeUtil {

    private static final Logger log = LoggerFactory.getLogger(JodaTimeUtil.class);

    private static final String STANDARD_DATE_PATTERN = "yyyy-MM-dd HH:mm:ss";

    private static final String DAY_PATTERN = "yyyy-MM-dd";

    private static DateTimeFormatter standardFormat = DateTimeFormat.forPattern(STANDARD_DATE_PATTERN);

    private static DateTimeFormatter dayFormate = DateTimeFormat.forPattern(DAY_PATTERN);

    /**
     * 计算某个时间点距今多少天
     * @param startDate 开始日期
     * @return int
     */
    public static int daysToNow(Date startDate){

        if (null == startDate)
            throw new RuntimeException("try to calculate a null date range!");

        DateTime startTime = new DateTime(startDate);

        Days days = Days.daysBetween(startTime,new DateTime());

        return days.getDays();

    }

    /**
     * 天数的增减
     * @param dayCount 正数增加日期，负数减少日期
     * @param date 需要操作的基础日期
     * @return Date
     */
    public static Date modifyDays(int dayCount,Date date){

        if (null == date)
            throw new RuntimeException("can not modify a null date");

        DateTime currentDate = new DateTime(date);

        DateTime targetDate = currentDate.plusDays(dayCount);

        return targetDate.toDate();
    }

    /**
     * 小时的增减
     * @param hours 正数增加小时，负数减少小时
     * @param date 需要操作的基础日期
     * @return Date
     */
    public static Date modifyHours(int hours,Date date){

        if (null == date)
            throw new RuntimeException("can not modify a null date");

        DateTime currentDate = new DateTime(date);

        DateTime targetDate = currentDate.plusHours(hours);

        return targetDate.toDate();
    }
}
