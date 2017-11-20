function replaceSelectedText() {
    var select, range;
    select = window.getSelection();
    if (select.rangeCount) {
        range = select.getRangeAt(0);

        if (!range.collapsed) {
            var span = document.createElement('span');
            span.classList.add("highlight");

            span.innerText = range.toString();

            range.deleteContents();
            range.insertNode(span);
            range.collapse(true);
        }
    }
}


var paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener("mouseup", function (e) {
        replaceSelectedText();
    });
});


