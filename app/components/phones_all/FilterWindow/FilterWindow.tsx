import {FC, useState} from "react";
import styles from "./FilterWindow.module.scss";
import CheckBoxInputColors from "./inputs/CheckBoxInputColors";
import CheckBoxInputMemory from "./inputs/CheckBoxInputMemory";
import PriceInput from "./inputs/PriceInput";
import {useAppSelector} from "@/app/hooks/redux";
import {phoneService} from "@/app/services/PhoneService";
import {useActions} from "@/app/hooks/useActions";
import {useRouter} from "next/router";

const FilterWindow: FC = () => {

    const {maxPrice, minPrice, uniqueMemory, uniqueColorsObj} = useAppSelector(state => state.phonesDataReducer)
    const {checkedColors, checkedMemory} = useAppSelector(state => state.BtnStateReducer)
    const {setCheckedColors, setCheckedMemory, setData} = useActions()

    const {query} = useRouter()

    const priceObj = {
        minPrice: minPrice,
        maxPrice: maxPrice,
    };

    const [colors, setColors] = useState<string[]>([]);
    const [memory, setMemory] = useState<string[]>([]);
    const [lPrice, setLPrice] = useState<number>(0);
    const [hPrice, setHPrice] = useState<number>(priceObj.maxPrice || 99999);

    const handleCheckedMemory = (): void => {
        const nodeList: NodeListOf<HTMLElement> =
            document.getElementsByName("sortMemory");
        const values: NodeListOf<HTMLInputElement> =
            nodeList as NodeListOf<HTMLInputElement>;
        for (let i = 0; i < values.length; i++) {
            if (values[i].checked && !memory.includes(values[i].id))
                setMemory((prev) => [...prev, values[i].id]);
        }
        // console.log(memory);
    };
    const handleRemoveCheckedMemory = (extra: string): void => {
        const sortedArr = memory.filter((i) => i !== extra);
        setMemory(sortedArr);
    };

    const GetParamsLink = () => {
        const defaultColorsResponse = uniqueColorsObj.map(i => i.colorEn)
        const defaultMemoryResponse = uniqueMemory.toString()
        // handleCheckedColors();
        console.log(colors.length);

        if (checkedColors.length === 0) {
            setCheckedColors(defaultColorsResponse)
        }

        if (checkedMemory.length === 0) {
            setCheckedMemory(defaultMemoryResponse.split(','))
        }
        // console.log(checkedColors);
        // console.log(checkedMemory);
        //убрать хардкод цен
        return [checkedColors.join(','), checkedMemory.join(','), lPrice, hPrice]
//удалять весь редакс после запроса
        // handleCheckedMemory(
        //   // phoneService.getSortedPhones()
        // );

    };
    const handleTest = async () => {
        const params: any = GetParamsLink()
        const data = await phoneService.getSortedPhones(params[0], params[1], params[2], params[3] === 0 ? maxPrice : params[3])
        setData(data)
    }


    const handleReset = async () => {
        console.log(query.page)
        const data = await phoneService.getResetPhones()
        setData(data)
    }

    return (
        <div className={styles.container}>
            <h2 style={{marginBottom: "26px"}}>
                Цена <u>BYN</u>
            </h2>
            <PriceInput
                lPriceValue={setLPrice}
                hPriceValue={setHPrice}
                priceObj={priceObj}
            />
            <h2 style={{marginTop: "37px"}}>Память</h2>
            <div className={styles.inputBlock}>
                {uniqueMemory?.map((i, ii) => {
                    return (
                        <CheckBoxInputMemory
                            key={ii}
                            memory={i}
                        />
                    );
                })}
            </div>
            <h2 style={{marginTop: "43px"}}>Цвет корпуса</h2>
            <div className={styles.inputBlock}>
                {uniqueColorsObj?.map((i, ii) => {
                    return (
                        <CheckBoxInputColors
                            // remove={handleRemoveCheckedColor}
                            key={ii}
                            colorEn={i.colorEn}
                            colorRu={i.colorRu}
                        />
                    );
                })}
            </div>

            <button style={{margin: "25px 0 13px 0"}} onClick={handleTest}>
                ПРИМЕНИТЬ
            </button>
            <button onClick={handleReset}>СБРОСИТЬ ФИЛЬТР</button>
        </div>
    );
};

//сделать запросы : 1)кнопка запрос с фильтрами на бэк и перерисовка redux
//2) сделать в redux поле был ли запрос с фильтрами если нет то просто делать clear формы, если да то надо делать дефолтный запрос и сетать в Redux

export default FilterWindow;
