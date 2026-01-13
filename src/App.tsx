import React, { useState } from "react";
import CircularText from './components/CircularText';
import './App.css';
import Snowfall from "react-snowfall";
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [snow, setSnow] = useState(false);

  const quizQuestions = [
    {
      question: "Comment s'appelle le chien de Mickaël ?",
      options: ["Tidus", "Rex", "Pikachu"],
      correct: 0,
    },
    {
      question: "Quel est le nom de variable préféré de Mickaël ?",
      options: ["data", "zizi", "resultFinal"],
      correct: 1,
    },
    {
      question: "Quel est le langage préféré de Mickaël ?",
      options: ["PHP (RIP)", "Javascript", "Python"],
      correct: 0,
    },
    {
      question: "Quelle est son ex-pizza préférée ?",
      options: ["Reine", "4 fromages", "Océane"],
      correct: 2,
    },
    {
      question: "Quel est son jeu vidéo préféré en ce moment ?",
      options: [
        "Football Manager",
        "FIFA 2004",
        "League of Legends",
      ],
      correct: 0,
    },
    {
      question: "Qui est son élève préféré ?",
      options: [
        "Clémentine",
        "Simon",
        "Il veut pas le dire mais on sait tous qui c'est",
      ],
      correct: 2,
    },
    {
      question: "Que dit-il le plus souvent en cours ?",
      options: [
        "“Push sur main direct, on s'en fout.”",
        "Test des trucs et tu verras, tu vas pas casser internet.”",
        "“Putain le chien a chié sur le tapis !”",
      ],
      correct: 1,
    },
    {
      question: "Quelle est le coût de ses cours particuliers ?",
      options: [
        "Gratuit !",
        "50 € / heure",
        "Une bière au Judor (n'y aller pas, un lapin vous y attends)",
      ],
      correct: 1,
    },
    {
      question: "Quelle est la vraie source de ses super pouvoirs ?",
      options: [
        "Le café",
        "Les merge conflicts",
        "Les questions de 17h29",
      ],
      correct: 0,
    },
  ];

  const QuizAnswer = (selectedIndex: number) => {
    const isCorrect = selectedIndex === quizQuestions[quizStep].correct;
    if (isCorrect) setScore((prev) => prev + 1);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const activeSnow = () => {
    setSnow((oldValue) => !oldValue)
  }
  return (
    <>
      <Analytics />
      {snow && <>
        <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      /></>}
      <header onClick={activeSnow}>
        <h1>🎅 Secret Santa</h1>
        <p>Celui qui a réussi à faire dire “c’est le fameux zizi” à Cindy.</p>
        <CircularText text="MICKAEL*LAMBERT*" className="circular-hero" />
      </header>
      <main>
        <section className="quiz">
          <h2>Quiz : Connais-tu vraiment Mickaël ?</h2>
          {!showResult ? (
            <>
              <p>{quizQuestions[quizStep].question}</p>
              {quizQuestions[quizStep].options.map((option, i) => (
                <button key={i} onClick={() => QuizAnswer(i)}>
                  {option}
                </button>
              ))}
              <p>
                Question {quizStep + 1}/{quizQuestions.length} (Score: {score})
              </p>
            </>
          ) : (
            <>
              <h3>
                Résultat : {score}/{quizQuestions.length} -{" "}
                {score === quizQuestions.length
                  ? "Expert Mickaël ! 🎉"
                  : "Revois tes bases avec Mickaël 😉"}
              </h3>
              <button
                onClick={() => {
                  setQuizStep(0);
                  setScore(0);
                  setShowResult(false);
                }}
              >
                Rejouer
              </button>
            </>
          )}
        </section>
        <section className="fb-section">
    <p className="fb-hook">
      Tu t'attendais à ce que je publie des dossiers ? Pas besoin de moi, ils sont déjà là 👇
    </p>
    <a
      href="https://www.facebook.com/mclamber"
      target="_blank"
      rel="noreferrer"
      className="fb-button"
    >
      Voir les dossiers sur Facebook
    </a>
        </section>
        <section>
          <h2>Oseras-tu appuyer sur un bouton ?</h2>
        <iframe width="110" height="100" src="https://www.myinstants.com/instant/bonne-annee-bande-dencule-chtio-taz-5437/embed/" frameborder="0" scrolling="no"></iframe>
        <iframe width="110" height="100" src="https://www.myinstants.com/instant/fart-button/embed/" frameborder="0" scrolling="no"></iframe>
        <iframe width="110" height="100" src="https://www.myinstants.com/instant/ouille-aie-14913/embed/" frameborder="0" scrolling="no"></iframe>
          <br /><br />
          <iframe width="110" height="100" src="https://www.myinstants.com/instant/alerte-au-gogole/embed/" frameborder="0" scrolling="no"></iframe>
          <iframe width="110" height="100" src="https://www.myinstants.com/instant/fart/embed/" frameborder="0" scrolling="no"></iframe>
          <iframe width="110" height="100" src="https://www.myinstants.com/instant/couscous-merguez-9601/embed/" frameborder="0" scrolling="no"></iframe>
          <br /><br />
          <iframe width="110" height="100" src="https://www.myinstants.com/instant/hugooo-89724/embed/" frameborder="0" scrolling="no"></iframe>
          <iframe width="110" height="100" src="https://www.myinstants.com/instant/quoi-de-neuf-dans-ton-troue-99428/embed/" frameborder="0" scrolling="no"></iframe>
          <iframe width="110" height="100" src="https://www.myinstants.com/instant/petit-poney/embed/" frameborder="0" scrolling="no"></iframe>

        </section>
      </main>
      <footer>
        <p>&copy; Wild Code School 2025</p>
      </footer>
    </>
  );
};

export default App;
