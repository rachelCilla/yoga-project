CREATE DATABASE yoga_app;

CREATE TABLE favorite_poses(
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255) ,
    pose_name VARCHAR(255),
    date VARCHAR(300)
);

CREATE TABLE users(
    email VARCHAR(255) UNIQUE,
    hashed_password VARCHAR(255)
);


CREATE TABLE favorite_poses( \
    id VARCHAR(255) PRIMARY KEY, \
    user_email VARCHAR(255), \
    pose_name VARCHAR(255), \
    date VARCHAR(300) \
);

CREATE TABLE users( \
    email VARCHAR(255) UNIQUE, \
    hashed_password VARCHAR(255) \
);
