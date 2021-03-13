export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author
    const votes = []
    optionOne.votes.map( e => votes.push(e))
    optionTwo.votes.map( e => votes.push(e))
  
    return {
      name,
      id,
      timestamp,
      optionOneText: optionOne.text,
      optionOneVotes: optionOne.votes,
      optionTwoText: optionTwo.text,
      optionTwoVotes: optionTwo.votes,
      avatar: avatarURL,
      votes,
      hasVoted: votes.includes(authedUser),
      
    }
  }