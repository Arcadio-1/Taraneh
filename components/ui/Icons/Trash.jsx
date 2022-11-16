const Trash = () => {
  return (
    <svg className="trashIcon" height="512" viewBox="0 0 512 512" width="512">
      <path
        className="trashIcon-one"
        d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
      />
      <line className="trashIcon-two" x1="80" x2="432" y1="112" y2="112" />
      <path
        className="trashIcon-one"
        d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
      />
      <line className="trashIcon-one" x1="256" x2="256" y1="176" y2="400" />
      <line className="trashIcon-one" x1="184" x2="192" y1="176" y2="400" />
      <line className="trashIcon-one" x1="328" x2="320" y1="176" y2="400" />
    </svg>
  );
};
export default Trash;
