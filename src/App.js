import {Component} from 'react'
import {v4} from 'uuid'
import CharacterItem from './component/characterItem'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputWord: '',
    characterList: [],
    isAddButtonClicked: false,
  }

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputWord: value, isAddButtonClicked: true})
  }

  onAdd = event => {
    event.preventDefault()
    const {inputWord} = this.state
    const newWord = {
      id: v4(),
      word: inputWord,
      isAddButtonClicked: false,
    }

    this.setState(prevState => ({
      characterList: [...prevState.characterList, newWord],
      inputWord: '',
    }))
  }

  render() {
    const {inputWord, isAddButtonClicked, characterList} = this.state
    return (
      <div className="character-main-container">
        <div className="character-sub-container">
          <h1 className="main-heading">Count the characters like a boss </h1>
          {isAddButtonClicked ? (
            <div>
              <ul>
                {characterList.map(each => (
                  <CharacterItem key={each.id} characterItemDetails={each} />
                ))}
              </ul>
            </div>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          )}
        </div>
        <div className="character-sub-container-1">
          <h1 className="sub-heading">Character Counter</h1>
          <div className="input-container">
            <form onSubmit={this.onAdd}>
              <input
                type="text"
                placeholder="Enter the characters here"
                className="input-element"
                value={inputWord}
                onChange={this.onChangeInput}
              />

              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
