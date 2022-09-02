let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 89K (gzipped: 28.1K)

const fecthDate = (url_api) => {
    return new Promise((resolve, reject)=> {
        const xhttp = new XMLHttpRequest();//peticion con xml.
        xhttp.open('GET', url_api, true);//activa el asincronismo.
        xhttp.onreadystatechange = ( () => {
            if(xhttp.readyState === 4){

                if(xhttp.status === 200)
                 ? resolve(JSON.parse(xhttp.responseText))
                 : reject(new Error('error', url_api))
                }
            });
        xhttp.send();
    });
   
}

module.export = fetchDate;
