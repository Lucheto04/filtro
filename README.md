# Tokens.


Cada tabla tiene su respectivo token, por lo que para realizar la consulta se tiene que asegurar de generar el token de la tabla correspontiende, los tokens disponibles son los siguientes.
```
http://127.10.10.10:5000/token?tabla=alquileres
http://127.10.10.10:5000/token?tabla=automoviles
http://127.10.10.10:5000/token?tabla=clientes
http://127.10.10.10:5000/token?tabla=empleados
```



# Endpoints.



### tabla 'Cliente'.

Punto 2:  ``` http://127.10.10.10:5000/clientes/todos```

Punto 5:  ``` http://127.10.10.10:5000/clientes/pendientes```

Punto 10:  ``` http://127.10.10.10:5000/clientes/:'DNI'```, El 'DNI' se debe cambiar por el numero en el cual realizaremos la consulta por ejemplo ` 12345678`

Punto 20:  ``` http://127.10.10.10:5000/clientes/especifico/:'id'``` , El 'id' se debe cambiar por en el cual realizaremos la consulta por ejemplo `1`

### tabla 'Empleado'.

Punto 7:  ``` http://127.10.10.10:5000/empleados/vendedores```

Punto 14:  ``` http://127.10.10.10:5000/empleados/cargo/"cargo"```, El "cargo" entre comillas lo debemos cambiar por el cargo en el que queremos realizar la consulta por ejemplo `"Asistente" `, tambien se tiene que dejar en las comillas para que funcione, como esta en el ejemplo.

### tabla 'Automovil'.

Punto 3:  ``` http://127.10.10.10:5000/automoviles/disponibles```

Punto 8:  ``` http://127.10.10.10:5000/automoviles/sucursal/:'id'```, El campo 'id' lo cambiamos por el id en el que vamos a hacer la consulta, por ejemplo `1`

Punto 11:  ``` http://127.10.10.10:5000/automoviles/capacidad-mayor```

Punto 16:  ``` http://127.10.10.10:5000/automoviles/orden```

### tabla 'Alquiler'.

Punto 4:  ``` http://127.10.10.10:5000/alquileres/activos```

Punto 6:  ``` http://127.10.10.10:5000/alquileres/:'id'```, El campo 'id' lo cambiamos por el id en el que vamos a hacer la consulta, por ejemplo `1`

Punto 9:  ``` http://127.10.10.10:5000/alquileres/costo_total/:id```, El campo 'id' lo cambiamos por el id en el que vamos a hacer la consulta, por ejemplo `1`

Punto 12:  ``` http://127.10.10.10:5000/alquileres/fecha_especifica```

