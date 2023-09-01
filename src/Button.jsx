function Button({ title, onClick, className }) {
  return (
    <button
      className={
        "bg-red-500 py-1 rounded-lg shadow-md  shadow-slate-500" +
        " " +
        className
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
