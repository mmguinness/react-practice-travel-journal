export default function Card(props) {
  let googleLink;
  if (props.card.googleMapUrl !== "") {
    googleLink = "display";
  }

  return (
    <div className="card">
      <img src={"./" + props.card.imageUrl} className="card--image" alt="" />
      <div className="card--details">
        <h5>{props.card.title}</h5>
        <h1 className="title">{props.card.location}</h1>
        <br></br>
        {googleLink && (
          <h5>
            <a className="grey" href={props.card.googleMapUrl}>
              View on Google Maps
            </a>
          </h5>
        )}
      </div>
    </div>
  );
}
