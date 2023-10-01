import { useState } from 'react'

const RenderAllPersons = (props) => {
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

const RenderFoundPersons = (props) => {
  const searchTerm = props.searchTerm.toLowerCase()
  const personObjects = props.content
  const personsToRender = []
  const personNames = props.content.map((person) => person.name.toLowerCase())
  const finder = personNames.map((personName, index) => personName.includes(searchTerm) 
  ? personsToRender.push(personObjects[index])
  : null)
  return(
    <div>
      {personsToRender.map((persons, i) =>
      <p key={i}>
        {persons.name} {persons.phonenumber}
      </p>
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456' },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523' },
    { name: 'Dan Abramov', phonenumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findPerson, setFindPerson] = useState('')

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

  const handleFindChange = (event) => {
    setFindPerson(event.target.value)
  }

  return (
    <div>
      <h1>PHONEBOOK</h1>
      <div>
        filter shown with:
        <input value={findPerson}
        onChange={handleFindChange} />
      </div>
      <h2>add a new</h2>
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
      <h2>numbers</h2>
      {findPerson == '' 
      ? <RenderAllPersons content={persons} />
      : <RenderFoundPersons content={persons} searchTerm={findPerson} />
        }
    </div>
  )

}

export default App