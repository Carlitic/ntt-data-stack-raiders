# Stack Raiders - Gestión de Incidencias Técnicas

Esta aplicación full-stack permite el registro y seguimiento de incidencias técnicas. Cuenta con un frontend desarrollado en Angular 17+ y un backend impulsado por Spring Boot 3 con una base de datos H2 en memoria.

## Cómo levantar el proyecto (Quick path)

> [!IMPORTANT]
> **Ejecución simultánea obligatoria:** Para evaluar la aplicación y generar incidencias, es indispensable levantar **ambos** servicios (Backend y Frontend) a la vez, cada uno en una terminal distinta.

### 1. Backend (Spring Boot)
1. Navega a la carpeta del backend: `cd backend/jpaCustomers`
2. **CRÍTICO:** Este proyecto requiere **Java 17**. Asegúrate de que tu terminal use la versión correcta según tu sistema operativo:
   - **Mac:** `export JAVA_HOME=$(/usr/libexec/java_home -v 17)`
   - **Linux:** `export JAVA_HOME=/usr/lib/jvm/java-17-openjdk` (o la ruta donde esté instalado)
   - **Windows:** `$env:JAVA_HOME="C:\Program Files\Java\jdk-17"` (PowerShell) o `set JAVA_HOME=C:\Program Files\Java\jdk-17` (CMD)
3. Levanta el servidor usando el wrapper de Maven:
   - **Mac/Linux:** `./mvnw spring-boot:run`
   - **Windows:** `.\mvnw.cmd spring-boot:run`
4. El servidor quedará escuchando en `http://localhost:8080`. La base de datos H2 se creará en memoria y cargará 3 incidencias de prueba automáticamente.

### 2. Frontend (Angular)
1. Abre una nueva terminal y navega a la carpeta del frontend: `cd frontend`
2. Instala las dependencias (si no lo has hecho): `npm install`
3. Levanta el servidor de desarrollo: `npm run start` o `ng serve`
4. Abre tu navegador en `http://localhost:4200`.

> [!NOTE]
> **Aviso sobre la creación de incidencias:** Por diseño del prototipo actual y para facilitar la evaluación, el sistema asume que el usuario autenticado es **Carlos Garcia**. Todos los tickets nuevos que generes desde el formulario web se guardarán asociados a su perfil.

## Detalles Técnicos y Decisiones

| Componente | Decisión / Stack |
|-------|----------|
| **Frontend** | Angular 17 (Standalone Components). Emplea Formularios Reactivos (`ReactiveFormsModule`) para la validación de tickets y un servicio (`IncidenciaService`) para comunicarse con la API. |
| **Backend** | Spring Boot 3.0.5, Java 17, Spring Data JPA. |
| **Base de Datos** | H2 Database (En memoria). Las tablas se crean y destruyen en cada ejecución (`ddl-auto=update`). |
| **CORS** | El controlador `IncidenciaController.java` cuenta con `@CrossOrigin(origins = "*")` para prevenir bloqueos por diferencias sutiles entre `127.0.0.1` y `localhost` al corregir el examen. |
| **Modelos (Refactor)**| Se unificaron los modelos en el frontend (`src/app/models/`) para evitar conflictos de tipos entre la vista y el servicio. |
