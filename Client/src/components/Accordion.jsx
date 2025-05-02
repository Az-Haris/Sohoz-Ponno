import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionContext = createContext();

const Accordion = ({ children, value, onChange, ...props }) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [onChange, selected]);

  return (
    <ul {...props} className="max-w-2xl mx-auto space-y-5">
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
};

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="border border-primary/50 rounded-md" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center text-text p-5 text-xl font-semibold cursor-pointer"
      >
        {trigger}
        <IoIosArrowDown
          className={`text-2xl transition-transform text-primary ${
            open ? "rotate-180" : ""
          }`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all duration-300"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-4 p-5 text-lg text-text/80" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}

export default Accordion;
