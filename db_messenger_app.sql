-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 01, 2021 at 01:27 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.2.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_messenger_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` char(36) NOT NULL DEFAULT '',
  `from_id` char(36) DEFAULT NULL,
  `timestamp_sent` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `timestamp_received` timestamp NULL DEFAULT NULL,
  `timestamp_read` timestamp NULL DEFAULT NULL,
  `content` text,
  `to_id` char(36) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `from_id`, `timestamp_sent`, `timestamp_received`, `timestamp_read`, `content`, `to_id`) VALUES
('02c6a816-d37b-47f1-9bb8-59e0c51a96b4', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:56:55', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('08fd6fc9-eb71-4a28-b0fc-2890bd60188c', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:56:41', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('12463b07-6c74-44e3-8aaf-a21b562f28f9', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:14:02', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('21e66659-528a-4899-8be7-77310b8987f4', '424852ec-1b4b-4539-96ff-1f6efc89ad31', '2021-03-01 10:02:21', NULL, NULL, 'Test', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('24185bd8-e243-42f9-ba86-150c54c5365d', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:19:33', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('2ad05611-b27c-4469-8529-fb25ee1fe131', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:55:00', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('32dd4c04-81d7-449c-b4c0-70f2f5a8bf92', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:53:35', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('332901e1-c091-4ca4-95bf-e622347aaf9b', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:14:51', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('3da7f1af-566a-463b-af97-c09650dbd9a5', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:19:56', NULL, NULL, 'Reply Test 4', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('4348cf92-eec5-41e0-88d1-a897f8807243', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:51:21', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('4b8a56ed-a0c1-451b-a6fb-5f585cc1d76c', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:19:06', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('5fdd9d9d-ce71-47a6-8831-07ca63b86ba6', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:01:22', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('626d5dc1-f9d9-445b-9635-66f5fe1beedb', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:14:19', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('6b8cf61f-13fc-43cf-9d1d-a5c7531dce84', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 10:31:28', NULL, NULL, 'Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('70fb2da5-a29c-48e9-b483-c82bf8fb053f', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:58:25', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('7a9fa3d1-e48b-4e78-bb16-3449072f8092', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:20:53', NULL, NULL, 'Reply Test 4', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('7ffa98f0-f808-4f82-ae76-0bf78ba0d7a2', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:52:34', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('98b3203e-88f4-443d-b4a6-283fe8bd7a15', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:15:42', NULL, NULL, 'Test 4', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('a38378d2-65b9-4054-a004-cd00a4a84b47', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:08:09', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('c148a606-2ef5-48f5-9ee5-3b3f62294702', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:12:13', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('cddbc35d-0f17-4d5a-b401-f9517a245e80', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:16:30', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('d048b8bc-3c1b-4892-858d-d97c635c63da', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:16:58', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('d11bbe71-970a-4cf9-9e79-d147bccdf540', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 10:24:39', NULL, NULL, 'Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('df2d5441-283d-4b7b-8e5b-3e006609108b', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:52:11', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('e422a39e-7094-45d2-b86c-04dc6d2397c5', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 11:54:06', NULL, NULL, 'Reply Test 2', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('eaaa38e3-2f2d-49fe-b3b7-96ad0c1e6c08', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:02:33', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('f1c1b47c-fe22-4896-8820-464483f44a53', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:03:15', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('f57eada8-c404-4014-bccf-04405087029c', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:18:39', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96'),
('f633dd91-bc2d-43ac-8ad1-e9470aaf42f7', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:02:03', NULL, NULL, 'Reply Test 3', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96');

-- --------------------------------------------------------

--
-- Table structure for table `message_replies`
--

CREATE TABLE `message_replies` (
  `reply_id` char(36) NOT NULL DEFAULT '',
  `message_id` char(36) DEFAULT NULL,
  `from_id` char(36) DEFAULT NULL,
  `timestamp_sent` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `timestamp_received` timestamp NULL DEFAULT NULL,
  `timestamp_read` timestamp NULL DEFAULT NULL,
  `message_reply_id` char(36) DEFAULT NULL,
  `to_id` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message_replies`
--

INSERT INTO `message_replies` (`reply_id`, `message_id`, `from_id`, `timestamp_sent`, `timestamp_received`, `timestamp_read`, `message_reply_id`, `to_id`) VALUES
('0fd25041-43c4-4c24-8514-ae9063b3575a', '7a9fa3d1-e48b-4e78-bb16-3449072f8092', '72da1020-dde0-41eb-be93-4963cc3dc4cc', '2021-03-01 12:20:53', NULL, NULL, 'd11bbe71-970a-4cf9-9e79-d147bccdf540', '7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) NOT NULL DEFAULT '',
  `name` varchar(50) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone_number`, `created_at`, `updated_at`) VALUES
('424852ec-1b4b-4539-96ff-1f6efc89ad31', 'Pandhu', '081387019695', '2021-03-01 07:19:37', '2021-03-01 07:19:37'),
('7228ae0d-47a7-4aaa-8a3c-f621cd9c5a96', 'Joko', '082222222222', '2021-03-01 04:51:52', '2021-03-01 04:51:52'),
('72da1020-dde0-41eb-be93-4963cc3dc4cc', 'Jono', '083333333333', '2021-03-01 04:53:52', '2021-03-01 04:53:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `message_replies`
--
ALTER TABLE `message_replies`
  ADD PRIMARY KEY (`reply_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
