
CREATE VIEW `dreamhome`.`finefamilyhomes` AS
    SELECT *   
FROM `dreamhome`.`property_for_rent` `p`
    WHERE p.rent >= 600 AND p.type = 'House';


CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `dreamhome`.`finefamilyhomes` AS
    SELECT 
        `p`.`propertyNo` AS `propertyNo`,
        `p`.`street` AS `street`,
        `p`.`city` AS `city`,
        `p`.`postcode` AS `postcode`,
        `p`.`type` AS `type`,
        `p`.`rooms` AS `rooms`,
        `p`.`rent` AS `rent`,
        `p`.`ownerNo` AS `ownerNo`,
        `p`.`staffNo` AS `staffNo`,
        `p`.`branchNo` AS `branchNo`
    FROM
        `dreamhome`.`property_for_rent` `p`
    WHERE
        ((`p`.`rent` >= 600)
            AND (`p`.`type` = 'House'))


SELECT * FROM dreamhome.finefamilyhomes;

PA14	16 Holhead	Abardeen	AB7 5SU	House	6	650.00	CO46	SA9	B007
PG21	18 Dale	Glasgow	G32 5SU	House	5	600.00	CO87	SG37	B003



INSERT INTO `dreamhome`.`property_for_rent` (`propertyNo`, `street`, `city`, `postcode`, `type`, `rooms`, `rent`, `ownerNo`, `staffNo`, `branchNo`) VALUES ('PA15', '101 Holland Way', 'Aberdeen', 'AB6 0SG', 'House', '5', '725', 'CO95', 'SA9', 'B007');


INSERT INTO `dreamhome`.`privateowner` (`ownerNo`, `fname`, `lname`, `address`, `telNo`, `email`, `password`) VALUES ('CO95', 'Joshua', 'Bloch', '19, St James Ct, Aberdeen AB1 6JF', '01224-861227', 'jbloch@idealhomes.co.uk', 'test1234');
