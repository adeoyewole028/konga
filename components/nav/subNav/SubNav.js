const SubNav = (items) => {
  let subNav = document.createElement("div");
  subNav.setAttribute("class", "sub-nav text-white");
  let subNavList = document.createElement("ul");
  subNavList.setAttribute(
    "class",
    "sub-nav-list px-4 md:flex bg-rose-900 hidden"
  );

  items.forEach((item) => {
    let subNavItem = document.createElement("li");
    subNavItem.setAttribute(
      "class",
      "sub-nav-item basis-1/2 text-xs md:flex justify-center  dropdown relative py-2 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer"
    );
    let subNavSpan = document.createElement("span");
    subNavSpan.setAttribute("class", "flex");
    subNavSpan.innerHTML = item.name;
    if (item.name === "All Categories") {
      subNavSpan.innerHTML = `<span class="mr-2">${item.name}</span><span class= "iconify right-2 text-xl" data-icon = "charm:menu-hamburger"></span>`;
    }
    subNavItem.appendChild(subNavSpan);
    subNavList.appendChild(subNavItem);
    subNav.appendChild(subNavList);
    let categoriesSubMenuContainer = document.createElement("div");
    categoriesSubMenuContainer.setAttribute(
      "class",
      "categories-sub-menu-container w-[calc(100vw-6px)] absolute -left-5 top-9 z-50 hidden bg-black overflow-y-hidden"
    );

    if (item.subMenu1) {
      let categoriesSubMenu = document.createElement("ul");
      categoriesSubMenu.setAttribute(
        "class",
        "categories-sub-menu dropdown-content flex flex-col w-64 bg-white relative left-5 transition hover:delay-0 duration-300 ease-in-out"
      );
      item.subMenu1.forEach((subItem) => {
        let categoriesList = document.createElement("li");
        categoriesList.setAttribute(
          "class",
          "all-categories-list px-5 py-3 text-black hover:text-red-700 hover:bg-slate-200"
        );
        categoriesList.innerHTML = subItem.name;
        categoriesSubMenu.appendChild(categoriesList);
      });
      categoriesSubMenuContainer.appendChild(categoriesSubMenu);
      subNavItem.appendChild(categoriesSubMenuContainer);
    }

    function showSubMenu() {
      let subNavSubMenu = document.createElement("ul");
      if (item.name === "Computer and Accessories") {
        subNavSubMenu.setAttribute(
          "class",
          "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute w-[calc(100vw-14px)] -left-[13.5vw] top-9 bg-white transition hover:delay-0 duration-300 ease-in-out"
        );
      } else if (item.name === "Phones and Tablets") {
        subNavSubMenu.setAttribute(
          "class",
          "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute w-[calc(100vw-14px)] -left-[25.5vw] top-9 bg-white transition hover:delay-0 duration-300 ease-in-out"
        );
      } else if (item.name === "Electronics") {
        subNavSubMenu.setAttribute(
          "class",
          "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute  w-[calc(100vw-15px)] -left-[37.5vw] top-9 bg-white transition hover:delay-0 duration-300 ease-in-out"
        );
      } else if (item.name === "Konga Fashion") {
        subNavSubMenu.setAttribute(
          "class",
          "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute w-[calc(100vw-15px)] -left-[49.5vw] top-9 bg-white transition hover:delay-0 duration-300 ease-in-out"
        );
      } else if (item.name === "Home and Kitchen") {
        subNavSubMenu.setAttribute(
          "class",
          "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute w-[calc(100vw-16px)] -left-[61.5vw] top-9 bg-white transition hover:delay-0 duration-300 ease-in-out"
        );
      } else if (item.name === "Baby, Kids and Toys") {
        subNavSubMenu.setAttribute(
          "class",
          "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute w-[calc(100vw-17px)] -left-[73.5vw] top-9 bg-white transition hover:delay-0 duration-300 ease-in-out"
        );
      } else if (item.name === "Other Categories") {
        subNavSubMenu.setAttribute(
          "class",
          "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute w-[calc(100vw-17px)] -left-[85.5vw] top-9 bg-white transition hover:delay-0 duration-300 ease-in-out"
        );
      }

      item.subMenu.forEach((subItem) => {
        let subNavSubMenuList1 = document.createElement("li");
        let subNavSubMenuHead = document.createElement("h3");
        subNavSubMenuHead.setAttribute(
          "class",
          "sub-nav-sub-menu-head text-black text-lg font-bold py-3"
        );
        subNavSubMenuList1.setAttribute(
          "class",
          "sub-nav-sub-menu-item px-5 py-3 w-64 text-black"
        );

        subNavSubMenuHead.innerHTML = subItem.id;
        subNavSubMenuList1.appendChild(subNavSubMenuHead);
        subNavSubMenu.appendChild(subNavSubMenuList1);
        let subNavSubMenuListSubList = document.createElement("ul");
        subItem.link.forEach((subSubItem) => {
          let subNavSubMenuList2 = document.createElement("li");
          subNavSubMenuList2.setAttribute(
            "class",
            "py-3 text-black hover:text-red-700 hover:bg-slate-200"
          );
          subNavSubMenuList2.innerHTML = subSubItem.name;
          subNavSubMenuListSubList.appendChild(subNavSubMenuList2);
          subNavSubMenuList1.appendChild(subNavSubMenuListSubList);
        });
      });
      subNavItem.appendChild(subNavSubMenu);
    }

    if (item.name === "Computer and Accessories") {
      subNavItem.addEventListener("mouseenter", showSubMenu);
    } else if (item.name === "Phones and Tablets") {
      subNavItem.addEventListener("mouseenter", showSubMenu);
    } else if (item.name === "Electronics") {
      subNavItem.addEventListener("mouseenter", showSubMenu);
    } else if (item.name === "Konga Fashion") {
      subNavItem.addEventListener("mouseenter", showSubMenu);
    } else if (item.name === "Home and Kitchen") {
      subNavItem.addEventListener("mouseenter", showSubMenu);
    } else if (item.name === "Baby, Kids and Toys") {
      subNavItem.addEventListener("mouseenter", showSubMenu);
    } else if (item.name === "Other Categories") {
      subNavItem.addEventListener("mouseenter", showSubMenu);
    }
    subNavList.appendChild(subNavItem);
    subNav.appendChild(subNavList);
  });
  return subNav;
};

export default SubNav;
