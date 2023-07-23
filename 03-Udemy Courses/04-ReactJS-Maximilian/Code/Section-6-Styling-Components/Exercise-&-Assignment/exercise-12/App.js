import React , {useState} from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [styled , setStyle] = React.useState(true);
    
    const stylingHandler = () => {
        setStyle( prevState => {
        return !prevState
    });
        }
    
    return (
        <div>
            <p className={`${!styled ? 'active' : '' }`}>Style me!</p>
            <button onClick={stylingHandler}>Toggle style</button>
        </div>
    );
}
