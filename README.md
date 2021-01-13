# express-template
requirements:
sudo access;
docker;
database : postgress;
mail server;


1.setup:
ssh to your server and clone the project, or pull it like that: 
and create docker container
# build docker image  and start container fisrt time:
cd {path-to-your-app} 
git pull https://github.com/MarieBerezhna/express-template.git 
docker build -t {docker-image-name} . 
docker run --name {docker-container-name} -v {docker-volume-name}:/usr/src/app/{media-folder} -p {outer-port}:{inner-port} {docker-image-name}

create a cronjob for development:
```sudo crontab -e```
# docker refresh every 5 min crontab:
*/5 * * * * cd {path-to-your-app} && git pull https://github.com/MarieBerezhna/express-template.git && docker stop postapp && docker rm {docker-container-name} && docker build -t {docker-image-name} . && docker run --name {docker-container-name} -v {docker-volume-name}:/usr/src/app/{media-folder} -p {outer-port}:{inner-port} {docker-image-name}

