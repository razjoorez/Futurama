import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Quiz {
    id: number,
    question: string,
    possibleAnswers: string[],
    correctAnswer: string
}
