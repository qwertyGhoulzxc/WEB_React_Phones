import { FC } from 'react';
import Banners from './banners/Banners';
import { useActions } from '@/app/hooks/useActions';
import Layout from '../Layout/Layout';

const HomePage:FC = () => {

    const {setCatalogBtnState} = useActions()
    setCatalogBtnState(false)
    return (
        <Layout title='Home page' description='life - мобильный оператор с низкими ценами на гаджеты и телефоны'>
            <Banners/>
        </Layout>
    );
};

export default HomePage;