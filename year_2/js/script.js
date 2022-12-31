'use strict'

void function year (){
    let question
    do {
        question = prompt('Введите сколько вам лет... или год :)')
        console.log(typeof (question))
    }
        while (isNaN(question) || question === null);

    const arrQuestion = question.split('')
    const last = +arrQuestion[arrQuestion.length-1]

    if( question === '11' || question === '12' || question === '13' || question === '14' ){
        return alert(`Вам ${question} лет`)
    }

    if(last === 1){
        return  alert(`Вам ${question} год`)
    }

    if(last > 1 && last < 5){
        return  alert(`Вам ${question} года`)
    }

    if( last >= 5 || last === 0 ){
        return  alert(`Вам ${question} лет`)
    }









}()


