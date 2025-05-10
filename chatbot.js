document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const chatMessages = document.getElementById("fullChatMessages")
  const chatInput = document.getElementById("fullChatInput")
  const chatSendBtn = document.getElementById("fullChatSend")
  const clearChatBtn = document.querySelector(".clear-chat")
  const questionChips = document.querySelectorAll(".question-chip")

  // Function to add a message to the chat
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("message")
    messageDiv.classList.add(isUser ? "user" : "bot")

    const avatarDiv = document.createElement("div")
    avatarDiv.classList.add("message-avatar")

    const avatarIcon = document.createElement("i")
    avatarIcon.classList.add("fas")
    avatarIcon.classList.add(isUser ? "fa-user" : "fa-robot")

    avatarDiv.appendChild(avatarIcon)

    const contentDiv = document.createElement("div")
    contentDiv.classList.add("message-content")

    const messageP = document.createElement("p")
    messageP.textContent = message

    const timeSpan = document.createElement("span")
    timeSpan.classList.add("message-time")
    timeSpan.textContent = "Just now"

    contentDiv.appendChild(messageP)
    contentDiv.appendChild(timeSpan)

    messageDiv.appendChild(isUser ? contentDiv : avatarDiv)
    messageDiv.appendChild(isUser ? avatarDiv : contentDiv)

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
        "We offer various types of loans including Home Loans, Personal Loans, Business Loans, Education Loans, and Vehicle Loans. Which one are you interested in?"
    } else if (lowerMessage.includes("home loan") || lowerMessage.includes("housing")) {
      response =
        "Our home loans offer competitive interest rates starting from 6.7% with loan tenure up to 30 years. The maximum loan amount can go up to ₹5 crore depending on your eligibility. Would you like to check your eligibility?"
    } else if (lowerMessage.includes("personal loan")) {
      response =
        "Personal loans are available from ₹50,000 to ₹25,00,000 with interest rates starting at 10.5%. No collateral required! The processing is quick, and you can get approval within 24-48 hours."
    } else if (lowerMessage.includes("business loan")) {
      response =
        "Our business loans are designed to help your business grow. Loan amounts range from ₹5,00,000 to ₹2 crore with interest rates starting at 11%. We offer flexible repayment options tailored to your business cash flow."
    } else if (lowerMessage.includes("education") || lowerMessage.includes("study")) {
      response =
        "Education loans cover tuition fees, living expenses, and study materials. Interest rates start at 7.5% with repayment beginning after course completion. We provide loans for both domestic and international education."
    } else if (lowerMessage.includes("vehicle") || lowerMessage.includes("car loan")) {
      response =
        "Our vehicle loans are available for new and pre-owned vehicles with interest rates starting at 7.5%. You can get up to 100% financing for new vehicles and up to 85% for pre-owned vehicles."
    } else if (lowerMessage.includes("eligibility") || lowerMessage.includes("qualify")) {
      response =
        "Eligibility depends on factors like income, credit score, and employment stability. For most loans, you need a minimum monthly income of ₹25,000 and a credit score above 650. Would you like to use our eligibility checker tool?"
    } else if (lowerMessage.includes("interest") || lowerMessage.includes("rate")) {
      response =
        "Our interest rates are competitive and vary based on loan type, amount, and your credit profile. Home loans start at 6.7%, personal loans at 10.5%, business loans at 11%, education loans at 7.5%, and vehicle loans at 7.5%."
    } else if (lowerMessage.includes("document") || lowerMessage.includes("documents needed")) {
      response =
        "Required documents typically include ID proof (Aadhaar, PAN), address proof, income proof (salary slips, ITR), bank statements, and employment details. Specific requirements vary by loan type."
    } else if (lowerMessage.includes("process") || lowerMessage.includes("how long")) {
      response =
        "The loan approval process typically takes 2-7 business days, depending on the loan type, amount, and verification process. Pre-approved loans may be processed faster, sometimes within 24 hours."
    } else if (lowerMessage.includes("emi") || lowerMessage.includes("calculator")) {
      response =
        "You can calculate your EMI using our loan calculator. For example, a ₹10 lakh home loan at 7.5% interest for 20 years would have an EMI of approximately ₹8,060 per month."
    } else if (lowerMessage.includes("prepayment") || lowerMessage.includes("foreclose")) {
      response =
        "Yes, you can prepay or foreclose your loan. Home loans and education loans have no prepayment charges. Personal, business, and vehicle loans may have prepayment charges of 2-5% of the outstanding amount."
    } else if (lowerMessage.includes("thank")) {
      response = "You're welcome! Feel free to ask if you have any other questions about our loan services."
    } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
      response = "Thank you for chatting with us! Have a great day!"
    }

    // Add bot response after a short delay
    setTimeout(() => {
      addMessage(response)
    }, 500)

    // Add suggested follow-up questions for certain responses
    if (lowerMessage.includes("loan type") || response.includes("Which one are you interested in?")) {
      setTimeout(() => {
        const suggestedDiv = document.createElement("div")
        suggestedDiv.classList.add("suggested-questions")

        const questions = [
          "Tell me about home loans",
          "What are personal loan rates?",
          "Business loan eligibility",
          "Education loan details",
        ]

        questions.forEach((q) => {
          const button = document.createElement("button")
          button.classList.add("question-chip")
          button.textContent = q
          button.addEventListener("click", () => {
            sendMessage(q)
          })
          suggestedDiv.appendChild(button)
        })

        chatMessages.appendChild(suggestedDiv)
        chatMessages.scrollTop = chatMessages.scrollHeight
      }, 800)
    }
  }

  // Function to send a message
  function sendMessage(message = null) {
    const messageText = message || chatInput.value.trim()
    if (messageText) {
      addMessage(messageText, true)
      chatInput.value = ""
      handleChatbotResponse(messageText)
    }
  }

  // Event listeners
  chatSendBtn.addEventListener("click", () => sendMessage())

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      sendMessage()
    }
  })

  clearChatBtn.addEventListener("click", () => {
    // Clear all messages except the first welcome message
    while (chatMessages.children.length > 1) {
      chatMessages.removeChild(chatMessages.lastChild)
    }
  })

  // Question chips
  questionChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      sendMessage(chip.textContent)
    })
  })

  // Add typing animation to the welcome message
  const welcomeMessage = document.querySelector(".message.bot p")
  const originalText = welcomeMessage.textContent
  welcomeMessage.textContent = ""

  let i = 0
  const typingInterval = setInterval(() => {
    if (i < originalText.length) {
      welcomeMessage.textContent += originalText.charAt(i)
      i++
    } else {
      clearInterval(typingInterval)

      // Add the second welcome message after typing animation
      setTimeout(() => {
        addMessage("You can ask me about loan types, eligibility criteria, interest rates, or application processes.")

        // Add the suggested questions after the second message
        setTimeout(() => {
          const suggestedDiv = document.createElement("div")
          suggestedDiv.classList.add("suggested-questions")

          const questions = [
            "What loan types do you offer?",
            "How do I check my eligibility?",
            "What are the current interest rates?",
            "How long does approval take?",
          ]

          questions.forEach((q) => {
            const button = document.createElement("button")
            button.classList.add("question-chip")
            button.textContent = q
            button.addEventListener("click", () => {
              sendMessage(q)
            })
            suggestedDiv.appendChild(button)
          })

          chatMessages.appendChild(suggestedDiv)
          chatMessages.scrollTop = chatMessages.scrollHeight
        }, 500)
      }, 500)
    }
  }, 30)

  // Add FAQ toggle functionality
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      item.classList.toggle("active")
      const icon = item.querySelector(".faq-toggle i")
      icon.classList.toggle("fa-plus")
      icon.classList.toggle("fa-minus")
    })
  })
})
