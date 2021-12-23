import {questions, score} from "../helpers/questions"

export   const empty=(arr)=> {
  return arr.indexOf("") !== -1;
}

export const getEmptyIndexes=(arr) =>{
    var indexes = [], i = -1;
    while ((i = arr.indexOf("", i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

export const calScore = (selectedAnswers)=>{
  score.value = 0
selectedAnswers.map((item, index)=>{
  if(item == questions[index].Answer){
    score.value++
  }

})
}