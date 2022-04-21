import React, { useState, useEffect } from "react";

import Start from "../components/Quiz/Start.jsx";
import Question from "../components/Quiz/Question.jsx";
import End from "../components/Quiz/End.jsx";
import Modal from "../components/Quiz/Modal.jsx";
import quizData from "../src/data/quiz.json";

import "../styles/quiz.module.css";
import Layout from "../components/Layout.jsx";

let interval;

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <Layout title="Quiz">
      <section className="py-6 font-sans quizz h-full">
        {step === 1 && <Start onQuizStart={quizStartHandler} />}
        {step === 2 && (
          <Question
            data={quizData.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={quizData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
          />
        )}
        {step === 3 && (
          <End
            results={answers}
            data={quizData.data}
            onReset={resetClickHandler}
            onAnswersCheck={() => setShowModal(true)}
            time={time}
          />
        )}
        {showModal && <Modal onClose={() => setShowModal(false)} results={answers} data={quizData.data} />}
      </section>
    </Layout>
  );
};

export default Quiz;
