const KOBEN_COLOR_BANK = [
    '#040405', // Very Black
    '#1C1A1B', // Almost Black
    '#53241F', // Moody Red
    '#949893', // Mossy Grey
    '#C3C2C1', // Boring Grey
    '#F2F3DD', // Barely Yellow
    '#E3DCA1', // Sleepy Yellow
    '#E3311C', // Loud Red
    '#2C4798', // Proper Blue
    '#EEE229', // Happy Yellow
    '#F0F0F1'  // Very White
];

(function () {
    function pickColor() {
        return KOBEN_COLOR_BANK[Math.floor(Math.random() * KOBEN_COLOR_BANK.length)];
    }
    const bg = pickColor();
    let fg = pickColor();
    while (fg === bg) {
        fg = pickColor();
    }
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--fg', fg);
})();
