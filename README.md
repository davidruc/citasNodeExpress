# Proyecto citas con NODE y EXPRESS

## Tabla de contenido:

- [Tecnologias](#tecnologías)
- [Dependencias de npm](#dependencias-utilizadas)
- [Esquema sql](#esquema-sql)
- [Requerimientos del proyecto](#requerimientos)
- [Solución: Endpoints](#end-points)

## Tecnologías

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="50" height="50"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="50" height="50"/> 

## Dependencias utilizadas

Para el presente proyecto se van a utilizar las siguientes dependencias en sus respectivas versiones:

  ```json
        "class-transformer": "0.5.1",
        "dotenv": "16.3.1",
        "promise-mysql": "5.2.0",
        "express": "4.18.2",
        "nodemon": "3.0.1",
        "reflect-metadata": "0.1.13",
        "typescript": "5.1.6"
  ```

## Esquema SQL 

![esquemaSql](./diagrama.png)



## Requerimientos

1. Obtener todos los pacientes alfabéticamente

2. Obtener todas las citas alfabéticamente

3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):

4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):

5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)

6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)

7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)

8. Obtener los médicos y sus consultorios

9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)

10. Obtener los consultorio donde se aplicó las citas de un paciente

11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad

12. Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.

13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.



## END-POINTS  

En este punto se da solución a los requerimientos del punto anterior:

1. Endpoint de la consulta por citas. *http://127.3.34.23:5510/api/citas*
   * Este endpoint permite consultar todos los pacientes y ordenarlos de manera alfabética.

2. Endpoint "Obtener todas las citas alfabéticamente":  *http://127.3.34.23:5510/api/citas*
   * Este endpoint en vez de traer las citas alfabéticamente las ordena por fecha. Este arreglo se realizó a criterio personal ya que la tabla de la base de datos no contiene ninguna columna que hable de un nombre de las citas.
3. Endpoint "Obtener todos los médicos de una especialidad específica": *http://127.3.34.23:5510/api/medico/:especialidad?*
   * Este endpoint trae todos los médicos que pertenecen a una especialidad específica. El parámetro de entrada debe tener la información tal y como está ingresada en la base de datos. 
   * No es un parámetro obligatorio. 
   * Si no se ingresa el parámetro se realizará una consulta que trae todos los médicos con sus respectivas especialidades (se recomienda que si no conoce la forma en la que están ingresados los datos de las especialidades primero realice esta consulta.)
4. Endpoint "Encontrar la próxima cita para un paciente específico": *http://127.3.34.23:5510/api/ProximaCitaPaciente/:id_usuario?*
   * Este endpoint trae la próxima cita de un paciente. El parámetro de entrada es el id del paciente que se está buscando. El parámetro debe ser un número entero.
   * No es un parámetro obligatorio.
   * Este endpoint trae la próxima cita de un paciente. El parámetro de entrada es el id del paciente que se está buscando.
   * No es un parámetro obligatorio.
   * Si no se ingresa un parámetro se muestran todas las citas.Si no se ingresa un parámetro se muestran todas las citas.
5.  Endpoint "Encontrar todos los pacientes que tienen citas con un médico específico": *http://127.3.34.23:5510/api/citasMedico/:matricula_medico?*
   * Este endpoint trae todas las citas que tiene un médico. El parámetro de entrada es la matricula médica del médico que se desee buscar. El parámetro debe ser un número entero
   * No es un parámetro obligatorio.
   * Si no se ingresa el parámetro se muestran todas las citas con el médico asignado a cada una.
6. Endpint "Obtener las consultorías para un paciente específico": *http://127.3.34.23:5510/api/citasPaciente/id_usuario?*
   * Este endpoint trae todas las citas que tiene disponible un paciente en específico. El parámetro de entrada debe ser el id del usuario. El id debe ser un número entero
   * No es un parámetro obligatorio.
   * Si no se ingresa el parámetro se muestran todas las citas, especificando las fechas y los médicos asignados a estas citas.
7. Endpoint "Encontrar todas las citas para un día específico": *http://127.3.34.23:5510/api/citasXfecha/:fecha?*
   * Este endpoint trae todas las citas de un día en específico. El parámetro de entrada debe ser la fecha en la que se desean ver las citas en formato "AAAA-MM-DD".
   * No es un parámetro obligatorio.
   * Si no se ingresa el parámetro se muestran todas las citas, especificando las fechas, los médicos asignados a estas citas y algunos datos del usuario.
8. Endpoint "Obtener los médicos y sus consultorios":  *http://127.3.34.23:5510/api/consultorios*
   * Este endpoint trae todos los médicos con su respectivo consultorio.
9. Endpoint "Contar el número de citas que un médico tiene en un día específico": *http://127.3.34.23:5510/api/numeroCitas/:matricula_medico?/:fecha?*
   * Este endpoint trae todas las citas que tiene un médico en un día específico. Los parámetros de entrada debe ser la fecha en la que se desean ver las citas en formato "AAAA-MM-DD" y el id del médico como un número entero.
   * No son un parámetros obligatorios.
   * Si no se ingresan los dos parámetros se muestran todos los médicos, especificando la citas agendadas sin importar la fecha.
   * Si sólo se ingresa la matrícula del médico se muestras los mismos datos que si no se ingresara ningún parámetro.
10. Endpoint "Obtener los consultorio donde se aplicó las citas de un paciente": *http://127.3.34.23:5510/api/consultorioCita/:id_usuario?*
    * Este endpoint trae todas las citas que tiene disponible un paciente en específico y el consultorio donde se realizaron. El parámetro de entrada debe ser el id del usuario. El id debe ser un número entero
    * No es un parámetro obligatorio.
    * Si no se ingresa el parámetro se muestran todas las citas, especificando las fechas, los médicos asignados a estas citas y sus consultorios.
11. Endpoint "Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad": *http://127.3.34.23:5510/api/atendidaXGenero/:Genero?*
    * Este endpoint trae todas las citas que fueron atendidas por un cierto genero. El parámetro de entrada debe ser la abreviatura del género. Por ejemplo, en este caso puede ser "F" para femenino o "M" para masculino.
    * No es un parámetro obligatorio.
    * Si no se ingresa el parámetro se muestran todas las citas con información del usuario y el género del paciente.
    * *Es importante aclarar que el estado "aprobado" en la base de datos tiene un id = 4, por lo que es este dato el que se utiliza en la construcción de la query*
12. Endpoint "": **
13. Endpoint "Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.": *http://127.3.34.23:5510/api/citasCanceladas/:fecha?*
    * Este endpoint trae todas las citas que fueron rechazadas en un mes específico. El parámetro de entrada debe una fecha en la notación AAAA-MM-DD. El programa automáticamente buscará todas las coincidencias del mes ingresado en MM sin importar los datos del DD.
    * No es un parámetro obligatorio.
    * Si no se ingresa el parámetro se muestran todas las citas con información del usuario y el médico.
    * *Es importante aclarar que el estado "rechazado" en la base de datos tiene un id = 3, por lo que es este dato el que se utiliza en la construcción de la query*







