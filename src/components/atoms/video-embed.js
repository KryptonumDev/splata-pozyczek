import React from "react";
import { Helmet } from "react-helmet";
import { htmlDelete } from "../../helpers/wysiwyg-modification";

// https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
function VideoEmbed({ url, title = "YouTube video player", date }) {
  const urlArray = url.split("/");
  const id = urlArray.pop();
  const cleanTitle = htmlDelete(title);

  const schema = ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: cleanTitle,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    uploadDate: date,
    embedUrl: `https://www.youtube.com/embed/${id}`,
  });

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <iframe
        loading="lazy"
        src={url}
        title={cleanTitle}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <div
        class="embed-microdata"
        data-embed={id}
        itemprop="video"
        itemscope
        itemtype="http://schema.org/VideoObject"
      >
        <meta itemprop="uploadDate" content="2021-05-08T22:59:42Z" />
        <meta
          itemprop="thumbnailUrl"
          content={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        />
        <meta
          itemprop="embedUrl"
          content={`https://www.youtube-nocookie.com/embed/${id}`}
        />
        <meta itemprop="name" content={cleanTitle} />
      </div> */}
    </>
  );
}
export default VideoEmbed;



// iframe{
//   height: fit-content;
//   display: block;
//   box-shadow: var(--shadow);
//   border-radius: 4px;
//   min-width: 400px;
//   width: 100%;
//   aspect-ratio: 1.77735849057/1;
// }