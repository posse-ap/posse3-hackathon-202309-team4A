
// ヘッダー・ボタンの要素を取得
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");
console.log(button);

// ボタンをクリックした時の処理
button.addEventListener("click", () => {
  header.classList.toggle("is-open");
})


//問題・解答-雄月
//tabの中身
const $ph1TabTitle = document.getElementById('ph1-tabTitle');
const $ph2TabTitle = document.getElementById('ph2-tabTitle');
const $memberTabTitle = document.getElementById('member-tabTitle');

const $ph1Tab = document.getElementById('ph1-tab');
const $ph2Tab = document.getElementById('ph2-tab');
const $memberTab = document.getElementById('member-tab');



$ph1TabTitle.addEventListener('click',function () {
    $ph1TabTitle.classList.add('js-active');
    $ph2TabTitle.classList.remove('js-active');
    $memberTabTitle.classList.remove('js-active');
    $ph1Tab.classList.add('css-open',);
    $ph2Tab.classList.remove('css-open');
    $memberTab.classList.remove('css-open');
})
$ph2TabTitle.addEventListener('click',function () {
    $ph1TabTitle.classList.remove('js-active');
    $ph2TabTitle.classList.add('js-active');
    $memberTabTitle.classList.remove('js-active');
    $ph1Tab.classList.remove('css-open');
    $ph2Tab.classList.add('css-open');
    $memberTab.classList.remove('css-open');
})
$memberTabTitle.addEventListener('click',function () {
    $ph1TabTitle.classList.remove('js-active');
    $ph2TabTitle.classList.remove('js-active');
    $memberTabTitle.classList.add('js-active');
    $ph1Tab.classList.remove('css-open');
    $ph2Tab.classList.remove('css-open');
    $memberTab.classList.add('css-open');    
})

//選択式クイズ
//ph1



//切り替えクイズ
//--ph1
const $ph1Click = document.querySelectorAll('.ph1-question');
const $ph1Answer = document.querySelectorAll('.ph1-answer');
$ph1Click[0].addEventListener('click',function () {
    $ph1Answer[0].classList.toggle('css-open');
})
$ph1Click[1].addEventListener('click',function () {
    $ph1Answer[1].classList.toggle('css-open');
})
$ph1Click[2].addEventListener('click',function () {
    $ph1Answer[2].classList.toggle('css-open');
})
$ph1Click[3].addEventListener('click',function () {
    $ph1Answer[3].classList.toggle('css-open');
})
$ph1Click[4].addEventListener('click',function () {
    $ph1Answer[4].classList.toggle('css-open');
})
//--ph2
const $ph2Click = document.querySelectorAll('.ph2-question');
const $ph2Answer = document.querySelectorAll('.ph2-answer');
$ph2Click[0].addEventListener('click',function () {
    $ph2Answer[0].classList.toggle('css-open');
})
$ph2Click[1].addEventListener('click',function () {
    $ph2Answer[1].classList.toggle('css-open');
})
$ph2Click[2].addEventListener('click',function () {
    $ph2Answer[2].classList.toggle('css-open');
})
$ph2Click[3].addEventListener('click',function () {
    $ph2Answer[3].classList.toggle('css-open');
})
$ph2Click[4].addEventListener('click',function () {
    $ph2Answer[4].classList.toggle('css-open');
})
//--member
const $memberClick = document.querySelectorAll('.member-question');
const $memberAnswer = document.querySelectorAll('.member-answer');
$memberClick[0].addEventListener('click',function () {
    $memberAnswer[0].classList.toggle('css-open');
})
$memberClick[1].addEventListener('click',function () {
    $memberAnswer[1].classList.toggle('css-open');
})
$memberClick[2].addEventListener('click',function () {
    $memberAnswer[2].classList.toggle('css-open');
})
$memberClick[3].addEventListener('click',function () {
    $memberAnswer[3].classList.toggle('css-open');
})
$memberClick[4].addEventListener('click',function () {
    $memberAnswer[4].classList.toggle('css-open');
})





// 提出フォーム

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submit-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("nameText").value;
        const message = document.getElementById("message").value;

        confirmation.innerHTML = `名前: ${name}<br>メッセージ: ${message}`;
        form.reset();
    });
});document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submit-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        confirmation.innerHTML = `名前: ${name}<br>メッセージ: ${message}`;
        form.reset();
    });
});

// 提出レビュー
document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("review-form");
    const evaluation = document.getElementById("evaluation");

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const reviewName = document.getElementById("review-nameText").value;
        const comment = document.getElementById("comment").value;

        evaluation.innerHTML = `名前: ${reviewName}<br>メッセージ: ${comment}`;
        reviewForm.reset();
    });
});document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("review-form");
    const confirmation = document.getElementById("evaluation");

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const reviewName = document.getElementById("review-name").value;
        const comment = document.getElementById("comment").value;

        evaluation.innerHTML = `名前: ${reviewName}<br>コメント: ${comment}`;
        reviewForm.reset();
    });
});

// 星レビュー
var stars = document.getElementsByClassName("star");
var clicked = false;
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener(
    "mouseover",
    () => {
        if (!clicked) {
        for (let j = 0; j <= i; j++) {
            stars[j].style.color = "#f0da61";
        }
        }
    },
    false
    );

    stars[i].addEventListener(
    "mouseout",
    () => {
        if (!clicked) {
        for (let j = 0; j < stars.length; j++) {
            stars[j].style.color = "#a09a9a";
        }
        }
    },
    false
    );

    stars[i].addEventListener(
    "click",
    () => {
        clicked = true;
        for (let j = 0; j <= i; j++) {
        stars[j].style.color = "#f0da61";
        }
        for (let j = i + 1; j < stars.length; j++) {
        stars[j].style.color = "#a09a9a";
        }
    },
    false
    );
}
});

