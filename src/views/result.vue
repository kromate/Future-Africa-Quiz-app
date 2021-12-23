<template>
<div class="bg-lightenPrimary  w-screen h-screen flex justify-center items-center ">


    <div class="container mx-auto px-4 flex flex-col justify-center items-center gap-5">
<span class="text-4xl font-bold overflow-y-hidden text-center text-primary">Your answers were submitted successfully <br> and your Score is <br> {{score || 0}} / {{questions.length}} </span>



    </div>

</div>
</template>

<script>
import {questions, score} from "../helpers/questions"
export default {
    name: "HomePage",

    setup(){
      return{questions, score}
    }
}
</script>

