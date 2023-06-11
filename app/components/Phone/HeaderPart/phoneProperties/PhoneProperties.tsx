import { useAppSelector } from '@/app/hooks/redux'
import { FC } from 'react'
import styles from './PhoneProperties.module.scss'
import MemoryInput from './memoryInput/MemoryInput'
import ColorInput from './colorInput/ColorInput'

const PhoneProperties: FC = () => {
    
    const {possibleColors,memory,model,color,company} = useAppSelector(state=>state.phoneSliceReducer)
  return <div className={styles.container}>
    <h2>{company} {model} ({color.colorEn}/{memory.memory[0]==='1024'?<>1TB</>:<>{memory.memory[0]}GB</>})</h2>
    <p>Объем памяти</p>
    <MemoryInput memory={memory}/>
    <p>Цвет</p>
    <ColorInput defaultColor={color.colorEn} color={possibleColors}/>
  </div>
}

export default PhoneProperties