const dnd = {
    onDrag,
    onDragEnd,
    onDragEnter,
    onDragExit,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop
};

function onDrag(e) {
    console.log('drag', e);
}

function onDragEnd(e) {
    console.log('ended drag', e);
}

function onDragEnter(e) {
    console.log('enter drag', e);
}

function onDragExit(e) {
    console.log('exit drag', e);
}

function onDragLeave(e) {
    console.log('leave drag', e);
}

function onDragOver(e) {
    console.log('over drag', e);
}

function onDragStart(e) {
    console.log('start drag', e);
}

function onDrop(e) {
    console.log('drop', e);
}