const BlobBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "hsl(var(--blob-dark))",
          top: "10%",
          left: "5%",
          transform: "rotate(45deg)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: "hsl(var(--blob-darker))",
          top: "50%",
          right: "10%",
          transform: "rotate(-30deg)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: "hsl(var(--blob-dark))",
          bottom: "5%",
          left: "40%",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full blur-3xl"
        style={{
          background: "hsl(var(--blob-darker))",
          top: "20%",
          right: "30%",
        }}
      />
    </div>
  );
};

export default BlobBackground;
