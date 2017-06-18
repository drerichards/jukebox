'use strict'

//shows the UI
const renderPlaylistDisplay = () => {
    const playlistSource = [
        ['Amy Winehouse - Love Is A Losing Game', 'music/amy.mp3'],
        ['Coldplay - Parachutes', 'music/coldplay.mp3'],
        ['Drake - Bria\'s Interlude', 'music/drake.mp3'],
        ['Rick Ross - Maybach Music IV', 'music/rick.mp3'],
        ['Sleep Thieves - Out Of The Darkness', 'music/sleep.mp3']
    ];
    let musicList = document.getElementById('musicTitles');
    let playerControls = document.getElementById('playerControls');
    let playerAudio = document.getElementById('playerAudio');

    //audio controls
    const jukebox = {
        play: () => {
            playerAudio.play();
            return 'Playing';
        },
        pause: () => {
            playerAudio.pause();
            return 'Paused';
        },
        restart: () => {
            playerAudio.currentTime = 0;
            playerAudio.play();
            return 'Restarting';
        }
    }
    //plays src html track

    jukebox.play();

    //displays playlist
    for (let i = 0; i < playlistSource.length; i++) {
        let li = document.createElement('li');
        let musicTitles = document.createTextNode(playlistSource[i][0]);
        li.appendChild(musicTitles);
        musicList.appendChild(li);
        li.className = i;
    }


    let changeSongSelection = (playlistIndex) => {
        jukebox.pause();
        let playlistFile = playlistSource[playlistIndex][1];
        $('#source').attr('src', playlistFile);
        console.log(playlistFile);
        jukebox.play();
    }

    let funcControl = (functionCommand) => {
        document.getElementsByClassName('musicStatus')[0].innerHTML = 'Song is ' + jukebox[functionCommand]();
    }

    document.getElementById('musicTitles').onclick = (e) => {
        if (Number.isInteger(e.target.className)) { //????????
            // alert(e.target.className)
        }

        changeSongSelection(e.target.className);
    }

    document.getElementById('playerControls').onclick = (e) => funcControl(e.target.className);
}

{
    renderPlaylistDisplay();
}