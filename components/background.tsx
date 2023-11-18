const ExampleApp = (props) => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA.BIRDS({
          el: vantaRef.current,
          birdSize: 2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="vanta" ref={vantaRef}>
      <span>Foreground content goes here</span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<ExampleApp />);
