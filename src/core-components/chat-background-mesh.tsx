import WatermelonPattern from "../assets/images/chat-background-mesh.png";

interface ChatBackGroundMeshProps {
  opacity?: number;
}

export default function ChatBackGroundMesh({
  opacity = 10
}: ChatBackGroundMeshProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: opacity / 100,
        backgroundImage: `url(${WatermelonPattern})`,
        backgroundSize: "28rem",
        backgroundRepeat: "repeat",
      }}
    />
  );
}