FROM node:24-alpine3.20

# Specifying the working directory
WORKDIR /app

# Copying the files
COPY . /app/

# Install
RUN npm i -g pnpm
RUN pnpm i

CMD [ "node","index.js" ]