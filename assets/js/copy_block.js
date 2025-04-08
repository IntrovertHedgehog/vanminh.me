let codeBlocks = document.querySelectorAll("div.highlight");

let copyBtn = document.createElement("template");
copyBtn.innerHTML = `
<div class="clip-container">
  <div class="clip-btn">
    <i id="ic" class="fa-regular fa-clone"></i>
  </div>
</div>
`;

codeBlocks.forEach(function (codeBlock) {
  var copyButton = copyBtn.content.children[0].cloneNode(true);
  codeBlock.append(copyButton);

  copyButton.addEventListener("click", function () {
    var code = codeBlock.querySelector("code").innerText.trim();
    window.navigator.clipboard.writeText(code);

    copyButton.querySelector("#ic").className = "fa-solid fa-check";
    var t = 700;

    setTimeout(function () {
      copyButton.querySelector("#ic").className = "fa-regular fa-clone";
    }, t);
  });
});
