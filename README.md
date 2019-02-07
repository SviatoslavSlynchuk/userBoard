#User Board
This is a simple demo project to show small interactions with 3-rd party API.
It allows you to get the list of personnel and check their on-boarding progress.

To run the project locally you need to check out repository onto your local machine.
Then, in root folder just run:
```
npm run start
```
It will run webpack-dev-server in watch mode.

This app has no connection to the LocalStorage, so there is no ability to sync your state between few browser tabs - fixed(07.02.2019)

Also, there is no unit or integrtion tests implemented - fixed(04.02.2019).

To run this app in Docker just run 
```
docker build . -t react-docker
```
and after completion run
```
docker run -p 8000:80 react-docker
```
