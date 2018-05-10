#! /bin/bash

fuser -k 80/tcp
fuser -k 3000/tcp

sudo service mysql start

cd ./server
npm install

npm start &

echo "=============================================="
read -p "PRESS [ANY KEY] TO TERMINATE PROCESSES." PRESSKEY

fuser -k 80/tcp
fuser -k 3000/tcp

kill $(jobs -p)