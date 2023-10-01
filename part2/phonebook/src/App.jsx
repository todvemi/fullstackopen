import { useState } from 'react'

const RenderPersons = (props) => {
  const persons = props.content
  return(
    <div>
      {persons.map((persons, i) =>
      <p key={i}>
        {persons.name} {persons.phonenumber}
      </p>
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phonenumber: newNumber
    }
    const onlyNames = persons.map((person) => person.name)
    onlyNames.includes(newName)
    ? alert(`${newName} is already added to phonebook`) 
    : setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          number: 
          <input value={newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <RenderPersons content={persons} />
    </div>
  )

}

export default App