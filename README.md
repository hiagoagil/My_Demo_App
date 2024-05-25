# Automação e2e - My Demmo App (Sauce Labs)

Realizada a automação de teste mobile - My Demo App (Sauce Labs) utilizando testes end-to-end (E2E) que simulam a experiência do cliente desde a entrada na aplicação até a saída final

## Introdução

O teste consiste em quatro casos de testes, escritos em JavaScript, buscando se aproximar ao máximo da experiência real de um cliente:
*   Realizando login com credenciais válidas
*   Selecionando produto: item, cor e quantidade e adicionando no carrinho
*   Alterando as informações do produto adicionado ao carrinho: quantidade
*    Realizando o checkout do item adicionado ao carrinho

Para construção e execução dos testes foram utilizados: WebDriverIO, Appiun, Android Virtual Studio e Appiun Inspector.


## Estrutura do projeto

- **webdriverio-appium-v8**

        Diretório de armazenamento da automação 
    - **App**
        
            Armazenamento da APK
    - **Test**
        - **pageobjects**

                Arquivos JS no qual foi realizado o método PageObjects
        - **specs**

                Arquivos JS no qual foi realizado os scripts de teste
## Execução da aplicação

Pré-quisitos:
*   Ter o Appium e WebDriverIO instalados e configurados.

*  Ter o aplicativo My Demo App instalado em um emulador

Clone o repositório:
 ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
```
Instale as dependências:
 ```sh
    npm install
```
Execute os testes:
 ```sh
    npm test
```
## Contato
- **Email:** [hiagoqagil@gmail.com](mailto:hiagoqagil@gmail.com)
- **LinkedIn:** [Hiago Gil](https://www.linkedin.com/in/hiago-gil-b94169166)
- **GitHub:** [Hiago Gil](https://github.com/hiagoagil)
