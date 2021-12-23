<template>
<div class="bg-lightenPrimary  w-screen h-screen flex justify-center items-center ">


    <div class="container mx-auto px-4 flex flex-col justify-center items-center gap-5">

      <div v-for="(question, index) in questions" :key="question.question" class="shadow border-b-2 flex flex-col justify-start bg-gray-50 p-3 gap-5 w-full md:w-1/2">
        <span class="text-2xl italic">{{question.Question}}</span>

      <div v-for="option in question.Options" :key="option" class="flex items-center">
<input  :id="option" v-model="questions[index].selected" :value="option" type="radio" :name="index" class="mr-3 w-5 h-5">
<label :for="option">{{option}}</label><br>

      </div>
        

 
      </div>

      <button class="bg-secondary hover:bg-yellow-300 text-white text-xl font-bold py-4 px-24 rounded-full mt-8" @click="submit">
  Submit
</button> 

    </div>

</div>
</template>

<script>

import questions from "../helpers/questions"
export default {
    name: "QuestionPage",

    setup(){

      const submit = ()=>{
        console.log(questions.map((item)=> item.selected));
      }
      return{
        submit,
        questions
      }
    }
}
</script>


<style scoped>

input[type=radio] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type=radio] + label span:hover,
input[type=radio] + label:hover span {
  transform: scale(1.2);
}

input[type=radio]:checked + label span {
  background-color: #FBBB07;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type=radio]:checked + label {
  color: #FBBB07;
}
</style>
