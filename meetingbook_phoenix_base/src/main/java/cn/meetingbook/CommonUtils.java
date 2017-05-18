package cn.meetingbook;

import java.util.regex.Pattern;

/**
 * Created by zhangyi on 2017/5/10.
 * 常用工具方法
 */
public class CommonUtils {

    /**中国手机号校验正则*/
    private static final String CN_MOBILE_REGEX = "^[1][0-9]{10}$";

    /**校验是否包含非法字符 （除数字、字母、英文符号之外的）*/
    private static final String PASSWORD_ILLEGAL_CHAR_REGEX = "^[\\w`~\\!@#\\$%^&*()-_+=\\{\\}\\[\\]:;\"'|<>,./?/]+$";

    /**邮箱校验规则*/
    private static final String EMAIL_REGEX = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$";


    /**
     * 手机号校验
     * @param mobile
     * @return
     */
    public static boolean validateMobile(String mobile){
        return Pattern.matches(CN_MOBILE_REGEX,mobile);
    }

    /**
     * 邮箱校验
     * @param email
     * @return
     */
    public static boolean validateEmail(String email){
        return Pattern.matches(EMAIL_REGEX,email);
    }

    /**
     * 校验密码是否包含非法字符
     * @param password
     * @return
     */
    public static boolean isContainIllegalChar(String password){

        return Pattern.matches(PASSWORD_ILLEGAL_CHAR_REGEX,password) && !password.contains(" ") && !password.contains("<")
                && !password.contains(">") && !password.contains("&");
    }

}
