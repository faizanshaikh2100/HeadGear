function Image({ item }) {
  return (
    <div>
      <img src={item.src} alt={item.name} />
    </div>
  );
}

export default Image;
