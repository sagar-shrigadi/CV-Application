export default function ListItem({ handleChange, children }) {
  return (
    <button type="button" className="list-item" onClick={handleChange}>
      {children}
    </button>
  );
}
