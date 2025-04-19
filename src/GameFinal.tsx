export function GameFinal({
  isGameOver,
  hasWon,
  onRestart,
}: {
  isGameOver: boolean
  hasWon: boolean
  onRestart: () => void
}) {
  if (!isGameOver) return null

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw",
      height: "100vh",
      backdropFilter: "blur(5px)",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    }}>
      <div style={{
        background: "white",
        padding: "2rem",
        borderRadius: "1rem",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          {hasWon ? "🎉 Parabéns, você venceu!" : "😢 Tente mais uma vez! "}
        </h1>
        <button
          onClick={onRestart}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer"
          }}
        >
          Jogar novamente
        </button>
      </div>
    </div>
  )
}
