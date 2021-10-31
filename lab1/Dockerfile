FROM node

ENV PORT=3000

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE ${PORT}

VOLUME [ "/usr/src/app/serverdata" ]

CMD ["node", "./app.js"]