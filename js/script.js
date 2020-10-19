var balls = document.getElementsByClassName("eyeball")
			document.onmousemove = function() {	
    // event.clientX -> get the horizontal coordinate of onmousemove
    var x = event.clientX * 100 /window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    for (var i = 0; i < 2; i++) {
			balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].style.transform = "translate(-" +x+", -"+y+")"
    }
}

var li_elements = document.querySelectorAll(".jobs ul li");
 for(var i = 0; i < li_elements.length; i++) {
     li_elements[i].addEventListener("click", function() {
         li_elements.forEach(function(li) {
            li.classList.remove("active");
         })
        this.classList.add("active");

        var li_value = this.getAttribute("data-li");
        var id = li_value.charAt(li_value.length-1);
        for(let j = 1; j <= li_elements.length; j++) {
            var element = document.getElementById("panel" + j);
            if(j == id)
                element.style.display = "block";
            else
                element.style.display = "none";
        }
     })
 }