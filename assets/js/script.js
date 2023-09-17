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
