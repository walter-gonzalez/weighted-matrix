(function() {

    //Variables para toda la app...
    var designsCount = 2;
    var criteriasCount = 1;
    var maxDesigns = 5; 
    var maxCriterias = 10; 

    //Guardo los botones...
    var addCriteriaBtn = document.getElementById("add-criteria");
    var addDesignBtn = document.getElementById("add-design");

    //Guardo celdas editables...
    var cells = document.querySelectorAll('input.matrix-cell');
    for (item of cells) {
        item.addEventListener('change', recalculateAllScores);
    }

    //Si cambio el peso de un criterio...
    function recalculateAllScores() {
        console.log('recalculo toda la fila del criterio');
    }

    //Si cambio el rating de un criterio para un diseño...
    function recalculateDesignScore() {
        console.log('recalculo el total para ese diseno en particular');
    }

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
            var newCriteriaWeightInput = document.createElement("input");

            newCriteriaTitle.appendChild(document.createTextNode("Criterio " + criteriasCount));
            newCriteriaTitle.setAttribute('contenteditable', 'true');
            newCriteriaTitle.classList.add("matrix-cell");
            
            newCriteriaWeightInput.setAttribute('type', 'number');
            newCriteriaWeightInput.setAttribute('value', '0');
            newCriteriaWeightInput.classList.add('matrix-cell');

            newCriteriaWeight.setAttribute('height', '60');
            newCriteriaWeight.appendChild(newCriteriaWeightInput);
            
            newCriteriaDefaults.appendChild(newCriteriaTitle);
            newCriteriaDefaults.appendChild(newCriteriaWeight);
            
            //Creación del nuevo criterio...
            var tr = document.createElement('tr');
            tr.classList.add("matrix-criteria-row");
            tr.appendChild(newCriteriaDefaults);
   
            for (i = 1; i <= designsCount * 2; i++) {
                var defaultStat = document.createElement("td");
                defaultStat.setAttribute('height', '60');
                var defaultStatInput = document.createElement('input');

                defaultStatInput.setAttribute('type', 'number');
                defaultStatInput.setAttribute('value', '0');
                defaultStatInput.classList.add("matrix-cell");
                
                //Si es una celda de score, deshabilito la edicion...
                if (i % 2 == 0) {
                    defaultStatInput.setAttribute('disabled', 'true');
                }

                defaultStat.appendChild(defaultStatInput);

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

            //Aumento cantidad de diseños +1...
            designsCount += 1;

            //Agrego el titulo del diseno...
            var designsRow = document.querySelector(".matrix-designs-row");
            var newDesignTitle = document.createElement('td');
            newDesignTitle.innerHTML = 'Diseño ' + designsCount;
            newDesignTitle.classList.add('matrix-cell');
            newDesignTitle.setAttribute('colspan', '2');
            newDesignTitle.setAttribute('contenteditable', 'true');
            designsRow.appendChild(newDesignTitle);

            //Agrego nueva linea de titulos...
            var titlesRow = document.querySelector(".matrix-titles-row");
            var titleRating = document.createElement('td');
            var titleScore = document.createElement('td');
            titleRating.innerHTML = 'Rating';
            titleScore.innerHTML = 'Score';
            titleRating.classList.add('matrix-cell');
            titleScore.classList.add('matrix-cell');
            titlesRow.appendChild(titleRating);
            titlesRow.appendChild(titleScore);

            var criteriasRows = document.querySelectorAll('.matrix-criteria-row');
            
            //Agrego valores por defecto de rating y score para cada criterio...
            for (i = 0; i < criteriasRows.length; i++) {
                   
                for (j = 1; j <= 2; j++) {
                    var defaultStat = document.createElement("td");
                    defaultStat.setAttribute('height', '60');
                    var defaultStatInput = document.createElement('input');

                    defaultStatInput.setAttribute('type', 'number');
                    defaultStatInput.setAttribute('value', '0');
                    defaultStatInput.classList.add("matrix-cell");
                    
                    //Si es una celda de score, deshabilito la edicion...
                    if (j % 2 == 0) {
                        defaultStatInput.setAttribute('disabled', 'true');
                    }

                    defaultStat.appendChild(defaultStatInput);

                    criteriasRows[i].appendChild(defaultStat);
                }
                
            }

            //Agrego valores por defecto para fila de totales...
            var totalsRow = document.querySelector('.matrix-score-row');
            var totalDefault = document.createElement('td');
            totalDefault.classList.add('matrix-cell');
            totalDefault.innerHTML = '0';
            totalDefault.setAttribute('colspan', '2');
            totalsRow.appendChild(totalDefault);
            
        }

    }

    //Listeners para botones...
    addCriteriaBtn.addEventListener("click", addCriteria);
    addDesignBtn.addEventListener("click", addDesign);

    }()
);