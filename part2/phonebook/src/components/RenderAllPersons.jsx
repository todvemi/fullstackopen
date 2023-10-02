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

export default RenderAllPersons