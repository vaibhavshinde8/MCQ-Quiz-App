import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";

const questionsData = [
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
    answer: "Mahatma Gandhi",
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Peacock"],
    answer: "Tiger",
  },
  {
    question: "Which river is the longest in India?",
    options: ["Ganges", "Yamuna", "Godavari", "Brahmaputra"],
    answer: "Ganges",
  },
  {
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Sarvepalli Radhakrishnan", "Indira Gandhi", "B. R. Ambedkar"],
    answer: "Dr. Rajendra Prasad",
  },
  {
    question: "In which year did India gain independence?",
    options: ["1947", "1950", "1935", "1960"],
    answer: "1947",
  },
  {
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: ["Mumbai", "Bangalore", "Hyderabad", "Chennai"],
    answer: "Bangalore",
  },
  {
    question: "What is the capital of the Indian state of Maharashtra?",
    options: ["Nagpur", "Pune", "Mumbai", "Nashik"],
    answer: "Mumbai",
  },
  {
    question: "Who wrote the Indian national anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subramania Bharati"],
    answer: "Rabindranath Tagore",
  },
  {
    question: "Which Indian festival is known as the 'Festival of Lights'?",
    options: ["Holi", "Diwali", "Eid", "Pongal"],
    answer: "Diwali",
  },
  {
    question: "Which Indian freedom fighter is famous for the slogan 'Inquilab Zindabad'?",
    options: ["Bhagat Singh", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
    answer: "Bhagat Singh",
  },
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <Result score={score} totalQuestions={questionsData.length} />
      ) : (
        <Question
          question={questionsData[currentQuestion].question}
          options={questionsData[currentQuestion].options}
          handleAnswerOptionClick={handleAnswerOptionClick}
          questionIndex={currentQuestion + 1}
          totalQuestions={questionsData.length}
        />
      )}
    </div>
  );
}

export default App;
