# Blinkist面试


## 1、说明
面试官你好，最近在加班实在是没太多时间写这个，我刚刚简单仿写了几个感觉比较难写的section，通用的已经抽成了组件。大概用时2个半钟，从0开始使用vite创建的项目
最后还是为自己没有完成抱歉一下


## 2、部署

> 9898端口，如需修改请修改nginx.conf与dockefile
```shell
docker build -t blinkist .

docker run -d -p 9898:9898 blinkist
```


或

```shell
yarn dev
```