const boxOne = document.getElementById('box-one');
const boxTwo = document.getElementById('box-two');
const boxThree = document.getElementById('box-three');

const standardAdsText = document.querySelectorAll('.standard-ads');
const standardText = document.querySelectorAll('.standard');
const premiumText = document.querySelectorAll('.premium');

boxOne.addEventListener('mouseover', () => {
    standardAdsText.forEach(element => element.style.color = 'red');
});

boxTwo.addEventListener('mouseover', () => {
    standardText.forEach(element => element.style.color = 'red');
});

boxThree.addEventListener('mouseover', () => {
    premiumText.forEach(element => element.style.color = 'red');
});

boxOne.addEventListener('mouseout', () => {
    standardAdsText.forEach(element => element.style.color = '');
});

boxTwo.addEventListener('mouseout', () => {
    standardText.forEach(element => element.style.color = '');
});

boxThree.addEventListener('mouseout', () => {
    premiumText.forEach(element => element.style.color = '');
});