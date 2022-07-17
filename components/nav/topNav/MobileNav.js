function mobileNav() {
  let mobileNav = document.createElement("div");
  mobileNav.setAttribute(
    "class",
    "mobile-nav flex justify-between p-3 md:hidden"
  );
  let logo = document.createElement("div");
  logo.setAttribute("class", "logo flex justify-center items-center");
  logo.innerHTML = `<div><span class= "iconify mr-1 text-xl font-black" data-icon = "charm:menu-hamburger"></span></div><img src="./images/kongalogo.png" class="w-24 ">`;
  let navItem = document.createElement("div");
  navItem.setAttribute("class", "nav-item flex text-gray-500 ");
  navItem.innerHTML = `<div><span class="iconify text-2xl mr-2" data-icon="dashicons:admin-home"></span></div><div><span
  class="iconify text-3xl fw-bold"
  data-icon="jam:shopping-cart"
  ></span></div>`;
  mobileNav.appendChild(logo);
  mobileNav.appendChild(navItem);
  return mobileNav;
}

export default mobileNav;