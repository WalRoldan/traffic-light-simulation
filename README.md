# 🚦 Traffic Light Simulation

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

## Descripción

Este proyecto simula el comportamiento de autos que se desplazan en una carretera con semáforos, respetando las reglas de tráfico de cada semáforo (verde, naranja, rojo). Los autos se mueven de izquierda a derecha a lo largo de la carretera en base a las reglas de tráfico definidas.

## 📜 Instrucciones

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/WalRoldan/traffic-light-simulation.git
   cd traffic-light-simulation
   ```

2. **Instalar dependencias:**

   Asegúrate de tener **Node.js** instalado en tu sistema, luego ejecuta:

   ```bash
   npm install
   ```

3. **Ejecutar la simulación:**

   Para correr la simulación y ver el resultado:

   ```bash
   node index.js
   ```

   Puedes cambiar los parámetros de la simulación en el archivo `index.js` para probar con diferentes carreteras o tiempos de simulación.

4. **Correr los tests:**

   Este proyecto incluye un conjunto de tests unitarios para asegurar el correcto funcionamiento de la lógica de los autos, semáforos y la simulación en general.

   Para correr los tests:

   ```bash
   npm test
   ```

## 🏗️ Estructura del Proyecto

- **index.js**: Archivo principal donde se ejecuta la simulación.
- **src/**: Contiene la lógica principal del proyecto, dividida en módulos:
  - **car.js**: Lógica relacionada con el comportamiento de los autos.
  - **trafficLight.js**: Lógica relacionada con los semáforos.
  - **simulation.js**: Lógica que coordina el movimiento de los autos y la actualización de los semáforos.
- **tests/**: Tests unitarios para asegurar el funcionamiento del proyecto, usando Jest.

## 🔧 Tecnologías Usadas

- **Node.js**: Para la ejecución del proyecto.
- **Jest**: Para los tests unitarios.

## 📊 Ejemplo de Simulación

Para el siguiente estado inicial del camino:

```
CCC.G...R...
```

Con una simulación de 16 unidades de tiempo, la salida será:

```plaintext
[
  "CCC.G...R...", // 0 initial state
  ".CCCG...R...", // 1
  "..CCC...R...", // 2
  "..CCGC..R...", // 3
  "...CC.C.R...", // 4
  "...COC.CG...", // 5
  "...CR.C.C...", // 6
  "...CR..CGC..", // 7
  "...CR...C.C.", // 8
  "...CR...GC.C", // 9
  "...CR...O.C.", // 10
  "....C...R..C", // 11
  "....GC..R...", // 12
  "....G.C.R...", // 13
  "....G..CR...", // 14
  "....G..CR...", // 15
  "....O...C..."  // 16
]
```

## 🚀 Mejoras Futuras

- Añadir soporte para carreteras más largas o con más autos.
- Optimizar el manejo de semáforos y autos en carreteras con intersecciones más complejas.

## 🤝 Contribuciones

Este es un proyecto simple para simular lógica de tráfico, pero siéntete libre de contribuir mejoras o sugerencias. ¡Toda contribución es bienvenida!
