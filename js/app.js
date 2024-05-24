console.log(Vue);

const app=Vue.createApp({//backtips alt+96
    template:`
    <h1>Hola Mundo desde Vue.JS</h1>
    <p>{{1+1}}</p>
    <p>{{[1,2,3,4]}}</p>
    <p>{{false?'True':'False'}}</p>
    `
});

app.mount('#myApp');//puede ser cualquier nombre pero lo normal es esto
