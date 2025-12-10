import { cn } from "@/lib/utils";

export default function Input({ className, ...props }: any) {
  return (
    <input
      className={cn(
        "p-4 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder-gray-500 focus:border-purple-400 outline-none",
        className
      )}
      {...props}
    />
  );
}
