const rootElement = document.getElementById('myReactApp');
const element = React.createElement('div', {
    className: 'container'
},
    'Hola mundo con React.js'
);
ReactDOM.render(element, rootElement);