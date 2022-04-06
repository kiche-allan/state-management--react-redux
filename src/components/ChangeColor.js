import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {changeColor} from '../features/theme';

function ChangeColor() {
    const [color, setColor] = useState('red');
    const dispatch = useDispatch();
  return (
    <div>
        <input type= "text" onClick={(event) => {setColor(event.target.value);
        }}/>
        <button onClick={() => {dispatch(changeColor(color))}}>CHANGE COLOR</button>
    </div>
  )
}

export default ChangeColor