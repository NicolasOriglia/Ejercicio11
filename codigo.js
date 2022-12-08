function verdadero(){
    return true;
}

console.log(verdadero())


const getData = function(){
    return new Promise((resolve, reject)=>{
        let num = Math.floor(Math.random()*2);
        if(num === 1){
            reject(new Error('ERROR'));
        }      
        setTimeout(()=>{
           resolve(saludar());
        },5000);
       
    });
}

getData()
.then((saludo)=>{console.log(saludo)})
.catch((err)=>{console.log(err.message)})

function saludar(){
    console.log('Hola soy una promesa');
}

console.log(getData())

function* generarId (){
    let id= 0;
    while(true){
        id+= 2;
        if(id === 10){
            return id;
        }
        yield id;
    }
};
const generator = generarId();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);