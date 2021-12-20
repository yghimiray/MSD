create schema `world2`;

use `world2`;

create table `world2`.`countries` (
	`country_id` INT NOT NULL,
	`name` varchar(45) not null,
	`population` BIGINT,
	primary key (`country_id`)
); 