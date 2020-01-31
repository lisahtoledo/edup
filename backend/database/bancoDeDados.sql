CREATE DATABASE edup
  CHARACTER SET utf8
  COLLATE utf8_general_ci;

SHOW DATABASES;

USE edup;

SHOW TABLES;

DROP DATABASE edup;

DROP TABLE est_cad;
DROP TABLE resp_cad;

DESC est_cad;

CREATE TABLE IF NOT EXISTS est_cad(
	est_id SERIAL PRIMARY KEY,
    est_nome VARCHAR(100) NOT NULL,
    est_cpf VARCHAR(13) NOT NULL UNIQUE,
    est_email VARCHAR(50) NOT NULL UNIQUE,
    est_eti VARCHAR(20) NOT NULL,
    est_pcd ENUM('S', 'N') NOT NULL,
    est_data_nascimento DATE,
    est_sexo ENUM('F', 'M', 'O'),
    est_naturalidade VARCHAR(25) NOT NULL,
    est_nascionalidade VARCHAR(50) NOT NULL,
    est_lgbt ENUM('S', 'N'),
    est_senha VARCHAR(255),
	resp_id INT,
    FOREIGN KEY (resp_id)
		REFERENCES resp_cad(resp_id)
		ON DELETE CASCADE
);


DESC resp_cad;

CREATE TABLE IF NOT EXISTS resp_cad(
	resp_id INT PRIMARY KEY,
    resp_nome VARCHAR(100),
	resp_prof VARCHAR(50),
    resp_grau_esc VARCHAR(25),
    resp_est_civ ENUM('S', 'V', 'C'),
    resp_cpf VARCHAR(13)
);