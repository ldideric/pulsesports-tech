CREATE DATABASE IF NOT EXISTS `deepdive_pulse`
USE `deepdive_pulse`;

CREATE TABLE IF NOT EXISTS `useraccounts` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `userdata` text DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='The account data for the Pulse app.';
