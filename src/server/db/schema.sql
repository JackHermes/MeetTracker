
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP DATABASE IF EXISTS `MeetTracker`;

-- -----------------------------------------------------
-- Schema MeetTracker
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MeetTracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MeetTracker` ;
USE `MeetTracker` ;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Teams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Teams` (
  `team_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`team_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Athletes`
-- -----------------------------------------------------
-- add JOIN table to teams, meets
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Athletes` (
  `athlete_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `athlete_team` INT NULL,
  PRIMARY KEY (`athlete_id`),
  CONSTRAINT `fk_athlete_team`
    FOREIGN KEY (`athlete_team`)
    REFERENCES `MeetTracker`.`Teams` (`team_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Results`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Results` (
  `result_id` INT NOT NULL AUTO_INCREMENT,
  `performance` FLOAT NULL,
  `place` INT NULL,
  `points` FLOAT NULL,
  `heat_number` INT NULL,
  `wind` FLOAT NULL,
  `result_athlete` INT NULL,
  `result_team` INT NULL,
  `result_event` INT NULL,
  `result_meet` INT NULL,
  PRIMARY KEY (`result_id`),
  CONSTRAINT `fk_result_athlete`
    FOREIGN KEY (`result_athlete`)
    REFERENCES `MeetTracker`.`Athletes` (`athlete_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_team`
    FOREIGN KEY (`result_team`)
    REFERENCES `MeetTracker`.`Teams` (`team_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_event`
    FOREIGN KEY (`result_event`)
    REFERENCES `MeetTracker`.`Events` (`event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_meet`
    FOREIGN KEY (`result_meet`)
    REFERENCES `MeetTracker`.`Meets` (`meet_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Meets`
-- -----------------------------------------------------
-- add JOIN table to teams, athletes, events
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Meets` (
  `meet_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL,
  `date` VARCHAR(50) NULL,
  `start_time` VARCHAR(50) NULL,
  `location` VARCHAR(50) NULL,
  PRIMARY KEY (`meet_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Events`
-- -----------------------------------------------------
-- add JOIN to MEETS
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Events` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NOT NULL,
  `units` VARCHAR(10) NULL,
  `start_time` VARCHAR(25) NULL,
  PRIMARY KEY (`event_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Meets_has_Teams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Meets_has_Teams` (
  `Meets_idMeets` INT NOT NULL,
  `Teams_idTeams` INT NOT NULL,
  PRIMARY KEY (`Meets_idMeets`, `Teams_idTeams`),
  CONSTRAINT `fk_Meets_has_Teams_Meets`
    FOREIGN KEY (`Meets_idMeets`)
    REFERENCES `MeetTracker`.`Meets` (`meet_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Meets_has_Teams_Teams`
    FOREIGN KEY (`Teams_idTeams`)
    REFERENCES `MeetTracker`.`Teams` (`team_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Meets_has_Athletes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Meets_has_Athletes` (
  `Meets_idMeets` INT NOT NULL,
  `Athletes_idAthletes` INT NOT NULL,
  PRIMARY KEY (`Meets_idMeets`, `Athletes_idAthletes`),
  CONSTRAINT `fk_Meets_has_Athletes_Meets`
    FOREIGN KEY (`Meets_idMeets`)
    REFERENCES `MeetTracker`.`Meets` (`meet_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Meets_has_Athletes_Athletes`
    FOREIGN KEY (`Athletes_idAthletes`)
    REFERENCES `MeetTracker`.`Athletes` (`athlete_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MeetTracker`.`Meets_has_Events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MeetTracker`.`Meets_has_Events` (
  `Meets_idMeets` INT NOT NULL,
  `Events_idEvents` INT NOT NULL,
  PRIMARY KEY (`Meets_idMeets`, `Events_idEvents`),
  CONSTRAINT `fk_Meets_has_Events_Meets`
    FOREIGN KEY (`Meets_idMeets`)
    REFERENCES `MeetTracker`.`Meets` (`meet_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Meets_has_Events_Events`
    FOREIGN KEY (`Events_idEvents`)
    REFERENCES `MeetTracker`.`Events` (`event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
