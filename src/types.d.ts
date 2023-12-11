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
  rangeInitialColor?: string
  rangeInitialValue?: string
}

export { ContainerElement, CustomImageElement, BeforeAfterOptions }
