package cn.meetingbook;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

/**
 * 处理数据对象与实体之间的转换
 */
public class BeanCopyUtils {

	/**
	 * @Title: copyProperties 
	 * @Description:
	 * @param source
	 * @param targetClass
	 * @throws Exception
	 * @return T
	 * @version V1.0
	 * @author xfyang
	 * @Date 2016年12月3日 上午1:02:31
	 */
	public static <T, S> T copyProperties(S source, Class<T> targetClass) throws Exception {
		if (null == source)
			return null;
		T t = targetClass.newInstance();
		BeanUtils.copyProperties(source, t);
		return t;
	}

	/**
	 * @Title: copyProperties 
	 * @Description: 
	 * @param source
	 * @param targetClass
	 * @param ignoreProperties
	 * @throws Exception
	 * @return T
	 * @version V1.0
	 * @author xfyang
	 * @Date 2016年12月3日 上午1:03:02
	 */
	public static <T, S> T copyProperties(S source, Class<T> targetClass,String... ignoreProperties) throws Exception {
		if (null == source)
			return null;
		T t = targetClass.newInstance();
		BeanUtils.copyProperties(source, t,ignoreProperties);
		return t;
	}
	
	/**
	 * 对象List之间拷贝
	 * 
	 * @author chenjian
	 * @param sourcelist
	 * @param targetClass
	 */
	public static <T, S> List<T> copyListProperties(List<S> sourcelist, Class<T> targetClass) throws Exception {
		if (null == sourcelist)
			return null;
		List<T> targetList = new ArrayList<T>();
		T target = null;
		for (int i = 0; i < sourcelist.size(); i++) {
			target = targetClass.newInstance();
			BeanUtils.copyProperties(sourcelist.get(i), target);
			targetList.add(target);
		}
		return targetList;
	}
}
