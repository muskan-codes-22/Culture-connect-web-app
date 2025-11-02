// =========================
// Explore Page Data
// =========================
const placeData = {
  Delhi: {
    culture:
      "Delhi offers an immersive cultural journey for visitors eager to absorb its unique heritage, living traditions, and vibrant local life. The city balances centuries-old customs with cosmopolitan flair, creating a rich tapestry of experiences for culture-focused travelers.",
    food: "Delhi’s food scene is an edible history lesson. Culinary explorations from Chandni Chowk’s Paranthe Wali Gali to vibrant street chaat corners or legendary Mughlai meat delicacies reveal the city’s layers of migration and taste. Hand-pulled sweets, spice-laden curries, and butter chicken are key highlights—food walks are a must for culture seekers.",
    history:
      "The city’s heritage sites are testimonies to Delhi’s layered past — Mughal wonders like Red Fort, Jama Masjid, and Humayun’s Tomb; British-era icons like India Gate and Connaught Place; tranquil gardens like Mughal Gardens and Lodhi Garden; and hidden medieval stepwells and Sufi shrines quietly tucked away.",
    heritage:
      "Delhi has become India’s creative capital, with art districts like Lodhi Art District, folk theatre, and workshops for crafts, weaving, and martial arts integrated into the city’s rhythm. Night markets, cultural shows, and sari or turban-tying sessions make tradition accessible.",
    whyVisit:
      "Delhi lets you live India’s diversity in one city — every street fronts a chapter of the country’s past and every festival, plate of food, or historic site invites you to participate rather than just observe. Whether you’re watching a Sufi qawwali in Nizamuddin or negotiating at Dilli Haat’s craft stalls, culture in Delhi isn’t just seen — it’s experienced at every turn. Pack your bags and immerse yourself in Delhi, where tradition meets contemporary energy, and every moment hands you a piece of India’s living heritage.",
  },

  Jaipur: {
    culture:
      "Jaipur, the Pink City, is famous for its royal heritage, traditional arts like block printing and puppetry, and colorful festivals.",
    food: "Dal Baati Churma, Ghevar, Laal Maas, traditional Rajasthani thalis.",
    history:
      "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is known for its planned city layout and royal history.",
    heritage: "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar.",
    whyVisit:
      "Visitors experience royal architecture, colorful markets, traditional arts, and rich Rajasthani culture.",
  },

  Kerala: {
    culture:
      "Kerala is famous for its serene backwaters, traditional dance forms like Kathakali and Mohiniyattam, Ayurveda wellness, and festivals like Onam.",
    food: "Appam, Kerala Sadya, Fish Curry, Puttu, coconut-based dishes.",
    history:
      "Kerala has a rich maritime history with trade connections to Arabs, Portuguese, Dutch, and British.",
    heritage:
      "Backwaters of Alleppey, Fort Kochi, Padmanabhaswamy Temple, Periyar Wildlife Sanctuary.",
    whyVisit:
      "Kerala offers nature, spirituality, wellness, and cultural immersion — perfect for travelers seeking authentic experiences.",
  },

  Agra: {
    culture:
      "Agra reflects Mughal culture with its architecture, gardens, and artisan crafts.",
    food: "Petha (sweet), Mughlai cuisine.",
    history:
      "Home of the Taj Mahal, Agra Fort, Fatehpur Sikri — iconic Mughal history.",
    heritage: "UNESCO World Heritage sites including Taj Mahal and Agra Fort.",
    whyVisit:
      "Agra is ideal for travelers to witness Mughal architecture, learn history, and experience cultural richness.",
  },

  Varanasi: {
    culture:
      "Spiritual rituals, classical music, and ghats on the Ganges define Varanasi’s culture.",
    food: "Kachori Sabzi, Banarasi Paan, Lassi.",
    history: "One of the oldest continuously inhabited cities in the world.",
    heritage: "Ghats, Kashi Vishwanath Temple, Sarnath.",
    whyVisit:
      "Experience spirituality, rituals, river life, and India’s deep cultural roots.",
  },

  Amritsar: {
    culture: "Center of Sikh culture and community hospitality.",
    food: "Amritsari Kulcha, Lassi, Langar meals.",
    history:
      "Golden Temple founded in the 16th century; important historical sites include Jallianwala Bagh.",
    heritage: "Golden Temple, Jallianwala Bagh, Wagah Border.",
    whyVisit:
      "Amritsar offers spiritual experiences, culinary delights, and a glimpse into Sikh heritage.",
  },

  Leh: {
    culture:
      "Buddhist monasteries, Himalayan traditions, and trekking culture.",
    food: "Thukpa, Momos, Butter Tea.",
    history: "Ancient trade routes, monasteries like Hemis and Thiksey.",
    heritage: "Monasteries, Pangong Lake, Nubra Valley.",
    whyVisit:
      "Adventure, high-altitude culture, and serene Buddhist heritage attract travelers.",
  },

  Manali: {
    culture:
      "Hill station with Himachali culture, adventure sports, and mountain festivals.",
    food: "Trout fish, Siddu, Himachali cuisines.",
    history: "Traditional Himachali lifestyle and festivals.",
    heritage: "Solang Valley, Hidimba Temple, Rohtang Pass.",
    whyVisit:
      "Nature, adventure, and Himachali cultural immersion make it ideal for tourists.",
  },

  Shimla: {
    culture: "Colonial architecture and hill station culture.",
    food: "Chana Madra, Sidu, Himachali dishes.",
    history: "British summer capital with Victorian-era buildings.",
    heritage: "The Ridge, Mall Road, Jakhoo Temple.",
    whyVisit:
      "Relax amidst mountains while enjoying heritage architecture and local traditions.",
  },

  Chandigarh: {
    culture: "Modern architecture, gardens, and Punjabi culture.",
    food: "Butter Chicken, Chole Bhature, Lassi.",
    history: "Designed by Le Corbusier post-independence.",
    heritage: "Rock Garden, Sukhna Lake, Capitol Complex.",
    whyVisit:
      "Experience planned urban design, gardens, and a blend of modern and Punjabi culture.",
  },

  Bengaluru: {
    culture: "IT hub blended with traditional Karnataka festivals and music.",
    food: "Masala Dosa, Idli, Vada.",
    history: "Founded in 1537; rich in temples and royal history.",
    heritage:
      "Bangalore Palace, Lalbagh Botanical Garden, Tipu Sultan's Summer Palace.",
    whyVisit:
      "Modern city with cultural festivals, gardens, and heritage sites.",
  },

  Chennai: {
    culture: "Classical music, dance, and Tamil traditions flourish.",
    food: "Idli, Dosa, Filter Coffee, Chettinad cuisine.",
    history: "Founded in 1639; important colonial and cultural sites.",
    heritage: "Marina Beach, Kapaleeshwarar Temple, Fort St. George.",
    whyVisit:
      "Learn Tamil culture, enjoy classical arts, and explore coastal heritage.",
  },

  Mysore: {
    culture: "Royal Mysore traditions and Dasara festival.",
    food: "Mysore Pak, Rava Idli, Bisi Bele Bath.",
    history: "Seat of Wodeyar dynasty; famous palaces and temples.",
    heritage: "Mysore Palace, Chamundi Hill, St. Philomena's Church.",
    whyVisit: "Experience royal heritage, festivals, and Karnataka culture.",
  },

  Kochi: {
    culture: "Fusion of Indian, Portuguese, Dutch, and British influences.",
    food: "Kerala Sadya, Seafood dishes.",
    history: "Colonial trade port with spice history.",
    heritage: "Fort Kochi, Chinese Fishing Nets, Mattancherry Palace.",
    whyVisit:
      "Heritage walks, backwaters, and colonial architecture make it a cultural hotspot.",
  },

  Thiruvananthapuram: {
    culture: "Kerala traditions, temple festivals, and arts.",
    food: "Kerala Sadya, Tapioca dishes, Seafood.",
    history:
      "Ancient capital with Padmanabhaswamy Temple and colonial history.",
    heritage: "Padmanabhaswamy Temple, Kovalam Beach, Napier Museum.",
    whyVisit: "Spiritual and cultural experiences in a serene coastal city.",
  },

  Munnar: {
    culture: "Hill station with tea plantation culture.",
    food: "Kerala Tea, local vegetarian dishes.",
    history: "British-era hill station.",
    heritage: "Tea Gardens, Eravikulam National Park.",
    whyVisit: "Nature, tea culture, and hilltop serenity attract tourists.",
  },

  Wayanad: {
    culture: "Tribal culture and eco-tourism.",
    food: "Kerala curries, bamboo shoot dishes.",
    history: "Rich in tribal traditions and forests.",
    heritage: "Wildlife sanctuaries, Edakkal Caves.",
    whyVisit: "Adventure, nature, and tribal cultural exposure.",
  },
};

// =========================
// Normalize user input
// =========================
function normalizeInput(input) {
  return input
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// =========================
// DOM Elements
// =========================
const placeInfo = document.getElementById("placeInfo");
const hiddenGemsBtn = document.getElementById("hiddenGemsBtn");

// =========================
// Explore Form Submission
// =========================
document.getElementById("exploreForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const place = normalizeInput(
    document.getElementById("destinationInput").value
  );
  if (placeData[place]) {
    const data = placeData[place];
    placeInfo.innerHTML = `
      <h3>${place}</h3>
      <p><b>Culture:</b> ${data.culture}</p>
      <p><b>Food:</b> ${data.food}</p>
      <p><b>History:</b> ${data.history}</p>
      <p><b>Heritage:</b> ${data.heritage}</p>
      <p><b>Why Visit:</b> ${data.whyVisit}</p>
      <p>✈️ Pack your bags and travel to experience the culture yourself!</p>
    `;
    placeInfo.style.display = "block";

    // Show hidden gems button
    hiddenGemsBtn.style.display = "block";
    hiddenGemsBtn.onclick = () => {
      window.location.href = `hiddenGems.html?city=${encodeURIComponent(
        place
      )}`;
    };
  } else {
    placeInfo.innerHTML = `<p class="error">❌ Sorry, no travel information available for "${place}". Please try another city from the list.</p>`;
    placeInfo.style.display = "block";
    hiddenGemsBtn.style.display = "none";
  }
});

// =========================
// Recommendations
// =========================
document.getElementById("recommendForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document
    .getElementById("interestInput")
    .value.trim()
    .toLowerCase();
  const keywords = input.split(",").map((k) => k.trim());

  const recommendations = [];

  for (const city in placeData) {
    const data = placeData[city];
    let score = 0;

    keywords.forEach((keyword) => {
      if (data.culture.toLowerCase().includes(keyword)) score++;
      if (data.food.toLowerCase().includes(keyword)) score++;
      if (data.history.toLowerCase().includes(keyword)) score++;
      if (data.heritage.toLowerCase().includes(keyword)) score++;
      if (data.whyVisit.toLowerCase().includes(keyword)) score++;
    });

    if (score > 0) {
      recommendations.push({ city, score });
    }
  }

  recommendations.sort((a, b) => b.score - a.score);

  const recDiv = document.getElementById("recommendations");
  if (recommendations.length > 0) {
    recDiv.innerHTML =
      "<h3>Recommended Cities for You:</h3><ul>" +
      recommendations
        .slice(0, 5)
        .map((r) => `<li>${r.city}</li>`)
        .join("") +
      "</ul>";
  } else {
    recDiv.innerHTML =
      "<p class='error'>No matching cities found. Try different interests!</p>";
  }
  recDiv.style.display = "block";
});

/* ===== Guide & Tips: interactive submission + localStorage + gallery + delete ===== */
(function () {
  const GUIDE_KEY = "cultureconnect_guides_v1";

  // DOM Elements
  const guideBtn = document.getElementById("guideTipsBtn");
  const guideModal = document.getElementById("guideModal");
  const closeGuideModal = document.getElementById("closeGuideModal");
  const steps = Array.from(document.querySelectorAll(".step"));
  let currentStep = 0;

  // form fields
  const tipCity = document.getElementById("tipCity");
  const tipTitle = document.getElementById("tipTitle");
  const tipAuthor = document.getElementById("tipAuthor");
  const tipText = document.getElementById("tipText");
  const tipImage = document.getElementById("tipImage");
  const imgPreview = document.getElementById("imgPreview");
  const ratingInput = document.getElementById("ratingInput");

  const toStep2 = document.getElementById("toStep2");
  const cancelStep = document.getElementById("cancelStep");
  const backToStep1 = document.getElementById("backToStep1");
  const toStep3 = document.getElementById("toStep3");
  const backToStep2 = document.getElementById("backToStep2");
  const submitTip = document.getElementById("submitTip");

  const resultModal = document.getElementById("resultModal");
  const resultClose = document.getElementById("resultClose");
  const resultView = document.getElementById("resultView");

  const guidesSection = document.getElementById("guidesSection");
  const guidesGrid = document.getElementById("guidesGrid");

  let selectedRating = 5;
  let uploadedImageBase64 = "";

  // Load/save from localStorage
  function loadGuides() {
    try {
      const raw = localStorage.getItem(GUIDE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  function saveGuides(arr) {
    localStorage.setItem(GUIDE_KEY, JSON.stringify(arr));
  }

  // Open/close modal
  guideBtn.addEventListener("click", () => openGuideModal());
  closeGuideModal.addEventListener("click", closeGuideModalFn);

  function openGuideModal() {
    guideModal.setAttribute("aria-hidden", "false");
    guideModal.style.display = "flex";
    goToStep(0);
  }
  function closeGuideModalFn() {
    guideModal.setAttribute("aria-hidden", "true");
    guideModal.style.display = "none";
    resetForm();
  }

  function goToStep(index) {
    currentStep = index;
    steps.forEach((s, i) => s.classList.toggle("active", i === index));
    document.querySelector(".modal-panel").scrollTop = 0;
  }

  toStep2.addEventListener("click", () => {
    if (!tipCity.value.trim() || !tipTitle.value.trim()) {
      alert("Please enter city and a short title for your tip.");
      return;
    }
    goToStep(1);
  });
  cancelStep.addEventListener("click", closeGuideModalFn);
  backToStep1.addEventListener("click", () => goToStep(0));
  toStep3.addEventListener("click", () => {
    if (!tipText.value.trim()) {
      alert("Please write a short tip or guide text.");
      return;
    }
    goToStep(2);
  });
  backToStep2.addEventListener("click", () => goToStep(1));

  tipImage.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) {
      uploadedImageBase64 = "";
      imgPreview.innerHTML = "";
      return;
    }
    if (file.size > 2_000_000) {
      if (!confirm("Image is large and may bloat storage. Continue?")) {
        tipImage.value = "";
        return;
      }
    }
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageBase64 = reader.result;
      imgPreview.innerHTML = `<img src="${uploadedImageBase64}" alt="preview" />`;
    };
    reader.readAsDataURL(file);
  });

  ratingInput.addEventListener("click", (e) => {
    if (!e.target.classList.contains("star")) return;
    selectedRating = Number(e.target.dataset.value) || 5;
    updateStarUI();
  });

  function updateStarUI() {
    ratingInput.querySelectorAll(".star").forEach((b) => {
      const v = Number(b.dataset.value);
      b.classList.toggle("active", v <= selectedRating);
      b.textContent = v <= selectedRating ? "★" : "☆";
    });
  }
  updateStarUI();

  // Only show result modal when a tip is submitted
  submitTip.addEventListener("click", (e) => {
    e.preventDefault();

    const newGuide = {
      id: "g-" + Date.now(),
      city: tipCity.value.trim(),
      title: tipTitle.value.trim(),
      author: tipAuthor.value.trim() || "Anonymous",
      text: tipText.value.trim(),
      image: uploadedImageBase64 || "",
      rating: selectedRating,
      createdAt: new Date().toISOString(),
    };

    // save to localStorage
    const arr = loadGuides();
    arr.unshift(newGuide);
    saveGuides(arr);

    // SHOW result modal ONLY here
    resultModal.setAttribute("aria-hidden", "false");
    resultModal.style.display = "flex";
    document.getElementById(
      "resultText"
    ).textContent = `Tip for "${newGuide.city}" saved! Check the gallery.`;

    closeGuideModalFn(); // close guide modal
    renderGuides(); // render gallery
  });

  resultClose.addEventListener("click", () => {
    resultModal.setAttribute("aria-hidden", "true");
    resultModal.style.display = "none";
  });
  resultView.addEventListener("click", () => {
    resultModal.setAttribute("aria-hidden", "true");
    resultModal.style.display = "none";
    guidesSection.style.display = "block";
    window.scrollTo({ top: guidesSection.offsetTop - 20, behavior: "smooth" });
  });

  // Render guides with delete button
  function renderGuides() {
    const arr = loadGuides();
    guidesGrid.innerHTML = "";
    if (!arr.length) {
      guidesSection.style.display = "none";
      return;
    }
    guidesSection.style.display = "block";

    arr.forEach((g) => {
      const card = document.createElement("article");
      card.className = "guide-card";
      card.innerHTML = `
        ${
          g.image ? `<img src="${g.image}" alt="${escapeHtml(g.title)}" />` : ""
        }
        <div class="top">
          <div style="flex:1">
            <div class="guide-title">${escapeHtml(g.title)}</div>
            <div class="guide-author small">by ${escapeHtml(
              g.author
            )} • ${escapeHtml(g.city)}</div>
          </div>
          <div class="guide-rating">${"★".repeat(g.rating)}${"☆".repeat(
        5 - g.rating
      )}</div>
        </div>
        <div class="guide-text small">${escapeHtml(g.text)}</div>
        <div class="guide-footer small">
          <div class="meta">Posted: ${new Date(
            g.createdAt
          ).toLocaleString()}</div>
          <button class="delete-btn" data-id="${g.id}">Delete</button>
        </div>
      `;
      guidesGrid.appendChild(card);
    });

    // Delete handler
    guidesGrid.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const arr = loadGuides().filter((g) => g.id !== id);
        saveGuides(arr);
        renderGuides();
      });
    });
  }

  function escapeHtml(s) {
    if (!s) return "";
    return s.replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[m])
    );
  }

  function resetForm() {
    tipCity.value = "";
    tipTitle.value = "";
    tipAuthor.value = "";
    tipText.value = "";
    tipImage.value = "";
    imgPreview.innerHTML = "";
    uploadedImageBase64 = "";
    selectedRating = 5;
    updateStarUI();
  }

  renderGuides();
})();

// User Stories modal
const userStoriesBtn = document.getElementById("userStoriesBtn");
const storiesModal = document.getElementById("storiesModal");
const closeStoriesModal = document.getElementById("closeStoriesModal");

userStoriesBtn.addEventListener("click", () => {
  storiesModal.style.display = "flex";
  storiesModal.setAttribute("aria-hidden", "false");
});

closeStoriesModal.addEventListener("click", () => {
  storiesModal.style.display = "none";
  storiesModal.setAttribute("aria-hidden", "true");
});

// Close modal if clicked outside
storiesModal.addEventListener("click", (e) => {
  if (e.target === storiesModal) {
    storiesModal.style.display = "none";
    storiesModal.setAttribute("aria-hidden", "true");
  }
});

// Close on Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    storiesModal.style.display = "none";
    storiesModal.setAttribute("aria-hidden", "true");
  }
});
