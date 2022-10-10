import "./SkillCard.scss";

function SkillCard(props) {
  return (
    <div className="skill-card">
      <div className="skill-card__heading">
        <h2>{props.title}</h2>
      </div>
      <div className="skill-card__list">
        <ul>
          <li>{props.skill1}</li>
          <li>{props.skill2}</li>
          <li>{props.skill3}</li>
          <li>{props.skill4}</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
