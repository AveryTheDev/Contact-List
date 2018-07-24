// Hides values not desired by using style.display property of DOM
 
        // Get input element
        let filterInput = document.getElementById("filterInput");
        //Get names ul 
        let ul = document.getElementById("names");
        //Get li from ul 
        let li = ul.querySelectorAll("li.collection-item");

        //Add event listener
        filterInput.addEventListener("keyup", filterNames);

        function filterNames() {
            //get value of input
            let filterValue = filterInput.value.toUpperCase();
            //loop through collection-items lis
            for (let i = 0; i < li.length; i++) {
                let a = li[i].getElementsByTagName("a")[0];
                //If matches
                if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
