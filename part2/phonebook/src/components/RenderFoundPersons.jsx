const RenderFoundPersons = (props) => {
    
  const handleRemovePerson = (id) => {
    props.removePerson(id)
  }
  
    const searchTerm = props.searchTerm.toLowerCase()
    const personObjects = props.content
    const personsToRender = []
    const personNames = props.content.map((person) => person.name.toLowerCase())
    const finder = personNames.map((personName, index) => personName.includes(searchTerm) 
    ? personsToRender.push(personObjects[index])
    : null)
    return(
      <div>
        {personsToRender.map((person) =>
        <div key={person.id} style={{ display: 'flex', alignItems: 'center' }}>
        <p>
          {person.name} {person.number}
        </p>
        <button onClick={() => handleRemovePerson(person.id)}>x</button>
        </div>
        )}
      </div>
    )
  }

export default RenderFoundPersons