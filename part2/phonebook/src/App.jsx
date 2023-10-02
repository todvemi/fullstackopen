import { useState, useEffect } from 'react'
import RenderAllPersons from './components/RenderAllPersons'
import RenderFoundPersons from './components/RenderFoundPersons'
import FilterNames from './components/FilterNames'
import AddPersonForm from './components/AddPersonForm'
import axios from 'axios'


// 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findPerson, setFindPerson] = useState('')

  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        // console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
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