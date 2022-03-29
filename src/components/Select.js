import { Transition } from "@headlessui/react";

export default function Select({ itemNumber, changeItemNumber }) {
  return (
    <Transition
      show={true}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <select
        value={itemNumber}
        onChange={changeItemNumber}
        className="w-full p-2 bg-white font-indigo-600 border border-gray-300 rounded-md"
      >
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </Transition>
  );
}
