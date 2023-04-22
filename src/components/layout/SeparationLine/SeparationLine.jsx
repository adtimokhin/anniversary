import GlowLine from "../../GlowLine/GlowLine";

function SeparationLine() {
  return (
    <div className="w-full mh-7 flex justify-center items-center">
      <div className="w-[80%]">
        <GlowLine
          settings={{
            lineThickness: 1,
            glowRadius: 43,
            mainColor: "#9da3a3",
            highlightColor: "#cfd6d6",
          }}
        />
      </div>
    </div>
  );
}

export default SeparationLine;
