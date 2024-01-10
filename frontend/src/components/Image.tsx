import { FC } from "react";

interface ImageProps {
    url: string;
    alt: string;
    width: number;
    height: number;
}

const Image: FC<ImageProps> = ({ url = "https://dummyimage.com/600x600/000/fff", alt = "image", width, height }) => {
    const classes = `w-[${width}px] h-[${height}px]`;

    return <img className={classes} src={url} alt={alt} />;
};

export default Image;
