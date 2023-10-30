"use client";

import React from "react";

type Props = {
  date: Date;
};

export function Time({ date }: Props) {
  return <>{date.toLocaleTimeString()}</>;
}
