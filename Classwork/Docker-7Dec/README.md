
# docker hub log in 

1. docker id: surajporje
2. password : 8668951369


1. to manually create DB
- 1.  after downloading mysql image
- create mysql container , with schema  using
- need environment variable
- create port : mandetory 
- 

```bash
sudo docker container run --name mydb -d -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=mydb -p 9090:3306 mysql:5.7
```

-  2. to connect to mysql on container

```bash
mysql -u root --port 9090 --protocol tcp -p
```
2. # build the docer image of db 
- need a Dockerfile , create it ,
- also create .sql file 
- use same container for following command 

```bash
 sudo docker image build . -t mywebmyappdb

sudo docker container run -d -p 9090:3306 --name mydb myappdb

 mysql -u root --port 9090 --protocol tcp -p

sudo docker image rm myappdb

```

4. create backend app in container 
- need Dockerfile 
- and a express application created

```bash

```
5. create index.html on container
- create Dockerfile
- create index.html
```bash
$ : sudo docker image build . -t myweb

$: sudo docker image build . -t myweb
- Sending build context to Docker daemon  3.584kB
Step 1/4 : FROM httpd
 ---> 0a30f4c29d25
Step 2/4 : COPY ./index.html /usr/local/apache2/htdocs/
 ---> 21a7a904b4be
Step 3/4 : EXPOSE 80
 ---> Running in 7faf73d7e7c6
Removing intermediate container 7faf73d7e7c6
 ---> 16c1c1b77e74
Step 4/4 : CMD apachectl -D FOREGROUND
 ---> Running in 7adf905f0031
Removing intermediate container 7adf905f0031
 ---> e4608ab4a6e7
Successfully built e4608ab4a6e7


$  sudo docker container run -d -p 3000:80 --name myweb myweb
```

6. to run angular application 

```bash

$ : ng new mywebsite
# create application pages , then 
$ :  ng serve --open

$ :~/dac/DevOps/docker-project/angular/mywebsite$ ng build --prod

# on build a copy is created 

$ :~/dac/DevOps/docker-project/angular/mywebsite/dist/mywebsite$ ls
3rdpartylicenses.txt  index.html                    polyfills.35a5ca1855eb057f016a.js  styles.3ff695c00d717f2d2a11.css
favicon.ico           main.e225af7c98748907695e.js  runtime.acf0dec4155e77772545.js




$:~/dac/DevOps/docker-project/angular/mywebsite$ sudo docker image build . -t angularwebsite

$: sudo docker image ls
REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
angularwebsite        latest              141617bee912        11 seconds ago      138MB

dac/DevOps/docker-project/angular/mywebsite$ sudo docker container run -d -p 8080:80 angularwebsite
```
- now open browser to check website on 
> localhost:8080/ 


7. command to upload the images to docker hub 
- 1.  tag image name on machine as DockerId/image to push on docker hub
> sudo docker image tag <image-name>   dockerId/image-name
- 2. to push the image
> sudo docker image push  dockerId/image-name

- 3. to pull the image stored on docker hub 
- > sudo docker image pull dockerId/image-name
```bash
# login to docker
$  sudo Docker login 
# tag image name on machine as DockerId/image to push on docker hub
 sudo docker image tag myappdb surajporje/myappdb

 # to push the image
 sudo docker image push surajporje/myappdb

 # now we can delete images on our image ,
 # now we can be download/pull from docker hub
 sudo docker image pull surajporje/myappdb
```

# day 5 
- kubernetis clustre 