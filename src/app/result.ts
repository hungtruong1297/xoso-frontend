import { Winning } from './winning';
import { Province } from './province';
export class Result {
    constructor(
        public id: number,
        public date: string,
        public province: Province,
        public winning: Winning,
        public result: string
    ) { }
}