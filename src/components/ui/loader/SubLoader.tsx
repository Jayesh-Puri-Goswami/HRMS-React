import { Loader as LoadingIcon } from "lucide-react";
import { SubLoaderProps } from "../../../types/Loader";

function SubLoader({
  size = 24,
  color = "text-indigo-600",
  text = "loading ...",
}: SubLoaderProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <LoadingIcon
        size={size}
        className={`text-indigo-600 dark:text-white animate-spin mb-4 ${color}`}
      />
      <h2 className="text-xl font-medium text-gray-700"> {text} </h2>
    </div>
  );
}

export default SubLoader;
