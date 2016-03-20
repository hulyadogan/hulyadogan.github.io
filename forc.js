var timer;
var elemID = "#disp";
var id=0;
//var numbers="#numbers"<10;
/*
 * Waiting for the HTML page to load and being notified by jQuery.
 * Upon notification run the unnamed callback function.
 */
$().ready(function() {
    var top;
    var left;
    for(var i=0; i<10; i++) {
        left = Math.floor((Math.random() * 700) + 1);
        top = Math.floor((Math.random() * 500) + 1);
        //numbers= i<10;
        $(elemID).append(   
         "<div id='" + i + "' class='outlook' style='top:"
         + top + "px; left:" + left + "px;'>" +
         i + "</div>");
    }
    
    timer = setInterval(function() {
        
        changeTime();
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);   
        $("#0").css("left",left+"px");
        $("#0").css("top",top+"px");
        $("#0").css("background-color","violet");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#1").css("left",left+"px");
        $("#1").css("top",top+"px");
        $("#1").css("background-color","bisque");
         
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#2").css("left",left+"px");
        $("#2").css("top",top+"px");
        $("#2").css("background-color","darkseagreen");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#3").css("left",left+"px");
        $("#3").css("top",top+"px");
        $("#3").css("background-color","aquamarine");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#4").css("left",left+"px");
        $("#4").css("top",top+"px");
        $("#4").css("background-color","darkkhaki");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#5").css("left",left+"px");
        $("#5").css("top",top+"px");
        $("#5").css("background-color","darkgrey");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#6").css("left",left+"px");
        $("#6").css("top",top+"px");
        $("#6").css("background-color","goldenrod");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#7").css("left",left+"px");
        $("#7").css("top",top+"px");
        $("#7").css("background-color","orchid");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#8").css("left",left+"px");
        $("#8").css("top",top+"px");
        $("#8").css("background-color","darksalmon");
        
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#9").css("left",left+"px");
        $("#9").css("top",top+"px");
        $("#9").css("background-color","khaki");
        
        id++;
    },1000);
    
    function changeTime(){
        $("#0,#1,#2,#3,#4,#5,#6,#7,#8,#9").html(id);
    }
});

                
                
 