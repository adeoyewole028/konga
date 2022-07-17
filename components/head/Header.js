function headerImages(item) {
  let headerImages = document.createElement("ul");
  headerImages.setAttribute(
    "class",
    "header-images flex space-x-10 py-3"
  );
  item.forEach((element) => {
    let li = document.createElement("li");
    li.setAttribute("class", "header-image basis-1/6");
    let a = document.createElement("a");
    a.setAttribute("href", element.link);
    let img = document.createElement("img");
    img.setAttribute("src", element.img);
    img.setAttribute("alt", "header image");
    img.setAttribute("class", "w-24");
    a.appendChild(img);
    li.appendChild(a);
    headerImages.appendChild(li);
  });

  return headerImages;
}

export default headerImages;
