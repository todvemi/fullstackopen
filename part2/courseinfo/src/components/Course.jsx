const Course = ({ courses }) => {
    
    const Header1 = (props) => {
        return(
            <h1>{props.name}</h1>
        )
    }

    const Header2 = (props) => {
        return(
            <h2>{props.name}</h2>
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
            <p><b>total of {totalExercises} exercises</b></p>
        )
    }

    const RenderCourses = (props) => {
       return(
            <div>
                {courses.map((course, i) => (
                    <div key={i}>
                        <Header2 name={course.name} />
                        <Content content={course.parts} />
                        <Total content={course.parts} />
                    </div>
                ))}
            </div>
       )
    }

    return(
    <div>
        <Header1 name="Web development curriculum" /> 
        <RenderCourses courses={courses} />
    </div>
    )
}


export default Course