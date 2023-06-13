import {FC} from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import styles from './NewDevices.module.scss'

const NewDevices: FC = () => {
    return <div className={styles.NewDevicesContainer}>
        <div className={styles.compare}>
            <h2>Новинки</h2>
            <BsArrowRightCircle/>
            
        </div>

    </div>
}

export default NewDevices