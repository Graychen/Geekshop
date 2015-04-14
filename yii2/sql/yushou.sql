/*
Navicat MySQL Data Transfer

Source Server         : yushou
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : yushou

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-04-06 23:36:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  `income` int(11) NOT NULL COMMENT '收入',
  `expend` int(11) DEFAULT NULL COMMENT '支出',
  `withdraw` int(11) DEFAULT NULL COMMENT '提现',
  `time` datetime(6) DEFAULT NULL COMMENT '时间',
  `name` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of account
-- ----------------------------

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 NOT NULL,
  `type` int(11) DEFAULT '0' COMMENT '0:新手帮助',
  `status` int(11) DEFAULT '0' COMMENT '0:显示;1:不显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `cityID` int(11) NOT NULL,
  `cityName` varchar(50) CHARACTER SET utf8 NOT NULL,
  `proID` int(11) DEFAULT NULL,
  PRIMARY KEY (`cityName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES ('0', '', null);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `content` varchar(11) CHARACTER SET utf8 DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0:显示1:不显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for id_project_tag
-- ----------------------------
DROP TABLE IF EXISTS `id_project_tag`;
CREATE TABLE `id_project_tag` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of id_project_tag
-- ----------------------------

-- ----------------------------
-- Table structure for id_user_project
-- ----------------------------
DROP TABLE IF EXISTS `id_user_project`;
CREATE TABLE `id_user_project` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `project_id` int(11) NOT NULL COMMENT '项目id',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '0:创建1支持:2:关注'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of id_user_project
-- ----------------------------

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL COMMENT '父id',
  `image_url` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '图片地址',
  `type` int(11) DEFAULT NULL COMMENT '0:项目图片1:项目封面2:回报图片3:头像',
  `status` int(11) DEFAULT '0' COMMENT '0:显示1:不显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of image
-- ----------------------------

-- ----------------------------
-- Table structure for migration
-- ----------------------------
DROP TABLE IF EXISTS `migration`;
CREATE TABLE `migration` (
  `version` varchar(180) CHARACTER SET utf8 NOT NULL,
  `apply_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of migration
-- ----------------------------
INSERT INTO `migration` VALUES ('m000000_000000_base', '1423130125');
INSERT INTO `migration` VALUES ('m130524_201442_init', '1423130132');

-- ----------------------------
-- Table structure for msg
-- ----------------------------
DROP TABLE IF EXISTS `msg`;
CREATE TABLE `msg` (
  `id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 NOT NULL,
  `type` int(11) DEFAULT '0' COMMENT '0:消息1:通知',
  `status` int(11) DEFAULT '0' COMMENT '0:未度1:已读',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of msg
-- ----------------------------

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '项目标题',
  `intro` varchar(255) DEFAULT NULL COMMENT '项目简介',
  `time` int(100) DEFAULT NULL COMMENT '预售时间',
  `money` int(11) DEFAULT NULL COMMENT '目标金额',
  `status` int(11) DEFAULT '0' COMMENT '0:未通过1:通过审核',
  `type` int(11) DEFAULT '0' COMMENT '0:1:',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES ('0', '突然', '下次', null, null, '0', '0');
INSERT INTO `project` VALUES ('1', '??', '???', '2', '22', '0', '9');
INSERT INTO `project` VALUES ('2', 'dsf', 'sdf', '3', '3', '0', '3');
INSERT INTO `project` VALUES ('3', '???', '??????', '3', '3', '0', '3');
INSERT INTO `project` VALUES ('4', '???', '???', '3', '3', '0', '6');
INSERT INTO `project` VALUES ('5', '???', '???', '3', '4', '0', '3');
INSERT INTO `project` VALUES ('6', '???', '???', '3', '4', '0', '3');
INSERT INTO `project` VALUES ('7', '???', '???', '3', '3', '0', '6');
INSERT INTO `project` VALUES ('8', '???', '???', '3', '3', '0', '6');
INSERT INTO `project` VALUES ('10', '???', '???', '2', '2', '0', '0');
INSERT INTO `project` VALUES ('11', '???', '??', '2', '2', '0', '0');
INSERT INTO `project` VALUES ('12', '1', '3', '3', '3', '0', '6');
INSERT INTO `project` VALUES ('13', '测试', '测试', '3', '3', '0', '3');
INSERT INTO `project` VALUES ('14', '测试', '测试', '3', '3', '0', '3');
INSERT INTO `project` VALUES ('15', '1', '1', '1', '1', '0', '3');
INSERT INTO `project` VALUES ('16', 'tainxia', '天下\r\n', '1', '1', '0', '3');
INSERT INTO `project` VALUES ('17', 'ttttt', 'tt', '4', '4', '0', '6');

-- ----------------------------
-- Table structure for project_content
-- ----------------------------
DROP TABLE IF EXISTS `project_content`;
CREATE TABLE `project_content` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '内容标题',
  `content` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '项目内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of project_content
-- ----------------------------

-- ----------------------------
-- Table structure for project_return
-- ----------------------------
DROP TABLE IF EXISTS `project_return`;
CREATE TABLE `project_return` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `money` int(11) NOT NULL COMMENT '金额',
  `support_content` varchar(500) NOT NULL,
  `number` int(100) NOT NULL DEFAULT '0' COMMENT '限额数0:不限额 大于0为限额数',
  `postage` int(11) NOT NULL COMMENT '0:不包邮;大于1:邮费',
  `time` int(11) NOT NULL DEFAULT '0' COMMENT '预计发货时间',
  `project_num` int(11) NOT NULL DEFAULT '0' COMMENT '支持人数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of project_return
-- ----------------------------

-- ----------------------------
-- Table structure for promary
-- ----------------------------
DROP TABLE IF EXISTS `promary`;
CREATE TABLE `promary` (
  `proID` int(11) NOT NULL,
  `proName` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`proID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of promary
-- ----------------------------
INSERT INTO `promary` VALUES ('1', '??');
INSERT INTO `promary` VALUES ('2', '??');
INSERT INTO `promary` VALUES ('3', '??');
INSERT INTO `promary` VALUES ('4', '??');
INSERT INTO `promary` VALUES ('5', '??');
INSERT INTO `promary` VALUES ('6', '??');
INSERT INTO `promary` VALUES ('7', '??');
INSERT INTO `promary` VALUES ('8', '??');
INSERT INTO `promary` VALUES ('9', '??');
INSERT INTO `promary` VALUES ('10', '???');
INSERT INTO `promary` VALUES ('11', '??');
INSERT INTO `promary` VALUES ('12', '??');
INSERT INTO `promary` VALUES ('13', '??');
INSERT INTO `promary` VALUES ('14', '??');
INSERT INTO `promary` VALUES ('15', '??');
INSERT INTO `promary` VALUES ('16', '??');
INSERT INTO `promary` VALUES ('17', '??');
INSERT INTO `promary` VALUES ('18', '??');
INSERT INTO `promary` VALUES ('19', '??');
INSERT INTO `promary` VALUES ('20', '??');
INSERT INTO `promary` VALUES ('21', '??');
INSERT INTO `promary` VALUES ('22', '??');
INSERT INTO `promary` VALUES ('24', '??');
INSERT INTO `promary` VALUES ('25', '??');
INSERT INTO `promary` VALUES ('26', '??');
INSERT INTO `promary` VALUES ('27', '??');
INSERT INTO `promary` VALUES ('28', '??');
INSERT INTO `promary` VALUES ('29', '??');
INSERT INTO `promary` VALUES ('30', '??');
INSERT INTO `promary` VALUES ('31', '??');
INSERT INTO `promary` VALUES ('32', '??');
INSERT INTO `promary` VALUES ('33', '???');
INSERT INTO `promary` VALUES ('34', '??');
INSERT INTO `promary` VALUES ('35', '??');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `tag_name` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '标签名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tag
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `auth_key` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT '10',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'chenjiahui', '', '$2y$13$.wUE6g6.mGfDRte5Ka80wO1MDuStw6HKPgVA1ssoBnMgX5dddUrTW', null, '455803034@qq.com', '10', '1423457537', '1423457537');
INSERT INTO `user` VALUES ('2', 'chenjia', '', '$2y$13$RC3IJ1p26Dpj5.vt/mYDYe0kW6gmXDPJWK.kSvuMByLh8YhozfvRS', null, '45580303@qq.com', '10', '1423457989', '1423457989');
INSERT INTO `user` VALUES ('3', '陈光亮', '', '$2y$13$QY/mDDDbdCArqzxxI0dNQOueMCuu.q.Kz6LqbgPeg6xvYb0ZyOznu', null, '455803035@qq.com', '10', '1428129010', '1428129010');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sex` int(11) NOT NULL DEFAULT '0' COMMENT '0:男1:女2:中性3:保密',
  `address` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  ` credential` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '个人简介',
  `card_number` int(100) DEFAULT NULL COMMENT '身份证号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_info
-- ----------------------------

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `video_url` varchar(100) CHARACTER SET utf8 NOT NULL,
  `type` int(11) NOT NULL COMMENT '0:封面视频',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0:显示1:不显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of video
-- ----------------------------
