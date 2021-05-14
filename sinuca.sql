-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 14-Maio-2021 às 19:26
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: sinuca
--
CREATE DATABASE IF NOT EXISTS sinuca DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE sinuca;

-- --------------------------------------------------------

--
-- Estrutura da tabela tabelas
--

DROP TABLE IF EXISTS tabelas;
CREATE TABLE IF NOT EXISTS tabelas (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(256) NOT NULL,
  premio varchar(256) DEFAULT NULL,
  pontuacao int(11) DEFAULT '0',
  regra text,
  PRIMARY KEY (id),
  UNIQUE KEY nome (nome)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela times
--

DROP TABLE IF EXISTS times;
CREATE TABLE IF NOT EXISTS times (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(256) NOT NULL,
  jogador1 varchar(256) NOT NULL,
  jogador2 varchar(256) NOT NULL,
  pontos int(11) DEFAULT '0',
  tabela_id int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY nome (nome)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
