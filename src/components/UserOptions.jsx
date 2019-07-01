import Reactfrom "react";

function UserOptions(props){
  return (
    <div>
      <h3>{props.tweets} {props.following} {props.followers}</h3>
    </div>
  )
}
