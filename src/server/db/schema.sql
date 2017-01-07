-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema races
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema races
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `races` ;
USE `races` ;

-- -----------------------------------------------------
-- Table `races`.`100m`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `races`.`100m` (
  `resultsid` INT NOT NULL AUTO_INCREMENT,
  `athlete` VARCHAR(50) NOT NULL,
  `time` FLOAT NOT NULL,
  `school` VARCHAR(100) NOT NULL,
  `points` INT NOT NULL,
  PRIMARY KEY (`resultsid`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
