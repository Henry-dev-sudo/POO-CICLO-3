create database pupuseriaSv;
use pupuseriaSv;

create table pupusas(
    id int primary key auto_increment,
    tipo varchar(100),
    tamaño varchar(50),
    precio decimal(4,2),
    disponible boolean
);

create table bebidas(
    id int primary key auto_increment,
    nombre varchar(100),
    tipo varchar(50),
    tamaño varchar(50),
    precio decimal(4,2),
    temperatura varchar(20),
    marca varchar(100),
    stock int
);

create table empleados(
    id int primary key auto_increment,
    nombre varchar(100),
    apellido varchar(100),
    puesto varchar(50),
    salario decimal(5,2),
    fecha_ingreso date,
    turno varchar(20),
    telefono varchar(15),
    edad int
);