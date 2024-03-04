import React, { ChangeEvent, Dispatch, DragEvent, SetStateAction } from "react";
import { Node } from "reactflow";

interface SidebarProps {
  nodeName: string;
  setNodeName: Dispatch<SetStateAction<string>>;
  selectedNode: Node | null;
  setSelectedElements: Dispatch<SetStateAction<Node[] | null>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  nodeName,
  setNodeName,
  selectedNode,
  setSelectedElements,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNodeName(event.target.value);
  };

  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-r-2 border-blue-200 p-4 text-sm bg-blue-100 w-64 h-screen text-black">
      {selectedNode ? (
        // Settings panel
        <div>
          <div className="flex items-center mb-4">
            <button
              className="mr-2 focus:outline-none"
              onClick={() => setSelectedElements([])}
            >
              <svg
                className="w-6 h-6 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 11H7.414l4.293-4.293a1 1 0 10-1.414-1.414l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L7.414 13H20a1 1 0 000-2z" />
              </svg>
            </button>
            <h3 className="text-lg text-blue-900">Message</h3>
          </div>
          <div className="border-b-2 border-blue-300 mb-4"></div>
          <label className="block mb-2 text-sm font-medium text-blue-900">
            Text
          </label>
          <textarea
            className="block w-full pt-2 px-3 pb-3 text-gray-700 border border-blue-300 rounded-lg bg-white focus:outline-none focus:border-blue-500"
            value={nodeName}
            onChange={handleInputChange}
            rows={3}
          />
        </div>
      ) : (
        // Node panel
        <>
          <h3 className="text-xl mb-4 text-blue-900">Nodes Panel</h3>
          <div
            className="bg-white p-3 border-2 border-blue-500 rounded cursor-move flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200"
            onDragStart={(event) => onDragStart(event, "textnode")}
            draggable
          >
            Message Node
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
