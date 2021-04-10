Based on https://github.com/netlify/netlify-faunadb-example

To run locally (Powershell terminal)

Set the Fauna DB server secret as an environment variable
```
 $env:FAUNADB_SERVER_SECRET='XXX'
```

Bootstrap the local Fauna DB proxy
```
npm run bootstrap
```

Start the app
```
npm start
```