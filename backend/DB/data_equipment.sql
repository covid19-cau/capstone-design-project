-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: data
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipment` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` varchar(15) NOT NULL,
  `shipping_charge` varchar(15) DEFAULT 'Free',
  `seller` varchar(30) DEFAULT NULL,
  `URL` varchar(500) NOT NULL,
  `training_purpose` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `training_purpose_UNIQUE` (`training_purpose`),
  CONSTRAINT `equipment_chk_1` CHECK ((`training_purpose` in (_utf8mb4'Weight loss',_utf8mb4'Muscle augmentation',_utf8mb4'Body type correction')))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment`
--

LOCK TABLES `equipment` WRITE;
/*!40000 ALTER TABLE `equipment` DISABLE KEYS */;
INSERT INTO `equipment` VALUES (1,'Melkin Yoga Mat NBR TPE Cork Thick Pilates Home 6 8 10 20mm','8,700 won','2,500 won','Melkin Sports','https://smartstore.naver.com/melkinsports/products/581157627?n_media=27758&n_query=%EC%9A%94%EA%B0%80%EB%A7%A4%ED%8A%B8&n_rank=2&n_ad_group=grp-a001-02-000000012661474&n_ad=nad-a001-02-000000075244302&n_campaign_type=2&n_mall_pid=581157627&n_ad_group_type=2&NaPm=ct%3Dkfr3u1cw%7Cci%3D0A40002q57nt86ZPX1kn%7Ctr%3Dpla%7Chk%3D2efce2153145531ad93c6dba71b5211b4bea8410','Body type correction'),(2,'Igojin Dumbel Bar 21kg Dumbel Set Assembly Aryeong Set','25,620 won','4,000 won','Egojin Health','https://smartstore.naver.com/egojin/products/4616378370?NaPm=ct%3Dkfr406t4%7Cci%3Dc88a45170c6936a4c5cbfb78ca918670577ab39a%7Ctr%3Dslsbrc%7Csn%3D156815%7Cic%3D%7Chk%3Dbbe908cdc3bd64e1c3ea58740106e6d16ba95556','Muscle augmentation'),(3,'TKFIT Cross-Fit Boxing Wire-jumping Diet for Speed Players','9,900 won','2,500 won','TKFIT','https://smartstore.naver.com/tkfit/products/389565867?n_media=11068&n_query=%EC%A4%84%EB%84%98%EA%B8%B0&n_rank=1&n_ad_group=grp-a001-02-000000005286490&n_ad=nad-a001-02-000000024119334&n_campaign_type=2&n_mall_pid=389565867&n_ad_group_type=2&NaPm=ct%3Dkfr40qvc%7Cci%3D0zK0003j5lntbXa4R1ks%7Ctr%3Dpla%7Chk%3De18d221ce8d58699e482b9bf15ce337f1ba2d656','Weight loss');
/*!40000 ALTER TABLE `equipment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-02  3:28:32
