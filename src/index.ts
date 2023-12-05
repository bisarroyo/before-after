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

class BeforeAfterEffect {
  private container: ContainerElement | null = null
  private beforeImage: CustomImageElement | null = null
  private afterImage: CustomImageElement | null = null
  private rangeInput: HTMLInputElement | null = null

  constructor(
    private containerId: string,
    private options?: BeforeAfterOptions
  ) {
    const defaultOptions: BeforeAfterOptions = {
      width: '500px',
      height: '500px',
      rangeInitialValue: '50',
      rangeInitialColor: '#000000'
    }
    this.options = { ...defaultOptions, ...options }
    this.init()
  }

  private init() {
    this.container = document.getElementById(
      this.containerId
    ) as ContainerElement

    if (!this.container) {
      console.error(`No se encontró el contenedor con ID "${this.containerId}"`)
      return
    }
    if (this.container && this.options && this.options.width) {
      this.container.style.width = this.options?.width
    }
    if (this.container && this.options && this.options.height) {
      this.container.style.height = this.options?.height
    }
    this.createRangeInput()

    this.beforeImage = this.container.querySelector(
      '#before-image'
    ) as CustomImageElement | null
    this.afterImage = this.container.querySelector(
      '#after-image'
    ) as CustomImageElement | null

    if (!this.beforeImage || !this.afterImage || !this.rangeInput) {
      console.error(
        `No se encontraron las imágenes o el input con los IDs necesarios dentro de "${this.containerId}"`
      )
      return
    }

    this.attachEvents()
  }

  private createRangeInput() {
    this.rangeInput = document.createElement('input')
    this.rangeInput.type = 'range'
    this.rangeInput.min = '0'
    this.rangeInput.max = '100'
    this.rangeInput.value = `${this.options?.rangeInitialValue}`
    this.rangeInput.className = 'range-value'
    this.container!.appendChild(this.rangeInput)
    if (this.container && this.options && this.options.rangeInitialColor) {
      this.rangeInput.style.color = this.options?.rangeInitialColor
    }
  }

  private attachEvents() {
    if (
      !this.container ||
      !this.beforeImage ||
      !this.afterImage ||
      !this.rangeInput
    )
      return

    this.rangeInput.addEventListener('input', () => {
      const value = parseInt(this.rangeInput!.value)
      this.beforeImage!.style.clipPath = `inset(0 ${100 - value}% 0 0)`
    })
  }
}

// Ejemplo de uso
// const instance = new BeforeAfterEffect('btaContainer', {
//   width: '500px',
//   height: '300px',
//   rangeInitialValue: '10',
//   rangeInitialColor: '#000000'
// })
