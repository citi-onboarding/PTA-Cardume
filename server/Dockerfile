FROM node:20.9.0-slim

RUN apt-get update -y && apt-get install -y openssl

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json yarn.loc[k] ./

RUN yarn install

COPY . .

RUN yarn generate

COPY --chown=node:node . .

RUN chown -R node:node /home/node/app/node_modules/.prisma

USER node

EXPOSE 3001

CMD [ "yarn", "dev" ]

# para a documentação seguida para construção desse arquivo, vá para o step 3 do link:
# https://www.digitalocean.com/community/tutorials/como-construir-uma-aplicacao-node-js-com-o-docker-pt