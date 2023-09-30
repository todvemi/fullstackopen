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

    return(
    <div>
        <Header name={course.name} />
        <Content content={course.parts} />
    </div>
    )
}



    //   const Part = (props) => {
    //     return (
    //       <p>{props.name} {props.excs}</p>
    //     )
    //   }


    //   const Content = (props) => {
    //     const part1 = props.parts.parts[0]
    //     const part2 = props.parts.parts[1]
    //     const part3 = props.parts.parts[2]
    //     return (
    //       <div>
    //         <Part name={part1.name} excs={part1.exercises}/>
    //         <Part name={part2.name} excs={part2.exercises}/>
    //         <Part name={part3.name} excs={part3.exercises}/>
    //       </div>
    //     )
    //   }


    //   const Total = (props) => {
    //     const parts = props.exercises.parts
    //     const sum = parts[0].exercises + parts[1].exercises + parts[2].exercises
    //     return (
    //       <p>Number of exercises {sum}</p>
    //     ) 
    //   }
  
  
  
export default Course