function createDOMElements() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-button";
    button.setAttribute("aria-label", "Copy code block");
    button.setAttribute("data-tooltip", "Copy");
    button.innerHTML = [
        '<span class="copy-button__icon copy-button__icon--copy" aria-hidden="true">',
        '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">',
        '<path d="M0 6.75A1.75 1.75 0 0 1 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>',
        '<path d="M5 1.75A1.75 1.75 0 0 1 6.75 0h7.5A1.75 1.75 0 0 1 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>',
        "</svg>",
        '</span><span class="copy-button__icon copy-button__icon--check" aria-hidden="true">',
        '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">',
        '<path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>',
        "</svg>",
        "</span>",
    ].join("");
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
            const code = pre.querySelector("code");
            const copyTarget = code || pre;
            copyTarget.appendChild(copy);
            elementsToClean.push(pre);

            copy.onclick = function copyTextToClipboard() {
                const textToCopy = code ? code.textContent : pre.textContent;
                navigator.clipboard.writeText(textToCopy).then(
                    function handleCopySuccess() {
                        copy.classList.add("clicked");
                        copy.setAttribute("aria-label", "Copied");
                        copy.setAttribute("data-tooltip", "Copied!");
                        clearTimeout(timeout);
                        timeout = setTimeout(function resetCopyButton() {
                            copy.classList.remove("clicked");
                            copy.setAttribute("aria-label", "Copy code block");
                            copy.setAttribute("data-tooltip", "Copy");
                        }, 1500);
                    },
                    function handleCopyError() {
                        copy.setAttribute("data-tooltip", "Copy failed");
                        clearTimeout(timeout);
                        timeout = setTimeout(function resetCopyButton() {
                            copy.setAttribute("data-tooltip", "Copy");
                        }, 1500);
                    },
                );
            };
        });

    return elementsToClean;
}

export default function createCopyCodeFunctionality() {
    const container = createDOMElements();
    return attachCopyCodeFunctionality(container);
}
