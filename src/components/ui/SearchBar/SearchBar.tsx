import { Search, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { staticLinks } from '../../../config/staticLinks';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const clear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      navigate(`${staticLinks.search}?q=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-full w-64 transition-all duration-300
        bg-slate-100 dark:bg-slate-700
        border-2
        ${
          focused
            ? 'border-slate-500 dark:border-slate-400 w-80 shadow-md'
            : 'border-transparent'
        }
      `}
    >
      <button type="submit" className="shrink-0">
        <Search
          size={16}
          className={`transition-colors duration-200 ${
            focused
              ? 'text-slate-700 dark:text-slate-200'
              : 'text-slate-400 dark:text-slate-400'
          }`}
        />
      </button>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search movies, series..."
        className="bg-transparent outline-none text-sm w-full text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />
      {value && (
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={clear}
          className="shrink-0 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-150"
        >
          <X size={14} />
        </button>
      )}
    </form>
  );
};
