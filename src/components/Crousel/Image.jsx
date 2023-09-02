function Image({ item }) {
  return (
    <>
      <div className="smsm:hidden md:block">
        <img src={item.src} alt={item.name} className="" />
      </div>
      <div className="md:hidden">
        <img src={item.src_m} alt={item.name} className="" />
      </div>
    </>
  );
}

export default Image;
