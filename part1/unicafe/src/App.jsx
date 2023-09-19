import { useState } from 'react'

const Header_h1 = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Header_h2 = (props) => {
  return (
    <h2>{props.name}</h2>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const totalClicks = props.counter[0] + props.counter[1] + props.counter[2]
  const average = (props.counter[0] - props.counter[2]) / totalClicks
  const positive = (props.counter[0] / totalClicks) * 100
  if (totalClicks > 0){
    return (
      <table>
        <tbody>
        <StatisticLine name="good" value={props.counter[0]}/>
        <StatisticLine name="neutral" value={props.counter[1]}/>
        <StatisticLine name="bad" value={props.counter[2]}/>
        <StatisticLine name="all" value={totalClicks}/>
        <StatisticLine name="average" value={average.toFixed(3)}/>
        <StatisticLine name ="positive" value={positive.toFixed(1)}/>
        </tbody>
      </table>
    )}
  return(
    <p>No feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // click events:
  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  return (
    <div>
      <Header_h1 name="Give Feedback"/>
      <Button handleClick={goodFeedback} text="good"/>
      <Button handleClick={neutralFeedback} text="neutral"/>
      <Button handleClick={badFeedback} text="bad"/>
      <Header_h2 name="statistics" />
      <Statistics counter={[good, neutral, bad]}/>
    </div>
  )
}


export default App
