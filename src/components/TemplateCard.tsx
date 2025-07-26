import React from "react";
import { getGiveCommand, sendTemplate } from "../ts/functions";
import toast from "react-hot-toast";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  template_data: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, template_data }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(template_data);
  };

function copyToClipboard(title: string, data: string) {
  navigator.clipboard.writeText(getGiveCommand(title, data));
  toast.success("Copied /give command to clipboard!");
}

  return (
    <div className="p-6 bg-zinc-800 rounded-xl flex items-center justify-between shadow-lg hover:ring-1 hover:ring-zinc-700 transition duration-200">
      <div className="flex-1">
        <div className="flex items-center flex-wrap gap-3 mb-2">
          <h2 className="text-3xl text-white font-bold mr-3">{title}</h2>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li key={index} className="bg-neutral-700 text-stone-300 px-3 py-1 rounded-md text-sm">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-200 mt-2">{description}</p>
      </div>
      <div className="flex flex-col items-end">
        <button
          className="ml-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition duration-200 cursor-pointer"
          onClick={() => sendTemplate(title, template_data)}
        >
          Send to CodeClient
        </button>
        <button
          className="ml-6 mt-2 bg-neutral-600 hover:bg-neutral-700 text-stone-300 font-medium px-4 py-1 rounded-md shadow transition duration-200 text-sm cursor-pointer"
          onClick={() => 
            copyToClipboard(title, template_data)
          }
        >
          Copy /give
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;