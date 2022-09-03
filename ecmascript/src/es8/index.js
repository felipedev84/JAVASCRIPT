//clase 8 ecmascript 8


// ------Método Object.entries()
const object = {
    frontend : 'luis felipe',
    backend : 'sofia',
    diseñadora : 'lucia',
    marketing: 'ana maria',
    productManager : 'esteban',
    tecLead:'luisa fernanda',
}


const objectEntries = Object.entries(object);//Este método me permite convertir un objeto en un array con arrays adentro.
console.log(objectEntries);
console.log(objectEntries.length);


//-----Método object.values()este metodo me permite sacar los valores del objeto omitiendo los items.

const object2 = {
    frontend : 'luis felipe',
    backend : 'sofia',
    diseñadora : 'juana',
    marketing: 'ana ',
    productManager : 'camila',
    tecLead:'luisa fernanda',
}

const value = Object.values(object2);
console.log(value);
console.log(value.length);


//---------------

const string = 'hello';
console.log(string.padStart(7,'hi'));


//clase 8 async wait

const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('test Error'))
    })
};

const helloAsyn = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsyn();

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
};

anotherFunction();
