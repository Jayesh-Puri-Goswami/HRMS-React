import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Search, Check } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  disabled?: boolean;
  className?: string;
  maxHeight?: string;
  label?: string;
  error?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  isMulti = false,
  isSearchable = false,
  disabled = false,
  className = "",
  maxHeight = "200px",
  label,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
            handleOptionClick(filteredOptions[focusedIndex].value);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex]);

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [focusedIndex]);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle option selection
  const handleOptionClick = (optionValue: string) => {
    if (isMulti) {
      const currentValues = Array.isArray(value) ? value : [];
      if (currentValues.includes(optionValue)) {
        onChange(currentValues.filter(v => v !== optionValue));
      } else {
        onChange([...currentValues, optionValue]);
      }
    } else {
      onChange(optionValue);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  // Remove selected option (multi-select)
  const removeOption = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMulti && Array.isArray(value)) {
      onChange(value.filter(v => v !== optionValue));
    }
  };

  // Get display value
  const getDisplayValue = () => {
    if (isMulti && Array.isArray(value)) {
      return value.length > 0 ? `${value.length} selected` : placeholder;
    } else if (!isMulti && value) {
      const selectedOption = options.find(opt => opt.value === value);
      return selectedOption ? selectedOption.label : placeholder;
    }
    return placeholder;
  };

  // Check if option is selected
  const isSelected = (optionValue: string) => {
    if (isMulti && Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Label with enhanced styling */}
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 tracking-wide">
          {label}
        </label>
      )}
      
      {/* Selected values display for multi-select with glass effect */}
      {isMulti && Array.isArray(value) && value.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {value.map(val => {
            const option = options.find(opt => opt.value === val);
            return option ? (
              <span
                key={val}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100/80 dark:bg-indigo-900/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium transition-all duration-200 hover:bg-indigo-200/80 dark:hover:bg-indigo-800/40"
              >
                {option.label}
                <button
                  onClick={(e) => removeOption(val, e)}
                  className="ml-2 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors duration-150 hover:scale-110"
                >
                  <X size={14} />
                </button>
              </span>
            ) : null;
          })}
        </div>
      )}

      {/* Dropdown trigger with glass effect */}
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-3.5 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md 
          border border-gray-200/20 dark:border-white/10 rounded-xl 
          text-gray-700 dark:text-gray-200 cursor-pointer 
          focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
          flex items-center justify-between
          transition-all duration-300 ease-in-out
          shadow-lg hover:shadow-xl
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/[0.08] dark:hover:bg-white/[0.08] hover:border-indigo-400/30'}
          ${error ? 'ring-2 ring-red-500/50 border-red-500/50' : ''}
          ${isOpen ? 'ring-2 ring-indigo-500/50 border-indigo-500/50 bg-white/[0.08] dark:bg-white/[0.08]' : ''}
        `}
      >
        <span className={`${
          value ? 'text-gray-900 dark:text-gray-100 font-medium' : 'text-gray-500 dark:text-gray-400'
        } transition-colors duration-200`}>
          {getDisplayValue()}
        </span>
        <ChevronDown
          size={18}
          className={`transition-all duration-300 text-indigo-500 dark:text-indigo-400 ${
            isOpen ? 'rotate-180 scale-110' : ''
          }`}
        />
      </div>

      {/* Dropdown menu with enhanced glass effect */}
      {isOpen && (
        <div
          className="absolute z-50 w-full mt-2 bg-white/[0.08] dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/20 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden"
          style={{ maxHeight }}
        >
          {/* Search input with glass styling */}
          {isSearchable && (
            <div className="p-4 border-b border-gray-200/20 dark:border-white/10 bg-white/[0.05] dark:bg-white/[0.02]">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 dark:text-indigo-300"
                />
                <input
                  type="text"
                  placeholder="Search options..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200/30 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
                />
              </div>
            </div>
          )}

          {/* Options list with enhanced interactions */}
          <div className="max-h-48 overflow-y-auto custom-scrollbar">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
                <Search size={24} className="mx-auto mb-2 opacity-50" />
                No options found
              </div>
            ) : (
              filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  ref={(el) => { optionRefs.current[index] = el || null; }}
                  onClick={() => handleOptionClick(option.value)}
                  className={`
                    px-4 py-3 cursor-pointer flex items-center justify-between
                    transition-all duration-200 ease-in-out
                    ${focusedIndex === index ? 'bg-indigo-50/80 dark:bg-indigo-900/30 backdrop-blur-sm' : ''}
                    ${isSelected(option.value) 
                      ? 'bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium backdrop-blur-sm' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-indigo-50/60 dark:hover:bg-indigo-900/20 hover:backdrop-blur-sm'
                    }
                  `}
                >
                  <span className="flex-1">{option.label}</span>
                  {isSelected(option.value) && (
                    <Check 
                      size={16} 
                      className="text-indigo-600 dark:text-indigo-400 animate-in fade-in duration-200" 
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Error message with enhanced styling */}
      {error && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400 font-medium animate-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
