import {
  ContainerElement,
  CustomImageElement,
  BeforeAfterOptions
} from './types'
import { styles } from './styles'

class beforeAfterEffect {
  private container: ContainerElement | null = null
  private beforeImage: CustomImageElement | null = null
  private afterImage: CustomImageElement | null = null
  private rangeInput: HTMLInputElement | null = null
  private static readonly styles = styles

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
    this.applyStyles()
  }
  private applyStyles() {
    if (!this.container) return

    const styleElement = document.createElement('style')
    styleElement.textContent = beforeAfterEffect.styles

    // Agregar los estilos a la cabeza del documento o al contenedor
    document.head.appendChild(styleElement)
    // O bien, agrega los estilos directamente al contenedor:
    // this.container.appendChild(styleElement);
  }

  private init() {
    this.container = document.getElementById(
      this.containerId
    ) as ContainerElement

    if (!this.container) {
      console.error(
        `There is not a container with the ID "${this.containerId}!"`
      )
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

    this.beforeImage!.style.clipPath = `inset(0 ${
      100 - parseInt(this.rangeInput!.value)
    }% 0 0)`

    this.rangeInput.addEventListener('input', () => {
      const value = parseInt(this.rangeInput!.value)
      this.beforeImage!.style.clipPath = `inset(0 ${100 - value}% 0 0)`
    })
  }
}

export default beforeAfterEffect
