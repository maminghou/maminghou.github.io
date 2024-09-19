const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
//使用 document.querySelector 方法选择页面中的特定元素。displayedImage 用于显示当前选择的图片，thumbBar 用于放置缩略图，btn 是控制亮度的按钮，overlay 是用于覆盖在图片上的半透明层。
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : '王湘珑',
  'pic2.jpg' : '杨佳奇',
  'pic3.jpg' : '易立',
  'pic4.jpg' : '杨健',
  'pic5.jpg' : '李梓贤'
}

/* Looping through images */
//images 数组包含了所有要显示的图片文件名。alts 对象用于存储每张图片的描述信息。
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
//为按钮添加 click 事件监听器，检查按钮的当前类名。如果是 'dark'，则切换为 'light'，并将覆盖层的背景色设置为半透明黑色；反之，如果是 'light'，则切换为 'dark'，并将覆盖层的背景色设置为透明。
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
