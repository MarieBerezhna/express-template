# express-template
requirements:
sudo access;
docker;
database : postgres;
mail server;

ssh to your server 

# 1.Database
Create user and database
# 1.1 Create database
Save the username, password and database name - you need to assign those values to env variables later

```
sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;
```

# 1.2 Create tables
run ```\q``` to quit psql and login as you user using ```psql -U myuser mydb```, enter your password and run:
```
CREATE TABLE users (
	id serial NOT NULL,
	email text NOT NULL,
	name text NOT NULL,
	pass text NOT NULL
);
```

# 2 Setup working folder and cronjob for development
and clone or pull the project and create docker container (replace {values} with your prefferable names):
Let's say you store your projects at ~/projects/ and the name of this project is "template". We gonna call our docker image "user/template" and container and volume - "template" (replace as you wish). We also assume that you'll store media in /uploads folder within your app.

ssh to your server
cd projects

git clone https://github.com/MarieBerezhna/express-template.git 
mv express-template template //rename folder
cd template

docker build -t user/template . 

docker run --name template -v template:/usr/src/app/uploads -p 8083:8083 user/template


docker refresh every 5 min crontab:

```sudo crontab -e```

and then paste the following into the file:

```*/5 * * * * cd {path-to-your-app} && git pull https://github.com/MarieBerezhna/express-template.git && docker stop postapp && docker rm {docker-container-name} && docker build -t {docker-image-name} . && docker run --name {docker-container-name} -v {docker-volume-name}:/usr/src/app/{media-folder} -p {outer-port}:{inner-port} {docker-image-name}```

copy environment setup to .env file and edit the variables once you opened the file:
```cp example.env .env && nano .env```