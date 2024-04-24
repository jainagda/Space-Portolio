interface FullWidthBgImageProps {
  image?:File,
  label?:string,
  heading?:string | any,
  text?:string,
  description?:string | number,
  borderRadius?:string | number,
  height?:string | number
}

export const FullWidthBgImage = ({
    image,
    label,
    text,
    height,
    borderRadius,
    description
  }:FullWidthBgImageProps) => {

    
    return (
      <div
        className="bg-image-container"
        style={{ backgroundImage: `url(${image})`, borderRadius, height }}
      >
        <div className="gradient">
          <div className="text-container">
            <div className="label">{label}</div>
            <div className="body">{text}</div>
            <div className="">{description}</div>
          </div>
        </div>
      </div>
    );
  };
  