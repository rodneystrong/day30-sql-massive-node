\c sql_massive_node;
-- create table users(
--   id serial primary key,
--   name varchar(60),
--   age integer,
--   job varchar(20),
--   height integer
-- );

insert into users(name, age, job, height)
  value('alex', 30, 'developer', 6);
