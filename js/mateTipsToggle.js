
if ($(window).width()>=878){

    $("#matetip1").click(()=> {
        $("#tip1").show("fast");
        $("#tip2").hide("fast");
        $("#tip3").hide("fast");
        $("#matetip2").hide("fast");
        $("#matetip3").hide("fast");
        
    })
    
    $("#matetip2").click(()=> {
        $("#tip2").show("fast");
        $("#tip1").hide("fast");
        $("#tip3").hide("fast");
        $("#matetip1").hide("fast");
        $("#matetip3").hide("fast");
        
    });
    
    $("#matetip3").click(()=> {
        $("#tip3").show("fast");
        $("#tip2").hide("fast");
        $("#tip1").hide("fast");
        $("#matetip2").hide("fast");
        $("#matetip1").hide("fast");    
    });
    
    // BOTÓN PARA CERRAR EL MATE TIP DESPLEGADO
    $(".tipDesplegado__cerrar").click(()=> {
        $("#tip1").hide("fast");
        $("#tip2").hide("fast");
        $("#tip3").hide("fast");
        $("#matetip1").show("fast");
        $("#matetip2").show("fast");
        $("#matetip3").show("fast");   
    });
    

} 
// CONDICIONAL PARA PANTALLAS PEQUEÑAS DONDE CAMBIA LA INTERFAZ A TOGGLE
else {

    $("#matetip1").click(()=> {
        $("#tip1").toggle("fast");
        $("#tip2").hide("fast");
        $("#tip3").hide("fast");      
        
    });

    $("#matetip2").click(()=> {
        $("#tip2").toggle("fast");
        $("#tip1").hide("fast");
        $("#tip3").hide("fast");      
        
    });

    $("#matetip3").click(()=> {
        $("#tip3").toggle("fast");
        $("#tip2").hide("fast");
        $("#tip1").hide("fast");      
        
    })

    // BOTÓN PARA CERRAR EL MATE TIP DESPLEGADO
    $(".tipDesplegado__cerrar").click(()=> {
        $("#tip1").hide("fast");
        $("#tip2").hide("fast");
        $("#tip3").hide("fast");   
    });

}


