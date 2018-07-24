$( document ).ready(function() {

      console.log( "Hello" );
	   console.log( "how are you" );
	   console.log("oh good");
	   console.log("have a great day");
	   console.log("ok bye");
	   
      $( "button" ).click(function() {
       	       console.log( "clicked" );
			  $( "h1" ).css("text-align", "center");
			  
			  var name = $("#first_name").val();
			  console.log(name);
			  
			  var age = $("#age").val(); 
			  console.log(age);
	   });
	   
	   
	   $( "button" ).click(function() {
       	    console.log( "yay" );
			  $( "body" ).css("background-image","url(https://sep.yimg.com/ay/blaircandy/dark-purple-mini-chocolate-balls-2-1-2lb-sixlets-43.jpg");
	   });
	  
	   $(".carbs" ).click(function() {
	       console.log( 'clicked carbs!' );
	   });
	   
	   
	   $( "#strawberries" ).click(function() {
	      console.log( "#strawberries" );   
	      $( "#strawberries" ).css("font-size", "72px");
	   });
	   
	   
});

        var a = 13;
		var b = 2;
		var c = 0;
		
		console.log(a);
		console.log(b);
		console.log(c);
		
		c = a + b;
		
		console.log(c);
		
		var numOfApples = 0;
		numOfApples = a + b;
		
		var sentence1 = "i like pop , ";
		var sentence2 = "i like cookies and ";
		var sentence3 = "you have " + numOfApples +
		" apples. ";
		var paragraph = sentence1 + sentence2 + sentence3;
		
		console.log(paragraph);