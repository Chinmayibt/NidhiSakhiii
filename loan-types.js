document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const filterButtons = document.querySelectorAll(".filter-btn")
  const loanCards = document.querySelectorAll(".loan-card")
  const loanAmountInput = document.getElementById("loanAmount")
  const loanAmountValue = document.getElementById("loanAmountValue")
  const loanTenureInput = document.getElementById("loanTenure")
  const loanTenureValue = document.getElementById("loanTenureValue")
  const compareLoansBtn = document.getElementById("compareLoans")
  const comparisonTableBody = document.getElementById("comparisonTableBody")

  // Loan type data
  const loanTypes = [
    {
      type: "personal",
      name: "Personal Loan",
      minInterest: 10.5,
      maxInterest: 18,
      processingFee: 2,
    },
    {
      type: "home",
      name: "Home Loan",
      minInterest: 6.7,
      maxInterest: 9.5,
      processingFee: 0.5,
    },
    {
      type: "business",
      name: "Business Loan",
      minInterest: 11,
      maxInterest: 16,
      processingFee: 1.5,
    },
    {
      type: "education",
      name: "Education Loan",
      minInterest: 7.5,
      maxInterest: 11,
      processingFee: 0.5,
    },
    {
      type: "vehicle",
      name: "Vehicle Loan",
      minInterest: 7.5,
      maxInterest: 12,
      processingFee: 1,
    },
  ]

  // Filter loan cards
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Get filter value
      const filter = button.getAttribute("data-filter")

      // Filter cards
      loanCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-type") === filter) {
          card.style.display = "flex"
          // Add animation
          card.style.animation = "fadeIn 0.5s forwards"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Update range input values
  loanAmountInput.addEventListener("input", () => {
    loanAmountValue.textContent = formatCurrency(loanAmountInput.value)
  })

  loanTenureInput.addEventListener("input", () => {
    loanTenureValue.textContent = loanTenureInput.value
  })

  // Compare loans button click
  compareLoansBtn.addEventListener("click", () => {
    const loanAmount = Number.parseInt(loanAmountInput.value)
    const loanTenure = Number.parseInt(loanTenureInput.value)

    // Clear table
    comparisonTableBody.innerHTML = ""

    // Calculate and display results for each loan type
    loanTypes.forEach((loan) => {
      // Calculate average interest rate
      const avgInterest = (loan.minInterest + loan.maxInterest) / 2

      // Calculate EMI
      const monthlyInterest = avgInterest / 1200 // Monthly interest rate
      const months = loanTenure * 12 // Total months
      const emi =
        (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
        (Math.pow(1 + monthlyInterest, months) - 1)

      // Calculate total interest
      const totalAmount = emi * months
      const totalInterest = totalAmount - loanAmount

      // Calculate processing fee
      const processingFee = (loanAmount * loan.processingFee) / 100

      // Create table row
      const row = document.createElement("tr")
      row.innerHTML = `
        <td>${loan.name}</td>
        <td>${avgInterest.toFixed(2)}%</td>
        <td>₹${Math.round(emi).toLocaleString()}</td>
        <td>₹${Math.round(totalInterest).toLocaleString()}</td>
        <td>₹${Math.round(totalAmount).toLocaleString()}</td>
        <td><a href="eligibility-checker.html" class="btn btn-primary btn-sm">Check Eligibility</a></td>
      `

      comparisonTableBody.appendChild(row)
    })

    // Scroll to comparison results
    document.querySelector(".comparison-results").scrollIntoView({ behavior: "smooth" })
  })

  // Helper function to format currency
  function formatCurrency(value) {
    return Number.parseInt(value).toLocaleString()
  }

  // Initialize range input values
  loanAmountValue.textContent = formatCurrency(loanAmountInput.value)
  loanTenureValue.textContent = loanTenureInput.value

  // Add animation to loan cards on page load
  loanCards.forEach((card, index) => {
    card.style.animation = `fadeIn 0.5s forwards ${index * 0.1}s`
    card.style.opacity = 0
  })

  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .btn-sm {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
  `
  document.head.appendChild(style)
})
