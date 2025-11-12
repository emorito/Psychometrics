// 🎯 CONFIGURACIONES PREDEFINIDAS - CASOS DE USO ESPECÍFICOS
// ================================================================

// 🏥 CONFIGURACIÓN PARA CLÍNICAS Y EVALUACIÓN PSICOLÓGICA
const CLINICAL_CONFIG = {
  app: {
    name: "Evaluación Psicológica Clínica",
    description: "Instrumento de evaluación para práctica clínica"
  },
  
  psychometrics: {
    adaptive: {
      initialTheta: 0,
      initialSE: 0.9,        // Mayor incertidumbre inicial
      convergenceSE: 0.2,    // Mayor precisión requerida
      minItems: 12,          // Mínimo más alto para precisión clínica
      maxItems: 30
    },
    validation: {
      strictMode: true,
      requireFeedback: true,
      maxDiscrimination: 2.0,
      minDiscrimination: 0.8
    }
  },
  
  modes: {
    adaptive: {
      name: "Evaluación Adaptativa",
      icon: "🧠",
      description: "Evaluación que se ajusta a la capacidad del paciente",
      default: true,
      maxItems: 25
    },
    fixed: {
      name: "Evaluación Estándar",
      icon: "📋",
      defaultItems: 15
    },
    competitive: {
      enabled: false  // No competitivo en clínica
    }
  },
  
  data: {
    storage: {
      maxAttempts: 500,      // Más almacenamiento para datos clínicos
      anonymize: true        // Automáticamente anónimo
    },
    export: {
      anonymize: true,
      includeMetadata: true,
      filename: (userId, timestamp) => 
        `clinical_eval_${userId}_${timestamp}.json`
    }
  },
  
  security: {
    sanitizeInput: true,
    validateExternalData: true,
    allowFileUpload: false
  },
  
  integrations: {
    backend: {
      enabled: true,
      type: "supabase",
      autoSync: true,
      offlineMode: true
    }
  },
  
  ui: {
    notifications: { enabled: false }, // Menos distracciones
    accessibility: {
      highContrast: true,
      largeText: true,
      keyboardNavigation: true
    }
  }
};

// 🎓 CONFIGURACIÓN PARA UNIVERSIDADES Y ACADEMIA
const ACADEMIC_CONFIG = {
  app: {
    name: "PsycheMetrics Académico",
    description: "Plataforma educativa para enseñanza de psicometría"
  },
  
  psychometrics: {
    adaptive: {
      minItems: 8,
      maxItems: 20,      // Más corto para sesiones de clase
      convergenceSE: 0.3
    },
    itemSelection: {
      educationalWeight: 1.0  // Prioriza valor educativo
    }
  },
  
  modes: {
    adaptive: { default: true },
    competitive: { 
      enabled: true,
      name: "Competencia Académica",
      icon: "🏆"
    },
    fixed: {
      name: "Examen Tradicional",
      icon: "📝",
      description: "Examen con puntuación fija para evaluación formal"
    }
  },
  
  itemBank: {
    categories: [
      { id: "theory", name: "Teoría Psicométrica", color: "#667eea" },
      { id: "construction", name: "Construcción de Tests", color: "#48bb78" },
      { id: "validation", name: "Validación", color: "#ed8936" },
      { id: "statistics", name: "Análisis Estadístico", color: "#f56565" },
      { id: "irt", name: "Teoría de Respuesta al Ítem", color: "#9f7aea" },
      { id: "applications", name: "Aplicaciones", color: "#38b2ac" }
    ]
  },
  
  integrations: {
    lms: {
      enabled: true,
      type: "moodle",  // LMS más común en universidades
      config: {
        gradebook: true,
        syncAttempts: true
      }
    },
    backend: {
      enabled: true,
      autoSync: true
    }
  },
  
  charts: {
    dashboard: {
      showClassStats: true,
      showBankStats: true,
      showTrend: true
    }
  },
  
  data: {
    storage: { maxAttempts: 1000 },
    export: {
      includeMetadata: true,
      includeBankStats: true,
      format: "spss-compatible"  // Para análisis en SPSS
    }
  }
};

// 🏢 CONFIGURACIÓN PARA CAPACITACIÓN CORPORATIVA
const CORPORATE_CONFIG = {
  app: {
    name: "Evaluación de Competencias",
    description: "Plataforma de capacitación corporativa en psicometría"
  },
  
  psychometrics: {
    adaptive: {
      minItems: 5,        // Corto para sesiones de trabajo
      maxItems: 15,
      initialTheta: 0.2   // Asume algo de conocimiento previo
    }
  },
  
  modes: {
    adaptive: { 
      default: true,
      name: "Aprendizaje Adaptativo",
      description: "Se adapta a tu nivel para optimizar el aprendizaje"
    },
    competitive: {
      enabled: true,
      name: "Competencia de Equipos",
      icon: "👥",
      description: "Comparte resultados con tu equipo de trabajo"
    },
    fixed: {
      name: "Certificación",
      icon: "🎖️",
      description: "Evaluación formal para certificación"
    }
  },
  
  itemBank: {
    categories: [
      { id: "basics", name: "Conceptos Básicos", color: "#48bb78" },
      { id: "applications", name: "Aplicaciones Prácticas", color: "#667eea" },
      { id: "tools", name: "Herramientas y Software", color: "#ed8936" },
      { id: "compliance", name: "Cumplimiento Normativo", color: "#f56565" }
    ]
  },
  
  ui: {
    notifications: {
      enabled: true,
      showProgress: true,
      achievements: true  // Gamificación
    },
    responsive: {
      mobileFirst: true,   // Optimizado para móviles (viajes)
      touchOptimized: true
    }
  },
  
  integrations: {
    backend: {
      enabled: true,
      type: "supabase"
    },
    analytics: {
      enabled: true,
      trackUserActions: true
    }
  },
  
  data: {
    storage: { maxAttempts: 200 },
    export: {
      anonymize: false,  // Permitir nombres en corporativo
      includeMetadata: true
    }
  },
  
  advanced: {
    gamification: {
      enabled: true,
      badges: ["Novato", "Competente", "Experto", "Maestro"],
      leaderboard: true
    }
  }
};

// 🧠 CONFIGURACIÓN PARA INVESTIGADORES
const RESEARCHER_CONFIG = {
  app: {
    name: "PsycheMetrics Research",
    description: "Plataforma de investigación psicométrica"
  },
  
  psychometrics: {
    adaptive: {
      minItems: 15,       // Más ítems para datos ricos
      maxItems: 50,
      convergenceSE: 0.25, // Alta precisión
      trackDetailedHistory: true
    },
    itemSelection: {
      maxInfoWeight: 1.0,
      experimentalWeight: 0.5  // Permite items menos óptimos para investigación
    }
  },
  
  modes: {
    adaptive: {
      name: "CAT Experimental",
      description: "Evaluación adaptativa con tracking detallado"
    },
    fixed: {
      name: "Diseño Experimental",
      description: "Control total sobre ítems administrados"
    },
    competitive: { enabled: false }
  },
  
  data: {
    storage: { 
      maxAttempts: 5000,  // Mucho almacenamiento para datos de investigación
      backupEnabled: true
    },
    export: {
      includeMetadata: true,
      includeBankStats: true,
      includeRawData: true,  // Datos crudos
      format: "r-compatible", // Para R
      anonymize: true
    }
  },
  
  advanced: {
    debug: {
      enabled: true,
      console: true,
      performance: true,
      verbose: true
    },
    research: {
      detailedTracking: true,
      experimentalMode: true,
      customMetrics: true
    }
  },
  
  integrations: {
    backend: {
      enabled: true,
      type: "custom",  // API personalizada para investigadores
      autoSync: true
    }
  }
};

// 🎯 CONFIGURACIÓN PARA DIAGNÓSTICO RÁPIDO
const RAPID_ASSESSMENT_CONFIG = {
  app: {
    name: "Evaluación Rápida",
    description: "Evaluación psicométrica en tiempo mínimo"
  },
  
  psychometrics: {
    adaptive: {
      minItems: 3,       // Mínimo absoluto
      maxItems: 8,       // Muy corto
      convergenceSE: 0.5, // Convergencia menos estricta
      timeLimit: 300     // 5 minutos máximo
    }
  },
  
  modes: {
    adaptive: {
      name: "Evaluación Express",
      icon: "⚡",
      description: "Evaluación rápida para triage",
      default: true,
      maxItems: 8
    },
    fixed: {
      name: "Cuestionario Mínimo",
      icon: "🔍",
      defaultItems: 5
    },
    competitive: { enabled: false }
  },
  
  ui: {
    animations: { enabled: false },  // Sin animaciones para velocidad
    notifications: { enabled: false },
    responsive: {
      mobileFirst: true
    }
  },
  
  itemBank: {
    categories: [
      { id: "core", name: "Núcleo", color: "#667eea" },
      { id: "secondary", name: "Secundario", color: "#48bb78" }
    ]
  },
  
  data: {
    storage: { maxAttempts: 100 },   // Poco almacenamiento
    export: {
      includeMetadata: false,  // Más simple
      quickFormat: true
    }
  }
};

// 📚 CONFIGURACIÓN PARA AUTOAPRENDIZAJE
const SELF_LEARNING_CONFIG = {
  app: {
    name: "Academia Psicométrica",
    description: "Aprende psicometría a tu ritmo"
  },
  
  psychometrics: {
    adaptive: {
      minItems: 5,
      maxItems: 25,
      initialTheta: -0.5  // Asume principiante
    }
  },
  
  modes: {
    adaptive: {
      name: "Aprendizaje Personalizado",
      description: "Se adapta a tu ritmo de aprendizaje",
      default: true
    },
    fixed: {
      name: "Práctica por Temas",
      description: "Practica temas específicos"
    },
    competitive: { enabled: false }
  },
  
  itemBank: {
    categories: [
      { id: "beginner", name: "Principiante", color: "#48bb78" },
      { id: "intermediate", name: "Intermedio", color: "#ed8936" },
      { id: "advanced", name: "Avanzado", color: "#f56565" },
      { id: "expert", name: "Experto", color: "#9f7aea" }
    ]
  },
  
  ui: {
    notifications: {
      enabled: true,
      achievements: true,
      motivationMessages: true
    },
    gamification: {
      enabled: true,
      badges: [
        "Explorador", "Estudiante", "Practitioner", "Experto", "Maestro"
      ],
      progressBars: true,
      streaks: true  // Días consecutivos
    }
  },
  
  advanced: {
    learning: {
      adaptiveDifficulty: true,
      spacedRepetition: true,
      weakAreasFocus: true
    }
  }
};

// 🚀 FUNCIONES PARA CARGAR CONFIGURACIONES
const ConfigPresets = {
  // Cargar configuración para clínica
  forClinical: () => {
    return deepMerge(window.APP_CONFIG, CLINICAL_CONFIG);
  },
  
  // Cargar configuración para academia
  forAcademic: () => {
    return deepMerge(window.APP_CONFIG, ACADEMIC_CONFIG);
  },
  
  // Cargar configuración para empresa
  forCorporate: () => {
    return deepMerge(window.APP_CONFIG, CORPORATE_CONFIG);
  },
  
  // Cargar configuración para investigación
  forResearch: () => {
    return deepMerge(window.APP_CONFIG, RESEARCHER_CONFIG);
  },
  
  // Cargar configuración para evaluación rápida
  forRapidAssessment: () => {
    return deepMerge(window.APP_CONFIG, RAPID_ASSESSMENT_CONFIG);
  },
  
  // Cargar configuración para autoaprendizaje
  forSelfLearning: () => {
    return deepMerge(window.APP_CONFIG, SELF_LEARNING_CONFIG);
  },
  
  // Detectar configuración recomendada automáticamente
  autoDetect: () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const context = urlParams.get('context');
    
    // Detectar por parámetros URL
    if (mode) {
      switch (mode.toLowerCase()) {
        case 'clinical': return ConfigPresets.forClinical();
        case 'academic': return ConfigPresets.forAcademic();
        case 'corporate': return ConfigPresets.forCorporate();
        case 'research': return ConfigPresets.forResearch();
        case 'rapid': return ConfigPresets.forRapidAssessment();
        case 'learning': return ConfigPresets.forSelfLearning();
      }
    }
    
    // Detectar por contexto de la página
    if (context) {
      switch (context.toLowerCase()) {
        case 'clinic': return ConfigPresets.forClinical();
        case 'university': return ConfigPresets.forAcademic();
        case 'company': return ConfigPresets.forCorporate();
        case 'lab': return ConfigPresets.forResearch();
        case 'assessment': return ConfigPresets.forRapidAssessment();
        case 'education': return ConfigPresets.forSelfLearning();
      }
    }
    
    // Configuración por defecto
    return window.APP_CONFIG;
  }
};

// 📋 EJEMPLO DE USO
/*
// En tu HTML, antes de cargar la aplicación:
<script src="config/app-config.js"></script>
<script>
// Cargar configuración específica
const config = ConfigPresets.forAcademic(); // O la que necesites

// Aplicar la configuración
Object.assign(window.APP_CONFIG, config);
</script>
<script src="psychemetrics_essence_v2.html"></script>
*/

// 🔗 CONFIGURACIÓN DINÁMICA POR URL
/*
// Ejemplos de URLs:
// /?mode=clinical - Configuración clínica
// /?mode=academic&context=university - Configuración académica universitaria  
// /?context=company&user=corporate - Configuración corporativa
*/

// 📊 MATRIZ DE DECISIÓN
const CONFIG_DECISION_MATRIX = {
  clinical: {
    keywords: ['clínica', 'terapia', 'paciente', 'diagnóstico'],
    required: ['backend', 'anonymize', 'highPrecision'],
    recommended: ['clinicalConfig', 'medicalValidation']
  },
  academic: {
    keywords: ['universidad', 'curso', 'estudiante', 'profesor'],
    required: ['lms', 'educationalContent'],
    recommended: ['academicConfig', 'studentTracking']
  },
  corporate: {
    keywords: ['empresa', 'capacitación', 'corporativo', 'certificación'],
    required: ['gamification', 'teamCompetition'],
    recommended: ['corporateConfig', 'progressTracking']
  },
  research: {
    keywords: ['investigación', 'laboratorio', 'estudio', 'experimento'],
    required: ['rawData', 'detailedTracking'],
    recommended: ['researchConfig', 'apiAccess']
  }
};

// 🎯 VALIDACIÓN DE CONFIGURACIÓN
const validateConfigForUseCase = (config, useCase) => {
  const requirements = CONFIG_DECISION_MATRIX[useCase];
  if (!requirements) return { valid: false, missing: ['unknown use case'] };
  
  const missing = [];
  const warnings = [];
  
  // Verificar requirements
  requirements.required.forEach(req => {
    if (!hasFeature(config, req)) {
      missing.push(req);
    }
  });
  
  // Verificar recomendaciones
  requirements.recommended.forEach(rec => {
    if (!hasFeature(config, rec)) {
      warnings.push(`recommended: ${rec}`);
    }
  });
  
  return {
    valid: missing.length === 0,
    missing,
    warnings,
    score: Math.round((1 - missing.length / requirements.required.length) * 100)
  };
};

const hasFeature = (config, feature) => {
  const featurePaths = {
    backend: ['integrations', 'backend', 'enabled'],
    anonymize: ['data', 'export', 'anonymize'],
    highPrecision: ['psychometrics', 'adaptive', 'convergenceSE'],
    lms: ['integrations', 'lms', 'enabled'],
    educationalContent: ['itemBank', 'categories'],
    gamification: ['advanced', 'gamification', 'enabled'],
    teamCompetition: ['modes', 'competitive', 'enabled'],
    rawData: ['data', 'export', 'includeRawData'],
    detailedTracking: ['psychometrics', 'adaptive', 'trackDetailedHistory']
  };
  
  const path = featurePaths[feature];
  if (!path) return true; // Feature no reconocida = no requerido
  
  let current = config;
  for (const key of path) {
    if (current[key] === undefined) return false;
    current = current[key];
  }
  
  return Boolean(current);
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.ConfigPresets = ConfigPresets;
  window.CONFIG_DECISION_MATRIX = CONFIG_DECISION_MATRIX;
  window.validateConfigForUseCase = validateConfigForUseCase;
}