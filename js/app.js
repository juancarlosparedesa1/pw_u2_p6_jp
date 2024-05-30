console.log(Vue);

const estudiantes=[{nombre:"Edison",apellido:"Cayambe"},
{nombre:"Carlos",apellido:"Paez"},
{nombre:"Daniel",apellido:"Castillo"},
{nombre:"Andrea",apellido:"Mora"},
{nombre:"Andres",apellido:"Teran"}];


const app=Vue.createApp({//backtips alt+96
   /*  template:`
    <h1>Hola Mundo desde Vue.JS</h1>
    <p>{{1+1}}</p>
    <p>{{[1,2,3,4]}}</p>
    <p>{{false?'True':'False'}}</p>
    ` */
    /* opción de optin api */
    /* nomenclatura para dclarara una propiedad reactiva */
    data(){
        return{
            mensaje:"hola Mundo Propiedad Reactiva",
            valor:7,
            lista:estudiantes
        }
    },
    methods:{
        cambiarTexto(){
            this.mensaje="TextoCambiado";
        },
        sumar(){
            this.valor=this.valor+100;
        },
        agregar(){
            const nuevo={
                nombre:"Juan Carlos",
                apellido:"Paredes Angulo "
            }
            this.lista.unshift(nuevo);
        }
    }
});

app.mount('#myApp');//puede ser cualquier nombre pero lo normal es esto
