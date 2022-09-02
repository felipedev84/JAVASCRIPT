import React from 'react';

const  Button = () => {
    const [name, setNAme] = useState('Hola Mundo');
    return(
        <div>
            <h1>{name}</h1>
        </div>
    );
}


// --------------------------------

import React from "react";


class App extends Components{

    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h1>Hello world</h1>
            </div>
        );
    }
}

// ----------------------------------


import React, {Component} from 'react';

function ComponentWrapper(WrapperComponent){
    class Wrapper extends Component{
        render(){
            return <WrapperComponent {...this.props} />
        }
    }

    return Wrapper;
}


// ---------------------------------

