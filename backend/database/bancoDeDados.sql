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

DESC resp_cad;

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




CREATE TABLE IF NOT EXISTS resp_cad(
	resp_id INT PRIMARY KEY,
    resp_nome VARCHAR(100),
	resp_prof VARCHAR(50),
    resp_grau_esc VARCHAR(25),
    resp_est_civ ENUM('S', 'V', 'C'),
    resp_cpf VARCHAR(13)
);

CREATE TABLE IF NOT EXISTS sel_est(
	sel_id
    est_id
    cur_id
);


CREATE TABLE IF NOT EXISTS cur_cad(
	cur_id SERIAL PRIMARY KEY,
    cur_nome VARCHAR(50) NOT NULL,
    cur_carga_horaria INT(5) NOT NULL,
    cur_estado ENUM('ATIVO', 'INVATIVO') NOT NULL,
    cur_vagas INT(5) NOT NULL,
    cur_desc TEXT,
    cur_link_img VARCHAR(255),
    cur_pre_req TEXT,
    perid_cad_id INT,
    nicho_cad_id INT,
    tag_cad_id INT,
    end_cad_id INT, 
    FOREIGN KEY (perid_cad_id)
		REFERENCES period_cad(period_cad_id)
		ON DELETE CASCADE,
	FOREIGN KEY (nicho_cad_id)
		REFERENCES nicho_cad(nicho_cad_id)
		ON DELETE CASCADE,
	FOREIGN KEY (tag_cad_id)
		REFERENCES tag_cad(tag_cad_id)
		ON DELETE CASCADE,
	FOREIGN KEY (end_cad_id)
		REFERENCES end_cad(end_cad_id)
		ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS period_cad(
	period_cad_id INT NOT NULL PRIMARY KEY,
	period_cad_man VARCHAR(20),
    period_cad_tard VARCHAR(20),
    period_cad_noit VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS nicho_cad(
	nicho_cad_id INT NOT NULL PRIMARY KEY,
    nicho_cad_nome VARCHAR(50) NOT NULL,
    nicho_cad_link_img VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tag_cad(
	tag_cad_id INT NOT NULL PRIMARY KEY,
    tag_cad_nome VARCHAR(50) NOT NULL
);