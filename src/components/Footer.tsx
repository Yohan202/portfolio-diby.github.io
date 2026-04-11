const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <p className="text-center font-mono text-xs text-muted-foreground">
      Conçu & développé par <span className="text-primary">Yohan DIBY</span> — {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
