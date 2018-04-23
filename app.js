(function() {

var matrix = {
    description : '<strong>Descripción:</strong> Breve descripción opcional de la matriz y el proyecto.',
    designsCount : 2,
    criteriasCount : 1,
    maxDesigns : 5,
    maxCriterias : 10,
    defaultCriteria : 
        {
            title : 'Criterio' + this.criteriasCount++,
            weight : 0
        },
    defaultDesign :
        {
            title : 'Diseño' + this.designsCount++,
            ratings : [0],
            scores : [0],
            total : 0
        },
    criterias : [],
    designs : [],
    addCriteria : function() {
        console.log('add criteria');
    },
    addDesign : function() {
        console.log('add design');
    },
    init : function() {
        console.log('init');

        //Escribo descripcion por defecto...
        var descriptionCell = document.querySelector('.matrix-description');
        descriptionCell.innerHTML = this.description;

        //Guardo los botones...
        var addCriteriaBtn = document.getElementById("add-criteria");
        var addDesignBtn = document.getElementById("add-design");

        //Listeners para botones...
        addCriteriaBtn.addEventListener("click", matrix.addCriteria.bind(this));
        addDesignBtn.addEventListener("click", matrix.addDesign.bind(this));

        this.render();
    },
    render : function() {
        console.log('render');
    }
}

matrix.init();
   
}
)();