$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;

        if(event.data.showhud == false){
            $('.container').show();
        }

        if (event.data.action == "updateStatus") {
            updateStatus(event.data.st);
        }

        if (data.armor > 0 ) {
            $("#boxArmor").css("width", data.armor + "%"); 
            $("#armor").css("left", "1.7vw"); 
            $("#heal").css("left", "5.3vw"); 
            $("#hunger").css("left", "8.9vw"); 
            $("#thirst").css("left", "12.6vw"); 
            $("#stamina").css("left", "16.3vw"); 
            $('#heal').show(); 
            $('#stamina').show(); 
            $('#boxHeal').show(); 
            $('#boxArmor').show(); 
            $('#armor').show(); 
            $('#boxThirst').css('width', (event.data.bebida) + "%");
            $('#boxHunger').css('width', (event.data.comida) + "%");
            $('#boxStamina').css('width', (event.data.stamina) + "%");
            if (data.stamina == 100 ) {
                $('#stamina').fadeOut();
                $('#stamina').hide(); 
            }
            else if (data.stamina < 100 ) {
                $('#stamina').fadeIn();
                $('#stamina').show(); 
            }

        }
    else
        if (data.armor == 0 ) {
            $("#boxHeal").css("width", data.health + "%"); 
            $("#heal").css("left", "2.3vw"); 
            $("#hunger").css("left", "5.9vw"); 
            $("#thirst").css("left", "9.6vw"); 
            $("#stamina").css("left", "13.3vw"); 
            $('#boxArmor').hide(); 
            $('#stamina').show(); 
            $('#armor').hide(); 
            $('#heal').show(); 
            $('#boxHeal').show(); 
            $('#boxThirst').css('width', (event.data.bebida) + "%");
            $('#boxHunger').css('width', (event.data.comida) + "%");
            $('#boxStamina').css('width', (event.data.stamina) + "%");
            if (data.stamina == 100 ) {
                $('#stamina').fadeOut();
                $('#stamina').hide(); 
            }
            else if (data.stamina < 100 ) {
                $('#stamina').fadeIn();
                $('#stamina').show(); 
            }
        }

        // if (event.data.incar == "false") {
        //     $("#armor").css("left", "1.7vw"); 
        //     $("#heal").css("left", "5.3vw"); 
        //     $("#hunger").css("left", "8.9vw"); 
        //     $("#thirst").css("left", "12.6vw"); 
        //     $("#stamina").css("left", "16.3vw"); 
        // }
        // else if (event.data.incar == "true") {
        //     $("#armor").css("left", "2.7vw"); 
        //     $("#heal").css("left", "6.3vw"); 
        //     $("#hunger").css("left", "9.9vw"); 
        //     $("#thirst").css("left", "13.6vw"); 
        //     $("#stamina").css("left", "17.3vw"); 
        // }
       
    })
})


