


create table articulo_etiqueta (
    articulo_id int not null,
    etiqueta_id int not null,
    primary key (articulo_id, etiqueta_id),
    foreign key (articulo_id) references articulo(id) on delete cascade,
    foreign key (etiqueta_id) references etiquetas(id) on delete cascade
);