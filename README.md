This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Script para criação

Rode no terminal:

```
sudo npx create-react-app my-app-name

cd my-app-name

npm start

```

## Para testar e executar o projeto

No diretório execute

### `npm start`

Executa o aplicativo no modo de desenvolvimento. <br />
Vai abrir em [http://localhost:3000](http://localhost:3000) no seu navegador.


## Para conferir a estrutura execute

### `tree -I node_modules`

Vai retornar o seguinte resultado!
```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    ├── setupProxy.js
    └── setupTests.js
```

## Para criar a estrutura do projeto

Criação da pasta para armazenar `servico`
Criação do servico principal `CarServico`
Instalação do `axios` para consumir API_REST

```
mkdir src/service 
touch servico >> src/service/CarService.js
npm i axios --save

```

## Para testar o serviço.

Obs: o resultado esperado é a palavra teste no console

Adicione as seguintes linhas de código a classe `CarService.js`

```
export class CarService {

    state = {
    }
    getTeste = (async () => { 
        console.log('teste')        
    })
}
```

Adicione as seguintes linhas de código a classe `App.js`

```
import React, { Component } from 'react';
import { CarService } from './service/CarService';

export default class App extends Component {
  
  constructor() {
    super();
    this.carservice = new CarService();
  }

  componentDidMount() {
    this.carservice.getTeste()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
      </div>
    )
  }
}
```


