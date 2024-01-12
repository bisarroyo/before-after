export const styles = `
  #btaContainer {
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }

  #before-image {
    position: absolute;
    width: 100%;
    max-width: 100%;
    height: 100%;

    z-index: 2;
    object-fit: cover;
  }

  #after-image {
    width: 100%;
    max-width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }

  .range-value {
    position: absolute;
    width: calc(100% + 16px);
    bottom: 50%;
    left: -8px; /* Coloca el slider en el centro vertical */
    transform: translateY(50%);
    appearance: none; /* Elimina el estilo predeterminado del control */
    background: transparent;
    outline: none; /* Elimina el contorno en foco */
    z-index: 9999999;
    margin: 0;
  }

  /* Estilo personalizado para el track */
  .range-value::-webkit-slider-runnable-track {
    background: transparent;
  }

  /* Estilo personalizado para el thumb (el punto medio) */
  .range-value::-webkit-slider-thumb {
    /* -webkit-appearance: none; */
    width: 70px; /* Ancho del thumb (ajusta según tus preferencias) */
    height: 160px; /* Altura del thumb (ajusta según tus preferencias) */
    /* background: url('/wp-content/themes/titan/images/arrows_slider.png') no-repeat;  */
    background-size: cover;
    transition: transform 0.3s;
    cursor: grab;
  }

  `
