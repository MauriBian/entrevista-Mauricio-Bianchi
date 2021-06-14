# entrevista-Mauricio-Bianchi

## Configuración

Copiar y pegar el archivo **.env.sample**, cambiarle el nombre a **.env** y configurar las variables de entorno . Por ejemplo

```
API_PORT=8080
DB_URI=mongodb://user:password@localhost:27017/credit-card?authSource=admin
```

## Ejecutar la aplicación

En el root de la aplicación ejecutar el siguiente comando

```
$ node app.js
```

## Ejemplos de uso de los endponts

### POST URL:[PORT]/creditcard

Body 

```
{
  "userId": "432542352",
  "cardToken": "dk3122dcvdd-44pp43zmn",
  "brandType": "master card",
  "maskedNumber": "******4111"
}
```

Response 

```
Credit card was added correctly
```

 ### GET URL:[PORT]/creditcard?userId=[userId]

Response

```
[
    {
        "_id": "60c741d4dfc60c2e50a1491f",
        "userId": "432542352",
        "cardToken": "dk3122dcvdd-44pp43zmn",
        "brandType": "visa",
        "maskedNumber": "******4111",
        "primary": true,
        "__v": 0
    },
    {
        "_id": "60c741eadfc60c2e50a14920",
        "userId": "432542352",
        "cardToken": "dk3122dcvdd-44pp43zmn",
        "brandType": "master card",
        "maskedNumber": "******4111",
        "primary": false,
        "__v": 0
    }
]
```

