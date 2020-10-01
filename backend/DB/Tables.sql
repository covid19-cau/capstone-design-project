-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema data
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema data
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `data` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- -----------------------------------------------------
-- Schema information
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema information
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `information` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `data` ;

-- -----------------------------------------------------
-- Table `data`.`equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data`.`equipment` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` VARCHAR(15) NOT NULL,
  `shipping_charge` VARCHAR(15) NULL DEFAULT 'Free',
  `seller` VARCHAR(30) NULL DEFAULT NULL,
  `URL` VARCHAR(500) NOT NULL,
  `training_purpose` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `training_purpose_UNIQUE` (`training_purpose` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `data`.`meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data`.`meal` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `serving_size` VARCHAR(10) NULL DEFAULT NULL,
  `calory` VARCHAR(10) NULL DEFAULT NULL,
  `carbohydrate` VARCHAR(10) NULL DEFAULT NULL,
  `protein` VARCHAR(10) NULL DEFAULT NULL,
  `fat` VARCHAR(10) NULL DEFAULT NULL,
  `training_purpose` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `data`.`vedio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data`.`vedio` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `uploader` VARCHAR(30) NULL DEFAULT NULL,
  `URL` VARCHAR(300) NOT NULL,
  `training_purpose` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `information` ;

-- -----------------------------------------------------
-- Table `information`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `information`.`member` (
  `id` INT UNSIGNED NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_local_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `information`.`challenge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `information`.`challenge` (
  `id` INT UNSIGNED NOT NULL,
  `member__id` INT UNSIGNED NOT NULL,
  `training_purpose` VARCHAR(20) NOT NULL,
  `challenge_goal` VARCHAR(100) NULL DEFAULT NULL,
  `training_to_do` VARCHAR(100) NULL DEFAULT NULL,
  `start_date` DATE NULL DEFAULT NULL,
  `end_date` DATE NULL DEFAULT NULL,
  `certification_day` VARCHAR(30) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `member_id_idx` (`member__id` ASC) VISIBLE,
  CONSTRAINT `fk_challenge_member`
    FOREIGN KEY (`member__id`)
    REFERENCES `information`.`member` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `information`.`record`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `information`.`record` (
  `id` INT UNSIGNED NOT NULL,
  `challenge__id` INT UNSIGNED NOT NULL,
  `date` DATE NOT NULL,
  `result` VARCHAR(10) NOT NULL,
  `journal` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_record_challenge1_idx` (`challenge__id` ASC) VISIBLE,
  CONSTRAINT `fk_record_challenge1`
    FOREIGN KEY (`challenge__id`)
    REFERENCES `information`.`challenge` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
