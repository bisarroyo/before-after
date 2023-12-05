interface ContainerElement extends HTMLElement {
  clientWidth: number
}

interface CustomImageElement {
  style: {
    width: string
    clipPath: string
  }
}

class BeforeAfterEffect {
  private container: ContainerElement | null = null
  private beforeImage: CustomImageElement | null = null
  private afterImage: CustomImageElement | null = null
  private rangeInput: HTMLInputElement | null = null
  private imagesContainer: HTMLDivElement | null = null

  constructor(private containerId: string) {
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
    this.createImagesContainer()
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
  private createImagesContainer() {
    this.imagesContainer = document.createElement('div')
    this.imagesContainer.className = 'images' // Aplica la clase 'images' al nuevo contenedor
    this.container!.appendChild(this.imagesContainer)
  }

  private createRangeInput() {
    this.rangeInput = document.createElement('input')
    this.rangeInput.type = 'range'
    this.rangeInput.min = '0'
    this.rangeInput.max = '100'
    this.rangeInput.value = '100'
    this.rangeInput.className = 'range-value'
    this.container!.appendChild(this.rangeInput)
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
const instance = new BeforeAfterEffect('btaContainer')
