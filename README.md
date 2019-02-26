# Curso de React Native de Platzi

En este curso se va a llevar a cabo una aplicación para buscar películas y ver su descripción así como su trailer.

## Instalación

Lo primero que debemos tomar en cuenta es tener instaladas las librerías necesarias en tu computadora. Para este proyecto se utilizará una Mac, por tanto lo quedebemos tener instalado, previo a iniciar con todo, es lo siguiente:

1. Node
2. Watchman
   1. En el caso de Watchman, se recomienda instalarlo a través de **Brew**

`brew install watchman`

Ya con lo anterior, debemos instalar (de manera global) el `cli` de *React Native*.

`npm install -g react-native`

Ahora es momento de crear nuestra aplicación, para ello es necesario hacer en tu Terminal:

`react-native <nombre de tu proyecto en camelCase mode>`

Accedes a tu carpeta creada por react-native y puedes arrancar tu app con cualquiera de los siguientes comandos:

`react-native run-ios`

o

`react-native run-android`

**NOTA!** Puede que tu ESLint te marque algunos errores en archivos JavaScript. Corrígelos para continuar trabajando bajo buenas prácticas.

## Cambiando el fondo en iOS

Hay un detalle que ocurre al querer manejar una estructura propia para tu aplicación, y es que al eliminar los componentes por default de `App.js` la pantalla del simulator de iPhone se pone negra.

Para arreglar eso, nos dirijimos al archivo `AppDelegate.m` (lo puedes hacer desde tu editor de código o desde XCode), lo puedes encontrar en:

**./ios/*yourApp*/AppDelegate.m**

Dentro del archivo, busca las siguientes líneas de código:

```objc
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                               moduleName:@"platziVideoApp"
                                               initialProperties:nil
                                               launchOptions:launchOptions];
  rootView.backgroundColor = [UIColor blackColor];
```

Y comenta la última línea:

`// rootView.backgroundColor = [UIColor blackColor];`

## API de películas a usar

La API que se usa en este proyecto es [YTS](https://yts.am/api), y el endpoint que se eligió para esto es:

`https://yts.am/api/v2/list_movies.json`

**NOTA!** Hay un momento en la App cuando creamos el archivo `api.js` en el folder `/utils` que la app parece crashearse. Te recomiendo que acabes el proceso que tienes de la app (`ctrl + c`) y lo vuelvas a correr (`react-native run-ios`).