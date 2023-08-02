FROM node:18
ENV NODE_ENV development
# RUN npm install @reduxjs/toolkit
# RUN npm install redux
RUN mkdir /src
WORKDIR /src
