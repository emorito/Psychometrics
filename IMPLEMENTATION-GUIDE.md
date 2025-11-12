# 🚀 GUÍA DE IMPLEMENTACIÓN PASO A PASO
## PsycheMetrics Essence v2.0 - De 0 a 100 en 30 minutos

---

## 📋 **PASO 1: DESCARGA Y ESTRUCTURA (5 minutos)**

### 📁 Archivos que necesitas:

1. **`psychemetrics_essence_v2.html`** - Aplicación principal
2. **`config/app-config.js`** - Configuración global  
3. **`config/use-cases.js`** - Configuraciones predefinidas
4. **`data/items.json`** - Banco de ítems de ejemplo
5. **`item-bank-guide.md`** - Guía para crear bancos

### 🗂️ Estructura de carpetas:

```
tu-proyecto/
├── index.html
├── config/
│   ├── app-config.js
│   └── use-cases.js
├── data/
│   └── items.json
└── README.md (opcional)
```

**¡Listo!** Tu estructura está completa.

---

## ⚡ **PASO 2: INICIO RÁPIDO (2 minutos)**

### 🎯 Opción A: Funciona inmediatamente

1. **Abre `psychemetrics_essence_v2.html` en tu navegador**
2. **¡Listo!** - El sistema usará el banco por defecto

### 🎯 Opción B: Con tu banco de ítems

1. **Edita `data/items.json`** con tus preguntas
2. **Actualiza el HTML para cargar tu banco:**

```html
<!-- Añadir antes del script principal -->
<script src="config/app-config.js"></script>
<script>
// Cargar tu banco de ítems
async function loadCustomBank() {
  try {
    const response = await fetch('data/items.json');
    const items = await response.json();
    
    // El sistema automáticamente usará este banco
    console.log(`✅ Cargados ${items.length} ítems`);
  } catch (error) {
    console.log('❌ Error cargando banco:', error);
  }
}
loadCustomBank();
</script>
<script src="psychemetrics_essence_v2.html"></script>
```

---

## 🎨 **PASO 3: PERSONALIZACIÓN BÁSICA (10 minutos)**

### 🏷️ Cambiar nombre y branding:

**En `config/app-config.js`:**

```javascript
const APP_CONFIG = {
  app: {
    name: "Mi Evaluación Personalizada",  // ← Cambia esto
    version: "1.0",
    description: "Mi plataforma de evaluación"
  }
};
```

### 🎨 Cambiar colores:

```javascript
const APP_CONFIG = {
  // En la sección de temas
  themes: {
    default: "light",
    available: ["light", "dark"]
  }
};
```

### 🎮 Personalizar modos:

```javascript
const APP_CONFIG = {
  modes: {
    adaptive: {
      name: "Mi Modo Inteligente",      // ← Personaliza nombres
      description: "Se adapta a tu nivel"
    },
    fixed: {
      name: "Examen Tradicional",
      icon: "📝"
    }
  }
};
```

---

## 🏦 **PASO 4: CREAR TU BANCO DE ÍTEMS (10 minutos)**

### 📝 Crear archivo `data/items.json`:

```json
[
  {
    "id": 1,
    "question": "¿Tu primera pregunta?",
    "options": ["Opción A", "Opción B", "Opción C", "Opción D"],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "tema1",
    "discrimination": 1.2,
    "feedback": {
      "correct": "🎯 ¡Correcto! Explicación del concepto.",
      "incorrect": "❌ La respuesta correcta es B. Explicación educativa."
    }
  }
]
```

### ⚠️ Reglas importantes:

- ✅ **ID único** para cada ítem
- ✅ **correctAnswer** debe estar entre 0 y opciones.length-1  
- ✅ **difficulty**: "easy", "medium", "hard"
- ✅ **discrimination**: número entre 0.5 y 2.5
- ✅ **feedback**: siempre incluye correct e incorrect

### 📊 Validación automática:

El sistema **automáticamente**:
- ❌ Rechaza IDs duplicados
- ❌ Rechaza JSON malformado
- ⚠️ Ajusta discrimination inválida a 1.0
- ⚠️ Genera feedback si falta

---

## 🎯 **PASO 5: CONFIGURACIÓN AVANZADA (3 minutos)**

### 🏥 Para uso clínico:

```javascript
// En config/app-config.js
const APP_CONFIG = {
  psychometrics: {
    adaptive: {
      minItems: 12,          // Más ítems para precisión
      convergenceSE: 0.2     // Mayor precisión
    }
  },
  data: {
    export: {
      anonymize: true        // Automáticamente anónimo
    }
  }
};
```

### 🎓 Para universidad:

```javascript
const APP_CONFIG = {
  modes: {
    competitive: { enabled: true },  // Permitir competencias
    adaptive: { default: true }
  },
  integrations: {
    lms: {
      enabled: true,
      type: "moodle"
    }
  }
};
```

### 🏢 Para empresa:

```javascript
const APP_CONFIG = {
  ui: {
    notifications: {
      enabled: true,
      achievements: true  // Gamificación
    }
  },
  advanced: {
    gamification: {
      enabled: true,
      badges: ["Principiante", "Intermedio", "Avanzado"]
    }
  }
};
```

---

## 🔧 **PASO 6: DESPLIEGUE (5 minutos)**

### 🌐 Opción 1: Servidor web estático

1. **Sube archivos a tu servidor** (Apache, Nginx, etc.)
2. **Configura MIME types**:
   ```
   .json → application/json
   .js → application/javascript
   ```

### 🌐 Opción 2: GitHub Pages

1. **Crea repositorio** con los archivos
2. **Activa GitHub Pages** en Settings
3. **¡Listo!** Tu evaluación estará online

### 🌐 Opción 3: Netlify/Vercel (Recomendado)

1. **Conecta tu repositorio**
2. **Deploy automático** con cada commit
3. **Dominio personalizado** incluido

---

## 🧪 **PASO 7: TESTING (3 minutos)**

### ✅ Lista de verificación:

**Frontend:**
- [ ] Se carga correctamente
- [ ] Tema claro/oscuro funciona
- [ ] Responsive en móvil
- [ ] No hay errores en consola

**Funcionalidad:**
- [ ] Banco de ítems se carga
- [ ] Modo adaptativo funciona
- [ ] Resultados se guardan en localStorage
- [ ] Exportación funciona

**Datos:**
- [ ] Ítems se renderizan correctamente
- [ ] Respuestas se guardan
- [ ] Cálculos son correctos
- [ ] Exportación incluye todos los datos

### 🐛 Debug común:

**Error: "Cannot load items.json"**
```javascript
// Verificar en consola:
fetch('data/items.json').then(r => r.json())
  .then(items => console.log(items.length))
  .catch(e => console.error(e));
```

**Adaptativo no funciona:**
```javascript
// Verificar en consola:
state.engine.theta  // Debe cambiar con respuestas
```

---

## 🎉 **¡COMPLETADO! Tu evaluación está lista**

### 📊 Verifica que todo funciona:

1. **Abre** la aplicación en tu navegador
2. **Completa** una evaluación de prueba
3. **Exporta** los resultados
4. **Verifica** que los datos son correctos

### 🔗 Enlaces útiles:

- **📖 Documentación completa**: `README.md`
- **🏗️ Guía de bancos**: `item-bank-guide.md`
- **⚙️ Configuraciones**: `config/use-cases.js`

---

## 🆘 **¿PROBLEMAS?**

### ❌ **"El banco no carga"**
**Solución:**
1. Verifica que `data/items.json` existe
2. Revisa formato JSON (usa JSONLint)
3. Abre DevTools → Network para ver errores

### ❌ **"Adaptativo no funciona"**
**Solución:**
1. Verifica que tienes al menos 3 ítems por dificultad
2. Revisa que `discrimination` está entre 0.5-2.5
3. Verifica respuestas en consola: `state.engine.abilityHistory`

### ❌ **"Resultados no se exportan"**
**Solución:**
1. Revisa popup blockers
2. Verifica localStorage: `localStorage.getItem('psychemetrics_essence_v2')`
3. Prueba en navegador diferente

### 📞 **¿Necesitas más ayuda?**

**Dime específicamente:**
- ¿Qué casos de uso necesitas? (clínica, universidad, empresa)
- ¿Qué tipo de preguntas quieres incluir?
- ¿Necesitas integraciones específicas?

**¡Te ayudo con la configuración exacta!**

---

## 🎯 **PRÓXIMOS PASOS OPCIONALES**

### 🚀 **Escalamiento profesional:**

**Backend (1 día):**
- Integrar Supabase/Firebase
- Múltiples usuarios reales
- Dashboard de administración

**Análisis (1 semana):**
- Integración con R/SPSS
- Reportes automáticos
- Análisis psicométrico avanzado

**Institucional (1 mes):**
- Integración LMS (Moodle/Canvas)
- SSO (Single Sign-On)
- Compliance y auditorías

### 🎓 **Capacitación:**

- Entrenar a usuarios finales
- Crear manual de usuario
- Establecer protocolos de uso

---

**¡Tu plataforma de evaluación está lista para usar!** 🚀

*Diseñado para crecer contigo - desde una evaluación simple hasta una plataforma institucional completa.*