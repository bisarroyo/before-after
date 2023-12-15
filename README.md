# Before to after

This package provides a simple way to create a before and after effect using two images. It allows you to easily create this effect by passing the container ID and an optional configuration object with the following parameters:

## Installation

Install before-to-after with npm

```bash
  npm i before-to-after
```

## Usage/Examples

Add container with the id `btaContainer` and inside add the img tag with the `before-image` and `after-image` id

```html
<div id="btaContainer">
  <img src="/image-1.jpg" id="before-image" alt="" />
  <img src="/image-2.jpeg" id="after-image" alt="" />
</div>
```

create the instance of before-to-after

```javascript
import beforeAfterEffect from 'before-to-after'

const bta = new beforeAfterEffect('btaContainer', {
  width: '500px',
  height: '300px',
  rangeInitialValue: '0',
  rangeInitialColor: '#000000'
})
```

Object conf is optional.

## API Reference

| Parameter           | Type     | Description                                                                           |
| :------------------ | :------- | :------------------------------------------------------------------------------------ |
| `width`             | `string` | **optional**. Specifies the width of the container element. Default value: '500px'.   |
| `height`            | `string` | **optional**. Specifies the height of the container element. Default value: '300px'   |
| `rangeInitialValue` | `string` | **optional**. Sets the initial value of the position. Default value: '50'.            |
| `rangeInitialColor` | `string` | **optional**. Defines the initial color of the range input. Default value: '#000000'. |

## Authors

- [@bisarroyo](https://github.com/bisarroyo)

## Support

For support, email bis.arroyo@gmail.com
