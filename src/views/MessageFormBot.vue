
<template>

<h1>Write the message</h1>
<br> 

<form action="/action_page.php" id="usrform">
    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
    <br>
    <input type="submit"><br><br><br><br><br>
    </form>
        
<form action="/action_page.php" id = "timeform">
    <h1>Message to be sent</h1>
    <input type="text" id="msg" name="msg"><br><br>
    <h1>Select a time</h1>
    <input type="time" id="appt" name="appt"><br>
    <input type="submit">
</form>

</template>



