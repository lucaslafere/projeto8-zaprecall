import React from "react"
import QuestionBox from "./QuestionBox"




export default function Questions () {

    return (
        <>
            {arrayQuestions.map((el, index) => <EachQuestion question={el.question} answer={el.answer} key={index}/>)}
        </>
    )
}

//Questions Object

const arrayQuestions = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __ ", answer: "Uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answer: "Letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer: "Expressões"},
    {question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma"},
    {question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __", answer: "Passar diferentes informações para componentes "},
    {question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]


//Randomize sort questions

function randomize () {
    return Math.random() - 0.5;
}

arrayQuestions.sort(randomize)


//Questions




function EachQuestion (props) {
    const [start, setStart] = React.useState("")
    React.useEffect(() => {
        setStart(<QuestionBox setStart={setStart} question={props.question} answer={props.answer} />)
      }, [])
    
    

    return (
        <>
        	{start}
        </>
    )
}
