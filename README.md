# libre-app
Aplicación web full-stack inspirada en Mercado Libre, desarrollada como prueba técnica. Incluye sistema de autenticación, búsqueda de productos, paginación, ordenamiento y vista de detalles.

## Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Ejecución](#-ejecución)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Decisiones Técnicas](#-decisiones-técnicas-destacadas)
- [API Endpoints](#-api-endpoints)

## Características

### Frontend
- Sistema de autenticación (Login/Signup)
- Búsqueda de productos con filtros
- Paginación de resultados
- Ordenamiento por relevancia y precio
- Diseño responsive con Tailwind CSS y DaisyUI
- Vista detallada de productos con galería de imágenes
- Calificaciones y reseñas
- Información de envío y garantía
- Notificaciones con React Hot Toast

### Backend
- Autenticación con JWT y cookies HTTP-only
- Base de datos MongoDB con Mongoose
- Encriptación de contraseñas con bcryptjs
- Validación de datos del lado del servidor
- API RESTful con Express
- Sistema de búsqueda y filtrado de productos

## Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de UI
- **React Router DOM** - Enrutamiento
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **DaisyUI** - Componentes para Tailwind
- **React Hot Toast** - Notificaciones

### Backend
- **Node.js** - Entorno de ejecución
- **Express 5** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación basada en tokens
- **bcryptjs** - Hashing de contraseñas
- **Cookie Parser** - Manejo de cookies

### DevOps
- **Concurrently** - Ejecutar múltiples comandos
- **Nodemon** - Auto-reinicio del servidor
- **ESLint** - Linter para JavaScript

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (normalmente viene con Node.js)
- **MongoDB** (local o cuenta en MongoDB Atlas)
- **Git** (para clonar el repositorio)

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/jdocdev/libre-app.git
cd libre-app
```

### 2. Instalar dependencias del backend

```bash
npm install
```

### 3. Instalar dependencias del frontend

```bash
cd frontend
npm install
cd ..
```

## Configuración

### 1. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Puerto del servidor backend
PORT=5000

# Cadena de conexión a MongoDB
# Para MongoDB local:
MONGO_DB_URI=mongodb://localhost:27017/libre-app

# Para MongoDB Atlas:
# MONGO_DB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/libre-app

# Secreto para firmar los tokens JWT (elige una cadena aleatoria y segura)
JWT_SECRET=tu_secreto_super_seguro_aqui_12345

# Entorno de ejecución
NODE_ENV=development
```

### 2. Configurar MongoDB

**Opción A: MongoDB Local**
- Asegúrate de tener MongoDB instalado y ejecutándose
- El servidor se conectará automáticamente a `mongodb://localhost:27017/libre-app`

**Opción B: MongoDB Atlas (Cloud)**
1. Crea una cuenta gratuita en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un nuevo cluster
3. Configura el acceso a la red (whitelist tu IP)
4. Crea un usuario de base de datos
5. Obtén tu connection string y reemplázalo en el archivo `.env`

## Ejecución

### Modo desarrollo (Frontend + Backend simultáneamente)

```bash
npm run dev
```

Este comando ejecuta:
- Backend en `http://localhost:5000`
- Frontend en `http://localhost:3000`

### Ejecutar solo el backend

```bash
npm run server
```

### Ejecutar solo el frontend

```bash
cd frontend
npm run dev
```

### Build de producción del frontend

```bash
cd frontend
npm run build
```

Los archivos optimizados se generarán en `frontend/dist/`

## 📁 Estructura del Proyecto

```
libre-app/
├── backend/
│   ├── controllers/       # Lógica de negocio
│   │   ├── auth.controllers.js
│   │   └── products.controllers.js
│   ├── db/               # Configuración de base de datos
│   │   └── connectToMongoDB.js
│   ├── models/           # Modelos de Mongoose
│   │   └── user.model.js
│   ├── routes/           # Definición de rutas
│   │   ├── auth.routes.js
│   │   └── products.routes.js
│   ├── utils/            # Utilidades y helpers
│   │   ├── generateToken.js
│   │   └── validators.js
│   ├── mocks/            # Datos de prueba
│   │   └── products.mock.js
│   └── server.js         # Punto de entrada del backend
├── frontend/
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   │   ├── headers/
│   │   │   ├── productscard/
│   │   │   ├── productdetail/
│   │   │   └── ...
│   │   ├── pages/        # Páginas principales
│   │   │   ├── products/
│   │   │   ├── productdetail/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── hooks/        # Custom hooks
│   │   ├── utils/        # Funciones auxiliares
│   │   ├── App.jsx       # Componente principal
│   │   └── main.jsx      # Punto de entrada
│   ├── public/           # Archivos estáticos
│   ├── index.html
│   ├── vite.config.js    # Configuración de Vite
│   └── tailwind.config.js # Configuración de Tailwind
├── .env                  # Variables de entorno (no incluido en git)
└── package.json          # Dependencias y scripts
```

## Decisiones Técnicas Destacadas

### Arquitectura

#### 1. **Separación Frontend/Backend**
- **Decisión:** Estructura de monorepo con backend y frontend separados
- **Razón:** Permite desarrollo independiente, escalabilidad y despliegue separado de cada parte
- **Beneficio:** El backend puede servir a múltiples clientes (web, móvil) y el frontend puede consumir otras APIs

#### 2. **Proxy de Vite para desarrollo**
```javascript
// vite.config.js
proxy: {
    "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
    },
}
```
- **Decisión:** Configuración de proxy en Vite para redirigir peticiones `/api/*` al backend
- **Razón:** Evita problemas de CORS durante el desarrollo
- **Beneficio:** Experiencia de desarrollo fluida sin configuraciones adicionales

### Seguridad

#### 3. **JWT con HTTP-only Cookies**
```javascript
res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "Strict",
    secure: isSecure,
})
```
- **Decisión:** Almacenar tokens JWT en cookies HTTP-only en lugar de localStorage
- **Razón:** Protección contra ataques XSS (Cross-Site Scripting)
- **Beneficio:** El token no es accesible desde JavaScript del cliente

#### 4. **Validación de contraseñas robusta**
```javascript
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
```
- **Decisión:** Regex que requiere mínimo 8 caracteres, mayúsculas, minúsculas, números y símbolos
- **Razón:** Aumentar la seguridad de las cuentas de usuario
- **Beneficio:** Reducción de riesgos de fuerza bruta

#### 5. **Hashing de contraseñas con bcryptjs**
```javascript
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(contrasena, salt);
```
- **Decisión:** Uso de bcrypt con factor de trabajo de 10
- **Razón:** Algoritmo diseñado específicamente para contraseñas, resistente a ataques
- **Beneficio:** Las contraseñas nunca se almacenan en texto plano

### Estado y Datos

#### 6. **Persistencia de autenticación en localStorage**
```javascript
const [authUser, setAuthUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
);
```
- **Decisión:** Guardar datos básicos del usuario (no sensibles) en localStorage
- **Razón:** Mantener sesión activa entre recargas de página
- **Beneficio:** Mejor UX sin pedir login constantemente

#### 7. **Custom Hooks para lógica de negocio**
- Hooks: `useLogin`, `useLogout`, `useSignup`, `useProducts`, `useProductDetail`, `useSearch`
- **Decisión:** Extraer lógica de estado y efectos a hooks personalizados
- **Razón:** Separación de responsabilidades y reutilización de código
- **Beneficio:** Componentes más limpios y lógica testeable

### UI/UX

#### 8. **Tailwind CSS + DaisyUI**
- **Decisión:** Usar Tailwind con el plugin DaisyUI para componentes
- **Razón:** Desarrollo rápido con utility classes + componentes prediseñados
- **Beneficio:** Consistencia visual, menor CSS personalizado, tema responsive

#### 9. **Colores personalizados de MeLi**
```javascript
colors: {
    azulmeli: "#3483FA",
    amarillomeli: "#FFE600",
    // ...
}
```
- **Decisión:** Extender configuración de Tailwind con paleta de MeLi
- **Razón:** Mantener identidad visual de la marca
- **Beneficio:** Uso consistente de colores con `bg-azulmeli`, `text-azulmeli`, etc.

#### 10. **Precarga de imágenes de avatar**
```javascript
useEffect(() => {
    if (authUser?.imagenUsuario) {
        const img = new Image();
        img.src = authUser.imagenUsuario;
    }
}, [authUser]);
```
- **Decisión:** Precargar imagen del avatar del usuario
- **Razón:** Evitar parpadeo o delay al mostrar el avatar
- **Beneficio:** Experiencia visual más fluida

### Base de Datos

#### 11. **Mongoose como ODM**
- **Decisión:** Usar Mongoose en lugar de driver nativo de MongoDB
- **Razón:** Schemas, validaciones, middleware y una API más declarativa
- **Beneficio:** Código más mantenible y validación de datos automática

#### 12. **Timestamps automáticos en modelos**
```javascript
const userSchema = new mongoose.Schema({
    // campos...
}, { timestamps: true });
```
- **Decisión:** Activar timestamps automáticos en schemas
- **Razón:** Tracking automático de creación y actualización
- **Beneficio:** Auditoría sin código adicional

### API y Datos de Prueba

#### 13. **Uso de mocks para productos**
- **Decisión:** Archivo `products.mock.js` con datos simulados
- **Razón:** Desarrollo sin dependencia de API externa de MeLi
- **Beneficio:** Desarrollo más rápido y sin límites de rate-limiting

#### 14. **Paginación del lado del servidor**
```javascript
const { q, offset = 0, limit = 2 } = req.query;
```
- **Decisión:** Implementar paginación en el backend con offset/limit
- **Razón:** Optimizar transferencia de datos, especialmente con muchos resultados
- **Beneficio:** Mejor rendimiento y menor uso de ancho de banda

#### 15. **Normalización de datos en frontend**
- Archivos: `normalizeProduct.js`, `normaliceProductDetail.js`
- **Decisión:** Transformar datos de la API a formato consistente
- **Razón:** Desacoplar estructura de API de la lógica de UI
- **Beneficio:** Fácil mantenimiento si la API cambia

### Desarrollo y Tooling

#### 16. **Concurrently para desarrollo full-stack**
```json
"dev": "concurrently \"npm run server\" \"npm --prefix frontend run dev\""
```
- **Decisión:** Un solo comando para levantar backend y frontend
- **Razón:** Simplificar flujo de trabajo de desarrollo
- **Beneficio:** Setup más rápido para nuevos desarrolladores

#### 17. **ES Modules (type: "module")**
```json
"type": "module"
```
- **Decisión:** Usar sintaxis moderna de imports/exports
- **Razón:** Estándar de JavaScript actual, mejor tree-shaking
- **Beneficio:** Código más limpio y mejor optimización de bundle

#### 18. **Vite como build tool**
- **Decisión:** Vite en lugar de Create React App
- **Razón:** HMR ultrarrápido, build optimizado, configuración más simple
- **Beneficio:** Experiencia de desarrollo significativamente más rápida

### Routing y Navegación

#### 19. **React Router con redirecciones**
```javascript
<Route path="/" element={<Navigate to="/products" replace />} />
```
- **Decisión:** Redirigir root a `/products`
- **Razón:** Definir página de inicio predeterminada
- **Beneficio:** Mejor SEO y experiencia de usuario

#### 20. **Manejo de 404**
```javascript
<Route path="*" element={<NotFound />} />
```
- **Decisión:** Ruta catch-all para URLs no encontradas
- **Razón:** Proporcionar feedback cuando el usuario accede a rutas inválidas
- **Beneficio:** Mejor UX con página de error personalizada

## API Endpoints

### Autenticación

#### POST `/api/auth/signup`
Registrar nuevo usuario

**Body:**
```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "usuario": "juanperez",
  "contrasena": "Password123!",
  "confirmacionContrasena": "Password123!"
}
```

#### POST `/api/auth/login`
Iniciar sesión

**Body:**
```json
{
  "usuario": "juanperez",
  "contrasena": "Password123!"
}
```

#### POST `/api/auth/logout`
Cerrar sesión (requiere autenticación)

### Productos

#### GET `/api/products/search?q={query}&offset={offset}&limit={limit}&sort={sort}`
Buscar productos

**Query params:**
- `q` (requerido): Término de búsqueda
- `offset` (opcional): Índice de inicio (default: 0)
- `limit` (opcional): Cantidad de resultados (default: 2)
- `sort` (opcional): Ordenamiento - `relevance`, `price_asc`, `price_desc` (default: relevance)

**Ejemplo:**
```
GET /api/products/search?q=laptop&offset=0&limit=10&sort=price_asc
```

#### GET `/api/products/:id`
Obtener detalles de un producto

**Ejemplo:**
```
GET /api/products/MLA123456789
```

## Licencia

Este proyecto es una prueba técnica.

## Autor

**jdocdev**
- GitHub: [@jdocdev](https://github.com/jdocdev)

