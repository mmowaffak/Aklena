-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 09, 2016 at 03:31 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aklena`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `oid` int(11) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orderString`
--

CREATE TABLE `orderString` (
  `ostring_id` int(11) NOT NULL,
  `oid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `orderString` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `restaurant_id` int(11) NOT NULL,
  `restaurantName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `sid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `subscribeTo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`sid`, `uid`, `subscribeTo_id`) VALUES
(1, 1, 2),
(2, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `fname` varchar(15) DEFAULT NULL,
  `lname` varchar(15) DEFAULT NULL,
  `username` varchar(25) DEFAULT NULL,
  `uid` int(11) NOT NULL,
  `eventumExt` varchar(3) DEFAULT NULL,
  `phone` varchar(13) DEFAULT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`fname`, `lname`, `username`, `uid`, `eventumExt`, `phone`, `password`) VALUES
('Yasmin', 'Tayel', 'ytayel@eventumsolutions.c', 1, '125', '01223211344', ''),
('Ahmed', 'Kabbany', 'akabbany@eventumsolutions', 2, '126', '0122336532', ''),
('Moustafa', 'Mowaffak', 'mmowaffak@eventumsolution', 3, '125', '01287897960', '123456'),
('James', 'Bond', 'test', 4, '122', '0123456789', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oid`),
  ADD KEY `creator_id` (`creator_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- Indexes for table `orderString`
--
ALTER TABLE `orderString`
  ADD PRIMARY KEY (`ostring_id`),
  ADD KEY `oid` (`oid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `uid` (`uid`),
  ADD KEY `subscribeTo_id` (`subscribeTo_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`creator_id`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`restaurant_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderString`
--
ALTER TABLE `orderString`
  ADD CONSTRAINT `orderString_ibfk_1` FOREIGN KEY (`oid`) REFERENCES `orders` (`oid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderString_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `subscriptions_ibfk_2` FOREIGN KEY (`subscribeTo_id`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
