# 🚀 Configuración Rápida para GitHub Pages

## ✅ **¿Qué archivos necesitas?**

Todos estos archivos están incluidos en esta carpeta:

```
psychemetrics-github-pages/
├── index.html          ← La aplicación principal (es lo que verás)
├── README.md           ← Documentación completa
├── data/
│   └── items.json      ← Tu banco de ítems (personalizable)
└── config/
    ├── app-config.js   ← Configuración de la aplicación
    └── use-cases.js    ← Casos de uso predefinidos
```

## 🎯 **Opción 1: GitHub Pages (Página Personal)**

### **Pasos:**

1. **Crear repositorio en GitHub:**
   - Ir a [github.com](https://github.com)
   - Click "New repository"
   - Nombre: `mi-evaluacion-psicometrica`
   - Público (para Pages gratuito)
   - Check: "Add a README file"

2. **Subir archivos:**
   - Click "uploading an existing file"
   - Arrastra TODOS los archivos de esta carpeta
   - Commit changes

3. **Activar GitHub Pages:**
   - Settings → Pages (tab)
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Click "Save"

4. **¡Listo!** 
   - Tu app estará en: `https://tu-usuario.github.io/mi-evaluacion-psicometrica/`

---

## 🎯 **Opción 2: GitHub Pages (Página Principal)**

### **Pasos:**

1. **Crear repositorio especial:**
   - Nombre EXACTO: `tu-usuario.github.io`
   - Público
   - README opcional

2. **Subir archivos directamente:**
   - Todos los archivos de esta carpeta
   - En la rama `main` (por defecto)

3. **¡Listo!**
   - Tu app estará en: `https://tu-usuario.github.io/`

---

## ⚡ **Personalización en 2 minutos**

### **Cambiar banco de ítems:**

1. **Edita `data/items.json`**:
   ```json
   [
     {
       "id": 1,
       "question": "¿Tu nueva pregunta?",
       "options": ["Opción A", "Opción B", "Opción C", "Opción D"],
       "correctAnswer": 0,
       "difficulty": "medium",
       "category": "tu-tema",
       "discrimination": 1.2,
       "feedback": {
         "correct": "¡Bien!",
         "incorrect": "Inténtalo otra vez"
       }
     }
     // ... agregar más ítems
   ]
   ```

2. **Sube el archivo actualizado a GitHub**

3. **¡Listo!** La app cargará automáticamente los nuevos ítems

### **Cambiar configuración básica:**

**En `config/app-config.js`:**
```javascript
const APP_CONFIG = {
  app: {
    name: "Mi Evaluación Personalizada"  // ← Cambia aquí
  },
  // ... más opciones
};
```

---

## ✅ **Verificar que funciona**

### **Checklist:**

- [ ] ✅ Archivo `index.html` existe
- [ ] ✅ Carpeta `data/` con `items.json`
- [ ] ✅ Carpeta `config/` con archivos JS
- [ ] ✅ GitHub Pages activado en Settings
- [ ] ✅ URL accesible (probar en navegador)
- [ ] ✅ Banco de ítems se carga correctamente
- [ ] ✅ Evaluación adaptativa funciona
- [ ] ✅ Resultados se muestran bien
- [ ] ✅ Tema claro/oscuro cambia
- [ ] ✅ Responsivo en móvil

### **URLs de prueba típicas:**

✅ **Funciona correctamente:**
- Login carga sin errores
- Preguntas aparecen al iniciar
- Respuestas se registran
- Gráficos se generan al final

❌ **Problemas comunes:**
- "Loading..." infinito → Falta `data/items.json`
- "Error al cargar banco" → JSON malformado
- Pantalla en blanco → Problema en `index.html`

---

## 🔧 **Solución de Problemas**

### **Error: "Banco de ítems no encontrado"**
```
Solución: Verificar que data/items.json existe y está en la ubicación correcta
```

### **Error: "JSON malformado"**
```
Solución: Validar JSON en https://jsonlint.com/
```

### **GitHub Pages no se activa**
```
Solución: 
1. Esperar 5-10 minutos después de activar
2. Verificar que el repositorio es público
3. Revisar Settings → Pages → Source
```

### **Tema no cambia**
```
Solución: Verificar que los archivos JS se cargan desde config/
```

---

## 🎨 **Personalización Visual Rápida**

### **Cambiar colores principales:**

**En `index.html`, buscar las variables CSS:**
```css
:root {
  --primary: #667eea;     /* ← Color azul principal */
  --secondary: #764ba2;   /* ← Color púrpura */
  --success: #48bb78;     /* ← Verde para correcto */
  --danger: #f56565;      /* ← Rojo para incorrecto */
}
```

### **Cambiar título de la app:**

**En `index.html`, línea 6:**
```html
<title>🧠 Tu Evaluación Personalizada</title>
```

**En la pantalla de login (línea 221):**
```html
<h2 class="login-title">Tu Evaluación Personalizada</h2>
```

---

## 📱 **Compatible con:**

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Móviles iOS y Android  
- ✅ Tablets y Desktop
- ✅ Modo offline (sin internet)

---

## 🎯 **¿Qué hacer ahora?**

1. **¡Prueba la app!** → `https://tu-usuario.github.io/tu-repo/`
2. **Personaliza el banco** → Edita `data/items.json`
3. **Comparte la URL** → Con estudiantes, colegas, etc.
4. **¡Listo!** → Evaluación psicométrica funcionando

---

**¿Algún problema?** La documentación completa está en `README.md`