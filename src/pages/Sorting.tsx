import {useState, FC } from "react";
import Block from "../components/Block";
import Configuring from "../components/Configuring";
import SortingBlock from "../components/SortingBlock";
import SortingAnimated from '../components/SortingAnimated';
import { bubbleSort, bubbleSortAnimated, mergeSort, quikSort, selectionSort, shakerSort } from "../lib/Sorting";

const Sorting: FC = () => {
    const [array, setArray] = useState<number[]>([]);   

    return (     
            <div className="container">
                <div className="sorting">
                    <h1 className="sorting__title title">
                        Алгоритмы сортировки
                    </h1>
                    <div className="sorting__body">
                        <Block title="Настройка">
                           <Configuring array={array} setArray={setArray}/>
                        </Block>
                        <Block title="Сортировка выбором">
                            <SortingBlock sortFunction={selectionSort} array={array}/>
                        </Block>
                        <Block title="Сортировка пузырьком">
                            <SortingBlock sortFunction={bubbleSort} array={array}/>
                        </Block>
                        {
                            array.length &&
                        <Block title="Cортировака пузырьком с анимацией">
                            <SortingAnimated sortFunction={bubbleSortAnimated} array={array}/>
                        </Block>
                        }
                        <Block title="Шейкерная сортировака">
                            <SortingBlock sortFunction={shakerSort} array={array}/>
                        </Block>
                        <Block title="Быстрая сортировака (сортировка Хоара)">
                            <SortingBlock sortFunction={quikSort} array={array}/>
                        </Block>
                        <Block title="Cортировака слиянием">
                            <SortingBlock sortFunction={mergeSort} array={array}/>
                        </Block>
                    </div>
                </div>
            </div>
    );
}

export default Sorting;