# HairDay - Sistema de Agendamento de Corte de Cabelo

O **HairDay** é uma aplicação web completa para gerenciar agendamentos de cortes de cabelo. O sistema permite que os usuários selecionem uma data, escolham um horário disponível e registrem o nome do cliente, organizando os atendimentos por períodos e persistindo os dados em uma API simulada.

## Funcionalidades

- **Agendamento Dinâmico:** Seleção de data e horários disponíveis com validação em tempo real.
- **Divisão por Períodos:** Visualização organizada dos atendimentos em Manhã (09h-12h), Tarde (13h-18h) e Noite (19h-21h).
- **API Fake (JSON Server):** Consumo de API para realizar operações de CRUD (Create, Read, Delete) nos agendamentos.
- **Persistência em Disco:** Os dados são salvos no arquivo `server.json`, simulando um banco de dados real.
- **Cancelamento de Agendamentos:** Opção para remover atendimentos diretamente da lista lateral com atualização instantânea.
- **Filtro por Data:** Exibição automática dos agendamentos referentes ao dia selecionado no calendário.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização moderna com Grid e Flexbox.
- **JavaScript (ES6+):** Manipulação de DOM e chamadas assíncronas (`async/await`, `fetch`).
- **Node.js & NPM:** Gerenciamento de pacotes.
- **JSON Server:** Ferramenta para criar uma API REST fake para testes.

## Como executar o projeto

### Pré-requisitos

- Ter o [Node.js](https://nodejs.org/) instalado.

### Passo a passo

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/HairDay.git
   ```

2. **Navegue até a pasta do projeto e instale as dependências:**

   ```bash
   cd HairDay
   npm install
   ```

3. **Inicie a API (Backend):**

   ```bash
   npm run server
   ```

   _A API estará rodando em `http://localhost:3333`_

4. **Abra o Frontend:**
   Abra o arquivo `index.html` em seu navegador ou use uma extensão como "Live Server" no VS Code.

## Layout

O layout utiliza um tema escuro (dark mode) com detalhes em dourado, focado na experiência do usuário e na organização visual dos horários da barbearia.

---

Desenvolvido como parte de um estudo prático de integração entre Frontend e APIs.
