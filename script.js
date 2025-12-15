/** arrays & objects **/

const imageSRC = [
  "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxwZXJzb258ZW58MHx8MHx8fDA%3D",
];

const pageLinks = [
  "index.html",
  "contact.html",
  "agency.html",
  "project.html",
  "https://maps.app.goo.gl/JiEeotDUTehy3Zzq9",
  "https://github.com/dashboard",
  "https://www.instagram.com/nayanthakare31?igsh=Ym8xNWJ4aGlrNXZo",
  "https://www.threads.com/@nayanthakare31",
  "https://www.linkedin.com/in/nayan-thakare-b8450b335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
];

const bubbleGameMusicList = [
  "audio/King_Of_Pop_-_They_dont_really_care_about_us_(mp3 (mp3cut.net).mp3",
  "audio/Michael_Jackson_-_Billie_Jean_This_is_it_2009_(mp3 (mp3cut.net).mp3",
  "audio/Michael_Jackson_-_Black_Or_White_DANGEROS_(mp3 (mp3cut.net).mp3",
  "audio/Michael_Jackson_-_Earth_Song_AfishaFm (mp3cut.net).mp3",
  "audio/Michael_Jackson_-_Smooth_Criminal_(mp3 (mp3cut.net).mp3",
];

const projectPageLinks = [
  "music player.html",
  "https://nayan286.github.io/Gsap/",
  "https://nayan286.github.io/CAPSULES/",
  "image gallery.html",
  "calculator.html",
  "bubble game.html",
  "https://nayan286.github.io/PRESCRIPTO/",
  "profile card maker.html",
];

const musicPlayerMusicList = [
  {
    nameOfSong: "Pehli Nazar Mein",
    songLink:
      "audio/Atif_Aslam_Pritam_-_Pehli_Nazar_Mein_From_Race_(mp3.pm).mp3",
    singerName: "Atif Aslam",
    albumName: "Race (2008)",
    imageOfSong:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2ouJpTI0wBgB5AMDTIh1p2wBD2-eqN7nTw&s",
    mood: "romantic",
    type: "pop",
  },
  {
    nameOfSong: "Kabhi Kabhi Aditi",
    songLink: "audio/Jaane_Tu..._-_Kabhi_Kabhi_Aditi_Zindagi_(mp3.pm).mp3",
    singerName: "Rashid Ali",
    albumName: "Jaane Tu… Ya Jaane Na (2008)",
    imageOfSong:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXDohEadNEsOBSyqPss6MuEmYUZ4HKRlXVw&s",
    mood: "happy",
    type: "pop",
  },
  {
    nameOfSong: "In Dino",
    songLink: "audio/Life_In_A..._Metro_-_In_Dino_(mp3.pm).mp3",
    singerName: "Soham Chakraborty",
    albumName: "Life in a… Metro (2007)",
    imageOfSong:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tOdWE8zGkWFaIyJhPFZzbFOo8BI_kdR8Dw&s",
    mood: "relaxed",
    type: "pop",
  },
  {
    nameOfSong: "O Saathi Re",
    songLink:
      "audio/Muqaddar_Ka_Sikandar_1978_Vladyka_sudby_-_O_Saathi_Re_(mp3.pm).mp3",
    singerName: "Kishore Kumar",
    albumName: "Muqaddar Ka Sikandar (1978)",
    imageOfSong:
      "https://s.saregama.tech/image/c/m/1/68/1f/3588_1624534522.jpg",
    mood: "relaxed",
    type: "classical",
  },
  {
    nameOfSong: "Dus Bahane",
    songLink: "audio/ll_l_._l_Dus_ll_l_._l_-_Dus_Bahane_(mp3.pm).mp3",
    singerName: "KK & Shaan",
    albumName: "Dus (2005)",
    imageOfSong:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Dus_movieposter_reduced.jpg",
    mood: "energetic",
    type: "rock",
  },
  {
    nameOfSong: "Punjabi Mast",
    songLink: "audio/Action_Jackson_2014_-_Punjabi_Mast_(mp3.pm).mp3",
    singerName: "Ankit Tiwari & Neeti Mohan",
    albumName: "Action Jackson",
    imageOfSong:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Action_Jackson_Poster.jpeg",
    mood: "energetic",
    type: "rock",
  },
  {
    nameOfSong: "Saiyaara",
    songLink: "audio/Ek_Tha_Tiger_-_Saiyaara_(mp3.pm).mp3",
    singerName: "Mohit Chauhan",
    albumName: "Ek Tha Tiger",
    imageOfSong:
      "https://a10.gaanacdn.com/gn_img/albums/BZgWoQOK2d/ZgWo4D5b2d/size_m.jpg",
    mood: "romantic",
    type: "pop",
  },
  {
    nameOfSong: "Maine Poochha Chand Se",
    songLink: "audio/Muhammad_Rafi_-_Maine_Poochha_Chand_Se_(mp3.pm).mp3",
    singerName: "Mohammad Rafi",
    albumName: "Abdullah",
    imageOfSong:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NExrRm3rmceLoL-XXnpGaMmNL_4qMhGZeg&s",
    mood: "romantic",
    type: "classical",
  },
  {
    nameOfSong: "Woh Pehli Baar",
    songLink:
      "audio/Vishal_Dadlani_Shiraz_Samrat_Shaan_-_Woh_Pehli_Baar_(mp3.pm).mp3",
    singerName: "Shaan",
    albumName: "Pyaar Mein Kabhi Kabhi",
    imageOfSong:
      "https://i.scdn.co/image/ab6761610000e5eb2573d940f1062a6646891e50",
    mood: "happy",
    type: "pop",
  },
];

const badgeImageLinks = [
  "images/generated-image__4_-removebg-preview.png",
  "images/generated-image__6_-removebg-preview.png",
  "images/generated-image__5_-removebg-preview.png",
  "images/DIAMOND_Banner_with_4_Stars-removebg-preview.png",
  "images/generated-image__3_-removebg-preview.png",
];

const imageGalleryImages = [
  "image gallery images/“Had A Good Chat With The CEO About It”_ Woman.jpg",
  "image gallery images/49+ Stunning Kyojuro Rengoku Wallpapers – Free Download Now!.jpg",
  "image gallery images/Deadpool 💀💀.jpg",
  "image gallery images/download (1).jpg",
  "image gallery images/download (2).jpg",
  "image gallery images/download (3).jpg",
  "image gallery images/download (4).jpg",
  "image gallery images/download (5).jpg",
  "image gallery images/download (6).jpg",
  "image gallery images/download (7).jpg",
  "image gallery images/download (8).jpg",
  "image gallery images/download (9).jpg",
  "image gallery images/download (10).jpg",
  "image gallery images/download (11).jpg",
  "image gallery images/download (12).jpg",
  "image gallery images/download (13).jpg",
  "image gallery images/download (14).jpg",
  "image gallery images/download (15).jpg",
  "image gallery images/download (16).jpg",
  "image gallery images/download (17).jpg",
  "image gallery images/Flute of Silence _ Krishna 🔱✨.jpg",
  "image gallery images/hashirama vs Madara.jpg",
  "image gallery images/jay Mahakal🔱🤗.jpg",
  "image gallery images/KNY Akaza.jpg",
  "image gallery images/lord Krishna 🌺 4k wallpaper.jpg",
  "image gallery images/Made this when I was 9 originally_.jpg",
  "image gallery images/Naruto_.jpg",
  "image gallery images/Optimus prime.jpg",
  "image gallery images/Wallpaper ideas.jpg",
  "image gallery images/download (18) (1).jpg",
];

const imageGalleryImageCharacterNames = [
  "Purple Panther",
  "Flame Forest",
  "Red Mercenary",
  "Red Rebel",
  "Dark Crows",
  "Crying Monk",
  "Water Swordsman",
  "Yellow Ninja",
  "Red Kryptonian",
  "Blood Knight",
  "Metal Face",
  "Hammer Captain",
  "Fire Sorcerer",
  "Mech Spider",
  "Golden Warrior",
  "Green Blade",
  "Green Berserker",
  "Cosmic Fighter",
  "Red Samurai",
  "White Sage",
  "Divine Melody",
  "Split Ninja",
  "Cosmic Trance",
  "Fireworks Couple",
  "Storm Warrior",
  "Neon Cat",
  "Dark Shinobi",
  "Cyber Prime",
  "Green Doom",
  "Flame Chainsaw",
];

const profileCardTextClassNames = [
  "first-letter",
  "second-letter",
  "third-letter",
  "fourth-letter",
  "fifth-letter",
  "sixth-letter",
  "seventh-letter",
];

/** Web js **/

function imageFadeAnimation() {
  const profileImage = document.querySelector(
    ".agency-section .home-agency .profile-gallery img"
  );

  if (!profileImage || !Array.isArray(imageSRC) || imageSRC.length === 0)
    return;

  let index = 0;

  setInterval(() => {
    profileImage.src = imageSRC[index];
    index = (index + 1) % imageSRC.length;
  }, 1200);
}

function imageHoverAnimation() {
  let imageShow = document.querySelectorAll(
    ".agency-section .agency-profile-card .image-show-box img"
  );
  let teamMembers = document.querySelectorAll(
    ".agency-section .agency-profile-card .team-section .team-member"
  );

  if (imageShow) {
    teamMembers.forEach((member, index) => {
      member.addEventListener("mouseenter", function () {
        imageShow.forEach((image) => {
          image.src = imageSRC[index];
        });
      });
    });
  }
}

function projectInfoShowcase() {
  let projects = document.querySelectorAll(
    ".project-main .project-section .project-feature-section .project-feature .project"
  );
  let webLogoSvg = document.querySelector(".home-navbar .white-logo svg");
  let projectBio = document.querySelector(".project-bio-showcase");
  let projectFeatureSection = document.querySelector(
    ".project-main .project-section .project-feature-section"
  );
  let projectName = document.querySelector(
    ".project-bio-showcase .project-name h2"
  );
  let projectDescription = document.querySelector(
    ".project-bio-showcase .project-description h2"
  );
  let projectYear = document.querySelector(
    ".project-bio-showcase .project-year h2"
  );

  if (window.innerWidth >= 600) {
    if (projectFeatureSection) {
      projects.forEach((project) => {
        project.addEventListener("mouseenter", function (dets) {
          gsap.to(projectBio, {
            top: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });

          projectName.textContent = dets.target.dataset.name || "Unnamed";
          projectDescription.textContent =
            dets.target.dataset.description || "N/A";
          projectYear.textContent = dets.target.dataset.year || "Not Started";
        });

        project.addEventListener("mouseleave", function () {
          gsap.to(projectBio, {
            top: -100,
            duration: 0.3,
            ease: "power2.inOut",
          });
        });
      });

      projectFeatureSection.addEventListener("mouseenter", function () {
        gsap.to(webLogoSvg, {
          width: "4.5vw",
          marginTop: -3,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      projectFeatureSection.addEventListener("mouseleave", function () {
        gsap.to(webLogoSvg, {
          width: "6.5vw",
          marginTop: 10,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }
}

function pageTransitionBtn() {
  let homePageTransitionBtn = document.querySelector(".home-page-transition");
  let workPageTransitionBtn = document.querySelectorAll(
    ".work-page-transition"
  );
  let agencyPageTransitionBtn = document.querySelectorAll(
    ".agency-page-transition"
  );
  let contactPageTransitionBtn = document.querySelectorAll(
    ".contact-page-transition"
  );
  let mapPageBtns = document.querySelectorAll(
    ".contact-section .contact-head .contact-info .info2"
  );
  let githubPageTransitionBtn = document.querySelectorAll(
    ".github-page-transition"
  );
  let instaPageTransitionBtn = document.querySelectorAll(
    ".insta-page-transition"
  );
  let threasPageTransitionBtn = document.querySelectorAll(
    ".threads-page-transition"
  );
  let linkPageTransitionBtn = document.querySelectorAll(
    ".link-page-transition"
  );
  let allProjects = document.querySelectorAll(
    ".project-main .project-section .project-feature-section .project-feature .project"
  );

  if (homePageTransitionBtn) {
    homePageTransitionBtn.addEventListener("click", function () {
      window.location.href = pageLinks[0];
    });
  }

  if (workPageTransitionBtn) {
    workPageTransitionBtn.forEach((workPageBtn) => {
      workPageBtn.addEventListener("click", function () {
        window.location.href = pageLinks[3];
      });
    });
  }

  if (agencyPageTransitionBtn) {
    agencyPageTransitionBtn.forEach((agencyPageBtn) => {
      agencyPageBtn.addEventListener("click", function () {
        window.location.href = pageLinks[2];
      });
    });
  }

  if (contactPageTransitionBtn) {
    contactPageTransitionBtn.forEach((contactPageBtn) => {
      contactPageBtn.addEventListener("click", function () {
        window.location.href = pageLinks[1];
      });
    });
  }

  if (mapPageBtns) {
    mapPageBtns.forEach((mapPageBtn) => {
      mapPageBtn.addEventListener("click", function () {
        window.open(pageLinks[4], "_blank");
      });
    });
  }

  if (githubPageTransitionBtn) {
    githubPageTransitionBtn.forEach((githubPageBtn) => {
      githubPageBtn.addEventListener("click", function () {
        window.open(pageLinks[5], "_blank");
      });
    });
  }

  if (instaPageTransitionBtn) {
    instaPageTransitionBtn.forEach((instaPageBtn) => {
      instaPageBtn.addEventListener("click", function () {
        window.open(pageLinks[6], "_blank");
      });
    });
  }

  if (threasPageTransitionBtn) {
    threasPageTransitionBtn.forEach((threasPageBtn) => {
      threasPageBtn.addEventListener("click", function () {
        window.open(pageLinks[7], "_blank");
      });
    });
  }

  if (linkPageTransitionBtn) {
    linkPageTransitionBtn.forEach((linkPageBtn) => {
      linkPageBtn.addEventListener("click", function () {
        window.open(pageLinks[8], "_blank");
      });
    });
  }

  if (allProjects) {
    allProjects.forEach((allProject, index) => {
      allProject.addEventListener("click", function () {
        window.location.href = projectPageLinks[index];
      });
    });
  }
}

function slideLabelRotation() {
  let slideLabels = document.querySelectorAll(
    ".contact-section .slide-label-section"
  );

  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    if (slideLabels) {
      if (currentScroll > lastScroll) {
        gsap.to(slideLabels, {
          rotate: -5,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(slideLabels, {
          rotate: 5,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }

    lastScroll = currentScroll;
  });
}

function menuOpenCloseAnimation() {
  let homeMenuSection = document.querySelector(".home-menu-section");
  let menuStairs = document.querySelectorAll(
    ".home-menu-section .menu-stairs .menu-stair"
  );
  let menuSectionContent = document.querySelector(
    ".home-menu-section .menu-section-content"
  );
  let linkTextH2 = document.querySelectorAll(".slide-container .link-text h2");
  let closeIcon = document.querySelector(
    ".home-menu-section .menu-section-content .close-icon"
  );
  let menuSidebar = document.querySelector(
    ".home-navbar .home-navbar-content .menu-sidebar"
  );
  let navBarBtn3 = document.querySelector(
    ".agency-section .home-agency-navbar .navbar-content .navbar-btn3"
  );
  let tl = gsap.timeline({ paused: true });

  tl.to(homeMenuSection, {
    display: "block",
    duration: 0.2,
    ease: "power2.inOut",
  });

  if (window.innerWidth < 600) {
    tl.from(menuStairs, {
      y: "-100%",
      duration: 0.4,
      ease: "power2.inOut",
      stagger: -0.05,
    });
  } else {
    tl.from(menuStairs, {
      y: "-100%",
      duration: 0.3,
      ease: "power2.inOut",
      stagger: -0.08,
    });
  }

  tl.to(
    menuSectionContent,
    {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
    },
    "same1"
  );

  tl.from(
    linkTextH2,
    {
      y: "-110%",
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.08,
    },
    "same1"
  );

  tl.from(
    closeIcon,
    {
      x: "100%",
      duration: 0.3,
      ease: "power2.inOut",
    },
    "same1"
  );

  if (menuSidebar) {
    menuSidebar.addEventListener("click", function () {
      tl.play();
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      tl.reverse();
    });
  }

  if (navBarBtn3) {
    navBarBtn3.addEventListener("click", function () {
      menuSidebar.click();
    });
  }
}

function currentTimeDisplay() {
  let interval = function updateTime() {
    let now = new Date();
    let timeHours = document.querySelectorAll(".time-hour");
    let timeMinutes = document.querySelectorAll(".time-min");
    let timeSeconds = document.querySelectorAll(".time-sec");
    let getHour = now.getHours();
    let getMin = now.getMinutes();
    let getSec = now.getSeconds();

    if (getSec < 10) {
      getSec = "0" + getSec;
    }
    if (getMin < 10) {
      getMin = "0" + getMin;
    }
    if (getHour < 10) {
      getHour = "0" + getHour;
    }

    if (timeHours && timeMinutes && timeSeconds) {
      timeHours.forEach((timeHour) => {
        timeHour.textContent = getHour;
      });
      timeMinutes.forEach((timeMinute) => {
        timeMinute.textContent = getMin;
      });
      timeSeconds.forEach((timeSecond) => {
        timeSecond.textContent = getSec;
      });
    }
  };

  setInterval(interval, 1000);
}

function scrollToTop() {
  let scrollBtns = document.querySelectorAll(".scroll-btn");

  scrollBtns.forEach((scrollBtn) => {
    scrollBtn.addEventListener("click", function () {
      document.querySelector("#top-section")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function breakTheText() {
  let workTextH1 = document.querySelector(
    ".project-main .project-section .work-text h1"
  );

  if (workTextH1) {
    let textcontnt = workTextH1.textContent.trim();
    workTextH1.textContent = "";
    splitTexts = textcontnt.split("");

    splitTexts.forEach((splitText) => {
      let span = document.createElement("span");
      span.textContent = splitText;
      workTextH1.appendChild(span);
    });
  }
}

/** project js **/

function bubbleGame() {
  let gametimerTextcontent = document.querySelector(
    ".bubble-section .bubble-game .bubble-top .bubble-timer .timer"
  );
  let gamehitTextcontent = document.querySelector(
    ".bubble-section .bubble-game .bubble-top .bubble-hit .hit"
  );
  let gamescoreTextcontent = document.querySelector(
    ".bubble-section .bubble-game .bubble-top .bubble-score .score"
  );
  let bubblePlay = document.querySelector(
    ".bubble-section .bubble-game .bubble-play"
  );
  let playBtn = document.querySelector(
    ".bubble-section .bubble-game .bubble-bottom .game-start"
  );
  let musicPlayBtn = document.querySelector(
    ".bubble-section .bubble-game .bubble-bottom .music-play-btn"
  );
  let pauseBtn = document.querySelector(
    ".bubble-section .bubble-game .bubble-bottom .game-pause-btn"
  );
  let flag = 0;
  let pause = 0;

  function makeBubbles() {
    let bubbleCount = 184;
    let bubbleCountVar =
      window.innerWidth <= 600 ? (bubbleCount = 70) : bubbleCount;
    let count = "";
    for (i = 1; i <= bubbleCountVar; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      let randomNumberForBubbles =
        randomNumber < 9 ? randomNumber + 1 : randomNumber;
      count += `<div class="bubble">${randomNumberForBubbles}</div>`;
    }

    bubblePlay.innerHTML = count;
  }

  function gameTimer() {
    let initialTime = 60;
    let timer = setInterval(function () {
      initialTime--;
      if (gametimerTextcontent) {
        if (initialTime >= 0) {
          gametimerTextcontent.textContent =
            initialTime < 10 ? "0" + initialTime : initialTime;
        } else {
          clearInterval(timer);
          bubblePlay.innerHTML = `<h1 class="bubbleplay-head">game over</h1>`;
          playBtn.style.opacity = 1;
          playBtn.style.pointerEvents = "auto";
          pauseBtn.style.opacity = 0.7;
          pauseBtn.style.pointerEvents = "none";
          musicPlayBtn.style.opacity = 0.7;
          musicPlayBtn.style.pointerEvents = "none";
          audio.pause();
          gamehitTextcontent.textContent = "0";
        }
      }
    }, 1000);
  }

  function generateNewHit() {
    let randomNumber = Math.floor(Math.random() * 10);
    randomNumberForHit = randomNumber < 9 ? randomNumber + 1 : randomNumber;

    gamehitTextcontent.textContent = randomNumberForHit;
  }

  let score = 0;

  function increaseScore() {
    score += 10;
    gamescoreTextcontent.textContent = score;
  }

  function makeBubbleHit() {
    bubblePlay.addEventListener("click", function (dets) {
      if (dets.target.className === "bubble") {
        if (dets.target.textContent === gamehitTextcontent?.textContent) {
          increaseScore();
          makeBubbles();
          generateNewHit();
        }
      }
    });
  }

  let randomIndex = Math.floor(Math.random() * bubbleGameMusicList.length);
  let randomSongChoose = bubbleGameMusicList[randomIndex];

  let audio = new Audio(randomSongChoose);

  if (playBtn) {
    playBtn.addEventListener("click", function () {
      makeBubbles();
      makeBubbleHit();
      gameTimer();
      generateNewHit();
      audio.play();
      audio.currentTime = 0;
      playBtn.style.opacity = 0.7;
      playBtn.style.pointerEvents = "none";
      pauseBtn.style.opacity = 1;
      pauseBtn.style.pointerEvents = "auto";
      musicPlayBtn.style.opacity = 1;
      musicPlayBtn.style.pointerEvents = "auto";
      gamescoreTextcontent.textContent = 0;
    });
  }

  if (musicPlayBtn) {
    musicPlayBtn.addEventListener("click", function () {
      if (flag === 0) {
        audio.muted = true;
        musicPlayBtn.innerHTML = `<h3><i class="ri-volume-mute-fill"></i></h3>`;
        flag = 1;
      } else {
        audio.muted = false;
        musicPlayBtn.innerHTML = `<h3><i class="ri-volume-up-fill"></i></h3>`;
        flag = 0;
      }
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener("click", function () {
      if (pause === 0) {
        audio.pause();
        pauseBtn.innerHTML = `<h3><i class="ri-play-large-fill"></i></h3>`;
        pause = 1;
      } else {
        audio.play();
        pauseBtn.innerHTML = `<h3><i class="ri-pause-large-fill"></i></h3>`;
        pause = 0;
      }
    });
  }
}

function musicPlayer() {
  const musicPlaylist = document.querySelector(
    ".music-section .music-display .music-list"
  );
  const musicImage = document.querySelector(
    ".music-section .music-player .player .music-image img"
  );
  const musicName = document.querySelector(
    ".music-section .music-player .player .song-name"
  );
  const artistName = document.querySelector(
    ".music-section .music-player .player .artist-name"
  );
  const musicAlbumName = document.querySelector(
    ".music-section .music-player .player>h4 span"
  );

  const playBtn = document.querySelector(
    ".music-section .music-player .player .audio-controls .play-pause"
  );
  const playBtnIcon = playBtn?.querySelector("i");

  const forwardBtn = document.querySelector(
    ".music-section .music-player .player .audio-controls .forward"
  );
  const backwardBtn = document.querySelector(
    ".music-section .music-player .player .audio-controls .backward"
  );

  let selectedIndex = null;
  let isPlaying = false;
  const audio = new Audio();

  let playlistHTML = musicPlayerMusicList
    .map((item, i) => {
      return `
      <div 
        class="music music-click ${item.mood} ${item.type}"
        data-idx="${i}"
        data-songname="${item.nameOfSong}"
        data-artistname="${item.singerName}"
        data-album="${item.albumName}"
        data-image="${item.imageOfSong}"
        data-songlink="${item.songLink}"
      >
        <h3>${item.nameOfSong}</h3>
        <h4>${item.singerName}</h4>
      </div>`;
    })
    .join("");

  if (musicPlaylist === null) return;
  musicPlaylist.innerHTML = playlistHTML;

  function loadSong(index) {
    const song = musicPlayerMusicList[index];

    musicImage.src = song.imageOfSong;
    musicName.textContent = song.nameOfSong;
    artistName.textContent = song.singerName;
    musicAlbumName.textContent = song.albumName;

    audio.pause();
    audio.currentTime = 0;
    audio.src = song.songLink;
    audio.play();

    isPlaying = true;
    playBtnIcon.className = "ri-pause-fill";
  }

  musicPlaylist.addEventListener("click", function (e) {
    const target = e.target.closest(".music-click");
    if (!target) return;

    selectedIndex = Number(target.dataset.idx);
    loadSong(selectedIndex);
  });

  playBtn?.addEventListener("click", function () {
    if (!audio.src) return;

    if (isPlaying) {
      audio.pause();
      playBtnIcon.className = "ri-play-fill";
    } else {
      audio.play();
      playBtnIcon.className = "ri-pause-fill";
    }

    isPlaying = !isPlaying;
  });

  forwardBtn?.addEventListener("click", function () {
    if (selectedIndex === null) return;

    selectedIndex = (selectedIndex + 1) % musicPlayerMusicList.length;
    loadSong(selectedIndex);
  });

  backwardBtn?.addEventListener("click", function () {
    if (selectedIndex === null) return;

    selectedIndex =
      (selectedIndex - 1 + musicPlayerMusicList.length) %
      musicPlayerMusicList.length;
    loadSong(selectedIndex);
  });
}

function profileCardMaker() {
  const root = ".profile-maker-content .card-making-content";
  const qs = (sel) => document.querySelector(`${root} ${sel}`);
  const qsa = (sel) => document.querySelectorAll(`${root} ${sel}`);

  const inputForm = qs(".input-form");
  const cardPreviewSetion = qs(".card-preview-section");
  const createCardBtn = qs(
    ".input-form .card-generate-reset-btns button:nth-child(1)"
  );
  const resetBtn = qs(
    ".input-form .card-generate-reset-btns button:nth-child(2)"
  );
  const skillShownBox = qs(
    ".card-preview-section .profile-card .skill-shown-box"
  );
  const seeSkillsBtn = qs(
    ".card-preview-section .profile-card .card-content .user-profile .user-info .user-deep-info .see-skills-btn"
  );

  const nameInput = qs(".input-form .input-fields .username-input input");
  const bioInput = qs(".input-form .input-fields .userbio-input textarea");
  const locationInput = qs(
    ".input-form .input-fields .userlocation-input input"
  );
  const skillInput = qs(".input-form .input-fields .userskill-input input");

  const knowledgeRate = qs(".skill-ratings .knowledge input");
  const executionRate = qs(".skill-ratings .execution input");
  const valueRate = qs(".skill-ratings .value-delivered input");

  const skillRateInputs = qsa(".skill-ratings .skill-rate input");
  const allInputs = qsa(".input-form .input-fields input");

  let card = "";

  if (createCardBtn === null) return;
  createCardBtn.addEventListener("click", () => {
    // ---------- Field empty check ----------
    const required = [
      nameInput.value.trim(),
      bioInput.value.trim(),
      locationInput.value.trim(),
      skillInput.value.trim(),
      knowledgeRate.value.trim(),
      executionRate.value.trim(),
      valueRate.value.trim(),
    ];

    if (required.some((v) => v === "")) {
      alert("Please fill all input fields");
      return;
    }

    // ---------- Skill rating validation ----------
    for (const s of skillRateInputs) {
      const val = s.value.trim();

      // only digits 0–9 AND must be between 1–5
      const isDigit = /^[0-9]$/.test(val);
      const num = Number(val);

      if (!isDigit || num < 1 || num > 5) {
        alert("Skill Rating should be between 1–5 and must be a single digit");
        return;
      }
    }

    // ---------- Skill rating calculation ----------
    const avg =
      (Number(knowledgeRate.value) +
        Number(executionRate.value) +
        Number(valueRate.value)) /
      3;

    const ratingIndex = Math.floor(avg) - 1;

    let skillInputArray;
    if (skillInput.value.includes(",")) {
      skillInputArray = skillInput.value.trim().split(",");
    } else {
      skillInputArray = skillInput.value.tim();
    }
    console.log(skillInputArray);
    let skillInputArrayLength = skillInputArray.length;

    // ---------- Build card ----------
    card = `
      <div class="profile-card">
        <div class="card-content">
          <div class="user-profile">
            <div class="user-info">
              <div class="username"><h2>${nameInput.value.trim()}</h2></div>
              <div class="user-bio"><p>${bioInput.value.trim()}</p></div>
              
              <div class="user-deep-info">
                <div class="user-skills-locate">
                  <div class="user-skills same-style">
                    <h3>skills</h3>
                    <div class="skill-count">${skillInputArrayLength}</div>
                  </div>
                  <div class="user-locate same-style">
                    <h3>country</h3>
                    <div class="country-name">${locationInput.value.trim()}</div>
                  </div>
                </div>
                <div class="see-skills-btn">
                  <button>see skills</button>
                </div>
              </div>
            </div>

            <div class="rating-status">
              <h3>${avg.toFixed(1)}</h3>
              <div class="star"></div>
            </div>
          </div>
        </div>

        <div class="badge">
          <img src="${badgeImageLinks[ratingIndex]}" alt="badge img">
        </div>

        <div class="skill-shown-box">
          <h3>skills</h3>
        </div>
      </div>`;

    cardPreviewSetion.innerHTML = card;
    allInputs.forEach((input) => (input.value = ""));
    bioInput.value = "";
  });

  resetBtn.addEventListener("click", () => {
    cardPreviewSetion.innerHTML = "";
    card = "";
  });

  if (window.innerWidth <= 600) {
    createCardBtn.addEventListener("click", function () {
      inputForm.style.display = "none";
    });
  }
}

function imageGallery() {
  let imageGallery = document.querySelector(".image-gallery");
  let imageContainer = document.querySelectorAll(
    ".image-gallery .images .img .image img"
  );
  let imageIndex = document.querySelectorAll(
    ".image-gallery .images .img .image-index"
  );
  let imageShown = document.querySelector(".image-gallery .image-shown");
  let imageShownContainer = document.querySelector(
    ".image-gallery .image-shown .image-shown-container img"
  );
  let imageName = document.querySelector(
    ".image-gallery .image-shown .image-name"
  );

  imageContainer.forEach((image, index) => {
    image.src = imageGalleryImages[index];
  });

  if (window.innerWidth >= 600) {
    imageIndex.forEach((imageNumber, index) => {
      imageNumber.textContent = index + 1;
    });
  }

  if (imageGallery === null) return;
  imageGallery.addEventListener("click", function (dets) {
    if (dets.target.classList.contains("image")) {
      setTimeout(() => {
        imageShown.style.opacity = 1;
        imageShown.style.pointerEvents = "auto";
        imageShownContainer.style.pointerEvents = "auto";
      }, 50);

      let imageShownSrc = dets.target.children[0].src;
      imageShownContainer.src = imageShownSrc;

      if (window.innerWidth >= 600) {
        let imageIndexNumber = dets.target
          .closest(".image-gallery .images .img")
          .querySelector(".image-index").textContent;
        imageName.textContent =
          imageGalleryImageCharacterNames[imageIndexNumber - 1];
      }
    }
  });

  imageShown.addEventListener("click", function (dets) {
    if (dets.target.classList.contains("image-shown")) {
      imageShown.style.opacity = 0;
      imageShown.style.pointerEvents = "none";
      imageShownContainer.style.pointerEvents = "none";
    }
  });
}

/** project loader js **/

function imageGalleryLoader() {
  let imageGalleryText = document.querySelector(
    ".imageGallery-loader .imageGallery-loader-content .imageGallery-text"
  );
  let imageGalleryBall = document.querySelector(
    ".imageGallery-loader .imageGallery-loader-content .imageGallery-ball"
  );
  let imageGalleryLoader = document.querySelector(".imageGallery-loader");

  if (!imageGalleryText) return;

  let imageGalleryTextcontent = imageGalleryText.textContent;
  let imageGallerySplitTexts = imageGalleryTextcontent.split("");

  imageGalleryText.innerHTML = "";
  imageGallerySplitTexts.forEach((imageGallerySplitText) => {
    let span = document.createElement("span");
    span.textContent =
      imageGallerySplitText === " " ? "\u00A0" : imageGallerySplitText;
    imageGalleryText.appendChild(span);
  });

  let imageGallerySpanText = document.querySelectorAll(
    ".imageGallery-loader .imageGallery-loader-content .imageGallery-text span"
  );

  if (
    !imageGalleryLoader ||
    !imageGallerySpanText ||
    !imageGalleryBall ||
    !imageGalleryText
  )
    return;

  let tl = gsap.timeline();
  let hasAnimated = false;
  let imageGalleryBallWidth =
    imageGalleryBall.getBoundingClientRect().width / 2;

  tl.to(imageGalleryBall, {
    x:
      window.innerWidth -
      imageGalleryText.getBoundingClientRect().left +
      imageGalleryBallWidth,
    duration: 1.6,
    onUpdate: () => {
      if (!hasAnimated) {
        let ballAndTextGap =
          imageGalleryText.getBoundingClientRect().left -
          imageGalleryBall.getBoundingClientRect().right;

        if (ballAndTextGap <= 0) {
          hasAnimated = true;
          gsap.to(imageGallerySpanText, {
            y: "0%",
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
          });
        }
      }
    },
  });

  tl.to(imageGalleryLoader, {
    opacity: 0,
    duration: 0.4,
    display: "none",
    ease: "power2.in",
  });
}

function bubbleGameLoader() {
  let bubbleGameLoader = document.querySelector(".bubbleGame-loader");
  let bubbleGameText = document.querySelector(
    ".bubbleGame-loader .bubbleGame-loader-content .bubbleGame-text"
  );
  if (!bubbleGameText) return;
  let bubbleGameTextcontent = bubbleGameText.textContent;
  let bubbleGameSplitTexts = bubbleGameTextcontent.split(" ");
  let bubbleGameSplitTextBasisGap = bubbleGameTextcontent.split("");
  let bubbleGameTextFirstHalf = bubbleGameSplitTexts[0].split("");
  let bubbleGameTextSecondHalf = bubbleGameSplitTexts[1].split("");

  bubbleGameText.innerHTML = "";
  bubbleGameTextFirstHalf.forEach((bubbleGameSplitTextFirst) => {
    let span = document.createElement("span");
    span.textContent =
      bubbleGameSplitTextFirst === " " ? "\u00A0" : bubbleGameSplitTextFirst;
    span.classList.add("first-half");
    bubbleGameText.appendChild(span);
  });
  bubbleGameSplitTextBasisGap.forEach((bubbleGameSplitTextGap) => {
    if (bubbleGameSplitTextGap !== " ") return;
    let span = document.createElement("span");
    span.textContent = "\u00A0";
    span.classList.add("text-gap");
    bubbleGameText.appendChild(span);
  });
  bubbleGameTextSecondHalf.forEach((bubbleGameSplitTextSecond) => {
    let span = document.createElement("span");
    span.textContent =
      bubbleGameSplitTextSecond === " " ? "\u00A0" : bubbleGameSplitTextSecond;
    span.classList.add("second-half");
    bubbleGameText.appendChild(span);
  });

  let bubbleGameTextSpanFirst = document.querySelectorAll(
    ".bubbleGame-loader .bubbleGame-loader-content .bubbleGame-text .first-half"
  );
  let bubbleGameTextSpanSecond = document.querySelectorAll(
    ".bubbleGame-loader .bubbleGame-loader-content .bubbleGame-text .second-half"
  );
  if (!bubbleGameTextSpanFirst || !bubbleGameTextSpanSecond) return;
  let tl = gsap.timeline();
  tl.to(
    bubbleGameTextSpanFirst,
    {
      y: "0%",
      duration: 0.4,
      stagger: 0.06,
    },
    "same"
  );
  tl.to(
    bubbleGameTextSpanSecond,
    {
      y: "0%",
      duration: 0.4,
      stagger: -0.08,
    },
    "same"
  );
  tl.to(bubbleGameLoader, {
    opacity: 0,
    display: "none",
    duration: 0.4,
    delay: 0.05,
    ease: "power2.in",
  });
}

function profileCardLoader() {
  let profileCardLoader = document.querySelector(".profileCard-loader");
  let profileCardText = document.querySelector(
    ".profileCard-loader .profileCard-loader-content .profileCardMaker-text"
  );
  if (!profileCardText) return;
  let profileCardTextTextcontent = profileCardText.textContent;
  let profileCardSplitTexts = profileCardTextTextcontent.split("");

  profileCardText.innerHTML = "";
  profileCardSplitTexts.forEach((profileCardSplitText, index) => {
    let span = document.createElement("span");
    span.textContent =
      profileCardSplitText === " " ? "\u00A0" : profileCardSplitText;
    span.classList.add(`${profileCardTextClassNames[index]}`);
    profileCardText.appendChild(span);
  });

  let profileCardSpanText = document.querySelectorAll(
    ".profileCard-loader .profileCard-loader-content .profileCardMaker-text span"
  );
  if (!profileCardSpanText) return;
  let tl = gsap.timeline();

  tl.from(".first-letter", {
    x: "-100%",
    opacity: 0,
    duration: 0.18,
    ease: "back.out(2)",
  });

  tl.from(".second-letter", {
    y: "-100%",
    opacity: 0,
    duration: 0.18,
    ease: "back.out(2)",
  });

  tl.from(".third-letter", {
    y: "100%",
    opacity: 0,
    duration: 0.18,
    ease: "back.out(2)",
  });

  tl.from(".fourth-letter", {
    y: "-100%",
    opacity: 0,
    duration: 0.18,
    ease: "back.out(2)",
  });

  tl.from(".fifth-letter", {
    y: "100%",
    opacity: 0,
    duration: 0.18,
    ease: "back.out(2)",
  });

  tl.from(".sixth-letter", {
    y: "-100%",
    opacity: 0,
    duration: 0.18,
    ease: "back.out(2)",
  });

  tl.from(".seventh-letter", {
    x: "100%",
    opacity: 0,
    duration: 0.18,
    ease: "back.out(2)",
  });

  tl.to(profileCardLoader, {
    opacity: 0,
    display: "none",
    duration: 0.4,
    delay: 0.1,
    ease: "power2.inOut",
  });
}

function musicPlayerLoader() {
  let musicPlayerLoader = document.querySelector(".musicPlayer-loader");
  let musicPlayerText = document.querySelector(
    ".musicPlayer-loader .musicPlayer-loader-content .musicPlayer-text"
  );
  let musicPlayerIcon = document.querySelector(
    ".musicPlayer-loader .musicPlayer-loader-content .musicPlayer-icon i"
  );
  let musicPlayerIconTransform = window.innerWidth / 2;
  if (!musicPlayerIcon) return;
  let musicPlayerIconFontsize =
    parseInt(window.getComputedStyle(musicPlayerIcon).fontSize) * 4;
  console.log(musicPlayerIconFontsize);

  if (!musicPlayerText) return;
  let musicPlayerTextcontent = musicPlayerText.textContent;
  let musicPlayerSplitTexts = musicPlayerTextcontent.split("");
  let musicPlayerSplitTextGapBasis = musicPlayerTextcontent.split(" ");
  let musicPlayerSplitTextFirstHalf = musicPlayerSplitTextGapBasis[0].split("");
  let musicPlayerSplitTextSecondHalf =
    musicPlayerSplitTextGapBasis[1].split("");

  musicPlayerText.innerHTML = "";
  musicPlayerSplitTextFirstHalf.forEach((musicPlayerSplitTextFirst) => {
    let span = document.createElement("span");
    span.textContent =
      musicPlayerSplitTextFirst === " " ? "\u00A0" : musicPlayerSplitTextFirst;
    span.classList.add("first-half");
    musicPlayerText.appendChild(span);
  });
  musicPlayerSplitTexts.forEach((musicPlayerSplitText) => {
    if (musicPlayerSplitText !== " ") return;
    let span = document.createElement("span");
    span.textContent = "\u00A0";
    musicPlayerText.appendChild(span);
  });
  musicPlayerSplitTextSecondHalf.forEach((musicPlayerSplitTextSecond) => {
    let span = document.createElement("span");
    span.textContent =
      musicPlayerSplitTextSecond === " "
        ? "\u00A0"
        : musicPlayerSplitTextSecond;
    span.classList.add("second-half");
    musicPlayerText.appendChild(span);
  });

  let musicPlayerSplitTextFirstSpan = document.querySelectorAll(
    ".musicPlayer-loader .musicPlayer-loader-content .musicPlayer-text .first-half"
  );
  let musicPlayerSplitTextSecondSpan = document.querySelectorAll(
    ".musicPlayer-loader .musicPlayer-loader-content .musicPlayer-text .second-half"
  );

  if (!musicPlayerSplitTextFirstSpan || !musicPlayerSplitTextSecondSpan) return;

  let tl = gsap.timeline();

  tl.from(musicPlayerIcon, {
    fontSize: musicPlayerIconFontsize,
    transform: `translateX(${musicPlayerIconTransform})`,
    duration: 0.6,
    delay: () => {
      return window.innerWidth >= 600 ? 0.8 : 0.6;
    },
  });

  tl.from(
    musicPlayerSplitTextFirstSpan,
    {
      fontSize: 0,
      opacity: 0,
      stagger: 0.08,
      duration: 0.4,
    },
    "same"
  );

  tl.from(
    musicPlayerSplitTextSecondSpan,
    {
      fontSize: 0,
      opacity: 0,
      stagger: -0.08,
      duration: 0.4,
    },
    "same"
  );

  tl.to(musicPlayerLoader, {
    scale: 0,
    display: "none",
    duration: 0.3,
    ease: "power1.in",
  });
}

/** web loader js **/

function homePageLoader() {
  let loadingStairs = document.querySelectorAll(
    ".k72-loader .loader-content .loader-text-area .web-loader-stairs .loading-stairs"
  );
  let loaderTextArea = document.querySelector(".k72-loader .loader-content .loader-text-area");
  let loaderStair = document.querySelectorAll(
    ".k72-loader .loader-content .loader-stairs .loader-stair"
  );
  let webLoader = document.querySelector(".k72-loader");

  if (loadingStairs.length === 0) return;
  let transformValue = window.innerWidth >= 600 ? 80 : 70;

  gsap.to(loadingStairs, {
    transform: `translateY(${transformValue}%)`,
    stagger: -0.08,
    duration: 0.4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  if(!loaderTextArea || !loaderStair || !webLoader) return;
  let tl = gsap.timeline({paused: true});
  const delayValue = webLoader.classList.contains("delay-yes") ? 1 : 0.5;
  console.log(delayValue);

  tl.to(loaderTextArea, {
    opacity: 0,
    duration: 0.3,
    delay: delayValue,
  })

  tl.to(loaderStair, {
    y: "100%",
    stagger: 0.05,
    duration: () => {
      return window.innerWidth >= 600 ? 0.3: 0.4
    },
    ease: "power1.inOut"
  })

  tl.to(webLoader, {
    display: "none",
    duration: 0.2,
  })

  window.addEventListener("load", () => {
    tl.play();
  })
}

/** function Calling **/

document.addEventListener("DOMContentLoaded", function () {
  imageFadeAnimation();
  if (window.innerWidth >= 600) imageHoverAnimation();
  currentTimeDisplay();
  projectInfoShowcase();
  pageTransitionBtn();
  slideLabelRotation();
  menuOpenCloseAnimation();
  scrollToTop();
  breakTheText();
  bubbleGame();
  imageGallery();
  profileCardMaker();
  musicPlayer();
  imageGalleryLoader();
  bubbleGameLoader();
  profileCardLoader();
  musicPlayerLoader();
  homePageLoader();
});

// if (window.innerWidth < 600) {
//   document
//     .querySelector(".home-navbar .home-navbar-content .menu-sidebar")
//     .addEventListener("click", function () {
//       window.location.href = "music player.html";
//     });
// }
