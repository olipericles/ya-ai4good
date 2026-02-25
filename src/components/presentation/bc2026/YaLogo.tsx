import yaLogo from "@/assets/ya_logo_branco.svg";

interface YaLogoProps {
    className?: string;
    inline?: boolean;
}

const YaLogo = ({ className = "", inline = false }: YaLogoProps) => {
    return (
        <img
            src={yaLogo}
            alt="Yá"
            className={`${inline ? "h-[1.2em] w-auto inline-block align-text-bottom mx-1" : "h-12 w-auto"} ${className}`}
        />
    );
};

export default YaLogo;
