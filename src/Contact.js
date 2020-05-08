import React from 'react'
function Contact(props) {
  console.log(props.match.params.human)
  const human = props.match.params.human;
  return (
    <div>
      <h1>This is the contact page</h1>
      <p>You can contact {human} person speronlakjkj.</p>
    </div>
  )
}
export default Contact;