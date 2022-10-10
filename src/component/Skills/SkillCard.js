function SkillCard(props) {
  return (
    <div className="flex flex-col justify-center items-center rounded-md border-2 shadow-xl w-80 ml-20 mb-6">
      <div>
        <h2 className="text-teal-400 text-lg">{props.title}</h2>
      </div>
      <div>
        <ul className="text-lg">{props.skill}</ul>
      </div>
    </div>
  );
}

export default SkillCard;
