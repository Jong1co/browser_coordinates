
addEventListener('load', () => {
    const vertical = document.querySelector('.vertical');
    const horizontal = document.querySelector('.horizontal');
    const target = document.querySelector('.target');
    const tag = document.querySelector('.tag');
    const targetRect= target.getBoundingClientRect();
    const targetRectHalfWidth = targetRect.width / 2;
    const targetRectHalfHeight = targetRect.height / 2;


    // const rect = vertical.getBoundingClientRect();

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform=`translate(${x - targetRectHalfWidth}px, ${y - targetRectHalfHeight}px)`;
        tag.style.transform=`translate(${x}px, ${y}px)`;
        tag.innerHTML=`${x}px, ${y}px`;
    });
});


