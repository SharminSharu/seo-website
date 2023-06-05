-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2023 at 04:17 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seo`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `point_1` varchar(255) NOT NULL,
  `point_2` varchar(255) NOT NULL,
  `point_3` varchar(255) NOT NULL,
  `point_4` varchar(255) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `description`, `point_1`, `point_2`, `point_3`, `point_4`, `photo`) VALUES
(6, 'The best SEO solution with 10 years of experience', 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet', 'Award Winning', 'Professional Staff', '24/7 Support', 'Fair Prices', 'about.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `img`) VALUES
(1, 'client-1.png'),
(2, 'client-2.png'),
(3, 'client-3.png'),
(4, 'client-4.png'),
(5, 'client-5.png'),
(6, 'client-6.png');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `subject`, `msg`) VALUES
(4, 'maria', 'm@gmail.com', 'ret', 'sets'),
(6, 'mita', 'jkasjik@gmail.com', 'setrysrt', 'druysrdur'),
(9, 'str', 'ser@gmail.com', 'sgz', 'tttt'),
(11, 'maria', 'm@gmail.com', 'szf', 'uuu'),
(13, 'str', 'ser@gmail.com', 'fchxd', 'zsdtgdt'),
(14, 'mita', 'jkasjik@gmail.com', 'fhksfhsk', 'ifiafhjlikJF'),
(15, 'jj', 'dealer@email.com', 'lionzdg', 'Hello.. '),
(18, 'kiron', 'k@gmail.com', 'hello', 'hola');

-- --------------------------------------------------------

--
-- Table structure for table `gallary`
--

CREATE TABLE `gallary` (
  `id` int(11) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallary`
--

INSERT INTO `gallary` (`id`, `photo`) VALUES
(1, 'portfolio-1.jpg'),
(2, 'portfolio-2.jpg'),
(3, 'portfolio-4.jpg'),
(4, 'portfolio-3.jpg'),
(5, 'portfolio-6.jpg'),
(6, 'portfolio-5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `general`
--

INSERT INTO `general` (`id`, `address`, `phone`, `email`) VALUES
(1, '13/A Dhanmondhi, Dhaka', '+8801515246780', 'seo_master@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `head`
--

CREATE TABLE `head` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `head`
--

INSERT INTO `head` (`id`, `title`, `description`, `img`) VALUES
(1, 'All in one SEO tool need to grow your business rapidly', 'Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem', 'hero.png');

-- --------------------------------------------------------

--
-- Table structure for table `letter`
--

CREATE TABLE `letter` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `title_1` varchar(255) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `letter`
--

INSERT INTO `letter` (`id`, `title`, `title_1`, `img`) VALUES
(1, 'Ready to get started', 'Diam elitr est dolore at sanctus nonumy.', 'newsletter.png');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `title_1` varchar(255) NOT NULL,
  `title_2` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `photo`, `title_1`, `title_2`) VALUES
(1, 'portfolio-1.jpg', 'Web Design', 'Project Name'),
(2, 'portfolio-6.jpg', 'Web Design', 'Project Name'),
(3, 'portfolio-2.jpg', 'Web Design', 'Project Name'),
(4, 'portfolio-4.jpg', 'Web Design', 'Project Name'),
(5, 'portfolio-5.jpg', 'Web Design', 'Project Name'),
(6, 'portfolio-3.jpg', 'Web Design', 'Project Name');

-- --------------------------------------------------------

--
-- Table structure for table `send`
--

CREATE TABLE `send` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `send`
--

INSERT INTO `send` (`id`, `email`) VALUES
(1, 'Ma@gmail.com'),
(2, 'm@gmail.com'),
(3, 'maria12@gmail.com'),
(5, 'sharmin@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `Title_1` varchar(255) NOT NULL,
  `logo` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `Title_1`, `logo`, `title`, `description`) VALUES
(1, 'What Solutions We Provide', 'fa fa-home fa-2x', 'SEO Optimization', 'Search engine optimization (SEO) is the practice of orienting your website to rank The aim is typically to rank on the first page of Google results for search terms that mean the most to your target audience.'),
(2, '', 'fa fa-home fa-2x', 'Web Design', 'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.'),
(3, '', 'fa fa-home fa-2x', 'Social Media Marketing', 'Social media marketing is a form of digital marketing that leverages the power of popular social media networks to achieve your marketing and branding goals.'),
(4, '', 'fa fa-home fa-2x', 'Email Marketing', 'Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services can make the customers.'),
(5, '', 'fa fa-home fa-2x', 'PPC Advertising', 'PPC or pay-per-click is a type of internet marketing that involves advertisers paying a fee each time one of their ads is clicked. Simply, you only pay for advertising if your ad is actually clicked on.'),
(6, '', 'fa fa-home fa-2x', 'App Development', 'Connect Your Front-End UI to the Backend With Minimal Coding. Create a Free AWS Account. With Amplify Studio, Build and Host a Full-Stack Web App,');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `photo`, `name`, `designation`) VALUES
(1, 'team-4.jpg', 'Mahin Alam', 'CEO'),
(2, 'team-5.jpg', 'Mashuka Nowrin', 'Manager'),
(4, 'team-3.jpg', 'Ashab jamil', 'Designer');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `description`, `name`, `profession`, `photo`) VALUES
(1, 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Faria Mitu', 'Designer', 'testimonial-1.jpg'),
(2, 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Ziaul Huq', 'Manager', 'testimonial-2.jpg'),
(3, 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Tanjid Chowdhury', 'Developer', 'team-1.jpg'),
(4, 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Ladip Alam', 'CEO', 'testimonial-3.jpg'),
(6, 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Maria', 'Designer', 'team-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'sharmin', 'sharmin@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallary`
--
ALTER TABLE `gallary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `head`
--
ALTER TABLE `head`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `letter`
--
ALTER TABLE `letter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `send`
--
ALTER TABLE `send`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `gallary`
--
ALTER TABLE `gallary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `general`
--
ALTER TABLE `general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `head`
--
ALTER TABLE `head`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `letter`
--
ALTER TABLE `letter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `send`
--
ALTER TABLE `send`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
