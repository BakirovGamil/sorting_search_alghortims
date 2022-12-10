import { FC, useEffect, useState } from "react";
import { ISortFunction, ISortResult } from "../types/types";
import ArrayBlock from "./ArrayBlock";

interface SortingProps {
    sortFunction: ISortFunction,
    array: number[],
}

const SortingBlock: FC<SortingProps> = ({array, sortFunction}) => {
    const [result, setResult] = useState<ISortResult>(() => sortFunction(array));
    
    useEffect(() => {
        setResult(sortFunction(array));
    }, [array, sortFunction])

    return (
        <>
        <div className="gridBlock">
            <div>
                Время:
            </div>
            <div>
                {result.time} мс
            </div>
        </div>
        <div className="gridBlock">
            <div>
                Количество итераций:
            </div>
            <div>
                {result.n}
            </div>
        </div>
        <div className="gridBlock">
            <div>
                Отсортированный массив:
            </div>
            <div>
                <ArrayBlock array={result.array}/>
            </div>
        </div>
        </>
    );
}

export default SortingBlock;