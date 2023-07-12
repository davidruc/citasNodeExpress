CREATE DATABASE MER_citas_medicas;
USE MER_citas_medicas;
CREATE TABLE estado_cita(
    estcita_id INT PRIMARY KEY AUTO_INCREMENT,
    estcita_nombre VARCHAR(20)
);
CREATE TABLE consultorio(
    cons_codigo INT PRIMARY KEY AUTO_INCREMENT,
    cons_nombre VARCHAR(50)
);
CREATE TABLE especialidad(
    esp_id INT PRIMARY KEY AUTO_INCREMENT,
    esp_nombre VARCHAR(20)
);
CREATE TABLE tipo_documento(
    tipdoc_id INT PRIMARY KEY AUTO_INCREMENT,
    tipdoc_nombre VARCHAR(20),
    tipdoc_abreviatura VARCHAR(20)
);

CREATE TABLE genero(
    gen_id INT PRIMARY KEY AUTO_INCREMENT,
    gen_nombre VARCHAR(50),
    gen_abreviatura VARCHAR(20)
);
CREATE TABLE medico(
    med_nroMatriculaProsional INT PRIMARY KEY AUTO_INCREMENT,
    med_nombreCompleto VARCHAR (120),
    med_consultorio INT ,
    med_especialidad INT ,
    FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo),
    FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id)
);
CREATE TABLE cita(
    cit_codigo INT PRIMARY KEY AUTO_INCREMENT,
    cit_fecha DATE,
    cit_estadoCita INT,
    cit_medico INT,
    cit_datosUsuario INT,
    FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id),
    FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaProsional),
    FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id)
);
CREATE TABLE acudiente(
    acu_codigo INT PRIMARY KEY AUTO_INCREMENT,
    acu_nombreCompleto VARCHAR (100),
    acu_telefono VARCHAR (100),
    acu_direccion VARCHAR (200)
);
CREATE TABLE usuario(
    usu_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_nombre VARCHAR (50),
    usu_segdo_nombre VARCHAR (45),
    usu_primer_apellido_usuar VARCHAR (50),
    usu_segdo_apellido_usuar VARCHAR (50),
    usu_telefono VARCHAR (50),
    usu_direccion VARCHAR (100),
    usu_email VARCHAR (100),
    usu_tipodoc INT,
    usu_genero INT,
    usu_acudiente INT, 
    FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento(tipdoc_id),
    FOREIGN KEY (usu_genero) REFERENCES genero(gen_id),
    FOREIGN KEY (usu_acudiente) REFERENCES acudiente(acu_codigo)
);