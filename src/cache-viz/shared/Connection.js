export default function Connection({
  isConnected = true,
  buttonText,
  buttonAction,
}) {
  return (
    <div className="connection-container">
      <div className="connection">
        {isConnected ? (
          <div className="line"></div>
        ) : (
          <div className="line red"></div>
        )}
      </div>
      {buttonText ? <button onClick={buttonAction}>{buttonText}</button> : ""}
    </div>
  );
}
