import React, { useEffect } from "react";
import { BotMessageSquare } from "lucide-react";

const AiBot = () => {
  // Handle opening the widget
  const handleVisibleChange = () => {
    const searchWidget = document.querySelector("gen-search-widget") as any;
    if (searchWidget) {
      searchWidget.open(); // Open the widget
    }
  };

  // Dynamically load the external script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_US";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      {/* Dynamically loaded search widget */}
      {React.createElement("gen-search-widget", {
        configId: "b0fd6ce0-18b5-481f-90a6-974335cad8cc",
        triggerId: "searchWidgetTrigger",
      })}

      {/* Fixed Bot Button to open widget */}
      <div className="z-50 fixed right-5 bottom-24 flex justify-center items-center flex-col gap-2">
        <BotMessageSquare
          size={64}
          onClick={handleVisibleChange}
          className="text-blue-500 bg-gray-800 rounded-full p-2 cursor-pointer hover:ring-cyan-200 hover:ring-4 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AiBot;
