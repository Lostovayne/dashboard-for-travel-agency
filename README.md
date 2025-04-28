# Travel Agency Admin Panel

Este es un panel de administración para una agencia de viajes, construido con tecnologías web modernas.

## Tecnologías Utilizadas

*   **Framework:** React Router v7
*   **Lenguaje:** TypeScript
*   **UI Components:** Syncfusion EJ2 React
*   **Estilos:** Tailwind CSS (inferido por el uso de `cn` y clases de utilidad comunes)
*   **Routing:** React Router
*   **Bundler/Build Tool:** Vite (basado en `vite.config.ts`)

## Configuración del Proyecto

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd travel-agency
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener Node.js y npm (o yarn) instalados.
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Variables de Entorno:**
    Puede que necesites configurar variables de entorno (por ejemplo, para la licencia de Syncfusion). Revisa si existe un archivo `.env.example` o similar para las variables requeridas.

## Ejecutar la Aplicación

1.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```

2.  Abre tu navegador y visita `http://localhost:5173` (o el puerto que indique la consola).

## Estructura de Carpetas (Simplificada)

```
travel-agency/
├── app/                # Código fuente principal de la aplicación (rutas, componentes, etc.)
│   ├── components/     # Componentes reutilizables de React
│   ├── routes/         # Definiciones de rutas (convención común en Remix)
│   ├── +types/         # Tipos específicos de la aplicación
│   ├── app.css         # Estilos globales
│   └── root.tsx        # Componente raíz de la aplicación
├── lib/                # Utilidades o librerías auxiliares
├── public/             # Archivos estáticos (imágenes, iconos, etc.)
├── .gitignore          # Archivos ignorados por Git
├── Dockerfile          # Configuración de Docker (si aplica)
├── package.json        # Dependencias y scripts del proyecto
├── README.md           # Este archivo
├── tsconfig.json       # Configuración de TypeScript
└── vite.config.ts      # Configuración de Vite
```
