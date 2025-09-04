import { memo } from "react";

const VideoComponent = memo(function VideoComponent({ src }: { src: string }) {
  return (
    <iframe
      className="w-[90%] md:w-[70%] lg:w-[50%] min-h-[200px] md:min-h-[300px] 2xl:min-h-[400px]"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
});


export default VideoComponent;