const doSomeThingAsync = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve ('do something Async'),3000)
        :reject(new Error('Test Error'))
    });
    
}


const doSomeThing = async()=>{
    const something = await doSomeThingAsync();
    console.log(something);
}

console.log('before');
doSomeThing();
console.log('after');


const anotherFunction = async () => {
    try{
        const something =await doSomeThingAsync();
    }catch (error){
        console.log(error);
    }
}

console.log('before 1');
anotherFunction();
console.log('after 1');
