export default function Box({ type, value, buttonText, buttonAction }) {
  return (
    <div className="box-container">
      <div className={`box ${String(type).toLowerCase()}-box`}>
        <p>{type}</p>
        <h1 className={value === "err" ? "err" : ""}>{value}</h1>
      </div>
      {buttonText ? <button onClick={buttonAction}>{buttonText}</button> : ""}
    </div>
  );
}
