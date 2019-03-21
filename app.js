(function() {

var matrix = {
    //Data
    description : '<strong>Descripción:</strong> Breve descripción opcional de la matriz y el proyecto.',
    designsCount : 0,
    criteriasCount : 0,
    maxDesigns : 5,
    maxCriterias : 10,
    criterias : [],
    designs : [],
    
    //Guardo los botones...
    addCriteriaBtn : document.getElementById("add-criteria"),
    addDesignBtn : document.getElementById("add-design"),

    //Metodos
    addCriteria : function() {
        if (this.criteriasCount >= this.maxCriterias) {
            alert('El máximo de criterios es ' + this.maxCriterias);
        } else {
            this.criteriasCount++;
            this.criterias.push(new DefaultCriteria(this.criteriasCount));
            this.render();
        }
    },
    addDesign : function() {
        if (this.designsCount >= this.maxDesigns) {
            alert('El máximo de diseños es ' + this.maxDesigns);
        } else {
            this.designsCount++;
            this.designs.push(new DefaultDesign(this.designsCount));
            this.render();
        }
    },
    init : function() {
        console.log('matrix init');
        console.log(this);

        var matrixEl = document.querySelector("matrix");

        //Listeners para botones...
        this.addCriteriaBtn.addEventListener("click", this.addCriteria.bind(this));
        this.addDesignBtn.addEventListener("click", this.addDesign.bind(this));

        //Inicializo datos...
        this.addCriteria();
        this.addDesign();
        this.addDesign();

        //Fila de disenos
        var designsRow = document.createElement('tr');
        designsRow.classList.add('matrix-designs-row');
        
        var descriptionCell = document.createElement('td');
        descriptionCell.classList.add('matrix-description');
        descriptionCell.setAttribute('colspan', '2');
        descriptionCell.setAttribute('contenteditable', 'contenteditable');
        descriptionCell.innerHTML = this.description;

        designsRow.appendChild(descriptionCell);
        this.matrixEl.appendChild(designsRow);

        


    },
    render : function() {
        //Render de criterios...
/*         for (criteria of this.criterias) {
            //Creo la fila
            var newRow = document.createElement('tr');
            newRow.setAttribute('id', criteria.id );
            newRow.classList.add('matrix-criteria-row');

            //Creo celda para titulo
            var titleCell = document.createElement('td');
            titleCell.classList.add('matrix-cell');
            titleCell.innerText = criteria.title;
            
            //Creo celda para el peso
            var weightCell = document.createElement('td');
            weightCell.classList.add('matrix-cell');
            weightCell.innerText = criteria.weight;

            //Agrego celdas al nuevo criterio
            newRow.appendChild(titleCell);
            newRow.appendChild(weightCell);

            document.querySelector('table').appendChild(newRow);

        } */

        console.log('render');
    }
}

var DefaultCriteria = function(id) {
    this.id = id;
    this.title = 'Criterio ' + id;
    this.weight = 0;
};

var DefaultDesign = function(id) {
    this.id = id;
    this.title = 'Diseño ' + id;
    this.ratings = [0];
    this.scores = [0];
    this.total = 0;
};

matrix.init();
   
}
)();