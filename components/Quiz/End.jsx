import React, { useEffect, useState } from "react";
import "../../styles/quiz.module.css";
import { formatTime } from "../../utils/formatTime";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  return (
    <div className="p-6 bg-white rounded card">
      <div className="card-content">
        <div className="content">
          <h3>Tus resultados</h3>
          <p>
            {correctAnswers} de {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          <p>
            <strong>Tu tiempo:</strong> {formatTime(time)}
          </p>
          <button
            className="px-4 py-2 mt-4 text-white transition-all rounded bg-orange-7000 hover:bg-orange-600 focus:outline-none "
            onClick={onAnswersCheck}
          >
            Revisa tus respuestas
          </button>
          <button
            className="px-4 py-2 mt-4 text-white transition-all bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-non"
            onClick={onReset}
          >
            Intenta nuevamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
