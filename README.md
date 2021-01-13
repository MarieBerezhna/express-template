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

```sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;```

run ```\q``` to quit psql and login as you user using ```psql -U myuser mydb ``` then enter your password

# 1.2 Create tables

and clone or pull the project and create docker container (replace {values} with your prefferable names):

cd {path-to-your-app} 

git pull https://github.com/MarieBerezhna/express-template.git 

docker build -t {docker-image-name} . 

docker run --name {docker-container-name} -v {docker-volume-name}:/usr/src/app/{media-folder} -p {outer-port}:{inner-port} {docker-image-name}


docker refresh every 5 min crontab:

```sudo crontab -e```

and then paste the following into the file:

```*/5 * * * * cd {path-to-your-app} && git pull https://github.com/MarieBerezhna/express-template.git && docker stop postapp && docker rm {docker-container-name} && docker build -t {docker-image-name} . && docker run --name {docker-container-name} -v {docker-volume-name}:/usr/src/app/{media-folder} -p {outer-port}:{inner-port} {docker-image-name}```

copy environment setup to .env file and edit the variables once you opened the file:
```cp example.env .env && nano .env```