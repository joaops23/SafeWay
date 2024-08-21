# SafeWay - Rotas
# Responsável

- **POST -** `/responsavel/store` :

```jsx
{
    "id": "1", // Opicional
    "resp_nome": "João",
    "resp_documento": "494.729.238-52",// cpf
    "resp_endereco": {
        "cep": "04918-010",
        "endereco": "rua um",
        "numero": "123",
        "complemento": "casa 5",
        "cidade": "São Paulo",
        "uf": "sp"
    },
    "resp_contato": {
        "celular": 5511949469260,
        "email": "jp200209@gmail.com"
    },
    "resp_pertencentes": {
        "0": {
            "nome": "João Filho 1",
            "documento": "12.332.126-x",
            "dataNascimento": "2010-10-01", // data AAAA-MM-DD
            "escola_id": 1,
            "periodo": "manha"
        },
        "1": {
            "nome": "João Filho 2",
            "documento": "45.245.765-x",
            "dataNascimento": "2014-07-15", // data AAAA-MM-DD
            "escola_id": 2,
            "periodo": "tarde"
        }
    }
}
```

Responses:

- 201 Created: The request has been fulfilled and resulted in a new resource being created.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.

- - -

**GET -** `/responsavel/:id` : - o :id requerido é o id do registro do responsável
    - este método irá retornar os dados de cadastro do responsável solicitado

Responses:

- 200 OK: The request was successful and the server returned the requested data.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.

- - -

**GET -** `/responsavel?limit=:limit&offset=:offset&order:order` : Resgata uma lista de responsáveis separados por paginação
    - QueryString : Parâmetros (Não obrigatórios)
        - :limit - Limite de registros a serem retornados
        - :offset - Ponto de saída da busca de registros (a partir de qual registro)
        - :order - Ordenação através de uma linha específica

- - -
<br />

# Escola

**POST -** `/escola/store` :

```jsx
{
    //"id": "1",
    "esc_nome": "João P tesste",
    "esc_endereco": {
        "cep": "04918-010",
        "endereco": "rua um",
        "numero": "123",
        "complemento": "casa 5",
        "cidade": "São Paulo",
        "uf": "sp"
    },
    "esc_contato": {
        "celular": 5511949469260,
        "email": "jp200209@gmail.com"
    },
    "periodos": [
        "manha",
        "tarde",
        "noite"
    ]
}
```

Responses:

- 201 Created: The request has been fulfilled and resulted in a new resource being created.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.

- - -

**GET -** `/escola/:id` : - o :id requerido é o id do registro do responsável
    - este método irá retornar os dados de cadastro do responsável solicitado

Responses:

- 200 OK: The request was successful and the server returned the requested data.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.

- - -

**GET -** `/escola?limit=:limit&offset=:offset&order:order` : Resgata uma lista de responsáveis separados por paginação
    - QueryString : Parâmetros (Não obrigatórios)
        - :limit - Limite de registros a serem retornados
        - :offset - Ponto de saída da busca de registros (a partir de qual registro)
        - :order - Ordenação através de uma linha específica

- - -
<br />

## Motorista

**POST -** `/motorista/store` :

```jsx
{
    //"id": "1",
    "mot_nome": "João P tesste",
    "mot_documento": "123.456.543.24"
    "mot_endereco": {
        "cep": "04918-010",
        "endereco": "rua um",
        "numero": "123",
        "complemento": "casa 5",
        "cidade": "São Paulo",
        "uf": "sp"
    },
    "mot_contato": {
        "celular": 5511949469260,
        "email": "jp200209@gmail.com"
    },
    "veiculo": {
	    "modelo": "Cargo",
	    "Marca": "Renaut",
	    "ano": "2020"
}
```

Responses:

- 201 Created: The request has been fulfilled and resulted in a new resource being created.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.
- - -
**GET -** `/motorista/:id` : - o :id requerido é o id do registro do responsável
    - este método irá retornar os dados de cadastro do responsável solicitado

Responses:

- 200 OK: The request was successful and the server returned the requested data.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.

- - -
**GET -** `/motorista?limit=:limit&offset=:offset&order:order` : Resgata uma lista de responsáveis separados por paginação
    - QueryString : Parâmetros (Não obrigatórios)
        - :limit - Limite de registros a serem retornados
        - :offset - Ponto de saída da busca de registros (a partir de qual registro)
        - :order - Ordenação através de uma linha específica

- - -

<br />

# Viagem

## /viagem/gerador

- **POST -** `/viagem/gerador/create` :

```js
{
    "Motorista": {
        "mot_id": "35864t5f",
    },

    "Escola": {
        "esc_id": "2riliwww",
        "periodo": "tarde"
    }

    "Alunos": {
        
    }
}
```

Responses:

- 201 Created: The request has been fulfilled and resulted in a new resource being created.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.