import { FC } from "react";

interface ArrayProps {
    array: number[]
}

const ArrayBlock: FC<ArrayProps> = ({array}) => {
    const newArr = array.slice(0, 10);
    return (
        <div  className="array">
            {newArr.map((num, i) => { //Здесь неправильное использование ключа
                return (
                    <span className='array__item' key={i}> 
                        {num}
                    </span>
                )
            })}
            {newArr.length !== array.length &&
                <span className='array__item' style={{width: 100}}>... {array.length - 10}</span>
            }
        </div>
    );
}

export default ArrayBlock;