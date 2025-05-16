# Landing Page

Este é um projeto React com TypeScript, Vite e Tailwind CSS.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build para Produção

```bash
npm run build
```

## Instruções de Deploy

### Para Hostigator ou outros serviços de hospedagem compartilhada:

1. Execute o build do projeto:
   ```bash
   npm run build
   ```

2. Faça upload do conteúdo da pasta `dist` para a raiz do seu domínio na Hostigator

3. Certifique-se de que o arquivo `.htaccess` foi enviado junto com os arquivos

4. Verifique se o mod_rewrite está habilitado no servidor

### Estrutura de Arquivos para Upload

```
public_html/
├── .htaccess
├── index.html
├── assets/
│   ├── js/
│   └── css/
└── ... (outros arquivos gerados pelo build)
```

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones) 