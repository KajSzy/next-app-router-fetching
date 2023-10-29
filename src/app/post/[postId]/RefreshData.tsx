"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { refreshPost } from "./refreshPost.action";
import { PostPageProps } from "./params";
import { useState } from "react";

export const RefreshData = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams<PostPageProps["params"]>();

  const handleClick = async () => {
    if (loading || !params?.postId) {
      return;
    }
    setLoading(true);
    await refreshPost(params.postId);
    setLoading(false);
  };

  return (
    <div className="flex justify-between">
      <Button disabled={loading} onClick={handleClick}>
        {loading ? "Loading..." : "Refresh Data"}
      </Button>
    </div>
  );
};
