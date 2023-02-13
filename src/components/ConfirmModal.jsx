import React from "react";

export default function ConfirmModal({ handleDelete, setShowPopup }) {
  return (
    <div class="rounded-lg bg-white p-8 shadow-2xl max-w-lg mx-auto absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
      <h2 class="text-lg font-bold">Are you sure you want to do that?</h2>

      {/* <p class="mt-2 text-sm text-gray-500">
        Are you sure you want to delete ?
      </p> */}

      <div class="mt-8 flex items-center justify-end text-xs">
        <button
          onClick={handleDelete}
          type="button"
          class="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
        >
          Yes, I'm sure
        </button>
        <button
          onClick={() => setShowPopup(false)}
          type="button"
          class="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
        >
          No, go back
        </button>
      </div>
    </div>
  );
}
