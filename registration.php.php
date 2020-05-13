<?php     //start php tag
//include connect.php page for database connection
Include('connect.php')
//if submit is not blanked i.e. it is clicked.
If(isset($_REQUEST['submit'])!='')
{
If($_REQUEST['username']==''  || $_REQUEST['password']=='')
{
Echo "please fill the empty field.";
}
Else
{
$sql="insert into cake (username,password) values('".$_REQUEST['username']."',  '".$_REQUEST['password']."')";
$res=mysql_query($sql);
If($res)
{
Echo "Record successfully inserted";
}
Else
{
Echo "There is some problem in inserting record";
}

}
}

?>