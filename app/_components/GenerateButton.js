function GenerateButton({ handleGenerate, isLoading, children }) {
  return (
    <button
      className={`btn ${isLoading ? "disabled" : ""}`}
      onClick={handleGenerate}
    >
      {isLoading ? (
        <div className="flex space-x-3 items-center justify-center">
          <span className="text-black text-base">GENERATING</span>
          <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </section>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default GenerateButton;
