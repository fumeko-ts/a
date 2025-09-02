if (!('ontouchstart' in window)) {
    const baseCursorSrc = "sprites/Cursor.png";
    const fillCursorSrc = "sprites/Cursor-Fill.png";
    const baseCursor = document.createElement("img");
    const fillCursor = document.createElement("img");
    baseCursor.src = baseCursorSrc;
    fillCursor.src = fillCursorSrc;
    [baseCursor, fillCursor].forEach(c => {
        c.style.position = "fixed";
        c.style.pointerEvents = "none";
        c.style.zIndex = 9999;
        c.style.width = "32px";
        c.style.height = "32px";
        c.style.imageRendering = "pixelated";
        c.style.display = "none";
        document.body.appendChild(c);
    });
    document.body.style.cursor = "none";
    document.querySelectorAll("button, a, input, textarea, select").forEach(el => el.style.cursor = "none");
    document.addEventListener("mousemove", e => {
        baseCursor.style.left = `${e.clientX}px`;
        baseCursor.style.top = `${e.clientY}px`;
        fillCursor.style.left = `${e.clientX}px`;
        fillCursor.style.top = `${e.clientY}px`;
        baseCursor.style.display = "block";
        fillCursor.style.display = "block";
    });
    document.addEventListener("mouseleave", () => {
        baseCursor.style.display = "none";
        fillCursor.style.display = "none";
    });
    document.addEventListener("mouseenter", e => {
        baseCursor.style.left = `${e.clientX}px`;
        baseCursor.style.top = `${e.clientY}px`;
        fillCursor.style.left = `${e.clientX}px`;
        fillCursor.style.top = `${e.clientY}px`;
        baseCursor.style.display = "block";
        fillCursor.style.display = "block";
    });
    document.addEventListener("mousedown", () => { fillCursor.style.opacity = "0.6"; });
    document.addEventListener("mouseup", () => { fillCursor.style.opacity = "1"; });
    document.querySelectorAll("button").forEach(b => {
        b.addEventListener("mouseenter", () => { fillCursor.style.opacity = "0.8"; });
        b.addEventListener("mouseleave", () => { fillCursor.style.opacity = "1"; });
    });
}
