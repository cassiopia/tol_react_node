CREATE TABLE blog (
  id        serial,
  user_id   varchar(64) NOT NULL,
  image_url  varchar(1000),
  content  text,
  date  timestamptz
);
ALTER TABLE blog ADD CONSTRAINT pkBlog PRIMARY KEY (id);



CREATE TABLE siteUser (
  id        serial,
  login     varchar(64) NOT NULL,
  password  varchar(64) NOT NULL,
  full_name  varchar(255)
);

ALTER TABLE siteUser ADD CONSTRAINT pkUser PRIMARY KEY (id);
CREATE UNIQUE INDEX akUserLogin ON siteUser (login);