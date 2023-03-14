function Card({ char }) {
  return (
    <div className="bg-white w-60 rounded shadow overflow-hidden">
      <img src={char.img} alt="character" className=" object-cover h-96 " />
      <p className="text-center text-2xl my-5">{char.id}</p>
    </div>
  );
}

export default Card;
