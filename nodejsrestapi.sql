/*
SQLyog Community v12.3.2 (32 bit)
MySQL - 10.1.38-MariaDB : Database - nodejsrestapi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nodejsrestapi` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `nodejsrestapi`;

/*Table structure for table `akses_token` */

DROP TABLE IF EXISTS `akses_token`;

CREATE TABLE `akses_token` (
  `id_akses_token` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `access_token` text,
  `ip_address` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_akses_token`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `akses_token` */

insert  into `akses_token`(`id_akses_token`,`id_user`,`access_token`,`ip_address`) values 
(4,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJoYW1pZCIsImVtYWlsIjoiaGFtaWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIzN2ZmZjM1N2MyMzdkNjdmMjM2NWVhYjY3MDZiYzg5OCIsInJvbGUiOjIsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wOC0xOFQxNzowMDowMC4wMDBaIn1dLCJpYXQiOjE1OTc4Mjk0NTUsImV4cCI6MTU5NzgyOTUxNX0.FSS5kzc-SvHZCQLiLxMQT6kdLFKSC3Rk6QWgSUPTDgM','192.168.43.29'),
(5,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJoYW1pZCIsImVtYWlsIjoiaGFtaWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIzN2ZmZjM1N2MyMzdkNjdmMjM2NWVhYjY3MDZiYzg5OCIsInJvbGUiOjIsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wOC0xOFQxNzowMDowMC4wMDBaIn1dLCJpYXQiOjE1OTc4Mjk1ODksImV4cCI6MTU5NzgyOTY0OX0.S_FKBl9UNEVaN2LbVxJKOE7fkn_1Kd_qqbZHSWEtCcA','192.168.43.29'),
(6,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJoYW1pZCIsImVtYWlsIjoiaGFtaWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIzN2ZmZjM1N2MyMzdkNjdmMjM2NWVhYjY3MDZiYzg5OCIsInJvbGUiOjIsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wOC0xOFQxNzowMDowMC4wMDBaIn1dLCJpYXQiOjE1OTc4Mjk2MDgsImV4cCI6MTU5NzgyOTY2OH0.DAh04NZRvCoTLjQX3u4WqkOy1XQKiM-SkEc44IdOc7Q','192.168.43.29');

/*Table structure for table `krs` */

DROP TABLE IF EXISTS `krs`;

CREATE TABLE `krs` (
  `id_krs` int(11) NOT NULL AUTO_INCREMENT,
  `tanggal_krs` date DEFAULT NULL,
  `id_matakuliah` int(11) DEFAULT NULL,
  `id_mahasiswa` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_krs`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `krs` */

insert  into `krs`(`id_krs`,`tanggal_krs`,`id_matakuliah`,`id_mahasiswa`) values 
(1,'2020-08-19',2,1),
(2,'2020-08-19',3,1),
(3,'2020-08-19',4,1),
(4,'2020-08-19',1,2),
(5,'2020-08-19',2,2),
(6,'2020-08-19',3,2),
(7,'2020-08-19',4,2);

/*Table structure for table `mahasiswa` */

DROP TABLE IF EXISTS `mahasiswa`;

CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nim` varchar(9) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `jurusan` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `mahasiswa` */

insert  into `mahasiswa`(`id_mahasiswa`,`nim`,`nama`,`jurusan`) values 
(6,'465646','Sofyan Gibran','Sistem Informasi'),
(7,'155410037','Abdul Hamid','Teknik Informatika'),
(8,'3453453','Putri Ayu','Sistem Informasi'),
(9,'78567','asrfaf edit','Teknik Komputer');

/*Table structure for table `matakuliah` */

DROP TABLE IF EXISTS `matakuliah`;

CREATE TABLE `matakuliah` (
  `id_matakuliah` int(11) NOT NULL AUTO_INCREMENT,
  `matakuliah` varchar(100) DEFAULT NULL,
  `sks` int(1) DEFAULT NULL,
  PRIMARY KEY (`id_matakuliah`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `matakuliah` */

insert  into `matakuliah`(`id_matakuliah`,`matakuliah`,`sks`) values 
(1,'Manajemen Basis Data',2),
(2,'Analisis Desain Berorirentasi Objek',3),
(3,'Pemrograman Web',3),
(4,'Pemrograman Mobile',3);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `tanggal_daftar` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`email`,`password`,`role`,`tanggal_daftar`) values 
(1,'hamid','hamid@gmail.com','37fff357c237d67f2365eab6706bc898',2,'2020-08-19'),
(2,'hamid','abdul@gmail.com','37fff357c237d67f2365eab6706bc898',2,'2020-08-19');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
