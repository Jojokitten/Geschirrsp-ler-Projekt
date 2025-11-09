
//1. TEIL
       function schichtZuEndeja() {
      const messageDiv = document.getElementById("schichtZuEndeneinMessage");
      messageDiv.innerHTML = `
      <ul>
    <li><a href="Geschirrspüler-Projekt.html">Geschirspüler-Liste</a></li>
    <li><a href="statistic.html">Statistik</a></li>
    <li><a href="motivation.html">Motivation</a></li>
        <li><a href="geschirrspühl-tagebuch.html">Geschirrspühl-Tagebuch</a></li>
    <li><a href="profile.html">Profile</a></li>
  </ul> 
     <h1>1. Wie gings dir bei der schicht?</h1>
     <img class="kleedance" src="images/3875-klee.png" alt="klee">
     <p class="wähle">Wähle:</p>
        <div id="tagebuch-buttons-container">
            <button class="tagebuch-sticker" data-mood="strong"><img class="paimon" src="images/3392-paimon-stronk.png" alt="paimon"></button>
            <button class="tagebuch-sticker" data-mood="cry"><img class="paimon" src="images/1235-paimon-cry.png" alt="paimon" height="100px" width="100px"></button>
            <button class="tagebuch-sticker" data-mood="raiden"><img src="https://cdn3.emoji.gg/emojis/55978-boobasword.gif" width="100px" height="100px" alt="boobasword"></button>
        </div>
        
     <h1>2. Wie lange hast du dafür gebraucht?</h1>
  <input type="time" id="uhrzeit">
  <button class="TagebuchEintragSave" id="saveTime">Eintrag speichern</button>
<img class="catTimeGif" src="images/catTime.gif" alt="time">

<div> 
<label class="custum-file-upload" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
  <br>
   <span>Click to upload image of the <br> fertig eingeräumten Geschirrspühler</span>
   </div>
   <input type="file" id="file">
</label>
</div>
        `;

    }
    function schichtZuEndenein() {      const messageDiv = document.getElementById("schichtZuEndeneinMessage");
      messageDiv.innerHTML = `<h1>Then back to work!!!</h1>
        <ul>
    <li><a href="Geschirrspüler-Projekt.html">Geschirspüler-Liste</a></li>
    <li><a href="statistic.html">Statistik</a></li>
    <li><a href="motivation.html">Motivation</a></li>
        <li><a href="geschirrspühl-tagebuch.html">Geschirrspühl-Tagebuch</a></li>
   <li><a href="profile.html">Profile</a></li>
  </ul> 
  <img class="furinaBackToWork" src="images/furina-angry.jpg" alt="furina" height="300px" width="300px">
  <button class="backToWork" onclick="window.location.href='Geschirrspüler-Projekt.html'">Back to work!</button> `;
    }    








//2. TEIL

const clicks = JSON.parse(localStorage.getItem("clicks") || "{}");
const stickerCounts = JSON.parse(localStorage.getItem("stickerCounts") || "{}");
document.addEventListener('click', function(event) {
    const clickedSticker = event.target.closest('.tagebuch-sticker');
    if (clickedSticker) {
        // Toggle 'clicked' class among siblings inside same container (if present)
        const container = clickedSticker.closest('#tagebuch-buttons-container');
        if (container) {
            const allButtons = container.querySelectorAll('.tagebuch-sticker');
            allButtons.forEach(btn => btn.classList.remove('clicked'));
            clickedSticker.classList.add('clicked');
        }

        // Increment clicks for today and persist
        const day = new Date().toISOString().split('T')[0];
        clicks[day] = (clicks[day] || 0) + 1;
        localStorage.setItem('clicks', JSON.stringify(clicks));

        // Count sticker selections
        const mood = clickedSticker.dataset.mood || 'unknown';
        stickerCounts[mood] = (stickerCounts[mood] || 0) + 1;
        localStorage.setItem('stickerCounts', JSON.stringify(stickerCounts));

        // Find most selected sticker
        const mostSelectedMood = Object.entries(stickerCounts).reduce((a, b) => 
            (b[1] > a[1] ? b : a), ['none', 0])[0];
        
        console.log("Ausgewählt: " + mood);
        console.log("Meist ausgewählter Sticker: " + mostSelectedMood);
        return;
    }

    // Save time button (delegated)
    const saveBtn = event.target.closest('#saveTime');
    if (saveBtn) {
        const timeInput = document.getElementById('uhrzeit');
        const time = timeInput ? timeInput.value : '';
        if (time) {
            localStorage.setItem('gespeicherteUhrzeit', time);
            alert("Gespeichert: " + time);
        } else {
            alert("Bitte eine Uhrzeit auswählen.");
        }
        return;
    }
});
document.addEventListener('change', function(event) {
    if (event.target && event.target.id === 'file') {
        const fileInput = event.target;
        const file = fileInput.files && fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                localStorage.setItem("uploadedGeschirrspulerImage", imageUrl);
                alert("Image uploaded successfully!");
            };
            reader.readAsDataURL(file);
        }
    }
});







//PLAYLIST
document.addEventListener('DOMContentLoaded', () => {
     const playlist = [
         { index: 0, title: "Tolles Lied 1", src: "playlist/kafka.mp4" },
        { title: "Ganz Tolles Billie Eilish Lied", src: "playlist/ilomilo.mp4" },
        { title: "Kaffee", src: "playlist/Espresso.mp4" } 
    ];
   
    const videoPlayer = document.getElementById('videoPlayer');
    const songTitleDisplay = document.getElementById('songTitle');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');



    const FurinaPlaylistGif2 = document.querySelector('.2FurinaGif');
    const furinaPlaylistGif = document.querySelector('.tenor-gif-embed');
   
    let currentSongIndex = 0;
    FurinaPlaylistGif2

    const updateGifVisibility = (isCurrentlyPlaying) => {
        if (!furinaPlaylistGif) return;

        const isEspresso = currentSongIndex === 2; 
        const isFurina = currentSongIndex === 4;

        if (isEspresso && isCurrentlyPlaying) {
            furinaPlaylistGif.style.visibility = 'visible';
            videoPlayer.style.opacity = "0.1";
        } else {
            furinaPlaylistGif.style.visibility = 'hidden';
            videoPlayer.style.opacity = "0.5";
        }
        if (isFurina && isCurrentlyPlaying) {
            FurinaPlaylistGif2.style.visibility = 'visible';
        }

    };

    const showVideo = (isCurrentlyPlaying) => {
        if (!videoPlayer) return;

        if ( isCurrentlyPlaying) {
            videoPlayer.style.visibility = 'visible';
        } else {
            videoPlayer.style.visibility = 'hidden';
        }
    }


    const loadSong = (index) => {
        const song = playlist[index];
        videoPlayer.src = song.src;
        songTitleDisplay.textContent = song.title;

        videoPlayer.load();
        updateGifVisibility(isPlaying);
    };


 


    const togglePlayPause = () => {
        if (isPlaying) {
            videoPlayer.pause();
            playPauseBtn.textContent = '▶';
            isPlaying = false; // 1. Zustand ändern
            updateGifVisibility(isPlaying); 
            showVideo(isPlaying);
        } else {
            // FIX: Verwende promise, um Playback-Fehler zu vermeiden
            const playPromise = videoPlayer.play();
            



            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Wiedergabe erfolgreich
                    playPauseBtn.textContent = '⏸';
                    isPlaying = true; // 1. Zustand ändern
                    updateGifVisibility(isPlaying); // 2. GIF aktualisieren
                    showVideo(isPlaying);
                }).catch(error => {
                    // Autoplay blockiert oder anderer Fehler
                    console.error("Autoplay wurde blockiert oder die Wiedergabe ist fehlgeschlagen:", error);
                    playPauseBtn.textContent = '▶';
                    isPlaying = false;
                    updateGifVisibility(isPlaying);
                    showVideo(isPlaying);
                });
            }
        }
    };




    const playNextSong = () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
       
        if (isPlaying) {
            videoPlayer.play();
        }
        updateGifVisibility(isPlaying);
        showVideo(isPlaying);
    };
   
    const playPreviousSong = () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
       
        if (isPlaying) {
            videoPlayer.play();
        }
        updateGifVisibility(isPlaying);
        showVideo(isPlaying);
    };





    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    if (nextBtn) nextBtn.addEventListener('click', playNextSong);
    if (prevBtn) prevBtn.addEventListener('click', playPreviousSong);
    videoPlayer.addEventListener('ended', () => navigateSong('next'));




    // Initialen Song laden und GIF verstecken
    loadSong(currentSongIndex);
    updateGifVisibility(false);
    showVideo(isPlaying);


});




//PrimoCount
const primoText = document.querySelector('.totalPrimos');
const getMoreButton = document.querySelector('.getMore');
const firstFreePullButton = document.querySelector('.firstFreePulls');
const tenPull = document.querySelector('.tenPulls');

let primoCount = 0;
let pity = 0;

// Anfangs Primogems anzeigen
if (primoText) primoText.innerHTML = `insgesamt:<br>${primoCount}`;

// Button zum Weiterleiten
if (getMoreButton) {
  getMoreButton.addEventListener('click', () => {
    window.location.href = "statistic.html";
  });
}

// Free Pull Button
if (firstFreePullButton) {
  firstFreePullButton.addEventListener('click', () => {
    firstFreePullButton.style.animation = 'none';
    // Reflow erzwingen, damit Animation neu startet
    void firstFreePullButton.offsetWidth;
    firstFreePullButton.style.animation = 'freePullDrop 2s forwards';
    primoCount += 10;
    primoText.innerHTML = `insgesamt:<br>${primoCount}`;
  });
}

// Genshin Simulation
const BANNER_CHARACTER = 'character';
const BANNER_WEAPON = 'weapon';
const BANNER_STANDARD = 'standard';

function createState(bannerType) {
  return {
    bannerType,
    wishes: 0,
    pity4: 0,
    pity5: 0,
    guaranteedFeatured5: false,
    epitomizedFailCount: 0,
    resultHistory: []
  };
}

function wishOnce(state) {
  const type = state.bannerType;
  state.wishes++;
  state.pity4++;
  state.pity5++;

  const baseRate4 = 0.051;
  let baseRate5;
  let hardPity5;

  if (type === BANNER_CHARACTER || type === BANNER_STANDARD) {
    baseRate5 = 0.006;
    hardPity5 = 90;
  } else {
    baseRate5 = 0.0075;
    hardPity5 = 80;
  }

  if (state.pity4 >= 10) {
    state.pity4 = 0;
    state.resultHistory.push({ rarity: 4 });
    return 4;
  }

  if (state.pity5 >= hardPity5) {
    state.pity5 = 0;
    state.pity4 = 0;
    if (type === BANNER_CHARACTER) {
      if (state.guaranteedFeatured5) {
        state.resultHistory.push({ rarity: 5, featured5: true });
        state.guaranteedFeatured5 = false;
      } else if (Math.random() < 0.5) {
        state.resultHistory.push({ rarity: 5, featured5: true });
      } else {
        state.resultHistory.push({ rarity: 5, featured5: false });
        state.guaranteedFeatured5 = true;
      }
    } else if (type === BANNER_WEAPON) {
      const upRate = state.epitomizedFailCount >= 1 ? 1.0 : 0.75;
      if (Math.random() < upRate) {
        state.resultHistory.push({ rarity: 5, featured5: true });
        state.epitomizedFailCount = 0;
      } else {
        state.resultHistory.push({ rarity: 5, featured5: false });
        state.epitomizedFailCount++;
      }
    } else {
      state.resultHistory.push({ rarity: 5 });
    }
    return 5;
  }

  let currentRate5 = baseRate5;
  if (type === BANNER_CHARACTER && state.pity5 >= 75) {
    const extra = (state.pity5 - 75) / (hardPity5 - 75);
    currentRate5 = baseRate5 + (1 - baseRate5) * extra;
    if (currentRate5 > 1) currentRate5 = 1;
  }

  if (Math.random() < currentRate5) {
    state.pity5 = 0;
    state.pity4 = 0;
    if (type === BANNER_CHARACTER) {
      if (state.guaranteedFeatured5) {
        state.resultHistory.push({ rarity: 5, featured5: true });
        state.guaranteedFeatured5 = false;
      } else if (Math.random() < 0.5) {
        state.resultHistory.push({ rarity: 5, featured5: true });
      } else {
        state.resultHistory.push({ rarity: 5, featured5: false });
        state.guaranteedFeatured5 = true;
      }
    } else if (type === BANNER_WEAPON) {
      const upRate = state.epitomizedFailCount >= 1 ? 1.0 : 0.75;
      if (Math.random() < upRate) {
        state.resultHistory.push({ rarity: 5, featured5: true });
        state.epitomizedFailCount = 0;
      } else {
        state.resultHistory.push({ rarity: 5, featured5: false });
        state.epitomizedFailCount++;
      }
    } else {
      state.resultHistory.push({ rarity: 5 });
    }
    return 5;
  }

  if (Math.random() < baseRate4) {
    state.pity4 = 0;
    state.resultHistory.push({ rarity: 4 });
    return 4;
  }

  state.resultHistory.push({ rarity: 3 });
  return 3;
}

function simulateBanner(bannerType, wishes) {
  const state = createState(bannerType);
  for (let i = 0; i < wishes; i++) {
    wishOnce(state);
  }
  return state;
}

// Ten Pull Button
if (tenPull) {
  tenPull.addEventListener('click', () => {
    if (primoCount >= 10) {
      pity += 10;
      primoCount -= 10;
      primoText.innerHTML = `insgesamt:<br>${primoCount}`;

      const result = simulateBanner(BANNER_CHARACTER, 10);
      console.log('10-Pull Ergebnis:', result.resultHistory);
    } else {
      primoText.style.color = "red";
      setTimeout(() => primoText.style.color = "", 1200);
    }
  });
}


// LOCAL STORAGE!!!! :)


let pulls = parseInt(localStorage.getItem('pullCount')) || 0;
let freePullUsed = localStorage.getItem('freePullUsed') === 'true';

// Animation nur, wenn Free Pull noch nicht genutzt wurde
if (firstFreePullButton && !freePullUsed) {
  firstFreePullButton.addEventListener('click', () => {
    firstFreePullButton.style.animation = 'freePullDrop 2s forwards';
    primoCount += 10;
    pulls += 1;
    localStorage.setItem('pullCount', pulls);
    localStorage.setItem('freePullUsed', 'true');
  });
} else if (firstFreePullButton && freePullUsed) {
  firstFreePullButton.style.display = 'none';
}

