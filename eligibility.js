document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const eligibilityForm = document.getElementById("eligibilityForm")
  const steps = document.querySelectorAll(".step")
  const formSteps = document.querySelectorAll(".form-step")
  const nextButtons = document.querySelectorAll(".next-btn")
  const prevButtons = document.querySelectorAll(".prev-btn")
  const checkEligibilityBtn = document.getElementById("checkEligibility")
  const restartBtn = document.querySelector(".restart-btn")
  const resultLoading = document.querySelector(".result-loading")
  const resultContent = document.querySelector(".result-content")

  // Current step
  let currentStep = 1

  // Function to show a specific step
  function showStep(stepNumber) {
    // Hide all steps
    formSteps.forEach((step) => {
      step.classList.remove("active")
    })

    // Show the current step
    document.querySelector(`.form-step[data-step="${stepNumber}"]`).classList.add("active")

    // Update step indicators
    steps.forEach((step) => {
      const stepNum = Number.parseInt(step.getAttribute("data-step"))
      if (stepNum < currentStep) {
        step.classList.add("completed")
        step.classList.remove("active")
      } else if (stepNum === currentStep) {
        step.classList.add("active")
        step.classList.remove("completed")
      } else {
        step.classList.remove("active")
        step.classList.remove("completed")
      }
    })

    // Scroll to top of form
    eligibilityForm.scrollIntoView({ behavior: "smooth" })
  }

  // Next button click
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Validate current step
      const currentFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`)
      const inputs = currentFormStep.querySelectorAll("input, select")
      let isValid = true

      inputs.forEach((input) => {
        if (input.hasAttribute("required") && !input.value) {
          isValid = false
          input.style.borderColor = "#f44336"
        } else {
          input.style.borderColor = ""
        }
      })

      if (!isValid) {
        return
      }

      // Move to next step
      currentStep++
      showStep(currentStep)
    })
  })

  // Previous button click
  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentStep--
      showStep(currentStep)
    })
  })

  // Check eligibility button click
  checkEligibilityBtn.addEventListener("click", () => {
    // Move to results step
    currentStep = 4
    showStep(currentStep)

    // Show loading
    resultLoading.style.display = "flex"
    resultContent.style.display = "none"

    // Simulate eligibility check
    setTimeout(() => {
      // Get form data
      const formData = new FormData(eligibilityForm)
      const loanType = formData.get("loanType")
      const loanAmount = Number.parseInt(formData.get("loanAmount"))
      const income = Number.parseInt(formData.get("income"))
      const creditScore = formData.get("creditScore") ? Number.parseInt(formData.get("creditScore")) : 700

      // Calculate eligibility
      let isEligible = false
      let maxEligibleAmount = 0
      let interestRate = 0
      let reason = ""

      if (loanType === "personal") {
        maxEligibleAmount = income * 10
        interestRate = creditScore > 750 ? 10.5 : 14.5
        isEligible = income >= 25000 && creditScore >= 650
        reason = !isEligible ? "Minimum income requirement not met or low credit score." : ""
      } else if (loanType === "home") {
        maxEligibleAmount = income * 60
        interestRate = creditScore > 750 ? 6.7 : 8.5
        isEligible = income >= 40000 && creditScore >= 700
        reason = !isEligible ? "Minimum income requirement not met or low credit score." : ""
      } else if (loanType === "business") {
        maxEligibleAmount = income * 24
        interestRate = creditScore > 750 ? 11 : 14
        isEligible = income >= 50000 && creditScore >= 680
        reason = !isEligible ? "Minimum income requirement not met or low credit score." : ""
      } else if (loanType === "education") {
        maxEligibleAmount = income * 15
        interestRate = creditScore > 750 ? 7.5 : 9.5
        isEligible = income >= 30000 && creditScore >= 650
        reason = !isEligible ? "Minimum income requirement not met or low credit score." : ""
      } else if (loanType === "vehicle") {
        maxEligibleAmount = income * 12
        interestRate = creditScore > 750 ? 7.5 : 10
        isEligible = income >= 25000 && creditScore >= 650
        reason = !isEligible ? "Minimum income requirement not met or low credit score." : ""
      }

      // Check if requested amount is within eligible amount
      if (isEligible && loanAmount > maxEligibleAmount) {
        isEligible = false
        reason = `The requested loan amount exceeds your eligible amount of ₹${maxEligibleAmount.toLocaleString()}.`
      }

      // Create result HTML
      let resultHTML = ""
      if (isEligible) {
        resultHTML = `
          <div class="eligibility-result eligible">
            <div class="result-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3>Congratulations! You are eligible for the ${getLoanTypeName(loanType)} Loan</h3>
            <div class="result-details">
              <div class="result-detail">
                <span class="detail-label">Eligible Loan Amount</span>
                <span class="detail-value">Up to ₹${maxEligibleAmount.toLocaleString()}</span>
              </div>
              <div class="result-detail">
                <span class="detail-label">Interest Rate</span>
                <span class="detail-value">${interestRate}% per annum</span>
              </div>
              <div class="result-detail">
                <span class="detail-label">Credit Score</span>
                <span class="detail-value">${creditScore}</span>
              </div>
            </div>
            <p>Our representative will contact you shortly to guide you through the application process.</p>
            <div class="result-actions">
              <a href="#" class="btn btn-primary">Apply Now</a>
              <a href="loan-types.html" class="btn btn-secondary">Explore Loan Types</a>
            </div>
          </div>
        `
      } else {
        resultHTML = `
          <div class="eligibility-result not-eligible">
            <div class="result-icon">
              <i class="fas fa-times-circle"></i>
            </div>
            <h3>We're sorry, you are not eligible for the ${getLoanTypeName(loanType)} Loan at this time</h3>
            <p class="reason">${reason}</p>
            <div class="alternative-options">
              <h4>Alternative Options</h4>
              <ul>
                <li>Consider applying for a lower loan amount</li>
                <li>Improve your credit score before applying</li>
                <li>Explore other loan types that may better suit your profile</li>
              </ul>
            </div>
            <div class="result-actions">
              <a href="loan-types.html" class="btn btn-primary">Explore Other Loan Types</a>
              <a href="chatbot.html" class="btn btn-secondary">Chat with an Advisor</a>
            </div>
          </div>
        `
      }

      // Hide loading and show result
      resultLoading.style.display = "none"
      resultContent.style.display = "block"
      resultContent.innerHTML = resultHTML

      // Add CSS for result
      const style = document.createElement("style")
      style.textContent = `
        .eligibility-result {
          text-align: center;
          padding: 2rem;
          border-radius: var(--border-radius);
        }
        .eligible {
          background-color: rgba(76, 175, 80, 0.1);
        }
        .not-eligible {
          background-color: rgba(244, 67, 54, 0.1);
        }
        .result-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        .eligible .result-icon {
          color: var(--success-color);
        }
        .not-eligible .result-icon {
          color: var(--danger-color);
        }
        .result-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
          text-align: left;
        }
        .result-detail {
          background-color: white;
          padding: 1rem;
          border-radius: var(--border-radius);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .detail-label {
          display: block;
          font-size: 0.9rem;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }
        .detail-value {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-color);
        }
        .reason {
          color: var(--danger-color);
          font-weight: 500;
          margin: 1rem 0;
        }
        .alternative-options {
          background-color: white;
          padding: 1.5rem;
          border-radius: var(--border-radius);
          margin: 2rem 0;
          text-align: left;
        }
        .alternative-options h4 {
          margin-bottom: 1rem;
          color: var(--primary-color);
        }
        .alternative-options ul {
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .alternative-options li {
          margin-bottom: 0.5rem;
        }
        .result-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .result-actions {
            flex-direction: column;
          }
          .result-actions .btn {
            width: 100%;
          }
        }
      `
      document.head.appendChild(style)
    }, 2000)
  })

  // Restart button click
  restartBtn.addEventListener("click", () => {
    // Reset form
    eligibilityForm.reset()

    // Go back to step 1
    currentStep = 1
    showStep(currentStep)
  })

  // Helper function to get loan type name
  function getLoanTypeName(type) {
    switch (type) {
      case "personal":
        return "Personal"
      case "home":
        return "Home"
      case "business":
        return "Business"
      case "education":
        return "Education"
      case "vehicle":
        return "Vehicle"
      default:
        return ""
    }
  }

  // Initialize form
  showStep(currentStep)

  // Add input validation
  const inputs = document.querySelectorAll("input, select")
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.hasAttribute("required") && !input.value) {
        input.style.borderColor = "#f44336"
      } else {
        input.style.borderColor = ""
      }
    })
  })
})
