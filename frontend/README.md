# Agenda de Contatos

Sistema de gerenciamento de contatos com armazenamento seguro.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2
- Zustand 5.0.8
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos globais
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio
├── pages/                # Páginas da aplicação
│   └── layouts/          # Layouts compartilhados
└── main.tsx              # Ponto de entrada
```

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## API

O frontend se comunica com a API REST através de dois clientes:

- **publicClient**: Para endpoints públicos (`/api/v1/external`)
- **authenticatedClient**: Para endpoints autenticados (`/api/v1/internal`)

Configure a URL da API no arquivo `.env`:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```