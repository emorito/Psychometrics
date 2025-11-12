# 🧠 PsycheMetrics v2.0 - Sistema Modular de Evaluación Psicométrica

## 🎯 **VISIÓN GENERAL**

PsycheMetrics Essence v2.0 es un **sistema modular y escalable** de evaluación psicométrica que combina rigor académico con experiencia de usuario excepcional. Diseñado para ser **fácilmente personalizable** sin tocar el código principal.

### ✨ **Características Principales**

- 🧠 **Motor adaptativo basado en TRI** (Teoría de Respuesta al Ítem)
- 📊 **Sistema de feedback académico** con explicaciones detalladas
- 🎨 **UI/UX moderna** con tema claro/oscuro
- 📱 **Completamente responsivo** y accesible
- 🔧 **Totalmente modular** - cambia banco de ítems sin tocar código
- 📈 **Análisis psicométrico avanzado** con métricas profesionales
- 💾 **Exportación de datos** para análisis posterior
- 🚀 **Preparado para escalamiento** a nivel institucional

---

## 🏗️ **ARQUITECTURA MODULAR**

```
psychemetrics-essence/
├── 📄 psychemetrics_essence_v2.html  # Aplicación principal
├── 📁 config/
│   └── 📄 app-config.js              # Configuración global
├── 📁 data/
│   └── 📄 items.json                 # Banco de ítems personalizable
├── 📄 item-bank-guide.md             # Guía para crear bancos
└── 📄 README.md                      # Este archivo
```

### 🧩 **Componentes Independientes**

1. **Motor Psicométrico** (`AdaptiveEngine`)
2. **Gestor de Datos** (`DataManager`) 
3. **Gestor de Banco de Ítems** (`ItemBankManager`)
4. **Sistema de Configuración** (`APP_CONFIG`)
5. **Interfaz Modular** (CSS + JS separado)

---

## ⚡ **INICIO RÁPIDO**

### 📋 **Opción 1: Usar Inmediatamente (5 minutos)**

1. **Descarga los archivos:**
   - `psychemetrics_essence_v2.html`
   - `config/app-config.js`
   - `data/items.json`

2. **Estructura en tu servidor:**
   ```
   tu-sitio/
   ├── index.html (o como quieras llamar)
   ├── config/
   │   └── app-config.js
   └── data/
       └── items.json
   ```

3. **Abre en navegador** - ¡Listo!

### 🎯 **Opción 2: Personalización Básica (15 minutos)**

1. **Edita `data/items.json`** con tus preguntas:
   ```json
   [
     {
       "id": 1,
       "question": "Tu pregunta aquí",
       "options": ["Opción A", "Opción B", "Opción C"],
       "correctAnswer": 0,
       "difficulty": "medium",
       "category": "tu-tema",
       "discrimination": 1.0,
       "feedback": {
         "correct": "¡Bien!",
         "incorrect": "Inténtalo otra vez"
       }
     }
     // ... más ítems
   ]
   ```

2. **Modifica `config/app-config.js`** si necesitas:
   ```javascript
   const APP_CONFIG = {
     app: {
       name: "Tu Evaluación Personalizada"
     },
     // ... más configuraciones
   };
   ```

3. **¡Listo!** Tu evaluación personalizada funciona

---

## 📊 **CREANDO TU BANCO DE ÍTEMS**

### 🔧 **Formato Estándar**

Cada ítem debe tener esta estructura:

```json
{
  "id": 1,                                    // Identificador único
  "question": "¿Cuál es la capital de Francia?", // Pregunta
  "options": ["Madrid", "París", "Roma"],     // Opciones de respuesta
  "correctAnswer": 1,                         // Índice de respuesta correcta
  "difficulty": "medium",                     // "easy", "medium", "hard"
  "category": "geografia",                    // Categoría temática
  "discrimination": 1.2,                      // Parámetro TRI (0.5-2.5)
  "feedback": {
    "correct": "🎯 ¡París es la capital de Francia!",
    "incorrect": "❌ París es la capital, no Madrid ni Roma"
  }
}
```

### ✅ **Validación Automática**

El sistema valida automáticamente:
- ❌ IDs duplicados
- ❌ Respuestas fuera de rango
- ❌ JSON malformado
- ⚠️ Falta de feedback (se generan defaults)
- ⚠️ Discriminación inválida (se ajusta a 1.0)

### 📈 **Estadísticas del Banco**

El sistema calcula automáticamente:
- Total de ítems
- Distribución por dificultad
- Distribución por categoría  
- Discriminación promedio

```javascript
// Ver en consola del navegador:
state.itemBankManager.getBankStats()
```

---

## ⚙️ **CONFIGURACIÓN AVANZADA**

### 🎮 **Modos de Evaluación**

```javascript
const APP_CONFIG = {
  modes: {
    adaptive: {
      name: "Mi Modo Adaptativo",
      default: true,              // Modo por defecto
      maxItems: 25               // Máximo de ítems
    },
    fixed: {
      name: "Examen Tradicional", 
      defaultItems: 20           // Cantidad por defecto
    },
    competitive: {
      enabled: false             // Desactivar modo competitivo
    }
  }
};
```

### 🎨 **Personalización Visual**

```javascript
const APP_CONFIG = {
  themes: {
    default: "dark",              // Tema por defecto
    available: ["light", "dark"]  // Temas disponibles
  },
  ui: {
    animations: {
      enabled: false             // Desactivar animaciones
    },
    responsive: {
      mobileBreakpoint: 900       // Breakpoint personalizado
    }
  }
};
```

### 📊 **Parámetros Psicométricos**

```javascript
const APP_CONFIG = {
  psychometrics: {
    adaptive: {
      initialTheta: 0,           // Habilidad inicial
      convergenceSE: 0.3,        // Convergencia más rápida
      minItems: 3,               // Mínimo de ítems
      maxItems: 20               // Máximo de ítems
    },
    itemSelection: {
      maxInfoWeight: 0.7,        // Menos peso a máxima información
      randomWeight: 0.5          // Más aleatoriedad
    }
  }
};
```

---

## 🔬 **SISTEMA ADAPTATIVO EXPLICADO**

### 🧮 **Algoritmo TRI Simplificado**

El motor adaptativo implementa **Teoría de Respuesta al Ítem de 2 parámetros**:

```
P(θ) = 1 / (1 + exp(-a(θ - b)))

Donde:
- θ = habilidad del sujeto (-3 a +3)
- a = discriminación del ítem (qué tan bien discrimina)
- b = dificultad del ítem (-3 fácil, +3 difícil)
```

### 📈 **Actualización de Habilidad**

```javascript
updateAbility(response, item) {
  const stepSize = adaptive / (1 + responses.length * 0.15);
  
  if (response) {
    this.theta += stepSize * item.discrimination;  // Hacia más difícil
  } else {
    this.theta -= stepSize * item.discrimination;  // Hacia más fácil
  }
  
  // Error estándar disminuye con más respuestas
  this.se = Math.max(0.15, this.se * 0.92);
}
```

### 🎯 **Selección de Ítems**

1. **Máxima información** en la habilidad actual
2. **Evita ítems ya administrados**
3. **Ajusta por discriminación**
4. **Fallback aleatorio** si es necesario

---

## 📊 **MÉTRICAS Y ANÁLISIS**

### 📈 **Métricas Principales**

| Métrica | Descripción | Rango |
|---------|-------------|-------|
| **Theta (θ)** | Habilidad estimada | -3 a +3 |
| **SE** | Error estándar | 0 a 3 |
| **Confianza** | Precisión de estimación | 0 a 95% |
| **Aciertos** | Respuestas correctas | 0 a 100% |
| **Convergencia** | ¿Se estabilizó la estimación? | Boolean |

### 📋 **Reporte Académico Generado**

```javascript
{
  "user": "María González",
  "abilityEstimate": 0.45,
  "abilityPercentage": 74,
  "standardError": 0.23,
  "confidence": 92,
  "reliabilityEstimate": 0.92,
  "convergence": true,
  "responsePattern": [1, 0, 1, 1, ...],
  "abilityHistory": [...]
}
```

### 💾 **Exportación de Datos**

El sistema exporta **JSON estructurado** con:
- Metadatos de la evaluación
- Patrón de respuestas completo
- Historia de estimación de habilidad
- Estadísticas del banco de ítems
- Timestamp preciso

---

## 🚀 **ESCALAMIENTO Y PROFESIONAL**

### 🔗 **Integración Backend (Opcional)**

```javascript
const APP_CONFIG = {
  integrations: {
    backend: {
      enabled: true,
      type: "supabase",
      endpoint: "https://tu-proyecto.supabase.co",
      apiKey: "tu-clave-publica",
      autoSync: true
    }
  }
};
```

**Tabla Supabase requerida:**
```sql
CREATE TABLE attempts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name text NOT NULL,
  data jsonb NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);
```

### 📈 **Dashboard para Profesores**

Con el backend, puedes crear:
- Ver progreso de estudiantes en tiempo real
- Generar reportes de clase
- Analizar ítems problemáticos
- Exportar datos para R/SPSS

### 🔒 **Configuración Institucional**

```javascript
// Para uso institucional
const APP_CONFIG = ConfigUtils.applyPreset('institution');

// O configuración personalizada
const customConfig = {
  security: {
    sanitizeInput: true,
    validateExternalData: true
  },
  integrations: {
    backend: { enabled: true },
    analytics: { enabled: true }
  }
};
```

---

## 🎯 **CASOS DE USO ESPECÍFICOS**

### 🎓 **Universidad - Cursos de Psicometría**
```javascript
const universityConfig = {
  modes: {
    adaptive: { default: true },
    competitive: { enabled: true }
  },
  itemBank: {
    categories: [
      "construction", "validation", "statistics", 
      "irt", "applications"
    ]
  },
  integrations: {
    lms: { enabled: true, type: "moodle" }
  }
};
```

### 🏥 **Clínica - Evaluación Psicológica**
```javascript
const clinicalConfig = {
  psychometrics: {
    adaptive: {
      minItems: 10,
      convergenceSE: 0.2  // Mayor precisión
    }
  },
  data: {
    export: { anonymize: true },
    security: { validateExternalData: true }
  }
};
```

### 📚 **Capacitación Corporativa**
```javascript
const corporateConfig = {
  modes: { competitive: { enabled: true } },
  ui: {
    notifications: { enabled: true },
    accessibility: { largeText: true }
  },
  integrations: {
    backend: { enabled: true },
    analytics: { enabled: true }
  }
};
```

---

## 🐛 **TROUBLESHOOTING**

### ❌ **Errores Comunes**

**1. Banco de ítems no carga:**
```javascript
// Verificar en consola:
state.itemBankManager.hasCustomBank() // false = usa default
state.itemBankManager.getBankStats()  // Ver estadísticas
```

**2. Adaptativo no funciona:**
```javascript
// Verificar en consola:
state.engine.theta           // Debe cambiar con respuestas
state.engine.abilityHistory  // Debe tener datos
```

**3. Resultados no se guardan:**
```javascript
// Verificar localStorage:
localStorage.getItem('psychemetrics_essence_v2')
```

### 🔧 **Debug Mode**

```javascript
// Activar modo debug
const APP_CONFIG = {
  advanced: {
    debug: { 
      enabled: true, 
      console: true, 
      performance: true 
    }
  }
};
```

---

## 📞 **SOPORTE Y CONTRIBUCIÓN**

### 🐛 **Reportar Bugs**
- Revisa la [Guía de Troubleshooting](#troubleshooting)
- Incluye el navegador y versión
- Adjunta console logs (si debug está activado)

### 💡 **Solicitar Funcionalidades**
- Especifica el caso de uso
- Menciona si es para institución o personal
- Incluye mockups si es posible

### 🤝 **Contribuir**
- Fork del repositorio
- Seguir el estilo de código existente
- Probar cambios antes del PR

---

## 📄 **LICENCIA**

MIT License - libre para uso personal, educativo y comercial.

---

## 🎉 **¡EMPIEZA AHORA!**

1. **Descarga** los archivos principales
2. **Personaliza** `data/items.json` con tu contenido  
3. **Modifica** `config/app-config.js` si es necesario
4. **¡Despliega!** - Tu evaluación personalizada está lista

**¿Necesitas ayuda específica?** Dime tu caso de uso y te doy la configuración exacta.

---

*Diseñado con ❤️ por MiniMax Agent - La evaluación psicométrica al alcance de todos.*