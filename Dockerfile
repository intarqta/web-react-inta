# Pasos para el trabajo con docker
# Paso 1: Instalar la imagen de node 
FROM node:alpine  

# paso 2: Crear una carpeta en el contenedor
WORKDIR /app

# Paso 3: copiar todas las dependencias que necesita el contenedor desde los archivos package.json y package-lock.json. Esto nos instalará los modules necesarios sin que esten afectados por las particularidades de nuestro ordenador. ¡Ojo!, no hacer copy al contenedor de todos los archivos juntos con los modules, si no primero los .json y luego de instalar las depaendencias trasladar el resto
COPY package*.json .

# Paso 4: Instalar solo las depandencias necesarias para el proyecto. Esto nos permite que la imagen sea más livianay evitar instalar dependencias que incrementan el peso de la imagen
RUN npm install

# Paso 5: pasar todos los archivos al contenedor, exepto modules. Es importante tener presente que en este punto se debe crear un archivo dockerignore con el fin de ignorar la copia de la carpepa modules ya que reemplazaría al modules del contenedor con riesgos de crearnos fallas en el futuro. 
COPY . .

# Paso 6: crear una versión de producción 
RUN npm run build

# Indicar atraves de que puerto se conectará el contenedor 
EXPOSE 3000

# Comando para iniciar la aplicación de react. Es importante considerar que si estoy trabajando con express, vite, nextjs utilizare los comandos pertinantes
CMD [ "npm", "start" ]