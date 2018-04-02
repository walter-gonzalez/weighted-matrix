/*(function() {*/

    //Variables para toda la app...
    var designsCount = 2;
    var criteriasCount = 1;
    var maxDesigns = 5; 
    var maxCriterias = 10; 

    //Guardo los botones...
    var addCriteriaBtn = document.getElementById("add-criteria");
    var addDesignBtn = document.getElementById("add-design");

    //Agregar criterio...
    function addCriteria() {

        if (criteriasCount >= maxCriterias) {
            alert("El máximo de criterios es " + maxCriterias);
        } else {

            //Agrego uno a la cantidad de criterios...
            criteriasCount += 1;

            //Averiguo cual es el último criterio...
            var criteriasRows = document.querySelectorAll(".matrix-criteria-row");
            var lastCriteria = criteriasRows[criteriasRows.length - 1];

            //Creo fragmento de DOM para el nuevo criterio...
            var newCriteria = document.createDocumentFragment();
            var newCriteriaDefaults = document.createDocumentFragment();
            
            //Celdas por defecto del nuevo criterio...
            var newCriteriaTitle = document.createElement("td");
            var newCriteriaWeight = document.createElement("td");

            newCriteriaTitle.appendChild(document.createTextNode("Criterio " + criteriasCount));
            newCriteriaWeight.appendChild(document.createTextNode("0"));
            newCriteriaTitle.classList.add("matrix-cell");
            newCriteriaWeight.classList.add("matrix-cell");
            
            newCriteriaDefaults.appendChild(newCriteriaTitle);
            newCriteriaDefaults.appendChild(newCriteriaWeight);
            
            //Creación del nuevo criterio...
            var tr = document.createElement('tr');
            tr.classList.add("matrix-criteria-row");
            tr.appendChild(newCriteriaDefaults);
   
            for (i = 1; i <= designsCount * 2; i++) {
                var defaultStat = document.createElement("td");
                defaultStat.appendChild(document.createTextNode("0"));
                defaultStat.classList.add("matrix-cell");
                tr.appendChild(defaultStat);
            }

            newCriteria.appendChild(tr);
            lastCriteria.after(newCriteria);
        }

    }

    //Agregar diseños...
    function addDesign() {

        if (designsCount >= maxDesigns) {
            alert("El máximo de diseños es " + maxDesigns);
        } else {
            designsCount += 1;
            alert("Diseño agregado!");
        }

    }

    //Listeners para botones...
    addCriteriaBtn.addEventListener("click", addCriteria);
    addDesignBtn.addEventListener("click", addDesign);






    /*}()
);*/