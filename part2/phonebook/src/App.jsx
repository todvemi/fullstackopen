import { useState, useEffect } from 'react'
import RenderAllPersons from './components/RenderAllPersons'
import RenderFoundPersons from './components/RenderFoundPersons'
import FilterNames from './components/FilterNames'
import AddPersonForm from './components/AddPersonForm'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findPerson, setFindPerson] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const onlyNames = persons.map((person) => person.name)
    if (onlyNames.includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find((person) => person.name === newName).id
        personService
            .update(id, personObject)
            .then((returnedPersons) => {
              setPersons(persons.map(person => person.id !== id ? person : returnedPersons))
              setNewName('')
              setNewNumber('')
            })  
      } else {
        setNewName('')
        setNewNumber('')
      }
  } else {
      personService
          .create(personObject)
          .then(returnedPersons => {
              setPersons(persons.concat(returnedPersons));
              setNewName('');
              setNewNumber('');
          });
  }}

  const removePerson = (id) => {
    const person = persons.find(person => person.id === id)
   if (window.confirm(`do you really want to remove ${person.name} from the phonebook?`)) {
      personService
        .remove(id)
        .then((returnedPersons) => {
          const updatedPersons = persons.filter(person => person.id !== id)
          setPersons(updatedPersons)
          findPerson !== '' ? setFindPerson('') : null
      })}
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
      ? <RenderAllPersons content={persons} removePerson={removePerson} />
      : <RenderFoundPersons content={persons} searchTerm={findPerson} removePerson={removePerson} />
        }
    </div>
  )

}

export default App