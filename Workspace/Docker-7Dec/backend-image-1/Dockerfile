# create the backend image with node as base image
FROM node

# COPY everything from current directory on machine to home directory of container
COPY . .

# expose port 4000
EXPOSE 4000

# run a command when container starts
CMD ["node","server.js"]