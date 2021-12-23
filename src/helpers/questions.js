import {ref} from 'vue'

export const questions = [

    {
        "Question":"What does a venture capitalist gain in return for his venture capital?",
        "Answer": "A share of company ownership and profits",
        "Options":["A share of company ownership and profits", "Personal satisfaction", "A good name", ],
        "error": "",
        "selected": ""
    },
    {
        "Question":"What is a private equity investment?",
        "Answer": "Investments made by a private equity firm or independent investor",
        "Options":["Investments made by a private equity firm or independent investor", "Investments in a public company", "Money from friends and family", ],
        "error": "", 
        "selected": "",
    },
    {
        "Question":"Which valuation method is the most popular for valuing a startup?",
        "Answer": "Equity Method",
        "Options":["Scorecard Method", "Equity Method", "Berkus Method", ],
        "error": "", 
        "selected": ""
    },
]

export const score = ref('')