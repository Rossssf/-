
$(document).ready(function() {
    // h1を文字ごとに分割
    const text = $('h1').text();
    $('h1').html('');

    // 文字を一つずつ表示する
    text.split('').forEach((char, index) => {
        setTimeout(() => {
            $('h1').append(`<span style="opacity: 0; display: inline-block;">${char}</span>`);
            $('h1 span:last-child').css({
                animation: 'fadeIn 0.5s ease-in forwards'
            });
        }, index * 100); // 100msごとに次の文字を表示
    });

    // ボタンのアニメーションを最後に実行
    setTimeout(() => {
        $('button').css('animation', 'fadeInUp 1s ease-in forwards');
    }, text.length * 100 + 500); // 文字がすべて表示された後に実行

    // ボタンをクリックしたときに次の画面に遷移
    $('#myButton').click(function() {
        window.location.href = 'next3.html'; // 遷移先のURLを指定
    });
});