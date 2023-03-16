function Card({ char, handleClick, getNames }) {
  return (
    <div
      onClick={() => {
        handleClick();
        getNames(char);
      }}
      className="overflow-hidden rounded bg-white shadow duration-200 ease-out hover:scale-105"
    >
      <img src={char.img} alt="character" className="h-4/5 w-60 object-cover" />
      <p className="my-5 text-center text-xl">{char.id}</p>
    </div>
  );
}

export default Card;
