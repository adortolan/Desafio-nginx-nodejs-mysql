create table if not exists modulo
(
    id int Not null auto_increment primary key,
    descricao varchar(100) not null
);

insert into modulo (descricao) values ("Full Cycle");