import { Button } from "@/components/ui/button";

const CustomButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <Button
      onClick={onClick}
      className={`mt-6 text-lg py-4 bg-blue-600 hover:bg-blue-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;