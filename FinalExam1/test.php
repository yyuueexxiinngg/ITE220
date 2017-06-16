<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
<form id="message_form" method="get">
        username:<br />
                <input type="text" name="username" id="username"/>
    <br />
        message:<br />
                <input type="text" name="message" id="message"/>
                <input type="button" id="submit_message" value="send" onClick="messageGo()"/>

    </table>
</form>
<script>function messageGo(){
        var username = $('#username').val();
        var message = $('#message').val();
        console.log(message)
        $.ajax({
            url:"point.php",
           data: {username:username,message:message},
           // data:"&message="+message+"&username="+username,
            type : "POST",
            dataType:'json',
            error:function(){
                alert("error");

            },
            success:function(){
                alert("success");
            }
        });

    };</script>