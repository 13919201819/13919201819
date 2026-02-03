"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BookDemoPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    companySize: "",
    phone: "",
    specificInterest: "",
    additionalNotes: ""
  });

  // Generate time slots from 9 AM to 6 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      const time12hr = hour > 12 ? hour - 12 : hour;
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = time12hr === 0 ? 12 : time12hr;
      slots.push(`${displayHour.toString().padStart(2, '0')}:00 ${period}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSameDay = (date1: Date | null, date2: Date) => {
    if (!date1) return false;
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const selectDate = (day: number) => {
    if (!isDateDisabled(day)) {
      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
      setSelectedTime(""); // Reset time when date changes
    }
  };

  const companySizes = [
    "1-100 employees",
    "101-1,000 employees",
    "1,001-10,000 employees",
    "10,000+ employees (Fortune 500)",
    "Fortune 100"
  ];

  // Convert selectedTime from "HH:00 AM/PM" to 24-hour format
  const parseTime = (timeStr: string): string => {
    const [time, period] = timeStr.split(' ');
    const [hoursStr] = time.split(':');
    let hour = parseInt(hoursStr);
    
    if (period === 'PM' && hour !== 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    
    return hour.toString().padStart(2, '0');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate date and time selection
    if (!selectedDate || !selectedTime) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select both a date and time for your demo.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format selectedDate to YYYY-MM-DD
      const formattedDate = selectedDate.toISOString().split('T')[0];
      
      // Convert time to 24-hour format
      const hour24 = parseTime(selectedTime);
      const time24hr = `${hour24}:00`;

      // Prepare payload matching the API's expected format
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || "",
        country: "", // Add country field if needed
        company: formData.companyName,
        message: `
Job Title: ${formData.jobTitle}
Company Size: ${formData.companySize}
Product Interest: ${formData.specificInterest || 'General AI Enterprise Solutions'}

Additional Notes:
${formData.additionalNotes || 'No additional notes'}
        `.trim(),
        date: formattedDate,
        time: time24hr,
        timezone: "America/New_York" // EST timezone
      };

      console.log('Submitting booking:', payload);

      const response = await fetch('https://connect-2-gamma.vercel.app/api/book-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Success! Your demo has been scheduled. Check your email for confirmation details and meeting link.'
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            companyName: "",
            jobTitle: "",
            companySize: "",
            phone: "",
            specificInterest: "",
            additionalNotes: ""
          });
          setSelectedDate(null);
          setSelectedTime("");
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to schedule demo. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred while scheduling your demo. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      
      <main className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black pt-42 pb-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)",
          }}
        />
        <div className="absolute top-32 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium">Schedule a Consultation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Book Your Personalized</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise AI Demo
            </span>
          </h1>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Connect with our enterprise solutions team for a tailored demonstration of how our AI 
            products can transform your Fortune 100 operations and deliver measurable ROI.
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Calendar & Time Selection */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="space-y-4">
                <label className="text-white font-semibold text-sm block">
                  Select Date
                </label>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 backdrop-blur-sm">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      type="button"
                      onClick={previousMonth}
                      className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors cursor-pointer"
                    >
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h3 className="text-white font-semibold">
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors cursor-pointer"
                    >
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                      <div key={day} className="text-center text-gray-500 text-sm font-medium py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for days before month starts */}
                    {Array.from({ length: startingDayOfWeek }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    
                    {/* Actual days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                      const disabled = isDateDisabled(day);
                      const selected = isSameDay(selectedDate, date);
                      
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => selectDate(day)}
                          disabled={disabled}
                          className={`
                            aspect-square p-2 rounded-lg text-sm font-medium transition-all
                            ${disabled 
                              ? 'text-gray-600 cursor-not-allowed' 
                              : 'text-gray-300 hover:bg-purple-500/20 hover:text-white cursor-pointer'
                            }
                            ${selected 
                              ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white shadow-lg' 
                              : ''
                            }
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {selectedDate && (
                    <div className="mt-4 pt-4 border-t border-purple-500/20">
                      <p className="text-purple-300 text-sm">
                        Selected: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-4">
                <label className="text-white font-semibold text-sm block">
                  Select Time (EST) {!selectedDate && <span className="text-gray-500 text-xs">(Select a date first)</span>}
                </label>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 backdrop-blur-sm">
                  {!selectedDate ? (
                    <div className="flex items-center justify-center h-64 text-gray-500">
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>Please select a date first</p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`
                            px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer
                            ${selectedTime === slot
                              ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white shadow-lg'
                              : 'bg-purple-500/10 border border-purple-500/20 text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/40'
                            }
                          `}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 backdrop-blur-sm">
              <h3 className="text-white font-semibold text-lg">Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm block">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm block">
                    Business Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john.doe@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm block">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="Acme Corporation"
                    className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm block">
                    Job Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    placeholder="Chief Technology Officer"
                    className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm block">
                    Company Size <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all cursor-pointer"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map((size) => (
                      <option key={size} value={size} className="bg-gray-900">
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm block">
                  Specific Product Interest
                </label>
                <input
                  type="text"
                  name="specificInterest"
                  value={formData.specificInterest}
                  onChange={handleInputChange}
                  placeholder="e.g., AI Agents, Workflow Automation, etc."
                  className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm block">
                  Additional Notes or Questions
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your specific needs or challenges..."
                  className="w-full px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4 pt-4">
              {/* Status Message */}
              {submitStatus && (
                <div className={`w-full max-w-2xl px-6 py-4 rounded-xl border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-300' 
                    : 'bg-red-500/10 border-red-500/30 text-red-300'
                }`}>
                  <div className="flex items-start gap-3">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative inline-flex items-center gap-3 px-12 py-5 overflow-hidden rounded-xl transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 cursor-pointer'
                }`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                {isSubmitting ? (
                  <>
                    <svg className="relative z-10 w-5 h-5 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="relative z-10 text-white font-semibold text-lg">Scheduling...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10 text-white font-semibold text-lg">Schedule Demo</span>
                    <svg 
                      className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Privacy Note */}
            <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto">
              By submitting this form, you agree to our enterprise terms of service and privacy policy. 
              Your information will be handled with the highest level of security and confidentiality.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </main>
    
    <Footer />
    </>
  );
}