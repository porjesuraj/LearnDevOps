# create the backend image with node as base image
FROM node

# copy everything from current directory on machine
# to home directory on container
COPY . .

# expose port 4000
EXPOSE 4000

# run a command when container starts
CMD ["node", "server.js"]
