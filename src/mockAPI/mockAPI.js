const data = [
    {
        id: 1,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"Desarrollo web" ,
        detail:"Aprende Desarrollo web desde cero con nosotros",
    },
    {
        id: 2,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"JavaScript" ,
        detail:"Aprende JavaScript desde cero con nosotros",
    },
    {
        id: 3,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"React JS" ,
        detail:"Aprende React JS desde cero con nosotros",
    },
    {
        id: 4,
        img:"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png", 
        title:"Programación Backend" ,
        detail:"Aprende a programar desde el Backend desde cero con nosotros",
    },

];

export function getCursos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 500);
    });
}