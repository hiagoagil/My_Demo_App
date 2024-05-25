# Testes Mobile com WebdriverIO e BrowserStack

Este repositório contém testes automatizados de aplicativos móveis usando WebdriverIO e BrowserStack. 

## Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Projeto](#configuração-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Introdução

Este projeto utiliza WebdriverIO, uma popular ferramenta de automação de testes, em conjunto com BrowserStack, uma plataforma de testes em nuvem que permite testar em uma ampla variedade de dispositivos e navegadores. Os testes são escritos em JavaScript/TypeScript e podem ser executados em dispositivos reais através do serviço de nuvem da BrowserStack.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 14 ou superior)
- NPM (gerenciador de pacotes do Node.js)

Além disso, você precisará de uma conta na [BrowserStack](https://www.browserstack.com/) para executar os testes em dispositivos reais.

## Configuração do Projeto

1. Clone este repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências do projeto:
    ```sh
    npm install
    ```

3. Configure suas credenciais do BrowserStack:
    - Crie um arquivo `.env` na raiz do projeto.
    - Adicione as seguintes variáveis de ambiente ao arquivo `.env`:
      ```
      BROWSERSTACK_USERNAME=seu_usuario
      BROWSERSTACK_ACCESS_KEY=sua_chave_de_acesso
      ```

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```sh
npm test
```

Este comando iniciará o WebdriverIO e executará os testes definidos nos arquivos de especificação.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
├── test
│   ├── specs
│   │   └── test.spec.js   # Arquivo de exemplo de especificação de teste
│   ├── pageobjects
│   │   └── addRemove.page.js 
├        └── Catalog.page.js    # Exemplo de Page Object
├── config
│   │   └── wdio.android.bs.conf.js 
├        └── wdio.shared.conf.js               
├── package.json
├── .env                      # Arquivo de variáveis de ambiente
└── README.md                 # Documentação do projeto
```

- **`test/specs`**: Contém os arquivos de especificação dos testes.
- **`test/pageobjects`**: Contém os Page Objects, que encapsulam a interação com as páginas do aplicativo.
- **`wdio.conf.js`**: Arquivo de configuração do WebdriverIO.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Fork este repositório.
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`).
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4. Push para a branch (`git push origin feature/AmazingFeature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se você tiver alguma dúvida ou problema, sinta-se à vontade para entrar em contato. Aproveite seus testes automatizados!
