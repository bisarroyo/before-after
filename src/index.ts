const btaContainer = document.getElementById('btaContainer') as HTMLDivElement
const beforeImage = document.getElementById(
  'before-image'
) as HTMLImageElement | null
const afterImage = document.getElementById(
  'after-image'
) as HTMLImageElement | null

if (btaContainer === undefined) {
  console.warn('Missing container image element')
}

if (beforeImage === undefined) {
  console.warn('Missing before image element')
}

if (afterImage === undefined) {
  console.warn('Missing after image element')
}

const slider = document.createElement('input')
slider.id = 'slider'
slider.type = 'range'

btaContainer.appendChild(slider)

function updateBeforeAfter(index) {
  const value = slider[index].value
}
