
1. sudo docker pull jenkinsci/blueocean


2. sudo docker run \
-u root \
--rm \
-d \
-p 8000:8000 \
-p 50000:50000 \
-v jenkins-data:/var/jenkins_home \
-v /var/run/docker.sock:/var/run/docker.sock \
jenkinsci/blueocean



3. sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'


4. sudo apt-get update

5. sudo apt-get install jenkins



/var/lib/jenkins/secrets

jenkins password (for my pc)

c94e2d80c83f47e3ad619839f11a9138
