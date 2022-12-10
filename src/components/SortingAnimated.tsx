import { FC, useState } from "react";
import { AnimatedItemState, IAnimatedArrayItem } from "../types/types";
import ArrayBlockAnimated from "./ArrayBlockAnimated";

interface SortingProps {
    sortFunction: Function,
    array: number[],
}

const SortingAnimated: FC<SortingProps> = ({array, sortFunction}) => {
    const [animatedArray, setAnimatedArray] = useState<IAnimatedArrayItem[]>(array.map((num) => ({value: num, state: AnimatedItemState.off} as IAnimatedArrayItem)));
    const [isAnimating, setIsAnimating] = useState(false);

    const hadnleClick = function(): void {
        if(isAnimating) return;
        setIsAnimating(true);
        
        const generator = sortFunction(animatedArray);
        let resGen =  generator.next();
        let newArray: IAnimatedArrayItem[] = resGen.value;

        setTimeout(function f()  {
            setAnimatedArray([...newArray]);
            resGen = generator.next();
            newArray = resGen.value;
            if(!resGen.done)
                setTimeout(f, 500);
        }, 500);
    }

    return (
        <>
        <div className="gridBlock">
            <div>
                Массив:
            </div>
            <div>
                <ArrayBlockAnimated array={animatedArray}/>
            </div>
        </div>
        <div className="gridBlock">
            <div>
                Начать анимацию:
            </div>
           <div>
                <button className="btn" onClick={hadnleClick}>
                    Анимация
                </button>
           </div>
        </div>
        </>
    );
}

export default SortingAnimated;