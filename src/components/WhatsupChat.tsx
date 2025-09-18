import { useEffect } from "react";

const WhatsAppChat = () => {
  useEffect(() => {
    // Create and append the script to the document
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => {
      // You can also handle additional logic here once the script is loaded
      console.log("Elfsight WhatsApp Chat script loaded successfully");
    };
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="elfsight-app-f527674b-2ea6-4f7b-9cac-db0d9c47ec3b"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default WhatsAppChat;
