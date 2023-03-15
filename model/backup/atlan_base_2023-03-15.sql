# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.31)
# Database: atlan_base
# Generation Time: 2023-03-15 15:57:58 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table assemble
# ------------------------------------------------------------

DROP TABLE IF EXISTS `assemble`;

CREATE TABLE `assemble` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `total` double DEFAULT NULL,
  `timestramp` bigint DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `cpu` mediumint DEFAULT NULL,
  `motherboard` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '主板',
  `memory` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '内存',
  `radiator` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '散热器',
  `hardDiskList` varchar(500) DEFAULT NULL COMMENT '硬盘',
  `graphicsCard` varchar(500) DEFAULT NULL COMMENT '显卡',
  `powerSupply` varchar(500) DEFAULT NULL COMMENT '电源',
  `chassis` varchar(500) DEFAULT NULL COMMENT '机箱',
  `fan` varchar(500) DEFAULT NULL COMMENT '风扇',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='装机配置清单详情';

LOCK TABLES `assemble` WRITE;
/*!40000 ALTER TABLE `assemble` DISABLE KEYS */;

INSERT INTO `assemble` (`id`, `name`, `total`, `timestramp`, `datetime`, `cpu`, `motherboard`, `memory`, `radiator`, `hardDiskList`, `graphicsCard`, `powerSupply`, `chassis`, `fan`)
VALUES
	(10001,'方案1',9099,1677334177023,'2023-02-25 22:19:00',1,'1','1','1','1','1','1','1','1'),
	(10002,'方案2',14848,1678416046050,'2023-03-10 10:41:00',2,'2','2','2','1','2','2','1','2'),
	(10003,'方案3',10624.27,1678465362571,'2023-03-11 00:22:00',3,'3','1','1','1','3','1','1','3'),
	(10004,'方案4',8403.27,1678469861838,'2023-03-11 01:37:00',1,'4','1','1','1','4','1','2','3');

/*!40000 ALTER TABLE `assemble` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table chassis
# ------------------------------------------------------------

DROP TABLE IF EXISTS `chassis`;

CREATE TABLE `chassis` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='机箱信息详情';

LOCK TABLES `chassis` WRITE;
/*!40000 ALTER TABLE `chassis` DISABLE KEYS */;

INSERT INTO `chassis` (`id`, `name`, `price`, `link`, `info`)
VALUES
	(1,'先马朱雀Air',149,NULL,'{\"id\":1,\"name\":\"先马朱雀Air\",\"price\":149,\"link\":\"\"}'),
	(2,'先马新境界 海景房',379,NULL,'{\"id\":2,\"name\":\"先马新境界 海景房\",\"price\":379,\"link\":\"\"}');

/*!40000 ALTER TABLE `chassis` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cpu
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpu`;

CREATE TABLE `cpu` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='CPU信息详情';

LOCK TABLES `cpu` WRITE;
/*!40000 ALTER TABLE `cpu` DISABLE KEYS */;

INSERT INTO `cpu` (`id`, `name`, `price`, `link`, `info`)
VALUES
	(1,'i5 13400F',1180,NULL,'{\"id\":1,\"name\":\"i5 13400F\",\"price\":1180,\"link\":\"\"}'),
	(2,'i5 13600KF',1880,NULL,'{\"id\":2,\"name\":\"i5 13600KF\",\"price\":1880,\"link\":\"\"}'),
	(3,'i5 12600KF',1385,NULL,'{\"id\":3,\"name\":\"i5 12600KF\",\"price\":1385,\"link\":\"\"}');

/*!40000 ALTER TABLE `cpu` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table fan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `fan`;

CREATE TABLE `fan` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `count` int DEFAULT NULL,
  `total` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='机箱风扇详情';

LOCK TABLES `fan` WRITE;
/*!40000 ALTER TABLE `fan` DISABLE KEYS */;

INSERT INTO `fan` (`id`, `name`, `price`, `count`, `total`, `link`, `info`)
VALUES
	(1,'利民无光工包',20.2,5,107,NULL,'{\"id\":1,\"name\":\"利民无光工包\",\"price\":20.2,\"count\":5,\"total\":107,\"link\":\"\"}'),
	(2,'航嘉ARGB',23.2,6,139,NULL,'{\"id\":2,\"name\":\"航嘉ARGB\",\"price\":23.2,\"count\":6,\"total\":139,\"link\":\"\"}'),
	(3,'利民 C12CW ARGB',20.45,5,102.27,NULL,'{\"id\":3,\"name\":\"利民 C12CW ARGB\",\"price\":20.45,\"count\":5,\"total\":102.27,\"link\":\"\"}');

/*!40000 ALTER TABLE `fan` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table graphics_card
# ------------------------------------------------------------

DROP TABLE IF EXISTS `graphics_card`;

CREATE TABLE `graphics_card` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='显卡信息详情';

LOCK TABLES `graphics_card` WRITE;
/*!40000 ALTER TABLE `graphics_card` DISABLE KEYS */;

INSERT INTO `graphics_card` (`id`, `name`, `price`, `link`, `info`)
VALUES
	(1,'七彩虹 3080ti AO',4699,NULL,'{\"id\":1,\"name\":\"七彩虹 3080ti AO\",\"price\":4699,\"link\":\"\"}'),
	(2,'七彩虹 4080 ADOC',8679,NULL,'{\"id\":2,\"name\":\"七彩虹 4080 ADOC\",\"price\":8679,\"link\":\"\"}'),
	(3,'铭瑄瑷珈 4070TI',6299,NULL,'{\"id\":3,\"name\":\"铭瑄瑷珈 4070TI\",\"price\":6299,\"link\":\"\"}'),
	(4,'盈通 RTX3070 8G 盈通花嫁',3598,NULL,'{\"id\":4,\"name\":\"盈通 RTX3070 8G 盈通花嫁\",\"price\":3598,\"link\":\"\"}');

/*!40000 ALTER TABLE `graphics_card` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table hard_disk
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hard_disk`;

CREATE TABLE `hard_disk` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `count` int DEFAULT NULL,
  `total` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='硬盘信息详情';

LOCK TABLES `hard_disk` WRITE;
/*!40000 ALTER TABLE `hard_disk` DISABLE KEYS */;

INSERT INTO `hard_disk` (`id`, `name`, `price`, `count`, `total`, `link`, `info`)
VALUES
	(1,'致钛 TiPro7000',699,1,699,NULL,'{\"id\":1,\"name\":\"致钛 TiPro7000\",\"price\":669,\"count\":1,\"total\":669,\"link\":\"\"}');

/*!40000 ALTER TABLE `hard_disk` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table memory
# ------------------------------------------------------------

DROP TABLE IF EXISTS `memory`;

CREATE TABLE `memory` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `count` int DEFAULT NULL,
  `total` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='内存信息详情';

LOCK TABLES `memory` WRITE;
/*!40000 ALTER TABLE `memory` DISABLE KEYS */;

INSERT INTO `memory` (`id`, `name`, `price`, `count`, `total`, `link`, `info`)
VALUES
	(1,'金百达银爵 3200MHz 16G',219.5,2,439,NULL,'{\"id\":1,\"name\":\"金百达银爵 3200MHz 16G\",\"price\":219.5,\"count\":2,\"total\":439,\"link\":\"\"}'),
	(2,'金百达刃灯条 6400MHz 16G',390,2,779,NULL,'{\"id\":2,\"name\":\"金百达刃灯条 6400MHz 16G\",\"price\":390,\"count\":2,\"total\":779,\"link\":\"\"}');

/*!40000 ALTER TABLE `memory` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table motherboard
# ------------------------------------------------------------

DROP TABLE IF EXISTS `motherboard`;

CREATE TABLE `motherboard` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='主板信息详情';

LOCK TABLES `motherboard` WRITE;
/*!40000 ALTER TABLE `motherboard` DISABLE KEYS */;

INSERT INTO `motherboard` (`id`, `name`, `price`, `link`, `info`)
VALUES
	(1,'微星 B660m 迫击炮 WIFI',1099,NULL,'{\"id\":1,\"name\":\"微星 B660m 迫击炮 WIFI\",\"price\":1099,\"link\":\"\"}'),
	(2,'微星 Z790-P WIFI D5',1599,NULL,'{\"id\":2,\"name\":\"微星 Z790-P WIFI D5\",\"price\":1599,\"link\":\"\"}'),
	(3,'铭瑄 B760m 终结者 D4 WIFI',794,NULL,'{\"id\":3,\"name\":\"铭瑄 B760m 终结者 D4 WIFI\",\"price\":794,\"link\":\"\"}'),
	(4,'微星 B760m 迫击炮 D4 WIFI',1249,NULL,'{\"id\":4,\"name\":\"微星 B760m 迫击炮 D4 WIFI\",\"price\":1249,\"link\":\"\"}');

/*!40000 ALTER TABLE `motherboard` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table power_supply
# ------------------------------------------------------------

DROP TABLE IF EXISTS `power_supply`;

CREATE TABLE `power_supply` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='电源信息详情';

LOCK TABLES `power_supply` WRITE;
/*!40000 ALTER TABLE `power_supply` DISABLE KEYS */;

INSERT INTO `power_supply` (`id`, `name`, `price`, `link`, `info`)
VALUES
	(1,'长城750w x7 金牌全模组',579,NULL,'{\"id\":1,\"name\":\"长城750w x7 金牌全模组\",\"price\":579,\"link\":\"\"}'),
	(2,'长城F8白金牌全模 850w',658,NULL,'{\"id\":2,\"name\":\"长城F8白金牌全模 850w\",\"price\":658,\"link\":\"\"}');

/*!40000 ALTER TABLE `power_supply` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table radiator
# ------------------------------------------------------------

DROP TABLE IF EXISTS `radiator`;

CREATE TABLE `radiator` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='散热器信息详情';

LOCK TABLES `radiator` WRITE;
/*!40000 ALTER TABLE `radiator` DISABLE KEYS */;

INSERT INTO `radiator` (`id`, `name`, `price`, `link`, `info`)
VALUES
	(1,'利民PA120',178,'','{\"id\":1,\"name\":\"利民PA120\",\"price\":178,\"link\":\"\"}'),
	(2,'利民FC140 冰封统领',296,NULL,'{\"id\":2,\"name\":\"利民FC140 冰封统领\",\"price\":296,\"link\":\"\"}');

/*!40000 ALTER TABLE `radiator` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
