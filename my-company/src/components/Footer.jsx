function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <p>© {new Date().getFullYear()} My Company. All Rights Reserved.</p>
      <p>
        Built with ❤️ using React & Vite
      </p>
    </footer>
  );
}

export default Footer;

