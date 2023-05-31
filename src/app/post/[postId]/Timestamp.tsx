"use client";

type Props = {
  timestamp: number;
};

export function Timestamp({ timestamp }: Props) {
  const date = new Date(timestamp).toLocaleTimeString(
    window.navigator.language,
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }
  );

  return <p>{date}</p>;
}
