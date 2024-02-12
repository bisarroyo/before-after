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
  inictialColor?: string
  rangeInitialValue?: string
}

export { ContainerElement, CustomImageElement, BeforeAfterOptions }
