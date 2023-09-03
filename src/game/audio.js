// Function to play the sound effect
function playSoundEffect(id, loop = false) {
    const audio = document.getElementById(id)
    audio.loop = loop
    audio.currentTime = 0 // Reset the audio to the beginning
    audio.play() // Play the sound effect

    // Function to stop the sound effect loop
    function stopAudio() {
        audio.loop = false // Disable looping
        audio.pause() // Pause the sound effect
        audio.currentTime = 0 // Reset the audio to the beginning
    }

    return stopAudio
}

export function audioGameOver() {
    playSoundEffect('audio-game-over')
}
export function audioMineCraftEat() {
    playSoundEffect('audio-minecraft-eating')
}
export function audioPouEat() {
    playSoundEffect('audio-pou-eating')
}
export function audioBGM1() {
    playSoundEffect('audio-bgm-1', true)
}
export function audioBGM2() {
    playSoundEffect('audio-bgm-2', true)
}
export function audioEat1() {
    playSoundEffect('audio-eat-1')
}
export function audioBoost() {
    playSoundEffect('audio-boost')
}
