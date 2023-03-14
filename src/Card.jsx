function Card() {
  return (
    <div className="bg-white w-60 rounded shadow overflow-hidden">
      <img
        src="./src/images/ahsoka-tano.jpg"
        alt="character"
        className=" object-cover "
      />
      <p className="text-center text-2xl">Ahsoka</p>
    </div>
  );
}

export default Card;
