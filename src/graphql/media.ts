export const IMAGE_DETAILS_FIELDS = `{
    filename
    url
    width
    height
}`

export const MEDIA_FIELDS = `{
  id
  mimeType
  alt
  filename
  filesize
  url
  width
  height
  updatedAt
  createdAt
  sizes {
    card ${IMAGE_DETAILS_FIELDS}
    video ${IMAGE_DETAILS_FIELDS}
    fullscreen ${IMAGE_DETAILS_FIELDS}
  }

}`

export const EMBEDDED_VIDEO_FIELDS = `{
  embed
	poster ${MEDIA_FIELDS}
	platform
	videoURL
	video ${MEDIA_FIELDS}
}`
