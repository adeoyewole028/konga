const mobileSubNav = () => {
  let subNav = document.createElement("div");
  subNav.setAttribute("class", "sub-nav text-white");
  // Mobile subnav Menu
  let mobileSubNav = document.createElement("ul");
  mobileSubNav.setAttribute(
    "class",
    "mobile-sub-nav text-black bg-white px-3 py-1 flex justify-between md:hidden"
  );
  mobileSubNav.innerHTML = `<li class="flex flex-col"><span class="iconify self-center text-3xl" data-icon="ph:dots-three-circle"></span><span>Browse All</span></li>
<li class="flex flex-col"><span class="iconify self-center text-3xl" data-icon="map:clothing-store"></span><span>Fashion</span></li>
<li class="flex flex-col"><span class="iconify self-center text-3xl" data-icon="icon-park-outline:computer"></span><span>Computer</span></li>
<li class="flex flex-col"><span class="iconify self-center text-3xl" data-icon="bi:phone"></span><span>Phone</span></li>
<li class="flex flex-col"><span class="iconify self-center text-3xl" data-icon="ant-design:tags-outlined"></span><span>All Deals</span></li>`;

  return subNav.appendChild(mobileSubNav);
};

export default mobileSubNav;
