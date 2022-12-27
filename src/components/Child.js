import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';


function Child(props) {
    let [numOfLikes, setNumOfLikes] = useState(0);
    const like = () => {
        setNumOfLikes(numOfLikes + 1);
        props.totalLikes();
    }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image_url} onClick={like} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Number of Likes: {numOfLikes}
          </Card.Text>
          
        </Card.Body>
      </Card>
      <>-</>
      <>-</>
    </>
  );
}

export default Child;
