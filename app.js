(function() {

var matrix = {
    //Data
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

    //Elementos del DOM
    
    descriptionCell : document.querySelector('.matrix-description'),
    
    //Guardo los botones...
    addCriteriaBtn : document.getElementById("add-criteria"),
    addDesignBtn : document.getElementById("add-design"),

    //Metodos
    addCriteria : function() {
        console.log('add criteria');
    },
    addDesign : function() {
        console.log('add design');
    },
    init : function() {
        console.log('init');

        this.descriptionCell.innerHTML = this.description;

        //Listeners para botones...
        this.addCriteriaBtn.addEventListener("click", matrix.addCriteria.bind(this));
        this.addDesignBtn.addEventListener("click", matrix.addDesign.bind(this));

        this.render();
    },
    render : function() {
        console.log('render');
    }
}

matrix.init();
   
}
)();