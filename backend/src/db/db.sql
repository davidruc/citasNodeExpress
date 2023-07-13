CREATE DATABASE MER_citas_medicas;
USE MER_citas_medicas;
CREATE TABLE estado_cita(
    estcita_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    estcita_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE consultorio(
    cons_codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cons_nombre VARCHAR(50) NOT NULL
);
CREATE TABLE especialidad(
    esp_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    esp_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE tipo_documento(
    tipdoc_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipdoc_nombre VARCHAR(20) NOT NULL,
    tipdoc_abreviatura VARCHAR(20) NOT NULL
);

CREATE TABLE genero(
    gen_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    gen_nombre VARCHAR(50) NOT NULL,
    gen_abreviatura VARCHAR(20) NOT NULL
);
CREATE TABLE medico(
    med_nroMatriculaProsional INT PRIMARY KEY NOT NULL,
    med_nombreCompleto VARCHAR (120) NOT NULL,
    med_consultorio INT NOT NULL,
    med_especialidad INT NOT NULL,
    FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo),
    FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id)
);

CREATE TABLE cita(
    cit_codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cit_fecha DATE NOT NULL, 
    cit_estadoCita INT NOT NULL,
    cit_medico INT NOT NULL,
    cit_datosUsuario INT NOT NULL,
    FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id),
    FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaProsional),
    FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id)
);
CREATE TABLE acudiente(
    acu_codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    acu_nombreCompleto VARCHAR (100) NOT NULL,
    acu_telefono VARCHAR (100) ,
    acu_direccion VARCHAR (200)
);
CREATE TABLE usuario(
    usu_id INT PRIMARY KEY NOT NULL,
    usu_nombre VARCHAR (50) NOT NULL,
    usu_segdo_nombre VARCHAR (45) ,
    usu_primer_apellido_usuar VARCHAR (50) NOT NULL,
    usu_segdo_apellido_usuar VARCHAR (50),
    usu_telefono VARCHAR (50) NOT NULL,
    usu_direccion VARCHAR (100) ,
    usu_email VARCHAR (100),
    usu_edad INT NOT NULL,
    usu_tipodoc INT NOT NULL,
    usu_genero INT NOT NULL ,
    usu_acudiente INT NOT NULL, 
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







INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar,usu_edad, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (1, 'Juan', 'David', 'Pérez',20, 'Gómez', '1234567890', 'Calle 123, Ciudad', 'juan@example.com', 1, 1, 1);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar,usu_edad, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (2, 'María', 'Fernanda', 'Rodríguez',22, 'García', '9876543210', 'Avenida 456, Ciudad', 'maria@example.com', 2, 2, 2);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar,usu_edad, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (3, 'Carlos', '', 'González',21, 'Sánchez', '5555555555', 'Carrera 789, Ciudad', 'carlos@example.com', 1, 1, 3);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar,usu_edad, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (4, 'Ana', 'María', 'López',50, 'Torres', '9999999999', 'Calle Principal, Ciudad', 'ana@example.com', 3, 2, 4);




INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (1, '2023-07-13', 1, 123456, 1);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (6, '2023-07-13', 1, 123456, 2);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (2, '2023-07-14', 2, 234567, 2);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (3, '2023-07-15', 3, 345678, 3);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (4, '2023-07-16', 4, 456789, 4);
#Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
SELECT medico.med_nombreCompleto AS "medicos",
medico.med_especialidad AS "fk_especialidad" ,
especialidad.esp_nombre AS "especialidad_medico"
FROM medico 
INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id
WHERE especialidad.esp_nombre = "req.param";

#Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
SELECT 
cita.cit_codigo AS "codigo_cita",
cita.cit_fecha AS "fecha_cita",
cita.cit_datosUsuario AS "datos_usuario",
usuario.usu_id AS "fk_usuario",
usuario.usu_nombre AS "nombre_paciente"
FROM cita
INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
WHERE usu_id = 2 ORDER BY cita.cit_fecha;


#Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
SELECT 
cita.cit_codigo AS "codigo_cita",
cita.cit_medico AS "fk_medico_asignado",
cita.cit_datosUsuario AS "fk_usuario",
usuario.usu_nombre AS "nombre_usuario",
medico.med_nombreCompleto AS "nombre_medico"
FROM cita 
INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE cit_medico = 123456;

#Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)
SELECT 
cita.cit_codigo AS "codigo_cita",
cita.cit_fecha AS "fecha_cita",
cita.cit_datosUsuario AS "fk_usuario",
usuario.usu_nombre AS "nombre_paciente",
cita.cit_medico AS "fk_medico",
medico.med_nombreCompleto AS "nombre_medico"
FROM cita
INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE cit_datosUsuario = 2;


#Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
SELECT 
cita.cit_codigo AS "codigo_cita",
cita.cit_fecha AS "fecha",
cita.cit_estadoCita AS "estado_cita",
cita.cit_medico AS "matricula_medico",
medico.med_nombreCompleto AS "medico",
usuario.usu_nombre AS "nombre_usuario",
usuario.usu_primer_apellido_usuar AS "apellido_usuario"
FROM cita
INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
 WHERE cita.cit_fecha = '2023-07-13';

#Obtener los médicos y sus consultorios
SELECT 
medico.med_nroMatriculaProsional AS "matricula_medica",
medico.med_nombreCompleto AS "nombre",
especialidad.esp_nombre AS "especialidad",
medico.med_consultorio AS "numero_consultorio",
consultorio.cons_nombre AS "nombre_consultorio"
FROM medico
INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id;

#Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
SELECT 
cita.cit_medico AS "matricula_medico", 
medico.med_nombreCompleto AS "nombre_medico",
COUNT(*) AS "total_citas"
FROM cita 
INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE cit_fecha ='2023-07-13' AND cit_medico = 123456
GROUP BY cit_medico;


#Obtener los consultorio donde se aplicó las citas de un paciente
SELECT
cita.cit_codigo AS "codigo_cita",
usuario.usu_id AS "id_usuario",
usuario.usu_nombre AS "nombre_usuario",
medico.med_nombreCompleto AS "medico",
consultorio.cons_nombre AS "consultorio"
FROM cita
INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
WHERE usuario.usu_id = 1;


#Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
SELECT 
cita.cit_codigo AS "codigo_cita",
cita.cit_estadoCita AS "estado_cita",
usuario.usu_id AS "identificacion_usuario",
usuario.usu_nombre AS "nombre_usuario",
genero.gen_nombre AS "genero"
FROM cita
INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
INNER JOIN genero ON usuario.usu_genero = genero.gen_id
WHERE cit_estadoCita = 1 AND genero.gen_abreviatura = "F";

#Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.

#Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
SELECT
cita.cit_codigo AS "codigo_cita",
usuario.usu_id AS "id_usuario",
usuario.usu_nombre AS "nombre_usuario",
medico.med_nombreCompleto AS "medico",
consultorio.cons_nombre AS "consultorio"
FROM cita
INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
WHERE usuario.usu_id = 1;


