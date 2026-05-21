@echo off
echo 🚀 Iniciando Stack Raiders...

echo ⚙️  Levantando Backend (Spring Boot)...
cd backend\jpaCustomers
start "Backend - Spring Boot" cmd /k ".\mvnw.cmd spring-boot:run"
cd ..\..

timeout /t 3 /nobreak > nul

echo 🌐 Levantando Frontend (Angular)...
cd frontend
if not exist "node_modules\" (
    echo 📦 Instalando dependencias de Angular...
    call npm install
)
start "Frontend - Angular" cmd /k "npm run start"
cd ..

echo.
echo ✅ Servicios iniciados. 
echo ⚠️  Cierra las dos ventanas nuevas de terminal para detener la aplicacion.
pause
