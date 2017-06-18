'use strict'

const renderPlaylistDisplay = () => { //shows the UI
    const playlistSource = [
        ['Amy Winehouse - Love Is A Losing Game', 'music/amy.mp3'],
        ['Coldplay - Parachutes', 'music/coldplay.mp3'],
        ['Drake - Bria\'s Interlude', 'music/drake.mp3'],
        ['Rick Ross - Maybach Music IV', 'music/rick.mp3'],
        ['Sleep Thieves - Out Of The Darkness', 'music/sleep.mp3']
    ]
    let musicList = document.getElementById('musicTitles')
    let playerControls = document.getElementById('playerControls')
    let playerAudio = document.getElementById('playerAudio')
    let currentSong = document.getElementsByClassName('currentSong')[0]
    let musicStatus = document.getElementsByClassName('musicStatus')[0]
    let songIndexCounter = 0;
    let songPlayingName = playlistSource[songIndexCounter][0]
    let playlistFile


    const jukebox = { //audio controls
        play: () => {
            // debugger
            // while (songIndexCounter < playlistSource.length) {
                playerAudio.play()
                // playerAudio.addEventListener('ended', (e) => {
                //     if (songIndexCounter <= playlistSource.length) {
                //         songIndexCounter + 1
                //         // playerAudio.src = playlistSource[songIndexCounter][1]
                //     }
                // })
                musicStatus.innerHTML = `Playing`
            // }
        },
        pause: () => {
            playerAudio.pause()
            musicStatus.innerHTML = `Paused`
        },
        restart: () => {
            playerAudio.currentTime = 0
            playerAudio.play()
            musicStatus.innerHTML = `Restarting Song`
        },
        previous: () => {
            (songIndexCounter === 0) ? songIndexCounter = 4: songIndexCounter--
                playerAudio.src = playlistSource[songIndexCounter][1]
            songPlayingName = playlistSource[songIndexCounter][0]
            jukebox.play()
            currentSong.innerHTML = songPlayingName
        },
        next: () => {
            (songIndexCounter === playlistSource.length - 1) ? songIndexCounter = 0: songIndexCounter++
                playerAudio.src = playlistSource[songIndexCounter][1]
            songPlayingName = playlistSource[songIndexCounter][0]
            jukebox.play()
            currentSong.innerHTML = songPlayingName
        },
        shuffle: () => {

        }
    }

    let funcControl = (functionCommand) => {
        currentSong.innerHTML = songPlayingName
        jukebox[functionCommand]()
    }

    let clickSongSelection = (playlistIndex) => {
        jukebox.pause()
        songIndexCounter = playlistIndex
        songPlayingName = playlistSource[playlistIndex][0]
        playlistFile = playlistSource[playlistIndex][1]
        playerAudio.src = playlistFile
        currentSong.innerHTML = songPlayingName
        jukebox.play()
    }

    for (let i = 0; i < playlistSource.length; i++) { //displays playlist
        let li = document.createElement('li')
        let musicTitles = document.createTextNode(playlistSource[i][0])
        li.appendChild(musicTitles)
        musicList.appendChild(li)
        li.setAttribute('data-index', i)
    }

    currentSong.innerHTML = `${songPlayingName}`
    musicStatus.innerHTML = `play`
    jukebox.play()

    document.getElementById('musicTitles').onclick = (e) => clickSongSelection(e.target.getAttribute('data-index'))
    document.getElementById('playerControls').onclick = (e) => funcControl(e.target.getAttribute('data-function'))
}

{
    renderPlaylistDisplay()
}