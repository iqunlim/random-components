import { Button } from "@/components/ui/button";

export default function PageIframe({ src, gh }: { src: string; gh?: string }) {
  return (
    <div className="h-[calc(100vh-200px)] w-full rounded-md px-5">
      <div className="my-2 flex gap-2">
        <Button variant="ghost">
          <a href={src}>View directly on the website</a>
        </Button>
        {gh && (
          <Button variant="ghost">
            <a href={gh} target="#">
              View source code for this page
            </a>
          </Button>
        )}
      </div>
      <iframe className="h-full w-full" src={src}></iframe>
    </div>
  );
}
