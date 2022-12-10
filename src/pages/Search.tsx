import React, { useState } from "react";
import ArrayBlock from "../components/ArrayBlock";
import Block from "../components/Block";
import { linearSearch, binarySearch } from "../lib/Searching";

const array = [1, 12, 32, 44, 51, 65, 98];

const Search = () => {
    const [num, setNum] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if(!isFinite(+newValue)) return;

        setNum(newValue);
    }

    return (
        <div className="container">
        <div className="sorting">
            <h1 className="sorting__title title">
                Алгоритмы поиска
            </h1>
            <div className="sorting__body">
                <Block title="Настройка">
                    <div className="gridBlock">
                        <div>Индексы:</div>
                        <div>
                            <ArrayBlock array={array.map((num, indx) => indx)}/>
                        </div>
                    </div>
                    <div className="gridBlock">
                        <div>Исходный массив:</div>
                        <div>
                            <ArrayBlock array={array}/>
                        </div>
                    </div>
                    <div className="gridBlock">
                        <div>Найти элемент:</div>
                        <div>
                            <input type="text" value={num} onChange={handleChange}/>
                        </div>
                    </div>
                </Block>
                <Block title="Линейный поиск">
                    <div className="gridBlock">
                        <div>Индекс элемента:</div>
                        <div>
                           {linearSearch(array, +num)}
                        </div>
                    </div>
                </Block>
                <Block title="Бинарный поиск (Работает только с упорядоченными массивами)">
                    <div className="gridBlock">
                        <div>Индкес элемента:</div>
                        <div>
                            {binarySearch(array, +num)}
                        </div>
                    </div>
                </Block>
            </div>
        </div>
    </div>
    );
}

export default Search;