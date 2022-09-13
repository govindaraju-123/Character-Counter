const CharacterItem = props => {
  const {characterItemDetails} = props
  const {word} = characterItemDetails
  return (
    <li>
      <p>
        {word}:{word.length}
      </p>
    </li>
  )
}

export default CharacterItem
