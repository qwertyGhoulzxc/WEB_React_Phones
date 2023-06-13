import {FC} from 'react';
import Banners from './banners/Banners';
import {useActions} from '@/app/hooks/useActions';
import Layout from '../Layout/Layout';
import Bestsellers from "@/app/components/HomePage/bestsellers/Bestsellers";
import NewDevices from "@/app/components/HomePage/NewDevices/NewDevices";

const HomePage: FC = () => {

    const {setCatalogBtnState} = useActions()
    setCatalogBtnState(false)


    return (
        <Layout title='Home page' description='life - мобильный оператор с низкими ценами на гаджеты и телефоны'>
            <Banners/>
            <Bestsellers/>
            <NewDevices/>
        </Layout>
    );
};

export default HomePage;