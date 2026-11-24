create table articulo (
    id int primary key auto_increment,
    titulo varchar(200) not null,
    subtitulo varchar(255) not null,
    cuerpo long not null,
    resumen varchar(255) not null,
    imagen varchar(255),
    estado enum('borrador', 'revision', 'publicado', 'archivado') default 'borrador',
    created_at timestamp default current_timestamp
)

create table etiquetas (
    id int primary key auto_increment,
    titulo varchar(50),
    created_at timestamp default current_timestamp
)

create table articulo_etiqueta (
    articulo_id int not null,
    etiqueta_id int not null,
    primary key (articulo_id, etiqueta_id),
    foreign key (articulo_id) references articulo(id) on delete cascade,
    foreign key (etiqueta_id) references etiquetas(id) on delete cascade
);