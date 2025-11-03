import React from "react";
import { Helmet } from "react-helmet";
import { PROJECT_NAME } from "../constants";

export default function Seo({ title, description, image, url }) {
  return (
    <Helmet>
      <title>{title ? `${title} | ${PROJECT_NAME}` : PROJECT_NAME}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
