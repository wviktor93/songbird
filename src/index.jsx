/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';

import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Link, Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import NotFound from './assets/modules/NotFound';
import Header from './assets/modules/Header';
import Quiz1 from './assets/modules/quizes/Quiz1';
import Quiz2 from './assets/modules/quizes/Quiz2';
import Quiz3 from './assets/modules/quizes/Quiz3';
import Quiz4 from './assets/modules/quizes/Quiz4';
import Quiz5 from './assets/modules/quizes/Quiz5';
import Quiz6 from './assets/modules/quizes/Quiz6';
import birdsData from './assets/modules/birdsData';
import groupsNames from './assets/modules/groupsNames';
import randomInteger from './assets/modules/quizes/randomInteger';

// const history = createBrowserHistory();

function unloaded() {
  // setTimeout(() => {
  //   console.log(location);
  // }, 3000);
  // setTimeout(() => {
  //   console.log('перезагрузка');
  // }, 3000);

  localStorage.setItem('unload', location.href);

  // document.location.href = 'http://localhost:8080'

  // if (location.pathname !== '/'){
  //   location.href = '/'
  // }
}

function loaded() {
  console.log(localStorage.getItem('unload'));
  localStorage.removeItem('unload');
  console.log(location.pathname);
  if (location.pathname !== '/') {
    location.href = '/';
  }
}

window.addEventListener('beforeunload', unloaded);
window.addEventListener('load', loaded);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      step: 0,
      randoms: [
        randomInteger(0, groupsNames.length),
        randomInteger(0, groupsNames.length),
        randomInteger(0, groupsNames.length),
        randomInteger(0, groupsNames.length),
        randomInteger(0, groupsNames.length),
        randomInteger(0, groupsNames.length),
      ],
      // answered: [false, false, false, false, false, false],
    };
    this.nextStepSetter = this.nextStepSetter.bind(this);
    this.goToNextQuiz = this.goToNextQuiz.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }

  nextStepSetter() {
    // const newHistory = this.state.answered;
    // newHistory.pop();
    // newHistory.unshift(true);
    console.log(this.state);
    this.setState({
      step: this.state.step + 1,
      // answered: newHistory,
    });
  }

  incrementScore(num) {
    this.setState({
      score: this.state.score + num,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  goToNextQuiz(e) {
    const step = Number(e.target.getAttribute('step'));
    if (this.state.step !== step) {
      e.preventDefault();
    }
    console.log(step);
    console.log(this.state.step);
  }

  render() {
    const { score } = this.state;
    return (
      <>
        <BrowserRouter>
          <Header score={score} />
          <button onClick={this.nextStepSetter}>nextStepSetter </button>
          <div className="container">
            <div className="row">
              <nav>
                <ul className="list-group list-group-horizontal">
                  {groupsNames.map((group, index) => {
                    console.log(`/${group}`);
                    return (
                      <li className="list-group-item nav-link" key={index}>
                        <Link step={index} onClick={this.goToNextQuiz} to={`/${group}`}>
                          {group}
                        </Link>
                      </li>
                    );
                  })}
                  {/*  */}

                  {/* <li className="list-group-item nav-link">
                    <Link step={0} onClick={this.goToNextQuiz} to="/Разминка">
                      {groupsNames[0]}
                    </Link>
                  </li>
                  <li className="list-group-item nav-link">
                    <Link step={1} onClick={this.goToNextQuiz} to="/Воробьиные">
                      {groupsNames[1]}
                    </Link>
                  </li>
                  <li className="list-group-item nav-link">
                    <Link step={2} onClick={this.goToNextQuiz} to="/Лесные птицы">
                      {groupsNames[2]}
                    </Link>
                  </li>
                  <li className="list-group-item nav-link">
                    <Link step={3} onClick={this.goToNextQuiz} to="/Певчие птицы">
                      {groupsNames[3]}
                    </Link>
                  </li>
                  <li className="list-group-item nav-link">
                    <Link step={4} onClick={this.goToNextQuiz} to="/Хищные птицы">
                      {groupsNames[4]}
                    </Link>
                  </li>
                  <li className="list-group-item nav-link">
                    <Link step={5} onClick={this.goToNextQuiz} to="/Морские птицы">
                      {groupsNames[5]}
                    </Link>
                  </li> */}
                  {/*  */}
                </ul>
              </nav>
            </div>
          </div>
          <Switch>
            <Route path={`/${groupsNames[0]}`}>
              <Quiz1
                question={this.state.randoms[0]}
                group="0"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>

            <Route path={`/${groupsNames[1]}`}>
              <Quiz2
                question={this.state.randoms[1]}
                group="1"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>

            <Route path={`/${groupsNames[2]}`}>
              <Quiz3
                question={this.state.randoms[2]}
                group="2"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>

            <Route path={`/${groupsNames[3]}`}>
              <Quiz4
                question={this.state.randoms[3]}
                group="3"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>

            <Route path={`/${groupsNames[4]}`}>
              <Quiz5
                question={this.state.randoms[4]}
                group="4"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>

            <Route path={`/${groupsNames[5]}`}>
              <Quiz6
                question={this.state.randoms[5]}
                group="5"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>

            {/* последний рабочий через цикл
           {groupsNames.map((group, index) => {
            return(
              <Route path={`/${group}`}>
              <Quiz1
                question={this.state.randoms[index]}
                group={index}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>
            )
          })} */}

            <Route>
              <Quiz1
                question={this.state.randoms[0]}
                group="0"
                isAnswered={false}
                mistakes={0}
                properties={this.state}
                goToNext={this.goToNextQuiz}
                nextStepSetter={this.nextStepSetter}
                incrementScore={this.incrementScore}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
