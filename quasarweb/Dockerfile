FROM ubuntu:latest

USER root

COPY utils/nodesource_setup.sh /tmp/

RUN /tmp/nodesource_setup.sh
RUN apt update
RUN apt install nodejs

RUN npm install --global npm 
    
RUN npm install --global @quasar/cli
RUN npm install --global @quasar/extras

RUN adduser --gecos "" --disabled-password node
RUN mkdir /home/node/app

WORKDIR /home/node/app

EXPOSE 8083

USER node
