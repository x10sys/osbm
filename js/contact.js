$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "http://indel-zastita.hr/564145610545054685650/apartman-ivana.hr_contact.php";
			
		//dodano radi drugih servera, ukloniti
		document.getElementById("messages").style.padding = "10px";
		document.getElementById('messages').innerHTML = 'Your message has been sent. Thank you!';
		//document.getElementById("contact-form").style.visibility = "hidden";
		//document.getElementById("contact-form").style.height = "0";
		document.getElementById("submit").disabled = true;
		

		  
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
	   }
	   
    })
});