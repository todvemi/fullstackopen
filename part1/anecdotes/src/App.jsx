import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.command}>{props.text}</button>
  )
}

const VoteAmount = (props) => {
  return(
    <p>has <b>{props.amount}</b> votes</p>
  )
}

const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const randomNumber = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 1))
    // console.log(random)
    setSelected(random)
  }

  // storing voted points
  const [points, vote] = useState(new Uint8Array(8))

  const newVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    vote(newPoints)
  }

  const findMostVotes = () => {
    let maxIndex = 0
    let maxVotes = points[0]
    for (let i = 1; i < points.length; i++) {
      if (points[i] > maxVotes) {
        maxIndex = i
        maxVotes = points[i]
        // console.log(maxIndex)
      }
    }
    return maxIndex
  }

  const mostVotesIndex = findMostVotes()

  return (
    <div>
      <Header text="anecdote of the day" />
      {anecdotes[selected]} <br />
      <VoteAmount amount={points[selected]} />
    <br />
      <Button command={randomNumber} text="next anecdote" />
      <Button command={newVote}text="vote" />
      <Header text="anecdote with the most votes" />
      <p>{anecdotes[mostVotesIndex]}</p>
    </div>
  )
}


export default App