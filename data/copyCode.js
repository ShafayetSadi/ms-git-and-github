function createDOMElements() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-button";
    button.setAttribute("aria-label", "Copy code block");
    button.textContent = "Copy";
    return button;
}

function attachCopyCodeFunctionality(div) {
    const elementsToClean = [];
    document
        .querySelectorAll("pre")
        .forEach(function createButtonAndAttachHandlers(pre) {
            if (pre.querySelector(".copy-button")) {
                return;
            }
            let timeout = null;
            const copy = div.cloneNode(true);
            pre.appendChild(copy);
            elementsToClean.push(pre);

            copy.onclick = function copyTextToClipboard() {
                const code = pre.querySelector("code");
                const textToCopy = code ? code.textContent : pre.textContent;
                navigator.clipboard.writeText(textToCopy);
                copy.classList.add("clicked");
                clearTimeout(timeout);
                timeout = setTimeout(function hidePopup() {
                    copy.classList.remove("clicked");
                }, 1500);
            };
        });

    return elementsToClean;
}

export default function createCopyCodeFunctionality() {
    const container = createDOMElements();
    return attachCopyCodeFunctionality(container);
}
