function MainLogo() {
  return (
    <div className="flex items-center group">
      <div className="w-[70px] ">
        <img src="https://i.postimg.cc/L6vT6560/logoimage.png" />
      </div>

      <h1
        style={{ fontFamily: "Bebas Neue" }}
        className="text-3xl bg-gray-500 pl-2 py-1 pr-2 text-yellow-50 group-hover:text-gray-500 group-hover:bg-yellow-50 transition duration-500"
      >
        Head
      </h1>
      <h1
        style={{ fontFamily: "Bebas Neue" }}
        className="text-3xl bg-red-500 pr-2 py-1 pl-1 group-hover:text-red-500 group-hover:bg-black transition duration-500"
      >
        Gear
      </h1>
    </div>
  );
}

export default MainLogo;
