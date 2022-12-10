import { FC } from "react";
import { AnimatedItemState, IAnimatedArrayItem } from "../types/types";

interface ArrayAnimatedProps {
    array: IAnimatedArrayItem[]
}

const firstStyle = {border: "1px solid green"};
const secondStyle = {border: "1px solid red"};
const checkedStyle = {border: "1px solid white"};

const styles = {
    [AnimatedItemState.first]: firstStyle,
    [AnimatedItemState.second]: secondStyle,
    [AnimatedItemState.checked]: checkedStyle,
    [AnimatedItemState.off]: {}
}

const classes = {
    [AnimatedItemState.first]: 'first array__item',
    [AnimatedItemState.second]: 'second array__item',
    [AnimatedItemState.checked]: 'array__item',
    [AnimatedItemState.off]: 'array__item'
}

const ArrayBlockAnimated: FC<ArrayAnimatedProps> = ({array}) => {
    return (
        <div  className="array">
            {array.map((animatedItem, i) => { //Здесь неправильное использование ключа
                const currentStyle = styles[animatedItem.state];
                const currentClasses = classes[animatedItem.state];
                
                return (
                    <span  className={currentClasses} style={currentStyle} key={i}> 
                        {animatedItem.value}
                    </span>
                )
            })}
        </div>
    );
}

export default ArrayBlockAnimated;