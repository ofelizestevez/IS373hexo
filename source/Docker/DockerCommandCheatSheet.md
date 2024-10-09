Docker Command Cheat Sheet:
* $ docker pull <image_name>
        * Allows you to pull an image from Docker Hub, which is an official registry of images utilized by Docker

* $ docker ps {options}
        * Default: shows a list of all currently running containers
    * -a
        * Shows all containers, regardless of status
    * -l
        * Shows the latest container
    * -q
        * Shows the ID of containers

* $ docker stop <container_id>
        * Allows for the stopping of a container should an error or crash occur

* $ docker start <container_id>
        * Allows for the starting up of a stopped container

* $ docker rm {options} <container_id OR container_name>
        * Default: used to delete a container
    * -f
        * removes a container with force
    * -v
        * removes the volumes
    * -l
        * removes the specified link

* $ docker rmi <image_id OR image_name>
        * Used to delete an image

* $ docker images
        * Creates a list of all pulled images that are present

* $ docker exec {options}
        * Allows for the running of commands within a running container
    * -d
        * Run commands in the background
    * -i
        * will keep STDIN open
    * -e
        * sets environmental variables

* $ docker run -d -p <port_on_host> <port_on_container> container_name
        * Allows the user to run a container from a separate host

* docker login
        * Used to authenticate your access to Docker Hub

* docker push <image_id OR image_name>
        * Push a customized image into the remote registry, Docker Hub

* docker build -t image_name:tag
        * Builds an image utilizing a Dockerfile

* docker start/stop container_id OR container_name
        * Allows the user to start and stop containers for maintenance

* docker stop container1 container2 container3
        * Causes all the named containers to stop

* docker restart container_id OR container_name
        * Allows the user to restart a container if an error occurs

* docker inspect container_id OR container_name
        * Used to run into errors in realtime for the purpose of debugging

* docker commit container_id OR container_name new_image_name:tag
        * Commit updates to the specified container
