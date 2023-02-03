let listVideoes = document.querySelectorAll('.vid-list .video'),
mainVideo = document.querySelector('.main-video'),
title = document.querySelector('..main-video .title')

listVideoes.forEach(video =>{
    video.onclick = () =>{
        video.classList.toggle('active')
    }
})