import star from '../assets/imgs/star.png'
const Card = (props) => {

 let badge
   if (props.openSpots === 0) {
     badge = 'SOLD OUT'
   } else if (props.location === 'Online') {
    badge = 'ONLINE'
   }

  return (
    <div className="card">
      {badge && <div className="card--badge">{badge}</div>}
    <img src={props.coverImg} className="card--image" />
    <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
    </div>
    <p className="card--title">{props.title}</p>
    <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
</div>
  );
};

export default Card;
