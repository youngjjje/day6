

const AlbumModal = ({isOpen, onClose, album}) => {
    if (!isOpen || !album) return null

    return(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
            onClick={onClose}
            >
                <div
                    style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    width: "400px",
                    maxWidth: "90%",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2>{album.title}</h2>
                        <img src={album.image} alt={album.title} style={{ width: "100%", borderRadius: "8px" }} />
                        <p style={{ marginTop: "10px" }}>{album.description}</p>
                        <button onClick={onClose} style={{ marginTop: "10px" }}>닫기</button>
                </div>
        </div>
    )
}

export default AlbumModal