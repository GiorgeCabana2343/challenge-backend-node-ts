
# CHALLENGE BACKEND NODE TYPESCRIPT

Este proyecto es un backend hecho con **NestJS**, **TypeScript**, **GraphQL**, **MongoDB** y está estructurado con el patrón **Arquitectura Hexagonal**.


## Run Locally


Clone the git repository

```bash
  git clone git@github.com:GiorgeCabana2343/challenge-backend-node-ts.git
```

Go to the project directory

```bash
  cd challenge-backend-node-ts
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
<br>

POR DEFECTO SE QUEDARA LEVANTADO EN EL PUERTO CONFIGURADO (http://localhost:3000/graphql)

<br>

##  OPERATION CON GRAPHQL

#### CREATE AN ACCOUNT

  ```
    mutation {
       createAccounts(body: { name: "EJEMPLO" email: "EJEMPLO@example.com" }) {
         id
         name
         email
      }
    }

  ```

#### CONSULTA ACCOUNT POR ID 

  ```
    query {
      accountsById(id: "686bf441dfc16b01b33a643e") {
       id
       name
       email
     }
   } 

  ```

#### LIST ACCOUNT POR NAME 

  ```
    query {
      accountsByName(name: "EJEMPLO") {
       id
       name
       email
     }
   }

  ```

#### CREATE AN PRODUCTS 

  ```
   mutation {
      createProducts(body: {
        name: "EJEMPLO"
        sku: "EP-1"
        stock: 10
        accountId: "686bf441dfc16b01b33a643e"
     }) {
        id
        name
        sku
        stock
        accountId
     }
   }

  ```

#### CONSULTA PRODUCTS POR ID  

  ```
    query {
      productsById(id: "686bf469dfc16b01b33a6442") {
        id
        name
        stock
      }
    }

  ```


#### LIST PRODUCTS BY ACCOUNT ID

  ```
    query {
      productsByAccount(accountId: "686bf441dfc16b01b33a643e") {
        id
        name
        sku
        stock
        accountId
      }
    }

  ```
  
#### PURCHASE SIMULATION 

  ```
     mutation {
        purchaseProduct(
           accountId: "686a93ab88637251d3cfe206",
           productId: "686bf473dfc16b01b33a6444",
           quantity: 1
        )
      }
    
  ```