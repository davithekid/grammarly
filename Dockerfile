FROM node:20-alpine

WORKDIR /app

# Copia apenas package.json e package-lock.json da pasta app
COPY package*.json ./

# Instala TODAS as dependências (dev + prod)
RUN npm install

# Copia todo o restante do código da pasta app
COPY . .

# Expõe a porta do Next.js (3000 por padrão)
EXPOSE 3000

# Comando para rodar o Next em modo dev
CMD ["npm", "run", "dev"]