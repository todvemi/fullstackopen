const Course = ({ course }) => {
    
    const Header = (props) => {
        return(
            <h1>{props.name}</h1>
        )
    }

    const Content = (props) => {
        const parts = props.content
        return(
            <div>
                {parts.map(part => 
                    <p key={part.id}>{part.name} {part.exercises}</p>
                    )}
            </div>
        )
    }

    const Total = (props) => {
        const content = props.content
        const exercises = content.map((part) => part.exercises)
        const totalExercises = exercises.reduce((total, exerciseAmount) => total + exerciseAmount, 0)
        return(
            <p><b>total of {totalExercises}</b></p>
        )
    }


    return(
    <div>
        <Header name={course.name} />
        <Content content={course.parts} />
        <Total content={course.parts} />
    </div>
    )
}

  
  
export default Course