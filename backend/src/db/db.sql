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
    med_nroMatriculaProsional INT PRIMARY KEY,
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
    usu_id INT PRIMARY KEY,
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
INSERT INTO tipo_documento SET ?;
# Primera consulta
SELECT * FROM usuario ORDER BY usu_nombre;

# Segunda consulta
SELECT * FROM cita ORDER BY cit_fecha ASC;

insert into tipo_documento (tipdoc_nombre,tipdoc_abreviatura) values ('Cedula de Ciudadania','Cc');
insert into tipo_documento (tipdoc_nombre,tipdoc_abreviatura) values ('Tarjeta de Identidad','T.i');
insert into tipo_documento (tipdoc_nombre,tipdoc_abreviatura) values ('Pasaporte','Past');

insert into genero (gen_nombre,gen_abreviatura) values ('Masculino','M');
insert into genero (gen_nombre,gen_abreviatura) values ('Femenino','F');
insert into genero (gen_nombre,gen_abreviatura) values ('Otro','Otro');

insert into acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) values ('Edgar Eduardo Mantilla Garcia','3167965248', 'Lebrija Santander');
insert into acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) values ('Stiven Carvajal','3147854987', 'Palomitas Floridablanca');


INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('123','Andres','Santiago','Carvajal','Peliño','3154784596','Bucaramanga','santiagoyo@gmail.com',1,1,1);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('321','Fabio','Alberto','Morales','Petriño','3174578496','Giron','fabio478@outlook.es',1,1,1);
INSERT INTO usuario (usu_id, usu_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('74','Alejandra','Mantilla','Garcia','3007845647','Lebrija','aleja78@outlook.es',2,2,2);

INSERT INTO especialidad (esp_id, esp_nombre) VALUES (1, 'Cardiología');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (2, 'Dermatología');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (3, 'Pediatría');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (4, 'Oftalmología');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (5, 'Gastroenterología');



INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (1, 'Consultorio A');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (2, 'Consultorio B');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (3, 'Consultorio C');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (4, 'Consultorio D');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (5, 'Consultorio E');



INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (123456, 'Dr. Juan Pérez', 1, 1);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (234567, 'Dra. Ana Rodríguez', 2, 2);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (345678, 'Dr. Luis Martínez', 3, 3);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (456789, 'Dra. Laura Gómez', 4, 4);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (567890, 'Dr. Carlos Sánchez', 5, 5);

INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (1, 'Pendiente');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (2, 'Confirmada');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (3, 'Cancelada');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (4, 'Realizada');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (5, 'Ausente');


INSERT INTO genero ( gen_nombre, gen_abreviatura) VALUES ( 'Otro', 'O');
INSERT INTO genero ( gen_nombre, gen_abreviatura) VALUES ( 'No especificado', 'NE');
INSERT INTO genero (gen_nombre, gen_abreviatura) VALUES ( 'Prefiero no decirlo', 'PND');



INSERT INTO acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) VALUES ( 'Luisa Pérez', '1234567890', 'Calle 123, Ciudad');
INSERT INTO acudiente ( acu_nombreCompleto, acu_telefono, acu_direccion) VALUES ( 'Pedro Gómez', '9876543210', 'Avenida 456, Ciudad');
INSERT INTO acudiente ( acu_nombreCompleto, acu_telefono, acu_direccion) VALUES ( 'María Rodríguez', '5555555555', 'Carrera 789, Ciudad');
INSERT INTO acudiente ( acu_nombreCompleto, acu_telefono, acu_direccion) VALUES ( 'Andrés Torres', '9999999999', 'Calle Principal, Ciudad');
INSERT INTO acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) VALUES ( 'Laura Sánchez', '1111111111', 'Avenida Central, Ciudad');



INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (1, 'Juan', 'David', 'Pérez', 'Gómez', '1234567890', 'Calle 123, Ciudad', 'juan@example.com', 1, 1, 1);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (2, 'María', 'Fernanda', 'Rodríguez', 'García', '9876543210', 'Avenida 456, Ciudad', 'maria@example.com', 2, 2, 2);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (3, 'Carlos', '', 'González', 'Sánchez', '5555555555', 'Carrera 789, Ciudad', 'carlos@example.com', 1, 1, 3);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (4, 'Ana', 'María', 'López', 'Torres', '9999999999', 'Calle Principal, Ciudad', 'ana@example.com', 3, 2, 4);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (5, 'Pedro', '', 'Ramírez', 'Sánchez', '1111111111', 'Avenida Central, Ciudad', 'pedro@example.com', 4, 3, 5);



INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (1, '2023-07-13', 1, 123456, 1);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (2, '2023-07-14', 2, 234567, 2);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (3, '2023-07-15', 3, 345678, 3);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (4, '2023-07-16', 4, 456789, 4);
INSERT INTO cita ( cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES ( '2023-07-12', 5, 567890, 5);