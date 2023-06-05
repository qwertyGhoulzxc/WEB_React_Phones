import { FC, useState } from 'react'
import styles from '../FilterWindow.module.scss'
interface Props{
    colorEn:string,
    colorRu:string,
    remove:(extra:string)=>void
}




const CheckBoxInputColors: FC<Props> = ({colorEn,colorRu,remove}) => {
    const [checked,setChecked] = useState<boolean>(false)
    const [inputValue,setInputValue] = useState<string>(colorEn)

const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setChecked(prev=>!prev)
    checked?setInputValue(colorEn):setInputValue('')
    checked&&remove(colorEn)

}
  return <div className={styles.CheckedInput}>
  <input checked={checked} onChange={handleChange} type="checkbox" value={inputValue} name={'sortColors'} id={colorEn} />
  <label htmlFor={colorEn}>{colorRu}</label>
  </div>
}

export default CheckBoxInputColors

