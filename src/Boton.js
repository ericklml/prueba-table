import React, { useState } from 'react';
import { Button  } from 'antd';

export const Boton = ({value, id, month, setState, state}) => {

    const [tipo, setTipo] = useState('default');

    const handleClick = () => {
        if(tipo === 'default'){
            setState({...state, [id]:{...state[id],[month]:value}});
            setTipo('primary');
            console.log({...state, [id]:{...state[id],[month]:value}});
        }
        else{
            delete state[id][month]
            setTipo('default');
            console.log(state[id]);
            if(Object.keys(state[id]).length === 0){
                state[id] = true;
                setState((state));
            }
            console.log(state[id]);
        }
        console.log(state);
    }

    return (
        <Button type={tipo} onClick={handleClick} disabled={!(id in state)}>{value}</Button>
    )
}
