import backgroundImage from "../assets/portfolio-background.jpg";
export default function Background({ children }) {
    const sectionStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
    };
    const overlayStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      minWidth: "100%",
      minHeight: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    };
    const priority = {
      zIndex: 999,
    };
    return (
      <section
        style={sectionStyle}
        className="d-flex justify-content-center align-items-center text-center vh-100 text-light">
        <div style={overlayStyle}></div>
        <div style={priority}>{children}</div>
      </section>
    );
  }
