import React, {useState} from 'react'

const App=()=> {

    const [state,setState] =useState(false);
    return (
        <div>
            <h2 onClick={()=>setState(!state)}>State is :{state.toString()}</h2>
        </div>
    )
}

export default App;
