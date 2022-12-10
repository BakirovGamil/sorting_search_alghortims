export interface ISortResult {
    n: number,
    time: number,
    array: number[]
}

export interface ISortFunction {
    (array: number[]): ISortResult
}

export enum CreateBy {
    seed = 'seed',
    random = 'random'
}

export enum AnimatedItemState {
    first,
    second,
    checked,
    off
}

export interface IAnimatedArrayItem {
    value: number,
    state: AnimatedItemState
}