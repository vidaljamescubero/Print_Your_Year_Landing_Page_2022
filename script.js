function containerSizeFunc(containerDom, insideContainerDom, maxWidth, minWidth) {
    if (containerDom.offsetWidth < maxWidth & containerDom.offsetWidth > minWidth) {
        let transform = containerDom.offsetWidth / insideContainerDom.offsetWidth;
        let height = transform * insideContainerDom.offsetHeight

        containerDom.style.cssText = `
                      transform:scale(${transform});
                      transform-origin: top left;
                      height: ${height}px; 
                  `
    } else {
        containerDom.style.cssText = ` 
                  `
    }

    window.addEventListener('resize', () => {
        if (containerDom.offsetWidth < maxWidth & containerDom.offsetWidth > minWidth) {
            let transform = containerDom.offsetWidth / insideContainerDom.offsetWidth;
            let height = transform * insideContainerDom.offsetHeight

            containerDom.style.cssText = `
                          transform:scale(${transform});
                          transform-origin: top left;
                          height: ${height}px; 
                      `
        } else {
            containerDom.style.cssText = ` 
                      `
        }
    })

};

// block 1
const block1Container = document.querySelector('.pyy-block1-container');
const block1 = document.querySelector('.pyy-block1');
containerSizeFunc(block1Container, block1, 1440, 768)
// block 1 end

// block 2
const block2Container = document.querySelector('.pyy-block2-container');
const block2 = document.querySelector('.pyy-block2');
containerSizeFunc(block2Container, block2, 1440, 768)
// block 2 end

// block 3
const block3Container = document.querySelector('.pyy-block3-container');
const block3 = document.querySelector('.pyy-block3');
containerSizeFunc(block3Container, block3, 1440, 768)
// block 3 end

// block 4
const block4Container = document.querySelector('.pyy-block4-container');
const block4 = document.querySelector('.pyy-block4');
containerSizeFunc(block4Container, block4, 1440, 768)
// block 4 end

// block 5
const block5Container = document.querySelector('.pyy-block5-container');
const block5 = document.querySelector('.pyy-block5');
containerSizeFunc(block5Container, block5, 1440, 768)
// block 5 end