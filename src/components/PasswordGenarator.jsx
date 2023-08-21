import React, { useState, useEffect } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { AiOutlineReload } from "react-icons/ai";
import { GeneratePassword } from "../controllers/functions";

function PasswordGenarator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includes, setIncludes] = useState({
    symbols: true,
    numbers: true,
    lowercase: true,
    uppercase: true,
    similar: true,
  });

  const handelChange = () => setPassword(GeneratePassword(length, includes));

  useEffect(() => {
    handelChange();
  }, [length, includes]);

  return (
    <div>
      <div className="relative flex gap-3 items-center mb-4">
        <input
          className="w-full p-2 border-2 border-gray-600 rounded-md shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
          value={password}
          type="text"
          name="password"
          id="password"
          readOnly
          min="6"
          max="32"
          steps="1"
        />

        <button
          className="w-10 h-10 p-2 border-2 border-gray-600 rounded-full hover:bg-gray-600 transition-all duration-2"
          onClick={() => navigator.clipboard.writeText(password)}
        >
          <HiOutlineClipboardCopy size={20} />
        </button>
        <button
          className="absolute right-0 top-[50px] w-10 h-10 grid p-2 border-2 border-gray-600 rounded-full z-10 hover:bg-gray-600 transition-all duration-2"
          onClick={handelChange}
        >
          <AiOutlineReload size={20} />
        </button>
      </div>

      <div className=" flex gap-3">
        <input
          type="range"
          name="length"
          id="length"
          defaultValue={length}
          min="6"
          max="32"
          onChange={(e) => setLength(e.target.value)}
        />
        <span id="lengthText">{length}</span> Characters
      </div>

      <div className=" flex gap-3">
        <input
          type="checkbox"
          name="symbols"
          id="symbols"
          defaultValue="true"
          defaultChecked
          onClick={() =>
            setIncludes({ ...includes, symbols: !includes.symbols })
          }
        />
        <label htmlFor="symbols">
          <strong>Include Symbols</strong> (@#$%)
        </label>
      </div>

      <div className=" flex gap-3">
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          defaultChecked
          onClick={() =>
            setIncludes({ ...includes, numbers: !includes.numbers })
          }
        />
        <label htmlFor="numbers">
          <strong>Include Numbers</strong> (1234)
        </label>
      </div>

      <div className=" flex gap-3">
        <input
          type="checkbox"
          name="lowercase"
          id="lowercase"
          defaultChecked
          onClick={() =>
            setIncludes({ ...includes, lowercase: !includes.lowercase })
          }
        />
        <label htmlFor="lowercase">
          <strong>Include Lowercase Characters</strong> (abcd)
        </label>
      </div>

      <div className=" flex gap-3">
        <input
          type="checkbox"
          name="uppercase"
          id="uppercase"
          defaultChecked
          onClick={() =>
            setIncludes({ ...includes, uppercase: !includes.uppercase })
          }
        />
        <label htmlFor="uppercase">
          <strong>Include Uppercase Characters</strong> (ABCD)
        </label>
      </div>

      <div className=" flex gap-3">
        <input
          type="checkbox"
          name="similar"
          id="similar"
          defaultChecked
          onClick={() =>
            setIncludes({ ...includes, similar: !includes.similar })
          }
        />
        <label htmlFor="similar">
          <strong>Include Similar Characters</strong> (i, l, 1, L, o, 0, O)
        </label>
      </div>
    </div>
  );
}

export default PasswordGenarator;
