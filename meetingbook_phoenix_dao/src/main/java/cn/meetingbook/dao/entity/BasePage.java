package cn.meetingbook.dao.entity;


import lombok.Data;
import org.apache.commons.lang3.StringUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 分页基础
 * 
 * @author LiLong 2014-7-29
 * 
 */
@Data
public class BasePage {

	private Integer pageIndex = 0;

	private Integer pageSize = 20;

	private String sortField;

	private String sortOrder;

	/**
	 * 分页导航
	 */
	@JsonIgnore
	private Pager pager = new Pager();

	public Pager getPager() {
		pager.setPageId(getPageIndex());
		pager.setPageSize(getPageSize());
		String orderField = "";
		if (StringUtils.isNotBlank(sortField)) {
			orderField = getDBField(sortField);
		}
		if (StringUtils.isNotBlank(orderField) && StringUtils.isNotBlank(sortOrder)) {
			orderField += " " + sortOrder;
		}
		pager.setOrderField(orderField);
		return pager;
	}

	private String getDBField(String pageField){
		if(pageField == null || "".equals(pageField)){
			return "";
		}
		char[] chars = pageField.toCharArray();
		int lastIndex = 0;
		int i = 0;
		for(char ch : chars){
			if(Character.isUpperCase(ch)){
				lastIndex = i;
			}
			i++;
		}
		
		if(lastIndex == 0){
			return pageField;
		}
		StringBuilder sBuilder = new StringBuilder();
		sBuilder.append(pageField.substring(0,lastIndex).toLowerCase());
		sBuilder.append("_");
		sBuilder.append(pageField.substring(lastIndex).toLowerCase());
		return  sBuilder.toString();
	}
	
	public void setPager(Pager pager) {
		this.pager = pager;
	}

	public Integer getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public String getSortField() {
		return sortField;
	}

	public void setSortField(String sortField) {
		this.sortField = sortField;
	}

	public String getSortOrder() {
		return sortOrder;
	}

	public void setSortOrder(String sortOrder) {
		this.sortOrder = sortOrder;
	}

}
