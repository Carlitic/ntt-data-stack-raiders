#!/bin/bash
echo "🚀 Iniciando Stack Raiders..."

# Capturar Ctrl+C para cerrar ambos procesos de forma limpia
trap 'echo -e "\n🛑 Cerrando servicios..."; kill $BACKEND_PID 2>/dev/null; exit' INT TERM EXIT

echo "⚙️  Levantando Backend (Spring Boot)..."
cd backend/jpaCustomers
# Forzar Java 17 en Mac si es posible
if [ -x /usr/libexec/java_home ]; then
    export JAVA_HOME=$(/usr/libexec/java_home -v 17)
fi
./mvnw spring-boot:run &
BACKEND_PID=$!
cd ../..

# Darle un par de segundos al backend para que respire
sleep 3

echo "🌐 Levantando Frontend (Angular)..."
cd frontend
# Asegurarse de que las dependencias están instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias de Angular..."
    npm install
fi
npm run start
