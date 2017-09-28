CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE monitors(
    id UUID DEFAULT uuid_generate_v1(),
	weight dec(4, 2),
	modelNumber varchar(20) UNIQUE,
	brand varchar(30),
	price dec(6,2),
    size int,
	PRIMARY KEY(id)
);

CREATE TABLE desktops(
	id UUID DEFAULT uuid_generate_v1(),
	weight dec(4, 2),
	modelNumber varchar(20) UNIQUE,
	brand varchar(30),
	price dec(6, 2),
	processor varchar(20),
	ram int,
	cpus int,
	hardDrive int,
	dimensions varchar(20),
	PRIMARY KEY(id)
);