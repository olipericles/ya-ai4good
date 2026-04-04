interface ImagePlaceholderProps {
  label: string;
  caption?: string;
  className?: string;
}

const ImagePlaceholder = ({ label, caption, className = "" }: ImagePlaceholderProps) => (
  <div
    className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed bg-[#FAFAFA] ${className}`}
    style={{ borderImage: "linear-gradient(135deg, #E8673C, #C040A0, #8C30B0) 1" }}
  >
    <p className="text-sm font-mono text-[#999]">{label}</p>
    {caption && <p className="text-xs text-[#BBB] mt-1">{caption}</p>}
  </div>
);

export default ImagePlaceholder;
