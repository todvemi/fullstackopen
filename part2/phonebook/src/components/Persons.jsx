import RenderPersons from "./RenderPersons";

const Persons = (props) => {
    var personsToRender = []
    if (props.searchTerm !== '') {
        personsToRender = props.content.filter(person => person.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
    } else {
        personsToRender = props.content
    }

    return(
        <RenderPersons content={personsToRender} removePerson={props.removePerson} />
    )
}


export default Persons