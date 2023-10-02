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

export default RenderFoundPersons