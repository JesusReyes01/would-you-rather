export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author
    const votes = optionOne.votes
  
    return {
      name,
      id,
      timestamp,
      optionOneText: optionOne.text,
      optionOneVotes: optionOne.vote,
      optionTwoText: optionTwo.text,
      optionTwoVotes: optionTwo.vote,
      avatar: avatarURL,
    //   hasVoted: votes.includes(authedUser),
      
    }
  }