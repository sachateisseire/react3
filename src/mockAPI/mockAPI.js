const data = [
    {
        id: 1,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"Desarrollo web" ,
        detail:"Aprende Desarrollo web desde cero con nosotros",
        detailExt:"Aprende Desarrollo web desde cero con nosotros, dando tus primeros pasos en maquetado con HTML5 y CSS, incorporando SASS, GIT y Bootstrap",
        category:"curso",
    },
    {
        id: 2,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"JavaScript" ,
        detail:"Aprende JavaScript desde cero con nosotros",
        detailExt:"Aprende JavaScript web desde cero con nosotros, conociendo la estructura de datos, condicionales e iteradores",
        category:"curso",
    },
    {
        id: 3,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"React JS" ,
        detail:"Aprende React JS desde cero con nosotros",
        detailExt:"Aprende React JS desde cero con nosotros, descubre las facilidades en el Front End que otorga esta poderosa librería y construye tus componentes",
        category:"curso",
    },
    {
        id: 4,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"Programación Backend" ,
        detail:"Aprende a programar desde el Backend desde cero con nosotros",
        detailExt:"Aprende a programar desde el Backend desde cero con nosotros, complementando tu aprendizaje en el Front para ser FullStack Developer",
        category:"carrera",
    },

];

export function getCursos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });
}

export function getUnCurso(idParams) {
    return new Promise((resolve) => {
        let cursoReq = data.find((item) => {
           return item.id === Number(idParams)
        });
        setTimeout(() => resolve(cursoReq), 1000);
    });
}