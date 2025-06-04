// components/common/Card.tsx

import React from 'react';
import { type CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
}
