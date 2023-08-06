import React, {useState} from 'react'
import {Accordion} from './components/Accordion/Accordion'
import {Raiting} from './components/Raiting/Raiting'

import './App.css'
import {UncontrolOnOff} from "./components/UncontrolOnoff/UncontrolOnOff";
import {Select} from "./components/Select/Select";
import {Clock} from "./components/Clock/Clock";

function App() {
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <PageTitle title='App title'/>
            <PageTitle title='App second TITLE'/>
            <Raiting/>
            <Accordion collapsed={collapsed} setCollapsed={setCollapsed} title='Main menu'
                       items={['Alex', 'Ksu', 'lev', 'Alex']}/>
            <Accordion collapsed={collapsed} setCollapsed={setCollapsed} title='Users list'
                       items={['Alex', 'Ksu', 'lev', 'Alex']}/>
            <Raiting/>
            <Raiting/>
            <Raiting/>
            <Raiting/>
            <Raiting/>
            <h2>Uncontrol component switch</h2>
            <UncontrolOnOff/>

            <Select cityData={[{id: '1', city: 'Penza'}, {id: '2', city: 'Zarechniy'}, {id: '3', city: 'Astana'},]}/>

            <UncontrolOnOff toggleSwitch={toggleSwitch} setToggleSwitch={setToggleSwitch}/>
            {`${toggleSwitch}`}
            <UncontrolOnOff toggleSwitch={toggleSwitch} setToggleSwitch={setToggleSwitch}/>
            {`${toggleSwitch}`}
            <h2>Control component switch</h2>
            {/*<ControlOnOff toggleSwitch={toggleSwitch} setToggleSwitch={setToggleSwitch}/>*/}

            <Clock/>
        </div>
    )
}

type TPageTitleProps = {
    title: string
}

function PageTitle(props: TPageTitleProps) {
    return <h1>{props.title}</h1>
}

export default App
