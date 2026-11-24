# Imagen base de NodeJS
FROM node:22-alpine
# Directorio de trabajo
WORKDIR /app
# Copiar archivos de dependencias
COPY package*.json ./
# Instalar dependencias (omitir las de desarrollo)
RUN npm ci --omit=dev
# Copiar el resto del proyecto
COPY .
# Documentar el puerto de la aplicación
EXPOSE 3001
# Iniciar el backend
CMD ["npm", "start"]