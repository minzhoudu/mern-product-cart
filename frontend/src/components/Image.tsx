import { FC } from "react";

interface ImageProps {
    url: string;
    alt: string;
    width: number;
    height: number;
}

const Image: FC<ImageProps> = ({ url, alt = "image", width, height }) => {
    return <img className={`w-[${width}px] h-[${height}px]`} src={url} alt={alt} />;
};

export default Image;
