import React, { Component } from 'react';
import './playerSelect.css';

// yes, I know it's not actually a modal, I changed my mind and I can't be arsed to change the class name
export default class PlayerSelectModal extends Component {
  constructor(props){
    super(props);
    this.firstColumn = React.createRef();
    this.state = {
      interested: ['CrunchyButtMD', 'thelongestallowedusername', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'test14'],
      playing: [],
      joined: [],
      streamerSeat: true
    }
  }

  componentDidMount() {
    this.updateColumnSizes();
    window.addEventListener("resize", this.updateColumnSizes);
  }

  updateColumnSizes = () => {
    this.setState((state) => {
      return {
        ...state,
        columnWidth: this.firstColumn.current.offsetWidth
      };
    })
  }

  handleNewPlayerRequest = (username, column='interested') => {
    if(this.state?.interested?.includes(username)
    || this.state?.playing?.includes(username)
    || this.state?.joined?.includes(username)) {
      return false;
    }
    return this.updateColumnForUser(username, 'interested');
  }

  updateColumnForUser = (username, newColumn) => {
    if(!this.state || !this.state[newColumn] || this.state[newColumn]?.includes(username)) return false;

    this.removeUser(username);
    this.setState((state) => {
      return {
        ...state,
        [newColumn]: [
          ...state[newColumn],
          username
        ]
      }
    });
    return true;
  }

  removeUser = (username) => {
    return this.setState((state) => {
      return {
        ...state,
        interested: state.interested.filter((rName) => rName !== username),
        playing: state.playing.filter((rName) => rName !== username),
        joined:  state.joined.filter((rName) => rName !== username)
      }
    });
  }

  playerCount = () => {
    return this.state.playing.length + this.state.joined.length +
            (this.state.streamerSeat ? 1 : 0);
  }

  toggleStreamerSeat = () => {
    this.setState((state) => {
      return {
        ...state,
        streamerSeat: !state.streamerSeat
      }
    });
  }

  startGame = () => {
    // clear for now; eventually, save elsewhere to report on user play history for that session
    this.setState ((state) => {
      return {
        ...state,
        interested: [],
        playing: [],
        joined: []
      };
    })
    this.props.startGame();
  }

  renderPlayerCard = (username, id, curColumn) => {
    return (
      <div key={id} className='playerCard'>
        <p className='playerName' style={{maxWidth: this.state.columnWidth - 25}}>{username}</p>
        <div className='changeColButtonsContainer'>
        {curColumn !== 'interested' && <button className='changeCol' onClick={this.updateColumnForUser.bind(this, username, 'interested')}>Interested</button>}
        {curColumn !== 'playing' && <button className='changeCol' onClick={this.updateColumnForUser.bind(this, username, 'playing')}>Playing</button>}
        {curColumn !== 'joined' && <button className='changeCol' onClick={this.updateColumnForUser.bind(this, username, 'joined')}>Joined</button>}
        <button className='changeCol' style={{backgroundColor: 'indianred'}} onClick={this.removeUser.bind(this, username)}>X</button>
        </div>
      </div>
    );
  }

  renderStreamerSeatToggle = () => {
    return (
      <div class='my-toggle-group'>
      <p class='toggle-label'> Reserve seat for streamer? </p>
        <div class='my-toggle'>
            <input type="checkbox" onChange={this.toggleStreamerSeat}/>
            <div class='my-toggle-text no' aria-hidden="true">No</div>
            <div class='my-toggle-text yes' aria-hidden="true">Yes</div>
            <div class='my-toggle-orb'></div>
        </div>
      </div>
    )
  }

  render() {
    let startGameClass = 'startGame';
    if(this.playerCount() < this.props.game?.['Min players']){
      startGameClass += ' disabled';
    }

    return (
      <div className='playerSelectContainer'>
        <div className="header">
          {this.renderStreamerSeatToggle()}
          <p style={{fontSize: '16px', fontWeight: 'bold'}}>{this.playerCount()} of {this.props.game?.['Max players']} seats claimed</p>
          <button className={startGameClass} onClick={this.startGame}>Start Game</button>
        </div>
        <div className='playerCardContainer'>
          <div ref={this.firstColumn} className='playerCardColumn interested'>
            <p style={{marginTop: '0', paddingTop: '10px', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold'}}>Interested</p>
            {this.state.interested.map((username, i) => this.renderPlayerCard(username, i, 'interested') )}
          </div>

          <div className='playerCardColumn playing'>
            <p style={{marginTop: '0', paddingTop: '10px', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold'}}>Playing</p>
            {this.state.playing.map((username, i) => this.renderPlayerCard(username, i, 'playing') )}
          </div>

          <div className='playerCardColumn joined'>
            <p style={{marginTop: '0', paddingTop: '10px', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold'}}>Joined</p>
            {this.state.joined.map((username, i) => this.renderPlayerCard(username, i, 'joined') )}
          </div>
        </div>
      </div>
    );
  }
}
