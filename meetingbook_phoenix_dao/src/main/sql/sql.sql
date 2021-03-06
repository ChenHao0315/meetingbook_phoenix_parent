CREATE DATABASE meetbook;

CREATE TABLE
  meetbook.meet_member_basic
(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  user_name VARCHAR(32) NOT NULL,
  user_nick_name VARCHAR(32) NOT NULL,
  password VARCHAR(64) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  province VARCHAR(32),
  city VARCHAR(32),
  district VARCHAR(128),
  mail VARCHAR(64),
  gender TINYINT,
  birthday TIMESTAMP,
  read_point BIGINT DEFAULT 0,
  verify_status TINYINT DEFAULT 0,
  user_type VARCHAR(32) NOT NULL,
  status VARCHAR(32) NOT NULL,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
  meetbook.meet_member_request
(
  id INT NOT NULL AUTO_INCREMENT,
  phone VARCHAR(32) NOT NULL,
  sms_code VARCHAR(16),
  try_count INT,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
  meetbook.meet_member_action
(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  action_type VARCHAR(16) NOT NULL,
  action_detail VARCHAR(64) NOT null,
  action_time TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
  meetbook.meet_member_info
(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phone VARCHAR(32) NOT NULL,
  bank_card_no VARCHAR(32) NOT NULL,
  id_card_no VARCHAR(32) NOT NULL,
  credit_value INT NOT NULL DEFAULT 0,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;