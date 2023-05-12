"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const RefreshData = () => {
  const router = useRouter();

  const handleClick = async () => {
    await fetch(`/api/pages/revalidate?path=${window.location.pathname}`);

    router.refresh();
  };

  return (
    <div className="flex justify-between">
      <Button onClick={handleClick}>Refresh data</Button>
    </div>
  );
};
