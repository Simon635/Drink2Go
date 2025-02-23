import '../vendor/nouislider.min.js';

const rangeSlider = document.querySelector('#range-slider');
noUiSlider.cssClasses.target += '';

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 1000
    },
    cssPrefix: 'price-slider__',
  });

  // rangeSlider.noUiSlider.disable(); //Слайдер disabled

  const input0 = document.querySelector('#input-0');
  const input1 = document.querySelector('#input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    const arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

