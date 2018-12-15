import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  changeData(squares) {
    this.setState({ squares });
  }

  render() {
    const { squares } = this.state;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            changeData={() => this.changeData(squares)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
