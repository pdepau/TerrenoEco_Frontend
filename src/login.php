<!DOCTYPE html>
<html lang="es">
<html>
  <head>
	<title>Example Login Form</title>
  </head>
  <body>
    <script src="js/proxy.js"></script>
	<form action="javascript:iniciarSesion()" method="post" enctype="multipart/form-data">
  	<!-- user input-->
  	Correo:<br>
  	<input type="text" name="correo" placeholder="Correo" required><br><br>
  	Contraseña:<br>
  	<input type="password" name="password" placeholder="Contraseña" required><br><br>
  	<!-- submit button -->
      <button type="submit">
          Iniciar sesión
      </button>
	</form>
  </body>


</html>