import { FC, useState } from 'react'
import styles from './FilterWindow.module.scss'
import CheckBoxInputColors from './inputs/CheckBoxInputColors'
import CheckBoxInputMemory from './inputs/CheckBoxInputMemory'
import PriceInput from './inputs/PriceInput'

const FilterWindow: FC = () => {
    const colorArr=[{"colorEn": "white","colorRu": "белый",},
    {"colorEn": "black","colorRu": "черный",},
    {"colorEn": "gold","colorRu": "золотой",},
    {"colorEn": "gray","colorRu": "серый",},
    {"colorEn": "violet","colorRu": "фиолетовый",},
    {"colorEn": "yellow","colorRu": "желтый",},
    {"colorEn": "blue","colorRu": "синий",},
    {"colorEn": "pink","colorRu": "розовый",},
]

const memoryArr = ["1024","512","256","128","64"]

const priceObj = {
    minPrice:1800,
    maxPrice:3900
}

const [colors,setColors] = useState<string[]>([])
const [memory,setMemory] = useState<string[]>([])
const [lPrice,setLPrice] = useState<number>(0)
const [hPrice,setHPrice] = useState<number>(priceObj.maxPrice||99999)

const handleCheckedColors=():void=>{
    const nodeList: NodeListOf<HTMLElement> = document.getElementsByName('sortColors')
const values: NodeListOf<HTMLInputElement> = nodeList as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < values.length; i++) {
        if(values[i].checked && !colors.includes(values[i].id))
        setColors(prev=>[...prev,values[i].id])
    }    
    console.log(colors);
}
const handleRemoveCheckedColor=(extra:string):void=>{
const sortedArr = colors.filter(i=>i!==extra) 
setColors(sortedArr)
}
const handleCheckedMemory=():void=>{

    const nodeList: NodeListOf<HTMLElement> = document.getElementsByName('sortMemory')
const values: NodeListOf<HTMLInputElement> = nodeList as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < values.length; i++) {
        if(values[i].checked && !memory.includes(values[i].id))
        setMemory(prev=>[...prev,values[i].id])
    }    
    console.log(memory);
}
const handleRemoveCheckedMemory=(extra:string):void=>{


    const sortedArr = memory.filter(i=>i!==extra) 
    setMemory(sortedArr)
    }

const handleSubmit = ()=>{
    handleCheckedMemory()
    handleCheckedColors()
}


  return <div className={styles.container}>
        <h2 style={{marginBottom:'26px'}}>Цена <u>BYN</u></h2>
        <PriceInput lPriceValue={setLPrice} hPriceValue={setHPrice} priceObj={priceObj}/>
        <h2 style={{marginTop:'37px'}}>Память</h2>
        <div className={styles.inputBlock}>
        {memoryArr.map((i,ii)=>{
            return <CheckBoxInputMemory key={ii} memory={i} remove={handleRemoveCheckedMemory}/>
        })}
        </div>
        <h2 style={{marginTop:"43px"}}>Цвет корпуса</h2>
        <div className={styles.inputBlock}>
        {colorArr.map((i,ii)=>{
            return <CheckBoxInputColors remove={handleRemoveCheckedColor} key={ii} colorEn={i.colorEn} colorRu={i.colorRu}/>
        })}
        </div>

        <button style={{margin:'25px 0 13px 0'}} onClick={handleSubmit}>ПРИМЕНИТЬ</button>
        <button onClick={handleSubmit}>СБРОСИТЬ ФИЛЬТР</button>
        

  </div>
}

//сделать запросы : 1)кнопка запрос с фильтрами на бэк и перерисовка redux
//2) сделать в redux поле был ли запрос с фильтрами если нет то просто делать clear формы, если да то надо делать дефолтный запрос и сетать в Redux


export default FilterWindow