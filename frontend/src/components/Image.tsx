import { FC } from "react";

interface ImageProps {
    classname?: string;
    url: string;
    alt: string;
    width: number;
    height: number;
}

const Image: FC<ImageProps> = ({
    url = "https://dummyimage.com/600x600/000/fff",
    alt = "image",
    width,
    height,
    classname,
}) => {
    const classes = `${classname} w-[${width}px] h-[${height}px]`;

    return <img className={classes} src={`/images/${url}`} alt={alt} />;
};

export default Image;
