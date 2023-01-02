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


const quizContainerBlock = document.querySelector('.pyy-quiz-container')
const quizBlock = document.querySelector('.pyy-quiz')

containerSizeFunc(quizContainerBlock, quizBlock, 1440, 768)

const answerContainerDom = document.querySelectorAll('.pyy-quiz-answers');

let userAnswers = []

answerContainerDom.forEach((v, i, a) => {
   let answerDom = v.querySelectorAll('.pyy-answer-choice')

   answerDom.forEach((v2, i2, a2) => {
      v2.addEventListener('click', () => {
         let userChoice = v2.getAttribute('data-answer')
         userAnswers.push(userChoice)

         let quizPages = document.querySelectorAll('.pyy-quiz-page');
         if (i + 1 === quizPages.length) {
            answerKey.forEach((v, i, a) => {
               if (v['Q1'] === userAnswers[0] && v['Q2'] === userAnswers[1] && v['Q3'] === userAnswers[2] && v['Q4'] === userAnswers[3]) {
                  let answerPage = document.querySelectorAll('.pyy-answer-page')
                  answerPage.forEach((v2, i2, a2) => {
                     v2.getAttribute('data-answer-page')
                     if (v2.getAttribute('data-answer-page') === v['Answer']) {
                        v2.classList.add('show-answer-page')
                     }
                  })
               }
            })

            let showContainer = document.querySelector('.pyy-show-containers');
            let answerContainer = document.querySelector('.pyy-answer-container')
            showContainer.classList.remove('pyy-show-containers')
            answerContainer.classList.add('pyy-show-containers')
         } else {
            document.querySelector('.show-quiz-page').classList.remove('show-quiz-page');
            quizPages[i + 1].classList.add('show-quiz-page')
         }

      })
   })
})


const quizAnswerBlock = document.querySelector('.pyy-answer-container')
const answerBlock = document.querySelector('.pyy-answer')

containerSizeFunc(quizAnswerBlock, answerBlock, 1440, 768)

