import React, { Component } from 'react';
import logo from './logo.svg';
import Snake from './Snake';
import Food from './Food';
import './App.css';

const DIRECTIONS = {
  LEFT: 'LEFT',
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
}

function getRandomPoints() {
  let min = 1;
  let max = 98;
  let pointX  = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let pointY  = Math.floor((Math.random()*(max-min+1)+min)/2)*2;

  return [pointX, pointY];
}

let snakeMovement;

const initialState = {
  running: false,
  foodCount: 0,
  score: 0,
  food: getRandomPoints(),
  speed: 120,
  direction: DIRECTIONS.RIGHT,
  snakeDots: [
    [0,0],
    [2,0],
    [4,0],
    [6,0]
  ],
}

class App extends Component {
  state = initialState;

  componentDidMount() {
    document.onkeydown = this.handleKeyDown;
  }

  componentDidUpdate() {
    this.isOutOfGameArea();
    this.isSelfCollapsed();
    this.eatFood();
  }

  componentWillUnmount() {
    window.clearInterval(snakeMovement);
    this.setState(initialState);
  }

  handleKeyDown = (event) => {
    event = event || window.event;
    switch(event.keyCode) {
      case 37:
        this.setState({direction: DIRECTIONS.LEFT});
        break;
      case 38:
        this.setState({direction: DIRECTIONS.UP})
        break;
      case 39:
        this.setState({direction: DIRECTIONS.RIGHT})
        break;
      case 40:
        this.setState({direction: DIRECTIONS.DOWN})
        break;
      case 32:
        this.resumePause();
        break;  
    }
  }

  resumePause() {
    if(this.state.running === true) {
      window.clearInterval(snakeMovement);
      this.setState({running: false});
    }
    else {
      this.setState({running: true});
      snakeMovement = setInterval(this.moveSnake, this.state.speed);
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch(this.state.direction) {
      case DIRECTIONS.LEFT:
        head = [head[0] - 2, head[1]];
        break;
      case DIRECTIONS.UP:
        head = [head[0], head[1] - 2];
        break;
      case DIRECTIONS.RIGHT:
        head = [head[0] + 2, head[1]];
        break;
      case DIRECTIONS.DOWN:
        head = [head[0], head[1] + 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    })
  }

  isOutOfGameArea = () => {
    const head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if(head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.handleGameOver();
    }
  }

  handleGameOver = () => {
    alert("Game over!! Start Again?");
    window.clearInterval(snakeMovement);
    this.setState(initialState);
  }

  isSelfCollapsed = () => {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length-1];
    snake.pop();
    snake.forEach(dot => {
      if(head[0] === dot[0] && head[1] === dot[1]) {
        this.handleGameOver();
      }
    })
  }

  eatFood = () => {
    const head = this.state.snakeDots[this.state.snakeDots.length - 1];
    const food = this.state.food;
    if(head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomPoints()
      })
      this.setState({
        foodCount: this.state.foodCount + 1
      })
      this.increaseScore();
      this.increaseSnake();
    }
  }

  increaseSnake = () => {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseScore = () => {
    let score = this.state.score;
    score += 5;
    this.setState({ score });
  }

  render() {
    return (
      <>
      <h3 className="align-center">Snake Game</h3>
      <div style={{display: 'flex'}}>
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />
        </div>
        <div className="instruction-area">
          <div className="label-area">
            <h4 style={{marginTop: 0}}>Scoreboard</h4>
            <p><b>Score:</b> {this.state.score}</p>
            <p><b>Food Count:</b> {this.state.foodCount}</p>
          </div>
          <div className="label-area">
            <h4 style={{marginTop: 0}}>Instructions</h4>
            <p>Use arrow keys to control movement of snake</p>
            <span> ⬅️ ⬆️ ➡️  ⬇️</span>
            <p><b>Use spacebar to Pause/Play</b></p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
