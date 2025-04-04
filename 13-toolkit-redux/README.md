# Guía de Estilos en React: styled‑jsx vs CSS Modules

Este documento explica dos métodos para aplicar estilos en tus componentes React: utilizando **styled‑jsx** y **CSS Modules**. Elige el que mejor se adapte a tus necesidades.

---

## Uso de styled‑jsx

Para aprovechar `<styled jsx>`, sigue estos pasos:

1. **Configurar Tipado (TypeScript):**

   Crea un archivo llamado `custom.d.ts` en la raíz de tu proyecto (o en la carpeta de tipos) e incluye el siguiente código para extender las propiedades de estilo en React:

   ```typescript
   import 'react';

   declare module 'react' {
     interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
       jsx?: boolean;
       global?: boolean;
     }
   }
   ```

2. **Ejemplo de Uso:**

   Dentro de tu componente, puedes definir estilos específicos usando `<style jsx>`. Por ejemplo, para personalizar un input tipo range:

   ```typescript
   <style jsx>{`
     input[type='range']::-webkit-slider-thumb {
       -webkit-appearance: none;
       appearance: none;
       width: 16px;
       height: 16px;
       border-radius: 50%;
       background: #06b6d4;
       box-shadow: 0 0 10px rgba(6, 182, 212, 0.7);
       cursor: pointer;
     }
     input[type='range']::-moz-range-thumb {
       width: 16px;
       height: 16px;
       border-radius: 50%;
       background: #06b6d4;
       box-shadow: 0 0 10px rgba(6, 182, 212, 0.7);
       cursor: pointer;
     }
   `}</style>
   ```

> _styled‑jsx te permite definir estilos scoped a un componente, lo que ayuda a evitar conflictos globales._

---

## Uso de CSS Modules

Si prefieres separar los estilos en archivos independientes y utilizar un scope local, CSS Modules es la opción ideal. Sigue estos pasos:

1. **Crear el Archivo CSS:**

   Crea un archivo con extensión `.module.css` (por ejemplo, `App.module.css`) y define allí tus estilos. Un ejemplo para un input tipo range:

   ```css
   /* App.module.css */
   .rangeInput {
     -webkit-appearance: none;
     appearance: none;
     /* Otras propiedades base que necesites */
   }

   .rangeInput::-webkit-slider-thumb {
     -webkit-appearance: none;
     appearance: none;
     width: 16px;
     height: 16px;
     border-radius: 50%;
     background: #06b6d4;
     box-shadow: 0 0 10px rgba(6, 182, 212, 0.7);
     cursor: pointer;
   }

   .rangeInput::-moz-range-thumb {
     width: 16px;
     height: 16px;
     border-radius: 50%;
     background: #06b6d4;
     box-shadow: 0 0 10px rgba(6, 182, 212, 0.7);
     cursor: pointer;
   }
   ```

2. **Tipado de Módulos CSS (opcional pero recomendado):**

   En proyectos TypeScript, es aconsejable tipar las importaciones de los módulos CSS para evitar errores y aprovechar el autocompletado. Para ello, crea un archivo de declaración (por ejemplo, `global.d.ts` o `declarations.d.ts`) y añade el siguiente contenido:

   ```typescript
   declare module '*.module.css' {
     const classes: { [key: string]: string };
     export default classes;
   }
   ```

3. **Importar el Módulo en el Componente:**

   En el archivo de tu componente, importa los estilos definidos en el archivo CSS:

   ```tsx
   import styles from './App.module.css';
   ```

4. **Aplicar las Clases en el JSX:**

   Asigna la clase definida a tu elemento. Por ejemplo, para un input tipo range:

   ```tsx
   <input
     type="range"
     min="1"
     max="100"
     value={incrementBy}
     onChange={(e) => setIncrementBy(Number.parseInt(e.target.value))}
     className={styles.rangeInput}
     style={{
       WebkitAppearance: 'none',
       appearance: 'none',
     }}
   />
   ```

   > _Nota:_ Puedes definir la mayoría de las propiedades en el archivo CSS. El objeto `style` se utiliza para propiedades dinámicas o excepcionales que no quieras trasladar a CSS.

---

## Resumen

- **styled‑jsx:**  
  Ideal si deseas definir estilos directamente en el componente con un scope limitado y sin necesidad de archivos externos.

- **CSS Modules:**  
  Perfecto para mantener los estilos en archivos separados, evitando conflictos globales y mejorando la organización del código. Además, la tipificación de módulos CSS en TypeScript mejora la experiencia de desarrollo.

Elige la metodología que mejor se alinee con tu flujo de trabajo y la arquitectura de tu proyecto.
