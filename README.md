# Before to After Effect

`npm install before-to-after`

This package provides a simple way to create a before and after effect using two images. It allows you to easily create this effect by passing the container ID and an optional configuration object with the following parameters:

````javascript
new BeforeAfterEffect('btaContainer', {
  width: '500px',
  height: '300px',
  rangeInitialValue: '50',
  rangeInitialColor: '#000000'
})```

**Configuration Parameters:**
- **width: **Specifies the width of the container element. Default value: '500px'.
- **height: **Specifies the height of the container element. Default value: '300px'.
- **rangeInitialValue: **Sets the initial value of the range input. Default value: '50'.
- **rangeInitialColor: **Defines the initial color of the range input. Default value: '#000000'.
````
