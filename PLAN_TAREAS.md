# Plan de tareas propuesto tras revisión rápida del código

## 1) Corregir un error tipográfico en texto visible
**Problema detectado:** En el bloque de contacto se usa la frase "Tus datos quedarán registrados seguramente en nuestro sistema", donde "seguramente" no expresa seguridad de forma adecuada en este contexto institucional.

**Tarea propuesta:** Reemplazar el texto por "Tus datos quedarán registrados de forma segura en nuestro sistema".

**Criterios de aceptación:**
- El texto corregido aparece en `components/Contact.tsx`.
- La redacción comunica seguridad explícita y mantiene tono formal.

---

## 2) Solucionar un fallo de build por recurso inexistente
**Problema detectado:** El build reporta que `/index.css` no existe, pero está referenciado en `index.html`. Esto puede causar estilos inesperados y ruido en CI.

**Tarea propuesta:** Elegir una de estas dos rutas y aplicar una de forma consistente:
1. Crear `index.css` (aunque sea base) y gestionarlo desde el pipeline de estilos.
2. Eliminar la referencia a `/index.css` en `index.html` si no se utilizará.

**Criterios de aceptación:**
- `npm run build` no muestra el aviso sobre `/index.css` inexistente.
- La UI mantiene los estilos esperados tras la corrección.

---

## 3) Corregir discrepancia de documentación
**Problema detectado:** El `README.md` habla de "AI Studio", de `GEMINI_API_KEY` y despliegue asociado, pero el proyecto actual es un sitio React/Vite estático y no consume esa variable.

**Tarea propuesta:** Actualizar el README para que describa la ejecución real del proyecto (instalación, desarrollo, build, preview) y eliminar pasos que no aplican.

**Criterios de aceptación:**
- El README refleja scripts reales definidos en `package.json`.
- No se solicitan variables o integraciones no usadas por el código actual.

---

## 4) Mejorar cobertura de pruebas
**Problema detectado:** No hay pruebas automatizadas para validar navegación interna (anclas/scroll), render de secciones clave o contenido principal.

**Tarea propuesta:** Incorporar pruebas básicas de interfaz con Vitest + React Testing Library para:
- Render de secciones críticas (`#inicio`, `#programas`, `#contacto`).
- Existencia de CTA principal (ej. "¡Dona Ahora!").
- Integridad de enlaces internos del menú.

**Criterios de aceptación:**
- Existe comando de test en `package.json`.
- Al menos 3 pruebas pasan localmente en CI sin dependencia de red.
