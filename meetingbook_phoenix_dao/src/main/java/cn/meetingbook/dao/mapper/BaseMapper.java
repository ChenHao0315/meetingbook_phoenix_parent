package cn.meetingbook.dao.mapper;

import java.util.List;

public interface BaseMapper<T> {

	/**
	 * 保存实体
	 * 
	 * @param Entity
	 */
	public int add(T t);

	/**
	 * 删除实体
	 * 
	 * @param id
	 */
	public void delete(Object id);

	/**
	 * 更新实体
	 * 
	 * @param Entity
	 */
	public int update(T t);

	/**
	 * 返回实体
	 * 
	 * @param 主键
	 * @return
	 */

	public T findById(int id);

	/**
	 * 返回实体List
	 * 
	 * @param 实体条件
	 * @return
	 */
	public List<T> findListByCondition(T t);

	/**
	 * 返回实体List
	 */
	public List<T> findAll();


}
