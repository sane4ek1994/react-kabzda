import React, {useMemo, useState} from 'react';
import s from './select.module.css'

type TSelect = {
    id: string
    city: string
}

type TSelectProps = {
    cityData: TSelect[]
}
export const Select = ({cityData}: TSelectProps) => {

    console.log('Select render!')
    const [valueCity, setValueCity] = useState('none');
    const [toggleModal, setToggleModal] = useState(false);

    const toggleOpenModal = () => {
        setToggleModal(!toggleModal)
    }

    const changeCity = (cityVal: string) => {
        setValueCity(cityVal)
        setToggleModal(false)
    }

    const contentBlock = useMemo(() => {
        return cityData.map(el => <div className={s.option} onClick={() => changeCity(el.city)}
                                       key={el.id}>{el.city}</div>)
    }, [cityData])
    // const changeValueCity = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setValueCity(e.currentTarget.value)
    // }

    return (
        <>
            <h3 className={s.select} onClick={toggleOpenModal}>{valueCity}</h3>
            {toggleModal && contentBlock}
            {/*<select className={s.select} onChange={changeValueCity} value={valueCity}>*/}
            {/*    {cityData.map(el => <option className={s.option} key={el.id} value={el.city}>{el.city}</option>)}*/}
            {/*</select>*/}
        </>
    );
};

