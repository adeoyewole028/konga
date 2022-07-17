
function userLogin() {
  let main = document.querySelector("main");
  let loginContainer = document.createElement("div");
  loginContainer.setAttribute(
    "class",
    "flex bg-[rgba(0,0,0,.85)] fixed top-0 left-0 right-0 bottom-0 z-50"
  );

  let loginPage = document.createElement("div");
  loginPage.setAttribute(
    "class",
    "flex flex-col p-5 absolute top-0 right-0 w-96 h-screen bg-white"
  );
  let heading = document.createElement("div");
  heading.setAttribute(
    "class",
    "flex justify-between content-center pb-3 text-2xl font-bold"
  );
  let header = document.createElement("h1");
  header.innerHTML = "Login";
  let close = document.createElement("div");
  close.setAttribute(
    "class",
    "border rounded-md text-gray-400 text-xs font-normal px-5 cursor-pointer relative pt-1 pr-2"
  );
  close.innerHTML = "Close";
  let closeIcon = document.createElement("span");
  closeIcon.setAttribute("class", "iconify left-0 top-1.5 ml-1 absolute");
  closeIcon.setAttribute("data-icon", "dashicons:no");
  heading.appendChild(header);
  close.appendChild(closeIcon);
  heading.appendChild(close);

  close.addEventListener("click", () => {
    console.log("close");
    loginContainer.classList.toggle("hidden");
  });

  let loginForm = document.createElement("form");
  loginForm.setAttribute("class", "flex flex-col");
  let emailLabel = document.createElement("label");
  emailLabel.setAttribute("class", "text-xs pb-2");
  emailLabel.innerHTML = "Email Address or Phone Number";
  let email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "Email Address OR Phone Number");
  email.setAttribute("class", "text-xs w-full p-2 outline outline-1 mb-2");
  let passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("class", "text-xs py-2 flex justify-between");
  passwordLabel.innerHTML = "Password";
  let forgetPassword = document.createElement("a");
  forgetPassword.setAttribute("href", "#");
  forgetPassword.setAttribute("class", "text-red-600  underline");
  forgetPassword.innerHTML = "Forgot Password?";
  passwordLabel.appendChild(forgetPassword);
  let passwordContainer = document.createElement("div");
  passwordContainer.setAttribute("class", "relative");
  let password = document.createElement("input");
  password.setAttribute("type", "password");
  password.setAttribute("placeholder", "Enter Password");
  password.setAttribute("class", "text-xs w-full p-2 outline outline-1 mb-4");
  let showHidePassword = document.createElement("small");
  showHidePassword.setAttribute(
    "class",
    "absolute right-4 top-1 cursor-pointer text-gray-400"
  );
  showHidePassword.innerHTML = "show";
  let loginButton = document.createElement("button");
  loginButton.setAttribute(
    "class",
    "w-full p-2 bg-green-600 text-white font-bold"
  );
  loginButton.innerHTML = "Login";
  loginForm.appendChild(emailLabel);
  loginForm.appendChild(email);
  loginForm.appendChild(passwordLabel);
  passwordContainer.appendChild(password);
  passwordContainer.appendChild(showHidePassword);
  loginForm.appendChild(passwordContainer);
  loginForm.appendChild(loginButton);

  showHidePassword.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      showHidePassword.innerText = "hide";
    } else {
      password.type = "password";
      showHidePassword.innerText = "show";
    }
  });

  let divider = document.createElement("div");
  divider.setAttribute("class", "w-full border-t border-gray-200");
  let or = document.createElement("div");
  or.setAttribute("class", "text-center text-xs py-10");
  or.innerHTML = `<span class="border rounded-full p-1 ">OR</span>`;
  let socialMedia = document.createElement("div");
  socialMedia.setAttribute("class", "flex justify-evenly text-xs");
  let facebook = document.createElement("a");
  facebook.setAttribute("href", "#");
  facebook.setAttribute("class", "text-blue-600 border");
  facebook.innerHTML = `<span class="flex py-1 px-10">Login with <span class="iconify self-center ml-2" data-icon="fa:facebook-f"</span></span>`;
  let google = document.createElement("a");
  google.setAttribute("href", "#");
  google.setAttribute("class", "text-red-600 border");
  google.innerHTML = `<span class="flex py-1 px-10">Login with <span class="iconify self-center ml-2" data-icon="fa:google"></span></span>`;

  socialMedia.appendChild(facebook);
  socialMedia.appendChild(google);

  let signUp = document.createElement("div");
  signUp.setAttribute(
    "class",
    "text-center bg-gray-100 py-3 bottom-0 absolute w-full"
  );
  let signUpLink = document.createElement("a");
  signUpLink.setAttribute("href", "#");
  signUpLink.setAttribute("class", "text-red-600 font-bold");
  signUpLink.innerHTML = "Don't have an account? Sign Up";
  signUp.appendChild(signUpLink);

  loginPage.appendChild(heading);
  loginPage.appendChild(loginForm);
  loginPage.appendChild(divider);
  loginPage.appendChild(or);
  loginPage.appendChild(socialMedia);
  loginPage.appendChild(signUp);
  loginContainer.appendChild(loginPage);
  main.appendChild(loginContainer);
  return main;
}

function TopNav(items) {
  let topNav = document.createElement("ul");
  topNav.setAttribute(
    "class",
    "top-nav flex justify-center text-white items-center md:px-8 md:bg-[#ed017f] md:border-b-0 border-b-2 pb-3 md:pb-0"
  );
  items.forEach((item) => {
    let topNavList = document.createElement("li");
    topNavList.setAttribute(
      "class",
      "top-nav-item px-4 w-32 py-4 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer hidden md:block"
    );
    topNavList.setAttribute("data-link", "");
    if (item.name === "Login/Sign Up") {
      topNavList.addEventListener("click", userLogin);
    }
    let topNavLink = document.createElement("a");

    if (item.name === "./images/logo.png") {
      topNavLink.setAttribute("href", item.link);
      topNavLink.setAttribute("class", "md:flex items-center hidden");
      let topNavImage = document.createElement("img");
      topNavImage.setAttribute("src", item.name);
      topNavImage.setAttribute("class", "w-32 mr-16");
      topNavLink.appendChild(topNavImage);
      topNav.appendChild(topNavLink);
    } else if (item.name === "form") {
      topNavLink.setAttribute("href", item.link);
      topNavLink.setAttribute("class", "flex items-center");
      let topNavForm = document.createElement("form");
      topNavForm.setAttribute(
        "class",
        "flex items-center justify-center px-3 md:px-0 min-w-full md:min-w-0 md:w-[540px]"
      );
      let topNavInput = document.createElement("input");
      topNavInput.setAttribute("type", "text");
      topNavInput.setAttribute(
        "class",
        "text-black outline-none w-full p-2 bg-gray-200 h-10 md:bg-white md:rounded-l-md md:h-8 md:p-2 md:w-[500px]"
      );
      topNavInput.setAttribute(
        "placeholder",
        "Search for products, brands and categories..."
      );
      let topNavButton = document.createElement("button");

      topNavButton.setAttribute(
        "class",
        "md:bg-amber-500 bg-gray-200 w-10 p-2 h-10 md:h-8 md:rounded-r-md"
      );
      let topNavIcon = document.createElement("span");
      topNavIcon.setAttribute("class", "iconify mr-auto ml-auto text-xl");
      topNavIcon.setAttribute("data-icon", "ant-design:search-outlined");
      topNavButton.appendChild(topNavIcon);
      topNavForm.appendChild(topNavInput);
      topNavForm.appendChild(topNavButton);
      topNav.appendChild(topNavForm);
    } else if (item.name === "Help") {
      let helpItem = document.createElement("div");
      helpItem.setAttribute(
        "class",
        "dropdown relative px-4 py-3.5 w-32 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer hidden md:block"
      );
      helpItem.innerHTML = `<span class="flex items-center"
          ><span
            class="iconify mr-1.5 font-black text-xl bg-stone-300 rounded-full"
            data-icon="bi:question"
          ></span>
          <span>${item.name}</span
          ><span
            class="iconify text-lg ml-1.5"
            data-icon="ep:arrow-down"
          ></span>
        </span>`;
      topNav.appendChild(helpItem);
      let topNavSubMenu = document.createElement("ul");
      topNavSubMenu.setAttribute(
        "class",
        "top-nav-sub-menu dropdown-content z-50 hidden flex flex-col absolute left-0 top-12 w-48 bg-white transition hover:delay-0 duration-300 ease-in-out"
      );
      item.subMenu.forEach((subItem) => {
        let topNavSubMenuList = document.createElement("li");
        topNavSubMenuList.setAttribute(
          "class",
          "top-nav-sub-menu-item px-5 py-3 text-black hover:text-red-700 hover:bg-slate-200"
        );
        let topNavSubMenuLink = document.createElement("a");
        topNavSubMenuLink.setAttribute("href", subItem.link);
        topNavSubMenuLink.innerHTML = subItem.name;
        topNavSubMenuList.appendChild(topNavSubMenuLink);
        topNavSubMenu.appendChild(topNavSubMenuList);
      });
      helpItem.appendChild(topNavSubMenu);
    } else if (item.name === "My Cart") {
      let cartItem = document.createElement("a");

      cartItem.innerHTML = `<a
          href=""
          class="md:flex items-center rounded-sm bg-emerald-500 hover:bg-green-600 h-10 px-5 py-4 transition hover:delay-0 duration-300 ease-in-out hidden"
          ><span
            class="iconify mr-1.5 text-3xl fw-bold"
            data-icon="jam:shopping-cart"
          ></span>
          <span class="text-xs">My Cart</span>
          <span class="bg-white rounded-sm text-black px-2 ml-2">0</span>
        </a>`;
      topNav.appendChild(cartItem);
    } else {
      topNavLink.setAttribute("href", item.link);
      topNavLink.innerHTML = item.name;
      topNavList.appendChild(topNavLink);
      topNav.appendChild(topNavList);
    }
  });
  return topNav;
}

export default TopNav;
