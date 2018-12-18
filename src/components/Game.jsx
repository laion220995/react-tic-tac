import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      status: 'Next turn: X',
      xIsNext: true,
    };

    this.resetClick = this.resetClick.bind(this);
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (
        squares[a]
        && squares[a] === squares[b]
        && squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  changeStatus(xIsNext) {
    const { squares } = this.state;

    const winner = this.calculateWinner(squares);
    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    this.setState({ status });
  }

  handleClick(i) {
    const { squares, xIsNext } = this.state;

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({ squares });
    this.setState({ xIsNext: !xIsNext });
    this.changeStatus(!xIsNext);
  }

  resetClick() {
    this.setState(state => ({
      squares: Array(9).fill(null),
      status: 'Next turn: X',
      xIsNext: !state.xIsNext,
    }));
  }

  render() {
    const { squares, xIsNext, status } = this.state;

    const resetButton = (
      <button type="button" onClick={this.resetClick}>
        reset
      </button>
    );

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            xIsNext={xIsNext}
            changeSquares={() => this.changeSquares(squares)}
            changeXIsNext={() => this.changeXIsNext()}
            handleClick={i => this.handleClick(i)}
          />
        </div>
        <h6>{status}</h6>
        {this.calculateWinner(squares) && resetButton}
      </div>
    );
  }
}

export default Game;
