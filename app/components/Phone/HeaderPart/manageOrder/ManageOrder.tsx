import {FC} from 'react'
import styles from './manageorder.module.scss'
import {Price} from '@/app/services/types.phoneService/TPhone'

interface Props {
    price: Price
}

const ManageOrder: FC<Props> = ({price}) => {
    return <div className={styles.box}>
        <h2>{price.price.toLocaleString('ru-RU')} BYN</h2>
        {price.discountPrice &&
            <h3 className={styles.discountPrice}>{price.discountPrice.toLocaleString('ru-RU')} BYN</h3>}
        <p style={{marginBottom: '5px'}}><span>Доставка:</span> бесплатно</p>
        <p style={{marginBottom: '10px'}}><span>Самовывоз:</span> С 13:00 до 19:00,<br/>по адресу - <span
            style={{color: "#1EB53A"}}>ул. Минская 12</span></p>
        <button className={styles.addToBasket}>В корзину</button>
        {/*если товар добавлен в корзину тогда чекать сотояние и менять кнопку и менять стили ну или создать другой класс кнопки*/}
        <button className={styles.buy}>Купить</button>

    </div>
}

export default ManageOrder