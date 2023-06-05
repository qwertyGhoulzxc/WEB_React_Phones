import { FC } from 'react'
import styles from '../FilterWindow.module.scss'

interface IPriceInput {
    priceObj:{
        minPrice:number,
        maxPrice:number,
    }
    lPriceValue:(vl:number)=>void
    hPriceValue:(vl:number)=>void
}

const PriceInput: FC<IPriceInput> = ({priceObj,lPriceValue,hPriceValue}) => {
  const handleSetLValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
    lPriceValue(Number(e.target.value))
  }
   const handleSetHValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
    hPriceValue(Number(e.target.value))
  }


  return <div style={{justifyContent:'space-between'}} className={styles.inputBlock}>
            <div className={styles.PriceInputBlock}>
            <p>От</p>
    <input type="number" onChange={handleSetLValue}  placeholder={priceObj.minPrice.toString()}/>
    </div>

    <div className={styles.PriceInputBlock}>
        <p>До</p>
    <input type="number" onChange={handleSetHValue}  placeholder={priceObj.maxPrice.toString()}/>
    </div>
  </div>
}

export default PriceInput