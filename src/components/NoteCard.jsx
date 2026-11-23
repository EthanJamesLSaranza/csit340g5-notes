import { useState } from 'react'

function NoteCard({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h3 className="text-lg font-medium text-[#08060d] mb-2">{title}</h3>
      
      {isExpanded && (
        <p className="text-base text-[#6b6375] mb-4 whitespace-pre-wrap">{body}</p>
      )}

      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="cursor-pointer text-sm text-[#b83f45] hover:underline focus:outline-none"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  )
}

export default NoteCard