# Base on offical Node.js Alpine image
# FROM node:14.17.3 as builder
# # Set working directory
# WORKDIR /usr/app
# # install node-prune (https://github.com/tj/node-prune)
# RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
# # Copy package.json and package-lock.json before other files
# # Utilise Docker cache to save re-installing dependencies if unchanged
# COPY package.json ./
# COPY yarn.lock ./
# # Clean cache
# # RUN yarn cache clean
# # Install dependencies
# RUN yarn install --frozen-lockfile
# # Copy all files
# COPY ./ ./
# # Build app
# RUN yarn build
# # remove development dependencies
# # RUN yarn install --production
# # run node prune. Reduce node_modules size
# RUN /usr/local/bin/node-prune
####################################################### 
FROM node:14.17.3-alpine
ENV TZ Asia/Seoul
RUN apk --no-cache add tzdata
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime
WORKDIR /usr/app
COPY .next ./.next
COPY node_modules ./node_modules
COPY public ./public
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]