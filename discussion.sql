create table discussion (
	id INT,
	user1 VARCHAR(50),
	user2 VARCHAR(50),
	topic TEXT
);
insert into discussion (id, user1, user2, topic) values (1, 'Alice', 'Bob','Ant');
insert into discussion (id, user1, user2, topic) values (2, 'Alice', 'Bob', 'Bee');
insert into discussion (id, user1, user2, topic) values (3, 'Alice', 'Bob','Cat');
insert into discussion (id, user1, user2, topic) values (4, 'Alice', 'Chuck','Bee');
insert into discussion (id, user1, user2, topic) values (5, 'Bob',  'Chuck', 'Cat');
