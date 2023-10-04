const RenderAllPersons = (props) => {

    const handleRemovePerson = (id) => {
      props.removePerson(id)
    }

    const persons = props.content
    return(
      <div>
        {persons.map((person) =>
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


export default RenderAllPersons