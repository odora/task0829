

$(function() {
	
	/*
	mode-chose
	*/
	$( ".mode1 h1").click( function(){
			$(this).toggleClass( "add" );
			$("#pay_type").val("2");
			$(".mode1 .mode_show").toggleClass(".mode1 mode_none");
			$(".mode2 .mode_show").addClass(".mode2 mode_none")
			$(".mode2 h1.add").removeClass( "add" );

	});
	$( ".mode2 h1").click( function(){
			$(this).toggleClass( "add" );
			$("#pay_type").val("1");
			$(".mode2 .mode_show").toggleClass(".mode2 mode_none");
			$(".mode1 .mode_show").addClass(".mode1 mode_none");
			$(".mode1 h1.add").removeClass( "add" );	
	});
	
	
	
	
	
	$( ".cancel").click( function(){
		$(".black,.popup,.popup .cancel-popup").show();
    });
	   
	$( ".popup .cancel-popup .confirm").click( function(){
			$(".black,.popup .cancel-popup,.popup").hide();
	   });
	$( ".popup .cancel-popup .return").click( function(){
		$(".black,.popup .cancel-popup,.popup").hide();
    });
	
	
	
	
	
	$( ".done").click( function(){
			$(".black,.popup,.popup .submission-popup").show();
	   });
	
	$( ".popup .submission-popup .confirm").click( function(){
			$(".black,.popup .submission-popup,.popup").hide();
	   });
	$( ".popup .submission-popup .return").click( function(){
			$(".black,.popup .submission-popup,.popup").hide();
	   });
	
	
	
	
  $(document).ready(function(){  
	   $("#target").text( $('#equal_cny').html().replace(/,/g,''))
       var clipboard = new Clipboard('#copy_btn');    
	    console.log(clipboard)
        clipboard.on('success', function(e) {    
            alert("复制成功",1500);    
            e.clearSelection();    
            console.log(e.clearSelection);    
        });   
   clipboard.on('error', function(e) {
        console.log(e);
    });
         
       var clipboard = new Clipboard('#copy_btn1');    
        clipboard.on('success', function(e) {    
            alert("复制成功",1500);    
            e.clearSelection();    
            console.log(e.clearSelection);    
        });   
		
		
		 var clipboard = new Clipboard('#copy_btn2');    
        clipboard.on('success', function(e) {    
            alert("复制成功",1500);    
            e.clearSelection();    
            console.log(e.clearSelection);    
        });   
		
		
		 var clipboard = new Clipboard('#copy_btn3');    
        clipboard.on('success', function(e) {    
            alert("复制成功",1500);    
            e.clearSelection();    
            console.log(e.clearSelection);    
        });   
		
		
		 var clipboard = new Clipboard('#copy_btn4');    
        clipboard.on('success', function(e) {    
            alert("复制成功",1500);    
            e.clearSelection();    
            console.log(e.clearSelection);    
        });  
		
		
		 var clipboard = new Clipboard('#copy_btn5');   
		 
        clipboard.on('success', function(e) {    
            alert("复制成功",1500);    
            e.clearSelection();    
            console.log(e.clearSelection);    
        });  
		
 /**/
		 
    });    

	
});

