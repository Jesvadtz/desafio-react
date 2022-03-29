const SavedIcon = ({
  fill = "#575757",
  width = "40px",
  height = "40px",
  className = "",
  onClick = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`p-2 ${className}`}
      onClick={onClick}
      fill={fill}
    >
      <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
    </svg>
  );
};
export default SavedIcon;
