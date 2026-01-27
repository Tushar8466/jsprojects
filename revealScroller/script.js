const scrollbars = document.querySelectorAll('.scrollbar');

scrollbars.forEach((row, index) => {

    let h1 = row.querySelector('h1');
    let img = row.querySelector('img');

    if (!h1 || !img) return; 

    const cityText = h1.innerText;
    const imgSrc = img.src;

    if (row.querySelector('.scroller-inner')) return;

    row.innerHTML = '';

    const inner = document.createElement('div');
    inner.classList.add('scroller-inner');

    const isRight = index % 2 !== 0;

    const duration = 20 + Math.random() * 10;
    inner.style.setProperty('--duration', `${duration}s`);

    if (isRight) inner.setAttribute('data-direction', 'right');

    const itemsCount = 8;

    const createItem = () => {
        const item = document.createElement('div');
        item.classList.add('scroll-item');

        const textEl = document.createElement('h1');
        textEl.innerText = cityText;

        const imgEl = document.createElement('img');
        imgEl.classList.add('place-img');
        imgEl.src = imgSrc;
        imgEl.alt = cityText;

        item.appendChild(textEl);
        item.appendChild(imgEl);

        return item;
    };

    for (let i = 0; i < itemsCount; i++) {
        inner.appendChild(createItem());
    }

    for (let i = 0; i < itemsCount; i++) {
        const clone = createItem();
        clone.setAttribute('aria-hidden', 'true');
        inner.appendChild(clone);
    }

    inner.setAttribute('data-animated', 'true');
    row.appendChild(inner);
});
