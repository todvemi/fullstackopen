const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}


const Part = (props) => {
  return (
    <p>{props.name} {props.excs}</p>
  )
}


const Content = (props) => {
  const part1 = props.parts.parts[0]
  const part2 = props.parts.parts[1]
  const part3 = props.parts.parts[2]
  return (
    <div>
      <Part name={part1.name} excs={part1.exercises}/>
      <Part name={part2.name} excs={part2.exercises}/>
      <Part name={part3.name} excs={part3.exercises}/>
    </div>
  )
}


const Total = (props) => {
  const parts = props.exercises.parts
  const sum = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p>Number of exercises {sum}</p>
  ) 
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total exercises={course} />
    </div>
  )
}

export default App