import { FC, useState } from 'react'
import styles from '../FilterWindow.module.scss'

interface ICheckBoxInputMemory {
    memory:string
    remove:(extra:string)=>void
}

const CheckBoxInputMemory: FC<ICheckBoxInputMemory> = ({memory,remove}) => {
    const [checked,setChecked] = useState<boolean>(false)
    const [inputValue,setInputValue] = useState<string>(memory)

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(prev=>!prev)
        checked?setInputValue(memory):setInputValue('')
        checked&&remove(memory)
    }


  return <div className={styles.CheckedInput}>
  <input checked={checked} onChange={handleChange} type="checkbox" value={inputValue} name={'sortMemory'} id={memory} />
  <label htmlFor={memory}>{memory==='1024'?<>1 Тб</>:<>{memory} Гб</>}</label>
  </div>
}

export default CheckBoxInputMemory
