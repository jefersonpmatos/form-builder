# Form Builder

Uma aplicação web para criação, publicação e gerenciamento de formulários personalizados.

O **Form Builder** permite criar formulários visualmente, compartilhar formulários através de links públicos e acompanhar as respostas enviadas pelos usuários.

## 🚀 Demo

**[Acessar aplicação](https://form-builder-mocha.vercel.app/)**

## ✨ Funcionalidades

- 🔐 Autenticação e gerenciamento de usuários
- 📝 Criação e edição de formulários
- 🎨 Editor visual para construção dos formulários
- 🧩 Diferentes tipos de campos
- ↕️ Organização dos elementos através de drag and drop
- 👁️ Visualização e preenchimento dos formulários publicados
- 🔗 Geração de link público para compartilhamento
- 📊 Acompanhamento das respostas recebidas
- 📈 Contagem de visitas e submissões
- ✅ Validação dos dados dos formulários
- 💾 Persistência dos formulários e respostas em banco de dados

## 🧩 Tipos de campos

O builder possui diferentes elementos para construção dos formulários:

- Texto
- Número
- Área de texto
- Checkbox
- Select
- Data
- Título
- Subtítulo
- Parágrafo
- Separador
- Espaçamento

## 🛠️ Tecnologias

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [dnd-kit](https://dndkit.com/)

### Backend & Database

- Next.js
- Prisma ORM
- PostgreSQL

### Autenticação

- Clerk

## 🏗️ Arquitetura

O projeto utiliza a estrutura **App Router** do Next.js, separando as principais responsabilidades da aplicação entre páginas, componentes, hooks, schemas e camada de persistência.

```text
form-builder/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   │   ├── builder/
│   │   └── forms/
│   ├── submit/
│   └── context/
│
├── components/
│   ├── fields/
│   ├── hooks/
│   ├── providers/
│   ├── ui/
│   └── ...
│
├── lib/
├── prisma/
├── public/
├── schemas/
├── middleware.ts
└── package.json
```

A aplicação possui áreas distintas para autenticação, dashboard, construção dos formulários, gerenciamento das respostas e preenchimento público dos formulários.

## 🔄 Fluxo da aplicação

O fluxo principal pode ser resumido em:

```
Autenticação
     ↓
Dashboard
     ↓
Criar formulário
     ↓
Builder visual
     ↓
Publicar formulário
     ↓
Gerar link público
     ↓
Compartilhar
     ↓
Receber respostas
     ↓
Acompanhar submissões
```

Cada formulário possui uma URL pública própria, permitindo que usuários externos preencham e enviem suas respostas.

## 🗄️ Persistência

Os dados são armazenados em PostgreSQL utilizando Prisma.

O modelo principal `Form` mantém informações como:

- Nome e descrição
- Usuário responsável
- Conteúdo do formulário
- Status de publicação
- URL pública
- Quantidade de visitas
- Quantidade de submissões
- Data de criação

As respostas são armazenadas separadamente e relacionadas ao formulário correspondente através do modelo `FormSubmissions`.

## 💻 Executando localmente

### Pré-requisitos

- Node.js
- PostgreSQL
- npm ou Yarn

### 1. Clone o projeto

```bash
git clone https://github.com/jefersonpmatos/form-builder.git

cd form-builder
```

### 2. Instale as dependências

```bash
npm install
```

ou:

```bash
yarn
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_publishable_key"
CLERK_SECRET_KEY="your_secret_key"
```

### 4. Configure o banco de dados

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

## 📦 Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia a aplicação em produção |
| `npm run lint` | Executa o ESLint |

## 🎯 Objetivo do projeto

O projeto foi desenvolvido como um exercício prático de construção de uma aplicação completa utilizando o ecossistema React/Next.js.

Além da interface de criação de formulários, o projeto envolve autenticação, persistência de dados, relacionamentos no banco, validação, rotas protegidas, geração de URLs públicas e gerenciamento de submissões.

## 🚧 Status

**Beta**

O projeto ainda está em evolução e pode receber novas funcionalidades e melhorias.

## 🔮 Possíveis melhorias

- [ ] Mais tipos de campos
- [ ] Melhorias na experiência de edição
- [ ] Personalização visual dos formulários
- [ ] Exportação das respostas
- [ ] Mais opções de visualização das submissões
- [ ] Melhorias de acessibilidade
- [ ] Testes automatizados
- [ ] Melhorias de performance

## 👨‍💻 Autor

Desenvolvido por **Jeferson P. Matos**.

GitHub: [@jefersonpmatos](https://github.com/jefersonpmatos)
Projeto: [form-builder](https://github.com/jefersonpmatos/form-builder)

---

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório.
