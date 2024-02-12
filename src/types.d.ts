interface ContainerElement extends HTMLElement {
  clientWidth: number
}

interface CustomImageElement {
  style: {
    width: string
    clipPath: string
  }
}

interface BeforeAfterOptions {
  width?: string
  height?: string
  initialColor?: string
  rangeInitialValue: number
}

export { ContainerElement, CustomImageElement, BeforeAfterOptions }
