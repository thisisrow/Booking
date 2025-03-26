import { Calendar, Users, Baby, Car } from 'lucide-react';

interface BookingSummaryProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  adults: number;
  setAdults: (adults: number) => void;
  children: number;
  setChildren: (children: number) => void;
  pickupService: boolean;
  setPickupService: (pickup: boolean) => void;
  acceptTerms: boolean;
  setAcceptTerms: (terms: boolean) => void;
  totalPrice: number;
  adultPrice: number;
  childPrice: number;
  pickupPrice: number;
  onPayment: () => void;
}

export default function BookingSummary({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  selectedDate,
  setSelectedDate,
  adults,
  setAdults,
  children,
  setChildren,
  pickupService,
  setPickupService,
  acceptTerms,
  setAcceptTerms,
  totalPrice,
  adultPrice,
  childPrice,
  pickupPrice,
  onPayment
}: BookingSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow sticky top-24">
      <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>

      <div className="space-y-6">
        {/* Personal Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
            required
            maxLength={10}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Date *</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Adults */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
          <div className="flex items-center space-x-4">
            <Users className="w-5 h-5 text-gray-400" />
            <button
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center"
            >
              -
            </button>
            <span className="w-8 text-center">{adults}</span>
            <button
              onClick={() => setAdults(adults + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
          <div className="flex items-center space-x-4">
            <Baby className="w-5 h-5 text-gray-400" />
            <button
              onClick={() => setChildren(Math.max(0, children - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center"
            >
              -
            </button>
            <span className="w-8 text-center">{children}</span>
            <button
              onClick={() => setChildren(children + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        {/* Pickup Service */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="pickup"
            checked={pickupService}
            onChange={(e) => setPickupService(e.target.checked)}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="pickup" className="flex items-center text-sm text-gray-700">
            <Car className="w-5 h-5 mr-2" />
            Pickup & Drop Service (₹{pickupPrice})
          </label>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="rounded text-blue-600 focus:ring-blue-500"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I accept the <a href="/about#terms" className="text-blue-600 hover:underline">terms and conditions</a>
          </label>
        </div>

        {/* Cost Breakdown */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Adults ({adults})</span>
            <span>₹{adults * adultPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Children ({children})</span>
            <span>₹{children * childPrice}</span>
          </div>
          {pickupService && (
            <div className="flex justify-between">
              <span>Pickup & Drop</span>
              <span>₹{pickupPrice}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>

        <button
          onClick={onPayment}
          disabled={!name || !phone || !email || !selectedDate || !acceptTerms}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}