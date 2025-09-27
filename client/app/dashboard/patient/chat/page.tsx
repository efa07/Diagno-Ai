"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { FileUp, ArrowUpIcon, Stethoscope, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DiagnoAIChat() {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        // TODO: hook this into your AI backend
        console.log("Sending message:", value);
        setValue("");
        adjustHeight(true);
      }
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-4 p-6 rounded-xl bg-white dark:from-card-dark dark:to-background-dark shadow-lg backdrop-blur-lg border border-gray-300 dark:border-gray-700">
      <h1 className="text-foreground text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
        talk to Diagno
      </h1>
      <p className="text-center text-sm text-muted-foreground">
        Ask health questions, review prescriptions, or get AI recommendations.
      </p>

      <div className="w-full">
        {/* Chat Input Box */}
        <div className="relative rounded-xl border border-border bg-secondary/20">
          <div className="overflow-y-auto">
            <Textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type your health question..."
              className={cn(
                "w-full px-4 py-3 resize-none bg-transparent border-none text-sm focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground min-h-[60px]"
              )}
              style={{ overflow: "hidden" }}
            />
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="group hover:bg-secondary/50 flex items-center gap-1 rounded-lg p-2"
              >
                <FileUp className="h-4 w-4" />
                <span className="hidden text-xs transition-opacity group-hover:inline">
                  Upload
                </span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={cn(
                  "border-border flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                  value.trim()
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                )}
                disabled={!value.trim()}
              >
                <ArrowUpIcon className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="-mx-4 mt-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex flex-col flex-wrap items-start gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:overflow-x-auto sm:pb-2">
            <ActionButton icon={<Stethoscope className="h-4 w-4" />} label="Ask about symptoms" />
            <ActionButton icon={<Pill className="h-4 w-4" />} label="Review prescriptions" />
            <ActionButton icon={<FileUp className="h-4 w-4" />} label="Upload lab results" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <Button
      type="button"
      variant="secondary"
      className="border-border bg-secondary/30 hover:bg-secondary/40 flex w-full flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2 whitespace-nowrap transition-colors sm:w-auto"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
}

export default DiagnoAIChat;
