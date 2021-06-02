declare module "cloudinary-react" {
  interface ImageProps {
    responsive?: bool
    loading?: string
    accessibility?: string
    cloudName?: string
    publicId: string
    width?: string
    crop?: string
    className?: string
  }

  export function Image(props: ImageProps): JSX.Element
}
