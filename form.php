<?php
if (!isset($_POST['pedrogarciaflores2@gmail.com'])) {
?>
  <form action="<?=$_SERVER['PHP_SELF']?>" method="post">
    <input type="reset" value="cancelar" />
    <input type="submit" value="enviar" />
  </form>
<?php
}else{
  $mensaje.= "\nMensaje: \n".$_POST['mensaje'];
  $destino= "pedrogarciaflores2@gmail.com";
  mail($mensaje);
?>
  <p><strong>Mensaje enviado.</strong></p>
<?php
}
?>
