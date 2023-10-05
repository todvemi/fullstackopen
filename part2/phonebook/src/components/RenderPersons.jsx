const RenderPersons = (props) => {

    const handleRemovePerson = (id) => {
      props.removePerson(id)
    }
    
    const persons = props.content
    return(
      <div className="persons">
        {persons.map((person) =>
        <div key={person.id} style={{ display: 'flex', alignItems: 'center' }}>
        <p>
          {person.name}
        </p>
        <p className="number">{person.number}</p>
        <button onClick={() => handleRemovePerson(person.id)}>x</button>
        </div>
        )}
      </div>
    )
  }


export default RenderPersons