const saturate = document.getElementById("saturate");
const contrast = document.getElementById("contrast");
const brightness = document.getElementById("brightness");
const sepia = document.getElementById("sepia");
const grayscale = document.getElementById("grayscale");
const blur = document.getElementById("blur");
const hueRotate = document.getElementById("hue-rotate");

const upload = document.getElementById("upload");
const download =  document.getElementById("download");
const img = document.getElementById("img");

const reset = document.querySelector("span");
const imgBox = document.getElementById("img-box");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
    download.style.display = "none";
    reset.style.display = "none";
    upload.style.display = "none";
    resetValue();
}

upload.onchange = () => {
    resetValue();
    download.style.display = "block";
    reset.style.display = "block";

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = () => {
        img.src = file.result;
    }
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = "none";
    }
}

let filters = document.querySelectorAll("ul li input");

const applyFilter = () => {
    let Filters = '';
    filters.forEach ((filter) => {
        Filters += `${filter.getAttribute("data-filter")}(${filter.value}${filter.getAttribute("data-scale")})`;
        ctx.filter = Filters;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });   
}



function resetValue() {
    img.style.filter = "none";
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    blur.value = "0";
    hueRotate.value = "0";
    let Filters = '';
    filters.forEach ((filter) => {
        Filters += `${filter.getAttribute("data-filter")}(${filter.value}${filter.getAttribute("data-scale")})`;
        ctx.filter = Filters;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
}

download.onclick = () => {
    download.href = canvas.toDataURL();
}




































