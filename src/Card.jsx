function Card({ char, onClick }) {
  return (
    <div
      onClick={onClick}
      className="overflow-hidden rounded bg-white shadow duration-200 ease-out hover:scale-105"
    >
      <img src={char.img} alt="character" className="h-4/5 w-60 object-cover" />
      <p className="my-5 text-center text-xl">{char.id}</p>
    </div>
  );
}

export default Card;
