# redisTest
redis test

## npm module
1. npm i ioredis(原生的, 在當前環境啟redis server)
2. npm i @liaoliaots/nestjs-redis ioredis (redis server在別台)

## commands
1. set key value EX 1 (expire after 1s)
2. set key value PX 1000 (expire after 1000ms)
2. setnx key value (SET if Not eXists)

## notes
1. if use WSL, host should be found by cmd "ip addr|grep eth0", and set the value in .env file