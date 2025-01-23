const lightModeColors = {
  background: '#fff',
  text: '#222',
  containerBackground: '#f0f7ff',
};

const darkModeColors = {
  background: '#222',
  text: '#fff',
  containerBackground: '#333',
};

let isLightMode = true; 

document.getElementById('colorChangeButton').addEventListener('click', function() {
  const body = document.body;
  const container = document.querySelector('.container');


  if (isLightMode) {

    body.style.backgroundColor = darkModeColors.background;
    body.style.color = darkModeColors.text;
    container.style.backgroundColor = darkModeColors.containerBackground;
  } else {

    body.style.backgroundColor = lightModeColors.background;
    body.style.color = lightModeColors.text;
    container.style.backgroundColor = lightModeColors.containerBackground;
  }


  isLightMode = !isLightMode;
});
