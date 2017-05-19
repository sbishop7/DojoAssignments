CREATE DATABASE  IF NOT EXISTS `wall_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `wall_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: wall_db
-- ------------------------------------------------------
-- Server version	5.5.49-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `message_id_idx` (`message_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `message_id` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,2,'Sure is','2017-05-18 16:12:51','2017-05-18 16:12:51'),(2,2,1,'indeed','2017-05-18 18:12:51','2017-05-18 20:12:51'),(3,NULL,1,'What?','2017-05-18 20:53:26','2017-05-18 20:53:26'),(4,NULL,1,'dsf','2017-05-18 20:55:37','2017-05-18 20:55:37'),(5,NULL,1,'sdf','2017-05-18 20:56:12','2017-05-18 20:56:12'),(6,NULL,1,'sdfsd','2017-05-18 20:56:51','2017-05-18 20:56:51'),(7,NULL,1,'dfsdfsad','2017-05-18 20:58:58','2017-05-18 20:58:58'),(8,NULL,1,'sdafdas','2017-05-18 20:59:34','2017-05-18 20:59:34'),(9,12,1,'dfsdf','2017-05-18 21:00:03','2017-05-18 21:00:03'),(10,12,1,'dfsdf','2017-05-18 21:00:09','2017-05-18 21:00:09'),(11,12,1,'sfsdfdasgag','2017-05-18 21:00:17','2017-05-18 21:00:17'),(12,12,1,'not 12','2017-05-18 21:00:28','2017-05-18 21:00:28'),(13,12,1,'dsfdsf','2017-05-18 21:00:54','2017-05-18 21:00:54'),(14,13,1,'d','2017-05-18 21:03:30','2017-05-18 21:03:30'),(15,13,1,'asdsa','2017-05-18 21:03:33','2017-05-18 21:03:33'),(16,13,1,'9:05\r\n','2017-05-18 21:05:40','2017-05-18 21:05:40'),(17,13,1,'9:06','2017-05-18 21:05:46','2017-05-18 21:05:46'),(18,14,2,'Why, yes.  Yes, it does!','2017-05-18 21:09:14','2017-05-18 21:09:14');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `message` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx` (`user_id`),
  CONSTRAINT `id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,'This is a great day to be alive','2017-05-18 16:11:53','2017-05-18 16:11:53'),(2,2,'That\'s wacky','1995-10-23 15:00:00','1995-10-23 15:00:00'),(3,1,'Please work','2017-05-18 19:58:00','2017-05-18 20:00:22'),(4,NULL,'work','2017-05-18 20:37:04','2017-05-18 20:37:04'),(5,NULL,'fdsa','2017-05-18 20:37:45','2017-05-18 20:37:45'),(6,NULL,'sdf','2017-05-18 20:38:59','2017-05-18 20:38:59'),(7,NULL,'sdfgasdg','2017-05-18 20:39:13','2017-05-18 20:39:13'),(8,NULL,'dasfdsf','2017-05-18 20:39:34','2017-05-18 20:39:34'),(9,NULL,'sdagahb ','2017-05-18 20:40:12','2017-05-18 20:40:12'),(10,NULL,'please, for the love of everything, WORK!!!!','2017-05-18 20:40:39','2017-05-18 20:40:39'),(11,2,'fhd','2017-05-18 20:42:28','2017-05-18 20:42:28'),(12,2,'dsfasdff','2017-05-18 20:42:52','2017-05-18 20:42:52'),(13,1,'sadfsd','2017-05-18 20:58:55','2017-05-18 20:58:55'),(14,2,'Does this still work?','2017-05-18 21:09:03','2017-05-18 21:09:03');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Seth','Bishop','bishop@uw.edu','735851003e12dee2f95bcea4b500aa4d','2017-05-18 13:25:11','2017-05-18 13:25:11'),(2,'Bob','Ennes','ennes@uw.edu','fe562f9c592f41ee092ffbe3ac02a790','2017-05-18 13:25:31','2017-05-18 13:25:31');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-18 21:10:16
