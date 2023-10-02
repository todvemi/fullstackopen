import { useState } from 'react'
import RenderAllPersons from './components/RenderAllPersons'
import RenderFoundPersons from './components/RenderFoundPersons'
import FilterNames from './components/FilterNames'
import AddPersonForm from './components/AddPersonForm'

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
      <FilterNames value={findPerson} onChange={handleFindChange} />
      <h2>add a new</h2>
      <AddPersonForm
        formSubmit={addPerson}
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newNumber}
        numberChange={handleNumberChange} />
      <h2>numbers</h2>
      {findPerson == '' 
      ? <RenderAllPersons content={persons} />
      : <RenderFoundPersons content={persons} searchTerm={findPerson} />
        }
    </div>
  )

}

export default App