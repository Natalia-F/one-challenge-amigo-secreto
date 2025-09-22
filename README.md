# Proyecto Amigo Secreto
## ¿De qué trata el proyecto?
Amigo Secreto es una aplicación web que te permite organizar un sorteo para asignar amigos secretos. 
Es perfecto para celebraciones o cualquier ocasión especial donde quieras hacer un sorteo aleatorio entre un grupo de personas.

## Características principales:
- Validaciones para evitar nombres duplicados o vacíos
- Sorteo aleatorio sin repeticiones
- Lista visual de participantes

## Cómo ejecutar el proyecto con Live Server
Opción 1: 

Usando la extensión Live Server (Recomendado)

Instala Live Server (si no lo tienes)
Ve a la pestaña de Extensiones en VS Code (Ctrl+Shift+X)
Busca "Live Server"
Instala la extensión de Ritwick Dey
Ejecuta el proyecto:

Abre el archivo index.html en VS Code
Haz clic derecho sobre el archivo
Selecciona "Open with Live Server"
Tu navegador se abrirá automáticamente con la aplicación

Opción 2: Desde el explorador de archivos
Haz clic derecho en el archivo index.html en el explorador de VS Code
Selecciona "Open with Live Server"
El proyecto se ejecutará en http://127.0.0.1:5500 o un puerto similar.

## Instrucciones de cómo jugar

- Escribe el nombre de un amigo en el campo de texto
- Haz clic en el botón "Añadir"
- El nombre aparecerá en la lista de participantes
- Repite este proceso para todos los participantes

## Validaciones automáticas:

- No puedes agregar nombres vacíos
- No puedes agregar el mismo nombre dos veces
- Necesitas al menos 2 participantes para hacer el sorteo

## Realizar el sorteo:

Haz clic en el botón "Sortear amigo" (con el ícono de play)
La aplicación seleccionará aleatoriamente un participante
El resultado aparecerá debajo del botón

## Sorteos múltiples:

Puedes seguir haciendo sorteos hasta que todos hayan salido
Cada persona solo puede ser sorteada una vez
Cuando todos hayan sido sorteados, la aplicación se reiniciará automáticamente

## Reiniciar:

El juego se reinicia automáticamente cuando todos han sido sorteados
Puedes empezar un nuevo sorteo agregando participantes nuevamente
