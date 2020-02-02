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
	est_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
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
    end_id INT,
    FOREIGN KEY (resp_id)
		REFERENCES resp_cad(resp_id)
		ON DELETE CASCADE,
	FOREIGN KEY (end_id)
		REFERENCES end_cad(end_id)
		ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS resp_cad(
	resp_id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
    resp_nome VARCHAR(100),
	resp_prof VARCHAR(50),
    resp_grau_esc VARCHAR(25),
    resp_est_civ ENUM('S', 'V', 'C'),
    resp_cpf VARCHAR(13)
);

CREATE TABLE IF NOT EXISTS sel_est(
	sel_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    est_id INT,
    cur_id INT,
	FOREIGN KEY (est_id)
		REFERENCES est_cad(est_id)
		ON DELETE CASCADE,
	FOREIGN KEY (cur_id)
		REFERENCES cur_cad(cur_id)
);

CREATE TABLE IF NOT EXISTS cur_cad(
	cur_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    cur_nome VARCHAR(50) NOT NULL,
    cur_carga_horaria INT(5) NOT NULL,
    cur_estado ENUM('ATIVO', 'INVATIVO') NOT NULL,
    cur_vagas INT(5) NOT NULL,
    cur_desc TEXT,
    cur_link_img VARCHAR(255),
    cur_pre_req TEXT,
    perid_id INT,
    nicho_id INT,
    tag_id INT,
    end_id INT,
    FOREIGN KEY (perid_id)
		REFERENCES period_cad(period_id)
		ON DELETE CASCADE,
	FOREIGN KEY (nicho_id)
		REFERENCES nicho_cad(nicho_id)
		ON DELETE CASCADE,
	FOREIGN KEY (tag_id)
		REFERENCES tag_cad(tag_id)
		ON DELETE CASCADE,
	FOREIGN KEY (end_id)
		REFERENCES end_cad(end_id)
		ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS period_cad(
	period_id INT NOT NULL PRIMARY KEY,
	period_man VARCHAR(20),
    period_tard VARCHAR(20),
    period_noit VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS nicho_cad(
	nicho_id INT NOT NULL PRIMARY KEY,
    nicho_nome VARCHAR(50) NOT NULL,
    nicho_link_img VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tag_cad(
	tag_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_cad_nome VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS end_cad(
	end_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    end_cep VARCHAR(12) NOT NULL,
    end_end VARCHAR(100) NOT NULL,
    end_num VARCHAR(100) NOT NULL,
    end_comp VARCHAR(100),
    end_cid VARCHAR(50) NOT NULL,
    end_est CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS area_int_cad(
	area_int_cad_id INT PRIMARY KEY,
    area_int_cad_nome VARCHAR(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS emp_cad(
	emp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    emp_nome VARCHAR(50) NOT NULL,
    emp_email VARCHAR(50) NOT NULL,
    emp_senha VARCHAR(50) NOT NULL,
    emp_cnpj VARCHAR(50) NOT NULL,
    emp_pais_sed VARCHAR(25) NOT NULL,
    emp_raz_soc VARCHAR(50) NOT NULL,
	end_id INT,
    repr_id INT,
    FOREIGN KEY (end_id)
		REFERENCES end_cad(end_id),
	FOREIGN KEY (repr_id)
		REFERENCES emp_repr_cad(repr_id)
);

CREATE TABLE IF NOT EXISTS emp_repr_cad(
	repr_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    repr_nome VARCHAR(30) NOT NULL,
    repr_cpf VARCHAR(13)
);