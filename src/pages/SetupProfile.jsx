import React, { useState } from 'react';
import { 
  User, MapPin, Music, Mic, Guitar, Target, TrendingUp, Users, Upload, 
  ArrowLeft, ArrowRight, Check, Sparkles
} from 'lucide-react';

const UserSetup = () => {
  const [formData, setFormData] = useState({
    displayName: '', 
    userType: '', 
    instruments: [], 
    genres: [], 
    level: '', 
    lookingFor: [], 
    location: '',
    demo: null
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Most popular options for Indian musicians covering 80% of use cases
  const data = {
    instruments: [
      'Guitar', 'Keyboard/Piano', 'Drums', 'Bass', 'Harmonium', 'Flute', 'Violin',
      'Acoustic Guitar', 'Electric Guitar', 'Saxophone', 'Synthesizer', 'Mouth Organ',
      'Tabla', 'Tanpura', 'Octopad', 'Clapbox', 'Sitar', 'Santoor', 'Sarod', 'Veena', 
      'Mridangam', 'Dholak'
    ],
    genres: [
      'Bollywood', 'Classical Indian', 'Folk', 'Pop', 'Rock', 'Hip-Hop', 'Electronic', 'Jazz',
      'Carnatic', 'Hindustani', 'Bhangra', 'Qawwali', 'Ghazal', 'Devotional', 'Indie', 'Metal',
      'Sufi', 'Regional Folk'
    ],
    lookingFor: [
      'Lead Vocalist', 'Backing Vocalist', 'Lead Guitarist', 'Rhythm Guitarist', 'Bassist', 
      'Drummer', 'Tabla Player', 'Mridangam Player', 'Flutist', 'Sitar Player', 'Keyboardist',
      'Music Producer', 'Songwriter', 'Band Manager', 'Harmonium Player', 'Violinist',
      'Dholak Player', 'Sarangi Player', 'DJ', 'Sound Engineer', 'Percussionist'
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    locations: [
      'Mumbai, Maharashtra', 'Delhi, Delhi', 'Bangalore, Karnataka', 'Chennai, Tamil Nadu', 
      'Kolkata, West Bengal', 'Hyderabad, Telangana', 'Pune, Maharashtra', 'Ahmedabad, Gujarat',
      'Jaipur, Rajasthan', 'Lucknow, Uttar Pradesh', 'Kochi, Kerala', 'Goa, Goa',
      'Chandigarh, Punjab', 'Indore, Madhya Pradesh', 'Bhopal, Madhya Pradesh', 'Coimbatore, Tamil Nadu'
    ]
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const RadioCard = ({ options, field, icons }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {options.map((option, i) => (
        <label key={option} className="relative cursor-pointer group">
          <input 
            type="radio" 
            name={field} 
            value={option} 
            checked={formData[field] === option}
            onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))} 
            className="sr-only" 
          />
          <div className={`p-8 rounded-2xl border-2 transition-all duration-300 text-center transform hover:scale-105 ${
            formData[field] === option 
              ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg scale-105 ring-2 ring-orange-200' 
              : 'border-gray-200 hover:border-orange-300 hover:shadow-md bg-white hover:bg-orange-50/30'
          }`}>
            {icons?.[i] && React.createElement(icons[i], { 
              className: `w-10 h-10 mx-auto mb-4 ${formData[field] === option ? 'text-orange-500' : 'text-gray-400 group-hover:text-orange-400'}` 
            })}
            <span className={`font-semibold text-xl ${formData[field] === option ? 'text-orange-600' : 'text-gray-700'}`}>{option}</span>
          </div>
        </label>
      ))}
    </div>
  );

  const CheckboxGrid = ({ options, field }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredOptions = options.filter(option => 
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
      <div>
        <div className="mb-6">
          <input
            type="text"
            placeholder={`Search ${field}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-80 overflow-y-auto">
          {filteredOptions.map(option => (
            <label key={option} className="flex items-center p-3 rounded-xl hover:bg-orange-50 cursor-pointer transition-all duration-200 border border-transparent hover:border-orange-200 group">
              <input 
                type="checkbox" 
                checked={formData[field].includes(option)} 
                onChange={() => handleCheckboxChange(field, option)} 
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400 flex-shrink-0" 
              />
              <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-orange-600 leading-tight">{option}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const LocationSelect = () => (
    <div className="space-y-4">
      <select 
        value={formData.location} 
        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-lg transition-all duration-300 bg-white"
      >
        <option value="">Select your city...</option>
        {data.locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      
      <div className="text-center">
        <p className="text-gray-500 text-sm mb-2">Don't see your city?</p>
        <input 
          type="text" 
          placeholder="Enter your city manually"
          value={formData.location.includes(',') ? '' : formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 bg-white"
        />
      </div>
    </div>
  );

  const questions = [
    {
      id: 'name',
      icon: User, 
      title: "What should we call you?", 
      required: true,
      content: (
        <input 
          type="text" 
          value={formData.displayName} 
          onChange={(e) => setFormData(prev => ({ ...prev, displayName: e.target.value }))} 
          className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-lg transition-all duration-300 bg-white" 
          placeholder="Enter your display name"
          autoFocus
        />
      ),
      isValid: () => formData.displayName.trim().length > 0
    },
    {
      id: 'location',
      icon: MapPin, 
      title: "Where are you located?", 
      required: true,
      content: <LocationSelect />,
      isValid: () => formData.location.trim().length > 0
    },
    {
      id: 'type',
      icon: Music, 
      title: "What describes you best?", 
      required: true,
      content: <RadioCard options={['Vocalist', 'Musician']} field="userType" icons={[Mic, Guitar]} />,
      isValid: () => formData.userType !== ''
    },
    {
      id: 'skills',
      icon: Target, 
      title: formData.userType === 'Vocalist' ? 'Which genres do you sing?' : 'What instruments do you play?', 
      required: true,
      content: <CheckboxGrid 
        options={formData.userType === 'Vocalist' ? data.genres : data.instruments} 
        field={formData.userType === 'Vocalist' ? 'genres' : 'instruments'}
      />,
      isValid: () => formData.userType === 'Vocalist' ? formData.genres.length > 0 : formData.instruments.length > 0,
      show: () => formData.userType !== ''
    },
    {
      id: 'level',
      icon: TrendingUp, 
      title: "What's your experience level?", 
      required: true,
      content: <RadioCard options={data.levels} field="level" />,
      isValid: () => formData.level !== ''
    },
    {
      id: 'looking',
      icon: Users, 
      title: "Who are you looking to connect with?", 
      required: true,
      content: <CheckboxGrid options={data.lookingFor} field="lookingFor" />,
      isValid: () => formData.lookingFor.length > 0
    },
    {
      id: 'demo',
      icon: Upload, 
      title: "Show off your talent", 
      required: false,
      content: (
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-orange-300 transition-all duration-300 hover:bg-orange-50/30">
          <Upload className="w-14 h-14 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 mb-6 text-lg">Upload audio or video demo (optional)</p>
          <input 
            type="file" 
            accept="audio/*,video/*" 
            onChange={(e) => setFormData(prev => ({ ...prev, demo: e.target.files[0] }))} 
            className="hidden" 
            id="demo-upload" 
          />
          <label 
            htmlFor="demo-upload" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 rounded-2xl cursor-pointer font-semibold text-orange-600 transition-all duration-300 hover:scale-105"
          >
            Choose File
          </label>
          {formData.demo && (
            <p className="mt-4 text-sm text-green-600 font-medium flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              {formData.demo.name}
            </p>
          )}
        </div>
      ),
      isValid: () => true
    }
  ];

  const visibleQuestions = questions.filter(q => !q.show || q.show());
  const currentQ = visibleQuestions[currentStep];
  const canProceed = currentQ?.isValid() || false;
  const isLastStep = currentStep === visibleQuestions.length - 1;

  const handleNext = async () => {
    if (!canProceed) return;
    
    setIsAnimating(true);
    
    if (isLastStep) {
      console.log('Form submitted:', formData);
      alert('Profile submitted successfully! 🎵 Welcome to BandMate!');
    } else {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Floating Musical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-opacity-60 animate-${['pulse', 'bounce', 'ping'][i % 3]}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: ['#60a5fa', '#f97316', '#ef4444', '#8b5cf6', '#06b6d4'][i % 5]
            }}
          >
            {i % 2 === 0 ? <Sparkles className="w-4 h-4" /> : <Music className="w-3 h-3" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 pt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Music className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-5xl font-bold">
              <span className="text-orange-500">Band</span>
              <span className="text-gray-800">Mate</span>
            </h1>
          </div>
          <p className="text-gray-600 text-xl mb-2">Set up your profile</p>
          <p className="text-orange-500 text-lg font-medium">find your sound, join the band.</p>
          
          {/* Progress Bar */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-3">
              {visibleQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index < currentStep 
                      ? 'bg-green-500 scale-110' 
                      : index === currentStep 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Question Card */}
        {currentQ && (
          <div className={`mb-8 transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-orange-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                  <currentQ.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{currentQ.title}</h2>
                {currentQ.required && <span className="text-red-500 text-2xl">*</span>}
              </div>
              {currentQ.content}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0 || isAnimating}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              currentStep === 0 || isAnimating
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 shadow-md border border-gray-200'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="text-center">
            <p className="text-gray-500 text-lg">
              {currentStep + 1} of {visibleQuestions.length}
            </p>
          </div>

          <button
            onClick={handleNext}
            disabled={!canProceed || isAnimating}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              !canProceed || isAnimating
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : isLastStep
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:scale-105 shadow-lg'
                  : 'bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 hover:scale-105 shadow-lg'
            }`}
          >
            {isLastStep ? (
              <>
                <Check className="w-5 h-5" />
                Join BandMate
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Footer tagline */}
        <div className="text-center mt-12 opacity-60">
          <p className="text-gray-500 italic">Ready to make some music? 🎵</p>
        </div>
      </div>
    </div>
  );
};

export default UserSetup;