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
            lista:estudiantes,
            nombre:null,
            apellido:null
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
            console.log(this.nombre)
            console.log(this.apellido)
            const nuevo={
                nombre:this.nombre,
                apellido:this.apellido
            }
            this.lista.unshift(nuevo);
            this.resetear();
            
        },
        resetear(){
            this.nombre=null;
            this.apellido=null;
        },
        agregar2({charCode}){
            /* console.log(event) */
            console.log(charCode)

             if(charCode!==13) return;
             if(this.nombre!==null && this.apellido!==null){
                this.agregar();
             }
            
        }
    }
});

app.mount('#myApp');//puede ser cualquier nombre pero lo normal es esto
