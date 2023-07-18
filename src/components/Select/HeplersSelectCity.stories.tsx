import React, {useMemo, useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select city'
}


export const SelectCity = () => {

    const [count, setCount] = useState(0);
    const countries = [
        {id: '1', city: 'Penza', population: 517311, country: 'Russia'},
        {id: '2', city: 'Zarechniy', population: 47939, country: 'Russia'},
        {id: '3', city: 'Astana', population: 1070000, country: 'Kazakhstan'}
    ];

    const populationInCity = useMemo(() => {
        return countries.filter(city => city.population < 300000)
    }, [countries])

    const memoSelect = useMemo(() => {
        return <Select cityData={populationInCity}/>
    }, [populationInCity])
    return <>
        <button onClick={() => setCount(count + 1)}>+ {count}</button>
        {memoSelect}
        <Select cityData={countries}/>
        <Select cityData={countries}/>
    </>
}

