import { FC, useEffect, useState } from 'react'
import styles from './ColorInput.module.scss'

interface IColorInput {
    color:string[]
    defaultColor:string
}

const ColorInput: FC<IColorInput> = ({color,defaultColor}) => {
    const [checked,setChecked] = useState<string>(defaultColor)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(e.target.value)
        console.log(e.target.value);
    }

  return <div className={styles.ColorInputContainer}>
    {
        color.map((value,i)=>{
            return <div key={i} className={styles.CheckedInput}>
                <input onChange={handleChange}  defaultChecked={value===checked} type="radio" name="colorRadio" id={value} value={value}/>
                <label htmlFor={value}><div style={{background:value}}></div></label>
            </div>
        })
    }
    {/* <div  className={styles.CheckedInput}>
    <input onChange={handleChange}  defaultChecked type="radio" name="colorRadio" id='qwe' value='a'/>
     </div> */}
  </div>
}

export default ColorInput