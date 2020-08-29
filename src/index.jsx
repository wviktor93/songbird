/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Link, Switch, Route, MemoryRouter as Router } from 'react-router-dom';
import Header from './assets/modules/Header';
import Quiz1 from './assets/modules/quizes/Quiz1';
import Quiz2 from './assets/modules/quizes/Quiz2';
import Quiz3 from './assets/modules/quizes/Quiz3';
import Quiz4 from './assets/modules/quizes/Quiz4';
import Quiz5 from './assets/modules/quizes/Quiz5';
import Quiz6 from './assets/modules/quizes/Quiz6';
import groupsNames from './assets/modules/groupsNames';
import groupsNamesEng from './assets/modules/groupsNamesEng';
import win from './assets/images/win.gif';
import successFile from './assets/modules/quizes/success.mp3';
import errorFile from './assets/modules/quizes/error.mp3';

import randomInteger from './assets/modules/quizes/randomInteger';
import birdsData from './assets/modules/birdsData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      step: 0,
      currStep: 0,
      answeredStep: -1,
      isFinished: false,
      randoms: [
        randomInteger(0, groupsNames.length - 1),
        randomInteger(0, groupsNames.length - 1),
        randomInteger(0, groupsNames.length - 1),
        randomInteger(0, groupsNames.length - 1),
        randomInteger(0, groupsNames.length - 1),
        randomInteger(0, groupsNames.length - 1),
      ],
    };
    this.nextStepSetter = this.nextStepSetter.bind(this);
    this.goToNextQuiz = this.goToNextQuiz.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.finishQuiz = this.finishQuiz.bind(this);
  }

  nextStepSetter(group) {
    const { step } = this.state;

    this.setState({
      step: step + 1,
      answeredStep: group,
    });
  }

  incrementScore(num) {
    const { score } = this.state;
    this.setState({
      score: score + num,
    });
  }

  goToNextQuiz(e) {
    const currentStep = Number(e.target.getAttribute('step'));
    const { step, currStep, answeredStep } = this.state;

    if (answeredStep === currStep && step === currentStep) {
      this.setState({
        currStep: currStep + 1,
      });
    } else {
      e.preventDefault();
    }
  }

  finishQuiz(e) {
    const currentStep = Number(e.target.getAttribute('step'));
    const { step, currStep, answeredStep } = this.state;

    if (answeredStep === currStep && step === currentStep) {
      this.setState({
        currStep: currStep + 1,
      });
      this.setState({
        isFinished: true,
      });
    } else {
      e.preventDefault();
    }
  }

  render() {
    const success = new Audio(successFile);
    const error = new Audio(errorFile);
    success.volume = 0.1;
    error.volume = 0.1;
    const { score, currStep, isFinished, randoms } = this.state;

    console.log('Правильные ответы для проверки на абсолютную победу:')
    randoms.forEach((num, index) => console.log(birdsData[index][num].name))

    return (
      <>
        <Router>
          <Header score={score} />

          <div className="container navigation">
            <div className="row">
              <nav className="navigation__nav">
                <ul className="list-group list-group-horizontal question-groups">
                  {groupsNamesEng.map((group, index) => {
                    return (
                      <li
                        className={`list-group-item nav-link ${
                          currStep === index ? 'avaliable' : 'non-avaliable'
                        }`}
                        key={group}
                      >
                        <Link step={index} onClick={this.goToNextQuiz} to={`/${group}`}>
                          {groupsNames[index]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <Switch>
            <Route path={`/${groupsNamesEng[0]}`}>
              <Quiz1
                question={randoms[0]}
                group="0"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
                finishQuiz={this.finishQuiz}
                success={success}
                error={error}
              />
            </Route>

            <Route path={`/${groupsNamesEng[1]}`}>
              <Quiz2
                question={randoms[1]}
                group="1"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
                finishQuiz={this.finishQuiz}
                success={success}
                error={error}
              />
            </Route>

            <Route path={`/${groupsNamesEng[2]}`}>
              <Quiz3
                question={randoms[2]}
                group="2"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
                finishQuiz={this.finishQuiz}
                success={success}
                error={error}
              />
            </Route>

            <Route path={`/${groupsNamesEng[3]}`}>
              <Quiz4
                question={randoms[3]}
                group="3"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
                finishQuiz={this.finishQuiz}
                success={success}
                error={error}
              />
            </Route>

            <Route path={`/${groupsNamesEng[4]}`}>
              <Quiz5
                question={randoms[4]}
                group="4"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
                finishQuiz={this.finishQuiz}
                success={success}
                error={error}
              />
            </Route>

            <Route path={`/${groupsNamesEng[5]}`}>
              <Quiz6
                question={randoms[5]}
                group="5"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
                finishQuiz={this.finishQuiz}
                success={success}
                error={error}
              />
            </Route>

            <Route exact path="/">
              <Quiz1
                question={randoms[0]}
                group="0"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
                finishQuiz={this.finishQuiz}
                success={success}
                error={error}
              />
            </Route>

            <Route path="/modal">
              {isFinished ? (
                <div className="modal-window">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 content">
                        {score < 30 ? (
                          <>
                            <h2>
                              Количество баллов, которые вы набрали: {score}. Попробуйте пройти тест
                              еще раз, чтобы набрать максимальное количество баллов!
                            </h2>
                          </>
                        ) : (
                          <>
                            <h2>
                              Количество баллов, которые вы набрали: {score}. Поздравляю, это
                              максимально возможное количество баллов за этот тест!!!
                            </h2>
                            <div className="win-image">
                              <img src={win} alt="win" />
                            </div>
                          </>
                        )}
                        <button
                          type="button"
                          className="finish-quiz"
                          onClick={() => {
                            window.location.reload();
                          }}
                        >
                          Пройти тест еще раз
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
