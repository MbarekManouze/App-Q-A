#!/bin/bash

npm install -g prisma

npm install

npx prisma migrate dev

sleep 2

npm run start
