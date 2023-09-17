//問題・解答-雄月
//--ph1
const $ph1Click = document.querySelectorAll('.ph1-question');
const $ph1Answer = document.querySelectorAll('.ph1-answer');
$ph1Click[0].addEventListener('click',function () {
    $ph1Answer[0].classList.toggle('is-open');
})
$ph1Click[1].addEventListener('click',function () {
    $ph1Answer[1].classList.toggle('is-open');
})
$ph1Click[2].addEventListener('click',function () {
    $ph1Answer[2].classList.toggle('is-open');
})
$ph1Click[3].addEventListener('click',function () {
    $ph1Answer[3].classList.toggle('is-open');
})
$ph1Click[4].addEventListener('click',function () {
    $ph1Answer[4].classList.toggle('is-open');
})
//--ph2
const $ph2Click = document.querySelectorAll('.ph2-question');
const $ph2Answer = document.querySelectorAll('.ph2-answer');
$ph2Click[0].addEventListener('click',function () {
    $ph2Answer[0].classList.toggle('is-open');
})
$ph2Click[1].addEventListener('click',function () {
    $ph2Answer[1].classList.toggle('is-open');
})
$ph2Click[2].addEventListener('click',function () {
    $ph2Answer[2].classList.toggle('is-open');
})
$ph2Click[3].addEventListener('click',function () {
    $ph2Answer[3].classList.toggle('is-open');
})
$ph2Click[4].addEventListener('click',function () {
    $ph2Answer[4].classList.toggle('is-open');
})
//--member
const $memberClick = document.querySelectorAll('.member-question');
const $memberAnswer = document.querySelectorAll('.member-answer');
$memberClick[0].addEventListener('click',function () {
    $mmberAnswer[0].classList.toggle('is-open');
})
$memberClick[1].addEventListener('click',function () {
    $memberAnswer[1].classList.toggle('is-open');
})
$memberClick[2].addEventListener('click',function () {
    $memberAnswer[2].classList.toggle('is-open');
})
$memberClick[3].addEventListener('click',function () {
    $memberAnswer[3].classList.toggle('is-open');
})
$memberClick[4].addEventListener('click',function () {
    $memberAnswer[4].classList.toggle('is-open');
})

//tabの中身
const $ph1TabTitle = document.getElementById('ph1-tabTitle');
const $ph2TabTitle = document.getElementById('ph2-tabTitle');
const $memberTabTitle = document.getElementById('member-tabTitle');

const $ph1Tab = document.getElementById('ph1-tab');
const $ph2Tab = document.getElementById('ph2-tab');
const $memberTab = document.getElementById('member-tab');

$ph1TabTitle.addEventListener('click',function () {
    $ph1Tab.classList.add('is-open');
    $ph2Tab.classList.remove('is-open');
    $memberTab.classList.remove('is-open');
})
$ph2TabTitle.addEventListener('click',function () {
    $ph1Tab.classList.remove('is-open');
    $ph2Tab.classList.add('is-open');
    $memberTab.classList.remove('is-open');
})
$memberTabTitle.addEventListener('click',function () {
    $ph1Tab.classList.remove('is-open');
    $ph2Tab.classList.remove('is-open');
    $memberTab.classList.add('is-open');
})
