// 🎛️ ARCHIVO DE CONFIGURACIÓN - PSYCHOMETRICS ESSENCE v2.0
// ================================================================
// PERSONALIZA TU APLICACIÓN SIN TOCAR EL CÓDIGO PRINCIPAL
// ================================================================

const APP_CONFIG = {
  // 📱 INFORMACIÓN DE LA APLICACIÓN
  app: {
    name: "PsycheMetrics Essence",
    version: "2.0",
    description: "Evaluación psicométrica adaptativa",
    authors: ["MiniMax Agent"],
    lastUpdated: "2025-11-12"
  },

  // 🎨 TEMAS Y ESTILOS
  themes: {
    default: "light",
    available: ["light", "dark"],
    persist: true,
    key: "psychemetrics_theme_v2"
  },

  // 📊 CONFIGURACIÓN PSICOMÉTRICA
  psychometrics: {
    // Motor adaptativo
    adaptive: {
      initialTheta: 0,           // Habilidad inicial (-3 a +3)
      initialSE: 0.8,            // Error estándar inicial
      minTheta: -3,              // Theta mínimo
      maxTheta: 3,               // Theta máximo
      convergenceSE: 0.3,        // SE para considerar convergencia
      minItems: 5,               // Mínimo de ítems en adaptativo
      maxItems: 30               // Máximo de ítems en adaptativo
    },
    
    // Parámetros de selección de ítems
    itemSelection: {
      maxInfoWeight: 1.0,        // Peso para máxima información
      randomWeight: 0.3,         // Peso para aleatoriedad
      avoidRecentWeight: 1.0,    // Peso para evitar ítems recientes
      maxRecentItems: 5          // Máximo de ítems recientes en historial
    },
    
    // Validación de datos
    validation: {
      minItemsPerDifficulty: 3,  // Mínimo de ítems por dificultad
      maxDiscrimination: 2.5,    // Discriminación máxima permitida
      minDiscrimination: 0.5,    // Discriminación mínima permitida
      allowGuessing: false       // Permitir parámetro de adivinanza
    }
  },

  // 🎮 MODOS DE EVALUACIÓN
  modes: {
    adaptive: {
      name: "Adaptativo",
      icon: "📚",
      description: "La dificultad se ajusta a tu nivel de habilidad",
      default: true,
      allowManualStop: true,
      maxItems: 25
    },
    fixed: {
      name: "Fijo", 
      icon: "📝",
      description: "Cantidad predefinida de ítems de dificultad variable",
      allowManualStop: true,
      defaultItems: 15
    },
    competitive: {
      name: "Competitivo",
      icon: "⚔️",
      description: "Compite contra otros usuarios (local)",
      allowManualStop: false,
      defaultItems: 10
    }
  },

  // 💾 GESTIÓN DE DATOS
  data: {
    // LocalStorage
    storage: {
      historyKey: "psychemetrics_essence_v2",
      configKey: "psychemetrics_config",
      maxAttempts: 200,          // Máximo de intentos guardados
      autoCleanup: true,         // Limpiar datos antiguos automáticamente
      backupEnabled: true        // Hacer backup antes de limpiar
    },
    
    // Exportación
    export: {
      includeMetadata: true,
      includeBankStats: true,
      dateFormat: "ISO",         // "ISO", "local", "timestamp"
      anonymize: false,          // Anonimizar nombres en exportación
      filename: (userName, timestamp) => 
        `psychemetrics_${userName.replace(/\s+/g, '_')}_${timestamp}.json`
    },
    
    // Importación
    import: {
      validateFormat: true,
      mergeStrategy: "append",    // "append", "replace", "skip"
      backupBeforeImport: true
    }
  },

  // 🏦 BANCO DE ÍTEMS
  itemBank: {
    // Carga automática
    autoLoad: {
      enabled: true,
      primaryPath: "data/items.json",    // Ruta principal del banco
      fallbackPath: null,                // Ruta de respaldo
      timeout: 5000,                     // Timeout para carga (ms)
      retryAttempts: 3                   // Intentos de reintento
    },
    
    // Validación
    validation: {
      strictMode: true,         // Validación estricta de formato
      requireFeedback: true,    // Requerir feedback en cada ítem
      allowMissingFields: ["discrimination", "feedback"],
      maxOptions: 10,           // Máximo de opciones por ítem
      minOptions: 2             // Mínimo de opciones por ítem
    },
    
    // Categorías predefinidas
    categories: [
      { id: "construction", name: "Construcción", color: "#667eea" },
      { id: "validation", name: "Validación", color: "#48bb78" },
      { id: "statistics", name: "Estadística", color: "#ed8936" },
      { id: "irt", name: "TRI", color: "#f56565" },
      { id: "general", name: "General", color: "#9f7aea" }
    ],
    
    // Niveles de dificultad
    difficulty: {
      easy: { name: "Fácil", color: "#48bb78", thetaRange: [-1.5, -0.5] },
      medium: { name: "Medio", color: "#ed8936", thetaRange: [-0.5, 0.5] },
      hard: { name: "Difícil", color: "#f56565", thetaRange: [0.5, 1.5] }
    }
  },

  // 📊 GRÁFICAS Y VISUALIZACIÓN
  charts: {
    // Gráfica de habilidad
    abilityChart: {
      enabled: true,
      type: "line",
      showErrorBand: true,
      showConfidence: true,
      maxPoints: 50,              // Máximo de puntos en la gráfica
      animate: true,
      themeColors: {
        line: "#667eea",
        fill: "rgba(102, 126, 234, 0.1)",
        error: "#f56565"
      }
    },
    
    // Dashboard de resultados
    dashboard: {
      showBankStats: true,
      showTrend: true,
      showPercentiles: false,     // Requiere datos poblacionales
      maxHistoryItems: 10,        // Máximo de elementos en historial
      showExportOptions: true
    }
  },

  // 🎨 UI/UX CONFIGURATION
  ui: {
    // Animaciones
    animations: {
      enabled: true,
      duration: {
        fast: 150,      // Transiciones rápidas
        normal: 300,    // Transiciones normales
        slow: 600       // Transiciones lentas
      },
      easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    
    // Notificaciones
    notifications: {
      enabled: true,
      position: "top-right",      // "top-left", "top-right", "bottom-left", "bottom-right"
      duration: 3000,             // Duración en ms
      maxNotifications: 3,        // Máximo de notificaciones simultáneas
      showProgress: true          // Mostrar barra de progreso
    },
    
    // Responsividad
    responsive: {
      breakpoints: {
        mobile: 768,
        tablet: 1024,
        desktop: 1200
      },
      adaptiveLayout: true,       // Layout adaptativo automático
      touchOptimized: true        // Optimización para touch
    },
    
    // Accesibilidad
    accessibility: {
      highContrast: false,        // Modo alto contraste
      largeText: false,           // Texto grande
      reducedMotion: false,       // Reducir animaciones
      keyboardNavigation: true    // Navegación por teclado
    }
  },

  // 🔧 CONFIGURACIÓN AVANZADA
  advanced: {
    // Debugging
    debug: {
      enabled: false,             // Activar modo debug
      console: false,             // Logs en consola
      performance: false,         // Monitoreo de performance
      verbose: false              // Logs detallados
    },
    
    // Performance
    performance: {
      lazyLoading: true,          // Carga diferida de componentes
      caching: true,              // Cache de cálculos
      batchProcessing: true,      // Procesamiento en lotes
      maxMemory: 50               // MB máximo en memoria
    },
    
    // Seguridad
    security: {
      sanitizeInput: true,        // Sanitizar entrada de usuario
      validateExternalData: true, // Validar datos externos
      allowFileUpload: false,     // Permitir subir archivos
      maxFileSize: 1024           // KB máximo para archivos
    }
  },

  // 🚀 INTEGRACIONES
  integrations: {
    // Backend/Server
    backend: {
      enabled: false,             // Activar integración backend
      type: "supabase",           // "supabase", "firebase", "custom"
      endpoint: null,             // URL del endpoint
      apiKey: null,               // Clave API
      autoSync: false,            // Sincronización automática
      offlineMode: true           // Modo offline
    },
    
    // Analytics
    analytics: {
      enabled: false,             // Google Analytics, etc.
      trackingId: null,
      trackPageViews: false,
      trackUserActions: false
    },
    
    // LMS Integration
    lms: {
      enabled: false,             // Integración con LMS
      type: "moodle",             // "moodle", "canvas", "blackboard"
      config: {}
    }
  },

  // 🏷️ METADATOS Y CONFIGURACIÓN
  metadata: {
    // Información de licencia
    license: {
      type: "MIT",
      url: "https://opensource.org/licenses/MIT",
      copyright: "2025 MiniMax Agent"
    },
    
    // Soporte y contacto
    support: {
      docs: "https://github.com/your-repo/psychemetrics-essence",
      issues: "https://github.com/your-repo/psychemetrics-essence/issues",
      email: null
    },
    
    // Configuración de desarrollo
    development: {
      port: 3000,                 // Puerto de desarrollo
      hotReload: true,            // Recarga automática
      mockData: false,            // Datos de prueba
      testMode: false             // Modo de pruebas
    }
  }
};

// 🎯 CONFIGURACIÓN RÁPIDA POR CASO DE USO
const PRESET_CONFIGS = {
  // Configuración mínima para estudiantes
  student: {
    modes: {
      adaptive: { default: true },
      competitive: { enabled: false }
    },
    psychometrics: {
      adaptive: { minItems: 5, maxItems: 15 }
    },
    ui: {
      notifications: { enabled: false }
    }
  },
  
  // Configuración para investigadores
  researcher: {
    data: {
      storage: { maxAttempts: 1000 },
      export: { anonymize: true }
    },
    psychometrics: {
      adaptive: { minItems: 10, maxItems: 50 }
    },
    charts: {
      dashboard: { showBankStats: true, showPercentiles: true }
    },
    advanced: {
      debug: { enabled: true, performance: true }
    }
  },
  
  // Configuración para uso institucional
  institution: {
    integrations: {
      backend: { enabled: true },
      analytics: { enabled: true }
    },
    security: {
      sanitizeInput: true,
      validateExternalData: true
    },
    data: {
      export: { anonymize: true }
    }
  }
};

// 🔧 FUNCIONES DE UTILIDAD
const ConfigUtils = {
  // Cargar configuración personalizada
  loadCustom: (customConfig) => {
    // Fusión profunda de configuraciones
    return deepMerge(APP_CONFIG, customConfig);
  },
  
  // Aplicar preset
  applyPreset: (presetName) => {
    if (!PRESET_CONFIGS[presetName]) {
      throw new Error(`Preset '${presetName}' no encontrado`);
    }
    return deepMerge(APP_CONFIG, PRESET_CONFIGS[presetName]);
  },
  
  // Validar configuración
  validate: (config) => {
    const errors = [];
    
    // Validaciones básicas
    if (!config.app?.name) errors.push("app.name es requerido");
    if (!Array.isArray(config.itemBank?.categories)) errors.push("categories debe ser array");
    if (config.psychometrics?.adaptive?.minTheta >= config.psychometrics?.adaptive?.maxTheta) {
      errors.push("minTheta debe ser menor que maxTheta");
    }
    
    return { valid: errors.length === 0, errors };
  },
  
  // Exportar configuración
  export: (config = APP_CONFIG) => {
    return {
      ...config,
      _exported: new Date().toISOString(),
      _version: config.app.version
    };
  }
};

// 🛠️ FUNCIÓN DE FUSIÓN PROFUNDA
function deepMerge(target, source) {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  
  return result;
}

// 📤 EXPORTAR PARA USO GLOBAL
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APP_CONFIG, PRESET_CONFIGS, ConfigUtils };
} else {
  window.APP_CONFIG = APP_CONFIG;
  window.PRESET_CONFIGS = PRESET_CONFIGS;
  window.ConfigUtils = ConfigUtils;
}