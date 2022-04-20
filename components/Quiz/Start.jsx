import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="p-6 font-sans bg-white rounded-lg card">
      <div className="card-content">
        <div className="content">
          <h1>Test Otaku</h1>
          <div className="content__image">
            <img src="https://i.postimg.cc/tCtPs7RQ/image-inicio.jpg" />
          </div>
          <h2>Demuestra cuánto sabes de animes en este quizz</h2>
          <p>¡Buena suerte!</p>
          <button
            className="px-5 py-2 mt-4 text-white bg-indigo-700 rounded-lg is-info is-medium"
            onClick={onQuizStart}
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
