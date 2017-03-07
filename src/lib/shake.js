let loop
let updateMotion

export const Shake = {
  enable: (action) => {
    if (!window.DeviceMotionEvent) { return }

    let sensitivity = 20
    let current = 0
    let prev = 0

    updateMotion = (e) => {
      let accel = e.accelerationIncludingGravity
      current = accel.x + accel.y + accel.z
    }
    window.addEventListener('devicemotion', updateMotion, false)

    loop = setInterval(() => {
      var change = Math.abs(current - prev)
      if (prev !== 0 && change > sensitivity) {
        if ("vibrate" in navigator) {
          navigator.vibrate(200);
        }
        action()
      }
      prev = current
    }, 150)
  },
  disable: () => {
    if (!window.DeviceMotionEvent) { return }

    if (loop) {
      clearTimeout(loop)
    }
    if (updateMotion) {
      window.removeEventListener('devicemotion', updateMotion)
    }
  }
}

export default Shake
