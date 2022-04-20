import React, { useState, useEffect, useRef } from "react";

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Por favor, seleccione una opción");
    }
    onAnswerUpdate((prevState) => [...prevState, { q: data.question, a: selected }]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg card">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <figure className="card__image">
            <img src={data.image} />
          </figure>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button
            className="px-5 py-2 mt-4 text-white bg-indigo-700 rounded-lg button is-link is-medium is-fullwidth"
            onClick={nextClickHandler}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
