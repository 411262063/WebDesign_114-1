document.addEventListener("DOMContentLoaded", function () {
    // 讀取網址中的集數編號
    // 例如：episodeVideo.html?ep=3，就會取得 ep = 3

    const urlParams = new URLSearchParams(window.location.search);
    const epID = urlParams.get('ep');  // 取得"ep"的值

    const epNames = {
        '1': '第一話',
        '2': '第二話',
        '3': '第三話',
        '4': '第四話',
        '5': '第五話',
        '6': '第六話',
        '7': '第七話',
        '8': '第八話'
    };

    if (epID != null && epNames[epID] != null) {
        const player = document.getElementById('videoPlayer');

        const video = document.getElementById('videoSource');

        const title = document.getElementById('episodeTitle');

        const path = `./videos/${epNames[epID]}.mp4`;

        video.src = path;

        title.textContent = epNames[epID];

        //重新載入影片
        player.load();
    }
});

