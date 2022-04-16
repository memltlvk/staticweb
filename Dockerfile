FROM node:14

USER root

RUN npm install --global vue@3.2.31 && \
    npm install --global @vue/cli && \
    npm install --global @vue/cli-init
    
RUN npm install --global @quasar/cli
RUN npm install --global @quasar/extras

RUN mkdir /home/node/app

WORKDIR /home/node/app

EXPOSE 8008

USER node
