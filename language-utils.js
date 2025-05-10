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
      items: [
        {
          quote:
            "Nidhisaki helped me find the perfect home loan with the lowest interest rate. The process was smooth and hassle-free!",
          author: "Priya Sharma",
          role: "Home Loan Customer",
        },
        {
          quote:
            "The multilingual support was a game-changer for my parents who aren't comfortable with English. They could understand everything in Tamil!",
          author: "Karthik Rajan",
          role: "Personal Loan Customer",
        },
        {
          quote:
            "The AI chatbot answered all my questions instantly. I didn't have to wait for customer service to get back to me. Highly recommend!",
          author: "Amit Patel",
          role: "Business Loan Customer",
        },
      ],
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
    loanTypes: {
      title: "Loan Types",
      subtitle: "Explore our range of loan options tailored to your needs",
      filters: ["All Loans", "Personal", "Home", "Business", "Education", "Vehicle"],
      comparison: {
        title: "Loan Comparison Tool",
        description: "Compare different loan options side by side to find the best fit for your needs",
        loanAmount: "Loan Amount (₹)",
        loanTenure: "Loan Tenure (Years)",
        compareButton: "Compare Loans",
        tableHeaders: ["Loan Type", "Interest Rate", "Monthly EMI", "Total Interest", "Total Amount", "Action"],
        checkEligibility: "Check Eligibility",
      },
      cards: {
        personal: {
          title: "Personal Loan",
          description:
            "Get quick funds for your personal needs without any collateral. Ideal for medical emergencies, travel, wedding, or home renovation.",
          details: {
            interestRate: "Interest Rate",
            loanAmount: "Loan Amount",
            tenure: "Tenure",
            processingFee: "Processing Fee",
          },
          features: ["No collateral required", "Quick approval", "Minimal documentation"],
          buttons: {
            eligibility: "Check Eligibility",
            learnMore: "Learn More",
          },
        },
        home: {
          title: "Home Loan",
          description:
            "Realize your dream of owning a home with our competitive home loan options. Available for property purchase, construction, or renovation.",
          features: ["Attractive interest rates", "Long repayment tenure", "Tax benefits available"],
        },
        business: {
          title: "Business Loan",
          description:
            "Fuel your business growth with our flexible business loan options. Ideal for expansion, equipment purchase, or working capital needs.",
          features: ["Flexible repayment options", "Minimal collateral requirements", "Customized solutions"],
        },
        education: {
          title: "Education Loan",
          description:
            "Invest in your future with our education loans. Covers tuition fees, living expenses, books, and equipment for studies in India or abroad.",
          features: [
            "Moratorium period during study",
            "Tax benefits available",
            "Covers both domestic and international education",
          ],
        },
        vehicle: {
          title: "Vehicle Loan",
          description:
            "Drive home your dream vehicle with our affordable vehicle loans. Available for new and pre-owned cars, two-wheelers, and commercial vehicles.",
          features: ["Quick approval process", "Flexible repayment options", "Up to 100% financing available"],
        },
      },
    },
    eligibility: {
      title: "Loan Eligibility Checker",
      subtitle: "Find out if you qualify for a loan in just a few minutes",
      steps: ["Personal Info", "Financial Details", "Loan Requirements", "Results"],
      personalInfo: {
        title: "Personal Information",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        age: "Age",
      },
      financialDetails: {
        title: "Financial Details",
        income: "Monthly Income (₹)",
        employment: "Employment Type",
        employmentTypes: ["Select Employment Type", "Salaried", "Self-Employed", "Business Owner", "Retired", "Other"],
        experience: "Work Experience (Years)",
        creditScore: "Credit Score (if known)",
      },
      loanRequirements: {
        title: "Loan Requirements",
        loanType: "Loan Type",
        loanTypes: [
          "Select Loan Type",
          "Home Loan",
          "Personal Loan",
          "Business Loan",
          "Education Loan",
          "Vehicle Loan",
        ],
        loanAmount: "Loan Amount (₹)",
        loanTenure: "Loan Tenure (Years)",
        existingLoans: "Do you have any existing loans?",
        yes: "Yes",
        no: "No",
      },
      buttons: {
        next: "Next",
        previous: "Previous",
        checkEligibility: "Check Eligibility",
        startOver: "Start Over",
      },
      results: {
        analyzing: "Analyzing your information...",
        eligible: {
          title: "Congratulations! You are eligible for the",
          details: {
            eligibleAmount: "Eligible Loan Amount",
            interestRate: "Interest Rate",
            creditScore: "Credit Score",
          },
          message: "Our representative will contact you shortly to guide you through the application process.",
          buttons: {
            applyNow: "Apply Now",
            exploreLoanTypes: "Explore Loan Types",
          },
        },
        notEligible: {
          title: "We're sorry, you are not eligible for the",
          alternativeOptions: {
            title: "Alternative Options",
            options: [
              "Consider applying for a lower loan amount",
              "Improve your credit score before applying",
              "Explore other loan types that may better suit your profile",
            ],
          },
          buttons: {
            exploreLoanTypes: "Explore Other Loan Types",
            chatWithAdvisor: "Chat with an Advisor",
          },
        },
      },
    },
    chatbotPage: {
      title: "AI-Powered Loan Assistant",
      subtitle: "Get instant answers to all your loan-related questions",
      info: {
        title: "Meet Your Personal Loan Assistant",
        description:
          "Our AI-powered chatbot is designed to provide you with instant answers to all your loan-related queries. Whether you're looking for information about different loan types, eligibility criteria, or application processes, our chatbot is here to help.",
      },
      features: [
        {
          title: "Instant Responses",
          description: "Get immediate answers to your questions without waiting",
        },
        {
          title: "Multilingual Support",
          description: "Communicate in your preferred language",
        },
        {
          title: "Smart Recommendations",
          description: "Receive personalized loan suggestions based on your needs",
        },
        {
          title: "24/7 Availability",
          description: "Get assistance anytime, day or night",
        },
      ],
      interface: {
        title: "Nidhisaki Assistant",
        status: "Online",
        clearChat: "Clear Chat",
        welcome: "👋 Hello! I'm your Nidhisaki loan assistant. How can I help you today?",
        instructions:
          "You can ask me about loan types, eligibility criteria, interest rates, or application processes.",
        suggestedQuestions: [
          "What loan types do you offer?",
          "How do I check my eligibility?",
          "What are the current interest rates?",
          "How long does approval take?",
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What types of loans does Nidhisaki offer?",
            answer:
              "Nidhisaki offers a variety of loan types including Home Loans, Personal Loans, Business Loans, Education Loans, and Vehicle Loans. Each loan type has different eligibility criteria, interest rates, and repayment terms.",
          },
          {
            question: "How do I check my loan eligibility?",
            answer:
              "You can check your loan eligibility by using our Eligibility Checker tool. Simply provide your personal and financial details, and we'll instantly assess your eligibility for different loan types. Alternatively, you can ask our chatbot for a quick eligibility assessment.",
          },
          {
            question: "What documents are required for loan application?",
            answer:
              "The required documents typically include identity proof (Aadhaar, PAN card), address proof, income proof (salary slips, ITR), bank statements, and employment details. Specific requirements may vary based on the loan type and amount.",
          },
          {
            question: "How long does the loan approval process take?",
            answer:
              "The loan approval process typically takes 2-7 business days, depending on the loan type, amount, and verification process. Pre-approved loans may be processed faster, sometimes within 24 hours.",
          },
          {
            question: "Can I repay my loan before the tenure ends?",
            answer:
              "Yes, you can repay your loan before the tenure ends. However, some loans may have prepayment penalties or charges. It's advisable to check the prepayment terms before taking a loan.",
          },
        ],
      },
    },
  },
  hi: {
    nav: ["होम", "लोन प्रकार", "पात्रता जांचक", "चैटबॉट", "हमारे बारे में", "संपर्क"],
    hero: {
      title: "आसान ��ोन निर्णयों के लिए आपका स्मार्ट पार्टनर",
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
      items: [
        {
          quote: "निधिसाकी ने मुझे सबसे कम ब्याज दर के साथ सही होम लोन खोजने में मदद की। प्रक्रिया सरल और परेशानी मुक्त थी!",
          author: "प्रिया शर्मा",
          role: "होम लोन ग्राहक",
        },
        {
          quote: "बहुभाषी समर्थन मेरे माता-पिता के लिए गेम-चेंजर था जो अंग्रेजी से सहज नहीं हैं। वे तमिल में सब कुछ समझ सकते थे!",
          author: "कार्तिक राजन",
          role: "पर्सनल लोन ग्राहक",
        },
        {
          quote:
            "AI चैटबॉट ने मेरे सभी सवालों का तुरंत जवाब दिया। मुझे ग्राहक सेवा के वापस आने का इंतजार नहीं करना पड़ा। अत्यधिक अनुशंसित!",
          author: "अमित पटेल",
          role: "बिजनेस लोन ग्राहक",
        },
      ],
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
    loanTypes: {
      title: "लोन प्रकार",
      subtitle: "अपनी आवश्यकताओं के अनुरूप हमारे लोन विकल्पों की श्रेणी का अन्वेषण करें",
      filters: ["सभी लोन", "पर्सनल", "होम", "बिजनेस", "एजुकेशन", "वाहन"],
      comparison: {
        title: "लोन तुलना उपकरण",
        description: "अपनी जरूरतों के लिए सबसे अच्छा विकल्प खोजने के लिए विभिन्न लोन विकल्पों की तुलना करें",
        loanAmount: "लोन राशि (₹)",
        loanTenure: "लोन अवधि (वर्ष)",
        compareButton: "लोन की तुलना करें",
        tableHeaders: ["लोन प्रकार", "ब्याज दर", "मासिक ईएमआई", "कुल ब्याज", "कुल राशि", "कार्रवाई"],
        checkEligibility: "पात्रता जांचें",
      },
      cards: {
        personal: {
          title: "पर्सनल लोन",
          description:
            "बिना किसी संपार्श्विक के अपनी व्यक्तिगत जरूरतों के लिए त्वरित धन प्राप्त करें। चिकित्सा आपात स्थिति, यात्रा, शादी, या घर के नवीनीकरण के लिए आदर्श।",
          details: {
            interestRate: "ब्याज दर",
            loanAmount: "लोन राशि",
            tenure: "अवधि",
            processingFee: "प्रोसेसिंग शुल्क",
          },
          features: ["कोई संपार्श्विक आवश्यक नहीं", "त्वरित अनुमोदन", "न्यूनतम दस्तावेज़ीकरण"],
          buttons: {
            eligibility: "पात्रता जांचें",
            learnMore: "अधिक जानें",
          },
        },
        home: {
          title: "होम लोन",
          description:
            "हमारे प्रतिस्पर्धी होम लोन विकल्पों के साथ अपने घर के मालिक होने का सपना पूरा करें। संपत्ति खरीद, निर्माण, या नवीनीकरण के लिए उपलब्ध।",
          features: ["आकर्षक ब्याज दरें", "लंबी चुकौती अवधि", "कर लाभ उपलब्ध"],
        },
        business: {
          title: "बिजनेस लोन",
          description:
            "हमारे लचीले बिजनेस लोन विकल्पों के साथ अपने व्यवसाय की वृद्धि को बढ़ावा दें। विस्तार, उपकरण खरीद, या कार्यशील पूंजी की जरूरतों के लिए आदर्श।",
          features: ["लचीले पुनर्भुगतान विकल्प", "न्यूनतम संपार्श्विक आवश्यकताएं", "अनुकूलित समाधान"],
        },
        education: {
          title: "एजुकेशन लोन",
          description:
            "हमारे एजुकेशन लोन के साथ अपने भविष्य में निवेश करें। ट्यूशन फीस, रहने का खर्च, किताबें, और भारत या विदेश में अध्ययन के लिए उपकरण कवर करता है।",
          features: ["अध्ययन के दौरान अधिस्थगन अवधि", "कर लाभ उपलब्ध", "घरेलू और अंतरराष्ट्रीय शिक्षा दोनों को कवर करता है"],
        },
        vehicle: {
          title: "वाहन लोन",
          description:
            "हमारे किफायती वाहन लोन के साथ अपने सपनों का वाहन घर लाएं। नए और पूर्व-स्वामित्व वाले कारों, दोपहिया वाहनों, और वाणिज्यिक वाहनों के लिए उपलब्ध।",
          features: ["त्वरित अनुमोदन प्रक्रिया", "लचीले पुनर्भुगतान विकल्प", "100% तक वित्तपोषण उपलब्ध"],
        },
      },
    },
    eligibility: {
      title: "लोन पात्रता जांचक",
      subtitle: "कुछ ही मिनटों में जानें कि क्या आप लोन के लिए योग्य हैं",
      steps: ["व्यक्तिगत जानकारी", "वित्तीय विवरण", "लोन आवश्यकताएं", "परिणाम"],
      personalInfo: {
        title: "व्यक्तिगत जानकारी",
        fullName: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        age: "उम्र",
      },
      financialDetails: {
        title: "वित्तीय विवरण",
        income: "मासिक आय (₹)",
        employment: "रोजगार प्रकार",
        employmentTypes: ["रोजगार प्रकार चुनें", "वेतनभोगी", "स्व-नियोजित", "व्यापार मालिक", "सेवानिवृत्त", "अन्य"],
        experience: "कार्य अनुभव (वर्ष)",
        creditScore: "क्रेडिट स्कोर (यदि ज्ञात हो)",
      },
      loanRequirements: {
        title: "लोन आवश्यकताएं",
        loanType: "लोन प्रकार",
        loanTypes: ["लोन प्रकार चुनें", "होम लोन", "पर्सनल लोन", "बिजनेस लोन", "एजुकेशन लोन", "वाहन लोन"],
        loanAmount: "लोन राशि (₹)",
        loanTenure: "लोन अवधि (वर्ष)",
        existingLoans: "क्या आपके पास कोई मौजूदा लोन है?",
        yes: "हां",
        no: "नहीं",
      },
      buttons: {
        next: "अगला",
        previous: "पिछला",
        checkEligibility: "पात्रता जांचें",
        startOver: "फिर से शुरू करें",
      },
      results: {
        analyzing: "आपकी जानकारी का विश्लेषण किया जा रहा है...",
        eligible: {
          title: "बधाई हो! आप इसके लिए पात्र हैं",
          details: {
            eligibleAmount: "पात्र लोन राशि",
            interestRate: "ब्याज दर",
            creditScore: "क्रेडिट स्कोर",
          },
          message: "हमारा प्रतिनिधि आपको आवेदन प्रक्रिया के माध्यम से मार्गदर्शन करने के लिए शीघ्र ही संपर्क करेगा।",
          buttons: {
            applyNow: "अभी आवेदन करें",
            exploreLoanTypes: "लोन प्रकार का अन्वेषण करें",
          },
        },
        notEligible: {
          title: "हमें खेद है, आप इस समय इसके लिए पात्र नहीं हैं",
          alternativeOptions: {
            title: "वैकल्पिक विकल्प",
            options: [
              "कम लोन राशि के लिए आवेदन करने पर विचार करें",
              "आवेदन करने से पहले अपने क्रेडिट स्कोर में सुधार करें",
              "अन्य लोन प्रकारों का अन्वेषण करें जो आपकी प्रोफ़ाइल के लिए बेहतर हो सकते हैं",
            ],
          },
          buttons: {
            exploreLoanTypes: "अन्य लोन प्रकारों का अन्वेषण करें",
            chatWithAdvisor: "सलाहकार से चैट करें",
          },
        },
      },
    },
    chatbotPage: {
      title: "AI-संचालित लोन सहायक",
      subtitle: "अपने सभी लोन-संबंधित प्रश्नों के तुरंत उत्तर प्राप्त करें",
      info: {
        title: "अपने व्यक्तिगत लोन सहायक से मिलें",
        description:
          "हमारा AI-संचालित चैटबॉट आपको आपके सभी लोन-संबंधित प्रश्नों के तुरंत उत्तर प्रदान करने के लिए डिज़ाइन किया गया है। चाहे आप विभिन्न लोन प्रकारों, पात्रता मानदंड, या आवेदन प्रक्रियाओं के बारे में जानकारी चाहते हों, हमारा चैटबॉट आपकी मदद के लिए यहां है।",
      },
      features: [
        {
          title: "तत्काल प्रतिक्रियाएं",
          description: "प्रतीक्षा किए बिना अपने प्रश्नों के तुरंत उत्तर प्राप्त करें",
        },
        {
          title: "बहुभाषी समर्थन",
          description: "अपनी पसंदीदा भाषा में संवाद करें",
        },
        {
          title: "स्मार्ट अनुशंसाएं",
          description: "अपनी आवश्यकताओं के आधार पर व्यक्तिगत लोन सुझाव प्राप्त करें",
        },
        {
          title: "24/7 उपलब्धता",
          description: "दिन या रात किसी भी समय सहायता प्राप्त करें",
        },
      ],
      interface: {
        title: "निधिसाकी सहायक",
        status: "ऑनलाइन",
        clearChat: "चैट साफ़ करें",
        welcome: "👋 नमस्ते! मैं आपका निधिसाकी लोन सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
        instructions: "आप मुझसे लोन प्रकारों, पात्रता मानदंड, ब्याज दरों, या आवेदन प्रक्रियाओं के बारे में पूछ सकते हैं।",
        suggestedQuestions: [
          "आप कौन से लोन प्रकार प्रदान करते हैं?",
          "मैं अपनी पात्रता कैसे जांचूं?",
          "वर्तमान ब्याज दरें क्या हैं?",
          "अनुमोदन में कितना समय लगता है?",
        ],
      },
      faq: {
        title: "अक्सर पूछे जाने वाले प्रश्न",
        items: [
          {
            question: "निधिसाकी किस प्रकार के लोन प्रदान करता है?",
            answer:
              "निधिसाकी विभिन्न प्रकार के लोन प्रदान करता है जिनमें होम लोन, पर्सनल लोन, बिजनेस लोन, एजुकेशन लोन, और वाहन लोन शामिल हैं। प्रत्येक लोन प्रकार की अलग-अलग पात्रता मानदंड, ब्याज दरें, और पुनर्भुगतान शर्तें हैं।",
          },
          {
            question: "मैं अपनी लोन पात्रता कैसे जांचूं?",
            answer:
              "आप हमारे पात्रता जांचक उपकरण का उपयोग करके अपनी लोन पात्रता जांच सकते हैं। बस अपनी व्यक्तिगत और वित्तीय जानकारी प्रदान करें, और हम तुरंत विभिन्न लोन प्रकारों के लिए आपकी पात्रता का आकलन करेंगे। वैकल्पिक रूप से, आप त्वरित पात्रता आकलन के लिए हमारे चैटबॉट से पूछ सकते हैं।",
          },
          {
            question: "लोन आवेदन के लिए किन दस्तावेजों की आवश्यकता होती है?",
            answer:
              "आवश्यक दस्तावेजों में आमतौर पर पहचान प्रमाण (आधार, पैन कार्ड), पता प्रमाण, आय प्रमाण (वेतन पर्ची, आईटीआर), बैंक स्टेटमेंट, और रोजगार विवरण शामिल हैं। विशिष्ट आवश्यकताएं लोन प्रकार और राशि के आधार पर भिन्न हो सकती हैं।",
          },
          {
            question: "लोन अनुमोदन प्रक्रिया में कितना समय लगता है?",
            answer:
              "लोन अनुमोदन प्रक्रिया में आमतौर पर 2-7 कार्य दिवस लगते हैं, जो लोन प्रकार, राशि, और सत्यापन प्रक्रिया पर निर्भर करता है। पूर्व-अनुमोदित लोन तेजी से प्रोसेस किए जा सकते हैं, कभी-कभी 24 घंटे के भीतर।",
          },
          {
            question: "क्या मैं अवधि समाप्त होने से पहले अपना लोन चुका सकता हूं?",
            answer:
              "हां, आप अवधि समाप्त होने से पहले अपना लोन चुका सकते हैं। हालांकि, कुछ लोन में पूर्व भुगतान दंड या शुल्क हो सकते हैं। लोन लेने से पहले पूर्व भुगतान शर्तों की जांच करना सलाह दी जाती है।",
          },
        ],
      },
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
      items: [
        {
          quote:
            "நிதிசாகி குறைந்த வட்டி விகிதத்துடன் சரியான வீட்டுக் கடனைக் கண்டுபிடிக்க எனக்கு உதவியது. செயல்முறை சுமூகமாகவும் தொந்தரவு இல்லாமலும் இருந்தது!",
          author: "பிரியா சர்மா",
          role: "வீட்டுக் கடன் வாடிக்கையாளர்",
        },
        {
          quote:
            "பல மொழி ஆதரவு ஆங்கிலத்தில் வசதியாக இல்லாத என் பெற்றோருக்கு ஒரு கேம்-சேஞ்சர் ஆக இருந்தது. அவர்கள் தமிழில் எல்லாவற்றையும் புரிந்து கொள்ள முடிந்தது!",
          author: "கார்த்திக் ராஜன்",
          role: "தனிப்பட்ட கடன் வாடிக்கையாளர்",
        },
        {
          quote:
            "AI சாட்போட் என் அனைத்து கேள்விகளுக்கும் உடனடியாக பதிலளித்தது. வாடிக்கையாளர் சேவை திரும்ப வருவதற்காக நான் காத்திருக்க வேண்டியதில்லை. மிகவும் பரிந்துரைக்கிறேன்!",
          author: "அமித் பட்டேல்",
          role: "வணிக கடன் வாடிக்கையாளர்",
        },
      ],
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
    loanTypes: {
      title: "கடன் வகைகள்",
      subtitle: "உங்கள் தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட எங்கள் கடன் விருப்பங்களை ஆராயுங்கள்",
      filters: ["அனைத்து கடன்கள்", "தனிப்பட்ட", "வீடு", "வணிகம்", "கல்வி", "வாகனம்"],
      comparison: {
        title: "கடன் ஒப்பீட்டு கருவி",
        description: "உங்கள் தேவைகளுக்கு சிறந்த பொருத்தத்தைக் கண்டறிய பக்கத்தில் பல்வேறு கடன் விருப்பங்களை ஒப்பிடுங்கள்",
        loanAmount: "கடன் தொகை (₹)",
        loanTenure: "கடன் காலம் (ஆண்டுகள்)",
        compareButton: "கடன்களை ஒப்பிடுங்கள்",
        tableHeaders: ["கடன் வகை", "வட்டி விகிதம்", "மாதாந்திர EMI", "மொத்த வட்டி", "மொத்த தொகை", "செயல்"],
        checkEligibility: "தகுதியை சரிபார்க்கவும்",
      },
      cards: {
        personal: {
          title: "தனிப்பட்ட கடன்",
          description:
            "எந்த பிணையமும் இல்லாமல் உங்கள் தனிப்பட்ட தேவைகளுக்கு விரைவான நிதியைப் பெறுங்கள். மருத்துவ அவசரநிலைகள், பயணம், திருமணம் அல்லது வீட்டு புதுப்பித்தலுக்கு ஏற்றது.",
          details: {
            interestRate: "வட்டி விகிதம்",
            loanAmount: "கடன் தொகை",
            tenure: "காலம்",
            processingFee: "செயலாக்க கட்டணம்",
          },
          features: ["பிணையம் தேவையில்லை", "விரைவான ஒப்புதல்", "குறைந்தபட்ச ஆவணப்படுத்தல்"],
          buttons: {
            eligibility: "தகுதியை சரிபார்க்கவும்",
            learnMore: "மேலும் அறிக",
          },
        },
        home: {
          title: "வீட்டுக் கடன்",
          description:
            "எங்கள் போட்டி வீட்டுக் கடன் விருப்பங்களுடன் உங்கள் சொந்த வீட்டை வைத்திருக்கும் கனவை நனவாக்குங்கள். சொத்து வாங்குதல், கட்டுமானம் அல்லது புதுப்பித்தலுக்கு கிடைக்கிறது.",
          features: ["கவர்ச்சிகரமான வட்டி விகிதங்கள்", "நீண்ட திருப்பிச் செலுத்தும் காலம்", "வரி சலுகைகள் உள்ளன"],
        },
        business: {
          title: "வணிக கடன்",
          description:
            "எங்கள் நெகிழ்வான வணிக கடன் விருப்பங்களுடன் உங்கள் வணிக வளர்ச்சிக்கு உதவுங்கள். விரிவாக்கம், உபகரணங்கள் வாங்குதல் அல்லது செயல்பாட்டு மூலதன தேவைகளுக்கு ஏற்றது.",
          features: ["நெகிழ்வான திருப்பிச் செலுத்தும் விருப்பங்கள்", "குறைந்தபட்ச பிணைய தேவைகள்", "தனிப்பயனாக்கப்பட்ட தீர்வுகள்"],
        },
        education: {
          title: "கல்விக் கடன்",
          description:
            "எங்கள் கல்விக் கடன்களுடன் உங்கள் எதிர்காலத்தில் முதலீடு செய்���ுங்கள். கல்விக் கட்டணம், வாழ்க்கைச் செலவுகள், புத்தகங்கள் மற்றும் இந்தியா அல்லது வெளிநாட்டில் படிப்பதற்கான உபகரணங்களை உள்ளடக்கியது.",
          features: ["படிப்பின் போது தள்ளுபடி காலம்", "வரி சலுகைகள் உள்ளன", "உள்நாட்டு மற்றும் சர்வதேச கல்வி இரண்டையும் உள்ளடக்கியது"],
        },
        vehicle: {
          title: "வாகனக் கடன்",
          description:
            "எங்கள் மலிவு விலை வாகனக் கடன்களுடன் உங்கள் கனவு வாகனத்தை வீட்டிற்கு கொண்டு வாருங்கள். புதிய மற்றும் முன்னதாக சொந்தமான கார்கள், இருசக்கர வாகனங்கள் மற்றும் வணிக வாகனங்களுக்கு கிடைக்கிறது.",
          features: ["விரைவான ஒப்புதல் செயல்முறை", "நெகிழ்வான திருப்பிச் செலுத்தும் விருப்பங்கள்", "100% வரை நிதியுதவி கிடைக்கிறது"],
        },
      },
    },
    eligibility: {
      title: "கடன் தகுதி சரிபார்ப்பு",
      subtitle: "சில நிமிடங்களில் நீங்கள் கடனுக்கு தகுதி பெறுகிறீர்களா என்பதைக் கண்டறியுங்கள்",
      steps: ["தனிப்பட்ட தகவல்", "நிதி விவரங்கள்", "கடன் தேவைகள்", "முடிவுகள்"],
      personalInfo: {
        title: "தனிப்பட்ட தகவல்",
        fullName: "முழு பெயர்",
        email: "மின்னஞ்சல் முகவரி",
        phone: "தொலைபேசி எண்",
        age: "வயது",
      },
      financialDetails: {
        title: "நிதி விவரங்கள்",
        income: "மாதாந்திர வருமானம் (₹)",
        employment: "வேலைவாய்ப்பு வகை",
        employmentTypes: [
          "வேலைவாய்ப்பு வகையைத் தேர்ந்தெடுக்கவும்",
          "சம்பளம்",
          "சுய தொழில்",
          "வணிக உரிமையாளர்",
          "ஓய்வு பெற்றவர்",
          "மற்றவை",
        ],
        experience: "பணி அனுபவம் (ஆண்டுகள்)",
        creditScore: "கடன் மதிப்பெண் (தெரிந்திருந்தால்)",
      },
      loanRequirements: {
        title: "கடன் தேவைகள்",
        loanType: "கடன் வகை",
        loanTypes: ["கடன் வகையைத் தேர்ந்தெடுக்கவும்", "வீட்டுக் கடன்", "தனிப்பட்ட கடன்", "வணிக கடன்", "கல்விக் கடன்", "வாகனக் கடன்"],
        loanAmount: "கடன் தொகை (₹)",
        loanTenure: "கடன் காலம் (ஆண்டுகள்)",
        existingLoans: "உங்களிடம் ஏதேனும் தற்போதைய கடன்கள் உள்ளதா?",
        yes: "ஆம்",
        no: "இல்லை",
      },
      buttons: {
        next: "அடுத்து",
        previous: "முந்தைய",
        checkEligibility: "தகுதியை சரிபார்க்கவும்",
        startOver: "மீண்டும் தொடங்கு",
      },
      results: {
        analyzing: "உங்கள் தகவலை ஆராய்கிறது...",
        eligible: {
          title: "வாழ்த்துக்கள்! நீங்கள் இதற்கு தகுதி பெற்றுள்ளீர்கள்",
          details: {
            eligibleAmount: "தகுதியான கடன் தொகை",
            interestRate: "வட்டி விகிதம்",
            creditScore: "கடன் மதிப்பெண்",
          },
          message: "எங்கள் பிரதிநிதி விண்ணப்ப செயல்முறை மூலம் உங்களை வழிநடத்த விரைவில் தொடர்பு கொள்வார்.",
          buttons: {
            applyNow: "இப்போது விண்ணப்பிக்கவும்",
            exploreLoanTypes: "கடன் வகைகளை ஆராயுங்கள்",
          },
        },
        notEligible: {
          title: "மன்னிக்கவும், நீங்கள் தற்போது இதற்கு தகுதி பெறவில்லை",
          alternativeOptions: {
            title: "மாற்று விருப்பங்கள்",
            options: [
              "குறைந்த கடன் தொகைக்கு விண்ணப்பிப்பதை பரிசீலிக்கவும்",
              "விண்ணப்பிப்பதற்கு முன் உங்கள் கடன் மதிப்பெண்ணை மேம்படுத்தவும்",
              "உங்கள் சுயவிவரத்திற்கு சிறப்பாகப் பொருந்தக்கூடிய பிற கடன் வகைகளை ஆராயுங்கள்",
            ],
          },
          buttons: {
            exploreLoanTypes: "பிற கடன் வகைகளை ஆராயுங்கள்",
            chatWithAdvisor: "ஆலோசகருடன் அரட்டை",
          },
        },
      },
    },
    chatbotPage: {
      title: "AI-இயக்கப்படும் கடன் உதவியாளர்",
      subtitle: "உங்கள் அனைத்து கடன் தொடர்பான கேள்விகளுக்கும் உடனடி பதில்களைப் பெறுங்கள்",
      info: {
        title: "உங்கள் தனிப்பட்ட கடன் உதவியாளரை சந்திக்கவும்",
        description:
          "எங்கள் AI-இயக்கப்படும் சாட்போட் உங்கள் அனைத்து கடன் தொடர்பான கேள்விகளுக்கும் உடனடி பதில்களை வழங்க வடிவமைக்கப்பட்டுள்ளது. வெவ்வேறு கடன் வகைகள், தகுதி அளவுகோல்கள் அல்லது விண்ணப்ப செயல்முறைகள் பற்றிய தகவல்களைத் தேடுகிறீர்களா, எங்கள் சாட்போட் உங்களுக்கு உதவ இங்கே உள்ளது.",
      },
      features: [
        {
          title: "உடனடி பதில்கள்",
          description: "காத்திருக்காமல் உங்கள் கேள்விகளுக்கு உடனடி பதில்களைப் பெறுங்கள்",
        },
        {
          title: "பல மொழி ஆதரவு",
          description: "உங்கள் விருப்பமான மொழியில் தொடர்பு கொள்ளுங்கள்",
        },
        {
          title: "ஸ்மார்ட் பரிந்துரைகள்",
          description: "உங்கள் தேவைகளின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட கடன் பரிந்துரைகளைப் பெறுங்கள்",
        },
        {
          title: "24/7 கிடைக்கும் தன்மை",
          description: "பகல் அல்லது இரவு எந்த நேரத்திலும் உதவி பெறுங்கள்",
        },
      ],
      interface: {
        title: "நிதிசாகி உதவியாளர்",
        status: "ஆன்லைனில்",
        clearChat: "அரட்டையை அழிக்கவும்",
        welcome: "👋 வணக்கம்! நான் உங்கள் நிதிசாகி கடன் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
        instructions: "நீங்கள் கடன் வகைகள், தகுதி அளவுகோல்கள், வட்டி விகிதங்கள் அல்லது விண்ணப்ப செயல்முறைகள் பற்றி என்னிடம் கேட்கலாம்.",
        suggestedQuestions: [
          "நீங்கள் எந்த கடன் வகைகளை வழங்குகிறீர்கள்?",
          "நான் எனது தகுதியை எவ்வாறு சரிபார்ப்பது?",
          "தற்போதைய வட்டி விகிதங்கள் என்ன?",
          "ஒப்புதல் பெற எவ்வளவு நேரம் ஆகும்?",
        ],
      },
      faq: {
        title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        items: [
          {
            question: "நிதிசாகி எந்த வகையான கடன்களை வழங்குகிறது?",
            answer:
              "நிதிசாகி வீட்டுக் கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், கல்விக் கடன்கள் மற்றும் வாகனக் கடன்கள் உள்ளிட்ட பல்வேறு வகையான கடன்களை வழங்குகிறது. ஒவ்வொரு கடன் வகைக்கும் வெவ்வேறு தகுதி அளவுகோல்கள், வட்டி விகிதங்கள் மற்றும் திருப்பிச் செலுத்தும் விதிமுறைகள் உள்ளன.",
          },
          {
            question: "நான் எனது கடன் தகுதியை எவ்வாறு சரிபார்ப்பது?",
            answer:
              "எங்கள் தகுதி சரிபார்ப்பு கருவியைப் பயன்படுத்தி உங்கள் கடன் தகுதியை சரிபார்க்கலாம். உங்கள் தனிப்பட்ட மற்றும் நிதி விவரங்களை வழங்கவும், நாங்கள் உடனடியாக வெவ்வேறு கடன் வகைகளுக்கான உங்கள் தகுதியை மதிப்பீடு செய்வோம். மாற்றாக, விரைவான தகுதி மதிப்பீட்டிற்கு எங்கள் சாட்போட்டிடம் கேட்கலாம்.",
          },
          {
            question: "கடன் விண்ணப்பத்திற்கு என்ன ஆவணங்கள் தேவை?",
            answer:
              "தேவையான ஆவணங்களில் பொதுவாக அடையாள சான்று (ஆதார், பான் கார்டு), முகவரி சான்று, வருமான சான்று (சம்பள சீட்டுகள், ITR), வங்கி அறிக்கைகள் மற்றும் வேலைவாய்ப்பு விவரங்கள் ஆகியவை அடங்கும். குறிப்பிட்ட தேவைகள் கடன் வகை மற்றும் தொகையின் அடிப்படையில் மாறுபடலாம்.",
          },
          {
            question: "கடன் ஒப்புதல் செயல்முறை எவ்வளவு நேரம் எடுக்கும்?",
            answer:
              "கடன் ஒப்புதல் செயல்முறை பொதுவாக 2-7 வேலை நாட்கள் எடுக்கும், இது கடன் வகை, தொகை மற்றும் சரிபார்ப்பு செயல்முறையைப் பொறுத்தது. முன் அங்கீகரிக்கப்பட்ட கடன்கள் வேகமாக செயலாக்கப்படலாம், சில நேரங்களில் 24 மணி நேரத்திற்குள்.",
          },
          {
            question: "காலம் முடிவடைவதற்கு முன் நான் என் கடனை திருப்பிச் செலுத்த முடியுமா?",
            answer:
              "ஆம், காலம் முடிவடைவதற்கு முன் நீங்கள் உங்கள் கடனைத் திருப்பிச் செலுத்தலாம். இருப்பினும், சில கடன்களில் முன்கூட்டியே செலுத்துவதற்கான அபராதங்கள் அல்லது கட்டணங்கள் இருக்கலாம். கடன் எடுப்பதற்கு முன் முன்கூட்டியே செலுத்தும் விதிமுறைகளைச் சரிபார்க்க அறிவுறுத்தப்படுகிறது.",
          },
        ],
      },
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
      items: [
        {
          quote: "నిధిసాకి అత్యల్ప వడ్డీ రేటుతో సరైన హోమ్ లోన్ కనుగొనడానికి నాకు సహాయం చేసింది. ప్రక్రియ సజావుగా మరియు ఇబ్బంది లేకుండా ఉంది!",
          author: "ప్రియా శర్మ",
          role: "హోమ్ లోన్ కస్టమర్",
        },
        {
          quote: "బహుభాషా మద్దతు ఇంగ్లీష్‌తో సౌకర్యవంతంగా లేని నా తల్లిదండ్రులకు గేమ్-ఛేంజర్ అయింది. వారు తమిళంలో అన్నింటినీ అర్థం చేసుకోగలిగారు!",
          author: "కార్తిక్ రాజన్",
          role: "వ్యక్తిగత రుణ కస్టమర్",
        },
        {
          quote:
            "AI చాట్‌బాట్ నా అన్ని ప్రశ్నలకు వెంటనే సమాధానం ఇచ్చింది. కస్టమర్ సర్వీస్ తిరిగి రావడానికి నేను వేచి ఉండాల్సిన అవసరం లేదు. అత్యధికంగా సిఫార్సు చేస్తున్నాను!",
          author: "అమిత్ పటేల్",
          role: "బిజినెస్ లోన్ కస్టమర్",
        },
      ],
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
    loanTypes: {
      title: "రుణ రకాలు",
      subtitle: "మీ అవసరాలకు అనుగుణంగా మా రుణ ఎంపికల శ్రేణిని అన్వేషించండి",
      filters: ["అన్ని రుణాలు", "వ్యక్తిగత", "హోమ్", "బిజినెస్", "విద్య", "వాహనం"],
      comparison: {
        title: "రుణ పోలిక సాధనం",
        description: "మీ అవసరాలకు సరైన సరిపోలికను కనుగొనడానికి వివిధ రుణ ఎంపికలను పక్కపక్కన పోల్చండి",
        loanAmount: "రుణ మొత్తం (₹)",
        loanTenure: "రుణ కాలవ్యవధి (సంవత్సరాలు)",
        compareButton: "రుణాలను పోల్చండి",
        tableHeaders: ["రుణ రకం", "వడ్డీ రేటు", "నెలవారీ EMI", "మొత్తం వడ్డీ", "మొత్తం మొత్తం", "చర్య"],
        checkEligibility: "అర్హతను తనిఖీ చేయండి",
      },
      cards: {
        personal: {
          title: "వ్యక్తిగత రుణం",
          description:
            "ఎలాంటి తనఖా లేకుండా మీ వ్యక్తిగత అవసరాలకు త్వరిత నిధులను పొందండి. వైద్య అత్యవసర పరిస్థితులు, ప్రయాణం, వివాహం లేదా ఇంటి నవీకరణకు ఆదర్శం.",
          details: {
            interestRate: "వడ్డీ రేటు",
            loanAmount: "రుణ మొత్తం",
            tenure: "కాలవ్యవధి",
            processingFee: "ప్రాసెసింగ్ ఫీజు",
          },
          features: ["తనఖా అవసరం లేదు", "త్వరిత ఆమోదం", "కనిష్ట పత్రాలు"],
          buttons: {
            eligibility: "అర్హతను తనిఖీ చేయండి",
            learnMore: "మరింత తెలుసుకోండి",
          },
        },
        home: {
          title: "హోమ్ లోన్",
          description:
            "మా పోటీ హోమ్ లోన్ ఎంపికలతో మీ స్వంత ఇంటిని కలిగి ఉండే కలను సాకారం చేసుకోండి. ఆస్తి కొనుగోలు, నిర్మాణం లేదా నవీకరణకు అందుబాటులో ఉంది.",
          features: ["ఆకర్షణీయమైన వడ్డీ రేట్లు", "దీర్ఘకాలిక తిరిగి చెల్లింపు కాలవ్యవధి", "పన్ను ప్రయోజనాలు అందుబాటులో ఉన్నాయి"],
        },
        business: {
          title: "బిజినెస్ లోన్",
          description:
            "మా సౌలభ్యమైన బిజినెస్ లోన్ ఎంపికలతో మీ వ్యాపార వృద్ధికి ఊతమివ్వండి. విస్తరణ, పరికరాల కొనుగోలు లేదా నిర్వహణ మూలధన అవసరాలకు ఆదర్శం.",
          features: ["సౌలభ్యమైన తిరిగి చెల్లింపు ఎంపికలు", "కనిష్ట తనఖా అవసరాలు", "అనుకూలీకరించిన పరిష్కారాలు"],
        },
        education: {
          title: "విద్యా రుణం",
          description:
            "మా విద్యా రుణాలతో మీ భవిష్యత్తులో పెట్టుబడి పెట్టండి. ట్యూషన్ ఫీజులు, జీవన ఖర్చులు, పుస్తకాలు మరియు భారతదేశంలో లేదా విదేశాల్లో చదువుల కోసం పరికరాలను కవర్ చేస్తుంది.",
          features: ["చదువు సమయంలో మరటోరియం కాలం", "పన్ను ప్రయోజనాలు అందుబాటులో ఉన్నాయి", "దేశీయ మరియు అంతర్జాతీయ విద్య రెండింటినీ కవర్ చేస్తుంది"],
        },
        vehicle: {
          title: "వాహన రుణం",
          description:
            "మా సరసమైన వాహన రుణాలతో మీ కల వాహనాన్ని ఇంటికి తీసుకురండి. కొత్త మరియు ముందుగా కలిగి ఉన్న కార్లు, ద్విచక్ర వాహనాలు మరియు వాణిజ్య వాహనాలకు అందుబాటులో ఉంది.",
          features: ["త్వరిత ఆమోద ప్రక్రియ", "సౌలభ్యమైన తిరిగి చెల్లింపు ఎంపికలు", "100% వరకు ఫైనాన్సింగ్ అందుబాటులో ఉంది"],
        },
      },
    },
    eligibility: {
      title: "రుణ అర్హత తనిఖీ",
      subtitle: "కొన్ని నిమిషాల్లో మీరు రుణానికి అర్హత సాధించారో లేదో తెలుసుకోండి",
      steps: ["వ్యక్తిగత సమాచారం", "ఆర్థిక వివరాలు", "రుణ అవసరాలు", "ఫలితాలు"],
      personalInfo: {
        title: "వ్యక్తిగత సమాచారం",
        fullName: "పూర్తి పేరు",
        email: "ఇమెయిల్ చిరునామా",
        phone: "ఫోన్ నంబర్",
        age: "వయస్సు",
      },
      financialDetails: {
        title: "ఆర్థిక వివరాలు",
        income: "నెలవారీ ఆదాయం (₹)",
        employment: "ఉద్యోగ రకం",
        employmentTypes: ["ఉద్యోగ రకాన్ని ఎంచుకోండి", "జీతం", "స్వయం ఉపాధి", "వ్యాపార యజమాని", "రిటైర్డ్", "ఇతర"],
        experience: "పని అనుభవం (సంవత్సరాలు)",
        creditScore: "క్రెడిట్ స్కోర్ (తెలిస్తే)",
      },
      loanRequirements: {
        title: "రుణ అవసరాలు",
        loanType: "రుణ రకం",
        loanTypes: ["రుణ రకాన్ని ఎంచుకోండి", "హోమ్ లోన్", "వ్యక్తిగత రుణం", "బిజినెస్ లోన్", "విద్యా రుణం", "వాహన రుణం"],
        loanAmount: "రుణ మొత్తం (₹)",
        loanTenure: "రుణ కాలవ్యవధి (సంవత్సరాలు)",
        existingLoans: "మీకు ఏవైనా ప్రస్తుత రుణాలు ఉన్నాయా?",
        yes: "అవును",
        no: "లేదు",
      },
      buttons: {
        next: "తదుపరి",
        previous: "మునుపటి",
        checkEligibility: "అర్హతను తనిఖీ చేయండి",
        startOver: "మళ్ళీ ప్రారంభించండి",
      },
      results: {
        analyzing: "మీ సమాచారాన్ని విశ్లేషిస్తోంది...",
        eligible: {
          title: "అభినందనలు! మీరు దీనికి అర్హత సాధించారు",
          details: {
            eligibleAmount: "అర్హత ఉన్న రుణ మొత్తం",
            interestRate: "వడ్డీ రేటు",
            creditScore: "క్రెడిట్ స్కోర్",
          },
          message: "మా ప్రతినిధి దరఖాస్తు ప్రక్రియ ద్వారా మిమ్మల్ని మార్గనిర్దేశం చేయడానికి త్వరలో మిమ్మల్ని సంప్రదిస్తారు.",
          buttons: {
            applyNow: "ఇప్పుడే దరఖాస్తు చేసుకోండి",
            exploreLoanTypes: "రుణ రకాలను అన్వేషించండి",
          },
        },
        notEligible: {
          title: "క్షమించండి, మీరు ప్రస్తుతం దీనికి అర్హత సాధించలేదు",
          alternativeOptions: {
            title: "ప్రత్యామ్నాయ ఎంపికలు",
            options: [
              "తక్కువ రుణ మొత్తానికి దరఖాస్తు చేయడాన్ని పరిగణించండి",
              "దరఖాస్తు చేయడానికి ముందు మీ క్రెడిట్ స్కోర్‌ను మెరుగుపరచండి",
              "మీ ప్రొఫైల్‌కు బాగా సరిపోయే ఇతర రుణ రకాలను అన్వేషించండి",
            ],
          },
          buttons: {
            exploreLoanTypes: "ఇతర రుణ రకాలను అన్వేషించండి",
            chatWithAdvisor: "సలహాదారుతో చాట్ చేయండి",
          },
        },
      },
    },
    chatbotPage: {
      title: "AI-ఆధారిత రుణ సహాయకుడు",
      subtitle: "మీ అన్ని రుణ-సంబంధిత ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి",
      info: {
        title: "మీ వ్యక్తిగత రుణ సహాయకుడిని కలవండి",
        description:
          "మా AI-ఆధారిత చాట్‌బాట్ మీ అన్ని రుణ-సంబంధిత ప్రశ్నలకు తక్షణ సమాధానాలు అందించడానికి రూపొందించబడింది. వివిధ రుణ రకాలు, అర్హత ప్రమాణాలు లేదా దరఖాస్తు ప్రక్రియల గురించి సమాచారం కోసం చూస్తున్నారా, మా చాట్‌బాట్ మీకు సహాయం చేయడానికి ఇక్కడ ఉంది.",
      },
      features: [
        {
          title: "తక్షణ ప్రతిస్పందనలు",
          description: "వేచి ఉండకుండా మీ ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి",
        },
        {
          title: "బహుభ��షా మద్దతు",
          description: "మీకు ఇష్టమైన భాషలో కమ్యూనికేట్ చేయండి",
        },
        {
          title: "స్మార్ట్ సిఫార్సులు",
          description: "మీ అవసరాల ఆధారంగా వ్యక్తిగతీకరించిన రుణ సూచనలను పొందండి",
        },
        {
          title: "24/7 లభ్యత",
          description: "పగలు లేదా రాత్రి ఎప్పుడైనా సహాయం పొందండి",
        },
      ],
      interface: {
        title: "నిధిసాకి సహాయకుడు",
        status: "ఆన్‌లైన్‌లో",
        clearChat: "చాట్‌ను క్లియర్ చేయండి",
        welcome: "👋 హలో! నేను మీ నిధిసాకి రుణ సహాయకుడిని. నేను ఈరోజు మీకు ఎలా సహాయం చేయగలను?",
        instructions: "మీరు రుణ రకాలు, అర్హత ప్రమాణాలు, వడ్డీ రేట్లు లేదా దరఖాస్తు ప్రక్రియల గురించి నన్ను అడగవచ్చు.",
        suggestedQuestions: [
          "మీరు ఏ రుణ రకాలను అందిస్తారు?",
          "నేను నా అర్హతను ఎలా తనిఖీ చేయాలి?",
          "ప్రస్తుత వడ్డీ రేట్లు ఏమిటి?",
          "ఆమోదానికి ఎంత సమయం పడుతుంది?",
        ],
      },
      faq: {
        title: "తరచుగా అడిగే ప్రశ్నలు",
        items: [
          {
            question: "నిధిసాకి ఏ రకమైన రుణాలను అందిస్తుంది?",
            answer:
              "నిధిసాకి హోమ్ లోన్లు, వ్యక్తిగత రుణాలు, బిజినెస్ లోన్లు, విద్యా రుణాలు మరియు వాహన రుణాలు సహా వివిధ రకాల రుణాలను అందిస్తుంది. ప్రతి రుణ రకానికి వేర్వేరు అర్హత ప్రమాణాలు, వడ్డీ రేట్లు మరియు తిరిగి చెల్లింపు నిబంధనలు ఉన్నాయి.",
          },
          {
            question: "నేను నా రుణ అర్హతను ఎలా తనిఖీ చేయాలి?",
            answer:
              "మా అర్హత తనిఖీ సాధనాన్ని ఉపయోగించి మీ రుణ అర్హతను తనిఖీ చేయవచ్చు. మీ వ్యక్తిగత మరియు ఆర్థిక వివరాలను అందించండి, మేము వెంటనే వివిధ రుణ రకాల కోసం మీ అర్హతను అంచనా వేస్తాము. ప్రత్యామ్నాయంగా, త్వరిత అర్హత అంచనా కోసం మా చాట్‌బాట్‌ను అడగవచ్చు.",
          },
          {
            question: "రుణ దరఖాస్తుకు ఏ పత్రాలు అవసరం?",
            answer:
              "అవసరమైన పత్రాలలో సాధారణంగా గుర్తింపు రుజువు (ఆధార్, పాన్ కార్డ్), చిరునామా రుజువు, ఆదాయ రుజువు (జీతం స్లిప్‌లు, ITR), బ్యాంక్ స్టేట్‌మెంట్‌లు మరియు ఉద్యోగ వివరాలు ఉంటాయి. నిర్దిష్ట అవసరాలు రుణ రకం మరియు మొత్తం ఆధారంగా మారవచ్చు.",
          },
          {
            question: "రుణ ఆమోద ప్రక్రియకు ఎంత సమయం పడుతుంది?",
            answer:
              "రుణ ఆమోద ప్రక్రియకు సాధారణంగా 2-7 పని దినాలు పడుతుంది, ఇది రుణ రకం, మొత్తం మరియు ధృవీకరణ ప్రక్రియపై ఆధారపడి ఉంటుంది. ముందుగా ఆమోదించబడిన రుణాలు వేగంగా ప్రాసెస్ చేయబడవచ్చు, కొన్నిసార్లు 24 గంటల్లోపు.",
          },
          {
            question: "కాలవ్యవధి ముగిసే ముందు నేను నా రుణాన్ని తిరిగి చెల్లించవచ్చా?",
            answer:
              "అవును, మీరు కాలవ్యవధి ముగిసే ముందు మీ రుణాన్ని తిరిగి చెల్లించవచ్చు. అయితే, కొన్ని రుణాలకు ముందస్తు చెల్లింపు జరిమానాలు లేదా ఛార్జీలు ఉండవచ్చు. రుణం తీసుకునే ముందు ముందస్తు చెల్లింపు నిబంధనలను తనిఖీ చేయడం మంచిది.",
          },
        ],
      },
    },
  },
}

// Function to get the current language from localStorage or default to 'en'
function getCurrentLanguage() {
  return localStorage.getItem("nidhisaki_language") || "en"
}

// Function to set the current language in localStorage
function setCurrentLanguage(lang) {
  localStorage.setItem("nidhisaki_language", lang)
}

// Function to translate the page based on the current language
function translatePage() {
  const currentLang = getCurrentLanguage()
  const data = languageData[currentLang]

  // Update current language display
  const currentLanguageElement = document.getElementById("current-language")
  if (currentLanguageElement) {
    currentLanguageElement.textContent =
      document.querySelector(`.language-dropdown li[data-lang="${currentLang}"]`)?.textContent ||
      currentLanguageElement.textContent
  }

  // Update language dropdown active state
  document.querySelectorAll(".language-dropdown li").forEach((li) => {
    li.classList.remove("active")
    if (li.getAttribute("data-lang") === currentLang) {
      li.classList.add("active")
    }
  })

  // Get the current page
  const currentPage = getCurrentPage()

  // Translate common elements
  translateCommonElements(data)

  // Translate page-specific elements
  switch (currentPage) {
    case "index":
      translateHomePage(data)
      break
    case "loan-types":
      translateLoanTypesPage(data)
      break
    case "eligibility-checker":
      translateEligibilityPage(data)
      break
    case "chatbot":
      translateChatbotPage(data)
      break
    default:
      translateHomePage(data)
  }
}

// Function to get the current page name
function getCurrentPage() {
  const path = window.location.pathname
  if (path.includes("loan-types")) return "loan-types"
  if (path.includes("eligibility-checker")) return "eligibility-checker"
  if (path.includes("chatbot")) return "chatbot"
  return "index"
}

// Function to translate common elements across all pages
function translateCommonElements(data) {
  // Update navigation
  const navItems = document.querySelectorAll("nav ul li a")
  navItems.forEach((item, index) => {
    if (index < data.nav.length) {
      item.textContent = data.nav[index]
    }
  })

  // Update chatbot
  const chatbotToggle = document.querySelector(".chatbot-toggle span")
  if (chatbotToggle) chatbotToggle.textContent = data.chatbot.toggle

  const chatbotHeader = document.querySelector(".chatbot-header h3")
  if (chatbotHeader) chatbotHeader.textContent = data.chatbot.header

  const chatbotWelcome = document.querySelector(".chatbot-messages .message.bot p")
  if (chatbotWelcome) chatbotWelcome.textContent = data.chatbot.welcome

  const chatbotInput = document.querySelector(".chatbot-input input")
  if (chatbotInput) chatbotInput.placeholder = data.chatbot.placeholder

  // Update footer
  const footerSections = document.querySelectorAll(".footer-section")
  if (footerSections.length >= 3) {
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
  }

  const footerBottom = document.querySelector(".footer-bottom p")
  if (footerBottom) footerBottom.textContent = data.footer.copyright
}

// Function to translate home page specific elements
function translateHomePage(data) {
  // Update hero section
  const heroTitle = document.querySelector(".hero h1")
  if (heroTitle) heroTitle.textContent = data.hero.title

  const heroSubtitle = document.querySelector(".hero p")
  if (heroSubtitle) heroSubtitle.textContent = data.hero.subtitle

  const heroCta = document.querySelector(".cta-button")
  if (heroCta) heroCta.textContent = data.hero.cta

  // Update features section
  const featuresTitle = document.querySelector(".features .section-title")
  if (featuresTitle) featuresTitle.textContent = data.features.title

  const featureItems = document.querySelectorAll(".feature-card")
  featureItems.forEach((item, index) => {
    if (index < data.features.items.length) {
      item.querySelector("h3").textContent = data.features.items[index].title
      item.querySelector("p").textContent = data.features.items[index].description
    }
  })

  // Update testimonials section
  const testimonialsTitle = document.querySelector(".testimonials .section-title")
  if (testimonialsTitle) testimonialsTitle.textContent = data.testimonials.title

  // Update testimonial content if available
  if (data.testimonials.items) {
    const testimonials = document.querySelectorAll(".testimonial")
    testimonials.forEach((testimonial, index) => {
      if (index < data.testimonials.items.length) {
        const quote = testimonial.querySelector("p")
        const author = testimonial.querySelector("h4")
        const role = testimonial.querySelector(".author-info p")

        if (quote) quote.textContent = data.testimonials.items[index].quote
        if (author) author.textContent = data.testimonials.items[index].author
        if (role) role.textContent = data.testimonials.items[index].role
      }
    })
  }
}

// Function to translate loan types page specific elements
function translateLoanTypesPage(data) {
  if (!data.loanTypes) return

  // Update page header
  const pageTitle = document.querySelector(".page-header h1")
  if (pageTitle) pageTitle.textContent = data.loanTypes.title

  const pageSubtitle = document.querySelector(".page-header p")
  if (pageSubtitle) pageSubtitle.textContent = data.loanTypes.subtitle

  // Update filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((button, index) => {
    if (index < data.loanTypes.filters.length) {
      button.textContent = data.loanTypes.filters[index]
    }
  })

  // Update loan cards
  const loanCards = document.querySelectorAll(".loan-card")
  loanCards.forEach((card) => {
    const type = card.getAttribute("data-type")
    if (data.loanTypes.cards[type]) {
      const cardData = data.loanTypes.cards[type]

      // Update card header
      const cardTitle = card.querySelector("h3")
      if (cardTitle) cardTitle.textContent = cardData.title

      // Update card description
      const cardDesc = card.querySelector(".loan-description")
      if (cardDesc) cardDesc.textContent = cardData.description

      // Update card details labels
      const detailLabels = card.querySelectorAll(".detail-label")
      if (detailLabels.length > 0 && cardData.details) {
        const detailsData = Object.values(cardData.details)
        detailLabels.forEach((label, i) => {
          if (i < detailsData.length) {
            label.textContent = detailsData[i]
          }
        })
      }

      // Update features
      const features = card.querySelectorAll(".loan-feature span")
      if (features.length > 0 && cardData.features) {
        features.forEach((feature, i) => {
          if (i < cardData.features.length) {
            feature.textContent = cardData.features[i]
          }
        })
      }

      // Update buttons
      if (cardData.buttons) {
        const eligibilityBtn = card.querySelector(".btn-primary")
        const learnMoreBtn = card.querySelector(".btn-secondary")

        if (eligibilityBtn) eligibilityBtn.textContent = cardData.buttons.eligibility
        if (learnMoreBtn) learnMoreBtn.textContent = cardData.buttons.learnMore
      }
    }
  })

  // Update comparison tool
  const comparisonTitle = document.querySelector(".loan-comparison-section .section-title")
  if (comparisonTitle) comparisonTitle.textContent = data.loanTypes.comparison.title

  const comparisonDesc = document.querySelector(".loan-comparison-section .section-description")
  if (comparisonDesc) comparisonDesc.textContent = data.loanTypes.comparison.description

  const loanAmountLabel = document.querySelector("label[for='loanAmount']")
  if (loanAmountLabel) loanAmountLabel.textContent = data.loanTypes.comparison.loanAmount

  const loanTenureLabel = document.querySelector("label[for='loanTenure']")
  if (loanTenureLabel) loanTenureLabel.textContent = data.loanTypes.comparison.loanTenure

  const compareButton = document.getElementById("compareLoans")
  if (compareButton) compareButton.textContent = data.loanTypes.comparison.compareButton

  // Update table headers
  const tableHeaders = document.querySelectorAll(".comparison-table th")
  tableHeaders.forEach((header, index) => {
    if (index < data.loanTypes.comparison.tableHeaders.length) {
      header.textContent = data.loanTypes.comparison.tableHeaders[index]
    }
  })
}

// Function to translate eligibility checker page specific elements
function translateEligibilityPage(data) {
  if (!data.eligibility) return

  // Update page header
  const pageTitle = document.querySelector(".page-header h1")
  if (pageTitle) pageTitle.textContent = data.eligibility.title

  const pageSubtitle = document.querySelector(".page-header p")
  if (pageSubtitle) pageSubtitle.textContent = data.eligibility.subtitle

  // Update steps
  const steps = document.querySelectorAll(".step .step-text")
  steps.forEach((step, index) => {
    if (index < data.eligibility.steps.length) {
      step.textContent = data.eligibility.steps[index]
    }
  })

  // Update form step 1: Personal Info
  const step1Title = document.querySelector(".form-step[data-step='1'] h2")
  if (step1Title) step1Title.textContent = data.eligibility.personalInfo.title

  const fullNameLabel = document.querySelector("label[for='fullName']")
  if (fullNameLabel) fullNameLabel.textContent = data.eligibility.personalInfo.fullName

  const emailLabel = document.querySelector("label[for='email']")
  if (emailLabel) emailLabel.textContent = data.eligibility.personalInfo.email

  const phoneLabel = document.querySelector("label[for='phone']")
  if (phoneLabel) phoneLabel.textContent = data.eligibility.personalInfo.phone

  const ageLabel = document.querySelector("label[for='age']")
  if (ageLabel) ageLabel.textContent = data.eligibility.personalInfo.age

  // Update form step 2: Financial Details
  const step2Title = document.querySelector(".form-step[data-step='2'] h2")
  if (step2Title) step2Title.textContent = data.eligibility.financialDetails.title

  const incomeLabel = document.querySelector("label[for='income']")
  if (incomeLabel) incomeLabel.textContent = data.eligibility.financialDetails.income

  const employmentLabel = document.querySelector("label[for='employment']")
  if (employmentLabel) employmentLabel.textContent = data.eligibility.financialDetails.employment

  // Update employment type options
  const employmentSelect = document.getElementById("employment")
  if (employmentSelect && data.eligibility.financialDetails.employmentTypes) {
    const options = employmentSelect.querySelectorAll("option")
    options.forEach((option, index) => {
      if (index < data.eligibility.financialDetails.employmentTypes.length) {
        option.textContent = data.eligibility.financialDetails.employmentTypes[index]
      }
    })
  }

  const experienceLabel = document.querySelector("label[for='experience']")
  if (experienceLabel) experienceLabel.textContent = data.eligibility.financialDetails.experience

  const creditScoreLabel = document.querySelector("label[for='creditScore']")
  if (creditScoreLabel) creditScoreLabel.textContent = data.eligibility.financialDetails.creditScore

  // Update form step 3: Loan Requirements
  const step3Title = document.querySelector(".form-step[data-step='3'] h2")
  if (step3Title) step3Title.textContent = data.eligibility.loanRequirements.title

  const loanTypeLabel = document.querySelector("label[for='loanType']")
  if (loanTypeLabel) loanTypeLabel.textContent = data.eligibility.loanRequirements.loanType

  // Update loan type options
  const loanTypeSelect = document.getElementById("loanType")
  if (loanTypeSelect && data.eligibility.loanRequirements.loanTypes) {
    const options = loanTypeSelect.querySelectorAll("option")
    options.forEach((option, index) => {
      if (index < data.eligibility.loanRequirements.loanTypes.length) {
        option.textContent = data.eligibility.loanRequirements.loanTypes[index]
      }
    })
  }

  const loanAmountLabel = document.querySelector("label[for='loanAmount']")
  if (loanAmountLabel) loanAmountLabel.textContent = data.eligibility.loanRequirements.loanAmount

  const loanTenureLabel = document.querySelector("label[for='loanTenure']")
  if (loanTenureLabel) loanTenureLabel.textContent = data.eligibility.loanRequirements.loanTenure

  const existingLoansLabel = document.querySelector("label[for='existingLoans']")
  if (existingLoansLabel) existingLoansLabel.textContent = data.eligibility.loanRequirements.existingLoans

  // Update radio buttons
  const radioLabels = document.querySelectorAll(".radio-group label")
  if (radioLabels.length >= 2) {
    radioLabels[0].textContent = radioLabels[0].textContent.replace("Yes", data.eligibility.loanRequirements.yes)
    radioLabels[1].textContent = radioLabels[1].textContent.replace("No", data.eligibility.loanRequirements.no)
  }

  // Update buttons
  const nextButtons = document.querySelectorAll(".next-btn")
  nextButtons.forEach((button) => {
    if (!button.id) {
      // Skip the checkEligibility button
      const icon = button.querySelector("i")
      button.textContent = data.eligibility.buttons.next + " "
      if (icon) button.appendChild(icon)
    }
  })

  const prevButtons = document.querySelectorAll(".prev-btn")
  prevButtons.forEach((button) => {
    const icon = button.querySelector("i")
    if (icon) button.textContent = " " + data.eligibility.buttons.previous
    button.prepend(icon)
  })

  const checkEligibilityBtn = document.getElementById("checkEligibility")
  if (checkEligibilityBtn) {
    const icon = checkEligibilityBtn.querySelector("i")
    checkEligibilityBtn.textContent = data.eligibility.buttons.checkEligibility + " "
    if (icon) checkEligibilityBtn.appendChild(icon)
  }

  const restartBtn = document.querySelector(".restart-btn")
  if (restartBtn) {
    const icon = restartBtn.querySelector("i")
    restartBtn.textContent = data.eligibility.buttons.startOver + " "
    if (icon) restartBtn.prepend(icon)
  }

  // Update results loading text
  const loadingText = document.querySelector(".result-loading p")
  if (loadingText) loadingText.textContent = data.eligibility.results.analyzing
}

// Function to translate chatbot page specific elements
function translateChatbotPage(data) {
  if (!data.chatbotPage) return

  // Update page header
  const pageTitle = document.querySelector(".page-header h1")
  if (pageTitle) pageTitle.textContent = data.chatbotPage.title

  const pageSubtitle = document.querySelector(".page-header p")
  if (pageSubtitle) pageSubtitle.textContent = data.chatbotPage.subtitle

  // Update chatbot info section
  const infoTitle = document.querySelector(".chatbot-info h2")
  if (infoTitle) infoTitle.textContent = data.chatbotPage.info.title

  const infoDesc = document.querySelector(".chatbot-info p")
  if (infoDesc) infoDesc.textContent = data.chatbotPage.info.description

  // Update chatbot features
  const features = document.querySelectorAll(".chatbot-feature")
  features.forEach((feature, index) => {
    if (index < data.chatbotPage.features.length) {
      const featureTitle = feature.querySelector("h3")
      const featureDesc = feature.querySelector("p")

      if (featureTitle) featureTitle.textContent = data.chatbotPage.features[index].title
      if (featureDesc) featureDesc.textContent = data.chatbotPage.features[index].description
    }
  })

  // Update chatbot interface
  const chatbotTitle = document.querySelector(".chatbot-title h3")
  if (chatbotTitle) chatbotTitle.textContent = data.chatbotPage.interface.title

  const statusText = document.querySelector(".status")
  if (statusText) statusText.textContent = data.chatbotPage.interface.status

  const clearChatBtn = document.querySelector(".clear-chat")
  if (clearChatBtn) clearChatBtn.setAttribute("title", data.chatbotPage.interface.clearChat)

  // Update welcome messages
  const welcomeMessages = document.querySelectorAll("#fullChatMessages .message.bot")
  if (welcomeMessages.length >= 2) {
    const firstMessage = welcomeMessages[0].querySelector("p")
    const secondMessage = welcomeMessages[1].querySelector("p")

    if (firstMessage) firstMessage.textContent = data.chatbotPage.interface.welcome
    if (secondMessage) secondMessage.textContent = data.chatbotPage.interface.instructions
  }

  // Update suggested questions
  const questionChips = document.querySelectorAll(".question-chip")
  questionChips.forEach((chip, index) => {
    if (index < data.chatbotPage.interface.suggestedQuestions.length) {
      chip.textContent = data.chatbotPage.interface.suggestedQuestions[index]
    }
  })

  // Update FAQ section
  const faqTitle = document.querySelector(".faq-section .section-title")
  if (faqTitle) faqTitle.textContent = data.chatbotPage.faq.title

  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item, index) => {
    if (index < data.chatbotPage.faq.items.length) {
      const question = item.querySelector(".faq-question h3")
      const answer = item.querySelector(".faq-answer p")

      if (question) question.textContent = data.chatbotPage.faq.items[index].question
      if (answer) answer.textContent = data.chatbotPage.faq.items[index].answer
    }
  })
}

// Export the functions
window.languageUtils = {
  getCurrentLanguage,
  setCurrentLanguage,
  translatePage,
  languageData,
}
