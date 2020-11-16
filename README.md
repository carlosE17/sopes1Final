# sopes1Final

> Carlos Rodrigo Estrada Najarro - 201700314
>
> Desarrollo propuesta examen final de la clase de Sistemas Operativos 1

## Creamos un nuevo Cluster

Para la realizacion de este proceso se utilizo la herramienta de Google cloud, dentro de esta crearemos un nuevo cluster mediante la herramienta que nos provee.

Seguidamente abrimos la consola cloud shell, y le otorgamos las credenciales necesarias para acceder a nuestro cluster

> `gcloud container clusters get-credentials [nombre-cluster] --zone [zona-cluster]`

luego procedemos a clonar este repositorio, para esto utilizamos el comando:

> `git clone https://github.com/carlosE17/sopes1Final.git`

Una vez clonamos el repositorio, procedemos a navegar hasta la carpeta correspondiente a lo que deseamos correr, en nuestro caso haremos esto 2 veces, 1 vez para el servidor (la carpeta **server**), y una vez para la aplicacion web (la carpeta **web/sopes1final**).

una vez dentro de la carpeta deseada procedemos a crear la imagen correspondiente al servidor/aplicacion web mediante el comando:

> `docker build -t gcr.io/$DEVSHELL_PROJECT_ID/[nombre:version] [path-dockerfile]`

seguidamente le damos permisos a las imagenes mediante el comando

> `gcloud auth configure-docker`

subimos las imagenes generadas a gcr, para de este modo poder utilizarlas posteriormente, mediante el comando:

> `docker push gcr.io/$DEVSHELL_PROJECT_ID/[nombre:version]`

verificamos el estado de los nodos mediante:

> `kubectl get nodes`

Realizamos el deploy de las imagenes que generamos mediante:

> `kubectl apply -f [ubicacion-nombre-archivo]`
>
> en nuestro caso como podemos observar serian los archivos deployment.yml y los archivos service.yml
>
> `kubectl apply -f deployment.yml` (desplegar app)
>
> `kubectl apply -f service.yml` (desplegar servicio loadbalancer)

una vez hemos ejecutado lo anterior podemos verificar los servicios y obtener las ip correspondiente a cada uno mediante el comando:

> `kubectl get services`

asi mismo existen otros comandos que nos pueden servir para verificar que todas nuestras configuraciones esten implementadas de forma correcta:

> - ver pods -> `kubect get pods`
> - ver deployments -> `kubectl get deployments`
> - ver servicios -> `kubectl get services`

### ip pagina web

`35.224.33.237`

### ip servidor web

`http://34.122.72.236:5000/`
