# 🧠 BANCO DE ÍTEMS MODULAR - PSYCHOMETRICS ESSENCE v2.0

## 📋 ESTRUCTURA DEL BANCO DE ÍTEMS

Este es el formato estándar para crear tu banco de ítems personalizado. Puedes:

1. **Editar este archivo JSON directamente** con tus ítems
2. **Reemplazar `data/items.json`** con tu archivo personalizado
3. **Usar la función `loadBankFromArray()`** para cargar desde código

## 🎯 FORMATO DE ÍTEMS

```json
{
  "id": 1,
  "question": "Texto de la pregunta aquí",
  "options": [
    "Opción A",
    "Opción B", 
    "Opción C",
    "Opción D"
  ],
  "correctAnswer": 1,
  "difficulty": "easy|medium|hard",
  "category": "construction|validation|statistics|general",
  "discrimination": 1.2,
  "feedback": {
    "correct": "Mensaje cuando acierta",
    "incorrect": "Mensaje cuando falla"
  }
}
```

### 🔍 EXPLICACIÓN DE CAMPOS

| Campo | Descripción | Valores posibles |
|-------|-------------|------------------|
| `id` | Identificador único | Número entero |
| `question` | Texto de la pregunta | String |
| `options` | Array de opciones de respuesta | Array de strings |
| `correctAnswer` | Índice de respuesta correcta | 0, 1, 2, 3... |
| `difficulty` | Nivel de dificultad | "easy", "medium", "hard" |
| `category` | Categoría temática | String personalizado |
| `discrimination` | Parámetro de discriminación TRI | Número (>0) |
| `feedback.correct` | Mensaje cuando responde correctamente | String |
| `feedback.incorrect` | Mensaje cuando responde incorrectamente | String |

---

## 📚 EJEMPLO: BANCO DE ÍTEMS DE PSICOMETRÍA

```json
[
  {
    "id": 1,
    "question": "¿Cuál es el primer paso en la construcción de un test según Muñiz y Fonseca-Pedrero?",
    "options": [
      "Estudios piloto",
      "Definición de la variable medida", 
      "Marco general",
      "Edición del test"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "construction",
    "discrimination": 1.2,
    "feedback": {
      "correct": "🎯 ¡Excelente! El marco general es fundamental para definir qué vamos a medir.",
      "incorrect": "📘 Antes de definir variables o hacer estudios piloto, necesitamos establecer el marco conceptual general."
    }
  },
  {
    "id": 2,
    "question": "La definición operacional de una variable implica:",
    "options": [
      "Describirla solo teóricamente",
      "Traducirla en conductas observables y medibles",
      "Seleccionar ítems de otros instrumentos", 
      "Diseñar ítems tipo Likert"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "construction",
    "discrimination": 1.5,
    "feedback": {
      "correct": "🧠 ¡Perfecto! Operacionalizar significa convertir conceptos abstractos en variables medibles.",
      "incorrect": "💡 La definición operacional va más allá de la teoría: requiere especificar cómo se medirá en la práctica."
    }
  },
  {
    "id": 3,
    "question": "¿Cuál es el propósito principal del estudio piloto?",
    "options": [
      "Analizar el error de medición",
      "Evaluar la comprensión y funcionamiento de los ítems",
      "Calcular los baremos del test",
      "Obtener la versión final del instrumento"
    ],
    "correctAnswer": 1,
    "difficulty": "easy",
    "category": "validation", 
    "discrimination": 1.0,
    "feedback": {
      "correct": "🚀 ¡Así se hace! El estudio piloto permite detectar problemas antes de la validación final.",
      "incorrect": "🧪 El estudio piloto es un ensayo preliminar para identificar ítems con problemas de comprensión."
    }
  },
  {
    "id": 4,
    "question": "En el proceso de validación, la fiabilidad se refiere a:",
    "options": [
      "La precisión de las puntuaciones",
      "La relevancia del contenido",
      "La estética del instrumento",
      "La dificultad media de los ítems"
    ],
    "correctAnswer": 0,
    "difficulty": "hard",
    "category": "validation",
    "discrimination": 1.8,
    "feedback": {
      "correct": "🌟 ¡Exacto! Fiabilidad significa consistencia y precisión en las mediciones.",
      "incorrect": "🔍 Fiabilidad se centra en la precisión, mientras que validez se ocupa de qué mide realmente el test."
    }
  },
  {
    "id": 5,
    "question": "¿Qué caracteriza a la versión final del test?",
    "options": [
      "Es la primera prueba empírica",
      "Surge tras analizar validez y fiabilidad",
      "Se usa solo para pilotos", 
      "No requiere manual de uso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "construction",
    "discrimination": 1.3,
    "feedback": {
      "correct": "🏆 ¡Brillante! La versión final es el resultado del proceso psicométrico completo.",
      "incorrect": "📚 La versión final surge después de analizar rigurosamente fiabilidad y validez."
    }
  },
  {
    "id": 6,
    "question": "La evidencia de validez basada en el contenido se obtiene mediante:",
    "options": [
      "Análisis factorial",
      "Correlaciones con otros tests",
      "Evaluación por jueces expertos",
      "Estudios longitudinales"
    ],
    "correctAnswer": 2,
    "difficulty": "hard",
    "category": "validation",
    "discrimination": 1.6,
    "feedback": {
      "correct": "✅ ¡Excelente! Los jueces expertos evalúan la representatividad del contenido.",
      "incorrect": "📝 La validez de contenido requiere evaluación sistemática de expertos."
    }
  },
  {
    "id": 7,
    "question": "El coeficiente alfa de Cronbach mide:",
    "options": [
      "Validez del constructo",
      "Fiabilidad mediante consistencia interna",
      "Precisión del test-retest",
      "Equivalencia de formas paralelas"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "statistics",
    "discrimination": 1.4,
    "feedback": {
      "correct": "📊 ¡Correcto! El alfa de Cronbach es el indicador de consistencia interna.",
      "incorrect": "🔢 Cronbach mide consistencia interna, no otros tipos de fiabilidad."
    }
  },
  {
    "id": 8,
    "question": "¿Qué indica un valor de p bajo en el análisis de ítems?",
    "options": [
      "Alta discriminación",
      "Baja dificultad",
      "Alta dificultad", 
      "Mala redacción"
    ],
    "correctAnswer": 2,
    "difficulty": "hard",
    "category": "statistics",
    "discrimination": 1.7,
    "feedback": {
      "correct": "📉 ¡Bien! Un p bajo indica que pocos responden correctamente (ítem difícil).",
      "incorrect": "📉 El valor p representa dificultad: valores bajos = ítems difíciles."
    }
  },
  {
    "id": 9,
    "question": "El análisis factorial exploratorio en validación sirve para:",
    "options": [
      "Calcular la fiabilidad test-retest",
      "Identificar la estructura dimensional del constructo",
      "Establecer baremos normativos",
      "Evaluar la dificultad de los ítems"
    ],
    "correctAnswer": 1,
    "difficulty": "hard",
    "category": "validation",
    "discrimination": 1.9,
    "feedback": {
      "correct": "🔍 ¡Excelente! El análisis factorial descubre la estructura dimensional del constructo.",
      "incorrect": "🧪 Se enfoca en descubrir estructura dimensional, no calcular fiabilidad."
    }
  },
  {
    "id": 10,
    "question": "La baremación de un test psicológico consiste en:",
    "options": [
      "Eliminar ítems con mala discriminación",
      "Establecer los valores de referencia para las puntuaciones",
      "Calcular el coeficiente alfa de Cronbach",
      "Realizar estudios piloto"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "statistics",
    "discrimination": 1.1,
    "feedback": {
      "correct": "📊 ¡Perfecto! La baremación establece valores de referencia para interpretar puntuaciones.",
      "incorrect": "📈 Baremar significa establecer valores de referencia, no eliminar ítems."
    }
  },
  {
    "id": 11,
    "question": "En el modelo de Teoría de Respuesta al Ítem de 2 parámetros, el parámetro 'a' representa:",
    "options": [
      "La dificultad del ítem",
      "La discriminación del ítem",
      "La probabilidad de adivinanza",
      "La fiabilidad del test"
    ],
    "correctAnswer": 1,
    "difficulty": "hard",
    "category": "irt",
    "discrimination": 2.1,
    "feedback": {
      "correct": "🎯 ¡Correcto! El parámetro 'a' mide qué tan bien discrimina el ítem entre sujetos con diferentes niveles de habilidad.",
      "incorrect": "📐 El parámetro 'a' es discriminación, 'b' es dificultad, 'c' es adivinanza."
    }
  },
  {
    "id": 12,
    "question": "¿Cuál de las siguientes NO es una evidencia de validez?",
    "options": [
      "Validez de contenido",
      "Validez de criterio",
      "Validez de constructo",
      "Validez de administración"
    ],
    "correctAnswer": 3,
    "difficulty": "medium",
    "category": "validation",
    "discrimination": 1.3,
    "feedback": {
      "correct": "✅ ¡Exacto! La validez de administración no existe como tipo de validez en psicometría.",
      "incorrect": "❌ Los tipos estándar son: contenido, criterio y constructo."
    }
  },
  {
    "id": 13,
    "question": "El error estándar de medición (SEM) se calcula como:",
    "options": [
      "SD × √(1 - rxx)",
      "SD × rxx",
      "SD / √(1 - rxx)", 
      "SD × (1 - rxx)"
    ],
    "correctAnswer": 0,
    "difficulty": "hard",
    "category": "statistics",
    "discrimination": 1.8,
    "feedback": {
      "correct": "📐 ¡Perfecto! SEM = SD × √(1 - rxx), donde rxx es la fiabilidad.",
      "incorrect": "📊 El SEM refleja cuánto varía la puntuación verdadera por el error de medición."
    }
  },
  {
    "id": 14,
    "question": "En un estudio de validez convergente,Esperamos:",
    "options": [
      "Correlaciones altas con tests del mismo constructo",
      "Correlaciones bajas con tests del mismo constructo", 
      "Correlaciones altas con tests de constructos diferentes",
      "No correlaciones significativas"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "validation",
    "discrimination": 1.4,
    "feedback": {
      "correct": "🎯 ¡Correcto! Validez convergente espera correlaciones altas con medidas del mismo constructo.",
      "incorrect": "🔗 Validez convergente se espera con constructos similares, discriminante con diferentes."
    }
  },
  {
    "id": 15,
    "question": "¿Qué significa que un ítem tenga funcion differential (DIF)?",
    "options": [
      "Que tiene alta discriminación",
      "Que funciona diferente entre grupos demográficos",
      "Que es muy difícil",
      "Que tiene baja fiabilidad"
    ],
    "correctAnswer": 1,
    "difficulty": "hard",
    "category": "statistics",
    "discrimination": 2.0,
    "feedback": {
      "correct": "⚖️ ¡Excelente! El DIF indica que el ítem funciona diferentemente entre grupos (ej: género, etnia).",
      "incorrect": "🔍 DIF es un sesgo que puede invalidar la interpretación de las puntuaciones."
    }
  }
]
```

---

## 🛠️ CÓMO PERSONALIZAR TU BANCO

### Opción 1: Editar archivo JSON
1. Abre `data/items.json` 
2. Reemplaza el contenido con tus ítems
3. Mantén la estructura JSON válida
4. El sistema automáticamente cargará tu banco

### Opción 2: Cargar desde código
```javascript
// Ejemplo de carga programática
const customItems = [
  { id: 1, question: "Tu pregunta", options: ["A", "B", "C"], correctAnswer: 0, difficulty: "medium", category: "general", discrimination: 1.0, feedback: { correct: "Bien!", incorrect: "Mal" } }
];

const result = state.itemBankManager.loadBankFromArray(customItems);
console.log(result); // { success: true, count: 1 }
```

### Opción 3: Combinar bancos
```javascript
// Combinar banco existente + nuevo
const existingBank = state.itemBankManager.getCurrentBank();
const newItems = [...existingBank, ...yourCustomItems];
state.itemBankManager.loadBankFromArray(newItems);
```

---

## 📊 ESTADÍSTICAS DEL BANCO

El sistema automáticamente calcula:
- **Total de ítems**
- **Distribución por dificultad** (easy/medium/hard)
- **Distribución por categoría**
- **Discriminación promedio**
- **Ítems ya administrados**

Esto te ayuda a:
- ✅ Verificar que tienes suficientes ítems por dificultad
- ✅ Balancear categorías temáticas  
- ✅ Monitorizar la calidad psicométrica del banco

---

## 🚨 VALIDACIÓN AUTOMÁTICA

El sistema valida automáticamente:
- ❌ `id` duplicado → Error
- ❌ `correctAnswer` fuera de rango → Error  
- ❌ `difficulty` inválida → Se establece como "medium"
- ❌ `discrimination` inválida → Se establece como 1.0
- ❌ Estructura JSON inválida → Error

---

## 💡 CONSEJOS PARA CREAR BUENOS ÍTEMS

### ✅ Buen ítem
- Pregunta clara y específica
- Distractores plausibles
- Una sola respuesta correcta
- Feedback educativo

### ❌ Mal ítem
- Ambigüedad en la pregunta
- Respuestas obvias o absurdas
- Múltiples interpretaciones
- Sin retroalimentación

---

## 🎯 PRÓXIMOS PASOS

1. **Crea tu banco personalizado** usando este formato
2. **Súbelo como `data/items.json`**
3. **Verifica las estadísticas** en la consola del navegador
4. **Prueba el funcionamiento** adaptativo

¿Necesitas ayuda creando tu banco específico? ¡Dime qué tema quieres cubrir!