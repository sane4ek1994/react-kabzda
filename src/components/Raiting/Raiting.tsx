import {useState} from "react";

type TRaitingValue = 1 | 2 | 3 | 4 | 5;

type TStartProps = {
    selected: boolean
    raiting: TRaitingValue
    setRaiting: (val: TRaitingValue) => void
}

export function Star(props: TStartProps) {

    const upStarHandler = () => props.setRaiting(props.raiting + 1 as TRaitingValue)
    const downStarHandler = () => props.setRaiting(props.raiting - 1 as TRaitingValue)

    const star = <span onMouseOver={upStarHandler}>Star</span>
    const boldStar = <span onMouseOver={downStarHandler}><b>Star</b></span>

    return props.selected ? boldStar : star
}

export function Raiting() {
    const [raiting, setRaiting] = useState<TRaitingValue>(1);
    return (
        <div>
            <Star setRaiting={setRaiting} raiting={raiting} selected={raiting > 1}/>
            <Star setRaiting={setRaiting} raiting={raiting} selected={raiting > 2}/>
            <Star setRaiting={setRaiting} raiting={raiting} selected={raiting > 3}/>
            <Star setRaiting={setRaiting} raiting={raiting} selected={raiting > 4}/>
            <Star setRaiting={setRaiting} raiting={raiting} selected={raiting > 5}/>
        </div>

    )
}
