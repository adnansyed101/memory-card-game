function Card({ char }) {
  return (
    <div className="overflow-hidden rounded bg-white shadow">
      <img src={char.img} alt="character" className="h-4/5 w-60 object-cover" />
      <p className="my-5 text-center text-xl">{char.id}</p>
    </div>
  );
}

export default Card;
