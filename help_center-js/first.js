// Function to toggle responsive navigation menu and additional sections box
	  function myFunctions() {
	    var x = document.getElementById("myTopnav").getElementsByTagName("ul")[0];
	    var additionalSections = document.getElementById("additional-sections");
	    if (x.className === "") {
	      x.className = "responsive";
	      additionalSections.classList.add("show");
	    } else {
	      x.className = "";
	      additionalSections.classList.remove("show");
	    }
	  }