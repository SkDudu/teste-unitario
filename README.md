# Teste unitario usando Jest

## Objetivo do projeto:
Esse projeto visa iniciar nas ferramentas de debug introduzida no vscode e automatizar os testes com a ferramenta Jest.

## Para executar o projeto é necessario usar:
- Jest (Estrutura para automatizar testes de javascript)

## Desenvolvimento
Para começar o desenvolvimento do projeto é indispensável clonar o projeto do github para seu diretório.
Mas antes, vamos instalar o [git](http://git-scm.com/download/win)

```
cd "diretorio"
git clone https://github.com/SkDudu/teste-unitario
```
## Instalando dependências:
É necessario criar um arquivo package-lock.json e um arquivo package.json:
```
$ npm init
```

Para instalar o Jest, execute o comando a seguir:
```
$ npm install --save-dev jest
```

## Testes
Para rodar testes, vá no aquivo package.json e na parte de "scripts", adicione 
```
"test": "jest"
```

Depois utilize o comando abaixo no terminal:
```
npm test
```

### Contribuições são sempre bem-vindas! Para contribuir lembre-se de adicionar testes com novas classes e com a documentação.
