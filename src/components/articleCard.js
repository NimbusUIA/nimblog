import { Card, CardMedia, CardTitle, CardText,  } from "react-toolbox/lib/card";
import React from "react";

const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const articleCard = () => (
  
  <Card style={{ width: "350px" }}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia aspectRatio="wide" image="https://placeimg.com/800/450/nature" />
    <CardTitle title="Title goes here" subtitle="Subtitle here" />
    <CardText>{dummyText}</CardText>
    
  </Card>
)
export default articleCard;