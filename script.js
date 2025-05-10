// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const header = document.querySelector("header")
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav")
  const languageSelector = document.querySelector(".language-selector")
  const selectedLanguage = document.querySelector(".selected-language")
  const featureCards = document.querySelectorAll(".feature-card")
  const testimonials = document.querySelectorAll(".testimonial")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const dots = document.querySelectorAll(".dot")
  const chatbotToggle = document.querySelector(".chatbot-toggle")
  const chatbotContainer = document.querySelector(".chatbot-container")
  const closeChat = document.querySelector(".close-chat")
  const chatInput = document.querySelector(".chatbot-input input")
  const chatSendBtn = document.querySelector(".chatbot-input button")
  const chatMessages = document.querySelector(".chatbot-messages")

  // Current testimonial index
  let currentTestimonial = 0

  // Language data for multilingual support
  const languageData = {
    en: {
      nav: ["Home", "Loan Types", "Eligibility Checker", "Chatbot", "About Us", "Contact"],
      hero: {
        title: "Your Smart Partner for Easy Loan Decisions",
        subtitle: "Get personalized loan recommendations and check your eligibility in minutes",
        cta: "Check Loan Eligibility",
      },
      features: {
        title: "Our Features",
        items: [
          {
            title: "AI-Powered Chatbot",
            description: "Get instant answers to your loan queries with our intelligent chatbot assistant",
          },
          {
            title: "Loan Comparison",
            description: "Compare different loan options side by side to find the best rates and terms",
          },
          {
            title: "Multilingual Support",
            description: "Access our services in multiple languages including English, Hindi, Tamil, and Telugu",
          },
          {
            title: "Secure Document Handling",
            description: "Your documents are encrypted and securely stored with bank-level security",
          },
        ],
      },
      testimonials: {
        title: "What Our Clients Say",
      },
      chatbot: {
        toggle: "Chat with us",
        header: "Nidhisaki Assistant",
        welcome: "👋 Hello! I'm your Nidhisaki loan assistant. How can I help you today?",
        placeholder: "Type your message here...",
      },
      footer: {
        about: {
          title: "About Nidhisaki",
          description:
            "Nidhisaki is your trusted partner for all loan-related decisions, providing personalized recommendations and eligibility checks.",
        },
        links: {
          title: "Quick Links",
        },
        contact: {
          title: "Contact Us",
          address: "123 Finance Street, Mumbai, India",
          phone: "+91 9876543210",
          email: "info@nidhisaki.com",
        },
        copyright: "© 2023 Nidhisaki. All rights reserved.",
      },
    },
    hi: {
      nav: ["होम", "लोन प्रकार", "पात्रता जांचक", "चैटबॉट", "हमारे बारे में", "संपर्क"],
      hero: {
        title: "आसान लोन निर्णयों के लिए आपका स्मार्ट पार्टनर",
        subtitle: "व्यक्तिगत लोन सिफारिशें प्राप्त करें और मिनटों में अपनी पात्रता की जांच करें",
        cta: "लोन पात्रता जांचें",
      },
      features: {
        title: "हमारी विशेषताएं",
        items: [
          {
            title: "AI-संचालित चैटबॉट",
            description: "हमारे बुद्धिमान चैटबॉट सहायक के साथ अपने लोन प्रश्नों के तुरंत उत्तर प्राप्त करें",
          },
          {
            title: "लोन तुलना",
            description: "सर्वोत्तम दरों और शर्तों को खोजने के लिए विभिन्न लोन विकल्पों की तुलना करें",
          },
          {
            title: "बहुभाषी समर्थन",
            description: "अंग्रेजी, हिंदी, तमिल और तेलुगु सहित कई भाषाओं में हमारी सेवाओं का उपयोग करें",
          },
          {
            title: "सुरक्षित दस्तावेज़ हैंडलिंग",
            description: "आपके दस्तावेज़ एन्क्रिप्टेड हैं और बैंक-स्तरीय सुरक्षा के साथ सुरक्षित रूप से संग्रहीत हैं",
          },
        ],
      },
      testimonials: {
        title: "हमारे ग्राहक क्या कहते हैं",
      },
      chatbot: {
        toggle: "हमसे चैट करें",
        header: "निधिसाकी सहायक",
        welcome: "👋 नमस्ते! मैं आपका निधिसाकी लोन सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
        placeholder: "अपना संदेश यहां टाइप करें...",
      },
      footer: {
        about: {
          title: "निधिसाकी के बारे में",
          description:
            "निधिसाकी सभी लोन-संबंधित निर्णयों के लिए आपका विश्वसनीय साथी है, जो व्यक्तिगत सिफारिशें और पात्रता जांच प्रदान करता है।",
        },
        links: {
          title: "त्वरित लिंक",
        },
        contact: {
          title: "संपर्क करें",
          address: "123 फाइनेंस स्ट्रीट, मुंबई, भारत",
          phone: "+91 9876543210",
          email: "info@nidhisaki.com",
        },
        copyright: "© 2023 निधिसाकी. सर्वाधिकार सुरक्षित।",
      },
    },
    ta: {
      nav: ["முகப்பு", "கடன் வகைகள்", "தகுதி சரிபார்ப்பு", "சாட்போட்", "எங்களைப் பற்றி", "தொடர்பு"],
      hero: {
        title: "எளிதான கடன் முடிவுகளுக்கான உங்கள் ஸ்மார்ட் பங்காளர்",
        subtitle: "தனிப்பயனாக்கப்பட்ட கடன் பரிந்துரைகளைப் பெறுங்கள் மற்றும் நிமிடங்களில் உங்கள் தகுதியை சரிபார்க்கவும்",
        cta: "கடன் தகுதியை சரிபார்க்கவும்",
      },
      features: {
        title: "எங்கள் அம்சங்கள்",
        items: [
          {
            title: "AI-இயக்கப்படும் சாட்போட்",
            description: "எங்கள் புத்திசாலித்தனமான சாட்போட் உதவியாளருடன் உங்கள் கடன் கேள்விகளுக்கு உடனடி பதில்களைப் பெறுங்கள்",
          },
          {
            title: "கடன் ஒப்பீடு",
            description: "சிறந்த விகிதங்கள் மற்றும் விதிமுறைகளைக் கண்டறிய பக்கத்தில் பல்வேறு கடன் விருப்பங்களை ஒப்பிடுங்கள்",
          },
          {
            title: "பல மொழி ஆதரவு",
            description: "ஆங்கிலம், இந்தி, தமிழ் மற்றும் தெலுங்கு உள்ளிட்ட பல மொழிகளில் எங்கள் சேவைகளை அணுகவும்",
          },
          {
            title: "பாதுகாப்பான ஆவண கையாளுதல்",
            description: "உங்கள் ஆவணங்கள் குறியாக்கப்பட்டு வங்கி-நிலை பாதுகாப்புடன் பாதுகாப்பாக சேமிக்கப்படுகின்றன",
          },
        ],
      },
      testimonials: {
        title: "எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்",
      },
      chatbot: {
        toggle: "எங்களுடன் அரட்டை",
        header: "நிதிசாகி உதவியாளர்",
        welcome: "👋 வணக்கம்! நான் உங்கள் நிதிசாகி கடன் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
        placeholder: "உங்கள் செய்தியை இங்கே தட்டச்சு செய்யவும்...",
      },
      footer: {
        about: {
          title: "நிதிசாகி பற்றி",
          description:
            "நிதிசாகி அனைத்து கடன் தொடர்பான முடிவுகளுக்கும் உங்கள் நம்பகமான பங்காளர், தனிப்பயனாக்கப்பட்ட பரிந்துரைகள் மற்றும் தகுதி சரிபார்ப்புகளை வழங்குகிறது.",
        },
        links: {
          title: "விரைவு இணைப்புகள்",
        },
        contact: {
          title: "தொடர்பு கொள்ளவும்",
          address: "123 ஃபைனான்ஸ் தெரு, மும்பை, இந்தியா",
          phone: "+91 9876543210",
          email: "info@nidhisaki.com",
        },
        copyright: "© 2023 நிதிசாகி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      },
    },
    te: {
      nav: ["హోమ్", "రుణ రకాలు", "అర్హత తనిఖీ", "చాట్‌బాట్", "మా గురించి", "సంప్రదించండి"],
      hero: {
        title: "సులభమైన రుణ నిర్ణయాలకు మీ స్మార్ట్ భాగస్వామి",
        subtitle: "వ్యక్తిగతీకరించిన రుణ సిఫార్సులను పొందండి మరియు నిమిషాల్లో మీ అర్హతను తనిఖీ చేయండి",
        cta: "రుణ అర్హతను తనిఖీ చేయండి",
      },
      features: {
        title: "మా ఫీచర్లు",
        items: [
          {
            title: "AI-ఆధారిత చాట్‌బాట్",
            description: "మా తెలివైన చాట్‌బాట్ సహాయకుడితో మీ రుణ ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి",
          },
          {
            title: "రుణ పోలిక",
            description: "ఉత్తమ రేట్లు మరియు నిబంధనలను కనుగొనడానికి వివిధ రుణ ఎంపికలను పక్కపక్కన పోల్చండి",
          },
          {
            title: "బహుభాషా మద్దతు",
            description: "ఇంగ్లీష్, హిందీ, తమిళం మరియు తెలుగు సహా అనేక భాషలలో మా సేవలను యాక్సెస్ చేయండి",
          },
          {
            title: "సురక్షిత పత్ర నిర్వహణ",
            description: "మీ పత్రాలు ఎన్‌క్రిప్ట్ చేయబడి బ్యాంకు-స్థాయి భద్రతతో సురక్షితంగా నిల్వ చేయబడతాయి",
          },
        ],
      },
      testimonials: {
        title: "మా క్లయింట్లు ఏమి చెబుతున్నారు",
      },
      chatbot: {
        toggle: "మాతో చాట్ చేయండి",
        header: "నిధిసాకి సహాయకుడు",
        welcome: "👋 హలో! నేను మీ నిధిసాకి రుణ సహాయకుడిని. నేను ఈరోజు మీకు ఎలా సహాయం చేయగలను?",
        placeholder: "మీ సందేశాన్ని ఇక్కడ టైప్ చేయండి...",
      },
      footer: {
        about: {
          title: "నిధిసాకి గురించి",
          description: "నిధిసాకి అన్ని రుణ-సంబంధిత నిర్ణయాలకు మీ విశ్వసనీయ భాగస్వామి, వ్యక్తిగతీకరించిన సిఫార్సులు మరియు అర్హత తనిఖీలను అందిస్తుంది.",
        },
        links: {
          title: "త్వరిత లింక్‌లు",
        },
        contact: {
          title: "మమ్మల్ని సంప్రదించండి",
          address: "123 ఫైనాన్స్ స్ట్రీట్, ముంబై, భారతదేశం",
          phone: "+91 9876543210",
          email: "info@nidhisaki.com",
        },
        copyright: "© 2023 నిధిసాకి. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
      },
    },
  }

  // Function to change language
  function changeLanguage(lang) {
    const data = languageData[lang]

    // Update current language display
    document.getElementById("current-language").textContent = document.querySelector(
      `.language-dropdown li[data-lang="${lang}"]`,
    ).textContent

    // Update navigation
    const navItems = document.querySelectorAll("nav ul li a")
    navItems.forEach((item, index) => {
      if (index < data.nav.length) {
        item.textContent = data.nav[index]
      }
    })

    // Update hero section
    document.querySelector(".hero h1").textContent = data.hero.title
    document.querySelector(".hero p").textContent = data.hero.subtitle
    document.querySelector(".cta-button").textContent = data.hero.cta

    // Update features section
    document.querySelector(".features .section-title").textContent = data.features.title
    const featureItems = document.querySelectorAll(".feature-card")
    featureItems.forEach((item, index) => {
      if (index < data.features.items.length) {
        item.querySelector("h3").textContent = data.features.items[index].title
        item.querySelector("p").textContent = data.features.items[index].description
      }
    })

    // Update testimonials section
    document.querySelector(".testimonials .section-title").textContent = data.testimonials.title

    // Update chatbot
    document.querySelector(".chatbot-toggle span").textContent = data.chatbot.toggle
    document.querySelector(".chatbot-header h3").textContent = data.chatbot.header
    document.querySelector(".chatbot-messages .message.bot p").textContent = data.chatbot.welcome
    document.querySelector(".chatbot-input input").placeholder = data.chatbot.placeholder

    // Update footer
    const footerSections = document.querySelectorAll(".footer-section")
    footerSections[0].querySelector("h3").textContent = data.footer.about.title
    footerSections[0].querySelector("p").textContent = data.footer.about.description

    footerSections[1].querySelector("h3").textContent = data.footer.links.title
    const footerLinks = footerSections[1].querySelectorAll("ul li a")
    footerLinks.forEach((link, index) => {
      if (index < data.nav.length) {
        link.textContent = data.nav[index]
      }
    })

    footerSections[2].querySelector("h3").textContent = data.footer.contact.title
    const contactInfo = footerSections[2].querySelectorAll("p")
    contactInfo[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${data.footer.contact.address}`
    contactInfo[1].innerHTML = `<i class="fas fa-phone"></i> ${data.footer.contact.phone}`
    contactInfo[2].innerHTML = `<i class="fas fa-envelope"></i> ${data.footer.contact.email}`

    document.querySelector(".footer-bottom p").textContent = data.footer.copyright
  }

  // Function to add a message to the chatbot
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("message")
    messageDiv.classList.add(isUser ? "user" : "bot")

    const messageP = document.createElement("p")
    messageP.textContent = message

    messageDiv.appendChild(messageP)
    chatMessages.appendChild(messageDiv)

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // Function to handle chatbot responses
  function handleChatbotResponse(message) {
    // Simple responses based on keywords
    const lowerMessage = message.toLowerCase()
    let response = "I'm sorry, I don't understand. Could you please rephrase your question?"

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      response = "Hello! How can I assist you with loans today?"
    } else if (lowerMessage.includes("loan type") || lowerMessage.includes("types of loan")) {
      response =
        "We offer various types of loans including Home Loans, Personal Loans, Business Loans, and Education Loans. Which one are you interested in?"
    } else if (lowerMessage.includes("home loan") || lowerMessage.includes("housing")) {
      response =
        "Our home loans offer competitive interest rates starting from 6.7% with loan tenure up to 30 years. Would you like to check your eligibility?"
    } else if (lowerMessage.includes("personal loan")) {
      response =
        "Personal loans are available from ₹50,000 to ₹25,00,000 with interest rates starting at 10.5%. No collateral required!"
    } else if (lowerMessage.includes("business loan")) {
      response =
        "Our business loans are designed to help your business grow. Loan amounts from ₹5,00,000 to ₹2 crore with flexible repayment options."
    } else if (lowerMessage.includes("education") || lowerMessage.includes("study")) {
      response =
        "Education loans cover tuition fees, living expenses, and study materials. Interest rates start at 7.5% with repayment beginning after course completion."
    } else if (lowerMessage.includes("eligibility") || lowerMessage.includes("qualify")) {
      response =
        "Eligibility depends on factors like income, credit score, and employment stability. Would you like to use our eligibility checker tool?"
    } else if (lowerMessage.includes("interest") || lowerMessage.includes("rate")) {
      response =
        "Our interest rates are competitive and vary based on loan type, amount, and your credit profile. Home loans start at 6.7%, personal loans at 10.5%, and business loans at 11%."
    } else if (lowerMessage.includes("document") || lowerMessage.includes("documents needed")) {
      response =
        "Required documents typically include ID proof, address proof, income proof, and bank statements. Specific requirements vary by loan type."
    } else if (lowerMessage.includes("thank")) {
      response = "You're welcome! Feel free to ask if you have any other questions about our loan services."
    } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
      response = "Thank you for chatting with us! Have a great day!"
    }

    // Add bot response after a short delay
    setTimeout(() => {
      addMessage(response)
    }, 500)
  }

  // Animate features on scroll
  const animateFeatures = () => {
    const featureCards = document.querySelectorAll(".feature-card")

    featureCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (cardTop < windowHeight - 100) {
        setTimeout(() => {
          card.classList.add("visible")
        }, index * 150)
      }
    })
  }

  // Initial check for features in viewport
  animateFeatures()

  // Check on scroll
  window.addEventListener("scroll", animateFeatures)

  // Add parallax effect to hero section
  const heroSection = document.querySelector(".hero")
  const heroContent = document.querySelector(".hero-content")
  const heroImage = document.querySelector(".hero-image")

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`
      }
    }
  })

  // Add animation to testimonial slider
  const animateTestimonialTransition = (index) => {
    testimonials.forEach((testimonial) => {
      testimonial.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      testimonial.classList.remove("active")
    })

    testimonials[index].classList.add("active")

    // Update dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
    dots[index].classList.add("active")

    // Update current index
    currentTestimonial = index
  }

  // Replace the showTestimonial function with this enhanced version
  function showTestimonial(index) {
    animateTestimonialTransition(index)
  }

  // Event Listeners

  // Scroll event for header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Menu toggle
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active")
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove("active")
    }

    if (!languageSelector.contains(e.target)) {
      languageSelector.classList.remove("active")
    }
  })

  // Language selector toggle
  selectedLanguage.addEventListener("click", (e) => {
    e.stopPropagation()
    languageSelector.classList.toggle("active")
  })

  // Language selection
  document.querySelectorAll(".language-dropdown li").forEach((item) => {
    item.addEventListener("click", () => {
      const lang = item.getAttribute("data-lang")

      // Update active class
      document.querySelectorAll(".language-dropdown li").forEach((li) => {
        li.classList.remove("active")
      })
      item.classList.add("active")

      // Change language
      changeLanguage(lang)

      // Close dropdown
      languageSelector.classList.remove("active")
    })
  })

  // Testimonial navigation
  prevBtn.addEventListener("click", () => {
    let index = currentTestimonial - 1
    if (index < 0) index = testimonials.length - 1
    showTestimonial(index)
  })

  nextBtn.addEventListener("click", () => {
    let index = currentTestimonial + 1
    if (index >= testimonials.length) index = 0
    showTestimonial(index)
  })

  // Testimonial dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index)
    })
  })

  // Auto-rotate testimonials
  setInterval(() => {
    let index = currentTestimonial + 1
    if (index >= testimonials.length) index = 0
    showTestimonial(index)
  }, 5000)

  // Chatbot toggle
  chatbotToggle.addEventListener("click", () => {
    chatbotContainer.classList.toggle("active")
  })

  // Close chat
  closeChat.addEventListener("click", () => {
    chatbotContainer.classList.remove("active")
  })

  // Send message
  function sendMessage() {
    const message = chatInput.value.trim()
    if (message) {
      addMessage(message, true)
      chatInput.value = ""
      handleChatbotResponse(message)
    }
  }

  chatSendBtn.addEventListener("click", sendMessage)

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      sendMessage()
    }
  })
})
