# create the backend image with node as base image
FROM node

# copy everything from current directory on machine
# to home directory on container
COPY . .

# expose port 3000
EXPOSE 3000

# run a command when container starts
CMD ["node","server.js"]
