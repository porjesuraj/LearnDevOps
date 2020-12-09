## syllabus 


1. Introduction to DevOps,
2. Microservices,
3. Fragmentation of business requirement,
4. Containerisation,
5.  docker,
6.  Container life cycle,
7.  YAML,
8.  Docker Swarm and Docker Stack , 
9.  Kubenetes,
10. Istio Service Mesh,
11. delivery pipeline,
12. Jenkins,
13. Selenium integration with Jenkins,Developing an application in a team, 
14. code versioning system,



## notes

1. deisadvantage of monolithic services 
- 3 dis 
- to avoid this use 
2. Microservices 

3. What is REST API and why it is used?
- A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.


# day 4 :  29/11/2020
## Containerization using Docker
  
### docker command 

0. check docker version
> sudo docker version 

1. command to start docker
   > sudo systemctl start docker  

2. coomand to stop docker
> sudo systemctl stop docker

3. command to restart docker 
> sudo systemctl restart docker


4. change to root user
   > su - 
   > password : Enter password

4. docker image
-  1. inspect docker image
> sudo docker image inspect <ContainerImage>
```bash
sudo docker image inspect jenkinsci/blueocean
```
- 2. check dpcker image list
> sudo docker image ls 

- 3. check image history

> sudo docker history <repository/image>
```bash
sudo docker history hello-world
```

- 4. get OS image from docker library/hub
> sudo docker image pull <repo/image>
```bash
sudo docker image pull ubuntu
```
5. Container command
- 1. to create container out of docker image
  - it creates and runs the image , 
  - it get closed  as no nothing to run on it
> sudo docker container run ubuntu

- 2. list of working and stopped container
> sudo docker container ls -a

- 3. list of working container 
>  sudo docker container ls

#### Note :
-  docker creates Virtual machine / or sharing same OS on physical machine if same OS required for container 
- if not , diff OS, a OS VM is created 
-  VM runs full OS  
 - for container it runs kernel : 
     -  its starts , if there are commands/process to run it does it , or container get exited. 

- 4. to delete a container 
> sudo docker container rm ContainerID 

- 5. to start the docker , with its Terminal in Container OS image
> sudo docker container run -it  ubuntu 
- where -i : interactive,  t : tele type(Terminal)

```bash
$ sudo docker container run -it  ubuntu 
root@d5809cf98cc0:/# ls
bin   dev  home  lib32  libx32  mnt  proc  run   srv  tmp  var
boot  etc  lib   lib64  media   opt  root  sbin  sys  usr
root@d5809cf98cc0:/# mkdir code
root@d5809cf98cc0:/# cd code/
root@d5809cf98cc0:/code# touch file1.txt
root@d5809cf98cc0:/code# touch file2.txt
root@d5809cf98cc0:/code# ls
file1.txt  file2.txt
root@d5809cf98cc0:/code# exit
exit

```

- 5. install docker image  
> sudo docker image pull mysql 


6.  use httpd image of apache instead of below commmad to install apache2 on container

```bash
sudo docker container run -it ubuntu 
root@b33888469f38:/# 
1. apt-get update

2. apt-get install apache2 

3. service apache2 start

4. apt-get install curl 

5. curl http://localhost
```

 - 1. instead use 
 >  sudo docker image pull httpd
 - 2. now to run httpd 
 > sudo docker container run -it httpd
 - 3. inspect httpd
  >  sudo docker image inspect httpd
 - 4. check network info 
  >  ifconfig
  - 172.17.0.1 : ip address
 - 5. 
 -  6. to run  server in detached mode , in background using command -d (demion)
>  docker container run -d httpd
 - 7. running with port forwarding 
 > sudo docker container run -d -p 5678:80 httpd
 - 8. to stop -d contianer
```
- sudo docker container ls

CONTAINER ID        IMAGE               COMMAND              CREATED             STATUS              PORTS               NAMES
2bd496dbce31        httpd               "httpd-foreground"   16 seconds ago      Up 13 seconds       80/tcp              upbeat_ardinghelli

- sunbeam@sunbeam-Inspiron-3583:~$ sudo docker 
container rm 2bd

Error response from daemon: You cannot remove a running container 2bd496dbce31428c52bf5cc37f8fc32f3dbb435456cf421901e7c7d6525cb212. Stop the container before attempting removal or force remove

- sunbeam@sunbeam-Inspiron-3583:~$ sudo docker container stop 2bd
2bd

- sunbeam@sunbeam-Inspiron-3583:~$ sudo docker container rm 2bd
2bd
```

7. connect/start apacheserver in container using httpd

- 1.  check ip address/ network info
  > ifconfig
- check ip 

- 2. for port forwarding from pc to port 60 of container http5
> $sudo docker container run -d -p 5678:80 httpd 


- 3.  to execute any command inside container 
> sudo docker container exec -it (containerID) bash
```bash
sudo docker container exec -it 1d712ffb3df6 bash

root@1d712ffb3df6:/usr/local/apache2# ls
bin    cgi-bin	error	icons	 logs
build  conf	htdocs	include  modules

root@1d712ffb3df6:/usr/local/apache2# cd htdocs

root@1d712ffb3df6:/usr/local/apache2/htdocs# ls
index.html

root@1d712ffb3df6:/usr/local/apache2/htdocs# cat index.html
<html><body><h1>It works!</h1></body></html>

root@1d712ffb3df6:/usr/local/apache2/htdocs# echo "hello world"
hello world

root@1d712ffb3df6:/usr/local/apache2/htdocs# apt-get install vim 

root@1d712ffb3df6:/usr/local/apache2/htdocs# vim index.html
root@1d712ffb3df6:/usr/local/apache2/htdocs# vim index.html
root@1d712ffb3df6:/usr/local/apache2/htdocs# exit
exit


```
- 4.  to see content of html file 
> cat ____.html 

- 5. vim commands
- 
- 1. open html file 
  > vim ___.html

- 2. to delete a line 
> dd 
- 3. to insert in file 
> Esc +  i

- 4. to exit 
> Esc + :wq

- 5. now open browser to open your webpage on port 5678 coming from container port 80  
> http://localhost:5678/
> http://172.17.0.1:5678

# custom docker image creation  7/12/2020

##  docker hub log in 

1. docker id: surajporje
2. password : 8668951369
-  
## how to create a Container/Instance of a standard image 
1. to manually create DB
-  1.  after downloading mysql image
   - create mysql container , with schema  using
   - need environment variable
   - create port : mandetory 
 
```bash
# code to create a container from standard image 
sudo docker container run --name mydb -d -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=mydb -p 9090:3306 mysql:5.7
```
## for standard approach for image creation
0. mandetory to create Dockerfile 
-  docker file commands : 
- 1. FROM : => indicates base image, from which we will create a custom image 
- 2. ENV : => used to set environment variable , like mysql_root_password
- 3. COPY : => used to copy file from local machine to container specific folder
- 4. ADD : => used to copy file from local machine to container specific folder, and also download content from url and unzip file 
- 5. EXPOSE => used to expose port 3306 from container for port forwarding , outside the container 
- 6. to  COPY everything from current directory on machine to home directory of container
   > COPY . .
- 7.  run a command when container starts
   > CMD <command>
- e.g: 
  >  CMD ["node","server.js"] 
  > CMD node server.js

1. for our db image 
 +  Dockerfile 
```bash
# base image(mysql) used to create my image 
FROM mysql:5.7

# ENV : used to set environment variable , like mysql_root_password
# set root password to root
ENV mysql_root_password "root"

# create a database named ecommercedb
ENV MYSQL_DATABASE "ecommercedb"

# copy db.sql file to container i.e folder /docker-entrypoint-initdb.d for docker to run it 
COPY ./db.sql /docker-entrypoint-initdb.d

# EXPOSE port 3306 from container for port forwarding 
EXPOSE 3306
```
+ sql file
```sql
create table user(id integer primary key auto_increment,firstname varchar(40),lastname varchar(40),email varchar(50),password varchar(100)); 
create table product (id integer primary key auto_increment,title varchar(100),price float); 
```

+  code on terminal 
```bash
sudo docker image build . -t myappdb2

```
- where , 
- > . => indicates current directory, where we can find both Docker file and sql file  
- > -t => t for tag : depicts the building  image name

+ so now to run our image i.e Container commands
```bash
$ : sudo docker container run -d -p 9090:3306 --name mydb myappdb
# here, myappdb : image name , mydb : container name , -d : detached , -p: port mapping
# verify using ls command
$ : sudo docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
c121fb10f354        myappdb             "docker-entrypoint.s…"   49 seconds ago      Up 46 seconds       33060/tcp, 0.0.0.0:9090->3306/tcp   mydb

# now open mysql 
sudo mysql -u root --port 9090 --protocol tcp -p

# successfull, now can perform db operation here
```
2. create image for backend :  node /express 
- docker file 
```bash
# create the backend image with node as base image
FROM node

# COPY everything from current directory on machine to home directory of container
COPY . .

# expose port 3000
EXPOSE 3000

# run a command when container starts

CMD ["node","server.js"]
```

- code on terminal 
```bash
# build iamge
sudo docker image build . -t mybackend
# check using ls
$ sudo docker image ls
# create a container
sudo docker container run -d -p 4000:4000 --name run mybackend
```

4. create index.html on container
- create Dockerfile
```bash
# use http as base image
FROM httpd

# copy index.html to the htdocs 
COPY ./index.html /usr/local/apache2/htdocs/

# expose port 80
EXPOSE 80

# run apache in foreground(continuously )
CMD apachectl -D FOREGROUND
```

- create index.html
-   commands on terminal
```bash
# build docker custom image
$ : sudo docker image build . -t myweb

# commands In Docker file 

# Step 1/4 : FROM httpd
 
# Step 2/4 : COPY ./index.html /usr/local/apache2/htdocs/

# Step 3/4 : EXPOSE 80

#Step 4/4 : CMD apachectl -D FOREGROUND



$  sudo docker container run -d -p 3000:80 --name myweb myweb
```

5. to run angular application 
- docker file commands 
```bash
FROM httpd

COPY ./dist/mywebsite/ /usr/local/apache2/htdocs/

EXPOSE 80 

CMD apachectl -D FOREGROUND

```

- terminal commands
```bash

$ : ng new mywebsite
# create application pages , then 
$ :  ng serve --open

$ :~/dac/DevOps/docker-project/angular/mywebsite$ ng build --prod

# on ng build production level angualar copy is created , contains all js,css files ,all ts files get compiled to js 

$ :~/dac/DevOps/docker-project/angular/mywebsite/dist/mywebsite$ ls
3rdpartylicenses.txt  index.html                    polyfills.35a5ca1855eb057f016a.js  styles.3ff695c00d717f2d2a11.css
favicon.ico           main.e225af7c98748907695e.js  runtime.acf0dec4155e77772545.js



# build custom image
$:~/dac/DevOps/docker-project/angular/mywebsite$ sudo docker image build . -t angularwebsite

# check if image created
$: sudo docker image ls
REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
angularwebsite        latest              141617bee912        11 seconds ago      138MB
# create container of custom image
dac/DevOps/docker-project/angular/mywebsite$ sudo docker container run -d -p 8080:80 angularwebsite

# now open browser to check website on 
> localhost:8080/ 
```



##  command to push/pull the images to/from docker hub 
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
##  kubernetes cluster
1.  what is kubernetes?
  - Kubernetes is an open source system for 
    - automating deployments,
    -  scaling and management of containerized applications
  - it is a container orchestration system
  - using Kubernetes that means your application is following
    - 1.  the microservices architecture and 
    - 2.  is already containerized
2. what does Orchestrator do ?
  - 1. cloning container / replica creation
  - 2. restarting container 
  - 3. destroying container 
  - 4. replacing existing container 

3. which are the Container Orchestation tools 
- 1. Docker Swarm
  - used when  replica < 10,000
  - simpler than kubernetes
- 2. Kubernetes
  - used when replica(above)  > 10,000
- 3. Apache Mesos 
- 4. Marathon

4. work on K for developers 
- 1. make K , application development ready ---> developer 
  + here we have certification : (CKAD= Certified K Application Developer)
  + upload app to K 
- 2. cluster administeration : setting,config cluster ---> administrator
    + here we have certification :  (CKA : where Administrator) + (CKS : where S: security Specialist)


5.  K history?
  - developed by Google , in Borg project
  - taken over by Cloud Native Computing Foundation (CNFC)
  - open source/community

## kubernetes ppt 

## yaml in docker ppt 

# day 6 Kubernetes Cluster demo 

0. install virtual box
> https://www.virtualbox.org/wiki/Linux_Downloads
OR
> https://download.virtualbox.org/virtualbox/6.1.16/virtualbox-6.1_6.1.16-140961~Ubuntu~bionic_amd64.deb

1. install vagrant
>  curl -O https://releases.hashicorp.com/vagrant/2.2.14/vagrant_2.2.14_x86_64.deb
> sudo apt install ./vagrant_2.2.14_x86_64.deb

2.  Install kubernates from
 > https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/
 - OR use
 ```bash
     sudo apt-get update && sudo apt-get install -y apt-transport-https curl
     curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
     cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
     deb https://apt.kubernetes.io/ kubernetes-xenial main
     EOF
     sudo apt-get update
     sudo apt-get install -y kubelet kubeadm kubectl
     sudo apt-mark hold kubelet kubeadm kubectl
 ```  


3. akms in pod.yaml file 
- a : apiversion 
- k : <kind of object>
- m : <metadata>
- spec : <specification of object>

4. create a directory for vagrant and use 
```bash
# creates a Vagrantfile in the directory
vagrant init hashicorp/bionic64

```
- edit the  vagrantFile as 
```bash
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.provision "shell", path: 'init2.sh'

  config.vm.define "node1" do |app|
      app.vm.hostname = 'node1'
      app.vm.network "private_network", ip: '192.168.2.201'
      app.vm.provider "virtualbox" do |vb|
          vb.name = "node1"
      end
  end

  config.vm.define "node2" do |app|
      app.vm.hostname = 'node2'
      app.vm.network "private_network", ip: '192.168.2.202'
      app.vm.provider "virtualbox" do |vb|
          vb.name = "node2"
      end
  end
end

```

- create init.sh file
```bash
sudo apt-get update

sudo apt-get install -y \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg-agent \
  software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"

sudo apt-get update

sudo apt-get install -y docker-ce=5:19.03.12~3-0~ubuntu-bionic

sudo apt-mark hold docker-ce

sudo swapoff -a

sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF

sudo apt-get update

sudo apt-get install -y kubelet=1.19.1-00 kubeadm=1.19.1-00 kubectl=1.19.1-00

sudo apt-mark hold kubelet kubeadm kubectl
```

- run vagrant commands on terminals 
```bash 
$  vagrant up
$  vagrant ssh node1
# initiate kube on terminal 1
sudo kubeadm init --apiserver-advertise-address=<ip-address> --pod-network-cidr=10.244.0.0/16
# get all nodes
sudo kubectl get nodes

$ sudo kubectl describe node1



# initiate kube on terminal 2 
vagrant ssh node2

sudo kubeadm init --apiserver-advertise-address=<ip-address> --pod-network-cidr=10.244.0.0/16

```
### on terminal 1 
- create a yaml file for pod creation 
> vim mypod.yaml  
```yaml
apiVersion: v1
kind: Pod
metadata: 
  name: mypod

spec: 
  containers:
  - name: mypod-container
    image: nginx
    ports:
    - containerPort: 80
    name: http-port
    protocol: TCP  

```
- create pod using 
> $ kubectl create -f mypod.yml

> $ kubectl describe pod mypod
