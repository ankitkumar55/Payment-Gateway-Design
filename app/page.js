"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PaymentRegistrationForm() {
  const [formData, setFormData] = useState({
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen w-full bg-[#12372A] flex flex-col items-center justify-center pt-6">
      <h1 className="text-3xl font-extrabold text-white mb-4 text-center font-aftika">
        Card Payment
        <br />
        Checkout Form
      </h1>
      <div className="min-h-screen bg-white flex flex-col p-4 pl-12 w-[80%] rounded-t-2xl">
        <div className="flex-grow flex flex-col md:flex-row max-w-6xl mx-auto w-full px-3 py-6">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left mx-auto">
            <div className="mb-4">
              <Image src="/vector.png" alt="Company Logo" width={120} height={120} className="mx-auto" />
            </div>
            <h1 className="text-xl font-extrabold font-aftika text-[#12372A] mb-2">
              Payment gateway
            </h1>
            <p className="text-xs text-gray-500 text-center">Enter school/location details</p>
          </div>


          {/* Right Column */}
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-extrabold text-gray-800 mb-3">Complete registration payment</h2>

              {/* Personal Details Section */}
              <div className="mb-6">
                <h3 className="text-base font-extrabold text-gray-800 mb-3">Personal details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="addressLine" className="block text-xs text-gray-600 mb-1">
                      Address line
                    </label>
                    <input
                      type="text"
                      id="addressLine"
                      name="addressLine"
                      placeholder="P.o Box 1223"
                      value={formData.addressLine}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-xs text-gray-600 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Arusha"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div>
                    <label htmlFor="state" className="block text-xs text-gray-600 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Arusha, Tanzania"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-xs text-gray-600 mb-1">
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="2500"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods Section */}
              <div className="mb-6">
                <h3 className="text-base font-extrabold text-gray-800 mb-3">Payment methods</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="w-16 h-12 bg-blue-50 rounded-md flex items-center justify-center">
                    <Image src="/credit-card.png" alt="Visa" width={32} height={20} />
                  </div>
                  <div className="w-16 h-12 bg-gray-50 rounded-md flex items-center justify-center">
                    <Image src="/stripe.png" alt="Stripe" width={32} height={20} />
                  </div>
                  <div className="w-16 h-12 bg-gray-50 rounded-md flex items-center justify-center">
                    <Image src="/paypal.png" alt="PayPal" width={32} height={20} />
                  </div>
                  <div className="w-16 h-12 bg-gray-50 rounded-md flex items-center justify-center">
                    <Image src="/mastercard.png" alt="Mastercard" width={32} height={20} />
                  </div>
                  <div className="w-16 h-12 bg-gray-50 rounded-md flex items-center justify-center">
                    <Image src="/GooglePay.png" alt="Google Pay" width={32} height={20} />
                  </div>
                </div>
              </div>

              {/* Card Details Section */}
              <div className="mb-6">
                <h3 className="text-base font-extrabold text-gray-800 mb-3">Card details</h3>

                <div className="mb-3">
                  <label htmlFor="cardholderName" className="block text-xs text-gray-600 mb-1">
                    Cardholder's name
                  </label>
                  <input
                    type="text"
                    id="cardholderName"
                    name="cardholderName"
                    placeholder="Name on your card"
                    value={formData.cardholderName}
                    onChange={handleChange}
                    className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cardNumber" className="block text-xs text-gray-600 mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Seen on your card"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="expiry" className="block text-xs text-gray-600 mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      placeholder="10/23"
                      value={formData.expiry}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-xs text-gray-600 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      placeholder="123"
                      value={formData.cvc}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full bg-green-900 text-white py-2.5 rounded font-medium hover:bg-green-800 transition-colors text-sm"
              >
                Next
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-3 px-4 border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-gray-500 mb-2 md:mb-0">
              © 2023, All Rights Reserved. Made by Switcherr Adil
            </div>
            <div className="flex gap-3">
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
                Instructions
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
                License
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
                Terms of Use
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

