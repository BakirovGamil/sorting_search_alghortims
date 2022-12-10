import React, { FC, useEffect, useState } from "react";
import makeNumberGenerator from "../lib/NumberGenerator";
import { CreateBy } from "../types/types";
import ArrayBlock from "./ArrayBlock";

interface ConfiguringProps {
    array: number[];
    setArray: (array: number[]) => void;
}

const Configuring: FC<ConfiguringProps> = ({setArray, array}) => {                                                          
    const [createBy, setCreateBy] = useState<CreateBy>(CreateBy.seed);
    const [seed, setSeed] = useState<string>('1');

    useEffect(() => {
        if(!isFinite(+seed)) return;

        const numberGenerator = makeNumberGenerator(+seed);
        const randomArray: number[] = [];
        for(let i = 0; i < 10; i++) {
            const num = numberGenerator.next().value as number;
            randomArray.push(num);
        }

        setArray(randomArray);
    }, [seed, setArray]);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSeed = e.target.value;
        if(newSeed.length > 8) return;

        setSeed(newSeed);
    }

    const handleChangeRadio = (choose: CreateBy) => {
        setCreateBy(choose);
    }

    const handleClick = (e: React.MouseEvent) => {
        const randomArray = new Array(10000).fill(0).map(() => Math.floor(Math.random() * 100));
        setArray(randomArray);
    }

    return (
        <>
         <div className="gridBlock">
            <div>Создание массива: </div>
            <div className="fr">
                <div className="fr">
                    <input type="radio" name="seed__rad" id="bySeed" checked={createBy === CreateBy.seed} onChange={handleChangeRadio.bind(null, CreateBy.seed)}/>
                    <label htmlFor="bySeed"> С использованием seed</label>
                </div>
                <div className="fr">          
                    <input type="radio" name="seed__rad" id="byRand"  checked={createBy === CreateBy.random}  onChange={handleChangeRadio.bind(null, CreateBy.random)}/>
                    <label htmlFor="byRand">Случайно</label>
                </div>
            </div>
        </div>
        {
            createBy === CreateBy.seed 
            ?
            <div className="gridBlock">
                <label htmlFor="seed">Seed: </label>
                <input className="seed__inp" id="seed" type='text' value={seed} onChange={handleChangeInput}/>
            </div>
            :
            <div className="gridBlock">
                <div>Генерация: </div>
                <button onClick={handleClick}>
                    Массив из 10к элементов
                </button>
            </div>
        }
        <div className="gridBlock">
            <div>Исходный массив:</div> 
            {isFinite(+seed) ? <ArrayBlock array={array}/> : "Неверный seed (Допустимо только число)"}
        </div> 
        </>
    );
}

export default Configuring;