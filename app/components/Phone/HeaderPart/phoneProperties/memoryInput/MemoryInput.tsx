import { Memory } from '@/app/sevices/types.phoneService/TPhone'
import { FC, useState } from 'react'
import styles from './MemoryInput.module.scss'

interface Props{
    memory:Memory
}



const MemoryInput: FC<Props> = ({memory}) => {
    const [checked,setChecked] = useState<string>(memory.memory[0])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(e.target.value)
        console.log(e.target.value);
        
    }
    
    

  return <div className={styles.MemoryInputContainer}>
    {
        memory.possibleMemory.map((value,i)=>{
            return <div key={i} className={styles.CheckedInput}>
                <input onChange={handleChange}  type="radio" name="memoryRadio" id={value} value={value}/>
                <label className={value===checked?styles.checked:styles.default} htmlFor={value}>{value==='1024'?<>1TB</>:<>{value}GB</>}</label>
            </div>
        })
    }
    
  </div>
}

export default MemoryInput