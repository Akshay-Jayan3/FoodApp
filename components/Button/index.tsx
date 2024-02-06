import * as React from 'react';
import {styles}  from './styles'

type ButttonProp={
    // handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void,
    title:string
}
const Button = (props:ButttonProp) => {
  return (
    <div>
      <button style ={styles.container}>{props.title}</button>
    </div>
  )
}

export default Button